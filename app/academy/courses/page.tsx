import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AcademySectionBanner } from "@/components/academy/AcademySectionBanner";
import { AcademyCoursesSection } from "@/components/academy/AcademyCoursesSection";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { academyCourses } from "@/lib/content/academy";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Dr Subhra Academy",
  description:
    "Flagship academic courses in research methodology, image processing, and AI/ML - designed for serious STEM learners and early researchers.",
  alternates: { canonical: "/academy/courses/" },
  openGraph: {
    title: "Courses | Dr Subhra Academy",
    description:
      "Flagship academic courses in research methodology, image processing, and AI/ML - designed for serious STEM learners and early researchers.",
    url: "https://www.drsubhra.com/academy/courses/",
    images: [{ url: "/images/subhra_photo115.webp", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses | Dr Subhra Academy",
    description:
      "Flagship academic courses in research methodology, image processing, and AI/ML - designed for serious STEM learners and early researchers.",
    images: ["/images/subhra_photo115.webp"],
  },
};

export default function CoursesPage() {
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
              Courses - Academy
            </BadgePill>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-900 sm:text-5xl lg:text-6xl">
              Deep academic programmes - methodology to cutting-edge technology
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-zinc-700 sm:text-lg">
              Flagship course lines designed for serious learners. Covering research methodology,
              image processing, and AI/ML - built to scale with your academic and research goals.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
              <Button href="#courses" variant="academyCta" className="w-full sm:w-auto">
                View programmes
              </Button>
              <Button href={routes.contact} variant="secondary" className="w-full sm:w-auto">
                Enquire about courses
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <AcademyCoursesSection courses={academyCourses} />

      <CtaBand
        sectionClassName="bg-teal-950"
        title="Get notified when courses open"
        description="All programmes are in development. Register your interest to be first on the list when a cohort opens."
        descriptionClassName="text-teal-100"
      >
        <Button href={routes.contact} variant="onDark" className="w-full sm:w-auto">
          Register interest
        </Button>
        <Button href={routes.academy} variant="onDarkOutline" className="w-full sm:w-auto">
          Back to Academy
        </Button>
        <Button href={routes.mentorship} variant="onDarkGhost" className="w-full sm:w-auto">
          Study abroad mentoring
        </Button>
      </CtaBand>
    </PageMain>
  );
}
