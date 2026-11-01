import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      {label && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
