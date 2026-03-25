import { PageMain } from "@/components/layout/PageMain";
import { MentorshipCtaBand } from "@/components/mentorship/MentorshipCtaBand";
import { MentorshipFaq } from "@/components/mentorship/MentorshipFaq";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { mentorshipFaqItems } from "@/lib/content/mentorship-faq";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentorship | Study Abroad — Masters, PhD & Postdoc",
  description:
    "Personalised study abroad mentorship for Indian students: Masters, PhD, and Postdoc—structured guidance, clear scope, and research-fit strategy with Dr Subhra.",
  alternates: { canonical: "/mentorship" },
};

const processSteps = [
  {
    step: "01",
    title: "Intake",
    body: "Share your background, goals, and timeline through the booking form so we start with context—not fragments in chat.",
  },
  {
    step: "02",
    title: "Assessment",
    body: "We align on fit, realistic options, and what to prioritise first—including whether to strengthen the profile before applying.",
  },
  {
    step: "03",
    title: "Choose the engagement",
    body: "Pick the format that matches your goal: consultation, structured track, workshop sprint, or focused document support.",
  },
  {
    step: "04",
    title: "Execute with scope",
    body: "Work proceeds with defined deliverables, revision rounds, and timelines—so quality stays high and expectations stay clear.",
  },
] as const;

export default function MentorshipPage() {
  return (
    <PageMain className="flex-1">
      <MentorshipHero />

      {/* Overview */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <SectionHeading
              eyebrow="Overview"
              title="Mentorship built for focus and follow-through"
              description={
                <>
                  This page is only for{" "}
                  <strong className="font-semibold text-zinc-900">
                    personalised guidance
                  </strong>{" "}
                  on international study and research pathways. If you are
                  looking for courses, mock tests, or the student Q&amp;A
                  platform, that lives under{" "}
                  <Link
                    href={routes.academy}
                    className="font-medium text-zinc-900 underline-offset-2 hover:underline"
                  >
                    Academy
                  </Link>
                  .
                </>
              }
            />
            <PremiumCard as="div" className="border-zinc-200/90 shadow-md">
              <p className="text-sm font-semibold text-zinc-900">
                Who this is for
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-900" />
                  Applicants who want a realistic plan—not a spray of random
                  applications.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-900" />
                  Students targeting funded opportunities and research-heavy
                  programmes, especially in Europe-aligned pathways.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-900" />
                  Candidates ready for structured work: deadlines, deliverables,
                  and accountability.
                </li>
              </ul>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* Masters */}
      <Section
        id="masters"
        className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Masters"
                title="Guidance for Masters applicants"
                description="Shortlisting, narrative, and a coherent application pack—aligned with programme fit and scholarship logic where it applies."
              />
            </div>
            <div className="lg:col-span-7">
              <PremiumCard as="div" className="h-full border-zinc-200/90">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
                  Typical focus areas
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                  <li>Programme direction and realistic shortlisting</li>
                  <li>CV and motivation letter structure (Europe-aware)</li>
                  <li>Scholarship framing where relevant (e.g. Erasmus-style logic)</li>
                  <li>Consistency across forms, referees, and story</li>
                </ul>
              </PremiumCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* PhD */}
      <Section
        id="phd"
        className="scroll-mt-24 border-b border-zinc-200 bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="PhD"
                title="Guidance for PhD applicants"
                description="Supervisor fit, outreach systems, and a research-first narrative—so you target labs and funding models with intent."
              />
            </div>
            <div className="lg:col-span-7">
              <PremiumCard as="div" className="h-full border-zinc-200/90">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
                  Typical focus areas
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                  <li>Research-fit argument and SOP / narrative alignment</li>
                  <li>Supervisor shortlisting and outreach workflow</li>
                  <li>Concept note or proposal outline (where needed)</li>
                  <li>Interview preparation and red-flag checks for labs</li>
                </ul>
              </PremiumCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Postdoc */}
      <Section
        id="postdoc"
        className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Postdoc"
                title="Guidance for Postdoc applicants"
                description="Positioning publications, research statement, and lab targeting for the next research stage—with professional tone and clarity."
              />
            </div>
            <div className="lg:col-span-7">
              <PremiumCard as="div" className="h-full border-zinc-200/90">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
                  Typical focus areas
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                  <li>Publication-forward CV and impact framing</li>
                  <li>Cover letter and research statement alignment</li>
                  <li>Group shortlist and outreach sequencing</li>
                  <li>Talk structure and interview Q&amp;A preparation</li>
                </ul>
              </PremiumCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Packages placeholder */}
      <Section
        id="packages"
        className="scroll-mt-24 border-b border-zinc-200 bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Packages & pricing"
            title="Structured engagements—not open-ended chats"
            description="Detailed tracks, document services, and cohort sprints are confirmed after an assessment so scope matches your case."
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            <PremiumCard
              as="div"
              className="relative border-zinc-200/90 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                Entry
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                Profile assessment
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Fit, pathway, and a concise action plan—ideal before deeper work.
              </p>
              <p className="mt-4 text-xs text-zinc-500">Pricing on enquiry</p>
            </PremiumCard>
            <PremiumCard
              as="div"
              className="relative border-zinc-900/20 bg-gradient-to-b from-zinc-50 to-white text-center shadow-md ring-1 ring-zinc-900/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                Deep work
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                Done-with-you tracks
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Multi-week support with defined deliverables and revision rounds
                for Masters, PhD, or Postdoc.
              </p>
              <p className="mt-4 text-xs text-zinc-500">Scopes vary by track</p>
            </PremiumCard>
            <PremiumCard
              as="div"
              className="relative border-zinc-200/90 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                Targeted
              </p>
              <h3 className="text-lg font-semibold text-zinc-900">
                Document services
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Focused CV / SOP / proposal improvements with fixed scope—no
                unlimited back-and-forth.
              </p>
              <p className="mt-4 text-xs text-zinc-500">Per service</p>
            </PremiumCard>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-600">
            Full fee tables, inclusions, and upgrade paths will be shared after
            your assessment. Workshop sprints and cohort programmes are offered
            separately when announced.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={routes.booking} variant="primary">
              Book Session to discuss packages
            </Button>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section
        id="process"
        className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Process"
            title="How students work with me"
            description="A calm, repeatable flow—so you always know what happens next."
            className="mx-auto"
          />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <li key={item.step}>
                <PremiumCard
                  as="div"
                  className="h-full border-zinc-200/90 pt-2 shadow-sm"
                >
                  <span className="text-xs font-bold tabular-nums text-zinc-400">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                    {item.body}
                  </p>
                </PremiumCard>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <MentorshipFaq items={mentorshipFaqItems} />
      <MentorshipCtaBand />
    </PageMain>
  );
}
