"use client";

import React from "react";
import { User, GraduationCap, Briefcase, BookOpen, Mail } from "lucide-react";

export type BreezyTab = "about" | "resume" | "portfolio" | "blog" | "contact";

interface BreezyNavigationProps {
  activeTab: BreezyTab;
  onChangeTab: (tab: BreezyTab) => void;
  className?: string;
}

export const BreezyNavigation: React.FC<BreezyNavigationProps> = ({
  activeTab,
  onChangeTab,
  className = "",
}) => {
  const navItems: { id: BreezyTab; label: string; icon: React.ReactNode }[] = [
    { id: "about", label: "About Me", icon: <User className="w-5 h-5" /> },
    { id: "resume", label: "Resume", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "portfolio", label: "Portfolio", icon: <Briefcase className="w-5 h-5" /> },
    { id: "blog", label: "Blog & Trail", icon: <BookOpen className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <ul className={`flex flex-col gap-2 p-2 bg-[#444] rounded-full shadow-2xl border border-white/5 list-none ${className}`}>
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <li key={item.id} className="relative group">
            <button
              onClick={() => onChangeTab(item.id)}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[#0ba376] text-white shadow-lg shadow-[#0ba376]/40 scale-105"
                  : "text-[#b5b6b7] hover:text-white hover:bg-white/10"
              }`}
              title={item.label}
              aria-label={item.label}
            >
              {item.icon}
            </button>

            {/* BreezyCV Tooltip to the right */}
            <span className="hidden xl:block absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-[#222] text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xl border border-white/10 z-50">
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
