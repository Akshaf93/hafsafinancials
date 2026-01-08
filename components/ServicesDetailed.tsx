"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DETAILED_SERVICES = [
  {
    id: "ifrs",
    label: "01 / IFRS Advisory",
    headline: "Technical Compliance & Transition",
    description: "We provide specialized advisory for complex standards (IFRS 9, 15, 16 & 17), ensuring your financial statements withstand regulatory scrutiny.",
    offerings: [
      "Accounting Policy Development",
      "Financial Statement Preparation",
      "Gap Analysis & Transition Support",
      "ECL Modeling & Impairment"
    ]
  },
  {
    id: "arch",
    label: "02 / Financial Architect",
    headline: "CFO-Level Modeling & Strategy",
    description: "Advanced 3-statement modeling and stress testing to guide capital allocation. We turn static data into dynamic, multi-year forecasting tools.",
    offerings: [
      "3-Statement Financial Modeling",
      "Stress Testing & Scenario Analysis",
      "PPE & Asset Schedules",
      "Strategic Financial Planning"
    ]
  },
  {
    id: "analysis",
    label: "03 / Business Analysis",
    headline: "Strategic Insight & Visualization",
    description: "Moving beyond basic reporting. We implement Balanced Scorecards and interactive Power BI dashboards to track real-time performance.",
    offerings: [
      "Ratio Analysis with Commentary",
      "Balanced Scorecard Implementation",
      "KPI Dashboards (Power BI)",
      "Margin Trend Analysis"
    ]
  },
  {
    id: "tax",
    label: "04 / Tax Advisory",
    headline: "Cross-Border Optimization",
    description: "Comprehensive tax planning for entities operating in the UK and Pakistan, ensuring efficiency and full compliance across jurisdictions.",
    offerings: [
      "Corporate & Individual Tax Planning",
      "Cross-Border Structuring",
      "Tax Optimization Strategies",
      "Compliance & Filing"
    ]
  },
  {
    id: "controls",
    label: "05 / Internal Controls",
    headline: "Governance & Risk Mitigation",
    description: "Designing robust internal control frameworks to protect assets and ensure the integrity of financial reporting systems.",
    offerings: [
      "Internal Control Gap Analysis",
      "IT & Business Process Controls",
      "Internal Audit Framework",
      "SOP Design & Implementation"
    ]
  }
];

export default function ServicesDetailed() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      
      {/* SECTION HEADER */}
      <div className="mb-20 pb-8 border-b border-[#FDFCF0]/10">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0]">
          Service <span className="text-[#E5D095]">offerings</span>
        </h2>
        <p className="text-[#FDFCF0]/60 mt-4 max-w-2xl text-lg font-light">
          From technical IFRS compliance to strategic financial architecture, we provide the clarity needed for high-stakes decision making.
        </p>
      </div>

      {/* SERVICE INDEX LIST */}
      <div className="flex flex-col">
        {DETAILED_SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group py-12 border-b border-[#FDFCF0]/10 hover:border-[#E5D095]/30 transition-colors"
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              
              {/* LEFT: Identity */}
              <div className="md:col-span-5 lg:col-span-4">
                <span className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                  {service.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] group-hover:text-white transition-colors leading-tight">
                  {service.headline}
                </h3>
              </div>

              {/* RIGHT: Content */}
              <div className="md:col-span-7 lg:col-span-8">
                <p className="text-[#FDFCF0]/70 text-base md:text-lg font-light leading-relaxed mb-8 max-w-3xl">
                  {service.description}
                </p>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
                  {service.offerings.map((offering) => (
                    <div key={offering} className="flex items-center gap-3 text-sm text-[#FDFCF0]/50 group-hover:text-[#FDFCF0]/80 transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#E5D095] rounded-full opacity-60" />
                      {offering}
                    </div>
                  ))}
                </div>

                {/* Action */}
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E5D095] uppercase tracking-widest hover:text-[#FDFCF0] transition-colors"
                >
                  Discuss Requirement <span className="text-lg leading-none mb-[2px]">→</span>
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}