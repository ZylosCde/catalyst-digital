import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { officeInfo } from "@/data/contact";

export function OfficeSection() {
  return (
    <SectionWrapper id="office" className="py-6">
      <div className="mx-auto max-w-3xl">
        <Card className="h-fit">
          <Heading as="h3" size="h4">
            {officeInfo.title}
          </Heading>
          <div className="mt-4 h-36 rounded-xl bg-slate-900" aria-hidden />
          <div className="mt-4 rounded-lg bg-slate-50 p-3">
            <p className="text-sm font-medium text-slate-900">{officeInfo.addressLine1}</p>
            <p className="text-xs text-slate-600">{officeInfo.addressLine2}</p>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
