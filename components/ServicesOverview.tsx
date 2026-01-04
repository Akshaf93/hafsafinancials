"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark">Our Expertise</h2>
          <p className="text-gray-600 mt-2">Comprehensive financial solutions for every stage of growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              layout
              onClick={() => setSelected(selected === service.id ? null : service.id)}
              className={`cursor-pointer rounded-xl p-6 transition-colors shadow-lg border border-gray-100
                ${selected === service.id ? "bg-brand-blue text-white" : "bg-white hover:bg-gray-50"}
              `}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${selected === service.id ? "text-brand-gold" : "text-brand-dark"}`}>
                {service.title}
              </h3>
              <p className={`text-sm ${selected === service.id ? "text-blue-100" : "text-gray-500"}`}>
                {service.short}
              </p>

              <AnimatePresence>
                {selected === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/20 text-sm text-blue-50 leading-relaxed"
                  >
                    {service.details}
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