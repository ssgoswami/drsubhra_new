import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ds } from "@/lib/design-system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Dr Subhra handles information on this site. Full policy to be published before payments or scaled data collection.",
  alternates: { canonical: "/privacy" },
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
