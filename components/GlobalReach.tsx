"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// MOVED: UP (Top decreases) and RIGHT (Left increases)
const LOCATIONS = [
  { name: "United States", top: 32, left: 25 },
  { name: "Canada", top: 18, left: 22 },
  { name: "United Kingdom", top: 22, left: 49 },
  { name: "UAE", top: 40, left: 63 },
  { name: "Saudi Arabia", top: 41, left: 61 },
  { name: "Pakistan", top: 38, left: 65 },
  { name: "Australia", top: 70, left: 80 },
  { name: "New Zealand", top: 82, left: 85 },
];

export default function GlobalReach() {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    // UPDATED: Added pt-32 to push content down below the Navbar
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden pt-32">
      
      {/* Local Atmosphere (Spotlight) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#FDFCF0]">
            Global <span className="text-[#D4AF37]">Impact</span>
          </h2>
          <p className="text-[#FDFCF0]/60 mt-4 text-xl font-light tracking-wide">
            8+ Jurisdictions. One Standard of Excellence.
          </p>
        </motion.div>

        {/* MAP CONTAINER - UPDATED: max-w-4xl makes the map area smaller/tighter */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[1.8/1] mt-4 group">
          <div 
            className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center transition-all duration-700 opacity-50 group-hover:opacity-70"
            style={{ 
              backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
              filter: "invert(1) sepia(1) saturate(0.2) brightness(0.7)" 
            }}
          />

          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className="absolute w-4 h-4 -ml-2 -mt-2 cursor-pointer z-20"
              style={{ top: `${loc.top}%`, left: `${loc.left}%` }}
              onMouseEnter={() => setActivePin(loc.name)}
              onMouseLeave={() => setActivePin(null)}
            >
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-30 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />

              <div 
                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-3 py-1 bg-[#FDFCF0] text-[#050505] text-xs font-bold uppercase tracking-wider rounded shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none
                  ${activePin === loc.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                `}
              >
                {loc.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}