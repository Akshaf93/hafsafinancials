import React from 'react';
import FounderSpotlight from "@/components/FounderSpotlight";

export default function TeamPage() {
  return (
    <main className="pt-8 pb-20 bg-[#050505] min-h-screen text-[#FDFCF0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <section className="mb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Our <span className="text-[#E5D095]">Leadership</span>
          </h1>
          <p className="text-[#FDFCF0]/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Guided by principles of integrity and analytical rigor, our leadership team is dedicated to providing clarity in an increasingly complex financial world.
          </p>
        </section>

        {/* Founder Section */}
        <section className="mb-32">
          <FounderSpotlight />
        </section>

        {/* Join Us / Future Team */}
        <section className="border-t border-[#FDFCF0]/10 pt-20">
            <div className="bg-[#111] p-12 md:p-20 text-center relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#E5D095]/5 blur-3xl pointer-events-none"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl font-serif mb-6">Join the Firm</h2>
                    <p className="text-[#FDFCF0]/60 max-w-2xl mx-auto mb-10 font-light">
                        We are always looking for exceptional talent to join our global network of financial experts. If you share our commitment to precision and transparency, we invite you to connect.
                    </p>
                    <button className="px-10 py-4 border border-[#E5D095] text-[#E5D095] hover:bg-[#E5D095] hover:text-[#050505] transition-all duration-300 uppercase tracking-widest text-xs font-medium">
                        View Career Opportunities
                    </button>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}