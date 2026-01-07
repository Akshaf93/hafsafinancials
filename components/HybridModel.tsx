"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function HybridModel() {
  const containerRef = useRef(null);
  // once: false ensures the animation plays every time you scroll to this section
  const isInView = useInView(containerRef, { amount: 0.6, once: false });
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);

  // --- FLEX LOGIC ---
  const getFlex = (side: "human" | "ai") => {
    // 1. Hover Interactions
    if (activeSide === "human") return side === "human" ? 8 : 2;
    if (activeSide === "ai") return side === "ai" ? 8 : 2;

    // 2. Resting State (70/30) when visible
    if (isInView) return side === "human" ? 7 : 3;

    // 3. Initial State (50/50) before scrolling in
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
          animate={{ flex: humanFlex }}
          transition={{ 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1], 
            // Delay only applied when auto-sliding, not hovering
            delay: activeSide ? 0 : 1 
          }}
          className="relative flex flex-col justify-center bg-[#1a1a1a] border-r border-[#333] overflow-hidden cursor-pointer group"
        >
          {/* Background Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-50" />
          
          {/* Content Wrapper - Fixed min-width to prevent text squashing */}
          <div className="relative z-10 p-8 md:p-12 min-w-[320px]">
            
            {/* NUMBER 70% - Positioning Fixed as requested */}
            <h3 className="text-6xl md:text-7xl font-bold text-[#D4AF37] opacity-50 absolute -top-10 -left-4 select-none transition-all duration-500 group-hover:opacity-80 group-hover:scale-105">
              70%
            </h3>
            
            <div className="mt-8 relative">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FDFCF0] mb-2 whitespace-nowrap">
                Human-Led
              </h3>
              
              {/* Fade content based on flex size */}
              <motion.div 
                 animate={{ opacity: humanFlex > 4 ? 1 : 0 }}
                 transition={{ duration: 0.4 }}
                 className="space-y-6"
              >
                <p className="text-[#FDFCF0]/80 max-w-md text-base leading-relaxed">
                  Complex judgments, ethical strategy, and board-level negotiation.
                </p>
                
                <ul className="space-y-3 text-sm text-[#D4AF37] font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    IFRS Interpretation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    Valuation Logic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    Negotiation
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* === AI SIDE === */}
        <motion.div 
          onMouseEnter={() => setActiveSide("ai")}
          animate={{ flex: aiFlex }}
          transition={{ 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1],
            delay: activeSide ? 0 : 1 
          }}
          className="relative flex flex-col justify-center bg-[#0a0a0a] overflow-hidden cursor-pointer group"
        >
           {/* Background Grid */}
           <div 
             className="absolute inset-0 opacity-20"
             style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
          />

          {/* Content Wrapper */}
          <div className="relative z-10 p-8 md:p-12 min-w-[320px]">
             
             {/* NUMBER 30% - Positioning Fixed as requested */}
            <h3 className="text-6xl md:text-7xl font-bold text-[#FDFCF0] opacity-40 absolute -top-10 -left-4 select-none transition-all duration-500 group-hover:opacity-70 group-hover:scale-105">
              30%
            </h3>

            <div className="mt-8 relative">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FDFCF0] mb-2 whitespace-nowrap">
                AI-Driven
              </h3>

              <motion.div 
                 animate={{ opacity: aiFlex > 4 ? 1 : 0 }}
                 transition={{ duration: 0.4 }}
                 className="space-y-6"
              >
                <p className="text-[#FDFCF0]/80 max-w-md text-base leading-relaxed">
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
          </div>
        </motion.div>

      </div>
    </div>
  );
}