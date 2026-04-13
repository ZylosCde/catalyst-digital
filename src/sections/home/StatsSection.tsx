import { StatsCounter } from "@/components/features/StatsCounter";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { homeStats } from "@/data/stats";

export function StatsSection() {
  return (
    <SectionWrapper id="stats" className="bg-slate-50">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((stat) => (
          <StatsCounter key={stat.id} stat={stat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
