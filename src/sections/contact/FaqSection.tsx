import { FaqAccordion } from "@/components/features/FaqAccordion";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FaqSection() {
  return (
    <SectionWrapper id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-3xl">
        <Heading as="h2" className="text-center">
          Common questions
        </Heading>
        <p className="mt-3 text-center text-slate-600">Everything you need to know before working with us.</p>
        <div className="mt-8">
          <FaqAccordion />
        </div>
      </div>
    </SectionWrapper>
  );
}
