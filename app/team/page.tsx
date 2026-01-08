import React from 'react';
import FounderSpotlight from "@/components/FounderSpotlight";


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