import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

const milestones = [
  {
    title: "PhD (Erasmus Mundus)",
    detail: "Technical University of Madrid, Spain",
  },
  {
    title: "Research",
    detail: "University of Lübeck, Germany",
  },
  {
    title: "Postdoctoral fellow",
    detail: "Harvard Medical School, Harvard University, USA",
  },
  {
    title: "Earlier research roles",
    detail: "Indian Statistical Institute · IIM Calcutta",
  },
] as const;

export function HomeCredibility() {
  return (
    <Section className="border-b border-zinc-200 bg-zinc-50">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Credibility"
          title="Background you can verify"
          description="A track record in research and international academia-aligned with how I mentor applicants today."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {milestones.map((item) => (
            <li
              key={item.title}
              className="flex overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm ring-1 ring-zinc-900/[0.04]"
            >
              <div className="w-1 shrink-0 bg-indigo-200" aria-hidden />
              <div className="flex-1 px-6 py-5">
                <p className="font-serif text-base font-semibold leading-snug text-zinc-900">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-600">
          Mentoring emphasis: STEM, applied science, engineering, computer
          science, and related fields-structured guidance, not informal
          profile reviews in chat.
        </p>
      </Container>
    </Section>
  );
}
