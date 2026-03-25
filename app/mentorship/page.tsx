import { PageMain } from "@/components/layout/PageMain";
import { MentorshipCtaBand } from "@/components/mentorship/MentorshipCtaBand";
import { MentorshipFaq } from "@/components/mentorship/MentorshipFaq";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";
import { MentorshipSectionBanner } from "@/components/mentorship/MentorshipSectionBanner";
import { Container } from "@/components/layout/Container";
import { TwoColumnFeature } from "@/components/layout/TwoColumnFeature";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { mentorshipFaqItems } from "@/lib/content/mentorship-faq";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentorship | Study Abroad - Masters, PhD & Postdoc",
  description:
    "Personalised study abroad mentorship for Indian students: Masters, PhD, and Postdoc-structured guidance, clear scope, and research-fit strategy with Dr Subhra.",
  alternates: { canonical: "/mentorship" },
};

const processSteps = [
  {
    step: "01",
    title: "Intake",
    body: "Share your background, goals, and timeline through the booking form so we start with context-not fragments in chat.",
  },
  {
    step: "02",
    title: "Assessment",
    body: "We align on fit, realistic options, and what to prioritise first-including whether to strengthen the profile before applying.",
  },
  {
    step: "03",
    title: "Choose the engagement",
    body: "Pick the format that matches your goal: consultation, structured track, workshop sprint, or focused document support.",
  },
  {
    step: "04",
    title: "Execute with scope",
    body: "Work proceeds with defined deliverables, revision rounds, and timelines-so quality stays high and expectations stay clear.",
  },
] as const;

export default function MentorshipPage() {
  return (
    <PageMain className="flex-1">
      <MentorshipSectionBanner />
      <MentorshipHero />

      {/* Overview */}
      <TwoColumnFeature
        sectionClassName="border-b border-zinc-200 bg-white"
        align="start"
        left={
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
                  className="font-medium text-teal-700 underline-offset-2 hover:underline"
                >
                  Academy
                </Link>
                .
              </>
            }
          />
        }
        right={
          <PremiumCard as="div" className="border-zinc-200/90 shadow-md">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Who this is for
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
              <li className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                Applicants who want a realistic plan-not a spray of random
                applications.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                Students targeting funded opportunities and research-heavy
                programmes, especially in Europe-aligned pathways.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                Candidates ready for structured work: deadlines, deliverables,
                and accountability.
              </li>
            </ul>
          </PremiumCard>
        }
      />

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
                description="Shortlisting, narrative, and a coherent application pack-aligned with programme fit and scholarship logic where it applies."
              />
            </div>
            <div className="lg:col-span-7">
              <PremiumCard as="div" className="h-full border-zinc-200/90">
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
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
                description="Supervisor fit, outreach systems, and a research-first narrative-so you target labs and funding models with intent."
              />
            </div>
            <div className="lg:col-span-7">
              <PremiumCard as="div" className="h-full border-zinc-200/90">
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
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
                description="Positioning publications, research statement, and lab targeting for the next research stage-with professional tone and clarity."
              />
            </div>
            <div className="lg:col-span-7">
              <PremiumCard as="div" className="h-full border-zinc-200/90">
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
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

      {/* Packages */}
      <Section
        id="packages"
        className="scroll-mt-24 border-b border-zinc-200 bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Packages & pricing"
            title="Structured engagements-not open-ended chats"
            description="Every engagement has defined scope, deliverables, and timelines. Start with an assessment so the right track is confirmed before work begins."
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">

            {/* Entry */}
            <PremiumCard as="div" className="relative flex flex-col border-zinc-200/90 shadow-sm">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Entry
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Profile Assessment
              </h3>
              <div className="mt-4">
                <span className="font-serif text-2xl font-semibold text-zinc-900">₹2,500</span>
                <span className="ml-1.5 text-sm text-zinc-500">/ €40</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">
                60-min extended session at ₹4,000 / €60
              </p>
              <p className="mt-3 text-xs text-zinc-600">
                <span className="font-semibold text-zinc-700">Best for:</span>{" "}
                Students at the start-unsure of fit, country, or programme direction
              </p>
              <div className="mt-5 border-t border-zinc-100 pt-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  Includes
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Profile evaluation and academic strengths audit",
                    "Country and programme shortlisting direction",
                    "1-page written action plan with next steps",
                    "30-min session (upgrade to 60-min available)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug text-zinc-700">
                      <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PremiumCard>

            {/* Deep work - featured */}
            <PremiumCard
              as="div"
              className="relative flex flex-col border-indigo-200 bg-gradient-to-b from-indigo-50/50 to-white shadow-md ring-1 ring-indigo-600/10"
            >
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-indigo-600">
                Deep work
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Done-with-you Tracks
              </h3>
              <div className="mt-4">
                <span className="font-serif text-2xl font-semibold text-zinc-900">From ₹14,999</span>
                <span className="ml-1.5 text-sm text-zinc-500">/ €300</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">
                Up to ₹70,000 / €1,400 depending on track
              </p>
              <p className="mt-3 text-xs text-zinc-600">
                <span className="font-semibold text-zinc-700">Best for:</span>{" "}
                Applicants ready for structured, multi-week mentorship with accountability
              </p>
              <div className="mt-5 border-t border-indigo-100 pt-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-indigo-400">
                  Includes
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Masters, PhD, and Postdoc tracks available",
                    "CV, SOP, and LOR kit preparation",
                    "Supervisor shortlisting and outreach systems (PhD / Postdoc)",
                    "Defined deliverables, revision rounds, and timelines",
                    "Workshop sprint cohorts available separately",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug text-zinc-700">
                      <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PremiumCard>

            {/* Targeted */}
            <PremiumCard as="div" className="relative flex flex-col border-zinc-200/90 shadow-sm">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Targeted
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Document Services
              </h3>
              <div className="mt-4">
                <span className="font-serif text-2xl font-semibold text-zinc-900">From ₹3,000</span>
                <span className="ml-1.5 text-sm text-zinc-500">/ €60</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">
                Per service · fixed scope
              </p>
              <p className="mt-3 text-xs text-zinc-600">
                <span className="font-semibold text-zinc-700">Best for:</span>{" "}
                Students with drafts ready who need focused, expert review
              </p>
              <div className="mt-5 border-t border-zinc-100 pt-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  Includes
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "CV review ₹3,000 / €60 · CV rebuild ₹5,000 / €100",
                    "SOP review with structured feedback ₹5,000 / €100",
                    "Concept note / proposal review ₹7,500 / €150",
                    "One revision round included per service",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug text-zinc-700">
                      <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PremiumCard>

          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-600">
            Track inclusions, upgrade paths, and cohort sprint dates are confirmed
            after your assessment session. All prices inclusive of applicable taxes.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={routes.booking} variant="mentorshipCta">
              Book a session to discuss packages
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
            description="A calm, repeatable flow-so you always know what happens next."
            className="mx-auto"
          />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <li key={item.step}>
                <PremiumCard
                  as="div"
                  className="h-full border-zinc-200/90 pt-2 shadow-sm"
                >
                  <span className="text-[0.6875rem] font-bold tabular-nums tracking-[0.1em] text-indigo-400">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-serif text-base font-semibold leading-snug tracking-tight text-zinc-900">
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
