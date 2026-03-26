import { PageMain } from "@/components/layout/PageMain";
import { HomeAboutPreview } from "@/components/sections/HomeAboutPreview";
import { HomeCredibility } from "@/components/sections/HomeCredibility";
import { HomeFeaturedBlog } from "@/components/sections/HomeFeaturedBlog";
import { HomeFinalCta } from "@/components/sections/HomeFinalCta";
import { HomeFocusAreas } from "@/components/sections/HomeFocusAreas";
import { HomeHero } from "@/components/sections/HomeHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Subhra Sundar | Study Abroad Mentorship for Masters, PhD & Postdoc",
  description:
    "Structured, research-driven mentorship for Indian students applying to fully funded Masters, PhD, and Postdoc programmes in Europe and the USA. From university selection to final submission.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dr Subhra Sundar | Study Abroad Mentorship for Masters, PhD & Postdoc",
    description:
      "Structured, research-driven mentorship for Indian students applying to fully funded Masters, PhD, and Postdoc programmes abroad.",
    url: "https://www.drsubhra.com/",
    images: [{ url: "/images/subhra_photo115.png", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Subhra Sundar | Study Abroad Mentorship for Masters, PhD & Postdoc",
    description:
      "Structured, research-driven mentorship for Indian students applying to fully funded Masters, PhD, and Postdoc programmes abroad.",
    images: ["/images/subhra_photo115.png"],
  },
};

export default function Home() {
  return (
    <PageMain className="flex-1">
      <HomeHero />
      <HomeFocusAreas />
      <HomeAboutPreview />
      <HomeCredibility />
      <HomeFeaturedBlog />
      <HomeFinalCta />
    </PageMain>
  );
}
