# CLAUDE.md — Architecture & Coding Guide

> This file is automatically read by Claude and Cursor before writing any code.
> Read it fully before touching any file. It defines the rules of this codebase.

---

## What this project is

An IT company portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

It has 6 public pages: **Home, Services, Work, About, Blog, Contact** — each composed of 5–6 sections.

The codebase is split into **5 strict layers**. Every file belongs to exactly one layer. A layer may only import from layers **below** it — never from the same layer sideways, and never from a layer above.

---

## The 5-Layer Rule (memorise this)

```
Layer 5 — app/           → routes only, zero business logic
Layer 4 — sections/      → page sections, assembled from features
Layer 3 — components/features/  → domain components, built from primitives
Layer 2 — components/ui/ → primitives, zero domain knowledge
Layer 1 — styles, types, data, config, lib, hooks  → pure, no React, no JSX
```

**If you are about to import from a higher-numbered layer into a lower one — stop. You are breaking the architecture.**

Example of what is NOT allowed:
- A `components/ui/Button.tsx` importing from `sections/` — violation
- A `data/services.ts` importing from `components/` — violation
- A `sections/home/HeroSection.tsx` importing from `app/` — violation

---

## Full folder map

```
src/
├── app/                          ← Layer 5
│   ├── layout.tsx                    Root layout: Navbar, Footer, metadata
│   ├── page.tsx                      Home page — imports sections only
│   ├── about/page.tsx                About page
│   ├── services/page.tsx             Services page
│   ├── services/[slug]/page.tsx      Individual service detail
│   ├── work/page.tsx                 Work/portfolio page
│   ├── work/[slug]/page.tsx          Case study detail
│   ├── blog/page.tsx                 Blog listing
│   ├── blog/[slug]/page.tsx          Blog post detail
│   ├── contact/page.tsx              Contact page
│   ├── api/contact/route.ts          Contact form API handler
│   ├── globals.css                   Tailwind directives only
│   ├── favicon.ico
│   └── loading.tsx / error.tsx       Global suspense and error UI
│
├── sections/                     ← Layer 4
│   ├── home/                         Sections used only on the Home page
│   ├── services/                     Sections used only on the Services page
│   ├── work/                         Sections used only on the Work page
│   ├── about/                        Sections used only on the About page
│   ├── blog/                         Sections used only on the Blog page
│   ├── contact/                      Sections used only on the Contact page
│   └── _shared/                      Sections reused across multiple pages
│
├── components/                   ← Layers 2 & 3
│   ├── ui/                           Layer 2 — primitives
│   ├── features/                     Layer 3 — domain components
│   └── layout/                       Navbar and Footer
│
├── styles/
│   └── theme.ts                  ← Layer 1 — all design tokens
│
├── types/
│   └── index.ts                  ← Layer 1 — all TypeScript interfaces
│
├── data/                         ← Layer 1 — static content
│   ├── services.ts
│   ├── projects.ts
│   ├── team.ts
│   └── posts.ts
│
├── config/                       ← Layer 1 — site-wide constants
│   ├── site.ts
│   └── nav.ts
│
├── lib/                          ← Layer 1 — pure utility functions
│   ├── utils.ts
│   └── fetcher.ts
│
└── hooks/                        ← Layer 1 — client-side hooks, no JSX
    ├── useScrollAnimation.ts
    └── useMediaQuery.ts
```

---

## Layer 1 — Foundation

> Files here have zero imports from React or Next.js (with the exception of hooks which may import `useState`, `useEffect`). No JSX. No components.

### `src/styles/theme.ts`

**Single source of truth for every color, spacing value, and font used in the project.**
Tailwind classes are derived from these tokens. If a color or spacing value is hardcoded anywhere in a component, that is a bug.

```ts
export const colors = {
  primary:   '#0F172A',
  accent:    '#6366F1',
  accentHov: '#4F46E5',
  surface:   '#F8FAFC',
  muted:     '#64748B',
  border:    '#E2E8F0',
  white:     '#FFFFFF',
} as const

export const spacing = {
  section:   'py-20 md:py-28',
  container: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
} as const
```

