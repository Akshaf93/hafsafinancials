"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const JURISDICTIONS = [
  "USA", "UK", "UAE", "Canada", 
  "Saudi Arabia", "Pakistan", "Australia", "New Zealand"
];

const ObsidianBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, 
        backgroundSize: '50px 50px' 
      }} 
    />
  </div>
);

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); 

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden pt-20"
    >
      <ObsidianBackground />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center h-full pointer-events-none">
        
        {/* LEFT COLUMN: TEXT (Pointer events auto) */}
        <motion.div 
          style={{ y: y1 }}
          className="flex flex-col items-start text-left pointer-events-auto pl-4 md:pl-0 z-30"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-0 mb-6 rounded-full border border-[#D4AF37]/20 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <div className="px-4 py-2 bg-[#FDFCF0]/5 text-[#FDFCF0] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-r border-[#D4AF37]/20">
              70% Human Expert
            </div>
            <div className="px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
              <span>30% AI Driven</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
            </div>
          </motion.div>

          {/* Headlines */}
          <div className="space-y-4 mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-[#FDFCF0] leading-[1.1] drop-shadow-2xl"
            >
              Strategic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] via-[#D4AF37] to-[#8a7035]">
                Financial Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg text-[#FDFCF0]/80 font-light max-w-xl mt-6 tracking-wide"
            >
              Human Judgment. <span className="text-[#D4AF37] font-normal">AI Intelligence.</span> 
              <br />Global Advisory.
            </motion.p>
          </div>

          {/* Active Jurisdictions List (Replaces Pins) */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="flex flex-wrap gap-2 mb-10 max-w-md"
          >
             {JURISDICTIONS.map((country, i) => (
                <span key={country} className="px-3 py-1 border border-[#D4AF37]/20 text-[#FDFCF0]/60 text-xs uppercase tracking-wider rounded-full">
                  {country}
                </span>
             ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <button className="px-8 py-4 bg-[#D4AF37] hover:bg-[#eac45f] text-[#050505] font-bold text-sm tracking-wider uppercase rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all transform hover:-translate-y-0.5">
              Get a Consultation
            </button>
            <Link href="/services" className="px-8 py-4 border border-[#FDFCF0]/20 hover:border-[#D4AF37]/50 text-[#FDFCF0] hover:text-[#D4AF37] font-medium text-sm tracking-wider uppercase rounded-sm backdrop-blur-sm transition-all flex items-center gap-2 group">
              <span>Explore Services</span>
              <span className="group-hover:translate-x-1 transition-transform text-[#D4AF37]">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* --- CSS 3D GLOBE LAYER --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/2 -translate-y-1/2 right-[-10%] md:right-[5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-10 pointer-events-none"
      >
         {/* 1. The Globe Container */}
         <div className="relative w-full h-full">
            
            {/* 2. Atmosphere Glow (Behind) */}
            <div className="absolute inset-0 rounded-full bg-[#D4AF37] blur-[120px] opacity-10 animate-pulse" />

            {/* 3. The Sphere */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.9),_inset_10px_10px_30px_rgba(255,255,255,0.05)] bg-[#111]">
                
                {/* 4. The Spinning Map Texture */}
                {/* We use a double-width background moving left to right to simulate spin */}
                <div 
                   className="absolute inset-0 w-[200%] h-full opacity-60"
                   style={{
                      backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                      backgroundSize: 'contain',
                      backgroundRepeat: 'repeat-x',
                      filter: 'invert(1) sepia(1) saturate(0.2) brightness(0.6)',
                      animation: 'spin 30s linear infinite'
                   }}
                />
            </div>

            {/* 5. Orbital Ring 1 (Tilted) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-[#D4AF37]/10 rounded-full animate-[spin_20s_linear_infinite]" 
                 style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent', transform: 'translate(-50%, -50%) rotate(45deg)' }} 
            />
            
            {/* 6. Orbital Ring 2 (Opposite Tilt) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#FDFCF0]/5 rounded-full animate-[spin_25s_linear_infinite_reverse]" 
                 style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent', transform: 'translate(-50%, -50%) rotate(-25deg)' }} 
            />

            {/* 7. Floating "Satellite" Dot */}
            <div className="absolute top-0 left-[50%] w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37] animate-[ping_3s_ease-in-out_infinite]" />

         </div>
      </motion.div>

      {/* Global CSS for the spin animation */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}