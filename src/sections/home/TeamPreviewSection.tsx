import { TeamCard } from "@/components/features/TeamCard";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { team } from "@/data/team";

export function TeamPreviewSection() {
  return (
    <SectionWrapper id="team" className="bg-slate-50">
      <Badge variant="default">Our Team</Badge>
      <Heading as="h2" className="mt-3">
        Senior specialists focused on outcomes
      </Heading>
      <p className="mt-3 max-w-2xl text-slate-600">
        Work directly with strategists, designers, and engineers who stay close to your product goals.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </SectionWrapper>
  );
}
