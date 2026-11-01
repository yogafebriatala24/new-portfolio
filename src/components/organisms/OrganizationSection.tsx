import React from "react";
import { ORGANIZATIONS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Users2, Calendar, ShieldCheck } from "lucide-react";

export const OrganizationSection: React.FC = () => {
  return (
    <section id="organization" className="py-20 md:py-28 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Leadership Trail"
          title="Pengalaman Organisasi & Kepemimpinan"
          subtitle="Mengasah kecakapan komunikasi, kepemimpinan tim, serta tanggung jawab sosial kemasyarakatan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORGANIZATIONS.map((org, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-900/40">
                    {org.period}
                  </span>
                  <Users2 className="w-4 h-4 text-slate-500" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {org.role}
                </h3>
                <h4 className="text-xs font-semibold text-slate-300 mb-3">
                  {org.organization}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {org.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Kepemimpinan & Dampak Sosial
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
