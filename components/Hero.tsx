"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// 1. New Component: The "Network Grid" Background
// Represents global connectivity (UAE, UK, USA)
const NetworkGrid = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="0.5" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  </div>
);

// 2. New Component: Floating Glow Orbs (Fills empty space)
const GlowingOrb = ({ color, size, top, left, delay }: any) => (
  <motion.div
    animate={{ 
      scale: [1, 1.2, 1], 
      opacity: [0.3, 0.6, 0.3],
      x: [0, 50, 0],
      y: [0, -50, 0]
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    className={`absolute rounded-full blur-[100px] pointer-events-none z-0 ${color}`}
    style={{ width: size, height: size, top, left }}
  />
);

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-screen min-h-[850px] flex items-center overflow-hidden bg-[#050A18]">
      
      {/* --- LAYER 1: THE ART (Brighter & More Visible) --- */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1639322537228-ad7117a39499?q=80&w=2664&auto=format&fit=crop"
          alt="Abstract Liquid Gold"
          fill
          className="object-cover opacity-80 mix-blend-screen" // Changed blend mode to make it pop
          priority
        />
        {/* Lighter Gradient so art shows through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/80 to-brand-blue/30" />
      </motion.div>

      {/* --- LAYER 2: AMBIENT GLOW ORBS (Fills negative space) --- */}
      <GlowingOrb color="bg-brand-blue" size="500px" top="-10%" left="-10%" delay={0} />
      <GlowingOrb color="bg-brand-gold" size="400px" top="40%" left="30%" delay={2} />
      <GlowingOrb color="bg-cyan-500" size="300px" top="10%" left="80%" delay={4} />

      {/* --- LAYER 3: NETWORK GRID --- */}
      <NetworkGrid />

      {/* --- LAYER 4: GIANT WATERMARK TEXT (Texture behind headline) --- */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none overflow-hidden w-full">
        <h1 className="text-[20vw] font-bold text-white/[0.03] leading-none tracking-tighter whitespace-nowrap">
          HAFSA FINANCIALS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: CONTENT --- */}
        <div className="space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(30,58,138,0.5)]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Global Financial Intelligence
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
              Precision
            </span>
            <span className="block">
              Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold filter drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                Vision.
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl border-l-4 border-brand-gold pl-6">
            Empowering businesses in <strong className="text-white">UK, UAE, USA & Pakistan</strong> with IFRS-ready, AI-accelerated financial architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            <button className="bg-brand-gold text-brand-dark px-10 py-4 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              Get a Consultation
            </button>
            <Link href="/services" className="px-10 py-4 rounded-xl font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all flex items-center gap-3">
              Explore Services
            </Link>
          </div>
        </div>

        {/* --- RIGHT: THE "ARTISTIC" DASHBOARD --- */}
        <motion.div 
          style={{ y: y2 }}
          className="hidden lg:block relative h-[600px] w-full perspective-[2000px]"
        >
          {/* 1. Main Glass Card (Tilted & Frosted) */}
          <motion.div 
            initial={{ rotateY: -15, rotateX: 10, opacity: 0 }}
            animate={{ rotateY: -5, rotateX: 5, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-10 left-10 w-96 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md border border-white/20 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
          >
            {/* Inner Content */}
            <div className="flex justify-between items-start mb-12">
               <div className="p-3 bg-brand-gold/20 rounded-2xl">
                 <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-bold">HF</div>
               </div>
               <div className="text-right">
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest">Confidence Score</p>
                 <p className="text-3xl font-bold text-white font-mono">98.4%</p>
               </div>
            </div>
            
            {/* Animated Graph Line */}
            <div className="relative h-24 w-full mt-8">
               <svg className="w-full h-full overflow-visible">
                 <motion.path 
                   d="M0 80 Q 50 80, 80 40 T 150 50 T 220 20 T 300 10" 
                   fill="none" 
                   stroke="#d4af37" 
                   strokeWidth="3"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 3, ease: "easeInOut" }}
                 />
                 {/* Glow under line */}
                 <path d="M0 80 Q 50 80, 80 40 T 150 50 T 220 20 T 300 10 L 300 100 L 0 100 Z" fill="url(#gradient-gold)" opacity="0.2" />
                 <defs>
                   <linearGradient id="gradient-gold" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#d4af37" />
                     <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
            <div className="flex gap-2 mt-6">
               <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs border border-green-500/30">Audit Ready</span>
               <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs border border-blue-500/30">IFRS Compliant</span>
            </div>
          </motion.div>

          {/* 2. Floating Abstract Shapes (To fill emptiness) */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-0 w-64 h-72 bg-brand-blue/20 backdrop-blur-xl border border-white/10 rounded-[2rem] z-10 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">🤖 + 🧠</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Hybrid Model</div>
            </div>
          </motion.div>

          {/* 3. Deep Background Card (Depth) */}
          <div className="absolute top-60 left-40 w-80 h-80 bg-black/40 backdrop-blur-sm border border-white/5 rounded-[2rem] -z-10 transform scale-90"></div>

        </motion.div>
      </div>
    </section>
  );
}