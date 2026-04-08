import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { ds } from "@/lib/design-system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udayanpandit Initiative | Dr Subhra",
  description:
    "Learn about Udayanpandit, a community-driven educational initiative supported by Dr Subhra, where students learn and educators contribute.",
  alternates: { canonical: "/udayanpandit/" },
  openGraph: {
    title: "Udayanpandit Initiative | Dr Subhra",
    description:
      "A community-driven educational platform where students learn and educators contribute - supported by Dr Subhra.",
    url: "https://www.drsubhra.com/udayanpandit/",
    images: [{ url: "/images/subhra_photo115.webp", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udayanpandit Initiative | Dr Subhra",
    description:
      "A community-driven educational platform where students learn and educators contribute - supported by Dr Subhra.",
    images: ["/images/subhra_photo115.webp"],
  },
};

const UP_URL = "https://www.udayanpandit.com";

const features = [
  {
    title: "Student and teacher registration",
    body: "An account-based platform where students and educators join with clear roles and structured participation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Subject-wise question and answer",
    body: "Students ask questions by class and subject; educators respond within a structured, moderated system.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Educational resources and shared materials",
    body: "A growing library of learning materials contributed by educators and curated for student use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Teacher contribution and knowledge sharing",
    body: "Educators bring their expertise to a platform where contribution has lasting value beyond their institution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Mock tests and academic practice",
    body: "Structured practice tests organised by level and subject to help students prepare for exams with discipline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Account-based participation tracking",
    body: "Students and educators have accounts that track contributions, questions answered, and learning progress over time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function UdayanpanditPage() {
  return (
    <PageMain className="flex-1">

      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/60">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(120,113,108,0.06),transparent)]"
          aria-hidden
        />
        <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <BadgePill className="mx-auto border-zinc-300/80 bg-white/80 text-zinc-600">
              Supported by Dr Subhra
            </BadgePill>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-900 sm:text-5xl lg:text-6xl">
              Udayanpandit: A Community Education Initiative
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-zinc-600 sm:text-lg">
              A community-driven educational platform where students learn and educators contribute.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.75] text-zinc-600">
              Udayanpandit is an initiative created to build a meaningful learning community where
              students can ask questions, access educational resources, practice through tests, and
              learn with the support of dedicated teachers. It is designed as a collaborative
              platform where educators contribute knowledge and students benefit from structured,
              supportive academic engagement.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
              <Button
                href={UP_URL}
                variant="primary"
                external
                aria-label="Visit Udayanpandit (opens in a new tab)"
                className="w-full sm:w-auto"
              >
                Visit Udayanpandit
              </Button>
              <Button
                href={`${UP_URL}#how-it-works`}
                variant="secondary"
                external
                aria-label="Learn how Udayanpandit works (opens in a new tab)"
                className="w-full sm:w-auto"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why I created it */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="The idea behind it"
              title="Why I Created Udayanpandit"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-700">
              <p>
                As an educator and mentor, I have long felt that many students need more than formal
                classroom teaching. They need a space where they can ask questions freely, receive
                guidance, find quality learning materials, and stay connected to a broader academic
                community.
              </p>
              <p>
                At the same time, many teachers and educators are willing to contribute beyond their
                institutions if a meaningful platform exists. Udayanpandit was created with that
                vision: to bring together those who can teach and those who want to learn.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What the platform enables */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Platform features"
            title="What the Platform Enables"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <PremiumCard key={item.title} as="div" className="flex flex-col border-zinc-200/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold leading-snug text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* For students and educators */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Who it serves"
            title="For Students and Educators"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <PremiumCard as="div" className="border-zinc-200/90">
              <p className={ds.eyebrow}>For Students</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                Students can use Udayanpandit to ask academic questions by class and subject, learn
                from teacher responses, access educational materials, participate in tests, and grow
                within an account-based learning environment.
              </p>
              <div className="mt-6">
                <Button
                  href={UP_URL}
                  variant="secondary"
                  external
                  aria-label="Explore Udayanpandit as a student (opens in a new tab)"
                >
                  Explore the platform
                </Button>
              </div>
            </PremiumCard>
            <PremiumCard as="div" className="border-zinc-200/90">
              <p className={ds.eyebrow}>For Teachers</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                Teachers and educators can join Udayanpandit to answer student questions, contribute
                knowledge, help build useful educational resources, organise tests, and become part
                of a meaningful academic community.
              </p>
              <div className="mt-6">
                <Button
                  href={UP_URL}
                  variant="secondary"
                  external
                  aria-label="Join Udayanpandit as an educator (opens in a new tab)"
                >
                  Join as an educator
                </Button>
              </div>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* My role */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Founder's note"
              title="My Role"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-700">
              <p>
                I support Udayanpandit as a founder and educator. My role is to guide the vision,
                support the platform's growth, and help create the conditions in which students and
                educators can benefit from a long-term educational ecosystem.
              </p>
              <p>
                Udayanpandit is not intended to be a personality-centered platform. It is intended
                to become a contribution-centered platform.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sustainability */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Sustainability and purpose"
              title="Built for the Long Term"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-700">
              <p>
                Udayanpandit is conceived as a social and educational initiative. Over time, a small
                fee may be introduced in selected areas only to support platform maintenance,
                technical running costs, and long-term sustainability. The core idea, however,
                remains community contribution and educational value.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA band */}
      <CtaBand
        sectionClassName="bg-zinc-900"
        title="Explore the Initiative"
        description={
          <>
            If you are a student, you are welcome to explore the platform and become part of a
            learning community. If you are a teacher or educator, you are invited to contribute
            your knowledge to help students who need guidance beyond the limits of their classroom.{" "}
            <span className="block mt-3 font-medium text-zinc-200">
              Education grows when participation becomes collective.
            </span>
          </>
        }
        descriptionClassName="text-zinc-300"
      >
        <Button
          href={UP_URL}
          variant="onDark"
          external
          aria-label="Explore Udayanpandit (opens in a new tab)"
          className="w-full sm:w-auto"
        >
          Explore Udayanpandit
        </Button>
        <Button
          href={UP_URL}
          variant="onDarkOutline"
          external
          aria-label="Join Udayanpandit as an educator (opens in a new tab)"
          className="w-full sm:w-auto"
        >
          Join as an Educator
        </Button>
      </CtaBand>

    </PageMain>
  );
}
