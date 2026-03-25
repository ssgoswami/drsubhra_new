import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { ds } from "@/lib/design-system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr Subhra Mentor | Mission, Vision & Team",
  description:
    "Learn about Dr Subhra's mission and mentorship approach for Indian students pursuing Masters, PhD, and Postdoc pathways abroad.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageMain>
      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(24,24,27,0.04),transparent)]"
          aria-hidden
        />
        <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <PageIntro
            badge="About Dr Subhra"
            title="Mentorship for meaningful global academic journeys"
            description="I mentor students from India to pursue higher studies abroad with clarity, structure, and research-focused guidance."
            wrapperClassName="max-w-3xl"
            titleClassName="mt-4 text-4xl sm:text-5xl md:text-6xl"
          />
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <PremiumCard as="div">
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900">
                Mission
              </h2>
              <p className="mt-4 text-sm leading-[1.75] text-zinc-700 sm:text-base">
                To guide students with honest, practical mentoring for Masters,
                PhD, and Postdoc pathways so they can make informed decisions and
                submit strong, high-quality applications.
              </p>
            </PremiumCard>
            <PremiumCard as="div">
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900">
                Vision
              </h2>
              <p className="mt-4 text-sm leading-[1.75] text-zinc-700 sm:text-base">
                To build a trusted mentoring platform that empowers students from
                India with global opportunities through seminars, structured
                programs, and discipline-driven execution.
              </p>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <h2 className={ds.heading2}>Team</h2>
            <p className={`mt-4 ${ds.lead}`}>
              A focused team supporting mentoring, program delivery, and student
              experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PremiumCard
              as="div"
              className="transition hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Dr Subhra
              </h3>
              <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Founder &amp; Mentor
              </p>
              <p className="mt-4 text-sm leading-[1.75] text-zinc-700">
                Leads mentoring strategy, profile assessments, and academic
                pathway planning for international higher studies.
              </p>
            </PremiumCard>
            <PremiumCard
              as="div"
              className="transition hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Program Support Team
              </h3>
              <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Operations &amp; Coordination
              </p>
              <p className="mt-4 text-sm leading-[1.75] text-zinc-700">
                Manages seminar schedules, workshop communication, and student
                onboarding for smooth program delivery.
              </p>
            </PremiumCard>
            <PremiumCard
              as="div"
              className="transition hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Academic Review Support
              </h3>
              <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Content &amp; Quality
              </p>
              <p className="mt-4 text-sm leading-[1.75] text-zinc-700">
                Helps maintain quality standards in guidance content, resources,
                and workshop materials.
              </p>
            </PremiumCard>
          </div>
        </Container>
      </Section>
    </PageMain>
  );
}
