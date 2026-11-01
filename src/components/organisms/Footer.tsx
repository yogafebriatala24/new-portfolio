import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/atoms/SocialIcons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
              <Image
                src="/img/logo.png"
                alt="Yoga Febriatala"
                fill
                sizes="32px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                Yoga Febriatala
              </span>
              <span className="text-xs text-slate-400">
                Software Engineer • {PERSONAL_INFO.shortLocation}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © 2026 Yoga Febriatala. All rights reserved.
          </p>

          <a
            href="#top"
            className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
