"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const SERVICES = [
  { 
    id: "ifrs", 
    title: "IFRS Advisory", 
    icon: "📊", 
    short: "Implementation & Transition", 
    details: "Full IFRS conversion, policy alignment, and complex standard advisory (IFRS 9, 15, 16, 17)." 
  },
  { 
    id: "arch", 
    title: "Financial Architect", 
    icon: "🏛️", 
    short: "Modeling & Strategy", 
    details: "CFO-level 3-statement modeling, valuation (DCF), stress testing, and strategic planning." 
  },
  { 
    id: "risk", 
    title: "Risk & Controls", 
    icon: "🛡️", 
    short: "Audit & Compliance", 
    details: "Internal audit frameworks, gap analysis, cyber-risk assessment, and ICFR." 
  },
  { 
    id: "analysis", 
    title: "Business Analysis", 
    icon: "📈", 
    short: "KPIs & Dashboards", 
    details: "Power BI dashboards, balanced scorecards, and performance optimization strategies." 
  },
  { 
    id: "tax", 
    title: "Tax Advisory", 
    icon: "⚖️", 
    short: "UK, UAE & Pakistan", 
    details: "Cross-border tax structuring, corporate filing, and compliance optimization." 
  },
];

export default function ServicesOverview() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-20">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#FDFCF0] mb-4">
            Financial <span className="text-[#D4AF37]">Mastery</span>
          </h2>
          <p className="text-[#FDFCF0]/60 text-lg font-light leading-relaxed">
            We don’t just report numbers; we architect them. From complex IFRS transitions to board-level strategic modeling.
          </p>
        </div>
        <Link 
          href="/services" 
          className="group flex items-center gap-2 text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-all"
        >
          <span className="text-sm font-bold uppercase tracking-wider">View Full Scope</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {SERVICES.map((service, index) => {
          // Span logic: First 2 items span 3 cols (half width), others span 2 cols (third width)
          const spanClass = index < 2 ? "md:col-span-3" : "md:col-span-2";
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className={`${spanClass} group relative p-8 rounded-2xl border border-[#FDFCF0]/10 bg-[#0a0a0a] overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500`}
            >
              {/* Hover Gradient Effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-[#FDFCF0]/5 border border-[#FDFCF0]/10 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">↗</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-[#FDFCF0] mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#FDFCF0]/50 text-xs font-bold tracking-widest uppercase mb-3">
                    {service.short}
                  </p>
                  <p className="text-[#FDFCF0]/60 text-sm leading-relaxed max-w-[90%]">
                    {service.details}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}