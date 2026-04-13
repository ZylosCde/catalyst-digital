import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { coreValues } from "@/data/values";

export function ValuesSection() {
  return (
    <SectionWrapper id="core-values" className="bg-slate-50">
      <div className="text-center">
        <Heading as="h2">Our core values</Heading>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Principles that shape how we build, collaborate, and make decisions every day.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {coreValues.map((value) => (
          <article key={value.id} className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{value.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
