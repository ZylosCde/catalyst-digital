import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-indigo-500 text-white hover:bg-indigo-600 focus-visible:ring-indigo-500",
  outline:
    "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
} as const;

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
} as const;

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
