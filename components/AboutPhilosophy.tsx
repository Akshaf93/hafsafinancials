"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT: Headline */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-7xl font-serif font-medium text-[#FDFCF0] leading-tight">
          Defensible <br />
          <span className="text-[#E5D095]">Precision</span>
        </h2>
      </motion.div>

      {/* RIGHT: Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8 text-lg text-[#FDFCF0]/70 font-light leading-relaxed border-l border-[#E5D095]/20 pl-8 md:pl-12"
      >
        <p>
          In an era of ambiguity, we provide absolute certainty. Our methodology is rooted in deep analytical rigor and a commitment to transparent, complexity-based pricing.
        </p>
        <p>
          We reject the industry standard of opaque billing and generic advice. Instead, we offer engagement models that align our incentives with your success.
        </p>
        
        <div className="pt-4">
          <div className="flex items-center gap-4 text-[#E5D095] font-serif italic text-xl">
            <span>"Data without context is noise."</span>
          </div>
          <p className="text-sm text-[#FDFCF0]/40 mt-2 uppercase tracking-wider">
            — Our Core Principle
          </p>
        </div>
      </motion.div>

    </div>
  );
}