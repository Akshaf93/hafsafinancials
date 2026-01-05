"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const ObsidianBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
    {/* Deep Obsidian Base */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
    
    {/* Soft Gold Grid - Very Subtle */}
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, 
        backgroundSize: '50px 50px' 
      }} 
    />
    
    {/* Ambient Gold Glows (Luxury Feel) */}
    <div className="absolute -top-[10%] left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FDFCF0]/5 rounded-full blur-[100px]" />
  </div>
);

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden pt-20 pb-32"
    >
      <ObsidianBackground />

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
          className="flex items-center gap-0 mb-8 rounded-full border border-[#D4AF37]/20 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          {/* Ivory Side */}
          <div className="px-5 py-2 bg-[#FDFCF0]/5 text-[#FDFCF0] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-r border-[#D4AF37]/20">
            70% Human Expert
          </div>
          {/* Gold Side */}
          <div className="px-5 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
            <span>30% AI Driven</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
          </div>
        </motion.div>

        {/* Headlines - Source: 4 & 551 */}
        <div className="space-y-4 mb-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-[#FDFCF0] leading-[1.1]"
          >
            Strategic <br className="hidden md:block" />
            {/* Soft Gold Gradient Text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] via-[#D4AF37] to-[#8a7035]">
              Financial Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-[#FDFCF0]/60 font-light max-w-3xl mx-auto mt-6 tracking-wide"
          >
            Human Judgment. <span className="text-[#D4AF37] font-normal">AI Intelligence.</span> Financial Excellence.
          </motion.p>
        </div>

        {/* Buttons - Source: 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          {/* Primary Button: Soft Gold Background, Obsidian Text */}
          <button className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#eac45f] text-[#050505] font-bold text-sm sm:text-base tracking-wider uppercase rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all transform hover:-translate-y-0.5">
            Get a Consultation
          </button>
          
          {/* Secondary Button: Ivory Outline */}
          <Link href="/services" className="w-full sm:w-auto px-8 py-4 border border-[#FDFCF0]/20 hover:border-[#D4AF37]/50 text-[#FDFCF0] hover:text-[#D4AF37] font-medium text-sm sm:text-base tracking-wider uppercase rounded-sm backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
            <span>Explore Services</span>
            <span className="group-hover:translate-x-1 transition-transform text-[#D4AF37]">→</span>
          </Link>
        </motion.div>

        {/* Trust Signals / Footer Grid - Source: 8, 262, 10 */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#FDFCF0]/10 pt-10"
        >
            <div className="text-center md:text-left px-4 group hover:bg-[#FDFCF0]/5 p-4 rounded transition-colors duration-500">
               <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-2">Trusted Advisory</h4>
               <p className="text-[#FDFCF0]/50 text-sm font-light">IFRS Implementation & Financial Architecture</p>
            </div>
            
            <div className="text-center px-4 md:border-l md:border-r border-[#FDFCF0]/10 group hover:bg-[#FDFCF0]/5 p-4 rounded transition-colors duration-500">
               <h4 className="text-[#FDFCF0] font-bold text-xs uppercase tracking-[0.2em] mb-2">Global Reach</h4>
               {/* Source: 262 */}
               <p className="text-[#FDFCF0]/50 text-sm font-light">UAE, UK, USA, KSA, Canada & Pakistan</p>
            </div>

            <div className="text-center md:text-right px-4 group hover:bg-[#FDFCF0]/5 p-4 rounded transition-colors duration-500">
               <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-2">Expert Team</h4>
               {/* Source: 10 */}
               <p className="text-[#FDFCF0]/50 text-sm font-light">CAs, CFAs, FRMs & IT Auditors</p>
            </div>
        </motion.div>

      </motion.div>

      {/* Gradient Fade to blend Obsidian Hero into Obsidian Services */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
    </section>
  );
}