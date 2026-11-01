"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  EXPERIENCES as STATIC_EXPERIENCES,
  EDUCATION_LIST,
  CERTIFICATIONS,
  Experience,
} from "@/data/portfolioData";
import { GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";

export const BreezyResumeTab: React.FC = () => {
  const [experiencesList, setExperiencesList] = useState<Experience[]>(STATIC_EXPERIENCES);

  useEffect(() => {
    fetch("/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setExperiencesList(data);
        }
      })
      .catch(() => console.log("Using static experiences fallback"));
  }, []);

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Page Title */}
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-3xl font-extrabold text-white breezy-title-heading">
          Resume
        </h2>
      </div>

      {/* 1. EXPERIENCE SECTION (Full Width / Di Atas) */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0ba376]/20 text-[#0ba376] border border-[#0ba376]/30">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Experience</h3>
            <p className="text-xs text-slate-400">Riwayat karir profesional & kepemimpinan rekayasa perangkat lunak</p>
          </div>
        </div>

        <div className="space-y-6 relative border-l-2 border-white/10 pl-6 ml-3">
          {experiencesList.map((exp, idx) => {
            const isCurrent =
              exp.period?.toLowerCase().includes("saat ini") ||
              exp.period?.toLowerCase().includes("present") ||
              exp.period?.toLowerCase().includes("current");

            return (
              <div key={idx} className="relative group">
                {/* Timeline bullet dot */}
                <span
                  className={`absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full border-2 border-[#272a33] transition-all ${
                    isCurrent
                      ? "bg-[#0ba376] ring-4 ring-[#0ba376]/25 animate-pulse"
                      : "bg-slate-600 group-hover:bg-slate-500"
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    isCurrent
                      ? "bg-[#22252c] border-2 border-[#0ba376]/60 shadow-lg shadow-[#0ba376]/10"
                      : "bg-[#22252c]/70 border border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-md font-mono ${
                          isCurrent
                            ? "bg-[#0ba376]/20 text-[#0ba376] border border-[#0ba376]/40 font-bold"
                            : "bg-white/5 text-slate-400 border border-white/5"
                        }`}
                      >
                        {exp.period}
                      </span>

                      {isCurrent && (
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Aktif Sekarang
                        </span>
                      )}
                    </div>

                    {exp.type && (
                      <span className="text-[11px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10 font-mono">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    {exp.companyLogo && (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1.5 shrink-0 border border-slate-200 shadow-sm flex items-center justify-center">
                        <Image
                          src={exp.companyLogo}
                          alt={exp.company}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h4
                        className={`text-lg font-bold ${
                          isCurrent ? "text-white" : "text-slate-200"
                        }`}
                      >
                        {exp.role}
                      </h4>
                      <p
                        className={`text-sm font-semibold ${
                          isCurrent ? "text-[#0ba376]" : "text-slate-400"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description?.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                      >
                        <span
                          className={`mt-1 text-base leading-none ${
                            isCurrent ? "text-[#0ba376]" : "text-slate-500"
                          }`}
                        >
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.tags?.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md ${
                          isCurrent
                            ? "bg-[#0ba376]/10 text-emerald-200 border border-[#0ba376]/20"
                            : "bg-white/5 text-slate-400"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. EDUCATION SECTION (Horizontal di Bawah Experience) */}
      <div className="pt-8 border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0ba376]/20 text-[#0ba376] border border-[#0ba376]/30">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Education</h3>
            <p className="text-xs text-slate-400">Latar belakang akademis formal</p>
          </div>
        </div>

        {/* Horizontal grid for Education items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#22252c] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0ba376]/15 text-[#0ba376] font-mono">
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="text-xs font-mono font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      IPK: {edu.gpa}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-sm text-emerald-400 font-semibold mb-3">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>

              {edu.achievements && (
                <div className="space-y-2 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Penghargaan & Aktivitas:
                  </span>
                  {edu.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0ba376] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. CERTIFICATIONS SECTION */}
      <div className="pt-8 border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0ba376]/20 text-[#0ba376] border border-[#0ba376]/30">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Certifications & Credentials</h3>
            <p className="text-xs text-slate-400">Sertifikasi kompetensi resmi negara & kursus terakreditasi</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#22252c] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#0ba376] block mb-1">
                  {cert.issuer}
                </span>
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {cert.name}
                </h4>
              </div>
              <div className="pt-3 border-t border-white/5 text-xs text-slate-400">
                <span className="text-[10px] text-slate-500 block mb-0.5">
                  {cert.period}
                </span>
                {cert.skills}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
