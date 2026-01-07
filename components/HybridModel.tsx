"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function HybridModel() {
  const containerRef = useRef(null);
  // once: false ensures it resets every time you scroll away
  const isInView = useInView(containerRef, { amount: 0.6, once: false });
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);

  // --- FLEX LOGIC ---
  const getFlex = (side: "human" | "ai") => {
    // 1. Hover Interactions (Highest Priority)
    if (activeSide === "human") return side === "human" ? 8 : 2;
    if (activeSide === "ai") return side === "ai" ? 8 : 2;

    // 2. Resting State (When visible in viewport) -> 70/30
    if (isInView) return side === "human" ? 7 : 3;

    // 3. Initial State (Hidden/Reset) -> 50/50
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
            // Only apply delay if we are NOT hovering (i.e., the initial slide effect)
            delay: activeSide ? 0 : 0.5 
          }}
          className="relative flex flex-col justify-center bg-[#1a1a1a] border-r border-[#333] overflow-hidden cursor-pointer group"
        >
          {/* Background Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-50" />
          
          {/* CONTENT WRAPPER with min-width to prevent squashing */}
          <div className="relative z-10 p-8 md:p-12 min-w-[400px]">
            
            {/* BIG NUMBER - BRIGHTER */}
            <h3 className="text-8xl font-bold text-[#D4AF37] opacity-40 absolute -top-10 -left-6 select-none transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:translate-x-2">
              70%
            </h3>
            
            <div className="mt-12 relative">
              <h3 className="text-4xl font-bold text-[#FDFCF0] mb-2 whitespace-nowrap">
                Human-Led
              </h3>
              
              {/* Opacity transition based on flex size */}
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
                    [cite_start]IFRS Interpretation [cite: 588]
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    [cite_start]Valuation Logic [cite: 589]
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    [cite_start]Board Negotiation [cite: 592]
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
            delay: activeSide ? 0 : 0.5 
          }}
          className="relative flex flex-col justify-center bg-[#0a0a0a] overflow-hidden cursor-pointer group"
        >
           {/* Background Grid */}
           <div 
             className="absolute inset-0 opacity-20"
             style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
          />

          {/* CONTENT WRAPPER with min-width */}
          <div className="relative z-10 p-8 md:p-12 min-w-[400px]">
             
             {/* BIG NUMBER - BRIGHTER */}
            <h3 className="text-8xl font-bold text-[#FDFCF0] opacity-30 absolute -top-10 -left-6 select-none transition-all duration-500 group-hover:opacity-80 group-hover:scale-105 group-hover:translate-x-2">
              30%
            </h3>

            <div className="mt-12 relative">
              <h3 className="text-4xl font-bold text-[#FDFCF0] mb-2 whitespace-nowrap">
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
                    [cite_start]Auto-Cleansing [cite: 599]
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FDFCF0] rounded-full"></span>
                    [cite_start]Stress Testing [cite: 600]
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FDFCF0] rounded-full"></span>
                    [cite_start]Anomaly Detection [cite: 600]
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