"use client";

import { useState } from "react";
import { InsightCard, FeaturedCard } from "@/components/InsightCards";
import { motion, AnimatePresence } from "framer-motion";

// The 5 Official Categories
const FILTERS = [
  "All",
  "IFRS & Financial Reporting",
  "Financial Architect",
  "Business Analysis",
  "Tax Advisory",
  "Internal Controls"
];

export default function InsightsFeed({ articles }: { articles: any[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // 1. Separate the Featured Article (Most Recent)
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  // 2. Filter Logic
  const filteredArticles = activeFilter === "All" 
    ? remainingArticles 
    : remainingArticles.filter((a) => a.fields.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* FEATURED SECTION (Always Visible) */}
      <div className="mb-20">
         <FeaturedCard article={featuredArticle} />
      </div>

      {/* FILTER BAR (J.P. Morgan Dashboard Style) */}
      <div className="sticky top-24 z-30 bg-[#050505]/90 backdrop-blur-md py-4 mb-12 border-y border-[#FDFCF0]/10 flex overflow-x-auto no-scrollbar gap-2 md:justify-center">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
              activeFilter === filter
                ? "bg-[#E5D095] text-[#050505]"
                : "text-[#FDFCF0]/60 hover:text-[#E5D095] hover:bg-[#FDFCF0]/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* DYNAMIC GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <motion.div
                key={article.sys.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <InsightCard article={article} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-[#FDFCF0]/10 rounded-xl">
              <p className="text-[#FDFCF0]/40 text-lg">No analysis available for {activeFilter} yet.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}