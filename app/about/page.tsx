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
    "Learn about Dr Subhra’s mission and mentorship approach for Indian students pursuing Masters, PhD, and Postdoc pathways abroad.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageMain>
      <Section className="border-b border-zinc-200">
        <Container className="py-16 sm:py-20 lg:py-24">
          <PageIntro
            badge="About Dr Subhra"
            title="Mentorship for meaningful global academic journeys"
            description="I mentor students from India to pursue higher studies abroad with clarity, structure, and research-focused guidance."
            wrapperClassName="max-w-3xl"
            titleClassName="mt-4 text-4xl sm:text-5xl md:text-6xl"
          />
        </Container>
      </Section>

      <Section className="border-b border-zinc-200">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <PremiumCard as="div">
              <h2 className="text-2xl font-semibold tracking-tight">Mission</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
                To guide students with honest, practical mentoring for Masters,
                PhD, and Postdoc pathways so they can make informed decisions and
                submit strong, high-quality applications.
              </p>
            </PremiumCard>
            <PremiumCard as="div">
              <h2 className="text-2xl font-semibold tracking-tight">Vision</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
                To build a trusted mentoring platform that empowers students from
                India with global opportunities through seminars, structured
                programs, and discipline-driven execution.
              </p>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <h2 className={ds.heading2}>Team</h2>
            <p className={`mt-3 ${ds.lead}`}>
              A focused team supporting mentoring, program delivery, and student
              experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PremiumCard
              as="div"
              className="transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">Dr Subhra</h3>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Founder & Mentor
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                Leads mentoring strategy, profile assessments, and academic
                pathway planning for international higher studies.
              </p>
            </PremiumCard>
            <PremiumCard
              as="div"
              className="transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">Program Support Team</h3>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Operations & Coordination
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                Manages seminar schedules, workshop communication, and student
                onboarding for smooth program delivery.
              </p>
            </PremiumCard>
            <PremiumCard
              as="div"
              className="transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">Academic Review Support</h3>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Content & Quality
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
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
