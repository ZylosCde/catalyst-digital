import { CTABannerSection } from "@/sections/_shared/CTABannerSection";
import { CaseStudySection } from "@/sections/work/CaseStudySection";
import { ProjectsFilterSection } from "@/sections/work/ProjectsFilterSection";
import { ProjectsGridSection } from "@/sections/work/ProjectsGridSection";
import { ResultsSection } from "@/sections/work/ResultsSection";
import { WorkHeroSection } from "@/sections/work/WorkHeroSection";

export default function WorkPage() {
  return (
    <>
      <WorkHeroSection />
      <ProjectsFilterSection />
      <ProjectsGridSection />
      <CaseStudySection />
      <ResultsSection />
      <CTABannerSection />
    </>
  );
}
