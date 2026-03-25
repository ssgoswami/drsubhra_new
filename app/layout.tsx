import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
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
    default: "Dr Subhra | Study Abroad Mentor",
    template: "%s | Dr Subhra",
  },
  description:
    "Mentorship for Masters, PhD, and Postdoc study abroad, plus Dr Subhra Academy for courses, mocks, and career guidance—structured support for Indian students.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.drsubhra.com",
    siteName: "Dr Subhra",
    title: "Dr Subhra | Study Abroad Mentor",
    description:
      "Mentorship for Masters, PhD, and Postdoc abroad, plus Academy programmes—structured guidance and research-fit strategy.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Dr Subhra | Study Abroad Mentor",
    description:
      "Mentorship for Masters, PhD, and Postdoc abroad, plus Academy programmes—structured guidance for Indian students.",
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
        <SiteJsonLd />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
