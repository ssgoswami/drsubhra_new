import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function MentorshipCtaBand() {
  return (
    <CtaBand
      sectionClassName="bg-indigo-950"
      title="Ready to apply with a real strategy?"
      description="Book a session to get clarity on fit, funding, and next steps - for Masters, PhD, or Postdoc applications abroad. Defined scope, no guesswork."
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
