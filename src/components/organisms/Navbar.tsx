"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/atoms/Button";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Credentials", href: "#credentials" },
    { name: "Organization", href: "#organization" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-slate-700/80 bg-slate-900 group-hover:border-blue-500 transition-colors">
              <Image
                src="/img/logo.png"
                alt="Yoga Febriatala"
                fill
                sizes="36px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                yogafebriatala
              </span>
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/70 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={PERSONAL_INFO.cvUrl}
              external
              className="text-xs"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Resume / CV
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="text-xs"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              href={PERSONAL_INFO.cvUrl}
              external
              className="w-full text-xs"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Download Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-xs"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
