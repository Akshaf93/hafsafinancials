"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HybridModel() {
  const [active, setActive] = useState<"human" | "ai" | null>(null);

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
          "Financial judgment remains human. Intelligence is accelerated by AI."
        </p>
      </div>

      {/* CARDS CONTAINER */}
      {/* Fixed height ensures no vertical layout shift. Flex ensures they fill the width. */}
      <div className="relative w-full max-w-6xl h-[500px] flex gap-4 px-6 md:px-0">
        
        {/* === CARD 1: HUMAN EXPERT === */}
        <motion.div
          onHoverStart={() => setActive("human")}
          onHoverEnd={() => setActive(null)}
          // ANIMATION LOGIC:
          // Standard state: flex: 1 (50% width)
          // Active state: flex: 2 (66% width)
          // Inactive state: flex: 0.5 (33% width)
          animate={{
            flex: active === "human" ? 2 : active === "ai" ? 0.5 : 1,
            opacity: active === "ai" ? 0.5 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative h-full rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#111] cursor-pointer group"
        >
          {/* Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#050505]" />

          {/* Content */}
          <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
            {/* Top Label */}
            <div className="border-l-2 border-[#D4AF37] pl-4">
              <h4 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-widest">
                70% Human Expert
              </h4>
            </div>

            {/* Description Text */}
            <motion.div 
               animate={{ opacity: active === "ai" ? 0 : 1 }} 
               className="space-y-6"
            >
               <h3 className="text-4xl font-serif text-[#D4AF37]">
                 Strategic Judgment
               </h3>
               <p className="text-[#FDFCF0]/80 leading-relaxed max-w-md text-sm md:text-base">
                 Led by CAs, CFAs, and FRMs. We handle complex IFRS interpretations, valuation logic, and board-level negotiations. AI supports, but never decides.
               </p>
               
               {/* Bullet Points */}
               <div className="space-y-2">
                 {["IFRS Policy Decisions", "M&A Structuring", "Audit Defense"].map((item) => (
                   <div key={item} className="flex items-center gap-3 text-sm text-[#FDFCF0]/60">
                     <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                     {item}
                   </div>
                 ))}
               </div>
            </motion.div>
            
            {/* Hover Indicator */}
            <div className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Core Value Driver
            </div>
          </div>
        </motion.div>

        {/* === CARD 2: AI DRIVEN === */}
        <motion.div
          onHoverStart={() => setActive("ai")}
          onHoverEnd={() => setActive(null)}
          animate={{
            flex: active === "ai" ? 2 : active === "human" ? 0.5 : 1,
            opacity: active === "human" ? 0.5 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative h-full rounded-2xl overflow-hidden border border-[#FDFCF0]/10 bg-[#0a0a0a] cursor-pointer group"
        >
          {/* Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#050505] opacity-80" />
          {/* Subtle Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
                backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
            {/* Top Label */}
            <div className="border-l-2 border-[#FDFCF0]/30 pl-4">
              <h4 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-widest">
                30% AI Driven
              </h4>
            </div>

            {/* Description Text */}
            <motion.div 
               animate={{ opacity: active === "human" ? 0 : 1 }} 
               className="space-y-6"
            >
               <h3 className="text-4xl font-serif text-[#FDFCF0]">
                 Speed & Scale
               </h3>
               <p className="text-[#FDFCF0]/80 leading-relaxed max-w-md text-sm md:text-base">
                 Our engines scan contracts for IFRS indicators, run thousands of stress-test scenarios, and detect anomalies instantly. Efficiency without error.
               </p>

               {/* Bullet Points */}
               <div className="space-y-2">
                 {["Anomaly Detection", "Scenario Simulations", "Data Cleansing"].map((item) => (
                   <div key={item} className="flex items-center gap-3 text-sm text-[#FDFCF0]/60">
                     <div className="w-1 h-1 bg-[#FDFCF0] rounded-full" />
                     {item}
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Hover Indicator */}
            <div className="text-[#FDFCF0] text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-10