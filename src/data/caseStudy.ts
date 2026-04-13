import type { CaseStudyMetric } from "@/types";

export const featuredCaseStudy = {
  id: "logicore-global",
  eyebrow: "Featured transformation",
  title: "Revolutionizing LogiCore Global Infrastructure",
  description:
    "We redesigned the backbone of a multi-region platform to improve reliability, delivery speed, and global operational visibility.",
  image: "/images/work/logicore.jpg",
  ctaHref: "/work/logicore-global-infrastructure",
} as const;

export const featuredCaseStudyMetrics: CaseStudyMetric[] = [
  { id: "efficiency", label: "Efficiency Increase", value: "40%" },
  { id: "uptime", label: "Platform Uptime", value: "99.99%" },
];
