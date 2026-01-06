"use client";

import { motion } from "framer-motion";

export default function InsightsPreview() {
  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#FDFCF0]">Intelligence Hub</h2>
        <p className="text-[#FDFCF0]/60 mt-4">Stay ahead with our exclusive newsletters.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#FDFCF0]/5 p-10 rounded-2xl border border-[#FDFCF0]/10 hover:border-[#D4AF37]/50 transition-colors group"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-[#FDFCF0]">IFRS & Amendments</h3>
            <span className="bg-[#D4AF37] text-[#050505] text-[10px] font-bold px-2 py-1 rounded">WEEKLY</span>
          </div>
          <p className="text-[#FDFCF0]/60 mb-8">Critical updates on IFRS 9, 15, 16, and 17. Audit-ready summaries.</p>
          <button className="w-full py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded hover:bg-[#D4AF37] hover:text-[#050505] transition-all">
            Read Sample
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#FDFCF0]/5 p-10 rounded-2xl border border-[#FDFCF0]/10 hover:border-[#D4AF37]/50 transition-colors group"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-[#FDFCF0]">M&A & AI Strategy</h3>
            <span className="bg-[#D4AF37] text-[#050505] text-[10px] font-bold px-2 py-1 rounded">PREMIUM</span>
          </div>
          <p className="text-[#FDFCF0]/60 mb-8">Valuation trends, AI modeling techniques, and transaction advice.</p>
          <button className="w-full py-3 bg-[#D4AF37] text-[#050505] font-bold rounded hover:bg-[#FDFCF0] transition-all">
            Subscribe
          </button>
        </motion.div>
      </div>
    </div>
  );
}