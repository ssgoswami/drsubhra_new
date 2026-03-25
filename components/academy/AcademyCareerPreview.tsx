import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { routes } from "@/lib/routes";

export function AcademyCareerPreview() {
  return (
    <Section
      id="career-guidance"
      className="scroll-mt-24 border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Career guidance
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Decisions worth getting right
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
              A growing hub for pathways—what to study, where it leads, and how
              to think about placements without hype. Larger directories and
              tools will plug into this section as they ship.
            </p>
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
          <PremiumCard
            as="div"
            className="border-slate-200/90 bg-gradient-to-br from-slate-50 to-white shadow-md"
          >
            <p className="text-sm font-semibold text-zinc-900">Preview</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              Soon you&apos;ll browse tracks by stream, level, and outcome—with
              filters and saved shortlists. For now, reach out to shape what we
              build first.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-zinc-300 bg-white/80 p-4 text-center text-xs font-medium text-zinc-500">
              Interactive career explorer — roadmap in progress
            </div>
          </PremiumCard>
        </div>
      </Container>
    </Section>
  );
}
