"use client";

import { motion } from "framer-motion";

export default function InsightsHero() {
  return (
    <div className="relative z-10 text-center max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.4em] mb-8">
                Global Intelligence Unit
            </h2>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-[#FDFCF0] mb-8 leading-[0.9]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] to-[#E5D095]">Ledger</span>
            </h1>
            <p className="text-[#FDFCF0]/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Defensible analysis across IFRS, M&A Strategy, and Financial Architecture.
                <br/> <span className="text-[#E5D095]/60 text-sm mt-4 block">Read. Analyze. Execute.</span>
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex flex-col items-center gap-2 text-[#E5D095]/50 text-xs uppercase tracking-widest"
            >
                <span>Scroll for Feed</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#E5D095]/50 to-transparent"></div>
            </motion.div>
        </motion.div>
    </div>
  );
}