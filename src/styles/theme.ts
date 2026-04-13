export const colors = {
  primary: "slate-950",
  accent: "indigo-500",
  accentHover: "indigo-600",
  surface: "slate-50",
  muted: "slate-600",
  border: "slate-200",
  white: "white",
  dark: "slate-900",
} as const;

export const spacing = {
  section: "py-20 md:py-28",
  container: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
} as const;

export const typography = {
  display: "text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl",
  h1: "text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
  h2: "text-2xl font-semibold tracking-tight sm:text-3xl",
  h3: "text-xl font-semibold tracking-tight sm:text-2xl",
  h4: "text-lg font-semibold tracking-tight",
  bodyLg: "text-lg text-slate-600",
  body: "text-base text-slate-600",
  caption: "text-sm text-slate-500",
} as const;
