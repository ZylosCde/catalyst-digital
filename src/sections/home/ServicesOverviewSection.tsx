import { ServiceCard } from "@/components/features/ServiceCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { services } from "@/data/services";

export function ServicesOverviewSection() {
  return (
    <SectionWrapper id="services">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="accent">Services</Badge>
          <Heading as="h2" className="mt-3">
            Cross-functional teams to ship faster
          </Heading>
          <p className="mt-3 max-w-2xl text-slate-600">
            From strategy to scale, we bring product, design, and engineering under one delivery model.
          </p>
        </div>
        <Button href="/services" variant="ghost">
          Browse all services
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
