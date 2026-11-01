import React from "react";
import Image from "next/image";

interface SkillPillProps {
  name: string;
  icon?: string;
  level?: string;
  className?: string;
}

export const SkillPill: React.FC<SkillPillProps> = ({
  name,
  icon,
  level,
  className = "",
}) => {
  return (
    <div
      className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-600/80 hover:bg-slate-800/60 transition-all duration-200 ${className}`}
    >
      {icon ? (
        <div className="relative w-5 h-5 shrink-0 flex items-center justify-center">
          <Image
            src={icon}
            alt={name}
            width={20}
            height={20}
            className="w-5 h-5 object-contain filter group-hover:brightness-110 transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <span className="w-2 h-2 rounded-full bg-blue-500/80 group-hover:bg-blue-400" />
      )}
      <div className="flex flex-col text-left">
        <span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
          {name}
        </span>
        {level && (
          <span className="text-[10px] text-slate-500 font-mono tracking-tight group-hover:text-slate-400">
            {level}
          </span>
        )}
      </div>
    </div>
  );
};
