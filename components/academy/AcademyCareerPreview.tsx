import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TwoColumnFeature } from "@/components/layout/TwoColumnFeature";
import { routes } from "@/lib/routes";

export function AcademyCareerPreview() {
  return (
    <TwoColumnFeature
      id="career-guidance"
      sectionClassName="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white"
      left={
        <div>
          <SectionHeading
            eyebrow="Career guidance"
            title="Decisions worth getting right"
            description="A growing hub for pathways-what to study, where it leads, and how to think about placements without hype. Larger directories and tools will plug into this section as they ship."
          />
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-700 marker:text-slate-600">
            <li>Programme and career mapping (expandable)</li>
            <li>Study-abroad vs domestic trade-offs (content layer)</li>
            <li>Resources curated for Indian students</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={routes.contact} variant="primary">
              Explore career guidance
            </Button>
            <Button href={routes.blog} variant="secondary">
              Read related articles
            </Button>
          </div>
        </div>
      }
      right={
        <PremiumCard
          as="div"
          className="border-slate-200/90 bg-gradient-to-br from-slate-50 to-white shadow-md"
        >
          <p className="text-sm font-semibold text-zinc-900">Preview</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            Soon you&apos;ll browse tracks by stream, level, and outcome-with
            filters and saved shortlists. For now, reach out to shape what we
            build first.
          </p>
          <div className="mt-6 rounded-xl border border-dashed border-zinc-300 bg-white/80 p-4 text-center text-xs font-medium text-zinc-500">
            Interactive career explorer - roadmap in progress
          </div>
        </PremiumCard>
      }
    />
  );
}
