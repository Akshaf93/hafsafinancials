import React from 'react';

export default function FounderSpotlight() {
  const qualifications = ["ACCA", "CFA", "FRM", "ICAEW", "CA"];

  return (
    <div className="flex flex-col gap-16">
      {/* Header Section: Image + Intro */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-start">
         {/* Smaller Image Container */}
         <div className="relative w-full aspect-[3/4] bg-[#111] border border-[#FDFCF0]/10 overflow-hidden group">
            <div className="absolute inset-0 bg-[#E5D095]/5 group-hover:bg-[#E5D095]/10 transition-colors duration-500" />
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#E5D095] opacity-30" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#E5D095] opacity-30" />
            
            {/* Placeholder for Image */}
            <div className="flex flex-col items-center justify-center h-full text-[#FDFCF0]/20">
                <span className="font-serif italic text-xl">Portrait</span>
                <span className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Asset Required</span>
            </div>
         </div>
         
         <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-serif text-[#FDFCF0] mb-2">
              Mirza Muhammad <br/><span className="text-[#E5D095]">Bilal Qasim Barlas</span>
            </h2>
            <p className="text-[#E5D095] uppercase tracking-widest text-sm font-medium mb-6">
              President & Founder
            </p>
            
            {/* Qualifications */}
            <div className="flex flex-wrap gap-3 mb-8">
                {qualifications.map((badge) => (
                    <span key={badge} className="px-3 py-1 border border-[#E5D095]/30 text-[#E5D095] text-xs font-bold rounded">
                        {badge}
                    </span>
                ))}
            </div>

            <p className="text-[#FDFCF0]/70 font-light leading-relaxed text-lg max-w-2xl">
               With a distinguished career spanning over a decade in high-stakes financial auditing and strategic restructuring, our founder established Hafsa Financials to bridge the gap between regulatory compliance and strategic growth.
            </p>
         </div>
      </div>

      {/* Detailed Experience Section */}
      <div className="border-t border-[#FDFCF0]/10 pt-10">
         <div className="mb-10">
            <h3 className="text-2xl font-serif text-[#FDFCF0] mb-2">
                Practical Experience
            </h3>
            <p className="text-[#E5D095] uppercase tracking-widest text-xs font-bold">
                Project: Navisco Freight Forwarding Company
            </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Audit & Scope */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/30 transition-colors">
                <h4 className="text-[#E5D095] font-bold mb-4 uppercase text-xs tracking-wider border-b border-[#E5D095]/20 pb-2">Internal Audit Scope</h4>
                <ul className="space-y-3 text-[#FDFCF0]/70 text-sm leading-relaxed list-disc pl-4 marker:text-[#E5D095]">
                    <li>Conducted a full-scope internal audit covering exports, finance, HR files, receivables, procurement, ERP walkthrough, and IFRS compliance.</li>
                    <li>Delivered a structured Internal Audit Report aligned with international best practices.</li>
                </ul>
            </div>

            {/* Card 2: IFRS Implementation */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/30 transition-colors">
                <h4 className="text-[#E5D095] font-bold mb-4 uppercase text-xs tracking-wider border-b border-[#E5D095]/20 pb-2">IFRS Implementation & Transformation</h4>
                <ul className="space-y-3 text-[#FDFCF0]/70 text-sm leading-relaxed list-disc pl-4 marker:text-[#E5D095]">
                    <li>Led end-to-end IFRS implementation and accounting policy alignment.</li>
                    <li>Implemented <strong>IFRS 9 Expected Credit Loss (ECL)</strong> framework with Stage 1, 2, and 3 classification.</li>
                    <li>Designed ECL schedules, aging analysis, and impairment logic.</li>
                    <li>Implemented <strong>IAS 16 PPE</strong> accounting for containers and reefer fridges (depreciation & disposal).</li>
                    <li>Advised on <strong>IAS 36</strong> impairment testing and <strong>IFRS 13</strong> Fair Value Measurement.</li>
                    <li>Reviewed <strong>IAS 38</strong> Intangible Assets and <strong>IAS 2</strong> Inventory recognition.</li>
                </ul>
            </div>

            {/* Card 3: Financial Reporting */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/30 transition-colors">
                <h4 className="text-[#E5D095] font-bold mb-4 uppercase text-xs tracking-wider border-b border-[#E5D095]/20 pb-2">Financial Statements & Reporting</h4>
                <ul className="space-y-3 text-[#FDFCF0]/70 text-sm leading-relaxed list-disc pl-4 marker:text-[#E5D095]">
                    <li>Restated financial statements into IFRS-compliant formats (IAS 1).</li>
                    <li>Prepared first-time Cash Flow Statement using full T-account methodology.</li>
                    <li>Opened IFRS-aligned Chart of Accounts (accumulated depreciation, ECL provisions, revaluation surplus).</li>
                    <li>Delivered PPE schedules, Working capital cycle analysis, and KPI dashboards.</li>
                </ul>
            </div>

            {/* Card 4: Training */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/30 transition-colors">
                <h4 className="text-[#E5D095] font-bold mb-4 uppercase text-xs tracking-wider border-b border-[#E5D095]/20 pb-2">Training & Knowledge Transfer</h4>
                <ul className="space-y-3 text-[#FDFCF0]/70 text-sm leading-relaxed list-disc pl-4 marker:text-[#E5D095]">
                    <li>Delivered hands-on IFRS training to the Finance Manager using paper-based examples, T-accounts, and real schedules.</li>
                    <li>Ensured sustainable compliance beyond implementation phase.</li>
                </ul>
            </div>
         </div>
      </div>
    </div>
  );
}