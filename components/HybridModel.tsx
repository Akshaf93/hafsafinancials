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
    <div 
      ref={containerRef} 
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#E5D095]/15 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full opacity-60" />
      
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(253,252,240,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(253,252,240,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-20" /> 

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        
        {/* SECTION HEADER: Extremely tight margins to save vertical space */}
        <div className="mb-6 max-w-2xl mt-12 md:mt-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#E5D095]"></div>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E5D095]">
              Execution Methodology
            </span>
          </div>
          
          {/* FIX: The new H2 Standard (Solid White Serif) */}
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#FDFCF0] leading-tight mb-3 tracking-tight">
            The Hybrid Advisory Engine.
          </h2>

          <p className="text-[13px] md:text-[14px] text-[#FDFCF0]/60 font-light leading-relaxed max-w-[600px]">
            We eliminate the traditional consulting lag. By assigning heavy data lifting to our proprietary AI models, our principals dedicate 100% of their billable hours to strategic judgment, negotiation, and complex IFRS structuring.
          </p>
        </div>

        {/* INTERACTIVE ARCHITECTURE CARDS: Aggressively shrunk to 320px tall */}
        <div 
          className="w-full flex flex-col md:flex-row h-[550px] md:h-[320px] rounded-sm overflow-hidden border border-[#FDFCF0]/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#050505]/50 backdrop-blur-sm"
          onMouseLeave={() => setActiveSide(null)}
        >
          
          {/* === 70% HUMAN ADVISORY SIDE === */}
          <m.div 
            onMouseEnter={() => setActiveSide("human")}
            initial={{ flex: 5 }}
            animate={{ flex: humanFlex }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative px-6 py-5 md:px-8 flex flex-col justify-center cursor-pointer bg-gradient-to-br from-[#0a0a0a] to-[#111] border-b md:border-b-0 md:border-r border-[#FDFCF0]/10 overflow-hidden group"
          >
            {/* Shrunk watermark to fit the 320px height */}
            <div className="absolute bottom-[-10px] md:bottom-[-15px] -right-2 text-[100px] md:text-[120px] font-serif font-bold text-[#E5D095]/[0.08] select-none pointer-events-none transition-transform duration-1000 group-hover:scale-105 leading-[0.75]">
              70%
            </div>

            <div className="absolute top-5 left-6 md:left-8 right-6 md:right-8 flex justify-between items-start whitespace-nowrap z-20">
              <div className="text-[9px] font-medium tracking-[0.2em] text-[#E5D095] uppercase border border-[#E5D095]/20 px-2 py-1 rounded-sm bg-[#E5D095]/5">
                [01] Advisory Stack
              </div>
            </div>
            
            <div className="relative z-10 min-w-[260px] pt-4">
              <h3 className="text-xl md:text-2xl font-serif text-[#FDFCF0] mb-2">
                Principal-Led <span className="text-[#E5D095] italic font-light">Strategy</span>
              </h3>
              
              <m.div animate={{ opacity: humanFlex > 4 ? 1 : 0, y: humanFlex > 4 ? 0 : 5 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="text-[#FDFCF0]/60 mb-4 max-w-[320px] text-[12px] leading-relaxed font-light hidden md:block">
                  High-stakes financial environments require nuance, ethical governance, and contextual interpretation.
                </p>
                
                <div className="grid gap-2 border-l border-[#E5D095]/30 pl-4">
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0] text-[12px] font-medium">Complex IFRS Interpretation</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0] text-[12px] font-medium">Valuation & Deal Structuring</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0] text-[12px] font-medium">Board-Level Negotiation</span>
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
            className="relative px-6 py-5 md:px-8 flex flex-col justify-center cursor-pointer bg-[#050505] overflow-hidden group"
          >
            {/* Shrunk watermark */}
            <div className="absolute bottom-[-15px] md:bottom-[-20px] -right-2 text-[100px] md:text-[120px] font-sans font-bold text-[#FDFCF0]/[0.04] select-none pointer-events-none transition-transform duration-1000 group-hover:scale-105 leading-[0.75]">
              30%
            </div>

            <div className="absolute top-5 left-6 md:left-8 right-6 md:right-8 flex justify-between items-start whitespace-nowrap z-20">
              <div className="text-[9px] font-medium tracking-[0.2em] text-[#FDFCF0]/70 uppercase border border-[#FDFCF0]/15 px-2 py-1 rounded-sm bg-[#FDFCF0]/[0.03]">
                [02] Tech Stack
              </div>
            </div>

            <div className="relative z-10 min-w-[260px] pt-4">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[#FDFCF0] mb-2">
                AI-Enabled <span className="text-[#FDFCF0]/60 font-light">Acceleration</span>
              </h3>

              <m.div animate={{ opacity: aiFlex > 4 ? 1 : 0, y: aiFlex > 4 ? 0 : 5 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="text-[#FDFCF0]/50 mb-4 max-w-[320px] text-[12px] leading-relaxed font-light hidden md:block">
                  Eliminating manual data bloat. Our proprietary models ingest and standardize ledgers instantly.
                </p>
                
                <div className="grid gap-2 border-l border-[#FDFCF0]/20 pl-4">
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0]/90 text-[12px] font-medium">Algorithmic Ledger Cleansing</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0]/90 text-[12px] font-medium">Automated Anomaly Detection</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FDFCF0]/90 text-[12px] font-medium">Dynamic Scenario Modeling</span>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

        </div>
      </div>
    </div>
  );
}
