import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { timelineMilestones } from "@/data/timeline";

export function TimelineSection() {
  return (
    <SectionWrapper id="journey" className="bg-slate-50">
      <div className="mx-auto max-w-3xl text-center">
        <Heading as="h2">Our journey</Heading>
        <p className="mt-3 text-slate-600">How we evolved from a focused team into a trusted product partner.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-5">
        {timelineMilestones.map((milestone) => (
          <article key={milestone.id} className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{milestone.year}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{milestone.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
