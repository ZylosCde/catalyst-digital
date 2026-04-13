export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  tags: string[];
  coverImage: string;
  author: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCase {
  id: string;
  category: string;
  title: string;
  resultTag: string;
}

export interface CaseStudyMetric {
  id: string;
  label: string;
  value: string;
}

export interface ResultPillar {
  id: string;
  title: string;
  description: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
