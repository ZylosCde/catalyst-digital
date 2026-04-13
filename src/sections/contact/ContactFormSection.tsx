import { ContactForm } from "@/components/features/ContactForm";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ContactFormSection() {
  return (
    <SectionWrapper id="contact-form" className="pt-8">
      <div className="mx-auto max-w-3xl">
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
