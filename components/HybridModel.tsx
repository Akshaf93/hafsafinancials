"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HybridModel() {
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);

  // LOGIC:
  // 1. If Human is hovered: Human = 8, AI = 2
  // 2. If AI is hovered: Human = 2, AI = 8
  // 3. Resting State (No hover): Human = 7, AI = 3
  const humanFlex = activeSide === "human" ? 8 : activeSide === "ai" ? 2 : 7;
  const aiFlex = activeSide === "ai" ? 8 : activeSide === "human" ? 2 : 3;

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-20 relative overflow-hidden snap-start snap-always">
      
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
          // START at 50/50
          initial={{ flex: 5 }}
          // ANIMATE to calculated state (Resting: 7, Hover: 8 or 2)
          animate={{ flex: humanFlex }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], // Smooth Apple-style spring
            delay: 0.2 // Pause briefly at 50/50 before sliding to 70/30
          }}
          className="relative flex flex-col justify-center bg-[#1a1a1a] border-r border-[#333] overflow-hidden cursor-pointer group"
        >
          {/* Content Wrapper */}
          <div className="relative z-10 p-8 md:p-12 min-w-[320px]">
            {/* BRIGHTER NUMBER */}
            <h3 className="text-7xl md:text-8xl font-bold text-[#D4AF37] opacity-50 absolute -top-12 -left-6 select-none transition-all duration-500 group-hover:opacity-80 group-hover:scale-105">
              70%
            </h3>
            
            <div className="mt-8 relative">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FDFCF0] mb-2 whitespace-nowrap">
                Human-Led
              </h3>
              
              {/* Only show details if this side is expanded (flex > 4) */}
              <motion.div 
                 animate={{ opacity: humanFlex > 4 ? 1 : 0 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-6"
              >
                <p className="text-[#FDFCF0]/70 max-w-md text-sm md:text-base leading-relaxed">
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
          // START at 50/50
          initial={{ flex: 5 }}
          // ANIMATE to calculated state (Resting: 3, Hover: 8 or 2)
          animate={{ flex: aiFlex }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2 
          }}
          className="relative flex flex-col justify-center bg-[#0a0a0a] overflow-hidden cursor-pointer group"
        >
          {/* Content Wrapper */}
          <div className="relative z-10 p-8 md:p-12 min-w-[320px]">
             {/* BRIGHTER NUMBER */}
            <h3 className="text-7xl md:text-8xl font-bold text-[#FDFCF0] opacity-40 absolute -top-12 -left-6 select-none transition-all duration-500 group-hover:opacity-70 group-hover:scale-105">
              30%
            </h3>

            <div className="mt-8 relative">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FDFCF0] mb-2 whitespace-nowrap">
                AI-Driven
              </h3>

              {/* Only show details if this side is expanded (flex > 4) */}
              <motion.div 
                 animate={{ opacity: aiFlex > 4 ? 1 : 0 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-6"
              >
                <p className="text-[#FDFCF0]/70 max-w-md text-sm md:text-base leading-relaxed">
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