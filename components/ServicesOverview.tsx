"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Service Data sourced directly from HAFSA FINANCIALS.pdf (Pages 2-3)
export const SERVICE_TABS = [
  {
    id: "ifrs",
    label: "IFRS Advisory",
    headline: "Transition, Compliance & Technical Advisory.",
    // Source: PDF Page 2 (Service 1)
    content: "Full IFRS implementation and transition support. Specialized advisory for complex standards including IFRS 9 (Financial Instruments), IFRS 15 (Revenue), IFRS 16 (Leases), and IFRS 17 (Insurance). Includes accounting policy development and financial risk assessment.",
    tags: ["IFRS 9, 15, 16 & 17", "Policy Development", "Gap Analysis"]
  },
  {
    id: "arch",
    label: "Financial Architect",
    headline: "CFO-Level Modeling & Strategic Planning.",
    // Source: PDF Page 3 (Service 4)
    content: "Advanced 3-statement financial modeling, stress testing, and multi-year forecasting. We provide strategic financial planning, PPE asset schedules, and scenario analysis to guide capital allocation and growth.",
    tags: ["3-Statement Models", "Stress Testing", "Valuation"]
  },
  {
    id: "analysis",
    label: "Business Analysis",
    headline: "Turning Data into Strategic Insight.",
    // Source: PDF Page 2 (Service 2)
    content: "Tailor-made ratio analysis with commentary and Balanced Scorecard implementation. We build interactive KPI Dashboards (Power BI enabled) to track performance and drive strategy optimization.",
    tags: ["Power BI Dashboards", "Balanced Scorecard", "Ratio Analysis"]
  },
  {
    id: "tax",
    label: "Tax Advisory",
    headline: "Cross-Border Compliance (UK & Pakistan).",
    // Source: PDF Page 2 (Service 3)
    content: "Comprehensive corporate and individual tax planning. Services include filing, compliance, and cross-border tax structuring for businesses operating in the UK, Pakistan, and international jurisdictions.",
    tags: ["UK Corp Tax", "Pakistan Filings", "Cross-Border"]
  },
  {
    id: "controls",
    label: "Internal Controls",
    headline: "Governance, Risk & Compliance Frameworks.",
    // Source: PDF Page 3 (Service 5)
    content: "Internal control assessment and gap analysis. We design IT & business process controls, internal audit frameworks, and custom implementations for application and physical security.",
    tags: ["Gap Analysis", "IT Controls", "Process Audit"]
  }
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState("ifrs");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-24">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0] mb-4">
            Our <span className="text-[#E5D095]">Expertise</span>
          </h2>
         
        </div>
        <Link 
          href="/services" 
          className="hidden md:block text-[#E5D095] text-xs font-bold uppercase tracking-widest hover:text-[#FDFCF0] transition-colors border-b border-[#E5D095] pb-1 mt-2"
        >
          View All Services →
        </Link>
      </div>

      {/* COMPACT TAB NAVIGATION */}
      <div className="flex flex-wrap gap-3 mb-6 border-b border-[#FDFCF0]/10 pb-4">
        {SERVICE_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all ${
              activeTab === tab.id
                ? "bg-[#E5D095] text-[#050505] shadow-[0_0_15px_rgba(229,208,149,0.4)]"
                : "bg-[#1a1a1a] text-[#FDFCF0]/60 hover:text-[#E5D095] hover:bg-[#FDFCF0]/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ACTIVE TAB CONTENT AREA */}
      <div className="relative bg-[#0a0a0a] border border-[#E5D095]/20 rounded-xl p-6 md:p-10 min-h-[350px] shadow-2xl flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {SERVICE_TABS.map((tab) => activeTab === tab.id && (
            <m.div
              key={tab.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <h3 className="text-2xl md:text-4xl font-serif font-medium text-[#FDFCF0] mb-6">
                  {tab.headline}
                </h3>
                <p className="text-[#FDFCF0]/70 text-lg leading-relaxed max-w-4xl mb-8">
                  {tab.content}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-6 border-t border-[#FDFCF0]/10">
                <div className="flex flex-wrap gap-2">
                  {tab.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-[#E5D095]/10 text-[#E5D095] text-[10px] font-bold uppercase tracking-wide rounded border border-[#E5D095]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FDFCF0] hover:text-[#E5D095] transition-colors group"
                >
                  Book Consultation 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}