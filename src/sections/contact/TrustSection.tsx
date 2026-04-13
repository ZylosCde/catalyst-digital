import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { trustBadge } from "@/data/contact";

export function TrustSection() {
  return (
    <SectionWrapper id="trust" className="py-6">
      <div className="mx-auto max-w-3xl">
        <Card className="h-fit">
          <p className="text-sm font-semibold text-slate-900">{trustBadge.title}</p>
          <p className="mt-2 text-xs text-slate-600">{trustBadge.subtitle}</p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
