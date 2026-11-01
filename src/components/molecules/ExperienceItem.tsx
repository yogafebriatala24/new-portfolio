import React from "react";
import { Experience } from "@/data/portfolioData";
import { Badge } from "@/components/atoms/Badge";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-6 sm:pl-8 pb-10 last:pb-2 group">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-px bg-slate-800 group-last:hidden group-hover:bg-blue-600/50 transition-colors" />

      {/* Timeline bullet */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-slate-700 bg-slate-950 group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-300" />

      <div className="p-5 sm:p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {experience.role}
              </h3>
              {experience.type && (
                <Badge variant="outline" size="sm">
                  {experience.type}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-3 mt-1 text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Building2 className="w-3.5 h-3.5" />
                {experience.company}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/40 w-fit">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {experience.period}
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2.5 my-4">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-emerald-500/80 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
          {experience.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 border border-slate-700/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
