import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CTABannerSection() {
  return (
    <SectionWrapper id="cta" dark>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">Ready to build?</p>
        <Heading as="h2" className="mt-3 text-white">
          Let&apos;s launch your next digital product with confidence.
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Tell us what you are building, where you are blocked, and the momentum you need next.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" size="lg">
            Book a discovery call
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
