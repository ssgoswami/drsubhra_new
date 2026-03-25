import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function HomeFinalCta() {
  return (
    <Section className="final-cta-band bg-zinc-900 text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready for the next step?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            Book a mentorship session to clarify your study-abroad pathway, or
            explore the Academy for courses, mocks, and career guidance as they
            roll out.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button href={routes.booking} variant="onDark" className="w-full sm:w-auto">
              Book Session
            </Button>
            <Button
              href={routes.academy}
              variant="onDarkOutline"
              className="w-full sm:w-auto"
            >
              Explore Academy
            </Button>
            <Button href={routes.contact} variant="onDarkGhost" className="w-full sm:w-auto">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
