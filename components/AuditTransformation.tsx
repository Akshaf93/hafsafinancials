"use client";

import { m } from "framer-motion";

const TRANSFORMATIONS = [
  {
    title: "Financial Architecture",
    outcome: "Designed IFRS-ready structures.",
    desc: "Restructured the financial backbone including IFRS-aligned Chart of Accounts and T-account cash flow methodology.",
    tags: ["CoA Design", "Balance Sheet Cleanup"]
  },
  {
    title: "IFRS Advisory",
    outcome: "Transitioned to 'true & fair' reporting.",
    desc: "Implemented IFRS 9 ECL models, IAS 16 depreciation frameworks, and IAS 36 impairment testing.",
    tags: ["IFRS 9 ECL", "IAS 16 & 36"]
  },
  {
    title: "Business Analysis",
    outcome: "Shifted to forward-looking strategy.",
    desc: "Delivered working capital cycle analysis, gross margin trend reports, and post-IFRS ROCE recalculations.",
    tags: ["Working Capital", "Margin Trends"]
  },
  {
    title: "Internal Controls",
    outcome: "Built audit-ready control environment.",
    desc: "Replaced informal approvals with structured SOPs, approval hierarchies, and audit-ready documentation.",
    tags: ["SOP Design", "Governance Matrix"]
  }
];

export default function AuditTransformation() {
  return (
    // UPDATED: Reduced padding (py-12) to fit comfortably in h-screen
    <section className="py-12 relative w-full">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 text-center md:text-left">
          <h2 className="text-xs font-bold text-[#E5D095] uppercase tracking-[0.2em] mb-3">
            Hands-On Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#FDFCF0] mb-4 leading-tight">
            Internal Audit as a <br />
            <span className="text-[#E5D095]">Value-Creation Discipline</span>
          </h3>
          <p className="text-[#FDFCF0]/60 text-base md:text-lg leading-relaxed max-w-2xl">
            We don't just identify risks; we fix them. From correcting material misstatements to re-engineering liquidity ratios.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {TRANSFORMATIONS.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#FDFCF0]/10 p-6 rounded-xl group hover:border-[#E5D095]/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-bold text-[#FDFCF0] group-hover:text-[#E5D095] transition-colors">
                    {item.title}
                </h4>
              </div>
              
              <p className="text-[#E5D095] text-xs font-medium mb-3 italic">
                "{item.outcome}"
              </p>
              <p className="text-[#FDFCF0]/70 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                {item.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[#FDFCF0]/5 text-[#FDFCF0]/50 text-[10px] uppercase font-bold rounded border border-[#FDFCF0]/5">
                    {tag}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}