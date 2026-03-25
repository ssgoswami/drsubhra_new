import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function AcademyCtaBand() {
  return (
    <CtaBand
      sectionClassName="bg-teal-950"
      title="Ready to explore the Academy?"
      description={
        <>
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
        </>
      }
      descriptionClassName="text-teal-100"
    >
      <Button href={routes.contact} variant="onDark" className="w-full sm:w-auto">
        Join / explore
      </Button>
      <Button href="#courses" variant="onDarkOutline" className="w-full sm:w-auto">
        Browse courses
      </Button>
      <Button href={routes.mentorship} variant="onDarkGhost" className="w-full sm:w-auto">
        Study abroad mentoring
      </Button>
    </CtaBand>
  );
}
