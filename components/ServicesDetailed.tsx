"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Detailed Data Source sourced from HAFSA FINANCIALS.pdf (Pages 2-3)
const DETAILED_SERVICES = [
  {
    id: "ifrs",
    label: "IFRS Advisory",
    headline: "Transition, Compliance & Technical Advisory",
    description: "Full IFRS implementation and transition support for enterprises. We provide specialized advisory for complex standards and ongoing accounting policy development.",
    offerings: [
      "IFRS 9, 15, 16 & 17 Advisory",
      "Accounting Policy Development",
      "Financial Statement Preparation",
      "Gap Analysis & Transition Support"
    ],
    tags: ["IFRS 17 Insurance", "ECL Modeling", "Lease Accounting"]
  },
  {
    id: "arch",
    label: "Financial Architect",
    headline: "CFO-Level Modeling & Strategic Planning",
    description: "Advanced 3-statement financial modeling and stress testing. We guide capital allocation through multi-year forecasting and scenario analysis.",
    offerings: [
      "3-Statement Financial Modeling",
      "Stress Testing & Scenario Analysis",
      "PPE & Asset Schedules",
      "Strategic Financial Planning"
    ],
    tags: ["Valuation", "M&A Modeling", "Capex Planning"]
  },
  {
    id: "analysis",
    label: "Business Analysis",
    headline: "Turning Data into Strategic Insight",
    description: "Tailor-made ratio analysis and Balanced Scorecard implementation. We build interactive KPI dashboards to track performance and drive optimization.",
    offerings: [
      "Ratio Analysis with Commentary",
      "Balanced Scorecard Implementation",
      "KPI Dashboards (Power BI)",
      "Strategy Consulting"
    ],
    tags: ["Power BI", "Margin Trends", "Growth Strategy"]
  },
  {
    id: "tax",
    label: "Tax Advisory",
    headline: "Cross-Border Compliance (UK & Pakistan)",
    description: "Comprehensive corporate and individual tax planning. We handle filing, compliance, and cross-border tax structuring for international businesses.",
    offerings: [
      "Corporate & Individual Tax Planning",
      "Cross-Border Tax Advisory",
      "Tax Optimization Strategies",
      "Compliance & Filing"
    ],
    tags: ["UK Corp Tax", "Pakistan Filing", "International Tax"]
  },
  {
    id: "controls",
    label: "Internal Controls",
    headline: "Governance, Risk & Compliance",
    description: "Internal control assessment and gap analysis. We design IT and business process controls, internal audit frameworks, and security implementations.",
    offerings: [
      "Internal Control Gap Analysis",
      "IT & Business Process Controls",
      "Internal Audit Framework",
      "Custom Control Implementation"
    ],
    tags: ["SOP Design", "IT Audit", "Risk Matrix"]
  }
];

export default function ServicesDetailed() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-0 pb-24">
      {/* Header for the detailed section */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0]">
          Comprehensive <span className="text-[#E5D095]">Service Suite</span>
        </h2>
        <p className="text-[#FDFCF0]/60 mt-2 max-w-2xl">
          From technical IFRS compliance to strategic financial architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DETAILED_SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#1a1a1a] border border-[#FDFCF0]/10 rounded-xl p-6 hover:border-[#E5D095]/50 transition-colors flex flex-col h-full min-h-[320px]"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5D095]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-[#E5D095] text-xs font-bold uppercase tracking-widest mb-2">
                  {service.label}
                </h3>
                <h2 className="text-xl md:text-2xl font-serif text-[#FDFCF0] group-hover:text-white transition-colors">
                  {service.headline}
                </h2>
              </div>

              {/* Description */}
              <p className="text-[#FDFCF0]/70 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Bullet Points (Offerings) */}
              <ul className="space-y-2 mb-6 flex-grow">
                {service.offerings.map((offering) => (
                  <li key={offering} className="flex items-start gap-2 text-xs md:text-sm text-[#FDFCF0]/60">
                    <span className="text-[#E5D095] mt-1">▹</span>
                    {offering}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-[#FDFCF0]/10">
                {service.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-[#050505] text-[#FDFCF0]/50 text-[10px] uppercase tracking-wider rounded border border-[#FDFCF0]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E5D095] hover:tracking-wide transition-all"
                >
                  Request Consultation <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}