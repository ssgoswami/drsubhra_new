import type { ReactNode } from "react";
import { ds } from "@/lib/design-system";

/**
 * Compact hero block for inner pages (eyebrow + H1 + optional lead).
 * For full-width marketing intros, prefer {@link PageIntro}.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  maxWidthClass,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  /** e.g. max-w-3xl (center) or max-w-2xl (left) */
  maxWidthClass?: string;
  className?: string;
}) {
  const width =
    maxWidthClass ?? (align === "center" ? "max-w-3xl" : "max-w-2xl");
  const alignCls = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <div className={[width, alignCls, className].filter(Boolean).join(" ")}>
      <p className={ds.eyebrow}>{eyebrow}</p>
      <h1 className={[ds.heading2Tight, ds.pageTitle].filter(Boolean).join(" ")}>
        {title}
      </h1>
      {description ? (
        <div
          className={[
            "mt-4",
            ds.lead,
            align === "center" ? `${ds.leadMaxWidth} mx-auto` : "max-w-2xl",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
