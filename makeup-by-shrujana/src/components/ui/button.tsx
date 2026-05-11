import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  href,
  external,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2";

  const variants = {
    primary:   "bg-rose-600 text-white hover:bg-rose-700 shadow-sm",
    secondary: "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100",
    outline:   "border border-stone-300 text-stone-700 hover:border-rose-400 hover:text-rose-600 bg-transparent",
    ghost:     "text-stone-600 hover:text-rose-600 hover:bg-rose-50 bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{children}</a>;
    }
    return <Link href={href} className={cls} {...(props as any)}>{children}</Link>;
  }

  return (
    <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement> as any)}>
      {children}
    </button>
  );
}
