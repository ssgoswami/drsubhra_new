import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { routes } from "@/lib/routes";

export function HomeAboutPreview() {
  return (
    <Section className="border-b border-zinc-200 bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="About"
            title="Research-grounded mentorship"
            description={
              <>
                I am a researcher and educator with international experience
                across Europe and the United States. My work spans computer
                science, medical imaging, and biomedical engineering—with a
                mentoring style that is structured, transparent, and built for
                applicants who are ready to execute with discipline.
              </>
            }
          />
          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100/80 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Philosophy
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-800">
              Quality over volume: realistic assessments, defined deliverables,
              and timelines that respect both your goals and the standards of
              top programmes and labs.
            </p>
            <div className="mt-6">
              <Button href={routes.about} variant="secondary">
                Read full profile
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
