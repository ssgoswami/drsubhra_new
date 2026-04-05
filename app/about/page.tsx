import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Button } from "@/components/ui/Button";
import { ds } from "@/lib/design-system";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr Subhra Sundar | Researcher & Study Abroad Mentor",
  description:
    "Dr Subhra Sundar holds a PhD from the Technical University of Madrid as an Erasmus Mundus Scholar and completed a postdoctoral fellowship at Harvard Medical School. He mentors Indian students preparing for Masters, PhD, and Postdoc applications abroad.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Dr Subhra Sundar | Researcher & Study Abroad Mentor",
    description:
      "PhD from the Technical University of Madrid as an Erasmus Mundus Scholar. Postdoctoral Fellow at Harvard Medical School. Mentor to Indian students preparing for serious academic applications abroad.",
    url: "https://www.drsubhra.com/about/",
    images: [{ url: "/images/subhra_photo115.webp", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr Subhra Sundar | Researcher & Study Abroad Mentor",
    description:
      "PhD from the Technical University of Madrid as an Erasmus Mundus Scholar. Postdoctoral Fellow at Harvard Medical School. Mentor to Indian students preparing for Masters, PhD, and Postdoc applications abroad.",
    images: ["/images/subhra_photo115.webp"],
  },
};

/* ── small reusable primitives ─────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${ds.eyebrow} mb-4`}>{children}</p>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-base leading-[1.8] text-zinc-700 sm:text-[1.0625rem]">
      {children}
    </div>
  );
}

/* ── credential item ───────────────────────────────────────────────── */

function CredentialItem({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" aria-hidden />
      <div>
        <p className="text-sm font-semibold text-zinc-900">{label}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-zinc-600">{detail}</p>
      </div>
    </div>
  );
}

