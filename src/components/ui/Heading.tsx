import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/theme";

const sizeClasses = {
  display: typography.display,
  h1: typography.h1,
  h2: typography.h2,
  h3: typography.h3,
  h4: typography.h4,
} as const;

type HeadingSize = keyof typeof sizeClasses;
type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingTag;
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
}

export function Heading({
  as: Tag = "h2",
  size = "h2",
  className,
  children,
}: HeadingProps) {
  return <Tag className={cn(sizeClasses[size], className)}>{children}</Tag>;
}
