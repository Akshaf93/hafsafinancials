import React from "react";
import type { Metadata } from "next";
import IFRSReadinessTool from "@/components/IFRSReadinessTool";

export const metadata: Metadata = {
  title: "IFRS Transition Diagnostic | Hafsa Advisors & Solutions",
  description: "Secure, AI-enabled scoping and readiness assessment for IFRS 9, 15, 16, and 17 transitions.",
};

export default function DiagnosticPage() {
  return (
    <main className="w-full h-screen overflow-y-auto snap-y snap-mandatory bg-transparent selection:bg-[#E5D095] selection:text-[#050505]">
      
      {/* Global Architectural Grid (Fixed in background) */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(253,252,240,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(253,252,240,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-20" />

      {/* --- SECTION 1: EDITORIAL LOBBY --- */}
      <section className="relative w-full h-screen min-h-[650px] max-h-[1080px] flex flex-col items-center justify-center snap-start snap-always border-b border-[#FDFCF0]/5 pt-16 px-6">
        
        {/* Ambient Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#E5D095]/10 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full opacity-60" />

        <div className="w-full max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#E5D095]"></div>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#E5D095]">
              Secure Portal
            </span>
            <div className="w-8 h-[1px] bg-[#E5D095]"></div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-serif text-[#FDFCF0] leading-[1.05] mb-8 tracking-tight">
            Mandate <br className="md:hidden" />
            <span className="text-[#E5D095] italic font-light">Scoping.</span>
          </h1>
          
          <p className="text-[#FDFCF0]/70 text-[15px] md:text-[17px] font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-16">
            Define your structural parameters below. This workflow is encrypted and routes directly to our technical principals for preliminary AI evaluation before consultation.
          </p>

          {/* Elegant Scroll Indicator */}
          <div className="flex flex-col items-center justify-center opacity-70 animate-[bounce_3s_infinite]">
            <span className="text-[10px] font-mono tracking-widest text-[#E5D095] uppercase mb-4">Begin Diagnostic</span>
            <svg className="w-5 h-5 text-[#E5D095]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE DIAGNOSTIC ROOM --- */}
      <section className="relative w-full h-screen min-h-[650px] max-h-[1080px] flex items-center justify-center snap-start snap-always px-6">
         
         {/* Subtle Under-glow for the Tool */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-[#E5D095]/5 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />

         <div className="w-full max-w-4xl mx-auto relative z-10 pt-10">
           <IFRSReadinessTool />
         </div>
      </section>

    </main>
  );
}
