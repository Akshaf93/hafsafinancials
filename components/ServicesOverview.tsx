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
    content: "Full IFRS implementation and transition support. Specialized advisory for complex standards including IFRS 9 (Financial Instruments), IFRS 15 (Revenue), IFRS 16 (Leases), and IFRS 17 (Insurance). Includes accounting policy development and financial risk assessment.",
    tags: ["IFRS 9, 15, 16 & 17", "Policy Development", "Gap Analysis"]
  },
  {
    id: "arch",
    label: "Financial Architect",
    headline: "CFO-Level Modeling & Strategic Planning.",
    content: "Advanced 3-statement financial modeling, stress testing, and multi-year forecasting. We provide strategic financial planning, PPE asset schedules, and scenario analysis to guide capital allocation and growth.",
    tags: ["3-Statement Models", "Stress Testing", "Valuation"]
  },
  {
    id: "analysis",
    label: "Business Analysis",
    headline: "Turning Data into Strategic Insight.",
    content: "Tailor-made ratio analysis with commentary and Balanced Scorecard implementation. We build interactive KPI Dashboards (Power BI enabled) to track performance and drive strategy optimization.",
    tags: ["Power BI Dashboards", "Balanced Scorecard", "Ratio Analysis"]
  },
  {
    id: "tax",
    label: "Tax Advisory",
    headline: "Cross-Border Compliance (UK & Pakistan).",
    content: "Comprehensive corporate and individual tax planning. Services include filing, compliance, and cross-border tax structuring for businesses operating in the UK, Pakistan, and international jurisdictions.",
    tags: ["UK Corp Tax", "Pakistan Filings", "Cross-Border"]
  },
  {
    id: "controls",
    label: "Internal Controls",
    headline: "Governance, Risk & Compliance Frameworks.",
    content: "Internal control assessment and gap analysis. We design IT & business process controls, internal audit frameworks, and custom implementations for application and physical security.",
    tags: ["Gap Analysis", "IT Controls", "Process Audit"]
  }
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState("ifrs");

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] flex items-center justify-center overflow-hidden border-t border-[#FDFCF0]/5 home-snap-trigger">
      
      {/* Subtle Right-Side Spotlight */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#E5D095]/10 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full opacity-60" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-6">
          <div className="max-w-2xl">
            {/* Standardized Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-[#E5D095]"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E5D095]">
                Practice Areas
              </span>
            </div>
            
            {/* Standardized H2 (Solid White Serif) */}
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#FDFCF0] leading-tight tracking-tight">
              Our Expertise.
            </h2>
          </div>
          
          {/* Refined Link (Matches the Leadership page LinkedIn button) */}
          <Link 
            href="/services" 
            className="group hidden md:inline-flex items-center gap-2 text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.15em] transition-all"
          >
            <span className="underline underline-offset-4 decoration-[#E5D095]/40 group-hover:decoration-[#E5D095]">View All Services</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* --- EDITORIAL TAB NAVIGATION --- */}
        <div className="flex flex-wrap gap-6 mb-8 border-b border-[#FDFCF0]/10 relative z-10">
          {SERVICE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-[11px] font-semibold uppercase tracking-widest transition-all relative ${
                activeTab === tab.id 
                  ? 'text-[#E5D095]' 
                  : 'text-[#FDFCF0]/50 hover:text-[#FDFCF0]/80'
              }`}
            >
              {tab.label}
              {/* Animated Underline */}
              {activeTab === tab.id && (
                <m.div 
                  layoutId="expertiseTabIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5D095]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* --- ACTIVE TAB CONTENT AREA --- */}
        <div className="relative bg-[#050505]/50 backdrop-blur-sm border border-[#FDFCF0]/10 rounded-sm p-8 md:p-12 min-h-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {SERVICE_TABS.map((tab) => activeTab === tab.id && (
              <m.div
                key={tab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] mb-4">
                    {tab.headline}
                  </h3>
                  <p className="text-[#FDFCF0]/60 text-[13px] md:text-[15px] font-light leading-relaxed max-w-3xl mb-8">
                    {tab.content}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto pt-6 border-t border-[#FDFCF0]/10">
                  
                  {/* Refined Institutional Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tab.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 border border-[#FDFCF0]/15 text-[#FDFCF0]/70 text-[9px] font-bold rounded-sm uppercase tracking-widest bg-[#FDFCF0]/5 select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FDFCF0] hover:text-[#E5D095] transition-colors group"
                  >
                    Book Consultation 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile-only 'View All' Link */}
        <div className="mt-8 text-center md:hidden">
           <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.15em] transition-all"
          >
            <span className="underline underline-offset-4 decoration-[#E5D095]/40">View All Services</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}