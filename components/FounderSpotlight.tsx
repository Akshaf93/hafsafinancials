"use client";

import Image from "next/image";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import founderImg from "@/public/founder.jpeg";

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
    <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full">
      
      {/* LEFT: EDITORIAL PROFILE (Spans 5 columns) */}
      <div className="flex flex-col justify-center lg:col-span-5 relative">
        
        {/* Subtle background glow for the portrait area */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#E5D095]/10 to-transparent blur-[120px] pointer-events-none -z-10 -translate-y-1/2 rounded-full" />

        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
           {/* Section Eyebrow */}
           <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[1px] bg-[#E5D095]"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E5D095]">
                Principal Leadership
              </span>
           </div>

           <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
              
              {/* EDITORIAL PORTRAIT (Sharp corners, vertical aspect ratio) */}
              <div className="relative w-36 sm:w-44 aspect-[3/4] flex-shrink-0 rounded-sm overflow-hidden border border-[#FDFCF0]/15 shadow-2xl group grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={founderImg}
                  alt="Mirza Bilal Qasim"
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  placeholder="blur"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Image Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* NAME & TITLES */}
              <div className="flex-1 pt-2 sm:pt-4">
                <h2 className="text-4xl md:text-[42px] font-serif text-[#FDFCF0] leading-[1.1] mb-3">
                    Mirza <br/><span className="text-[#E5D095] italic font-light">Bilal Qasim</span>
                </h2>
                <p className="text-[#FDFCF0]/60 text-[10px] font-semibold uppercase tracking-[0.25em] mb-5">
                    President & Founder
                </p>
                
                {/* LinkedIn Link (Clean text link, no heavy borders) */}
                <a 
                  href="https://www.linkedin.com/in/muhammad-bilal-qasim-mirza-223230168/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.15em] transition-all"
                >
                  <span className="underline underline-offset-4 decoration-[#E5D095]/40 group-hover:decoration-[#E5D095]">Connect on LinkedIn</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
           </div>
           
           {/* QUALIFICATION TAGS */}
           <div className="flex flex-wrap gap-2 mb-6">
              {qualifications.map((q, i) => (
                <m.span 
                  key={q} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="px-2.5 py-1 border border-[#FDFCF0]/20 text-[#FDFCF0]/80 text-[9px] font-bold rounded-sm uppercase tracking-widest bg-[#FDFCF0]/5 select-none"
                >
                  {q}
                </m.span>
              ))}
           </div>

           {/* BIO TEXT */}
           <p className="text-[#FDFCF0]/60 font-light leading-relaxed text-[13px] md:text-sm max-w-md">
              Bringing deep expertise in financial transformation, exemplified by the end-to-end IFRS restructuring and internal audit of Navisco Freight Forwarding. Specializing in complex frameworks like IFRS 9 and IAS 16, the focus extends beyond compliance to sustainable capacity building—empowering finance teams with the tools and training to maintain international standards independently.
           </p>
        </m.div>
      </div>

      {/* RIGHT: TRACK RECORD / EXPERIENCE (Spans 7 columns) */}
      <m.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7 bg-[#050505]/40 backdrop-blur-sm border border-[#FDFCF0]/10 rounded-sm p-8 md:p-14 relative overflow-hidden flex flex-col min-h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
         
         <div className="mb-10 relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif text-[#FDFCF0] mb-3">Track Record</h3>
            <p className="text-[#E5D095] text-[10px] uppercase tracking-[0.2em] font-semibold">Case Reference: Navisco Freight Forwarding</p>
         </div>

         {/* EDITORIAL TABS (Underline style instead of blocky buttons) */}
         <div className="flex flex-wrap gap-6 mb-10 border-b border-[#FDFCF0]/10 relative z-10">
            {EXPERIENCE_TABS.map(tab => (
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
                 {/* Active Tab Underline */}
                 {activeTab === tab.id && (
                   <m.div 
                     layoutId="activeTabIndicator"
                     className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5D095]"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                 )}
               </button>
            ))}
         </div>

         {/* TAB CONTENT */}
         <div className="relative flex-1 z-10">
            <AnimatePresence mode="wait">
               {EXPERIENCE_TABS.map(tab => activeTab === tab.id && (
                  <m.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                     <h4 className="text-xl md:text-2xl text-[#FDFCF0] font-serif mb-6">{tab.title}</h4>
                     
                     <ul className="space-y-5">
                        {tab.content.map((item, i) => (
                           <li key={i} className="flex items-start gap-4 text-[#FDFCF0]/70 text-[13px] md:text-sm leading-relaxed font-light">
                              {/* Sleek structural bullet point */}
                              <span className="mt-1.5 flex-shrink-0 w-3 h-[1px] bg-[#E5D095]/60" />
                              <span>{item}</span>
                           </li>
                        ))}
                     </ul>
                  </m.div>
               ))}
            </AnimatePresence>
         </div>
      </m.div>
    </div>
  );
}