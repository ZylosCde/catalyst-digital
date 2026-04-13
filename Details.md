Project Details and Atomic Naming Plan

Reference architecture and layer rules: `CLAUDE.md`

Core pages (6):
- Home
- Services
- Work
- About
- Blog
- Contact

---

Global Layout Pieces (shared across all pages)

- `components/layout/Navbar.tsx`
  - `NavBrand`
  - `NavLinks`
  - `NavPrimaryCta`
  - `MobileNavToggle`
  - `MobileNavPanel`

- `components/layout/Footer.tsx`
  - `FooterBrandBlock`
  - `FooterCompanyLinks`
  - `FooterContactLinks`
  - `FooterLegalLinks`
  - `FooterSocialLinks`
  - `FooterCopyright`

- `sections/_shared/CTABannerSection.tsx`
  - `CTABannerEyebrow` (optional)
  - `CTABannerHeading`
  - `CTABannerDescription`
  - `CTABannerPrimaryButton`

---

Home Page (from image)

- `sections/home/HeroSection.tsx`
  - `HeroEyebrow`
  - `HeroHeading`
  - `HeroDescription`
  - `HeroPrimaryCta`
  - `HeroSecondaryCta`
  - `HeroVisualCard`

- `sections/home/StatsSection.tsx`
  - `StatsGrid`
  - `StatItemProjects`
  - `StatItemYears`
  - `StatItemSatisfaction`
  - `StatItemRevenueImpact`

- `sections/home/ServicesOverviewSection.tsx`
  - `ServicesOverviewHeader`
  - `ServicesOverviewGrid`
  - `ServicePreviewCard` (x6)

- `sections/home/TeamPreviewSection.tsx`
  - `TeamPreviewHeading`
  - `TeamPreviewDescription`
  - `TeamPreviewGrid`
  - `TeamPreviewCard` (x4)
  - `TeamPreviewFooterCta`

- `sections/home/ClientsSection.tsx`
  - `ClientsSectionHeading`
  - `ClientsLogoStrip`

- `sections/_shared/CTABannerSection.tsx`

---

Services Page (from image)

- `sections/services/ServicesHeroSection.tsx`
  - `ServicesHeroEyebrow`
  - `ServicesHeroHeading`
  - `ServicesHeroDescription`

- `sections/services/ServicesGridSection.tsx`
  - `ServicesGrid`
  - `ServiceCard` (x6)
  - `ServiceCardIcon`
  - `ServiceCardTitle`
  - `ServiceCardDescription`
  - `ServiceCardLink`

- `sections/services/ServicesInActionSection.tsx`
  - `ServicesInActionHeader`
  - `ServicesInActionCtaLink`
  - `ServicesInActionGrid`
  - `ServicesInActionCaseCard` (x4)

- `sections/_shared/CTABannerSection.tsx`

---

Work Page (from image)

- `sections/work/WorkHeroSection.tsx`
  - `WorkHeroEyebrow`
  - `WorkHeroHeading`
  - `WorkHeroDescription`

- `sections/work/ProjectsFilterSection.tsx`
  - `ProjectFilterTabs`
  - `ProjectFilterTabItem`

- `sections/work/ProjectsGridSection.tsx`
  - `ProjectsGrid`
  - `ProjectCard` (x6)
  - `ProjectCardImage`
  - `ProjectCardMeta`
  - `ProjectCardTitle`
  - `ProjectCardDescription`
  - `ProjectCardCta`

- `sections/work/CaseStudySection.tsx`
  - `CaseStudyEyebrow`
  - `CaseStudyHeading`
  - `CaseStudyDescription`
  - `CaseStudyMetricsRow`
  - `CaseStudyPrimaryCta`
  - `CaseStudyImage`

- `sections/work/ResultsSection.tsx`
  - `ResultsPillarGrid`
  - `ResultsPillarItem`

- `sections/_shared/CTABannerSection.tsx`

---

About Page (from image)

- `sections/about/AboutHeroSection.tsx`
  - `AboutHeroEyebrow`
  - `AboutHeroHeading`
  - `AboutHeroDescription`

