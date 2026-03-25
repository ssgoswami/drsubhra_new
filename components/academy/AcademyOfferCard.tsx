import type { ReactNode } from "react";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function AcademyOfferCard({
  title,
  description,
  footer,
  badge,
  children,
}: {
  title: string;
  description: string;
  footer?: ReactNode;
  badge?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <PremiumCard
      as="div"
      className="flex h-full flex-col border-zinc-200/90 transition hover:border-zinc-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        {badge}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">
        {description}
      </p>
      {children ? <div className="mt-4">{children}</div> : null}
      {footer ? <div className="mt-4 border-t border-zinc-100 pt-4">{footer}</div> : null}
    </PremiumCard>
  );
}
