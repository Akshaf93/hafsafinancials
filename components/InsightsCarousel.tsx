"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FeaturedCard } from "@/components/InsightCards";

export default function InsightsCarousel({ articles }: { articles: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentArticle = articles[currentIndex];

  useEffect(() => {
    // Optimization: Don't set intervals if there is only 1 article
    if (articles.length <= 1 || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [articles.length, isPaused]);

  if (!currentArticle) return null;

  return (
    <div 
        className="w-full max-w-lg mx-auto relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
        {/* Navigation Arrows (Only if multiple) */}
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

        {/* LCP FIX: 'initial={false}' tells Framer Motion to 
            render the component in its 'animate' state on the server.
            This ensures the card is visible IMMEDIATELY on page load.
        */}
        <AnimatePresence mode="wait" initial={false}>
            <m.div 
                key={currentArticle.sys.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="shadow-2xl shadow-[#E5D095]/5"
            >
                {/* We assume FeaturedCard contains an Image. 
                   Since this is the Hero, that image should likely have 'priority={true}'
                   inside the FeaturedCard component if possible, or we trust Next.js
                */}
                <FeaturedCard article={currentArticle} />
            </m.div>
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
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        )}
    </div>
  );
}