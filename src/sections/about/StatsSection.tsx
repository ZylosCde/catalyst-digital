import { StatsCounter } from "@/components/features/StatsCounter";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { aboutStats } from "@/data/aboutStats";

export function StatsSection() {
  return (
    <SectionWrapper id="about-stats">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutStats.map((stat) => (
          <StatsCounter key={stat.id} stat={stat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