### `src/types/index.ts`

**All shared TypeScript interfaces live here.** Never duplicate a type. If a type is used in more than one file, it must be defined here.

Key interfaces:
- `Service` — id, title, description, icon, slug
- `Project` — id, title, description, tags, image, slug
- `TeamMember` — id, name, role, image, linkedin
- `BlogPost` — id, title, excerpt, slug, date, tags, coverImage

### `src/data/`

**Static content files.** Each file exports a typed array. These will be replaced by CMS calls in the future — that is why they are isolated here. Do not scatter content strings into components.

- `services.ts` — exports `Service[]`
- `projects.ts` — exports `Project[]`
- `team.ts` — exports `TeamMember[]`
- `posts.ts` — exports `BlogPost[]`

### `src/config/site.ts`

**Site-wide constants.** Company name, URL, email, social links. Used in metadata and footer. Import this instead of hardcoding strings.

```ts
export const siteConfig = {
  name:    'CompanyName',
  tagline: 'We build digital products.',
  url:     'https://example.com',
  email:   'hello@example.com',
  social:  { linkedin: '...', github: '...' },
} as const
```

### `src/config/nav.ts`

**Navigation items array.** Used by Navbar. Edit this file to change the nav — never hardcode nav links inside components.

### `src/lib/utils.ts`

**Pure utility functions.** The `cn()` helper (clsx + tailwind-merge) lives here. Add any other stateless helpers here.

### `src/hooks/`

**Custom React hooks only.** No JSX, no component rendering. Hooks here are client-side utilities like `useScrollAnimation` and `useMediaQuery`.

---

## Layer 2 — UI Primitives (`src/components/ui/`)

> These components have **zero domain knowledge**. They do not know what a "service" or a "blog post" is. They only know about visual props: size, variant, children.

**Rules for this layer:**
- No imports from `sections/`, `features/`, `data/`, or `config/`
- Props are generic: `children`, `variant`, `size`, `className`, `href`
- All styling comes from `theme.ts` tokens via Tailwind classes
- Every component is exported as a named export (not default)

### Key files to build:

**`Button.tsx`** — one component, all variants. Props: `variant` (primary | outline | ghost), `size` (sm | md | lg), `href` (renders as `<Link>` if provided). Interns never create a new button — they use this one.

**`Card.tsx`** — generic surface container. Props: `children`, `className`, `hover` (adds hover shadow).

**`Heading.tsx`** — enforces typographic hierarchy. Props: `as` (h1–h4), `size`, `children`. Prevents arbitrary font-size usage.

**`Badge.tsx`** — small label pill. Props: `children`, `variant` (default | accent | muted).

**`Input.tsx`** — form input with label and error state.

**`Textarea.tsx`** — form textarea with label and error state.

**`SectionWrapper.tsx`** — **the most important component in the codebase**. Every section on every page wraps in this. It applies consistent `py-20 md:py-28` vertical padding and `max-w-6xl` container. Props: `id` (scroll anchor), `dark` (dark background variant), `className`.

```tsx
// Every section looks like this:
<SectionWrapper id="hero" dark>
  {/* section content */}
</SectionWrapper>
```

---

## Layer 3 — Feature Components (`src/components/features/`)

> These components **know about the domain** (services, projects, team members, blog posts) but are reusable across sections. They compose from `components/ui/` primitives.

**Rules for this layer:**
- May import from `components/ui/` and `types/`
- May NOT import from `sections/` or `app/`
- Each component receives data via props — it never fetches its own data
- Props are typed against interfaces from `types/index.ts`

### Key files:

- `ServiceCard.tsx` — receives a `Service` prop, renders a card
- `ProjectCard.tsx` — receives a `Project` prop, renders a case study card
- `TeamCard.tsx` — receives a `TeamMember` prop, renders a team member card
- `BlogCard.tsx` — receives a `BlogPost` prop, renders a post preview
- `StatsCounter.tsx` — animated number counter, receives `value` and `label`
- `ContactForm.tsx` — full contact form with validation, posts to `/api/contact`

