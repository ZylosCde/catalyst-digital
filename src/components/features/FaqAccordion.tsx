import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

export function FaqAccordion() {
  return (
    <Accordion
      items={faqs.map((faq) => ({
        id: faq.id,
        title: faq.question,
        content: faq.answer,
      }))}
    />
  );
}
