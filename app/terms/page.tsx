import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ds } from "@/lib/design-system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Dr Subhra Sundar",
  description:
    "Terms of use for drsubhra.com - rules governing use of this website, mentorship services, and Academy programmes.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | Dr Subhra Sundar",
    description: "Terms of use for drsubhra.com - rules governing use of this website and its services.",
    url: "https://www.drsubhra.com/terms/",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Dr Subhra Sundar",
    description: "Terms of use for drsubhra.com - rules governing use of this website and its services.",
  },
};

export default function TermsPage() {
  return (
    <PageMain className="flex-1">
      <Section className="border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
        <Container className="py-12 sm:py-16 lg:py-20">
          <PageHero
            align="left"
            eyebrow="Legal"
            title="Terms of use"
            maxWidthClass="max-w-3xl"
          />
        </Container>
      </Section>
      <Section>
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className={ds.legalProse}>
            <p>
              Terms of use will be added here ahead of paid offerings and
              platform features.
            </p>
          </div>
        </Container>
      </Section>
    </PageMain>
  );
}
