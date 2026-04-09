import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AcademySectionBanner } from "@/components/academy/AcademySectionBanner";
import { AcademyCareerPreview } from "@/components/academy/AcademyCareerPreview";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Guidance | Dr Subhra Academy",
  description:
    "Study abroad pathways, programme mapping, and career decisions for Indian STEM students - honest guidance without the noise.",
  alternates: { canonical: "/academy/career-guidance/" },
  openGraph: {
    title: "Career Guidance | Dr Subhra Academy",
    description:
      "Study abroad pathways, programme mapping, and career decisions for Indian STEM students - honest guidance without the noise.",
    url: "https://www.drsubhra.com/academy/career-guidance/",
    images: [{ url: "/images/subhra_photo115.webp", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Guidance | Dr Subhra Academy",
    description:
      "Study abroad pathways, programme mapping, and career decisions for Indian STEM students - honest guidance without the noise.",
    images: ["/images/subhra_photo115.webp"],
  },
};

export default function CareerGuidancePage() {
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
              Career Guidance - Academy
            </BadgePill>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-900 sm:text-5xl lg:text-6xl">
              Decisions worth getting right
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-zinc-700 sm:text-lg">
              A growing hub for study abroad pathways - what to study, where it leads, and how to
              think about programmes and placements without the noise.{" "}
              <span className="font-medium text-zinc-900">Curated for Indian STEM students.</span>
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
              <Button href={routes.contact} variant="academyCta" className="w-full sm:w-auto">
                Get in touch
              </Button>
              <Button href={routes.mentorship} variant="secondary" className="w-full sm:w-auto">
                Explore 1:1 mentorship
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <AcademyCareerPreview />

      <CtaBand
        sectionClassName="bg-teal-950"
        title="Shape what we build next"
        description="The career guidance hub is expanding. Reach out to tell us what pathways, decisions, or resources would be most useful to you."
        descriptionClassName="text-teal-100"
      >
        <Button href={routes.contact} variant="onDark" className="w-full sm:w-auto">
          Get in touch
        </Button>
        <Button href={routes.blog} variant="onDarkOutline" className="w-full sm:w-auto">
          Read articles
        </Button>
        <Button href={routes.academy} variant="onDarkGhost" className="w-full sm:w-auto">
          Back to Academy
        </Button>
      </CtaBand>
    </PageMain>
  );
}
