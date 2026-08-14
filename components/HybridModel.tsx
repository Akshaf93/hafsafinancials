"use client";

import { m, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HybridModel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.4 }); 
  
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView) {
      timer = setTimeout(() => setIsExpanded(true), 600); 
    } else {
      setIsExpanded(false);
    }
    return () => clearTimeout(timer);
  }, [isInView]);

  const getFlex = (side: "human" | "ai") => {
    if (activeSide === "human") return side === "human" ? 7.5 : 2.5;
    if (activeSide === "ai") return side === "ai" ? 6 : 4; 
    if (isExpanded) return side === "human" ? 7 : 3;
    return 5;
  };

  const humanFlex = getFlex("human");
  const aiFlex = getFlex("ai");

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen min-h-[650px] max-h-[1080px] flex items-center justify-center overflow-hidden border-t border-[#FDFCF0]/5 home-snap-trigger"
    >
      {/* RESTORED AMBIENT SPOTLIGHT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#E5D095]/15 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full opacity-60" />
      
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(253,252,240,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(253,252,240,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-20" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        
        {/* SECTION HEADER */}
        <div className="mb-8 md:mb-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-[#E5D095]"></div>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E5D095]">
              Execution Methodology
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#FDFCF0] leading-tight mb-4">
            The Hybrid Advisory Engine.
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#FDFCF0]/60 font-light leading-relaxed max-w-[600px]">
            We eliminate the traditional consulting lag. By assigning heavy data lifting to our proprietary AI models, our principals dedicate 100% of their billable hours to strategic judgment, negotiation, and complex IFRS structuring.
          </p>
        </div>

        {/* INTERACTIVE ARCHITECTURE CARDS */}
        <div 
          className="w-full flex flex-col md:flex-row h-[600px] md:h-[420px] rounded-sm overflow-hidden border border-[#FDFCF0]/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#050505]/50 backdrop-blur-sm"
          onMouseLeave={() => setActiveSide(null)}
        >
          
          {/* === 70% HUMAN ADVISORY SIDE === */}
          <m.div 
            onMouseEnter={() => setActiveSide("human")}
            initial={{ flex: 5 }}
            animate={{ flex: humanFlex }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative px-6 py-8 md:px-10 flex flex-col justify-center cursor-pointer bg-gradient-to-br from-[#0a0a0a] to-[#111] border-b md:border-b-0 md:border-r border-[#FDFCF0]/10 overflow-hidden group"
          >
            {/* CORRECTED WATERMARK: Lifted up and tightened line height to match baselines */}
            <div className="absolute bottom-[-10px] md:bottom-[-15px] -right-2 text-[150px] md:text-[180px] font-serif font-bold text-[#E5D095]/[0.08] select-none pointer-events-none transition-transform duration-1000 group-hover:scale-105 leading-[0.75]">
              70%
            </div>

            {/* Top Label */}
            <div className="absolute top-6 left-6 md:left-10 right-6 md:right-10 flex justify-between items-start whitespace-nowrap z-20">
              <div className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] text-[#E5D095] uppercase border border-[#E5D095]/20 px-2 py-1 rounded-sm bg-[#E5D095]/5">
                [01] Advisory Stack
              </div>
            </div>
            
            {/* Core Content */}
            <div className="relative z-10 min-w-[260px]">
              <h3 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] mb-3">
                Principal-Led <br className="hidden md:block" />
                <span className="text-[#E5D095] italic font-light">Strategy</span>
              </h3>
              
              <m.div animate={{ opacity: humanFlex > 4 ? 1 : 0, y: humanFlex > 4 ? 0 : 10 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="text-[#FDFCF0]/60 mb-5 max-w-[320px] text-[13px] md:text-sm leading-relaxed font-light">
                  High-stakes financial environments require nuance, ethical governance, and contextual interpretation that algorithms cannot provide.
                </p>
                
                <div className="grid gap-3 border-l border-[#E5D095]/30 pl-4">
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0] text-[13px] md:text-sm font-medium">Complex IFRS Interpretation</span>
                    <span className="text-[#FDFCF0]/40 text-[11px] md:text-xs font-light mt-0.5">Navigating regulatory gray areas.</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0] text-[13px] md:text-sm font-medium">Valuation & Deal Structuring</span>
                    <span className="text-[#FDFCF0]/40 text-[11px] md:text-xs font-light mt-0.5">Contextual M&A and asset pricing.</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0] text-[13px] md:text-sm font-medium">Board-Level Negotiation</span>
                    <span className="text-[#FDFCF0]/40 text-[11px] md:text-xs font-light mt-0.5">Defending audits and financial logic.</span>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

          {/* === 30% AI ENGINE SIDE === */}
          <m.div 
            onMouseEnter={() => setActiveSide("ai")}
            initial={{ flex: 5 }}
            animate={{ flex: aiFlex }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative px-6 py-8 md:px-10 flex flex-col justify-center cursor-pointer bg-[#050505] overflow-hidden group"
          >
            {/* CORRECTED WATERMARK: Pushed down slightly and tightened line height to match baselines */}
            <div className="absolute bottom-[-18px] md:bottom-[-25px] -right-2 text-[150px] md:text-[180px] font-sans font-bold text-[#FDFCF0]/[0.04] select-none pointer-events-none transition-transform duration-1000 group-hover:scale-105 leading-[0.75]">
              30%
            </div>

            {/* Top Label */}
            <div className="absolute top-6 left-6 md:left-10 right-6 md:right-10 flex justify-between items-start whitespace-nowrap z-20">
              <div className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] text-[#FDFCF0]/70 uppercase border border-[#FDFCF0]/15 px-2 py-1 rounded-sm bg-[#FDFCF0]/[0.03]">
                [02] Tech Stack
              </div>
            </div>

            {/* Core Content */}
            <div className="relative z-10 min-w-[260px]">
              <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-[#FDFCF0] mb-3">
                AI-Enabled <br className="hidden md:block" />
                <span className="text-[#FDFCF0]/60 font-light">Data Acceleration</span>
              </h3>

              <m.div animate={{ opacity: aiFlex > 4 ? 1 : 0, y: aiFlex > 4 ? 0 : 10 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="text-[#FDFCF0]/50 mb-5 max-w-[320px] text-[13px] md:text-sm leading-relaxed font-light">
                  Eliminating manual data bloat. Our proprietary models ingest, standardize, and stress-test raw ledgers in a fraction of the time.
                </p>
                
                <div className="grid gap-3 border-l border-[#FDFCF0]/20 pl-4">
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0]/90 text-[13px] md:text-sm font-medium">Algorithmic Ledger Cleansing</span>
                    <span className="text-[#FDFCF0]/40 text-[11px] md:text-xs font-light mt-0.5">Automated formatting of raw data.</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0]/90 text-[13px] md:text-sm font-medium">Automated Anomaly Detection</span>
                    <span className="text-[#FDFCF0]/40 text-[11px] md:text-xs font-light mt-0.5">Flagging inconsistencies instantly.</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0]/90 text-[13px] md:text-sm font-medium">Dynamic Scenario Modeling</span>
                    <span className="text-[#FDFCF0]/40 text-[11px] md:text-xs font-light mt-0.5">Rapid multi-variable stress testing.</span>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}