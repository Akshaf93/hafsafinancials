"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// --- THE "TOPOGRAPHIC WAVE" COMPONENT ---
// This creates the 'living lines' effect without heavy 3D libraries
const WaveLine = ({ delay, opacity, yOffset }: { delay: number; opacity: number; yOffset: number }) => (
  <motion.div
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: opacity }}
    transition={{ duration: 2, delay: 0.5 }}
    className="absolute w-[200%] -left-1/2"
    style={{ top: `${50 + yOffset}%` }}
  >
    <svg viewBox="0 0 1440 320" className="w-full h-[300px] md:h-[500px] fill-none">
      <motion.path
        d="M0,160 C320,300,420,0,740,160 C1060,320,1160,0,1480,160" // Sine wave curve
        stroke="url(#gold-gradient)"
        strokeWidth="2"
        fill="none"
        animate={{
          d: [
            "M0,160 C320,300,420,0,740,160 C1060,320,1160,0,1480,160", // State A
            "M0,160 C320,0,420,300,740,160 C1060,0,1160,300,1480,160", // State B (Inverted)
            "M0,160 C320,300,420,0,740,160 C1060,320,1160,0,1480,160", // Back to A
          ],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay,
        }}
      />
      <defs>
        <linearGradient id="gold-gradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="#d4af37" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
          <stop offset="80%" stopColor="#d4af37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]); // Parallax text
  
  // Create 15 lines to form the "mesh"
  const lines = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    delay: i * 0.2, // Stagger animation
    opacity: 1 - i * 0.05, // Fade out further back
    yOffset: i * 3, // Vertical spacing
  }));

  return (
    <section className="relative h-screen min-h-[800px] flex flex-col justify-center items-center overflow-hidden bg-[#0a0f1e]">
      
      {/* --- LAYER 1: BACKGROUND GLOW --- */}
      {/* A deep radial glow to highlight the center stage */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/30 via-[#0a0f1e] to-[#0a0f1e]" />

      {/* --- LAYER 2: THE TOPOGRAPHIC MESH --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 pointer-events-none perspective-[1000px]">
        <div className="relative w-full h-full transform rotate-x-12 scale-125">
           {lines.map((line) => (
             <WaveLine key={line.id} {...line} />
           ))}
        </div>
      </div>

      {/* --- LAYER 3: CONTENT (Centered & Powerful) --- */}
      <motion.div 
        style={{ y: yText }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8"
      >
        
        {/* The "Crown" Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-brand-gold/20 px-6 py-2 rounded-full mx-auto"
        >
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shadow-[0_0_10px_#d4af37]"></span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-gold/80">
            Audit-Ready Intelligence
          </span>
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shadow-[0_0_10px_#d4af37]"></span>
        </motion.div>

        {/* The Typography */}
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-none">
          <span className="block overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Strategic
            </motion.span>
          </span>
          <span className="block overflow-hidden relative">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-brand-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Excellence
            </motion.span>
            
            {/* Subtle reflection under the text */}
            <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.2 }}
               transition={{ delay: 1 }}
               className="absolute top-full left-0 w-full transform -scale-y-100 blur-sm text-brand-gold/50 pointer-events-none"
            >
              Excellence
            </motion.span>
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-2xl text-blue-100/60 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Empowering global enterprises with <span className="text-white font-normal">IFRS Precision</span> & <span className="text-white font-normal">AI Acceleration</span>.
        </motion.p>

        {/* The Action Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <button className="group relative px-10 py-4 bg-brand-gold text-brand-dark font-bold text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] transition-all">
            <span className="relative z-10 group-hover:text-white transition-colors">Start Consultation</span>
            <div className="absolute inset-0 bg-brand-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500 ease-out" />
          </button>
          
          <Link href="/services" className="text-white/80 hover:text-white font-medium flex items-center gap-3 transition-colors group">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all">
              ↓
            </div>
            <span>Explore Capabilities</span>
          </Link>
        </motion.div>

      </motion.div>

      {/* --- LAYER 4: VIGNETTE & GRAIN (Texture) --- */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0f1e_100%)]" />
      
    </section>
  );
}