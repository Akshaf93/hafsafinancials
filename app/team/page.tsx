import React from 'react';
import FounderSpotlight from "@/components/FounderSpotlight";

export default function TeamPage() {
  return (
    <main className="bg-[#050505] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-[#FDFCF0]">
      
      {/* Section 1: Founder Spotlight (Full Screen) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-20">
         <FounderSpotlight />
      </section>
  );
}