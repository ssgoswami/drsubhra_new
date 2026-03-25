import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function AcademyCtaBand() {
  return (
    <Section className="final-cta-band bg-teal-950 text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to explore the Academy?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-teal-100 sm:text-lg">
            Enquire to join waitlists, suggest a course or mock track, or get
            notified when new programmes open. For one-to-one study abroad
            mentoring, use{" "}
            <a
              href={routes.mentorship}
              className="font-medium text-white underline-offset-2 hover:underline"
            >
              Mentorship
            </a>{" "}
            instead.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={routes.contact} variant="onDark" className="w-full sm:w-auto">
              Join / explore
            </Button>
            <Button href="#courses" variant="onDarkOutline" className="w-full sm:w-auto">
              Browse courses
            </Button>
            <Button href={routes.mentorship} variant="onDarkGhost" className="w-full sm:w-auto">
              Study abroad mentoring
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
