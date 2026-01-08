"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// --- 1. FEATURED HERO CARD (McKinsey Style) ---
// Large, impactful, sits at the top.
export function FeaturedCard({ article }: { article: any }) {
  const { title, slug, date, excerpt, category, coverImage } = article.fields;

  return (
    <Link href={`/insights/${slug}`} className="group relative w-full block h-[500px] rounded-2xl overflow-hidden border border-[#FDFCF0]/10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#050505]">
        {coverImage ? (
           <img 
             src={'https:' + coverImage.fields.file.url} 
             alt={title} 
             className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
           />
        ) : (
           <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#050505]" />
        )}
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl">
        <span className="px-3 py-1 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-sm mb-4 inline-block">
          Featured Analysis
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#FDFCF0] mb-4 leading-tight group-hover:text-[#E5D095] transition-colors">
          {title}
        </h2>
        <p className="text-[#FDFCF0]/80 text-lg line-clamp-2 max-w-2xl font-light mb-6">
          {excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#FDFCF0]/60">
           <span className="text-[#E5D095]">{category}</span>
           <span>•</span>
           <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}

// --- 2. STANDARD INTELLIGENCE CARD (J.P. Morgan Style) ---
// Clean, data-rich, fits in a grid.
export function InsightCard({ article }: { article: any }) {
  const { title, slug, date, category, excerpt } = article.fields;

  // Dynamic Color accent based on category logic could go here if desired
  
  return (
    <Link href={`/insights/${slug}`} className="block group h-full">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-full bg-[#1a1a1a]/40 border border-[#FDFCF0]/10 p-6 rounded-xl hover:border-[#E5D095]/50 hover:bg-[#1a1a1a] transition-all flex flex-col"
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold text-[#E5D095] uppercase tracking-widest border border-[#E5D095]/20 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-[10px] text-[#FDFCF0]/40 font-mono">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>

        <h3 className="text-xl font-serif text-[#FDFCF0] mb-3 leading-snug group-hover:text-[#E5D095] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#FDFCF0]/60 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-light">
          {excerpt}
        </p>

        <div className="pt-4 border-t border-[#FDFCF0]/10 mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FDFCF0]/40 group-hover:text-[#FDFCF0] transition-colors">
           Read Article <span className="text-[#E5D095]">→</span>
        </div>
      </motion.div>
    </Link>
  );
}