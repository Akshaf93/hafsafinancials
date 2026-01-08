import React from 'react';
import ComplexityCalculator from "@/components/ComplexityCalculator";

export default function PricingPage() {
  return (
    <main className="w-full home-snap-trigger">
      
      {/* SECTION 1: THE CALCULATOR (Action) */}
      <section className="h-screen w-full flex flex-col items-center justify-center snap-start snap-always relative px-6 pt-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            
            {/* Left: Headline */}
            <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                    Transparent Engagement
                </h2>
                <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0] mb-6 leading-tight">
                    Complexity-Based <br/>
                    <span className="text-[#E5D095]">Pricing</span>
                </h1>
                <p className="text-[#FDFCF0]/70 text-lg font-light leading-relaxed">
                    We eliminate the ambiguity of hourly billing. Your investment is derived strictly from the technical rigor and jurisdictional scope of the engagement.
                </p>
            </div>

            {/* Right: Calculator */}
            <div className="w-full max-w-xl">
                <ComplexityCalculator />
            </div>

        </div>
      </section>

      {/* SECTION 2: THE VALUE PROPS (Logic) */}
      <section className="h-screen w-full flex flex-col items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10 bg-[#0a0a0a]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-[#FDFCF0]">The Logic of Value</h2>
                <p className="text-[#E5D095] mt-2 text-sm uppercase tracking-widest">Why we price differently</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/50 transition-colors group">
                    <span className="text-5xl font-serif text-[#E5D095]/20 group-hover:text-[#E5D095] transition-colors mb-6 block">01</span>
                    <h3 className="text-[#FDFCF0] font-bold text-xl mb-4">Scope-Driven</h3>
                    <p className="text-[#FDFCF0]/60 text-sm leading-relaxed">
                        Investment is calculated based on technical complexity (Standard, Intermediate, Advanced) and jurisdictional reach, not arbitrary hours.
                    </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/50 transition-colors group">
                    <span className="text-5xl font-serif text-[#E5D095]/20 group-hover:text-[#E5D095] transition-colors mb-6 block">02</span>
                    <h3 className="text-[#FDFCF0] font-bold text-xl mb-4">Fixed Certainty</h3>
                    <p className="text-[#FDFCF0]/60 text-sm leading-relaxed">
                        We provide a clear estimated range upfront. This ensures budget certainty and aligns our focus on delivery speed, not time-tracking.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/50 transition-colors group">
                    <span className="text-5xl font-serif text-[#E5D095]/20 group-hover:text-[#E5D095] transition-colors mb-6 block">03</span>
                    <h3 className="text-[#FDFCF0] font-bold text-xl mb-4">Value Aligned</h3>
                    <p className="text-[#FDFCF0]/60 text-sm leading-relaxed">
                        You pay for the defensibility and strategic value of the outcome, leveraging our hybrid Human-AI delivery model for maximum efficiency.
                    </p>
                </div>
            </div>
        </div>
      </section>

    </main>
  );
}