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
    <>
      {/* SECTION: HERO / TITLE */}
      <section className="h-screen w-full flex flex-col justify-center px-6 snap-start snap-always border-b border-[#FDFCF0]/10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0]">
              Service <span className="text-[#E5D095]">Offerings</span>
            </h2>
            <p className="text-[#FDFCF0]/60 mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              From technical IFRS compliance to strategic financial architecture, we provide the clarity needed for high-stakes decision making.
            </p>
            <div className="mt-8 flex gap-4 text-sm font-bold text-[#E5D095] uppercase tracking-widest">
                <span>↓ Scroll to Explore</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS: INDIVIDUAL SERVICES */}
      {DETAILED_SERVICES.map((service, index) => (
        <section 
          key={service.id} 
          className="h-screen w-full flex items-center justify-center px-6 snap-start snap-always border-b border-[#FDFCF0]/10"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-12 gap-8 md:gap-16 items-center"
            >
              
              {/* LEFT: Identity */}
              <div className="md:col-span-5 lg:col-span-4">
                <span className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                  {service.label}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif text-[#FDFCF0] leading-tight">
                  {service.headline}
                </h3>
              </div>

              {/* RIGHT: Content */}
              <div className="md:col-span-7 lg:col-span-8 bg-[#1a1a1a]/50 p-8 rounded-2xl border border-[#FDFCF0]/5 hover:border-[#E5D095]/30 transition-colors">
                <p className="text-[#FDFCF0]/70 text-base md:text-lg font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {service.offerings.map((offering) => (
                    <div key={offering} className="flex items-center gap-3 text-sm text-[#FDFCF0]/60">
                      <span className="w-1.5 h-1.5 bg-[#E5D095] rounded-full" />
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

            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}