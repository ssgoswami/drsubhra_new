import { PageMain } from "@/components/layout/PageMain";
import { MentorshipCtaBand } from "@/components/mentorship/MentorshipCtaBand";
import { MentorshipFaq } from "@/components/mentorship/MentorshipFaq";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";
import { MentorshipSectionBanner } from "@/components/mentorship/MentorshipSectionBanner";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { mentorshipFaqItems } from "@/lib/content/mentorship-faq";
import { routes } from "@/lib/routes";
import { ds } from "@/lib/design-system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad Mentorship | Masters, PhD & Postdoc Applications - Dr Subhra Sundar",
  description:
    "One-to-one mentorship for Indian students applying to funded Masters, PhD, and Postdoc programmes in Europe and the USA. Research-fit strategy, structured documents, defined scope.",
  alternates: { canonical: "/mentorship/" },
  openGraph: {
    title: "Study Abroad Mentorship | Masters, PhD & Postdoc Applications - Dr Subhra Sundar",
    description:
      "One-to-one mentorship for Indian students applying to funded Masters, PhD, and Postdoc programmes abroad. Real strategy - not generic advice.",
    url: "https://www.drsubhra.com/mentorship/",
    images: [{ url: "/images/subhra_photo115.webp", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Mentorship | Masters, PhD & Postdoc Applications - Dr Subhra Sundar",
    description:
      "One-to-one mentorship for Indian students applying to funded Masters, PhD, and Postdoc programmes abroad. Real strategy - not generic advice.",
    images: ["/images/subhra_photo115.webp"],
  },
};

const credibilityItems = [
  { label: "PhD", detail: "Technical University of Madrid, Erasmus Mundus Scholar" },
  { label: "Postdoc", detail: "Margarita Salas Fellow, Harvard University" },
  { label: "Focus", detail: "STEM, engineering, and research-led fields" },
  { label: "Perspective", detail: "Interviewer at European universities" },
  { label: "Format", detail: "One-to-one only - no group courses" },
] as const;

const outcomeItems = [
  {
    title: "A shortlist that matches your profile",
    body: "Not a list of 30 universities - a focused set of programmes aligned with your background, funding logic, and realistic admit chances.",
  },
  {
    title: "Documents that tell a coherent story",
    body: "CV, SOP, and letters that work together - not a pile of achievements that committees skim and forget.",
  },
  {
    title: "Supervisor outreach that gets responses",
    body: "A targeted, research-fit approach to contacting labs and PIs - relevant for PhD and Postdoc applicants.",
  },
  {
    title: "Honest read of your profile gaps",
    body: "You will know exactly where your profile stands and what needs strengthening before you apply - if anything.",
  },
  {
    title: "A strategy you can actually execute",
    body: "Clear timeline, defined deliverables, and a plan calibrated to your bandwidth and application window.",
  },
  {
    title: "Clarity on what to skip",
    body: "Knowing which programmes, countries, or funding schemes are not worth your time is as valuable as knowing where to apply.",
  },
];

const pathwayCards = [
  {
    id: "masters",
    eyebrow: "Masters",
    title: "Masters applications",
    intro:
      "Shortlisting, narrative, and a coherent application pack - aligned with programme fit and scholarship logic where relevant.",
    areas: [
      "Programme direction and realistic shortlisting across Europe and the USA",
      "CV and motivation letter structure - Europe-aware, not generic",
      "Scholarship framing where relevant (Erasmus Mundus, DAAD, and similar logic)",
      "Consistency across the application: forms, referees, and story arc",
      "Interview preparation if required by the programme",
    ],
  },
  {
    id: "phd",
    eyebrow: "PhD",
    title: "PhD applications",
    intro:
      "Supervisor fit, outreach systems, and a research-first narrative - so you target labs and funding models with intent, not luck.",
    areas: [
      "Research-fit argument and SOP / narrative alignment",
      "Supervisor shortlisting using lab output and funding signals",
      "Cold outreach workflow that positions you as a researcher, not a form email",
      "Concept note or proposal outline where the programme requires one",
      "Interview preparation and red-flag checks for labs before you accept",
    ],
  },
  {
    id: "postdoc",
    eyebrow: "Postdoc",
    title: "Postdoc applications",
    intro:
      "Positioning your publications, sharpening your research statement, and targeting groups with intent - for the next stage of your research career.",
    areas: [
      "Publication-forward CV with impact framing - not just a list of papers",
      "Cover letter and research statement aligned with host group priorities",
      "Fellowship identification (Marie Curie, Margarita Salas, and similar schemes)",
      "Lab and group shortlisting with outreach sequencing",
      "Talk structure and interview Q&A preparation",
    ],
  },
];

const includedGroups = [
  {
    category: "Strategy",
    items: [
      "Profile and fit assessment",
      "Realistic programme shortlisting",
      "Funding and scholarship alignment",
      "Application timeline planning",
    ],
  },
  {
    category: "Documents",
    items: [
      "CV review and rebuild",
      "Statement of purpose / motivation letter",
      "Letter of recommendation guidance for referees",
      "Concept note or research proposal (PhD / Postdoc)",
    ],
  },
  {
    category: "Execution",
    items: [
      "Supervisor outreach workflow (PhD / Postdoc)",
      "Application tracking and accountability",
      "Revision rounds within defined scope",
      "Interview preparation",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Intake",
    body: "Share your background, goals, and timeline through the booking form - so the session starts with full context, not fragments.",
  },
  {
    step: "02",
    title: "Assessment",
    body: "Align on fit, realistic options, and what to prioritise - including whether to strengthen the profile before applying.",
  },
  {
    step: "03",
    title: "Choose the engagement",
    body: "Pick the format that matches your goal: consultation, structured track, document service, or workshop sprint.",
  },
  {
    step: "04",
    title: "Execute with scope",
    body: "Work proceeds with defined deliverables, revision rounds, and timelines - so quality stays high and expectations stay clear.",
  },
] as const;

const differentiators = [
  {
    title: "Direct mentor access - not a team of junior agents",
    body: "You work with Dr Subhra directly throughout. Not a coordinator who collects your details and passes them to someone else.",
  },
  {
    title: "European research system - understood from the inside",
    body: "Funding models, Erasmus Mundus logic, Marie Curie schemes, lab culture, and the supervisor-student dynamic in Europe - not from a FAQ page.",
  },
  {
    title: "Research-fit first, name-brand second",
    body: "Applying to a university because it is famous is not a strategy. Targeting a lab where your research direction and the PI's current work genuinely overlap - that is.",
  },
  {
    title: "Insider perspective from selection panels",
    body: "Dr Subhra has served as an interviewer at European universities. He knows what committees are actually looking for - and what makes a candidate forgettable.",
  },
  {
    title: "Structured scope - not open-ended chat",
    body: "Every engagement has defined deliverables and a revision window. WhatsApp reviews and informal advice are not part of the service.",
  },
] as const;

const notForItems = [
  "Students looking for guaranteed admission or scholarship outcomes - decisions rest with universities and committees.",
  "Students who want documents written for them without engagement - you bring the ideas; the work is done with you, not for you.",
  "Students who are not ready to put in the time - shortlisting, drafting, and iteration require your active participation.",
  "Students chasing name-brand institutions without regard for research fit or funding realism.",
  "Students expecting instant turnaround over informal channels - scope, timelines, and communication norms are set at intake.",
] as const;

export default function MentorshipPage() {
  return (
    <PageMain className="flex-1">
      <MentorshipSectionBanner />
      <MentorshipHero />

      {/* Credibility strip */}
      <div className="border-b border-zinc-200 bg-white">
        <Container className="py-6 sm:py-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:flex lg:divide-x lg:divide-zinc-200 lg:gap-0">
            {credibilityItems.map((item) => (
              <div key={item.label} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <dt className={ds.eyebrowMentorship}>{item.label}</dt>
                <dd className="mt-1 text-sm leading-snug text-zinc-700">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* Who this is for */}
      <Section id="who" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Who this is for"
            title="Mentorship built for serious applicants"
            description="This is not for everyone. It is for students who want a realistic, research-fit strategy - and are ready to do the work."
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                who: "Masters applicants",
                body: "Targeting funded or partially funded programmes in Europe. Unsure of fit, country, or how to frame their story for European committees.",
                note: "You have an academic record but have not translated it into a coherent application narrative yet.",
              },
              {
                who: "PhD applicants",
                body: "Want research fit with a specific lab, not just a list of open positions. Outreach emails are going unanswered. Supervisor targeting feels unclear.",
                note: "You need a research-fit argument - not just a well-formatted SOP.",
              },
              {
                who: "Postdoc researchers",
                body: "Transitioning from PhD to postdoc in Europe or the USA. Positioning publications, targeting competitive fellowships, and approaching PIs strategically.",
                note: "The shift from student documents to researcher documents requires a different framing entirely.",
              },
            ].map((item) => (
              <PremiumCard key={item.who} as="div" className="flex flex-col border-zinc-200/90">
                <p className={ds.eyebrow}>{item.who}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">{item.body}</p>
                <p className="mt-3 border-t border-zinc-100 pt-3 text-xs italic leading-relaxed text-zinc-500">
                  {item.note}
                </p>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section id="outcomes" className="scroll-mt-24 border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="What to expect"
            title="What you leave with"
            description="Not promises - concrete outputs from a structured engagement."
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outcomeItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-zinc-50/60 px-5 py-5"
              >
                <h3 className="font-serif text-base font-semibold leading-snug text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pathways */}
      <Section id="pathways" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Mentorship pathways"
            title="Masters, PhD, and Postdoc - each is different"
            description="The strategy, documents, and targeting logic differ across application stages. Each pathway is treated on its own terms."
            className="mx-auto"
          />
          <div className="mx-auto mt-12 max-w-5xl space-y-8">
            {pathwayCards.map((card) => (
              <div
                key={card.id}
                id={card.id}
                className="scroll-mt-24 grid gap-8 rounded-2xl border border-zinc-200 bg-white p-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <p className={ds.eyebrowMentorship}>{card.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug tracking-tight text-zinc-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{card.intro}</p>
                </div>
                <div className="lg:col-span-8">
                  <p className={`mb-3 ${ds.eyebrow}`}>Typical focus areas</p>
                  <ul className="space-y-2.5">
                    {card.areas.map((area) => (
                      <li
                        key={area}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-700"
                      >
                        <span
                          className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
                          aria-hidden
                        />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What is included */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="What is included"
            title="The scope of mentorship work"
            description="Engagements are scoped at intake. Not every item below applies to every track - what is in scope is confirmed before work begins."
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {includedGroups.map((group) => (
              <PremiumCard key={group.category} as="div" className="border-zinc-200/90">
                <p className={ds.eyebrowMentorship}>{group.category}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-snug text-zinc-700"
                    >
                      <span
                        className="mt-[4px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section id="process" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Process"
            title="How the engagement works"
            description="A repeatable flow - so you always know what comes next and nothing falls through a chat thread."
            className="mx-auto"
          />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <li key={item.step}>
                <PremiumCard as="div" className="h-full border-zinc-200/90 pt-2 shadow-sm">
                  <span className="text-[0.6875rem] font-bold tabular-nums tracking-[0.1em] text-indigo-400">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-serif text-base font-semibold leading-snug tracking-tight text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">{item.body}</p>
                </PremiumCard>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Why different */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Why different"
            title="What sets this apart from consultancies"
            description="Generic study abroad agencies operate on volume - templates, junior reviewers, and commission-linked shortlists. This is the opposite."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-zinc-50/60 px-5 py-5"
              >
                <h3 className="font-serif text-base font-semibold leading-snug text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who this is NOT for */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Not for everyone"
                title="Who this is not for"
                description="Being clear about this upfront saves time on both sides."
              />
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {notForItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-lg border border-zinc-200 bg-white px-5 py-4 text-sm leading-relaxed text-zinc-700"
                  >
                    <span
                      className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="scroll-mt-24 border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Structured engagements - not open-ended retainers"
            description="Every engagement has defined scope, deliverables, and timelines. Start with a profile assessment to confirm the right track before deeper work begins."
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
                Students at the start - unsure of fit, country, or programme direction
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
                      <span
                        className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"
                        aria-hidden
                      />
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
                      <span
                        className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
                        aria-hidden
                      />
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
              <p className="mt-1 text-xs text-zinc-500">Per service - fixed scope</p>
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
                    "CV review ₹3,000 / €60 - CV rebuild ₹5,000 / €100",
                    "SOP review with structured feedback ₹5,000 / €100",
                    "Concept note / proposal review ₹7,500 / €150",
                    "One revision round included per service",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug text-zinc-700">
                      <span
                        className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PremiumCard>

          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-600">
            Track inclusions, upgrade paths, and cohort sprint dates are confirmed after your
            assessment session. All prices inclusive of applicable taxes.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={routes.booking} variant="mentorshipCta">
              Book a session to discuss
            </Button>
          </div>
        </Container>
      </Section>

      {/* Trust / proof - testimonial placeholder */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Student outcomes"
            title="Results from students who took the work seriously"
            description="Outcome stories and testimonials will be added here as they are collected. If you have worked with Dr Subhra and would like to share your experience, please get in touch."
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-xl rounded-xl border border-dashed border-zinc-300 bg-white px-8 py-10 text-center">
            <p className="text-sm text-zinc-500">Outcome stories and testimonials - coming soon.</p>
            <div className="mt-6">
              <Button href={routes.contact} variant="secondary">
                Share your experience
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <MentorshipFaq items={mentorshipFaqItems} />
      <MentorshipCtaBand />
    </PageMain>
  );
}
