import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AcademySectionBanner } from "@/components/academy/AcademySectionBanner";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { ds } from "@/lib/design-system";
import { routes } from "@/lib/routes";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars & Cohort Workshops | Study Abroad - Dr Subhra Academy",
  description:
    "Monthly topic-focused webinars and multi-day cohort workshops for Indian students planning study abroad. Live, expert-led group sessions on Masters, PhD, and research pathways.",
  alternates: { canonical: "/academy/workshops/" },
  openGraph: {
    title: "Webinars & Cohort Workshops | Study Abroad - Dr Subhra Academy",
    description:
      "Live webinars and structured cohort workshops for students planning Masters, PhD, and Postdoc applications abroad.",
    url: "https://www.drsubhra.com/academy/workshops/",
    images: [{ url: "/images/subhra_photo115.webp", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinars & Cohort Workshops | Study Abroad - Dr Subhra Academy",
    description:
      "Live webinars and structured cohort workshops for students planning Masters, PhD, and Postdoc applications abroad.",
    images: ["/images/subhra_photo115.webp"],
  },
};

const jumpLinks = [
  ["Webinars", "#webinars"],
  ["Workshops", "#workshops"],
  ["Who this is for", "#who"],
  ["How to choose", "#how-to-choose"],
  ["FAQ", "#faq"],
] as const;

const webinarTopics = [
  "How to shortlist Master's programmes in Europe and what selection committees actually read",
  "PhD funding models abroad - what is fully funded, what is not, and how to tell the difference",
  "How to approach a supervisor with a cold email - what works and what does not",
  "What European universities look for in a motivation letter",
  "Building a research profile before you apply",
  "How Erasmus Mundus and similar scholarships work in practice",
  "Postdoc applications - what changes when you move from student documents to researcher documents",
];

const workshopFormats = [
  {
    title: "SOP Writing Workshop",
    body: "A cohort of at least 8 days focused entirely on writing, structuring, and refining the statement of purpose for Master's or PhD applications.",
    tag: "8+ days",
  },
  {
    title: "PhD Application Strategy Workshop",
    body: "A cohort of at least 8 days for students at the shortlisting, supervisor outreach, and research narrative stage.",
    tag: "8+ days",
  },
  {
    title: "Research Profile Development Workshop",
    body: "For students who want to understand what a competitive research profile looks like and how to build toward it before they apply.",
    tag: "8+ days",
  },
  {
    title: "Study Abroad Planning Workshop",
    body: "A structured programme for students early in planning - covering country selection, programme types, funding logic, and realistic timelines.",
    tag: "8+ days",
  },
];

const faqItems = [
  {
    question: "Are webinars free?",
    answer:
      "Some webinars are free; others have a small registration fee. The format and pricing are announced with each session. Join the mailing list to be notified before registration opens.",
  },
  {
    question: "Will webinar recordings be available?",
    answer:
      "Yes. Recordings are shared with registered participants after each session. They are not posted publicly.",
  },
  {
    question: "How are cohort workshops different from the webinars?",
    answer:
      "Webinars are single sessions of approximately 2 hours with a 1-hour live Q&A, focused on one topic. Cohort workshops run over at least 8 days with a structured curriculum, tasks between sessions, and more interactive group work.",
  },
  {
    question: "How large are the cohort groups?",
    answer:
      "Cohorts are intentionally small - typically 6 to 15 participants - to maintain meaningful interaction and the usefulness of group feedback.",
  },
  {
    question: "Is this the same as 1:1 mentorship?",
    answer:
      "No. Webinars and workshops are group formats. Feedback is directional and within the scope of the group session. For individual, application-specific guidance with defined deliverables, see the Mentorship page.",
  },
  {
    question: "Can I attend a workshop and then move to 1:1 mentorship?",
    answer:
      "Yes. Many students follow that path. A cohort workshop is a structured way to prepare before committing to individual mentorship. A profile assessment is the natural next step after a workshop.",
  },
  {
    question: "Are these only for students targeting Europe?",
    answer:
      "No. The content covers both European and US pathways. Dr Subhra's direct experience is deepest in European systems - particularly research funding, doctoral training, Erasmus Mundus logic, and the supervisor-student relationship in European academia.",
  },
  {
    question: "Do I need to attend live, or can I watch later?",
    answer:
      "Webinars are live sessions - the Q&A is part of the value, and recordings are shared after. Cohort workshops require live participation. The interaction between sessions is part of the structure, not optional.",
  },
  {
    question: "How do I know when the next session is?",
    answer:
      "Join the mailing list or check this page. Sessions are announced here and via email before registration opens.",
  },
];

export default function WorkshopsPage() {
  return (
    <PageMain className="flex-1">
      <AcademySectionBanner />

      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-teal-100/60 bg-gradient-to-b from-teal-50/35 via-white to-zinc-50/60">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(13,148,136,0.07),transparent)]"
          aria-hidden
        />
        <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <BadgePill className="mx-auto border-teal-200/80 bg-teal-50/80 text-teal-700">
              Workshops &amp; Webinars - Academy
            </BadgePill>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-900 sm:text-5xl lg:text-6xl">
              Structured, live learning for students serious about studying abroad
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-zinc-700 sm:text-lg">
              Monthly topic-focused webinars and multi-day cohort workshops - live sessions with
              Dr Subhra, designed for students who want more than passive content and are not yet
              ready for{" "}
              <span className="font-medium text-zinc-900">1:1 mentorship.</span>
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
              <Button href="#webinars" variant="academyCta" className="w-full sm:w-auto">
                View upcoming sessions
              </Button>
              <Button href={routes.mentorship} variant="secondary" className="w-full sm:w-auto">
                Explore 1:1 mentorship
              </Button>
            </div>
            <nav
              className="mt-10 flex flex-wrap items-center justify-center gap-y-2 border-t border-teal-100/80 pt-7 text-sm"
              aria-label="On this page"
            >
              <span className="mr-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Jump to
              </span>
              {jumpLinks.map(([label, hash], i) => (
                <span key={hash} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-2 text-teal-200" aria-hidden>
                      ·
                    </span>
                  )}
                  <Link
                    href={hash}
                    className="font-medium text-teal-700 underline-offset-4 transition hover:text-teal-900 hover:underline"
                  >
                    {label}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        </Container>
      </Section>

      {/* What this page is for */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <p className={ds.eyebrowAcademy}>Part of Academy</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-3xl">
              Two group formats - one clear purpose
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              This page covers two live, group-format learning experiences that sit within the Academy
              ecosystem.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50/60 px-5 py-5">
                <p className={ds.eyebrowAcademy}>Webinars</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  Short, focused live sessions on study abroad topics. Good for orientation, clarity,
                  and structured guidance on a single question.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50/60 px-5 py-5">
                <p className={ds.eyebrowAcademy}>Cohort Workshops</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  Structured multi-day programmes with guided work and group interaction. More depth
                  than a webinar - designed for students ready to make focused progress.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600">
              These are not 1:1 mentorship. For personalised, application-specific support with
              defined deliverables, see the{" "}
              <Link
                href={routes.mentorship}
                className="font-medium text-zinc-800 underline-offset-2 hover:underline"
              >
                Mentorship page
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* Format comparison */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Two formats"
            title="What is the difference?"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <PremiumCard as="div" className="border-zinc-200/90">
              <p className={ds.eyebrowAcademy}>Webinars</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                A webinar is a single live session - approximately 2 hours of structured content
                followed by 1 hour of live Q&A - focused on one specific study abroad topic.
                The format is direct: Dr Subhra covers the topic clearly, then takes questions from
                the group.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Webinars are good for students who want expert-led clarity on a question they have
                been unable to answer reliably elsewhere. There is no multi-day commitment. Topics
                rotate monthly.
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-5 text-xs">
                {[
                  ["Duration", "2 hrs + 1 hr Q&A"],
                  ["Format", "Live, group"],
                  ["Interaction", "Q&A at end"],
                  ["Commitment", "Single session"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-semibold text-zinc-500">{k}</dt>
                    <dd className="mt-0.5 text-zinc-700">{v}</dd>
                  </div>
                ))}
              </dl>
            </PremiumCard>

            <PremiumCard as="div" className="border-teal-200/70 bg-gradient-to-b from-teal-50/30 to-white">
              <p className={ds.eyebrowAcademy}>Cohort Workshops</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                A cohort workshop is a structured programme of at least 8 days, run with a small
                group of students working on the same application challenge.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                There is guided work, structured tasks between sessions, and space for interaction and
                feedback within the group. These go deeper than a webinar and require active
                participation throughout.
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-teal-100 pt-5 text-xs">
                {[
                  ["Duration", "At least 8 days"],
                  ["Format", "Small group, multi-session"],
                  ["Interaction", "Guided work + feedback"],
                  ["Commitment", "Fixed cohort dates"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-semibold text-zinc-500">{k}</dt>
                    <dd className="mt-0.5 text-zinc-700">{v}</dd>
                  </div>
                ))}
              </dl>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* Monthly Webinars */}
      <Section id="webinars" className="scroll-mt-24 border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Monthly webinars"
                title="Live, topic-focused sessions"
                description="Each month, Dr Subhra runs a live webinar on a topic relevant to study abroad and research pathways. Each session covers one area clearly - no padding, no generic advice."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-start">
                <Button href={routes.contact} variant="academyCta">
                  Register for the next webinar
                </Button>
                <Button href={routes.contact} variant="secondary">
                  Join the mailing list
                </Button>
              </div>
              <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-4">
                <p className={`mb-2 ${ds.eyebrow}`}>Format</p>
                <ul className="space-y-1.5 text-xs text-zinc-600">
                  <li>Approximately 2 hours of structured content</li>
                  <li>1 hour live Q&A at the end</li>
                  <li>Recordings shared with registered participants</li>
                  <li>Seats limited to keep Q&A focused</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className={`mb-4 ${ds.eyebrow}`}>Topics rotate and may include</p>
              <ul className="space-y-3">
                {webinarTopics.map((topic) => (
                  <li
                    key={topic}
                    className="flex gap-3 rounded-lg border border-zinc-200 bg-zinc-50/60 px-4 py-3 text-sm leading-relaxed text-zinc-700"
                  >
                    <span
                      className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400"
                      aria-hidden
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cohort Workshops */}
      <Section id="workshops" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Cohort workshops"
            title="Structured small-group learning over multiple days"
            description="For students who have moved past the orientation stage and want to do focused, guided work in a structured group setting."
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
            {workshopFormats.map((item) => (
              <PremiumCard key={item.title} as="div" className="flex flex-col border-zinc-200/90">
                <div className="flex items-start justify-between gap-3">
                  <p className={ds.eyebrowAcademy}>{item.tag}</p>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">{item.body}</p>
              </PremiumCard>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-zinc-200 bg-white px-6 py-5">
            <p className={`mb-3 ${ds.eyebrow}`}>All cohort workshops</p>
            <div className="grid gap-y-2 text-sm text-zinc-700 sm:grid-cols-2">
              {[
                "At least 8 days per workshop",
                "Small group - typically 6 to 15 participants",
                "Structured curriculum with tasks between sessions",
                "Group interaction and directional feedback",
                "Not 1:1 - individual application work is within Mentorship",
                "Fixed cohort dates announced in advance",
              ].map((item) => (
                <div key={item} className="flex gap-2.5">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button href={routes.contact} variant="academyCta">
              Register interest for upcoming cohorts
            </Button>
          </div>
          <p className="mt-4 text-center text-xs text-zinc-500">
            Registering interest places you on the notification list. You will be informed when the
            next cohort opens.
          </p>
        </Container>
      </Section>

      {/* Who this is for */}
      <Section id="who" className="scroll-mt-24 border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Who this is for"
            title="Three types of students these formats serve"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                who: "Students in the exploration stage",
                body: "You are seriously considering studying abroad but have not yet mapped a realistic plan. You need structured orientation from someone who understands the systems - not a YouTube video or a Reddit thread.",
                note: "A webinar is the right starting point.",
              },
              {
                who: "Students not yet ready for 1:1 mentorship",
                body: "You want expert guidance but are not at the stage where individual, application-specific mentorship makes sense yet. Webinars and workshops let you learn and prepare at a group level first.",
                note: "Build a foundation before committing to deeper engagement.",
              },
              {
                who: "Students with a specific gap to address",
                body: "Your SOP is unfocused, your shortlisting is too broad, your research profile needs shaping. A cohort workshop gives you a structured, guided setting to address that gap with a small group.",
                note: "A cohort workshop is the right next step.",
              },
            ].map((item) => (
              <PremiumCard key={item.who} as="div" className="flex flex-col border-zinc-200/90">
                <p className={ds.eyebrowAcademy}>{item.who}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-700">{item.body}</p>
                <p className="mt-3 border-t border-zinc-100 pt-3 text-xs italic leading-relaxed text-zinc-500">
                  {item.note}
                </p>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who these are NOT for */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Not for everyone"
                title="Who these formats are not designed for"
                description="Being clear about this upfront saves time on both sides."
              />
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {[
                  "Students who need individual, application-specific feedback on their own documents - that is what 1:1 mentorship is for.",
                  "Students expecting a personalised strategy built around their specific profile - group formats apply frameworks, not individual analysis.",
                  "Students with an active application requiring immediate, targeted support - book a profile assessment instead.",
                  "Students who are not ready to participate actively - workshops require engagement between sessions, not just attendance.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-lg border border-zinc-200 bg-white px-5 py-4 text-sm leading-relaxed text-zinc-700"
                  >
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* How these differ from 1:1 */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Formats compared"
            title="Webinars and workshops are not mentorship"
            description="This distinction is stated clearly because it matters."
          />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            In a webinar or cohort workshop, Dr Subhra teaches and guides a group. The content applies
            to everyone in the session. Feedback within a workshop is directional - useful for the
            group's shared challenge, not calibrated to one person's specific application.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            In 1:1 mentorship, everything is built around your profile, your documents, your target
            programmes, and your timeline. The scope is agreed at intake. The deliverables are yours.
            The accountability is direct.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Webinars",
                rows: [
                  ["Format", "Group, live"],
                  ["Feedback", "General Q&A"],
                  ["Depth", "Topic-focused"],
                  ["Best for", "Orientation, clarity"],
                  ["Commitment", "Single session"],
                ],
              },
              {
                label: "Cohort Workshops",
                rows: [
                  ["Format", "Small group, multi-day"],
                  ["Feedback", "Directional, group scope"],
                  ["Depth", "Structured curriculum"],
                  ["Best for", "Focused work on one area"],
                  ["Commitment", "At least 8 days"],
                ],
              },
              {
                label: "1:1 Mentorship",
                rows: [
                  ["Format", "Individual"],
                  ["Feedback", "Application-specific"],
                  ["Depth", "Full engagement"],
                  ["Best for", "Complete application strategy"],
                  ["Commitment", "4-12 weeks"],
                ],
              },
            ].map((col) => (
              <div
                key={col.label}
                className="rounded-xl border border-zinc-200 bg-zinc-50/60 px-5 py-5"
              >
                <p className={ds.eyebrowAcademy}>{col.label}</p>
                <dl className="mt-4 space-y-2.5">
                  {col.rows.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[0.6875rem] font-semibold text-zinc-500">{k}</dt>
                      <dd className="text-sm text-zinc-700">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href={routes.mentorship} variant="secondary">
              View 1:1 Mentorship
            </Button>
          </div>
        </Container>
      </Section>

      {/* How to choose */}
      <Section id="how-to-choose" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="How to choose"
            title="Start where you are"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {[
              {
                step: "01",
                condition: "If you are at the beginning",
                body: "Start with a webinar. Get clarity on the landscape, the options, and what the process actually looks like. Then decide what level of support you need.",
                cta: null,
              },
              {
                step: "02",
                condition: "If you have identified a specific gap",
                body: "Register for the relevant cohort workshop. Work on that area in a structured, guided setting with a small group. Then assess whether individual mentorship makes sense for your full application.",
                cta: null,
              },
              {
                step: "03",
                condition: "If you know what you need and are ready to commit",
                body: "Book a profile assessment. This is the entry point into 1:1 mentorship - it aligns your background, goals, and timeline with the right level of engagement.",
                cta: { label: "Book a profile assessment", href: routes.booking },
              },
            ].map((item) => (
              <div
                key={item.step}
                className="grid gap-4 rounded-xl border border-zinc-200 bg-white px-6 py-5 sm:grid-cols-12"
              >
                <div className="sm:col-span-1">
                  <span className="text-[0.6875rem] font-bold tabular-nums tracking-[0.1em] text-teal-500">
                    {item.step}
                  </span>
                </div>
                <div className="sm:col-span-11">
                  <p className="font-serif text-base font-semibold leading-snug text-zinc-900">
                    {item.condition}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">{item.body}</p>
                  {item.cta && (
                    <div className="mt-4">
                      <Button href={item.cta.href} variant="secondary">
                        {item.cta.label}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA ladder visual */}
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-teal-200/70 bg-teal-50/40 px-6 py-6">
            <p className={`mb-4 ${ds.eyebrowAcademy}`}>The progression</p>
            <ol className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0">
              {[
                { label: "Webinar", sub: "Orientation" },
                { label: "Cohort Workshop", sub: "Focused work" },
                { label: "Profile Assessment", sub: "Entry to mentorship" },
                { label: "1:1 Mentorship", sub: "Full engagement" },
              ].map((item, i, arr) => (
                <div key={item.label} className="flex items-center gap-2 sm:flex-1">
                  <div className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-zinc-800">{item.label}</p>
                    <p className="mt-0.5 text-[0.625rem] text-zinc-500">{item.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="shrink-0 text-teal-400 sm:text-xs" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* CTA section */}
      <CtaBand
        sectionClassName="bg-teal-950"
        title="Choose where to start"
        description="Register for the next webinar to get oriented, or book a profile assessment when you are ready to move to individual mentorship."
        descriptionClassName="text-teal-100"
      >
        <Button href={routes.contact} variant="onDark" className="w-full sm:w-auto">
          Register for the next webinar
        </Button>
        <Button href={routes.booking} variant="onDarkOutline" className="w-full sm:w-auto">
          Book a profile assessment
        </Button>
        <Button href={routes.mentorship} variant="onDarkGhost" className="w-full sm:w-auto">
          View 1:1 mentorship
        </Button>
      </CtaBand>

      {/* FAQ */}
      <Section id="faq" className="scroll-mt-24 border-t border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Questions about webinars and workshops"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-sm">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group border-b border-zinc-200 last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white sm:px-6 sm:py-5">
                  <span className="font-serif text-sm font-semibold leading-snug text-zinc-900 sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition group-open:rotate-180"
                    aria-hidden
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-zinc-100 bg-white px-5 py-4 text-sm leading-relaxed text-zinc-700 sm:px-6 sm:py-5 sm:text-base">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </PageMain>
  );
}
