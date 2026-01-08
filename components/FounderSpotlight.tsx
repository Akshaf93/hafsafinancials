"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCE_TABS = [
  {
    id: "audit",
    label: "Audit Scope",
    title: "Internal Audit Execution",
    content: [
      "Conducted full-scope internal audit: Exports, Finance, HR, Receivables, Procurement, & ERP.",
      "Delivered structured Internal Audit Report aligned with international best practices."
    ]
  },
  {
    id: "ifrs",
    label: "IFRS Impl.",
    title: "IFRS Implementation",
    content: [
      "Led end-to-end IFRS policy alignment.",
      "Implemented IFRS 9 (ECL) with Stage 1-3 classification & impairment logic.",
      "Implemented IAS 16 (PPE) for containers/reefers including depreciation schedules.",
      "Advised on IAS 36 Impairment & IFRS 13 Fair Value Measurement.",
      "Reviewed IAS 38 Intangibles & IAS 2 Inventory recognition."
    ]
  },
  {
    id: "reporting",
    label: "Reporting",
    title: "Financial Statements",
    content: [
      "Restated financial statements to IFRS (IAS 1).",
      "Prepared first-time Cash Flow Statement (T-account method).",
      "Opened IFRS-aligned Chart of Accounts (CoA).",
      "Delivered PPE Schedules, ECL Models, Working Capital Analysis & KPI Dashboards."
    ]
  },
  {
    id: "training",
    label: "Training",
    title: "Knowledge Transfer",
    content: [
      "Delivered hands-on IFRS training to Finance Manager (T-accounts, Schedules).",
      "Ensured sustainable compliance beyond implementation."
    ]
  }
];

export default function FounderSpotlight() {
  const [activeTab, setActiveTab] = useState("audit");
  const qualifications = ["ACCA Finalist", "OBU Finalist"];

  return (
    <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
      
      {/* LEFT: PROFILE */}
      <div className="flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
           {/* NEW LAYOUT: Compact Header with Image & Name side-by-side */}
           <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-2xl overflow-hidden border border-[#E5D095]/20 shadow-[0_0_15px_rgba(229,208,149,0.1)] group">
                <Image
                  src="/founder.jpg"
                  alt="Mirza Bilal Qasim"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex-1 pt-2">
                <h2 className="text-4xl md:text-5xl font-serif text-[#FDFCF0] leading-tight mb-2">
                    Mirza <br/><span className="text-[#E5D095]">Bilal Qasim</span>
                </h2>
                <p className="text-[#FDFCF0]/60 text-xs uppercase tracking-[0.2em] mb-4">
                    President & Founder
                </p>
                
                <a 
                  href="https://www.linkedin.com/in/mirza-bilal-qasim-barlas-aca-finalist-aaa0a6133/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E5D095] text-xs font-bold uppercase tracking-widest hover:text-[#FDFCF0] transition-colors border-b border-[#E5D095]/30 pb-1"
                >
                  <span>Connect on LinkedIn</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
           </div>
           
           <div className="flex flex-wrap gap-2 mb-6">
              {qualifications.map((q, i) => (
                <motion.span 
                  key={q} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1 border border-[#E5D095]/30 text-[#E5D095] text-[10px] font-bold rounded uppercase hover:bg-[#E5D095] hover:text-[#050505] transition-colors cursor-default"
                >
                  {q}
                </motion.span>
              ))}
           </div>

           <p className="text-[#FDFCF0]/70 font-light leading-relaxed text-lg max-w-md">
             Bringing deep expertise in financial transformation, exemplified by the end-to-end IFRS restructuring and internal audit of Navisco Freight Forwarding. Specializing in complex frameworks like IFRS 9 and IAS 16, the focus extends beyond compliance to sustainable capacity building—empowering finance teams with the tools and training to maintain international standards independently.
           </p>
        </motion.div>
      </div>

      {/* RIGHT: EXPERIENCE TABS */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#1a1a1a] border border-[#FDFCF0]/10 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[500px] shadow-2xl"
      >
         {/* Background Glow */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5D095]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

         {/* Header for Right Side */}
         <div className="mb-8 relative z-10">
            <h3 className="text-3xl font-serif text-[#FDFCF0] mb-2">Practical Experience</h3>
            <p className="text-[#E5D095] text-xs uppercase tracking-widest font-bold">Project: Navisco Freight Forwarding</p>
         </div>

         {/* Tabs */}
         <div className="flex flex-wrap gap-2 mb-8 border-b border-[#FDFCF0]/10 pb-4 relative z-10">
            {EXPERIENCE_TABS.map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                   activeTab === tab.id 
                     ? 'bg-[#E5D095] text-[#050505] shadow-[0_0_10px_rgba(229,208,149,0.3)]' 
                     : 'text-[#FDFCF0]/50 hover:text-[#E5D095] hover:bg-[#FDFCF0]/5'
                 }`}
               >
                 {tab.label}
               </button>
            ))}
         </div>

         {/* Content */}
         <div className="relative min-h-[220px] z-10">
            <AnimatePresence mode="wait">
               {EXPERIENCE_TABS.map(tab => activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                     <h4 className="text-xl text-[#E5D095] font-serif mb-6">{tab.title}</h4>
                     <ul className="space-y-4">
                        {tab.content.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-[#FDFCF0]/80 text-sm leading-relaxed font-light">
                              <span className="text-[#E5D095] mt-1.5 text-[10px]">●</span>
                              <span>{item}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>
      </motion.div>
    </div>
  );
}