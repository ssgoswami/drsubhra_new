import type { ReactNode } from "react";
import { ds } from "@/lib/design-system";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={[alignClass, className].filter(Boolean).join(" ")}>
      {eyebrow ? <p className={ds.eyebrow}>{eyebrow}</p> : null}
      <h2
        className={[eyebrow ? ds.heading2Tight : "", ds.heading2]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <div className={`mt-3 ${ds.lead}`}>{description}</div>
      ) : null}
    </div>
  );
}
