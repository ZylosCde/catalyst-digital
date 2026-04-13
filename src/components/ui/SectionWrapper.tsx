import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { spacing } from "@/styles/theme";

interface SectionWrapperProps {
  id?: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  dark = false,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing.section,
        dark ? "bg-slate-950 text-white" : "bg-white text-slate-900",
        className
      )}
    >
      <div className={spacing.container}>{children}</div>
    </section>
  );
}
