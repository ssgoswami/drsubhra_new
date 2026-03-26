const site = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr Subhra Sundar",
  url: "https://www.drsubhra.com",
  description:
    "Structured research mentorship and study abroad guidance for Indian students, plus Dr Subhra Academy for academic courses, mock tests, and career guidance.",
  inLanguage: "en-IN",
} as const;

/** Lightweight structured data for the whole site (SEO). */
export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
    />
  );
}
