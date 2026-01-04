"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Content from Source [11, 12]
const SERVICES = [
  {
    id: "ifrs",
    title: "IFRS Advisory",
    icon: "📊",
    short: "Implementation & Transition",
    details: "Full IFRS conversion, policy development, and complex standard advisory (IFRS 9, 15, 16, 17).",
  },
  {
    id: "arch",
    title: "Financial Architecture",
    icon: "🏛️",
    short: "Modeling & Strategy",
    details: "CFO-level financial modeling, stress testing, multi-year forecasting, and strategic planning.",
  },
  {
    id: "analysis",
    title: "Business Analysis",
    icon: "📈",
    short: "KPIs & Dashboards",
    details: "Tailor-made ratio analysis, Balanced Scorecard implementation, and Power BI dashboards.",
  },
  {
    id: "tax",
    title: "Tax Advisory",
    icon: "⚖️",
    short: "UK & Pakistan",
    details: "Corporate and individual tax planning, compliance, filing, and cross-border advisory.",
  },
  {
    id: "audit",
    title: "Internal Controls",
    icon: "🛡️",
    short: "Audit & Compliance",
    details: "Gap analysis, IT & business process controls, and internal audit framework design.",
  },
];

export default function ServicesOverview() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark">Our Expertise</h2>
          <p className="text-gray-600 mt-2">Comprehensive financial solutions for every stage of growth.</p>
        </div>

        {/* Using 'items-start' prevents the grid from stretching other cards 
           when one expands, which causes that "jittery" layout jump.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              layout // <--- This is the magic prop for smooth resizing
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              transition={{ layout: { duration: 0.3, type: "spring", stiffness: 200, damping: 25 } }}
              className={`rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden
                ${hovered === service.id ? "bg-brand-blue text-white z-10 scale-105" : "bg-white hover:bg-gray-50"}
              `}
            >
              {/* Content Wrapper to ensure text doesn't jump */}
              <motion.div layout="position">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${hovered === service.id ? "text-brand-gold" : "text-brand-dark"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm ${hovered === service.id ? "text-blue-100" : "text-gray-500"}`}>
                  {service.short}
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                {hovered === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 pt-4 border-t border-white/20 text-sm text-blue-50 leading-relaxed">
                      {service.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}