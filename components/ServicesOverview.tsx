"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  { id: "ifrs", title: "IFRS Advisory", icon: "📊", short: "Implementation & Transition", details: "Full IFRS conversion and complex standard advisory." },
  { id: "arch", title: "Financial Architect", icon: "🏛️", short: "Modeling & Strategy", details: "CFO-level modeling, stress testing, and planning." },
  { id: "analysis", title: "Business Analysis", icon: "📈", short: "KPIs & Dashboards", details: "Ratio analysis, Balanced Scorecards, and Power BI." },
  { id: "tax", title: "Tax Advisory", icon: "⚖️", short: "UK & Pakistan", details: "Corporate tax planning and cross-border filing." },
  { id: "audit", title: "Internal Controls", icon: "🛡️", short: "Audit & Compliance", details: "Gap analysis and internal audit frameworks." },
];

export default function ServicesOverview() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    // Removed bg color, using h-full to fill the snap section
    <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#FDFCF0]">Our Expertise</h2>
        <p className="text-[#FDFCF0]/50 mt-2 text-lg">Comprehensive financial solutions for every stage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            layout
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-xl p-6 border relative overflow-hidden cursor-pointer transition-colors duration-300
              ${hovered === service.id 
                ? "bg-[#E5D095] border-[#E5D095] shadow-[0_0_30px_rgba(229,208,149,0.4)] z-10" 
                : "bg-[#FDFCF0]/5 border-[#FDFCF0]/10 hover:bg-[#FDFCF0]/10"
              }
            `}
          >
            <motion.div layout="position">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${hovered === service.id ? "text-[#050505]" : "text-[#FDFCF0]"}`}>
                {service.title}
              </h3>
              <p className={`text-xs ${hovered === service.id ? "text-[#050505]/80" : "text-[#FDFCF0]/60"}`}>
                {service.short}
              </p>
            </motion.div>

            <AnimatePresence>
              {hovered === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 pt-4 border-t border-[#050505]/20 text-xs text-[#050505] leading-relaxed font-medium">
                    {service.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}