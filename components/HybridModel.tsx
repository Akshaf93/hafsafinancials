"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HybridModel() {
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);

  // Animation Variants for the Flex Ratios
  // Initial: 50/50
  // Resting (Default): 70/30 (Human/AI)
  // Hover Human: 75/25 (Slight expand to show info)
  // Hover AI: 25/75 (AI takes over to show info)
  
  const humanFlex = activeSide === "human" ? 7.5 : activeSide === "ai" ? 2.5 : 7;
  const aiFlex = activeSide === "ai" ? 7.5 : activeSide === "human" ? 2.5 : 3;

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0]">
          Delivery Philosophy
        </h2>
        <p className="text-xl text-[#FDFCF0]/60 font-light mt-4">
          "Financial judgment remains human. Intelligence is accelerated by AI."
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div 
        className="w-full flex flex-col md:flex-row h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-[#FDFCF0]/10"
        onMouseLeave={() => setActiveSide(null)}
      >
        
        {/* === HUMAN SIDE === */}
        <motion.div 
          onMouseEnter={() => setActiveSide("human")}
          // 1. Start at 50% (flex: 5)
          initial={{ flex: 5 }}
          // 2. Animate to calculated flex (Resting: 7, Hover: 7.5 or 2.5)
          animate={{ flex: humanFlex }}
          // 3. Smooth transition with delay for the initial "Transform" effect
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], // Apple-style spring ease
            delay: 0.2 // Wait a bit before transforming from 50/50 to 70/30
          }}
          className="relative flex flex-col justify-center bg-[#1a1a1a] border-r border-[#333] overflow-hidden cursor-pointer group"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-50" />
          
          <div className="relative z-10 p-8 md:p-12 min-w-[320px]">
            {/* BRIGHTER NUMBER: Opacity bumped to 0.6 and 0.8 on hover */}
            <h3 className="text-7xl md:text-8xl font-bold text-[#D4AF37]/60 absolute -top-12 -left-6 select-none transition-all duration-500 group-hover:text-[#D4AF37]/80 group-hover:scale-105">
              70%
            </h3>
            
            <div className="mt-8 relative">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FDFCF0] mb-2">
                Human-Led
              </h3>
              <p className="text-[#D4AF37] font-mono text-sm uppercase tracking-widest mb-6">
                Strategic Judgment
              </p>

              {/* Description */}
              <p className="text-[#FDFCF0]/80 text-lg leading-relaxed max-w-md">
                We handle complex IFRS interpretations, valuation logic, and board-level negotiations.
              </p>

              {/* EXPANDABLE INFO */}
              <div className="overflow-hidden">
                <AnimatePresence>
                  {activeSide === "human" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-l-2 border-[#D4AF37] pl-4 space-y-3"
                    >
                       <p className="text-[#FDFCF0]/60 text-sm">
                         AI cannot defend an audit opinion or negotiate a merger. Our CAs and CFAs retain full control over:
                       </p>
                       <ul className="grid grid-cols-1 gap-2 text-sm text-[#FDFCF0] font-medium">
                        <li className="flex items-center gap-2">
                          <span className="text-[#D4AF37]">→</span> Ethical Strategy
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#D4AF37]">→</span> Final Policy Sign-off
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#D4AF37]">→</span> Investor Relations
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === AI SIDE === */}
        <motion.div 
          onMouseEnter={() => setActiveSide("ai")}
          // 1. Start at 50% (flex: 5)
          initial={{ flex: 5 }}
          // 2. Animate to calculated flex (Resting: 3, Hover: 7.5 or 2.5)
          animate={{ flex: aiFlex }}
          // 3. Smooth transition matching the Human side
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2 
          }}
          className="relative flex flex-col justify-center bg-[#0a0a0a] overflow-hidden cursor-pointer group"
        >
          {/* Background */}
          <div 
             className="absolute inset-0 opacity-20"
             style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
          />

          <div className="relative z-10 p-8 md:p-12 min-w-[320px]">
             {/* BRIGHTER NUMBER: Opacity bumped to 0.5 and 0.7 on hover */}
            <h3 className="text-7xl md:text-8xl font-bold text-[#FDFCF0]/50 absolute -top-12 -left-6 select-none transition-all duration-500 group-hover:text-[#FDFCF0]/70 group-hover:scale-105">
              30%
            </h3>

            <div className="mt-8 relative">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FDFCF0] mb-2">
                AI-Driven
              </h3>
              <p className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-6">
                Speed & Scale
              </p>

              <p className="text-[#FDFCF0]/80 text-lg leading-relaxed max-w-md">
                Our engines scan contracts for anomalies, run stress tests, and process data instantly.
              </p>

              {/* EXPANDABLE INFO */}
              <div className="overflow-hidden">
                <AnimatePresence>
                  {activeSide === "ai" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-l-2 border-blue-400 pl-4 space-y-3"
                    >
                       <p className="text-[#FDFCF0]/60 text-sm">
                         We use AI as an accelerator, not a decision maker. It handles the heavy lifting for:
                       </p>
                       <ul className="grid grid-cols-1 gap-2 text-sm text-[#FDFCF0] font-medium">
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">⚡</span> 1000+ Scenario Runs
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">⚡</span> Anomaly Detection
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">⚡</span> Auto-Drafting Reports
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}