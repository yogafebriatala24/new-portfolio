"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BreezySidebar } from "@/components/organisms/BreezySidebar";
import { BreezyNavigation, BreezyTab } from "@/components/organisms/BreezyNavigation";
import { BreezyAboutTab } from "@/components/organisms/tabs/BreezyAboutTab";
import { BreezyResumeTab } from "@/components/organisms/tabs/BreezyResumeTab";
import { BreezyPortfolioTab } from "@/components/organisms/tabs/BreezyPortfolioTab";
import { BreezyBlogTab } from "@/components/organisms/tabs/BreezyBlogTab";
import { BreezyContactTab } from "@/components/organisms/tabs/BreezyContactTab";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, User, GraduationCap, Briefcase, BookOpen, Mail } from "lucide-react";

export const BreezyPortfolioLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BreezyTab>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync hash if present in URL
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "about" ||
        hash === "about-me" ||
        hash === "resume" ||
        hash === "portfolio" ||
        hash === "blog" ||
        hash === "contact"
      ) {
        if (hash === "about-me") setActiveTab("about");
        else setActiveTab(hash as BreezyTab);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabChange = (tab: BreezyTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.location.hash = tab === "about" ? "about-me" : tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navList = [
    { id: "about" as BreezyTab, label: "About Me", icon: <User className="w-5 h-5" /> },
    { id: "resume" as BreezyTab, label: "Resume", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "portfolio" as BreezyTab, label: "Portfolio", icon: <Briefcase className="w-5 h-5" /> },
    { id: "blog" as BreezyTab, label: "Blog & Trail", icon: <BookOpen className="w-5 h-5" /> },
    { id: "contact" as BreezyTab, label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#1f2229] flex flex-col justify-center items-center py-0 lg:py-10 px-0 sm:px-6 lg:px-12 relative overflow-x-hidden">
      {/* Mobile Top Header Bar (Only visible < 1024px) */}
      <div className="lg:hidden w-full sticky top-0 z-50 bg-[#272a33] border-b border-white/10 px-4 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#0ba376]">
            <Image
              src="/profile.png"
              alt="Yoga Febriatala"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="text-white font-bold text-sm tracking-tight">
            {PERSONAL_INFO.name}
          </span>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 rounded-full bg-[#0ba376] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Overlay Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] z-40 bg-[#1f2229]/95 backdrop-blur-xl p-6 flex flex-col gap-4 animate-fadeIn border-t border-white/10">
          <div className="text-xs uppercase font-mono tracking-widest text-[#0ba376] font-semibold mb-2">
            Navigation Menu
          </div>
          {navList.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#0ba376] text-white shadow-lg shadow-[#0ba376]/30"
                    : "text-slate-300 hover:text-white bg-white/5 hover:bg-white/10"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Page Layout Wrapper */}
      <div className="relative w-full max-w-[1280px] xl:max-w-[1340px] flex items-center">
        {/* Main Card Container */}
        <div className="w-full min-h-screen lg:min-h-[82vh] lg:h-[82vh] lg:rounded-[32px] bg-[#272a33] shadow-2xl shadow-black/80 flex flex-col lg:flex-row overflow-hidden border-0 lg:border border-white/5 relative">
          {/* Left Emerald Sidebar */}
          <BreezySidebar onNavigateContact={() => handleTabChange("contact")} />

          {/* Right Scrollable Content Area */}
          <main className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto custom-scrollbar relative bg-[#272a33]">
            {activeTab === "about" && (
              <BreezyAboutTab onNavigateContact={() => handleTabChange("contact")} />
            )}
            {activeTab === "resume" && <BreezyResumeTab />}
            {activeTab === "portfolio" && <BreezyPortfolioTab />}
            {activeTab === "blog" && <BreezyBlogTab />}
            {activeTab === "contact" && <BreezyContactTab />}
          </main>
        </div>

        {/* Desktop Vertical Menu (Attached right next to the card container, exactly like BreezyCV) */}
        <div className="hidden lg:block absolute -right-16 xl:-right-20 top-8 z-30">
          <BreezyNavigation
            activeTab={activeTab}
            onChangeTab={handleTabChange}
          />
        </div>
      </div>
    </div>
  );
};
