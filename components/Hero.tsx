"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

// --- LOCATIONS ---
const LOCATIONS = [
  { name: "United States", top: 36, left: 22, align: "bottom" },
  { name: "Canada", top: 15, left: 20, align: "top" },
  { name: "United Kingdom", top: 26, left: 47, align: "top" },
  { name: "UAE", top: 50, left: 63, align: "bottom" },
  { name: "Saudi Arabia", top: 36, left: 60, align: "top" },
  { name: "Pakistan", top: 32, left: 67, align: "top" },
  { name: "Australia", top: 65, left: 85, align: "top" },
  { name: "New Zealand", top: 75, left: 94, align: "top" },
];

// REMOVED: ObsidianBackground component (It is now in globals.css for consistenc
export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); 

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-32 pb-10 snap-start snap-always"
    >
      {/* Background is now handled by globals.css <body>.
        This ensures Hero matches Services/Team sections 100%.
      */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* --- LEFT COLUMN: TEXT --- */}
        <motion.div 
          style={{ y: y1 }}
          className="flex flex-col items-start text-left z-20"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-0 mb-6 rounded-full border border-[#E5D095]/20 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-[0_0_20px_rgba(229,208,149,0.1)]"
          >
            <div className="px-4 py-2 bg-[#FDFCF0]/5 text-[#FDFCF0] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-r border-[#E5D095]/20">
              70% Human Expert
            </div>
            <div className="px-4 py-2 bg-[#E5D095]/10 text-[#E5D095] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
              <span>30% AI Driven</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5D095] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5D095]"></span>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] via-[#E5D095] to-[#8a7035]">
                Financial Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg text-[#FDFCF0]/80 font-light max-w-xl mt-6 tracking-wide"
            >
              Human Judgment. <span className="text-[#E5D095] font-normal">AI Intelligence.</span> 
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
            <button className="px-8 py-4 bg-[#E5D095] hover:bg-[#eac45f] text-[#050505] font-bold text-sm tracking-wider uppercase rounded-sm shadow-[0_0_30px_rgba(229,208,149,0.2)] transition-all transform hover:-translate-y-0.5">
              Get a Consultation
            </button>
            <Link href="/services" className="px-8 py-4 border border-[#FDFCF0]/20 hover:border-[#E5D095]/50 text-[#FDFCF0] hover:text-[#E5D095] font-medium text-sm tracking-wider uppercase rounded-sm backdrop-blur-sm transition-all flex items-center gap-2 group">
              <span>Explore Services</span>
              <span className="group-hover:translate-x-1 transition-transform text-[#E5D095]">→</span>
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
                 <h4 className="text-[#E5D095] font-bold text-xs uppercase tracking-[0.2em] mb-1">Trusted Advisory</h4>
                 <p className="text-[#FDFCF0]/50 text-xs font-light">IFRS & Architecture</p>
              </div>
              <div className="text-left">
                 <h4 className="text-[#FDFCF0] font-bold text-xs uppercase tracking-[0.2em] mb-1">Expert Team</h4>
                 <p className="text-[#FDFCF0]/50 text-xs font-light">CAs, CFAs & FRMs</p>
              </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN: WORLD MAP --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.2 }} 
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full aspect-[1.6/1]"
        >
          {/* MAP IMAGE */}
          <div 
            className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-100"
            style={{ 
              backgroundImage: "url('/World_map_-_low_resolution.svg')",
              filter: "invert(1) sepia(1) saturate(0.2) brightness(0.7)" 
            }}
          />

          {/* LOCATIONS (Callout Style) */}
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
              className="absolute z-20 flex flex-col items-center"
              style={{ 
                top: `${loc.top}%`, 
                left: `${loc.left}%`,
                transform: 'translate(-50%, -50%)' 
              }}
            >
              {/* TOP ALIGN */}
              {loc.align === 'top' && (
                <>
                  <div className="mb-1 bg-[#050505]/90 border border-[#E5D095]/30 px-2 py-1 text-[#FDFCF0] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-lg whitespace-nowrap backdrop-blur-sm">
                    {loc.name}
                  </div>
                  <div className="w-[1px] h-6 bg-gradient-to-b from-[#E5D095] to-transparent opacity-50"></div>
                </>
              )}

              {/* DOT */}
              <div className="w-2 h-2 rounded-full bg-[#E5D095] shadow-[0_0_5px_rgba(229,208,149,0.8)] border border-[#050505]"></div>

              {/* BOTTOM ALIGN */}
              {loc.align === 'bottom' && (
                <>
                  <div className="w-[1px] h-6 bg-gradient-to-t from-[#E5D095] to-transparent opacity-50"></div>
                  <div className="mt-1 bg-[#050505]/90 border border-[#E5D095]/30 px-2 py-1 text-[#FDFCF0] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-lg whitespace-nowrap backdrop-blur-sm">
                    {loc.name}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}