import type { ReactNode } from "react";
import { ds } from "@/lib/design-system";
import { BadgePill } from "./BadgePill";

export function PageIntro({
  badge,
  title,
  description,
  badgeClassName,
  titleClassName,
  descriptionClassName,
  wrapperClassName,
}: {
  badge: ReactNode;
  title: ReactNode;
  description: ReactNode;
  wrapperClassName?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div
      className={[
        "mx-auto max-w-2xl space-y-6 text-center",
        wrapperClassName,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <BadgePill className={badgeClassName}>{badge}</BadgePill>
      <h1
        className={[ds.display, titleClassName].filter(Boolean).join(" ")}
      >
        {title}
      </h1>
      <div
        className={[
          "mx-auto",
          ds.leadMaxWidth,
          ds.lead,
          descriptionClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {description}
      </div>
    </div>
  );
}

