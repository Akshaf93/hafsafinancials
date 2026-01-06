"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HybridModel() {
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
      
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
      {/* Fixed height ensures layout stability during animation */}
      <div 
        className="w-full flex flex-col md:flex-row h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#FDFCF0]/10"
        onMouseLeave={() => setActiveSide(null)}
      >
        
        {/* === HUMAN SIDE === */}
        <motion.div 
          onMouseEnter={() => setActiveSide("human")}
          animate={{
            // ANIMATION LOGIC:
            // If Human is active: Grow to 2.5
            // If AI is active: Shrink to 0.5
            // Default: Equal share (1)
            flex: activeSide === "human" ? 2.5 : activeSide === "ai" ? 0.5 : 1,
            opacity: activeSide === "ai" ? 0.5 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative p-8 md:p-12 flex flex-col justify-center cursor-pointer bg-[#1a1a1a] border-r border-[#333] overflow-hidden"
        >
          {/* Content Wrapper - ensures text doesn't wrap weirdly when shrunk */}
          <div className="relative z-10 min-w-[300px]">
            <h3 className="text-6xl font-bold text-[#D4AF37]/20 absolute -top-10 -left-4 select-none">
              70%
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-[#FDFCF0] mt-4 mb-4 relative">
              Human-Led
            </h3>
            
            <motion.div 
              animate={{ opacity: activeSide === "ai" ? 0 : 1 }} 
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#FDFCF0]/70 mb-6 max-w-md text-sm md:text-base leading-relaxed">
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
        </motion.div>

        {/* === AI SIDE === */}
        <motion.div 
          onMouseEnter={() => setActiveSide("ai")}
          animate={{
            // ANIMATION LOGIC:
            // If AI is active: Grow to 2.5
            // If Human is active: Shrink to 0.5
            // Default: Equal share (1)
            flex: activeSide === "ai" ? 2.5 : activeSide === "human" ? 0.5 : 1,
            opacity: activeSide === "human" ? 0.5 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative p-8 md:p-12 flex flex-col justify-center cursor-pointer bg-[#0a0a0a] overflow-hidden"
        >
          {/* Content Wrapper */}
          <div className="relative z-10 min-w-[300px]">
            <h3 className="text-6xl font-bold text-[#FDFCF0]/10 absolute -top-10 -left-4 select-none">
              30%
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-[#FDFCF0] mt-4 mb-4 relative">
              AI-Driven
            </h3>

            <motion.div 
              animate={{ opacity: activeSide === "human" ? 0 : 1 }} 
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