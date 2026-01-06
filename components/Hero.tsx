"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

// --- MAP LOCATIONS ---
// Calibrated for the larger map size
const LOCATIONS = [
  { name: "United States", top: 28, left: 20, align: "bottom" },
  { name: "Canada", top: 12, left: 18, align: "top" },
  { name: "United Kingdom", top: 18, left: 47, align: "top" },
  { name: "UAE", top: 40, left: 62, align: "bottom" },
  { name: "Saudi Arabia", top: 38, left: 59, align: "top" },
  { name: "Pakistan", top: 35, left: 66, align: "top" },
  { name: "Australia", top: 72, left: 85, align: "top" },
  { name: "New Zealand", top: 82, left: 93, align: "top" },
];

const ObsidianBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
    {/* Texture */}
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

      {/* --- LEFT CONTENT LAYER --- */}
      {/* We restrict the text to the left half so it doesn't overlap the huge map too much */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex items-center pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left pointer-events-auto"
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
              <br />Global Advisory across 8+ Jurisdictions.
            </motion.p>
          </div>

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

          {/* Mini Footer Grid */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="mt-12 w-full grid grid-cols-2 gap-6 border-t border-[#FDFCF0]/10 pt-6"
          >
              <div className="text-left">
                 <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-1">Trusted Advisory</h4>
                 <p className="text-[#FDFCF0]/50 text-xs font-light">IFRS & Architecture</p>
              </div>
              <div className="text-left">
                 <h4 className="text-[#FDFCF0] font-bold text-xs uppercase tracking-[0.2em] mb-1">Expert Team</h4>
                 <p className="text-[#FDFCF0]/50 text-xs font-light">CAs, CFAs & FRMs</p>
              </div>
          </motion.div>
        </motion.div>
      </div>


      {/* --- HUGE MAP LAYER (Right Side) --- */}
      {/* 1. We position it absolute on the right. 
          2. We set a massive height (h-[90vh]) so it spans vertically.
          3. 'right-[-5%]' pulls it slightly off screen to feel immersive.
      */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-1/2 -translate-y-1/2 right-[-5%] lg:right-[-2%] h-[80vh] md:h-[90vh] aspect-[1.9/1] z-10 pointer-events-none"
      >
        {/* Gradient Mask to prevent "Boxy" look */}
        <div className="w-full h-full relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            
            {/* Map Image */}
            <div 
                className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-80"
                style={{ 
                  backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                  filter: "invert(1) sepia(1) saturate(0.2) brightness(0.7)" 
                }}
            />

            {/* Interactive Pins (Pointer Events Auto) */}
            {LOCATIONS.map((loc, i) => (
                <motion.div
                key={loc.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1), type: "spring", stiffness: 200 }}
                className="absolute w-5 h-5 -ml-2.5 -mt-2.5 z-20 pointer-events-auto"
                style={{ top: `${loc.top}%`, left: `${loc.left}%` }}
                >
                {/* Dot: Gold Center, THICK Black Border */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-40 animate-ping" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-[#D4AF37] border-[4px] border-[#050505] shadow-[0_0_15px_#D4AF37]" />

                {/* Label: Solid Black BG, Gold Border */}
                <div 
                    className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-30
                    ${loc.align === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'}
                    `}
                >
                    <div className="bg-[#050505] border border-[#D4AF37]/40 px-3 py-1.5 text-[#FDFCF0] text-[11px] font-bold uppercase tracking-wider rounded-sm shadow-xl flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                      {loc.name}
                    </div>
                </div>
                </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}