### `src/components/layout/`

- `Navbar.tsx` — reads nav items from `config/nav.ts`, handles mobile menu
- `Footer.tsx` — reads from `config/site.ts` and `config/nav.ts`

---

## Layer 4 — Sections (`src/sections/`)

> Sections are the building blocks of pages. Each section is a self-contained React Server Component that composes feature components and primitives into a full page section.

**Rules for this layer:**
- Always wrap content in `<SectionWrapper>`
- May import from `components/ui/`, `components/features/`, `data/`, `config/`, `types/`
- May NOT import from `app/` or other sections (except `_shared/`)
- Sections fetch/import their own data from `data/` — they are not passed data from the page
- Each section file exports one named component

**Naming convention:** `[SectionName]Section.tsx` — always suffix with `Section`.

### Page section breakdown:

```
sections/home/
  HeroSection.tsx          — headline, CTA buttons, hero visual
  StatsSection.tsx         — animated numbers (clients, projects, years)
  ServicesOverviewSection.tsx — brief cards linking to /services
  ClientsSection.tsx       — logo strip of client logos
  TestimonialsSection.tsx  — quote carousel or grid
  CTASection.tsx           — bottom call-to-action banner

sections/services/
  ServicesHeroSection.tsx  — page headline and intro
  ServicesGridSection.tsx  — all ServiceCard components
  ProcessSection.tsx       — step-by-step how we work
  TechStackSection.tsx     — technology icons/badges
  FaqSection.tsx           — accordion FAQ

sections/work/
  WorkHeroSection.tsx      — page headline
  ProjectsGridSection.tsx  — all ProjectCard components with optional filter
  CaseStudySection.tsx     — featured single project detail
  ResultsSection.tsx       — stats/outcomes from work

sections/about/
  AboutHeroSection.tsx     — headline and company intro
  MissionSection.tsx       — mission and values
  TeamSection.tsx          — all TeamCard components
  TimelineSection.tsx      — company history
  CultureSection.tsx       — photos and culture description

sections/blog/
  BlogHeroSection.tsx      — page headline
  FeaturedPostSection.tsx  — single featured BlogCard (large)
  PostsGridSection.tsx     — all BlogCard components
  TagsFilterSection.tsx    — tag-based filtering

sections/contact/
  ContactHeroSection.tsx   — headline and intro text
  ContactFormSection.tsx   — ContactForm component + contact details
  OfficeSection.tsx        — office location / map

sections/_shared/
  CTABannerSection.tsx     — "Let's work together" banner, used on most pages
  TechStackSection.tsx     — reused on Home and Services
  TestimonialsSection.tsx  — reused on Home and About
  NewsletterSection.tsx    — email signup, used on Blog and Contact
```

---

## Layer 5 — App Routes (`src/app/`)

> Page files are intentionally empty of logic. They are **just an ordered list of section imports**. Nothing else.

**Rules for this layer:**
- `page.tsx` files import sections and render them in order — no logic
- All metadata goes in `generateMetadata()` using `config/site.ts`
- `layout.tsx` wraps with Navbar and Footer
- Never import from `data/` directly in a page — sections handle that

```tsx
// This is what every page.tsx looks like. This is the entire file.
import { WorkHeroSection }     from '@/sections/work/WorkHeroSection'
import { ProjectsGridSection } from '@/sections/work/ProjectsGridSection'
import { ResultsSection }      from '@/sections/work/ResultsSection'
import { TestimonialsSection } from '@/sections/_shared/TestimonialsSection'
import { CTABannerSection }    from '@/sections/_shared/CTABannerSection'

export default function WorkPage() {
  return (
    <>
      <WorkHeroSection />
      <ProjectsGridSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTABannerSection />
    </>
  )
}
```

---

## Coding conventions

### Imports — always use the `@/` alias

```ts
// Correct
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

// Never use relative paths that go up more than one level
import { Button } from '../../../components/ui/Button'  // wrong
```

