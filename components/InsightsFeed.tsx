"use client";

import { useState, useMemo } from "react";
import { InsightCard } from "@/components/InsightCards";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = [
  "All",
  "Featured",
  "IFRS Updates",
  "Financial Architect",
  "Business Analysis",
  "Tax Advisory",
  "Case Studies",
  "AI in Business"
];

export default function InsightsFeed({ articles }: { articles: any[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArticles = useMemo(() => articles.filter((a) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return a.fields.isFeatured;
    return a.fields.category?.trim() === activeFilter;
  }), [articles, activeFilter]);

  return (
    <div className="w-full h-full flex flex-col max-w-7xl mx-auto px-6">
      
      {/* 1. HEADER (Filter Bar) */}
      <div className="py-6 border-b border-[#FDFCF0]/10 z-20 flex-shrink-0 flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all border ${
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
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <motion.div
                  key={article.sys.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full backdrop-blur-md bg-[#1a1a1a]/20 rounded-lg overflow-hidden">
                    <InsightCard article={article} />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center border border-dashed border-[#FDFCF0]/10 rounded-xl">
                <p className="text-[#FDFCF0]/40 text-lg">No analysis available for {activeFilter}.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
    </div>
  );
}