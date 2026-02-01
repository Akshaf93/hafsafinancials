"use client";

import { useState, useMemo, useEffect } from "react";
import { InsightCard } from "@/components/InsightCards";
import { m, AnimatePresence, Variants } from "framer-motion";

const FILTERS = [
  "All",
  "Featured",
  "IFRS Updates",
  "Financial Architect",
  "Business Analysis",
  "Tax Advisory",
  "Internal Audit & Controls",
  "Risk Assessment",
  "Case Studies",
  "AI in Business"
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (i % 6) * 0.05, // Stagger relative to batch
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // Smooth cubic-bezier
    },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function InsightsFeed({ articles }: { articles: any[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredArticles = useMemo(() => articles.filter((a) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return a.fields.isFeatured;
    return a.fields.category?.trim() === activeFilter;
  }), [articles, activeFilter]);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="w-full h-full flex flex-col max-w-7xl mx-auto px-6">
      
      {/* 1. HEADER (Filter Bar) */}
      <div className="py-6 border-b border-[#FDFCF0]/10 z-20 flex-shrink-0 flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all border ${
                activeFilter === filter
                  ? "bg-[#E5D095] text-[#050505] border-[#E5D095]"
                  : filter === "Featured"
                  ? "bg-transparent text-[#E5D095] border-[#E5D095]/50 hover:border-[#E5D095] hover:bg-[#E5D095]/10"
                  : "bg-transparent text-[#FDFCF0]/60 border-transparent hover:border-[#FDFCF0]/20 hover:text-[#E5D095]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT AREA */}
      <div className="flex-grow overflow-y-auto no-scrollbar pt-8 pb-20">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleArticles.length > 0 ? (
              visibleArticles.map((article, index) => (
                <m.div
                  key={article.sys.id}
                  layout
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="h-full backdrop-blur-md bg-[#1a1a1a]/20 rounded-lg overflow-hidden">
                    <InsightCard article={article} />
                  </div>
                </m.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center border border-dashed border-[#FDFCF0]/10 rounded-xl">
                <p className="text-[#FDFCF0]/40 text-lg">No analysis available for {activeFilter}.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 border border-[#E5D095] text-[#E5D095] hover:bg-[#E5D095] hover:text-[#050505] text-xs font-bold uppercase tracking-widest rounded transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}