### Exports — named exports only

```ts
// Correct
export function HeroSection() { ... }

// Never use default exports in this project
export default function HeroSection() { ... }  // wrong
```

### Components — Server Components by default

All sections and most feature components are React Server Components (no `'use client'`). Only add `'use client'` when the component:
- Uses `useState` or `useEffect`
- Has event handlers (onClick, onChange)
- Uses browser APIs

```tsx
'use client'  // only add this if actually needed
```

### TypeScript — strict, no `any`

- Every function parameter and return value must be typed
- Use interfaces from `types/index.ts` for domain objects
- Props interfaces are defined in the same file as the component

```tsx
interface ServiceCardProps {
  service: Service  // imported from '@/types'
}

export function ServiceCard({ service }: ServiceCardProps) { ... }
```

### Styling — Tailwind only, no inline styles

```tsx
// Correct
<div className="flex items-center gap-4 px-6 py-3">

// Wrong — no inline styles
<div style={{ display: 'flex', gap: '16px' }}>
```

Use the `cn()` utility from `@/lib/utils` for conditional classes:

```tsx
import { cn } from '@/lib/utils'

<div className={cn('base-classes', condition && 'conditional-class', className)}>
```

---

## Where each kind of task goes

| Task | Where to put it |
|------|----------------|
| Change a color or spacing value | `src/styles/theme.ts` |
| Add a nav link | `src/config/nav.ts` |
| Change company name or email | `src/config/site.ts` |
| Add a new service card item | `src/data/services.ts` |
| Add a team member | `src/data/team.ts` |
| Add a blog post | `src/data/posts.ts` |
| Create a new button style | `src/components/ui/Button.tsx` (add variant) |
| Create a new reusable card | `src/components/features/` |
| Create a new page section | `src/sections/[page]/` |
| Create a section used on 2+ pages | `src/sections/_shared/` |
| Add a new page | `src/app/[page]/page.tsx` |
| Handle a form submission | `src/app/api/[route]/route.ts` |
| Add a utility function | `src/lib/utils.ts` |
| Add a custom hook | `src/hooks/` |

---

## What NOT to do

- **Do not create a new Button component** anywhere in the codebase. Add a variant to `components/ui/Button.tsx` instead.
- **Do not hardcode colors** as hex values in components. Use Tailwind classes that map to the design tokens.
- **Do not put content strings** (company descriptions, service descriptions) inside components. They go in `data/`.
- **Do not put logic** inside `app/*/page.tsx`. Pages are section lists only.
- **Do not create a component** that does not belong to a clear layer. Ask: is this a primitive, a feature, or a section?
- **Do not add `'use client'`** without a concrete reason. Server Components are the default.
- **Do not skip `SectionWrapper`** when building a section. Every section uses it.
- **Do not write sections that import other sections.** Only pages import sections.

---

## Build order for new features

Always build bottom-up:

1. Define the TypeScript type in `types/index.ts`
2. Add the data to the relevant file in `data/`
3. Build or extend the UI primitive in `components/ui/` if needed
4. Build the feature component in `components/features/`
5. Build the section in `sections/[page]/`
6. Import the section into `app/[page]/page.tsx`

---

## Tech stack reference

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 | Framework, App Router |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Styling |
| clsx | latest | Conditional class names |
| tailwind-merge | latest | Merge Tailwind classes safely |

---

## File naming rules

| Type | Convention | Example |
|------|-----------|---------|
| Page sections | PascalCase + Section suffix | `HeroSection.tsx` |
| UI primitives | PascalCase | `Button.tsx` |
| Feature components | PascalCase | `ServiceCard.tsx` |
| Hooks | camelCase + use prefix | `useScrollAnimation.ts` |
| Data files | camelCase | `services.ts` |
| Config files | camelCase | `site.ts` |
| Utility files | camelCase | `utils.ts` |

---

*Last updated: refer to git history for changes. If you are an AI agent, follow these rules exactly. Do not improvise folder names or bypass the layer contract.*