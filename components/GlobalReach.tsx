"use client";

import { motion } from "framer-motion";

const COUNTRIES = [
  "United Arab Emirates", "Saudi Arabia", "United Kingdom", 
  "United States", "Canada", "Australia", "New Zealand", "Pakistan"
];

export default function GlobalReach() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-[#333] relative overflow-hidden">
      {/* Background World Map Graphic (Abstract) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
         <div className="w-[800px] h-[400px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-contain filter invert" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FDFCF0]">
            Global Financial Advisory
          </h2>
          <p className="text-[#FDFCF0]/60 mt-4 max-w-2xl mx-auto">
            Serving businesses with IFRS compliance, tax strategy, and financial modeling across key global markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {COUNTRIES.map((country, index) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#FDFCF0]/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all group cursor-default"
            >
              <span className="text-[#FDFCF0] font-medium group-hover:text-[#D4AF37] transition-colors">
                {country}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}