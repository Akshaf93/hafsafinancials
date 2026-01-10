"use client";

import Link from "next/link";
import { m } from "framer-motion";

// --- 1. FEATURED TEXT CARD (The "Headline") ---
// No images. Just big, bold Serif typography.
export function FeaturedCard({ article }: { article: any }) {
  const { title, slug, date, excerpt, category } = article.fields;

  return (
    <Link href={`/insights/${slug}`} className="group relative w-full flex flex-col bg-[#1a1a1a] border border-[#FDFCF0]/10 p-5 md:p-8 hover:border-[#E5D095]/50 transition-all duration-500 max-h-[500px] overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E5D095] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between mb-6">
         <span className="px-3 py-1 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-sm inline-block">
            Featured Analysis
         </span>
         <span className="text-[#FDFCF0]/40 text-xs font-mono tracking-wide">
            {new Date(date).toDateString()}
         </span>
      </div>

      <h2 className="text-xl md:text-3xl font-serif text-[#FDFCF0] mb-4 leading-tight group-hover:text-[#E5D095] transition-colors max-w-4xl line-clamp-2">
        {title}
      </h2>
      
      <p className="text-[#FDFCF0]/70 text-sm md:text-base font-light leading-relaxed max-w-3xl mb-6 border-l-2 border-[#E5D095]/20 pl-4 line-clamp-3">
        {excerpt}
      </p>

      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5D095] mt-auto">
         Read Full Briefing <span>→</span>
      </div>
    </Link>
  );
}

// --- 2. STANDARD FEED CARD (The "Brief") ---
// Compact, border-based, high density.
export function InsightCard({ article }: { article: any }) {
  const { title, slug, date, category, excerpt, isFeatured } = article.fields;

  return (
    <Link href={`/insights/${slug}`} className="block group h-full">
      <m.div 
        whileHover={{ y: -5 }}
        className="h-full bg-[#1a1a1a]/40 border border-[#FDFCF0]/10 p-8 hover:border-[#E5D095]/50 hover:bg-[#1a1a1a] transition-all flex flex-col relative overflow-hidden"
      >
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#E5D095]/5 to-transparent -mr-8 -mt-8 rounded-full blur-xl group-hover:opacity-100 transition-opacity opacity-0" />

        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-wrap gap-2">
            {isFeatured && (
              <span className="text-[10px] font-bold bg-[#E5D095] text-[#050505] uppercase tracking-widest px-2 py-1 rounded">
                Featured
              </span>
            )}
            <span className="text-[10px] font-bold text-[#E5D095] uppercase tracking-widest border border-[#E5D095]/20 px-2 py-1 rounded">
              {category}
            </span>
          </div>
          <span className="text-[10px] text-[#FDFCF0]/30 font-mono">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>

        <h3 className="text-xl font-serif text-[#FDFCF0] mb-4 leading-snug group-hover:text-[#E5D095] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#FDFCF0]/60 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-light">
          {excerpt}
        </p>

        <div className="pt-6 border-t border-[#FDFCF0]/5 mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#FDFCF0]/40 group-hover:text-[#FDFCF0] transition-colors">
           Read Analysis
        </div>
      </m.div>
    </Link>
  );
}