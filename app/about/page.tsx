import React from 'react';
import AboutHero from "@/components/AboutHero";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import AboutValues from "@/components/AboutValues";
import OwnersMessage from "@/components/OwnersMessage";

export default function AboutPage() {
  return (
    // UPDATED: Using global background
    <main className="w-full home-snap-trigger">
      
      {/* Section 1: Vision (Hero) */}
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