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
    detail: "Harvard Medical School, USA — Margarita Salas fellowship",
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
          description="A track record in research and international academia—aligned with how I mentor applicants today."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {milestones.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-zinc-600">
          Mentoring emphasis: STEM, applied science, engineering, computer
          science, and related fields—structured guidance, not informal
          profile reviews in chat.
        </p>
      </Container>
    </Section>
  );
}
