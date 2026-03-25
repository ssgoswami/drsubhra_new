import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { routes } from "@/lib/routes";

const areas = [
  {
    title: "Study Abroad Mentorship",
    description:
      "Masters, PhD, and Postdoc—strategy, documents, and execution support with clear scope and timelines.",
    href: routes.mentorship,
    cta: "View mentorship",
  },
  {
    title: "Professional Courses",
    description:
      "Academic and professional programs designed to deepen skills and prepare you for the next step.",
    href: routes.academy,
    cta: "Explore Academy",
  },
  {
    title: "Mock Tests",
    description:
      "Structured practice for school and entrance exams—rigorous, feedback-oriented preparation.",
    href: routes.academy,
    cta: "Coming to Academy",
  },
  {
    title: "Career Guidance",
    description:
      "Direction on pathways, programmes, and outcomes—so decisions are informed, not improvised.",
    href: routes.academy,
    cta: "Learn more",
  },
] as const;

export function HomeFocusAreas() {
  return (
    <Section id="focus-areas" className="border-b border-zinc-200 bg-zinc-50">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Focus areas"
          title="Where I can support you"
          description="Mentorship and Academy stay distinct—choose the path that matches your goal."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {areas.map((area) => (
            <PremiumCard
              key={area.title}
              as="div"
              className="group flex flex-col border-zinc-200/90 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {area.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">
                {area.description}
              </p>
              <Link
                href={area.href}
                className="mt-5 inline-flex text-sm font-semibold text-zinc-900 underline-offset-4 transition group-hover:underline"
              >
                {area.cta}
                <span aria-hidden className="ml-1">
                  →
                </span>
              </Link>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
