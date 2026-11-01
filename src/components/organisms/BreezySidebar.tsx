import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/atoms/SocialIcons";
import { Download } from "lucide-react";

interface BreezySidebarProps {
  onNavigateContact?: () => void;
}

export const BreezySidebar: React.FC<BreezySidebarProps> = () => {
  return (
    <aside className="w-full lg:w-[350px] xl:w-[380px] bg-[#0ba376] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between items-center text-center shrink-0 rounded-2xl lg:rounded-tr-none lg:rounded-l-3xl shadow-xl z-20 transition-all">
      {/* Top / Profile section */}
      <div className="w-full flex flex-col items-center">
        {/* Photo with round frame and border */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full p-1.5 sm:p-2 border-4 border-white/20 bg-white/10 shadow-2xl mb-4 sm:mb-6">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/30">
            <Image
              src="/profile.png"
              alt={PERSONAL_INFO.name}
              fill
              sizes="(max-width: 768px) 150px, 220px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-1.5 sm:mb-2">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-emerald-100 tracking-wide mb-4 sm:mb-6">
          {PERSONAL_INFO.headline}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-8">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/15 hover:bg-black/30 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/15 hover:bg-black/30 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/15 hover:bg-black/30 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>

      {/* Bottom section: Action buttons & Copyright */}
      <div className="w-full flex flex-col items-center gap-3 mt-1 sm:mt-4">
        <a
          href={PERSONAL_INFO.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[220px] sm:max-w-[240px] py-2.5 sm:py-3 px-5 sm:px-6 rounded-full bg-white text-[#0ba376] font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:bg-emerald-50 hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>

        <div className="text-[11px] sm:text-xs text-white/70 font-normal">
          © 2026 {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </aside>
  );
};
