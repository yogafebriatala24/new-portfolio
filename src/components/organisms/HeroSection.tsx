import React from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  Sparkles,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { GithubIcon, LinkedinIcon } from "@/components/atoms/SocialIcons";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-slate-800/80">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status pill & Location */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <Badge variant="success" size="md" className="gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>#OPENTOWORK 2026</span>
              </Badge>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Greeting & Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
                {PERSONAL_INFO.name}.
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              {PERSONAL_INFO.headline}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div className="text-lg sm:text-xl font-extrabold text-white">
                  {PERSONAL_INFO.stats.experience}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Engineering Exp.
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div className="text-lg sm:text-xl font-extrabold text-white">
                  {PERSONAL_INFO.stats.projects}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Web Projects
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div className="text-lg sm:text-xl font-extrabold text-white">
                  {PERSONAL_INFO.stats.organizations}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Leadership Trails
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                icon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Hire Me / Contact
              </Button>
              <Button
                variant="outline"
                size="md"
                href={PERSONAL_INFO.cvUrl}
                external
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
              <div className="flex items-center gap-2 ml-auto sm:ml-2">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Identity Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-900/80 border border-slate-700/60 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/profile.png"
                    alt="Yoga Febriatala"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top filter contrast-[1.05]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-semibold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        BNSP Certified Programmer
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      Telkom Indonesia • Ex-Lead PT Epsindo Jaya Pratama
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
