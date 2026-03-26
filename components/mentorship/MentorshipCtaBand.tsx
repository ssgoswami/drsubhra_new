import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function MentorshipCtaBand() {
  return (
    <CtaBand
      sectionClassName="bg-indigo-950"
      title="Start with clarity - not guesswork"
      description="Book a session to align on your Masters abroad mentorship, PhD application guidance, or Postdoc strategy - with clear timeline and scope."
      descriptionClassName="text-indigo-200"
    >
      <Button href={routes.booking} variant="onDark" className="w-full sm:w-auto">
        Book Session
      </Button>
      <Button href={routes.contact} variant="onDarkOutline" className="w-full sm:w-auto">
        Contact
      </Button>
      <Button href={routes.about} variant="onDarkGhost" className="w-full sm:w-auto">
        About Dr Subhra
      </Button>
    </CtaBand>
  );
}
