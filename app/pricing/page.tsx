import React from 'react';
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Hafsa Financials",
};

export default function PricingPage() {
  return (
    <main className="w-full home-snap-trigger">
      
      {/* SECTION 1: HERO / CTA */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start snap-always relative px-6 pt-20 pb-10">
        <div className="w-full max-w-4xl mx-auto text-center">
            
            <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.3em] mb-6">
                Transparent Engagement
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#FDFCF0] mb-8 leading-tight">
                Complexity-Based <br/>
                <span className="text-[#E5D095]">Pricing</span>
            </h1>
            <p className="text-[#FDFCF0]/70 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
                We eliminate the ambiguity of hourly billing. Your investment is derived strictly from the technical rigor and jurisdictional scope of the engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                    href="/contact"
                    className="px-8 py-4 bg-[#E5D095] text-[#050505] font-bold uppercase tracking-widest hover:bg-[#FDFCF0] transition-colors min-w-[200px] rounded-sm shadow-[0_0_20px_rgba(229,208,149,0.2)]"
                >
                    Request Proposal
                </Link>
                <Link 
                    href="/services"
                    className="px-8 py-4 border border-[#FDFCF0]/20 text-[#FDFCF0] font-bold uppercase tracking-widest hover:border-[#E5D095] hover:text-[#E5D095] transition-colors min-w-[200px] rounded-sm"
                >
                    Our Services
                </Link>
            </div>

        </div>
      </section>

      {/* SECTION 2: THE VALUE PROPS (Logic) */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start snap-always relative px-6 py-20 border-t border-[#FDFCF0]/10 bg-[#0a0a0a]/50 backdrop-blur-sm">
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