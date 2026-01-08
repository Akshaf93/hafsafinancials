"use client";

import { useState } from "react";
import { InsightCard, FeaturedCard } from "@/components/InsightCards";
import { motion, AnimatePresence } from "framer-motion";

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

  // Safety checks
  const featuredArticle = articles && articles.length > 0 ? articles[0] : null;
  const remainingArticles = articles && articles.length > 1 ? articles.slice(1) : [];

  const filteredArticles = activeFilter === "All" 
    ? remainingArticles 
    : remainingArticles.filter((a) => a.fields.category === activeFilter);

  return (
    <div className="w-full h-full flex flex-col max-w-7xl mx-auto px-6">
      
      {/* 1. STICKY HEADER (Filter Bar) */}
      <div className="py-6 border-b border-[#FDFCF0]/10 bg-[#050505] z-20 flex-shrink-0">
        <div className="flex overflow-x-auto no-scrollbar gap-3 md:justify-center">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all border ${
                activeFilter === filter
                  ? "bg-[#E5D095] text-[#050505] border-[#E5D095]"
                  : "bg-transparent text-[#FDFCF0]/60 border-transparent hover:border-[#FDFCF0]/20 hover:text-[#E5D095]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT AREA */}
      <div className="flex-grow overflow-y-auto no-scrollbar pb-20 pt-8">
        
        {/* Featured (Only show if 'All' is selected to keep it clean) */}
        {activeFilter === "All" && featuredArticle && (
           <div className="mb-12">
              <FeaturedCard article={featuredArticle} />
           </div>
        )}

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
                  <InsightCard article={article} />
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