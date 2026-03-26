import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TwoColumnFeature } from "@/components/layout/TwoColumnFeature";
import { routes } from "@/lib/routes";

export function HomeAboutPreview() {
  return (
    <TwoColumnFeature
      sectionClassName="border-b border-zinc-200/50 bg-white"
      left={
        <SectionHeading
          eyebrow="About"
          title="Research-grounded mentorship"
          description={
            <>
              I am a researcher and educator with international experience
              across Europe and the United States. My work spans computer
              science, medical imaging, and biomedical engineering. The research
              mentorship and study abroad guidance I offer Indian students is
              structured, transparent, and built for applicants who are ready to
              execute with discipline.
            </>
          }
        />
      }
      right={
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50/80 p-8 shadow-sm">
          {/* Thin top rule — editorial accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent" aria-hidden />
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
            Philosophy
          </p>
          <p className="mt-3 text-base leading-[1.75] text-zinc-700">
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
      }
    />
  );
}
