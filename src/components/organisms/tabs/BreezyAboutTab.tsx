"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_INFO, WORK_VALUES, SKILLS_LIST } from "@/data/portfolioData";
import { MapPin, Mail, Download, Code2, Server, Wrench, Cpu } from "lucide-react";

interface BreezyAboutProps {
  onNavigateContact: () => void;
}

export const BreezyAboutTab: React.FC<BreezyAboutProps> = ({ onNavigateContact }) => {
  const [profileData, setProfileData] = useState(PERSONAL_INFO);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.name) {
          setProfileData(data);
        }
      })
      .catch(() => console.log("Using static profile fallback"));
  }, []);

  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-[#0ba376]" />,
      skills: [
        { name: "TypeScript", icon: "/icon/ts.svg" },
        { name: "JavaScript (ES6+)", icon: "/icon/js.svg" },
        { name: "React.js", icon: "/icon/react.svg" },
        { name: "Next.js", icon: "/icon/next.svg" },
        { name: "Tailwind CSS", icon: "/icon/tailwind.svg" },
        { name: "Redux / Zustand", icon: "/icon/redux.svg" },
        { name: "HTML5 & Modern CSS", icon: "/icon/html.svg" },
        { name: "Bootstrap", icon: "/icon/bootstrap.svg" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-5 h-5 text-[#0ba376]" />,
      skills: [
        { name: "Python & FastAPI", icon: "/icon/stack.svg" },
        { name: "PHP & Laravel", icon: "/icon/Laravel.svg" },
        { name: "Node.js & Express", icon: "/icon/node.svg" },
        { name: "Rust & Axum", icon: "/icon/stack.svg" },
        { name: "MySQL", icon: "/icon/stack.svg" },
        { name: "PostgreSQL", icon: "/icon/stack.svg" },
        { name: "MongoDB Atlas", icon: "/icon/stack.svg" },
        { name: "RESTful API & GraphQL", icon: "/icon/stack.svg" },
      ],
    },
    {
      title: "Architecture & Engineering Practices",
      icon: <Cpu className="w-5 h-5 text-[#0ba376]" />,
      skills: [
        { name: "Scalable Web Architecture", icon: "/icon/stack.svg" },
        { name: "Microservices & Microfrontends", icon: "/icon/stack.svg" },
        { name: "PWA (Offline-First)", icon: "/icon/stack.svg" },
        { name: "High-Concurrency Optimization", icon: "/icon/stack.svg" },
        { name: "Clean Code & Code Review", icon: "/icon/stack.svg" },
        { name: "Network Security & SLA", icon: "/icon/stack.svg" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5 text-[#0ba376]" />,
      skills: [
        { name: "Git & GitHub Workflow", icon: "/icon/git.svg" },
        { name: "Figma UI/UX Prototyping", icon: "/icon/figma.svg" },
        { name: "Cloudinary CDN", icon: "/icon/stack.svg" },
        { name: "Vercel Deployment", icon: "/icon/next.svg" },
        { name: "Photoshop & Illustrator", icon: "/icon/ps.svg" },
      ],
    },
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Intro banner */}
      <div className="pb-8 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#0ba376]/20 border border-[#0ba376]/40 text-[#0ba376] text-xs font-semibold uppercase tracking-wider">
            Available For Hire
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            {profileData.location || PERSONAL_INFO.location}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Software Engineer & Web Developer
        </h2>

        <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
          {profileData.bio || PERSONAL_INFO.bio}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onNavigateContact}
            className="px-6 py-2.5 rounded-full bg-[#0ba376] hover:bg-[#088b64] text-white font-semibold text-sm shadow-lg shadow-[#0ba376]/25 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
          <a
            href={profileData.cvUrl || PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>

      {/* Technologies & Tech Stack Section */}
      <div>
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight breezy-title-heading">
            Technologies & Skills
          </h3>
          <p className="text-xs text-slate-400 mt-2">
            Kumpulan teknologi, framework, dan metodologi rekayasa perangkat lunak yang saya kuasai dan terapkan dalam pekerjaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#22252c] border border-white/5 hover:border-[#0ba376]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-[#0ba376]/15">
                    {group.icon}
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {group.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1c1e24] border border-white/5 hover:border-[#0ba376]/40 hover:bg-white/5 transition-all"
                    >
                      {skill.icon && (
                        <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                      )}
                      <span className="text-xs text-slate-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Principles / Work Ethics */}
      <div>
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight breezy-title-heading">
            Work Principles
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#22252c] border border-white/5 text-center flex flex-col items-center"
            >
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={val.icon}
                  alt={val.title}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
