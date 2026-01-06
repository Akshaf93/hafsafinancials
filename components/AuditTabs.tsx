"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: "arch",
    label: "Financial Architecture",
    headline: "Designing IFRS-ready structures, not just statements[cite: 1103].",
    content: "We restructured the financial backbone to support defensible reporting[cite: 1104]. Key deliverables included IFRS-aligned Chart of Accounts [cite: 1106], balance sheet reconstruction [cite: 1107], and T-account cash flow methodology[cite: 1108].",
    tags: ["CoA Design", "Balance Sheet Cleanup"]
  },
  {
    id: "ifrs",
    label: "IFRS Advisory",
    headline: "Judgment-driven application of standards[cite: 1114].",
    content: "Addressed critical non-compliance through practical implementation[cite: 1115]. Implemented IFRS 9 ECL models [cite: 1117], IAS 16 depreciation frameworks [cite: 1118], and IAS 36 impairment testing[cite: 1119].",
    tags: ["IFRS 9 ECL", "IAS 16 & 36"]
  },
  {
    id: "analysis",
    label: "Business Analysis",
    headline: "Turning compliance into insight[cite: 1125].",
    content: "Converted financial data into decision-useful intelligence[cite: 1126]. Delivered working capital cycle analysis [cite: 1128], gross margin trend reports [cite: 1129], and post-IFRS ROCE recalculations[cite: 1130].",
    tags: ["Liquidity Analysis", "Margin Trends"]
  },
  {
    id: "controls",
    label: "Internal Controls",
    headline: "Embedding discipline into daily operations[cite: 1135].",
    content: "Remediated critical governance gaps[cite: 1136]. Replaced informal approvals with structured procurement SOPs [cite: 1141], depreciation policies [cite: 1140], and audit-ready documentation[cite: 1143].",
    tags: ["SOP Design", "Governance Matrix"]
  }
];

export default function AuditTabs() {
  const [activeTab, setActiveTab] = useState("arch");

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#FDFCF0]">Hands-On <span className="text-[#D4AF37]">Transformation</span></h2>
        <p className="text-[#FDFCF0]/50 text-xs mt-2 uppercase tracking-widest">Real-World Case Study</p>
      </div>

      {/* COMPACT TABS HEADER */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all border ${
              activeTab === tab.id
                ? "bg-[#D4AF37] text-[#050505] border-[#D4AF37] shadow-lg"
                : "bg-[#1a1a1a] text-[#FDFCF0]/60 border-[#333] hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="relative bg-[#0a0a0a] border border-[#D4AF37]/20 rounded-xl p-6 min-h-[200px]">
        <AnimatePresence mode="wait">
          {TABS.map((tab) => activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-bold text-[#FDFCF0] mb-2">{tab.headline}</h3>
              <p className="text-[#FDFCF0]/70 text-sm leading-relaxed mb-6">
                {tab.content}
              </p>
              <div className="flex gap-2">
                {tab.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold rounded border border-[#D4AF37]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}