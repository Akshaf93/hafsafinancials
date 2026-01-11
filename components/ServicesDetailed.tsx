"use client";

import { m } from "framer-motion";
import Link from "next/link";

const DETAILED_SERVICES = [
  {
    id: "ifrs",
    label: "IFRS Advisory",
    target: "Sole Proprietors → Large Enterprises",
    headline: "Technical Compliance & Transition",
    description: "Full IFRS implementation and specialized advisory for complex standards (IFRS 9, 15, 16 & 17). We ensure your financial statements are defensible and audit-ready.",
    offerings: [
      "Accounting Policy Development",
      "Gap Analysis & Transition Support",
      "ECL Modeling (IFRS 9) & Impairment",
      "Risk Assessment (Financial, Cyber, Business)" // Added from PDF
    ]
  },
  {
    id: "analysis",
    label: "Business Analysis & Advisory", // Updated Title
    target: "SMEs → Large Enterprises",
    headline: "Strategic Insight & Visualization",
    description: "Turning data into decision-useful intelligence. We implement Balanced Scorecards and interactive Power BI dashboards to track real-time performance.",
    offerings: [
      "Ratio Analysis with Commentary",
      "Balanced Scorecard Implementation",
      "KPI Dashboards (Power BI)",
      "Strategy Consulting & Optimization" // Updated from PDF
    ]
  },
  {
    id: "tax",
    label: "Tax Advisory",
    target: "UK & Pakistan Entities",
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
    id: "arch",
    label: "Financial Architect",
    target: "Growing Enterprises & Groups",
    headline: "CFO-Level Modeling & Strategy",
    description: "Advanced 3-statement modeling and stress testing to guide capital allocation. We turn static data into dynamic, multi-year forecasting tools.",
    offerings: [
      "3-Statement Financial Modeling",
      "Stress Testing & Scenario Analysis",
      "KPI Dashboards & Forecasting",
      "Strategic Financial Planning"
    ]
  },
  {
    id: "controls",
    label: "Internal Control Advisory", // Updated Title
    target: "Organizations with Risk Exposure",
    headline: "Governance & Risk Mitigation",
    description: "Designing robust internal control frameworks to protect assets and ensure the integrity of financial reporting systems.",
    offerings: [
      "Internal Control Gap Analysis",
      "IT & Business Process Controls",
      "Internal Audit Framework",
      "Custom Control Implementation"
    ]
  }
];

export default function ServicesDetailed() {
  return (
    <>
      {/* SECTION: HERO / TITLE */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20 snap-start snap-always border-b border-[#FDFCF0]/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#E5D095] text-sm font-bold uppercase tracking-[0.3em] mb-6">
              Our Expertise
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#FDFCF0] mb-8 leading-tight">
              Service <span className="text-[#E5D095]">Offerings</span>
            </h1>
            <p className="text-[#FDFCF0]/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              From technical IFRS compliance to strategic financial architecture, we provide the clarity needed for high-stakes decision making.
            </p>
            
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex flex-col items-center gap-2 text-[#E5D095]/50 text-xs uppercase tracking-widest"
            >
                <span>Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#E5D095]/50 to-transparent"></div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* SECTIONS: INDIVIDUAL SERVICES */}
      {DETAILED_SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        const number = `0${index + 1}`;

        return (
          <section 
            key={service.id} 
            className="min-h-screen w-full flex items-center justify-center px-6 py-20 snap-start snap-always border-b border-[#FDFCF0]/10 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute w-[500px] h-[500px] bg-[#E5D095]/5 rounded-full blur-[100px] pointer-events-none ${isEven ? '-right-20 -bottom-20' : '-left-20 -top-20'}`} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                
                {/* Text Content */}
                <m.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 text-center lg:text-left"
                >
                  <div className={`flex items-center gap-4 mb-6 ${!isEven && 'lg:flex-row-reverse'} justify-center lg:justify-start`}>
                    <span className="text-6xl font-serif text-[#E5D095]/20 font-bold">{number}</span>
                    <span className="h-[1px] w-12 bg-[#E5D095]/30"></span>
                    <span className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.2em]">
                      {service.label}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-serif text-[#FDFCF0] leading-tight mb-4">
                    {service.headline}
                  </h3>
                  
                  {/* NEW: Target Audience Badge */}
                  <div className={`mb-6 flex ${!isEven && 'lg:justify-end'} justify-center lg:justify-start`}>
                    <span className="px-3 py-1 bg-[#FDFCF0]/5 border border-[#FDFCF0]/10 rounded text-[10px] text-[#E5D095] uppercase tracking-wider font-bold">
                        Target: {service.target}
                    </span>
                  </div>

                  <p className="text-[#FDFCF0]/70 text-base md:text-lg font-light leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${!isEven && 'lg:justify-end'}`}>
                    <Link 
                        href="/contact"
                        className="px-6 py-3 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded hover:bg-[#FDFCF0] transition-colors"
                    >
                        Start Engagement
                    </Link>
                    {/* NEW: Link to Pricing Calculator */}
                    <Link 
                        href="/pricing"
                        className="px-6 py-3 border border-[#FDFCF0]/20 text-[#FDFCF0] text-xs font-bold uppercase tracking-widest rounded hover:border-[#E5D095] hover:text-[#E5D095] transition-colors"
                    >
                        View Pricing Tier
                    </Link>
                  </div>
                </m.div>

                {/* Card / Visual */}
                <m.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 w-full"
                >
                  <div className="bg-[#1a1a1a]/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[#FDFCF0]/10 hover:border-[#E5D095]/30 transition-colors shadow-2xl relative overflow-hidden group">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5D095]/50 to-transparent opacity-50"></div>
                    
                    <h4 className="text-[#FDFCF0] font-bold text-lg mb-6 border-b border-[#FDFCF0]/10 pb-4">
                      Key Deliverables
                    </h4>

                    <div className="grid grid-cols-1 gap-4">
                      {service.offerings.map((offering, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-[#FDFCF0]/80 group-hover:text-[#FDFCF0] transition-colors">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-[#E5D095] rounded-full flex-shrink-0 shadow-[0_0_5px_#E5D095]" />
                          <span className="font-light">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </m.div>

              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}