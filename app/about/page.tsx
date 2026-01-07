import React from 'react';
import AboutHero from "@/components/AboutHero";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import AboutValues from "@/components/AboutValues";

export default function AboutPage() {
  return (
    <main className="fixed inset-0 bg-[#050505] overflow-y-scroll snap-y snap-mandatory scroll-smooth text-[#FDFCF0] z-0">
      
      {/* Section 1: Vision (Hero) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-20">
        <AboutHero />
      </section>

      {/* Section 2: Philosophy */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 bg-[#0a0a0a] border-t border-[#FDFCF0]/10">
        <AboutPhilosophy />
      </section>

      {/* Section 3: Values */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <AboutValues />
      </section>

    </main>
  );
}