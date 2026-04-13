import { CTABannerSection } from "@/sections/_shared/CTABannerSection";
import { ServicesGridSection } from "@/sections/services/ServicesGridSection";
import { ServicesHeroSection } from "@/sections/services/ServicesHeroSection";
import { ServicesInActionSection } from "@/sections/services/ServicesInActionSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesInActionSection />
      <CTABannerSection />
    </>
  );
}
