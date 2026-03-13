import React from 'react';
import FounderSpotlight from "@/components/FounderSpotlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Hafsa Advisory and Solutions (LLP)",
  description: "Meet the experts behind Hafsa Advisory — CAs, CFAs, and FRMs driving financial excellence.",
};

export default function TeamPage() {
  return (
    <main className="w-full home-snap-trigger">
      {/* Section 1: Founder Spotlight (Full Screen) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-20">
         <FounderSpotlight />
      </section>
    </main>
  );
}