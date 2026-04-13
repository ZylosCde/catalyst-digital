import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="pt-24">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Digital product partner</p>
          <Heading as="h1" size="display" className="mt-4">
            Build reliable digital experiences with {siteConfig.name}
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">{siteConfig.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/work" variant="outline" size="lg">
              View our work
            </Button>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src="/hero/how-we-help.jpg"
            alt="How we help illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
