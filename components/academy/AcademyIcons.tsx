/** Simple inline icons for Academy pillar cards (no extra deps). */

export function IconBook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v15.128A23.598 23.598 0 0 1 6 18c1.052 0 2.062.18 3 .512m0-15.042A8.967 8.967 0 0 1 18 3.75c1.052 0 2.062.18 3 .512v15.128a23.598 23.598 0 0 0-3-.512c-1.052 0-2.062.18-3 .512m0 0V3.75"
      />
    </svg>
  );
}

export function IconClipboard({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 18H5.625A2.625 2.625 0 0 1 3 19.875V8.625A2.625 2.625 0 0 1 5.625 6h12.75a2.625 2.625 0 0 1 2.625 2.625V19.875A2.625 2.625 0 0 1 18.375 22H10.5a2.25 2.25 0 0 1-2.25-2.25v-1.875m8.25-12h.008v.015H16.5V8.25Z"
      />
    </svg>
  );
}

export function IconCompass({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.24 7.76-1.804 5.411a2.25 2.25 0 0 1-1.423 1.423L7.6 16.4l1.804-5.411a2.25 2.25 0 0 1 1.423-1.423l5.411-1.804Z"
      />
    </svg>
  );
}

export function IconMessage({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337L5.05 21l1.395-3.72C5.512 15.042 5 13.574 5 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    </svg>
  );
}

const icons = {
  book: IconBook,
  clipboard: IconClipboard,
  compass: IconCompass,
  message: IconMessage,
} as const;

export function AcademyPillarIcon({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
