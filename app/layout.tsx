import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import "./globals.css";

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drsubhra.com"),
  title: {
    default: "Dr Subhra Sundar | Study Abroad Mentor & Researcher",
    template: "%s | Dr Subhra Sundar",
  },
  description:
    "Structured mentorship for Masters, PhD, and Postdoc study abroad applications, plus Dr Subhra Academy for STEM courses, mock tests, and career guidance.",
  robots: {
    index: true,
    follow: true,
  },
  // Favicon — app/favicon.ico is served automatically by Next.js.
  // Place a 180×180 PNG at public/apple-touch-icon.png for Apple devices.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.drsubhra.com",
    siteName: "Dr Subhra Sundar",
    title: "Dr Subhra Sundar | Study Abroad Mentor & Researcher",
    description:
      "Structured mentorship for Masters, PhD, and Postdoc applications abroad, plus Academy programmes for STEM students.",
    locale: "en_IN",
    // Replace og-image.png with a 1200×630 banner for best social sharing previews.
    // Until then, the profile photo is used as the fallback.
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr Subhra Sundar - Researcher, Mentor, Educator",
      },
      {
        url: "/images/subhra_photo115.png",
        width: 340,
        height: 347,
        alt: "Dr Subhra Sundar - Researcher, Mentor, Educator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Subhra Sundar | Study Abroad Mentor & Researcher",
    description:
      "Structured mentorship for Masters, PhD, and Postdoc applications abroad, plus Academy programmes for STEM students.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900">
        <GoogleAnalytics />
        <SiteJsonLd />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
