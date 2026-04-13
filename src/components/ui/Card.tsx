import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        hover && "transition-shadow hover:shadow-lg",
        className
      )}
    >
      {children}
    </article>
  );
}
