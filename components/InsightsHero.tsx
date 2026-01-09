 "use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeaturedCard } from "@/components/InsightCards";

export default function InsightsHero({ featuredArticles }: { featuredArticles: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Ensure we have an array
  const articles = Array.isArray(featuredArticles) ? featuredArticles : [];
  const currentArticle = articles[currentIndex];

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (articles.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [articles.length, isPaused]);

  return (
    <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
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
            </motion.div>
        </div>

        {/* RIGHT: Featured Article Carousel */}
        <div 
            className="w-full max-w-md mx-auto lg:mx-0 relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Arrows */}
            {articles.length > 1 && (
                <>
                    <button 
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)}
                        className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 text-[#E5D095] hover:text-[#FDFCF0] transition-colors bg-[#050505]/50 lg:bg-transparent rounded-full lg:rounded-none opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Previous Slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button 
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % articles.length)}
                        className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 text-[#E5D095] hover:text-[#FDFCF0] transition-colors bg-[#050505]/50 lg:bg-transparent rounded-full lg:rounded-none opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Next Slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </>
            )}

            <AnimatePresence mode="wait">
                {currentArticle && (
                    <motion.div 
                        key={currentArticle.sys.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="shadow-2xl shadow-[#E5D095]/5"
                    >
                        <FeaturedCard article={currentArticle} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Indicators */}
            {articles.length > 1 && (
                <div className="flex justify-center gap-3 mt-8">
                    {articles.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                idx === currentIndex 
                                    ? "w-8 bg-[#E5D095]" 
                                    : "w-2 bg-[#FDFCF0]/20 hover:bg-[#FDFCF0]/40"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    </div>
  );
}