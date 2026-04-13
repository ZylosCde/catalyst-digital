import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover className="h-full">
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{service.icon}</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm text-slate-600">{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        Explore service
      </Link>
    </Card>
  );
}
