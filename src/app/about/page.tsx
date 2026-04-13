import { CTABannerSection } from "@/sections/_shared/CTABannerSection";
import { AboutHeroSection } from "@/sections/about/AboutHeroSection";
import { StatsSection } from "@/sections/about/StatsSection";
import { TeamSection } from "@/sections/about/TeamSection";
import { TimelineSection } from "@/sections/about/TimelineSection";
import { ValuesSection } from "@/sections/about/ValuesSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <TimelineSection />
      <TeamSection />
      <ValuesSection />
      <StatsSection />
      <CTABannerSection />
    </>
  );
}
