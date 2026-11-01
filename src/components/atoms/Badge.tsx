import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "accent" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  className = "",
}) => {
  const baseStyles = "inline-flex items-center font-mono font-medium tracking-tight rounded-md transition-colors";
  
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-600",
    success: "bg-emerald-950/40 text-emerald-300 border border-emerald-500/30",
    accent: "bg-blue-950/40 text-blue-300 border border-blue-500/30",
    outline: "bg-transparent text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
