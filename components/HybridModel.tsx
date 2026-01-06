"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HybridModel() {
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0]">Delivery Philosophy</h2>
        <p className="text-xl text-[#FDFCF0]/60 font-light mt-4">
          "Human Judgment. AI Intelligence. Financial Excellence."
        </p>
      </div>

      <div className="flex flex-col md:flex-row h-[50vh] rounded-2xl overflow-hidden shadow-2xl border border-[#FDFCF0]/10">
        
        {/* HUMAN SIDE */}
        <motion.div 
          className={`relative p-8 md:p-12 flex flex-col justify-center cursor-pointer transition-all duration-500
            ${activeSide === "ai" ? "md:w-[25%] opacity-50" : "md:w-[75%]"}
            bg-[#1a1a1a] border-r border-[#333]
          `}
          onMouseEnter={() => setActiveSide("human")}
          onMouseLeave={() => setActiveSide(null)}
        >
          <div className="relative z-10">
            <h3 className="text-6xl font-bold text-[#E5D095]/20 absolute -top-8 -left-4">70%</h3>
            <h3 className="text-2xl md:text-3xl font-bold text-[#FDFCF0] mt-4 mb-4">Human-Led</h3>
            
            {(activeSide === "human" || activeSide === null) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-[#FDFCF0]/70 mb-6 max-w-md">
                   Complex judgments, ethical strategy, and board-level negotiation.
                </p>
                <ul className="space-y-2 text-sm text-[#E5D095]">
                  <li>✓ IFRS Interpretation</li>
                  <li>✓ Valuation Logic</li>
                  <li>✓ Negotiation</li>
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* AI SIDE */}
        <motion.div 
          className={`relative p-8 md:p-12 flex flex-col justify-center cursor-pointer transition-all duration-500
            ${activeSide === "human" ? "md:w-[25%] opacity-50" : "md:w-[75%]"}
            bg-[#0a0a0a]
          `}
          onMouseEnter={() => setActiveSide("ai")}
          onMouseLeave={() => setActiveSide(null)}
        >
          <div className="relative z-10">
            <h3 className="text-6xl font-bold text-[#E5D095]/20 absolute -top-8 -left-4">30%</h3>
            <h3 className="text-2xl md:text-3xl font-bold text-[#FDFCF0] mt-4 mb-4">AI-Driven</h3>

            {(activeSide === "ai" || activeSide === null) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-[#FDFCF0]/70 mb-6 max-w-md">
                  Accelerated data processing, scenario testing, and anomaly detection.
                </p>
                <ul className="space-y-2 text-sm text-[#E5D095]">
                   <li>✓ Auto-Cleansing</li>
                   <li>✓ Stress Testing</li>
                   <li>✓ Draft Generation</li>
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}