import React from "react";
import type { Metadata } from "next";
import IFRSReadinessTool from "@/components/IFRSReadinessTool";

export const metadata: Metadata = {
  title: "IFRS Transition Diagnostic | Hafsa Advisors & Solutions",
  description: "Secure, AI-enabled scoping and readiness assessment for IFRS 9, 15, 16, and 17 transitions.",
};

export default function DiagnosticPage() {
  return (
    // FIX: Removed 'flex items-center justify-center' so it scrolls naturally
    // Increased pt-32 to pt-40 so it clears the navbar safely
    <main className="w-full min-h-screen bg-transparent pt-40 pb-24 px-6 relative selection:bg-[#E5D095] selection:text-[#050505]">
      
      {/* Centered Ambient Spotlight */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#E5D095]/10 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* --- PRE-FUNNEL EDITORIAL CONTEXT --- */}
      <div className="w-full max-w-4xl mx-auto mb-10 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-4 h-[1px] bg-[#E5D095]"></div>
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E5D095]">
            Secure Portal
          </span>
          <div className="w-4 h-[1px] bg-[#E5D095]"></div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FDFCF0] mb-5">
          Mandate <span className="text-[#E5D095] italic font-light">Scoping.</span>
        </h1>
        <p className="text-[#FDFCF0]/60 text-[14px] md:text-[15px] font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          Define your structural parameters below. This workflow is encrypted and routes directly to our technical principals for preliminary AI evaluation.
        </p>
      </div>

      {/* --- THE INTERACTIVE TOOL --- */}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <IFRSReadinessTool />
      </div>

    </main>
  );
}

