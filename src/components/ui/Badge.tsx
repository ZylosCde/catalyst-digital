import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "bg-slate-100 text-slate-700",
  accent: "bg-indigo-100 text-indigo-700",
  muted: "bg-slate-200 text-slate-600",
} as const;

type BadgeVariant = keyof typeof badgeVariants;

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
