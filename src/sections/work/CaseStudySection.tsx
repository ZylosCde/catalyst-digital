import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { featuredCaseStudy, featuredCaseStudyMetrics } from "@/data/caseStudy";

export function CaseStudySection() {
  return (
    <SectionWrapper id="featured-case-study" className="bg-slate-50">
      <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">{featuredCaseStudy.eyebrow}</p>
          <Heading as="h2" className="mt-3">
            {featuredCaseStudy.title}
          </Heading>
          <p className="mt-4 text-slate-600">{featuredCaseStudy.description}</p>
          <div className="mt-6 flex gap-8">
            {featuredCaseStudyMetrics.map((metric) => (
              <div key={metric.id}>
                <p className="text-2xl font-semibold text-indigo-600">{metric.value}</p>
                <p className="text-sm text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href={featuredCaseStudy.ctaHref} size="sm">
              Read full story
            </Button>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-xl bg-slate-200" aria-hidden />
      </div>
    </SectionWrapper>
  );
}