/* ── page ──────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <PageMain>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <Section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(24,24,27,0.04),transparent)]"
          aria-hidden
        />
        <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className={ds.eyebrow}>About Dr Subhra Sundar</p>
              <h1 className="mt-4 font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                I have navigated the path you are preparing for.
              </h1>
              <p className="mt-6 text-lg leading-[1.75] text-zinc-700 sm:text-xl">
                From Visva Bharati University in India to an Erasmus Mundus
                Scholarship in Europe, a PhD from the Technical University of
                Madrid, and a postdoctoral fellowship at Harvard Medical School
                - my academic journey is the foundation of every session I run.
              </p>
              <p className="mt-5 text-base leading-[1.8] text-zinc-600">
                I am Dr Subhra Sundar - a researcher in medical image processing
                and AI in healthcare, and a mentor to Indian students preparing
                for Master's, PhD, and postdoctoral applications abroad. My
                mentorship is not about motivation or generic templates. It is
                about strategy, honesty, and the kind of academic clarity that
                produces competitive applications.
              </p>
            </div>
            {/* Photo */}
            <div className="hidden lg:block">
              <div className="h-72 w-56 overflow-hidden rounded-2xl bg-zinc-100 shadow-md ring-1 ring-zinc-200 xl:h-80 xl:w-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/subhra_photo115.webp"
                  alt="Dr Subhra Sundar"
                  className="h-full w-full object-cover object-top"
                  width={256}
                  height={320}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Background ─────────────────────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className={ds.sectionYLoose}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>My Background</SectionLabel>
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                A research career built across India, Spain, and the United States.
              </h2>
            </div>
            <Prose>
              <p>
                I grew up in India and completed both my Bachelor's and Master's
                degrees in Computer Science at Visva Bharati University. In 2010,
                I was awarded an Erasmus Mundus Scholarship by the European
                Union - a competitive, merit-based scholarship that brought me to
                the Technical University of Madrid in Spain to pursue advanced
                doctoral coursework in Electronic Systems Engineering.
              </p>
              <p>
                I completed my PhD at the Technical University of Madrid (UPM)
                in 2021. My doctoral research focused on 2D-3D image registration
                for image-guided intraoperative radiotherapy, developed in close
                collaboration with surgeons, radiologists, and researchers at
                Hospital General Gregorio Maranon and Clinica Universidad de
                Navarra. The thesis was awarded Sobresaliente - the Outstanding
                distinction.
              </p>
              <p>
                In 2022, I was awarded the Margarita Salas Postdoctoral
                Fellowship - a two-year competitive fellowship funded jointly by
                the European Union and the Government of Spain. That fellowship
                supported continued research at UPM and led to a postdoctoral
                appointment at Harvard Medical School in 2023, where I worked on
                3D medical image analysis and AI-assisted workflows for
                robotics-guided surgical procedures.
              </p>
              <p>
                Alongside my research career, I have served as an interviewer
                and evaluator for Master's and PhD candidate selection at
                European universities - a role that has given me direct insight
                into how selection committees think, what faculty and principal
                investigators actually look for in a candidate, and where most
                applications fall short. That experience is something no coaching
                script can replicate.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* ── Why this exists ────────────────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className={ds.sectionYLoose}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>Why This Exists</SectionLabel>
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                Students who are serious deserve honest guidance.
              </h2>
            </div>
            <Prose>
              <p>
                When I started receiving questions from students and families
                about studying abroad - through webinars, direct messages, and
                conversations after talks - the same problem kept appearing.
                Most available guidance was either too generic to be useful or
                too commercially driven to be trusted. Students were receiving
                timelines and motivational language when what they actually needed
                was honest, specific, research-grounded thinking about their
                individual situation.
              </p>
              <p>
                That is why this mentorship program exists. Students who are
                capable and serious deserve guidance from someone who has actually
                navigated these environments - not someone who has only read about
                them from the outside.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* ── Who this is for ────────────────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className={ds.sectionYLoose}>
          <div className="mb-10 max-w-2xl">
            <SectionLabel>Who This Is For</SectionLabel>
            <h2 className={ds.heading2}>
              Mentorship for students who have decided to apply seriously.
            </h2>
            <p className={`mt-4 ${ds.lead}`}>
              This mentorship works best for students who are ready to plan -
              not students still deciding whether to go.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <PremiumCard as="div">
              <p className={ds.eyebrowMentorship}>Master's</p>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Undergraduate and postgraduate students
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-zinc-700">
                Planning Master's applications to universities in Europe or the
                USA and wanting structured, specific guidance on programs,
                documents, and strategy.
              </p>
            </PremiumCard>
            <PremiumCard as="div">
              <p className={ds.eyebrowMentorship}>PhD</p>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Research-oriented students
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-zinc-700">
                Preparing PhD applications and wanting help identifying the right
                supervisors, building a credible research profile, and writing
                documents that reflect genuine academic direction.
              </p>
            </PremiumCard>
            <PremiumCard as="div">
              <p className={ds.eyebrowMentorship}>Postdoc</p>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                Early-career researchers
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-zinc-700">
                Planning postdoctoral applications and needing to understand how
                to present their research experience and profile competitively to
                international PIs and institutions.
              </p>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* ── What makes this different ──────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className={ds.sectionYLoose}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>What Makes This Different</SectionLabel>
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                Guidance from inside the process, not from the outside.
              </h2>
            </div>
            <div className="space-y-8">
              <Prose>
                <p>
                  Most coaching services focus on the mechanical parts of the
                  process - timelines, templates, checklists. That is useful as
                  far as it goes, but it is rarely what determines whether an
                  application succeeds.
                </p>
                <p>
                  What actually matters at the admissions level is more specific:
                  whether the research fit is genuine, whether the Statement of
                  Purpose reveals a clear intellectual direction, whether the
                  profile has been built with the right programs in mind, whether
                  a student can discuss their own work with confidence in an
                  email to a supervisor or in a selection interview.
                </p>
              </Prose>
              <PremiumCard as="div" className="border-indigo-100 bg-indigo-50/60">
                <p className={ds.eyebrowMentorship}>The Insider Perspective</p>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                  I have sat on the other side of the table.
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-zinc-700">
                  Having served as an interviewer and evaluator for Master's and
                  PhD candidate selection at European universities, I have
                  firsthand experience of how a principal investigator, a faculty
                  panel, or a selection committee actually evaluates a candidate.
                  I know what makes a profile stand out, what raises doubts, and
                  what most applicants never think to address. This perspective -
                  from the evaluator's side of the process - is what I bring to
                  every session.
                </p>
              </PremiumCard>
              <Prose>
                <p>
                  My mentorship works at that level. Sessions are structured
                  around your specific profile, your specific target programs, and
                  the decisions that matter most for your situation. I do not
                  recycle advice between students or apply the same feedback to
                  every SOP. What I offer is genuine attention to your particular
                  case and honest guidance on what your application actually needs.
                </p>
              </Prose>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Credentials ────────────────────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className={ds.sectionYLoose}>
          <div className="mb-10 max-w-2xl">
            <SectionLabel>Credentials and Track Record</SectionLabel>
            <h2 className={ds.heading2}>
              The background behind the guidance.
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <CredentialItem
              label="PhD in Electronic Systems Engineering"
              detail="Technical University of Madrid (UPM), Spain - awarded Sobresaliente (Outstanding) distinction. Research on 2D-3D image registration for image-guided intraoperative radiotherapy."
            />
            <CredentialItem
              label="Erasmus Mundus Scholar"
              detail="European Union - competitive merit-based scholarship for advanced doctoral studies in Europe at the Technical University of Madrid."
            />
            <CredentialItem
              label="Margarita Salas Postdoctoral Fellow"
              detail="European Union and Government of Spain - two-year competitive postdoctoral fellowship recognising research quality and international academic potential."
            />
            <CredentialItem
              label="Postdoctoral Fellow, Harvard Medical School"
              detail="Harvard University - research in 3D medical image analysis, deep learning, and AI-assisted workflows for robotics-guided surgical procedures."
            />
            <CredentialItem
              label="Published Researcher"
              detail="Peer-reviewed publications in international journals and conferences. Research in medical image processing, image registration, deep learning, and AI in healthcare."
            />
            <CredentialItem
              label="Harvard Catalyst Training"
              detail="Fundamentals and Applications of Clinical and Translational Research; Techniques to Writing a Competitive Grant."
            />
            <CredentialItem
              label="Interviewer and Evaluator"
              detail="Served on selection panels for Master's and PhD candidates at European universities - direct experience of how faculty and selection committees assess applicants."
            />
            <CredentialItem
              label="Professional Memberships"
              detail="Member, European Society of Radiology (ESR); Member, Association for Computing Machinery (ACM)."
            />
            <CredentialItem
              label="40+ Webinars, 500+ People Reached"
              detail="Conducted more than 40 webinars on study abroad pathways, application strategy, and academic profile building for Indian students and families."
            />
            <CredentialItem
              label="Founder, Bolpur Udayanpally Aalo NGO"
              detail="An NGO supporting educational and healthcare initiatives for underprivileged children in India."
            />
          </div>
        </Container>
      </Section>

      {/* ── Philosophy ─────────────────────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className={ds.sectionYLoose}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>Mentorship Philosophy</SectionLabel>
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                Honest guidance, not comfortable guidance.
              </h2>
            </div>
            <Prose>
              <p>
                Good mentorship is honest. It acknowledges that not every
                application will succeed, that not every profile is ready right
                now, and that the most useful guidance sometimes requires a
                difficult conversation. I would rather tell a student the truth
                about their application in a session than let them discover it
                through a rejection.
              </p>
              <p>
                I also believe that students learn more when they understand the
                reasoning behind a decision, not just the decision itself. A
                well-mentored student does not only submit a better application
                this cycle - they carry a clearer understanding of their own
                academic direction into everything that follows.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* ── How I Work ─────────────────────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-white">
        <Container className={ds.sectionYLoose}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>How I Work</SectionLabel>
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                Structured sessions, specific outcomes.
              </h2>
            </div>
            <div className="space-y-5">
              <Prose>
                <p>
                  Every session is structured around your specific situation -
                  your academic background, research experience, target programs,
                  and where you are in the application process. Before each
                  session, I review what you share with me.
                </p>
                <p>
                  During the session, we work through the decisions that matter
                  most: program shortlisting, profile gaps, document strategy,
                  supervisor outreach, or application review, depending on your
                  stage. Every session ends with clear, specific next steps - not
                  a general to-do list.
                </p>
              </Prose>
              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Before the session",
                    body: "You share your background, documents, and questions. I review them before we meet.",
                  },
                  {
                    step: "02",
                    title: "During the session",
                    body: "We work through your specific decisions - programs, profile, documents, or strategy.",
                  },
                  {
                    step: "03",
                    title: "After the session",
                    body: "You leave with clear, actionable next steps tailored to your situation and timeline.",
                  },
                ].map(({ step, title, body }) => (
                  <PremiumCard key={step} as="div">
                    <p className="text-[0.6875rem] font-semibold tabular-nums tracking-widest text-zinc-400">
                      {step}
                    </p>
                    <h3 className="mt-2 font-serif text-base font-semibold text-zinc-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.75] text-zinc-700">{body}</p>
                  </PremiumCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Team ───────────────────────────────────────────────────── */}
      <Section className="border-b border-zinc-200 bg-zinc-50">
        <Container className={ds.sectionYLoose}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>The Team</SectionLabel>
              <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                Led directly by Dr Subhra Sundar.
              </h2>
            </div>
            <Prose>
              <p>
                All mentoring sessions, profile assessments, and application
                reviews are conducted or personally overseen by me. You are not
                passed to a junior associate or guided by a template system. A
                small support team handles scheduling, communication, and program
                coordination to keep the experience structured and responsive -
                but the mentorship itself is direct.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* ── Closing CTA ────────────────────────────────────────────── */}
      <Section className="bg-zinc-900">
        <Container className={ds.sectionY}>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-serif text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                If you are planning a serious application, I would be glad to work with you.
              </p>
              <p className="mt-3 text-base leading-[1.75] text-zinc-400">
                Guidance that is specific, honest, and grounded in real academic
                experience - from someone who has made the journey and sat on
                both sides of the process.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:items-end">
              <Button href={routes.mentorship} variant="onDark">
                Explore the Mentorship Program
              </Button>
              <Button href={routes.booking} variant="onDarkOutline">
                Book a Session
              </Button>
            </div>
          </div>
        </Container>
      </Section>

    </PageMain>
  );
}
