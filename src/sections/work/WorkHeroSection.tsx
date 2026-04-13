import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function WorkHeroSection() {
  return (
    <SectionWrapper id="work-hero" className="pt-24 text-center">
      <div className="mx-auto max-w-3xl">
        <Badge variant="accent">Case Studies</Badge>
        <Heading as="h1" size="h1" className="mt-4">
          Our impact in action
        </Heading>
        <p className="mt-5 text-base text-slate-600 sm:text-lg">
          We do not just ship code. We solve business challenges with engineering excellence and measurable outcomes.
        </p>
      </div>
    </SectionWrapper>
  );
}
