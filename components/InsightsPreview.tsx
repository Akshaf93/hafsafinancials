"use client";

import { motion } from "framer-motion";

export default function InsightsPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-dark">Stay Ahead with Our Insights</h2>
            <p className="text-gray-600 mt-4">
              Exclusive updates for finance professionals. Deep dives into IFRS, M&A, and AI-driven strategy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Newsletter 1: IFRS */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              WEEKLY
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">The IFRS & Amendments</h3>
            <p className="text-gray-500 text-sm mb-6">
              Critical updates on IFRS 9, 15, 16, and 17. Audit-ready summaries for CFOs and Auditors.
            </p>
            <button className="w-full py-3 border-2 border-brand-blue text-brand-blue font-bold rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-all">
              Subscribe to IFRS Newsletter
            </button>
          </motion.div>

          {/* Newsletter 2: M&A & AI */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-brand-dark p-8 rounded-2xl shadow-sm border border-gray-800 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
              PREMIUM
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mergers, M&A & AI Strategy</h3>
            <p className="text-gray-400 text-sm mb-6">
              Valuation trends, AI modeling techniques, and strategic transaction advice.
            </p>
            <button className="w-full py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-white transition-all">
              Subscribe to M&A & AI Newsletter
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}