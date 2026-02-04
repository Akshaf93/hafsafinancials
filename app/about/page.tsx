import React from 'react';
import dynamic from 'next/dynamic';
import AboutHero from "@/components/AboutHero";

// Lazy load below-the-fold content to boost LCP and reduce bundle size
const AboutPhilosophy = dynamic(() => import("@/components/AboutPhilosophy"));
const AboutValues = dynamic(() => import("@/components/AboutValues"));
const OwnersMessage = dynamic(() => import("@/components/OwnersMessage"));

export default function AboutPage() {
  return (
    <main className="w-full home-snap-trigger">
      
      {/* Section 1: Vision (Hero) 
          - Static Import (Not Dynamic) because we want this visible IMMEDIATELY.
      */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-20">
        <AboutHero />
      </section>

      {/* Section 2: Philosophy */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <AboutPhilosophy />
      </section>

      {/* Section 3: Values */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <AboutValues />
      </section>

      {/* Section 4: Owner's Message */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <OwnersMessage />
      </section>

    </main>
  );
}