import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/routes";

export function AcademySectionBanner() {
  return (
    <div className="border-b border-teal-100/80 bg-teal-50/60">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2.5 text-xs">
        <span className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-teal-800">
          <span className="h-1 w-1 rounded-full bg-teal-500" aria-hidden />
          Academy - courses, mock tests, career guidance, and Q&amp;A
        </span>
        <Link
          href={routes.mentorship}
          className="text-[0.6875rem] font-medium text-teal-700 underline-offset-2 hover:underline"
        >
          Looking for one-to-one mentorship? →
        </Link>
      </Container>
    </div>
  );
}
