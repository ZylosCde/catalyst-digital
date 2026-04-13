import { CTABannerSection } from "@/sections/_shared/CTABannerSection";
import { ClientsSection } from "@/sections/home/ClientsSection";
import { HeroSection } from "@/sections/home/HeroSection";
import { ServicesOverviewSection } from "@/sections/home/ServicesOverviewSection";
import { StatsSection } from "@/sections/home/StatsSection";
import { TeamPreviewSection } from "@/sections/home/TeamPreviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverviewSection />
      <TeamPreviewSection />
      <ClientsSection />
      <CTABannerSection />
    </>
  );
}