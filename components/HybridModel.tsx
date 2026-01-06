"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HybridModel() {
  // 'human' | 'ai' | null
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-[#050505] flex flex-col justify-center items-center py-24 relative overflow-hidden">
      
      {/* HEADER */}
      <div className="relative z-10 text-center mb-12 px-6">
        <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-4">
          Our Philosophy
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0]">
          70% Human. <span className="text-[#D4AF37]">30% AI.</span>
        </h3>
        <p className="text-[#FDFCF0]/60 mt-4 max-w-2xl mx-auto">
          [cite_start]"Financial judgment remains human. Intelligence is accelerated by AI." [cite: 574]
        </p>
      </div>

      {/* THE CARDS CONTAINER */}
      <div className="relative w-full max-w-6xl h-[500px] flex gap-2 px-4 md:px-0">
        
        {/* === CARD 1: HUMAN EXPERT === */}
        <motion.div
          layout
          onHoverStart={() => setActive("human")}
          onHoverEnd={() => setActive(null)}
          // Animation Logic:
          // Default: flex-1 (50%)
          // Hover 'human': flex-[2] (Grows)
          // Hover 'ai': flex-[0.5] (Shrinks)
          animate={{
            flex: active === "human" ? 2.5 : active === "ai" ? 0.5 : 1,
            opacity: active === "ai" ? 0.6 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative h-full rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#111] cursor-pointer group"
        >
          {/* Background Image/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#050505] opacity-90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            {/* Top Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30">
                <span className="text-xl">🧠</span>
              </div>
              <h4 className="text-xl font-bold text-[#FDFCF0] uppercase tracking-wider">
                70% Human Expert
              </h4>
            </div>

            {/* Description (Visible when active or default) */}
            <motion.div 
               animate={{ opacity: active === "ai" ? 0 : 1 }} 
               className="space-y-4"
            >
               <h3 className="text-3xl font-serif text-[#D4AF37]">
                 Strategic Judgment
               </h3>
               <p className="text-[#FDFCF0]/70 leading-relaxed max-w-md">
                 Led by CAs, CFAs, and FRMs. We handle complex IFRS interpretations, valuation logic, and board-level negotiations. [cite_start]AI supports, but never decides. [cite: 576, 594]
               </p>
               
               {/* List of Human Tasks */}
               <ul className="space-y-2 mt-4">
                 {["IFRS Policy Decisions", "M&A Structuring", "Audit Defense"].map((item) => (
                   <li key={item} className="flex items-center gap-2 text-sm text-[#FDFCF0]/80">
                     <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                     {item}
                   </li>
                 ))}
               </ul>
            </motion.div>
            
            {/* Hover Instruction */}
            <div className="text-[#FDFCF0]/30 text-xs font-mono uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">
              Core Value Driver
            </div>
          </div>
        </motion.div>

        {/* === CARD 2: AI DRIVEN === */}
        <motion.div
          layout
          onHoverStart={() => setActive("ai")}
          onHoverEnd={() => setActive(null)}
          // Animation Logic:
          // Default: flex-1 (50%)
          // Hover 'ai': flex-[2] (Grows)
          // Hover 'human': flex-[0.5] (Shrinks)
          animate={{
            flex: active === "ai" ? 2.5 : active === "human" ? 0.5 : 1,
            opacity: active === "human" ? 0.6 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative h-full rounded-2xl overflow-hidden border border-[#FDFCF0]/10 bg-[#0a0a0a] cursor-pointer group"
        >
          {/* Background with Techy Feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#050505] opacity-90" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(0deg,transparent_24%,rgba(212,175,55,0.3)_25%,rgba(212,175,55,0.3)_26%,transparent_27%,transparent_74%,rgba(212,175,55,0.3)_75%,rgba(212,175,55,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(212,175,55,0.3)_25%,rgba(212,175,55,0.3)_26%,transparent_27%,transparent_74%,rgba(212,175,55,0.3)_75%,rgba(212,175,55,0.3)_76%,transparent_77%,transparent)] bg-[length:30px_30px]" />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            {/* Top Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
                <span className="text-xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-[#FDFCF0] uppercase tracking-wider">
                30% AI Driven
              </h4>
            </div>

            {/* Description */}
            <motion.div 
               animate={{ opacity: active === "human" ? 0 : 1 }} 
               className="space-y-4"
            >
               <h3 className="text-3xl font-serif text-blue-400">
                 Speed & Scale
               </h3>
               <p className="text-[#FDFCF0]/70 leading-relaxed max-w-md">
                 Our engines scan contracts for IFRS indicators, run thousands of stress-test scenarios, and detect anomalies instantly. [cite_start]Efficiency without error. [cite: 596, 600]
               </p>

               {/* List of AI Tasks */}
               <ul className="space-y-2 mt-4">
                 {["Anomaly Detection", "Scenario Simulations", "Data Cleansing"].map((item) => (
                   <li key={item} className="flex items-center gap-2 text-sm text-[#FDFCF0]/80">
                     <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                     {item}
                   </li>
                 ))}
               </ul>
            </motion.div>

            {/* Hover Instruction */}
            <div className="text-[#FDFCF0]/30 text-xs font-mono uppercase tracking-widest group-hover:text-blue-400 transition-colors">
              Efficiency Engine
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}