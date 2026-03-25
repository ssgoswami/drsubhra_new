import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * Two-column feature layout: Section > Container > responsive grid.
 * Used for side-by-side heading+panel sections across the site.
 *
 * `reverse` — on mobile, show the right column first (order swap).
 * `align`   — vertical alignment of the two columns on desktop.
 */
export function TwoColumnFeature({
  id,
  sectionClassName = "",
  left,
  right,
  align = "center",
  reverse = false,
}: {
  id?: string;
  sectionClassName?: string;
  left: ReactNode;
  right: ReactNode;
  align?: "center" | "start";
  reverse?: boolean;
}) {
  const alignClass = align === "start" ? "md:items-start" : "md:items-center";
  const leftOrder = reverse ? "order-2 md:order-1" : undefined;
  const rightOrder = reverse ? "order-1 md:order-2" : undefined;

  return (
    <Section
      id={id}
      className={[id ? "scroll-mt-24" : "", sectionClassName].filter(Boolean).join(" ")}
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className={["grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16", alignClass].join(" ")}>
          <div className={leftOrder}>{left}</div>
          <div className={rightOrder}>{right}</div>
        </div>
      </Container>
    </Section>
  );
}
