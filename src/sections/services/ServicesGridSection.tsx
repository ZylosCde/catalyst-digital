import { ServiceCard } from "@/components/features/ServiceCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { services } from "@/data/services";

export function ServicesGridSection() {
  return (
    <SectionWrapper id="services-grid">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
