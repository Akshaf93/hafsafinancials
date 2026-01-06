"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Adjusted coordinates: Moved LEFT to fix skew, corrected Top for Mercator
const LOCATIONS = [
  { name: "United States", top: 34, left: 18 },    // Shifted Left
  { name: "Canada", top: 22, left: 16 },           // Shifted Left
  { name: "United Kingdom", top: 25, left: 46 },   // Centered better
  { name: "UAE", top: 43, left: 60 },              // Shifted Left
  { name: "Saudi Arabia", top: 44, left: 58 },     // Shifted Left
  { name: "Pakistan", top: 41, left: 64 },         // Shifted Left
  { name: "Australia", top: 75, left: 82 },        // Shifted Left
  { name: "New Zealand", top: 86, left: 94 },      // Shifted Left
];

export default function GlobalReach() {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden bg-[#080808]">
      
      {/* --- ATMOSPHERE LAYERS (Fixing the 'All Black' look) --- */}
      
      {/* 1. Deep Blue/Slate tint to break the black monotone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 to-[#050505]" />

      {/* 2. The "Gold Nebula" - A warm spotlight behind the map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Subtle Grid for professional structure */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#FDFCF0 1px, transparent 1px), linear-gradient(90deg, #FDFCF0 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#FDFCF0]">
            Global <span className="text-[#D4AF37]">Impact</span>
          </h2>
          <p className="text-[#FDFCF0]/60 mt-4 max-w-2xl mx-auto text-lg font-light">
            Delivering IFRS precision and strategic clarity across key global markets.
          </p>
        </motion.div>

        {/* --- MAP CONTAINER --- */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[1.7/1] mt-8 group">
          
          {/* World Map Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center transition-all duration-700 opacity-60 group-hover:opacity-80"
            style={{ 
              backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
              // Invert to white/grey, then sepia for gold tint, then adjust brightness
              filter: "invert(1) sepia(1) saturate(0.5) hue-rotate(5deg) brightness(0.6) contrast(1.2)" 
            }}
          />

          {/* --- PINS --- */}
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 15 }}
              className="absolute w-6 h-6 -ml-3 -mt-3 cursor-pointer z-20 group/pin"
              style={{ top: `${loc.top}%`, left: `${loc.left}%` }}
              onMouseEnter={() => setActivePin(loc.name)}
              onMouseLeave={() => setActivePin(null)}
            >
              {/* Ping Ring */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-20 animate-ping duration-1000"></span>
              
              {/* Core Dot */}
              <span className="relative inline-flex items-center justify-center w-full h-full">
                 <span className="w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] ring-1 ring-[#FDFCF0]/30 transition-all duration-300 group-hover/pin:w-3 group-hover/pin:h-3 group-hover/pin:bg-[#FDFCF0]"></span>
              </span>

              {/* Tooltip */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-4 py-2 bg-[#FDFCF0] text-[#050505] text-xs font-bold uppercase tracking-wider rounded shadow-[0_4px_20px_rgba(0,0,0,0.5)] whitespace-nowrap transition-all duration-300 pointer-events-none
                  ${activePin === loc.name ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-90"}
                `}
              >
                {loc.name}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FDFCF0] rotate-45 -mt-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Legend / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-[#FDFCF0]/10 pt-8">
            {[
                { label: "Jurisdictions", val: "8+" },
                { label: "Global Clients", val: "50+" },
                { label: "IFRS Projects", val: "100%" },
                { label: "Audit Success", val: "100%" }
            ].map((stat) => (
                <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{stat.val}</div>
                    <div className="text-xs text-[#FDFCF0]/40 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}