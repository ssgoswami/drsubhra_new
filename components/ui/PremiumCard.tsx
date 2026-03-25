import type { ReactNode } from "react";

type PremiumCardTag = "article" | "div";

export function PremiumCard({
  as: Tag = "article",
  id,
  children,
  className,
}: {
  as?: PremiumCardTag;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      id={id}
      className={[
        "rounded-xl border border-zinc-200 bg-white p-6 shadow-sm ring-1 ring-zinc-900/[0.04]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
