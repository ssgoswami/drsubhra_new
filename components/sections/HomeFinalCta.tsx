import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function HomeFinalCta() {
  return (
    <CtaBand
      sectionClassName="bg-zinc-900"
      title="Ready for the next step?"
      description="Book a session for personalised study abroad guidance on your Masters, PhD, or Postdoc application - or explore the Academy for academic courses, mock tests, and career guidance."
    >
      <Button href={routes.booking} variant="onDark" className="w-full sm:w-auto">
        Book Session
      </Button>
      <Button href={routes.academy} variant="onDarkOutline" className="w-full sm:w-auto">
        Explore Academy
      </Button>
      <Button href={routes.contact} variant="onDarkGhost" className="w-full sm:w-auto">
        Contact
      </Button>
    </CtaBand>
  );
}
