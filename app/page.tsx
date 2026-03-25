import { PageMain } from "@/components/layout/PageMain";
import { HomeAboutPreview } from "@/components/sections/HomeAboutPreview";
import { HomeCredibility } from "@/components/sections/HomeCredibility";
import { HomeFeaturedBlog } from "@/components/sections/HomeFeaturedBlog";
import { HomeFinalCta } from "@/components/sections/HomeFinalCta";
import { HomeFocusAreas } from "@/components/sections/HomeFocusAreas";
import { HomeHero } from "@/components/sections/HomeHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Subhra | Study Abroad Mentorship & Academy",
  description:
    "Mentorship for Masters, PhD, and Postdoc study abroad, plus an Academy for professional courses, mock tests, and career guidance—structured, research-grounded support for Indian students.",
  alternates: {
    canonical: "/",
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
