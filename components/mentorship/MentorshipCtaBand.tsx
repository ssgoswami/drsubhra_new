import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function MentorshipCtaBand() {
  return (
    <Section className="final-cta-band bg-indigo-950 text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Start with clarity—not guesswork
          </h2>
          <p className="mt-4 text-base leading-relaxed text-indigo-200 sm:text-lg">
            Book a session to align on your pathway, timeline, and the right
            level of support. Mentorship stays separate from Academy offerings.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={routes.booking} variant="onDark" className="w-full sm:w-auto">
              Book Session
            </Button>
            <Button href={routes.contact} variant="onDarkOutline" className="w-full sm:w-auto">
              Contact
            </Button>
            <Button href={routes.about} variant="onDarkGhost" className="w-full sm:w-auto">
              About Dr Subhra
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
