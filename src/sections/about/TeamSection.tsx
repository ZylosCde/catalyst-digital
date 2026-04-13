import { TeamCard } from "@/components/features/TeamCard";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <SectionWrapper id="team">
      <div className="text-center">
        <Badge>Team</Badge>
        <Heading as="h2" className="mt-3">
          The minds behind the mission
        </Heading>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Cross-functional experts in strategy, design, and engineering, aligned around meaningful outcomes.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </SectionWrapper>
  );
}