- `sections/about/TimelineSection.tsx`
  - `TimelineHeading`
  - `TimelineSubheading`
  - `TimelineRail`
  - `TimelineMilestoneCard` (x4)

- `sections/about/TeamSection.tsx`
  - `TeamSectionHeading`
  - `TeamSectionDescription`
  - `TeamRoleFilterTabs`
  - `TeamGrid`
  - `TeamCard` (x4)

- `sections/about/ValuesSection.tsx`
  - `ValuesHeading`
  - `ValuesDescription`
  - `ValuesGrid`
  - `ValueCard` (x3)

- `sections/about/StatsSection.tsx`
  - `StatsRow`
  - `StatItem` (x4)

- `sections/_shared/CTABannerSection.tsx`

---

Blog Page (from image)

- `sections/blog/BlogHeroSection.tsx`
  - `BlogHeroEyebrow`
  - `BlogHeroHeading`
  - `BlogHeroDescription`
  - `BlogSearchBar`

- `sections/blog/FeaturedPostSection.tsx`
  - `FeaturedPostCard`
  - `FeaturedPostImage`
  - `FeaturedPostMeta`
  - `FeaturedPostTitle`
  - `FeaturedPostExcerpt`
  - `FeaturedPostAuthor`
  - `FeaturedPostReadLink`

- `sections/blog/PostsGridSection.tsx`
  - `PostsGrid`
  - `BlogPostCard` (multiple)
  - `BlogPostCardImage`
  - `BlogPostCardMeta`
  - `BlogPostCardTitle`
  - `BlogPostCardExcerpt`
  - `BlogPostCardAuthor`

- `sections/blog/BlogSidebarSection.tsx`
  - `CategoriesWidget`
  - `NewsletterWidget`
  - `PopularTagsWidget`

- `sections/blog/LoadMoreSection.tsx`
  - `LoadMoreButton`
  - `LoadMoreMetaText`

- `sections/_shared/CTABannerSection.tsx`

---

Contact Page (from image)

- `sections/contact/ContactHeroSection.tsx`
  - `ContactHeroEyebrow`
  - `ContactHeroHeading`
  - `ContactHeroDescription`

- `sections/contact/ContactFormSection.tsx`
  - `ContactFormHeader`
  - `ContactFormGrid`
  - `ContactFormNameField`
  - `ContactFormEmailField`
  - `ContactFormCompanyField`
  - `ContactFormMessageField`
  - `ContactFormSubmitButton`
  - `ContactFormConsentNote`

- `sections/contact/ContactDetailsSection.tsx`
  - `ContactDetailsTitle`
  - `ContactEmailItem`
  - `ContactPhoneItem`
  - `ContactLocationItem`

- `sections/contact/OfficeSection.tsx`
  - `OfficeCard`
  - `OfficeMapVisual`
  - `OfficeAddressBadge`

- `sections/contact/TrustSection.tsx`
  - `TrustBadgeCard`
  - `TrustBadgeIcon`
  - `TrustBadgeText`

- `sections/contact/FaqSection.tsx`
  - `FaqHeading`
  - `FaqDescription`
  - `FaqAccordion`
  - `FaqAccordionItem`

---

Suggested Feature Components (domain reusable layer)

- `components/features/ServiceCard.tsx`
- `components/features/ProjectCard.tsx`
- `components/features/TeamCard.tsx`
- `components/features/BlogCard.tsx`
- `components/features/StatsCounter.tsx`
- `components/features/ContactForm.tsx`
- `components/features/FaqAccordion.tsx`
- `components/features/TagFilter.tsx`
- `components/features/CategoryList.tsx`
- `components/features/NewsletterCard.tsx`

---

Suggested UI Primitives (atomic visual layer)

- `components/ui/SectionWrapper.tsx`
- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `components/ui/Badge.tsx`
- `components/ui/Heading.tsx`
- `components/ui/Input.tsx`
- `components/ui/Textarea.tsx`
- `components/ui/Tabs.tsx`
- `components/ui/Accordion.tsx`
- `components/ui/Avatar.tsx`
- `components/ui/IconText.tsx`
- `components/ui/StatPill.tsx`
