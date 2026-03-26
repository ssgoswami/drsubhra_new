import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ds } from "@/lib/design-system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr Subhra Sundar",
  description:
    "Privacy policy for drsubhra.com - how personal data collected through enquiries and bookings is stored, used, and protected.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Dr Subhra Sundar",
    description: "Privacy policy for drsubhra.com - how personal data is stored, used, and protected.",
    url: "https://www.drsubhra.com/privacy/",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Dr Subhra Sundar",
    description: "Privacy policy for drsubhra.com - how personal data is stored, used, and protected.",
  },
};

export default function PrivacyPage() {
  return (
    <PageMain className="flex-1">
      <Section className="border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
        <Container className="py-12 sm:py-16 lg:py-20">
          <PageHero
            align="left"
            eyebrow="Legal"
            title="Privacy policy"
            maxWidthClass="max-w-3xl"
          />
        </Container>
      </Section>
      <Section>
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className={ds.legalProse}>
            <p>
              A full privacy policy will be published here before collecting
              payments or personal data at scale.
            </p>
          </div>
        </Container>
      </Section>
    </PageMain>
  );
}
