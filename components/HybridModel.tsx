"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HybridModel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.6 }); // amount: 0.6 = triggers when 60% visible
  
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle the 2s Delay Logic separately
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isInView) {
      // When scrolled into view, wait 2s then expand
      timer = setTimeout(() => {
        setIsExpanded(true);
      }, 2000); // 2000ms = 2s Delay
    } else {
      // When scrolled out, reset immediately to 50/50
      setIsExpanded(false);
    }

    return () => clearTimeout(timer);
  }, [isInView]);

  // --- FLEX LOGIC ---
  const getFlex = (side: "human" | "ai") => {
    // 1. Hover State (Highest Priority - Immediate)
    if (activeSide === "human") return side === "human" ? 8 : 2;
    if (activeSide === "ai") return side === "ai" ? 8 : 2;

    // 2. Auto-Expanded State (After 2s delay) -> 70/30
    if (isExpanded) return side === "human" ? 7 : 3;

    // 3. Initial State (Before delay or when scrolled out) -> 50/50
    return 5;
  };

  const humanFlex = getFlex("human");
  const aiFlex = getFlex("ai");

  return (
    <div 
      ref={containerRef} 
      className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-20 relative overflow-hidden snap-start snap-always"
    >
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0]">
          Delivery Philosophy
        </h2>
        <p className="text-xl text-[#FDFCF0]/60 font-light mt-4">
          "Human Judgment. AI Intelligence. Financial Excellence."
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div 
        className="w-full flex flex-col md:flex-row h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#FDFCF0]/10"
        onMouseLeave={() => setActiveSide(null)}
      >
        
        {/* === HUMAN SIDE === */}
        <motion.div 
          onMouseEnter={() => setActiveSide("human")}
          // Explicitly set initial for server-side match
          initial={{ flex: 5 }}
          animate={{ flex: humanFlex }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], // Smooth Apple-style spring
            // No delay here because the delay is now handled by the State change
          }}
          className="relative p-8 md:p-12 flex flex-col justify-center cursor-pointer bg-[#1a1a1a] border-r border-[#333] overflow-hidden group"
        >
          {/* Content Wrapper */}
          <div className="relative z-10 min-w-[300px]">
            <h3 className="text-6xl font-bold text-[#E5D095]/20 absolute -top-10 -left-4 select-none group-hover:text-[#E5D095]/40 transition-colors duration-500">
              70%
            </h3>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#FDFCF0] mt-4 mb-4 relative z-20 whitespace-nowrap">
              Human-Led
            </h3>
            
            <motion.div 
               // Show content if flex > 4 (i.e. not the shrunk state)
               animate={{ opacity: humanFlex > 4 ? 1 : 0 }} 
               transition={{ duration: 0.3 }}
            >
              <p className="text-[#FDFCF0]/70 mb-6 max-w-md text-sm md:text-base leading-relaxed">
                Complex judgments, ethical strategy, and board-level negotiation.
              </p>
              <ul className="space-y-3 text-sm text-[#E5D095] font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E5D095] rounded-full"></span>
                  IFRS Interpretation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E5D095] rounded-full"></span>
                  Valuation Logic
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E5D095] rounded-full"></span>
                  Negotiation
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* === AI SIDE === */}
        <motion.div 
          onMouseEnter={() => setActiveSide("ai")}
          initial={{ flex: 5 }}
          animate={{ flex: aiFlex }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="relative p-8 md:p-12 flex flex-col justify-center cursor-pointer bg-[#0a0a0a] overflow-hidden group"
        >
          {/* Content Wrapper */}
          <div className="relative z-10 min-w-[300px]">
            <h3 className="text-6xl font-bold text-[#FDFCF0]/10 absolute -top-10 -left-4 select-none group-hover:text-[#FDFCF0]/30 transition-colors duration-500">
              30%
            </h3>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#FDFCF0] mt-4 mb-4 relative z-20 whitespace-nowrap">
              AI-Driven
            </h3>

            <motion.div 
               animate={{ opacity: aiFlex > 4 ? 1 : 0 }} 
               transition={{ duration: 0.3 }}
            >
              <p className="text-[#FDFCF0]/70 mb-6 max-w-md text-sm md:text-base leading-relaxed">
                Accelerated data processing, scenario testing, and anomaly detection.
              </p>
              <ul className="space-y-3 text-sm text-[#FDFCF0] font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FDFCF0] rounded-full"></span>
                  Auto-Cleansing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FDFCF0] rounded-full"></span>
                  Stress Testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FDFCF0] rounded-full"></span>
                  Draft Generation
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}