import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { workResults } from "@/data/workResults";

export function ResultsSection() {
  return (
    <SectionWrapper id="work-results">
      <div className="grid gap-6 md:grid-cols-3">
        {workResults.map((item) => (
          <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-6">
            <Heading as="h3" size="h4">
              {item.title}
            </Heading>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
