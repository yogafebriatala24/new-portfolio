import React from "react";
import { PUBLICATIONS, ORGANIZATIONS } from "@/data/portfolioData";
import { BookOpen, Users2, ShieldCheck, ExternalLink } from "lucide-react";

export const BreezyBlogTab: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Title */}
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-3xl font-extrabold text-white breezy-title-heading">
          Blog & Leadership Trail
        </h2>
        <p className="text-xs text-slate-400 mt-2">
          Publikasi karya ilmiah, artikel opini teknologi, serta rekam jejak kepemimpinan organisasi kemasyarakatan.
        </p>
      </div>

      {/* Publications Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0ba376]/20 text-[#0ba376] border border-[#0ba376]/30">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Publications & Articles</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#22252c] border border-white/5 hover:border-[#0ba376]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#0ba376] block mb-2">
                  {pub.platform} • {pub.date}
                </span>
                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {pub.title}
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  {pub.type}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-emerald-400">Read Research / Article</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organization Trail */}
      <div className="pt-8 border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0ba376]/20 text-[#0ba376] border border-[#0ba376]/30">
            <Users2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Leadership & Organizations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORGANIZATIONS.map((org, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#22252c] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#0ba376] bg-[#0ba376]/15 px-2.5 py-0.5 rounded-full inline-block mb-3">
                  {org.period}
                </span>
                <h4 className="text-base font-bold text-white mb-1">
                  {org.role}
                </h4>
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  {org.organization}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {org.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0ba376]" />
                Impact & Governance
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
