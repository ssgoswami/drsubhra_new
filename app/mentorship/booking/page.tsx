import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a session",
  description:
    "Book a one-to-one study abroad mentorship session with Dr Subhra. Structured intake and clear scope for Masters, PhD, and Postdoc applicants.",
  alternates: { canonical: "/mentorship/booking" },
};

export default function BookingPage() {
  return (
    <PageMain className="flex-1">
      <Section className="border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
        <Container className="py-12 sm:py-16 lg:py-20">
          <PageHero
            align="left"
            eyebrow="Mentorship"
            title="Book a session"
            description="The full booking experience will live here. For now, use the official booking form or contact page."
            maxWidthClass="max-w-2xl"
          />
        </Container>
      </Section>
      <Section>
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="https://forms.gle/D5ZZ6c2mTVzi6fkFA"
              variant="primary"
              external
              aria-label="Open booking form (opens in a new tab)"
            >
              Open booking form
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </Container>
      </Section>
    </PageMain>
  );
}
