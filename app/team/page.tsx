import React from 'react';
import FounderSpotlight from "@/components/FounderSpotlight";

export default function TeamPage() {
  return (
    <main className="bg-[#050505] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-[#FDFCF0]">
      
      {/* Section 1: Founder Spotlight (Full Screen) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-20">
         <FounderSpotlight />
      </section>

      {/* Section 2: Join Us (Full Screen) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 bg-[#0a0a0a] border-t border-[#FDFCF0]/10">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-serif text-[#FDFCF0] mb-8">
                  Join the <span className="text-[#E5D095]">Firm</span>
              </h2>
              <p className="text-[#FDFCF0]/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                  We are always looking for exceptional talent to join our global network of financial experts. If you share our commitment to precision and transparency, we invite you to connect.
              </p>
              <button className="px-12 py-5 border border-[#E5D095] text-[#E5D095] hover:bg-[#E5D095] hover:text-[#050505] transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                  View Career Opportunities
              </button>
          </div>
      </section>

    </main>
  );
}