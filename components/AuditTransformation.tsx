"use client";

import { motion } from "framer-motion";

const TRANSFORMATIONS = [
  {
    title: "Financial Architecture",
    outcome: "Designed IFRS-ready structures, not just statements.",
    desc: "Restructured the financial backbone to support defensible reporting. This included IFRS-aligned Chart of Accounts, balance sheet reconstruction, and T-account cash flow methodology.",
    tags: ["CoA Design", "Balance Sheet Cleanup", "T-Account Cash Flow"]
  },
  {
    title: "IFRS Advisory",
    outcome: "Transitioned from 'comfort-based' to 'true & fair' reporting.",
    desc: "Addressed critical non-compliance through judgment-driven standards. Implemented IFRS 9 ECL models, IAS 16 depreciation frameworks, and IAS 36 impairment testing.",
    tags: ["IFRS 9 ECL", "IAS 16 & 36", "Valuation Logic"]
  },
  {
    title: "Business Analysis",
    outcome: "Shifted management from reactive to forward-looking strategy.",
    desc: "Converted compliance data into decision intelligence. Delivered working capital cycle analysis, gross margin trend reports, and post-IFRS ROCE recalculations.",
    tags: ["Working Capital", "Margin Trends", "Liquidity Analysis"]
  },
  {
    title: "Internal Controls",
    outcome: "Built a control environment that withstands auditor scrutiny.",
    desc: "Embedded discipline into daily operations. Replaced informal approvals with structured SOPs, approval hierarchies, and audit-ready documentation.",
    tags: ["SOP Design", "Governance Matrix", "Audit Trails"]
  }
];

export default function AuditTransformation() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header - Source: 1067, 1100 */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold text-[#E5D095] uppercase tracking-[0.2em] mb-4">
            Hands-On Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#FDFCF0] mb-6 leading-tight">
            Internal Audit as a <br />
            <span className="text-[#E5D095]">Value-Creation Discipline</span>
          </h3>
          <p className="text-[#FDFCF0]/60 text-lg leading-relaxed">
            We don't just identify risks; we fix them. From correcting material misstatements to re-engineering liquidity ratios, our audits restore regulatory confidence and operational clarity.
          </p>
        </div>

        {/* Grid Layout - Source: 1102-1144 */}
        <div className="grid md:grid-cols-2 gap-8">
          {TRANSFORMATIONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#FDFCF0]/10 p-8 rounded-2xl group hover:border-[#E5D095]/50 transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-[#FDFCF0] mb-2 group-hover:text-[#E5D095] transition-colors">
                {item.title}
              </h4>
              <p className="text-[#E5D095] font-medium text-sm mb-6 italic border-l-2 border-[#E5D095] pl-3">
                "{item.outcome}"
              </p>
              <p className="text-[#FDFCF0]/70 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#FDFCF0]/5 text-[#FDFCF0]/50 text-xs rounded-full border border-[#FDFCF0]/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement - Source: 1146 */}
        <div className="mt-16 text-center border-t border-[#FDFCF0]/10 pt-12">
          <p className="text-xl md:text-2xl text-[#FDFCF0] font-light max-w-4xl mx-auto">
            "Hafsa Financials integrates Financial Architecture, IFRS Advisory, and Internal Controls into one coherent framework — <span className="text-[#E5D095] font-normal">delivering financial truth that stands up to scrutiny.</span>"
          </p>
        </div>

      </div>
    </section>
  );
}