"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Approximate coordinates for a standard Mercator projection
// top/left in percentages
const LOCATIONS = [
  { name: "United States", top: 32, left: 20 },
  { name: "Canada", top: 20, left: 20 },
  { name: "United Kingdom", top: 26, left: 47 },
  { name: "UAE", top: 42, left: 63 },
  { name: "Saudi Arabia", top: 44, left: 61 },
  { name: "Pakistan", top: 40, left: 67 },
  { name: "Australia", top: 75, left: 85 },
  { name: "New Zealand", top: 85, left: 92 },
];

export default function GlobalReach() {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">
      
      {/* 1. Ambient Background Glow to break the "All Black" boredom */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-black opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#FDFCF0]">
            Global <span className="text-[#D4AF37]">Presence</span>
          </h2>
          <p className="text-[#FDFCF0]/60 mt-4 max-w-2xl mx-auto text-lg">
            Serving clients across 8+ jurisdictions with localized IFRS and tax expertise.
          </p>
        </motion.div>

        {/* 2. THE MAP CONTAINER */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[1.8/1] mt-10 group">
          
          {/* World Map Image (Inverted/Tinted for Dark Mode) */}
          <div 
            className="absolute inset-0 w-full h-full opacity-30 bg-contain bg-no-repeat bg-center transition-opacity duration-500 group-hover:opacity-40"
            style={{ 
              backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
              filter: "invert(1) sepia(1) saturate(0) brightness(0.7)" // Makes it subtle grey
            }}
          />

          {/* 3. THE PINS */}
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="absolute w-4 h-4 -ml-2 -mt-2 cursor-pointer z-20"
              style={{ top: `${loc.top}%`, left: `${loc.left}%` }}
              onMouseEnter={() => setActivePin(loc.name)}
              onMouseLeave={() => setActivePin(null)}
            >
              {/* Pulse Effect */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-40 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] border border-[#FDFCF0]/50"></span>

              {/* Tooltip Label */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 -top-10 px-3 py-1 bg-[#FDFCF0] text-[#050505] text-xs font-bold rounded shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none
                  ${activePin === loc.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                `}
              >
                {loc.name}
                {/* Little triangle arrow */}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FDFCF0] rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}