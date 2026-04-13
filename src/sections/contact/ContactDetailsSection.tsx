import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactDetails } from "@/data/contact";

export function ContactDetailsSection() {
  return (
    <SectionWrapper id="contact-details" className="py-6">
      <div className="mx-auto max-w-3xl">
        <Card className="h-fit">
          <Heading as="h3" size="h4">
            Contact Details
          </Heading>
          <div className="mt-4 space-y-4">
            {contactDetails.map((item) => (
              <div key={item.id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-1 text-sm text-slate-700">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
