"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "IFRS Updates", "Case Studies", "Tax Strategy", "Business Analysis"];

const RESOURCES = [
  {
    id: 1,
    category: "IFRS Updates",
    title: "Navigating IFRS 17: A Guide for Insurers",
    date: "Oct 12, 2025",
    summary: "A deep dive into the complexities of insurance contracts and how to prepare your balance sheet for the transition."
  },
  {
    id: 2,
    category: "Case Studies",
    title: "Optimizing Working Capital for Manufacturing",
    date: "Sep 28, 2025",
    summary: "How we helped a mid-sized manufacturer unlock $2M in liquidity through rigorous cycle analysis."
  },
  {
    id: 3,
    category: "Tax Strategy",
    title: "UK Corporate Tax: New Rates Explained",
    date: "Sep 15, 2025",
    summary: "Understanding the impact of the latest rate changes on cross-border entities operating in the UK and Pakistan."
  },
  {
    id: 4,
    category: "Business Analysis",
    title: "The Power of the Balanced Scorecard",
    date: "Aug 30, 2025",
    summary: "Moving beyond financial KPIs: How to measure what actually matters for long-term strategic growth."
  },
  {
    id: 5,
    category: "IFRS Updates",
    title: "IFRS 9 & ECL: Modeling for Volatility",
    date: "Aug 10, 2025",
    summary: "Best practices for Expected Credit Loss modeling in uncertain economic environments."
  }
];

export default function ResourcesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = activeCategory === "All" 
    ? RESOURCES 
    : RESOURCES.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER & FILTER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h3 className="text-2xl font-serif text-[#FDFCF0]">Latest <span className="text-[#E5D095]">Publications</span></h3>
        
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-wider border transition-all ${
                activeCategory === cat
                  ? 'bg-[#E5D095] border-[#E5D095] text-[#050505]'
                  : 'bg-transparent border-[#FDFCF0]/10 text-[#FDFCF0]/60 hover:border-[#E5D095]/50 hover:text-[#E5D095]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group bg-[#1a1a1a] border border-[#FDFCF0]/10 rounded-xl p-6 hover:border-[#E5D095]/30 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#E5D095] text-[10px] font-bold uppercase tracking-widest border border-[#E5D095]/20 px-2 py-1 rounded">
                {item.category}
              </span>
              <span className="text-[#FDFCF0]/30 text-xs font-mono">{item.date}</span>
            </div>
            
            <h4 className="text-xl font-bold text-[#FDFCF0] mb-3 group-hover:text-[#E5D095] transition-colors leading-tight">
              {item.title}
            </h4>
            
            <p className="text-[#FDFCF0]/60 text-sm leading-relaxed mb-6">
              {item.summary}
            </p>

            <div className="flex items-center gap-2 text-[#E5D095] text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
              Read Article <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}