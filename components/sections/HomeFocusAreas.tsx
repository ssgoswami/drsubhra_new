import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { routes } from "@/lib/routes";

const areas = [
  {
    title: "1:1 Study Abroad Mentorship",
    description:
      "Personalised, application-specific guidance for Masters, PhD, and Postdoc applicants. Strategy, documents, and execution within defined scope - directly from Dr Subhra.",
    href: routes.mentorship,
    cta: "View mentorship",
  },
  {
    title: "Workshops & Webinars",
    description:
      "Monthly topic-focused webinars and multi-day cohort workshops for students at the orientation or preparation stage. Group formats - structured, live, and expert-led.",
    href: routes.workshops,
    cta: "View upcoming sessions",
  },
  {
    title: "Academy",
    description:
      "Academic courses in research, AI/ML, and image processing. Mock tests, career guidance, and subject Q&A - built to scale with you.",
    href: routes.academy,
    cta: "Explore Academy",
  },
] as const;

export function HomeFocusAreas() {
  return (
    <Section id="focus-areas" className="border-b border-zinc-200/50 bg-zinc-50">
      <Container className="py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="How to work with me"
          title="Three ways to engage"
          description="Three levels of engagement - choose the one that fits where you are right now."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {areas.map((area) => (
            <PremiumCard
              key={area.title}
              as="div"
              className="group flex flex-col border-zinc-200/90 transition hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-zinc-900">
                {area.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-700">
                {area.description}
              </p>
              <Link
                href={area.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 underline-offset-4 transition group-hover:underline"
              >
                {area.cta}
                <span aria-hidden className="ml-0.5 transition-transform group-hover:translate-x-0.5">
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
