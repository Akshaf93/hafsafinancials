import React from 'react';
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership & Governance | Hafsa Advisors & Solutions",
  description: "Intellectual capital and principal depth. Meet the CAs, CFAs, and FRMs driving our financial excellence.",
};

export default function TeamPage() {
  return (
    <main className="w-full bg-transparent selection:bg-[#E5D095] selection:text-[#050505]">

      {/* --- SECTION 1: EDITORIAL HEADER (Viewport Snapped) --- */}
      <section className="relative w-full h-screen min-h-[650px] max-h-[1080px] flex items-center overflow-hidden snap-start snap-always border-b border-[#FDFCF0]/5 pt-16">
        
        {/* Ambient Spotlight */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#E5D095]/10 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full z-10">
          <div className="max-w-4xl">
            {/* Unified Eyebrow Styling */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#E5D095]"></div>
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#E5D095]">
                Intellectual Capital
              </span>
            </div>
            
            {/* Harmonized Headline Sizing */}
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-serif font-normal tracking-tight text-[#FDFCF0] leading-[1.05] mb-8">
              Principal Depth & <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] via-[#E5D095] to-[#9a7e3f]">
                Governance.
              </span>
            </h1>
            
            <p className="text-[#FDFCF0]/70 text-[15px] md:text-[17px] leading-relaxed font-light max-w-3xl tracking-wide">
              Our advisory architecture relies on the rigorous judgment of our principals. We deploy multidisciplinary teams holding top-tier international charters to navigate the most complex IFRS transitions, valuation models, and M&A environments globally.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE MULTIDISCIPLINARY BENCH (Viewport Snapped) --- */}
      <section className="relative w-full h-screen min-h-[650px] max-h-[1080px] flex items-center overflow-hidden snap-start snap-always border-b border-[#FDFCF0]/5">
        
        {/* Subtle right-side ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-bl from-[#E5D095]/5 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full z-10">
          
          <div className="flex items-center justify-between mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-[#FDFCF0]">Deployed Expertise</h2>
            <div className="hidden md:block w-1/3 h-[1px] bg-gradient-to-r from-[#FDFCF0]/10 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
             
             {/* Pillar 1 */}
             <div className="relative group flex flex-col justify-start">
                 <div className="text-[#E5D095] font-mono text-[10px] tracking-[0.2em] mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">01 // IFRS & AUDIT</div>
                 <h3 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] mb-5">Technical <br className="hidden md:block"/>Accounting</h3>
                 <p className="text-[#FDFCF0]/60 text-[13px] md:text-[14px] font-light leading-relaxed mb-6">
                    Led by ACCA and CA qualified professionals, our technical desk handles end-to-end IFRS transitions (9, 15, 16, 17), complex consolidations, and rigorous audit defense.
                 </p>
                 <ul className="space-y-3 border-l border-[#E5D095]/30 pl-4 mt-auto">
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>IFRS Policy Alignment</li>
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>ECL Impairment Logic</li>
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>First-time Adoption (IFRS 1)</li>
                 </ul>
             </div>
             
             {/* Pillar 2 */}
             <div className="relative group flex flex-col justify-start">
                 <div className="text-[#E5D095] font-mono text-[10px] tracking-[0.2em] mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">02 // M&A & VALUATION</div>
                 <h3 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] mb-5">Financial <br className="hidden md:block"/>Modeling</h3>
                 <p className="text-[#FDFCF0]/60 text-[13px] md:text-[14px] font-light leading-relaxed mb-6">
                    Supported by CFA candidates and modeling experts, we build institutional-grade DCF models, LBO frameworks, and fair-value measurements (IFRS 13) for corporate restructuring.
                 </p>
                 <ul className="space-y-3 border-l border-[#E5D095]/30 pl-4 mt-auto">
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>DCF & LBO Modeling</li>
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>Fair Value Measurement</li>
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>Working Capital Analysis</li>
                 </ul>
             </div>
             
             {/* Pillar 3 */}
             <div className="relative group flex flex-col justify-start">
                 <div className="text-[#E5D095] font-mono text-[10px] tracking-[0.2em] mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">03 // RISK & STRATEGY</div>
                 <h3 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] mb-5">Enterprise <br className="hidden md:block"/>Risk</h3>
                 <p className="text-[#FDFCF0]/60 text-[13px] md:text-[14px] font-light leading-relaxed mb-6">
                    Integrating FRM methodologies to stress-test portfolios, build Expected Credit Loss (ECL) frameworks, and establish resilient internal audit environments.
                 </p>
                 <ul className="space-y-3 border-l border-[#E5D095]/30 pl-4 mt-auto">
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>Internal Audit Execution</li>
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>Portfolio Stress Testing</li>
                    <li className="text-[12px] text-[#FDFCF0]/80 tracking-wide flex items-center gap-3"><span className="w-2 h-[1px] bg-[#E5D095]/60"></span>Governance Frameworks</li>
                 </ul>
             </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: ENGAGEMENT ARCHITECTURE (Viewport Snapped) --- */}
      <section className="relative w-full h-screen min-h-[650px] max-h-[1080px] flex items-center justify-center overflow-hidden snap-start snap-always">
        
        {/* Center Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#E5D095]/10 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full opacity-50" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full z-10 flex justify-center">
          
          <div className="w-full max-w-4xl bg-[#050505]/60 backdrop-blur-md border border-[#FDFCF0]/10 p-10 md:p-16 lg:p-20 rounded-sm relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center">
              
              <div className="flex justify-center mb-8">
                <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#E5D095] border border-[#E5D095]/20 px-3 py-1 rounded-sm bg-[#E5D095]/5">
                  Operating Model
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-[#FDFCF0] mb-6">Engagement Architecture</h2>
              <p className="text-[#FDFCF0]/60 text-[14px] md:text-[16px] font-light leading-relaxed mb-10 mx-auto max-w-2xl">
                We do not operate on standard staff-augmentation models. Every engagement is structured as a bespoke mandate, governed by a Lead Principal and executed through our proprietary AI-enabled delivery stack. This ensures tier-1 quality control, strict regulatory compliance, and rapid turnaround times.
              </p>

              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E5D095] text-[#050505] text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm shadow-[0_0_20px_rgba(229,208,149,0.15)] hover:bg-[#FDFCF0] transition-all duration-300 hover:-translate-y-0.5"
              >
                Discuss a Mandate
              </Link>
          </div>

        </div>
      </section>

    </main>
  );
}