import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 border border-blue-400/20",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/80 shadow-sm",
    outline:
      "bg-slate-900/40 hover:bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-slate-500",
    ghost:
      "text-slate-400 hover:text-white hover:bg-slate-800/50",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
