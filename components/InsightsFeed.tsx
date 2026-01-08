"use client";

import { useState } from "react";
import { InsightCard } from "@/components/InsightCards";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = [
  "All",
  "IFRS Updates",
  "Financial Architect",
  "Business Analysis",
  "Tax Advisory",
  "Internal Controls"
];

export default function InsightsFeed({ articles }: { articles: any[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArticles = activeFilter === "All" 
    ? articles 
    : articles.filter((a) => a.fields.category === activeFilter);

  return (
    <div className="w-full h-full flex flex-col max-w-7xl mx-auto px-6">
      
      {/* 1. HEADER (Filter Bar) */}
      <div className="py-6 border-b border-[#FDFCF0]/10 z-20 flex-shrink-0 flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-[#FDFCF0] font-serif text-xl">Recent Analysis</h3>
        <div className="flex overflow-x-auto no-scrollbar gap-3 w-full md:w-auto">
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