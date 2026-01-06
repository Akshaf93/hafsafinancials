"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const SERVICES = [
  { id: "ifrs", title: "IFRS Advisory", icon: "📊", short: "Implementation", details: "IFRS 9, 15, 16 & 17 Advisory." },
  { id: "arch", title: "Financial Architect", icon: "🏛️", short: "Modeling", details: "3-Statement models & Valuation." },
  { id: "risk", title: "Risk & Controls", icon: "🛡️", short: "Compliance", details: "Internal Audit & Cyber Risk." },
  { id: "analysis", title: "Business Analysis", icon: "📈", short: "KPIs", details: "Power BI & Strategy Dashboards." },
  { id: "tax", title: "Tax Advisory", icon: "⚖️", short: "Cross-Border", details: "UK, UAE & Pakistan Tax Filing." },
];

export default function ServicesOverview() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    // Compact Padding: pt-32 (for navbar) but tight pb-10
    <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-10">
      
      {/* Header - Compact */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-serif font-medium text-[#FDFCF0]">
            Financial <span className="text-[#D4AF37]">Mastery</span>
          </h2>
        </div>
        <Link href="/services" className="text-[#D4AF37] text-xs font-bold uppercase hover:underline">
          View All →
        </Link>
      </div>

      {/* Grid - Reduced Gap and Height */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {SERVICES.map((service, index) => {
          const spanClass = index < 2 ? "md:col-span-3" : "md:col-span-2";
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              // COMPACT STYLING: p-5 (was p-8), min-h-[140px] (was 180)
              className={`${spanClass} group relative p-5 rounded-xl border border-[#FDFCF0]/10 bg-[#0a0a0a] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between min-h-[140px]`}
            >
              <div className="flex justify-between items-start">
                <div className="text-xl opacity-80">{service.icon}</div>
                {hovered === service.id && <span className="text-[#D4AF37] text-sm">↗</span>}
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#FDFCF0] group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#FDFCF0]/50 text-[10px] font-bold tracking-widest uppercase mb-1">
                  {service.short}
                </p>
                <p className="text-[#FDFCF0]/60 text-xs leading-snug">
                  {service.details}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}