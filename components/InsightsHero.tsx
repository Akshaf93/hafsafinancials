"use client";

import { motion } from "framer-motion";
import { FeaturedCard } from "@/components/InsightCards";

export default function InsightsHero({ featuredArticle }: { featuredArticle: any }) {
  return (
    <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
        
        {/* LEFT: Text Content */}
        <div className="text-center lg:text-left relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.4em] mb-6">
                    Global Intelligence Unit
                </h2>
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#FDFCF0] mb-6 leading-[0.9]">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] to-[#E5D095]">Ledger</span>
                </h1>
                <p className="text-[#FDFCF0]/60 text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                    Defensible analysis across IFRS, M&A Strategy, and Financial Architecture.
                    <span className="text-[#E5D095]/60 text-sm mt-2 block">Read. Analyze. Execute.</span>
                </p>
                
                <div className="hidden lg:flex items-center gap-4 text-[#E5D095]/40 text-xs uppercase tracking-widest">
                   <div className="h-[1px] w-12 bg-[#E5D095]/40"></div>
                   <span>Latest Briefing</span>
                </div>
            </motion.div>
        </div>

        {/* RIGHT: Featured Article Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-xl mx-auto lg:mx-0"
        >
            {featuredArticle && (
                <div className="shadow-2xl shadow-[#E5D095]/5">
                    <FeaturedCard article={featuredArticle} />
                </div>
            )}
        </motion.div>
    </div>
  );
}