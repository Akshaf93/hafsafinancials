import AboutHero from "@/components/AboutHero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

// 1. Defer loading of heavy below-the-fold components
// We keep 'ssr: true' (default) because these contain text valuable for SEO,
// but the JavaScript payload is split from the initial bundle.
const AboutPhilosophy = dynamic(() => import("@/components/AboutPhilosophy"));
const AboutValues = dynamic(() => import("@/components/AboutValues"));
const FounderSpotlight = dynamic(() => import("@/components/FounderSpotlight"));
const GlobalReach = dynamic(() => import("@/components/GlobalReach"));
const OwnersMessage = dynamic(() => import("@/components/OwnersMessage"));
const NewsletterSection = dynamic(() => import("@/components/NewsletterSection"));

export const metadata: Metadata = {
  title: "About Us | Hafsa Financials",
  description: "Our history, philosophy, and commitment to financial excellence.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[#050505]">
      {/* 2. Load Hero Normally (Critical Path) */}
      <AboutHero />

      {/* 3. Lazy Load the rest */}
      <div className="flex flex-col gap-0">
        <AboutPhilosophy />
        <FounderSpotlight />
        <AboutValues />
        <GlobalReach />
        <OwnersMessage />
        <NewsletterSection />
      </div>
    </main>
  );
}