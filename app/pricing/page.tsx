import React from 'react';
import ComplexityCalculator from "@/components/ComplexityCalculator";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <main className="fixed inset-0 bg-[#050505] overflow-y-scroll snap-y snap-mandatory scroll-smooth z-0">
      <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start snap-always relative px-6 pt-24 pb-12">
        
        {/* Background Grid & Spotlight */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] pointer-events-none z-0" style={{ backgroundSize: "24px 24px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(229,208,149,0.15),_transparent_50%)] pointer-events-none z-0" />

        {/* Header */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center mb-10">
           <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.3em] mb-4">
             Transparent Engagement
           </h2>
           <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0] mb-6">
             Complexity-Based <span className="text-[#E5D095]">Pricing</span>
           </h1>
           <p className="text-[#FDFCF0]/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
             We believe in absolute clarity. Our pricing model is derived from the technical rigor and scope of the engagement, eliminating the ambiguity of hourly billing.
           </p>
        </div>
        
        {/* Calculator */}
        <div className="relative z-10 w-full flex justify-center mb-16">
            <ComplexityCalculator />
        </div>

        {/* Value Props */}
        <div className="relative z-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#FDFCF0]/10">
                <h3 className="text-[#E5D095] font-serif text-xl mb-2">01. Scope-Driven</h3>
                <p className="text-[#FDFCF0]/60 text-sm leading-relaxed">
                    Investment is calculated based on the technical complexity (Standard, Intermediate, Advanced) and jurisdictional reach of the project.
                </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#FDFCF0]/10">
                <h3 className="text-[#E5D095] font-serif text-xl mb-2">02. Fixed Ranges</h3>
                <p className="text-[#FDFCF0]/60 text-sm leading-relaxed">
                    We provide a clear estimated range upfront. This ensures budget certainty and aligns our focus on delivery, not time-tracking.
                </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#FDFCF0]/10">
                <h3 className="text-[#E5D095] font-serif text-xl mb-2">03. Value Aligned</h3>
                <p className="text-[#FDFCF0]/60 text-sm leading-relaxed">
                    You pay for the defensibility and strategic value of the outcome, leveraging our hybrid Human-AI delivery model for maximum efficiency.
                </p>
            </div>
        </div>

      </section>

      {/* Footer Section */}
      <section className="snap-start snap-always w-full">
        <Footer />
      </section>
    </main>
  );
}