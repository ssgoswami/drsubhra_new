import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/routes";

export function MentorshipSectionBanner() {
  return (
    <div className="border-b border-indigo-100/80 bg-indigo-50/60">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2.5 text-xs">
        <span className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-indigo-800">
          <span className="h-1 w-1 rounded-full bg-indigo-500" aria-hidden />
          Mentorship - one-to-one study abroad guidance
        </span>
        <Link
          href={routes.academy}
          className="text-[0.6875rem] font-medium text-indigo-600 underline-offset-2 hover:underline"
        >
          Explore Academy →
        </Link>
      </Container>
    </div>
  );
}
