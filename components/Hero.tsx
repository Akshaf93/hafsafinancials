"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const GridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Royal Blue Gradient Base - Source: 90 */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
    
    {/* Financial Grid Pattern - Represents Modeling/Excel */}
    <div 
      className="absolute inset-0 opacity-[0.07]" 
      style={{ 
        backgroundImage: `linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)`, 
        backgroundSize: '40px 40px' 
      }} 
    />
    
    {/* Gold Glow Accents */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen" />
  </div>
);

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden pt-20 pb-10"
    >
      <GridBackground />

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        style={{ y: y1 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
      >
        
        {/* 70/30 Philosophy Badge - Source: 490 */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-0 mb-8 rounded-full border border-white/10 bg-slate-900/50 backdrop-blur-md overflow-hidden"
        >
          <div className="px-4 py-1.5 bg-blue-900/40 text-blue-200 text-[10px] md:text-xs font-bold tracking-wider uppercase border-r border-white/10">
            70% Human Expert
          </div>
          <div className="px-4 py-1.5 bg-amber-900/20 text-amber-200 text-[10px] md:text-xs font-bold tracking-wider uppercase flex items-center gap-2">
            <span>30% AI Driven</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
          </div>
        </motion.div>

        {/* Headlines - Source: 4 & 551 */}
        <div className="space-y-2 mb-8 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Strategic <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Financial Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto mt-6"
          >
            Human Judgment. <span className="text-white font-medium">AI Intelligence.</span> Financial Excellence.
          </motion.p>
        </div>

        {/* Buttons - Source: 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base rounded shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all transform hover:-translate-y-0.5">
            Get a Consultation
          </button>
          
          <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm sm:text-base rounded backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
            <span>Explore Services</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Trust Signals / Footer Grid - Source: 8, 262, 10 */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-10"
        >
            <div className="text-center md:text-left px-4">
               <h4 className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">Trusted Advisory</h4>
               <p className="text-slate-400 text-sm">IFRS Implementation & Financial Architecture [cite: 8]</p>
            </div>
            
            <div className="text-center px-4 border-l-0 md:border-l border-r-0 md:border-r border-white/10">
               <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-1">Global Reach</h4>
               {/* Source: 262 */}
               <p className="text-slate-400 text-sm">UAE, UK, USA, KSA, Canada & Pakistan</p>
            </div>

            <div className="text-center md:text-right px-4">
               <h4 className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">Expert Team</h4>
               {/* Source: 10 */}
               <p className="text-slate-400 text-sm">CAs, CFAs, FRMs & IT Auditors</p>
            </div>
        </motion.div>

      </motion.div>
    </section>
  );
}