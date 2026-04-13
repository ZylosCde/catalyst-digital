import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ServicesHeroSection() {
  return (
    <SectionWrapper id="services-hero" className="pt-24 text-center">
      <div className="mx-auto max-w-3xl">
        <Badge variant="accent">Our Expertise</Badge>
        <Heading as="h1" size="h1" className="mt-4">
          Scalable solutions for modern enterprises
        </Heading>
        <p className="mt-5 text-base text-slate-600 sm:text-lg">
          We combine deep technical expertise with strategic thinking to build software that works at scale.
          Explore our core service offerings.
        </p>
      </div>
    </SectionWrapper>
  );
}
