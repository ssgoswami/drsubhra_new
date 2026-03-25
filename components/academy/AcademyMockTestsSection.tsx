import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AcademyOfferCard } from "@/components/academy/AcademyOfferCard";
import { Button } from "@/components/ui/Button";
import type { AcademyMockTest } from "@/lib/content/academy";
import { routes } from "@/lib/routes";

export function AcademyMockTestsSection({ items }: { items: AcademyMockTest[] }) {
  return (
    <Section
      id="mock-tests"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Mock tests"
            title="Practice that respects the real exam"
            description="From school levels to competitive entrances-timed mocks and clear feedback loops as each track goes live."
          />
          <Button href={routes.contact} variant="secondary" className="shrink-0 self-start lg:self-auto">
            Enquire about mocks
          </Button>
        </div>
        <ul className="mt-12 grid list-none gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((test) => (
            <li key={test.slug}>
              <AcademyOfferCard
                title={test.title}
                description={test.description}
                badge={
                  <span className="rounded-full bg-zinc-200/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-700">
                    Coming soon
                  </span>
                }
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
