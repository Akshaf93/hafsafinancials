"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HybridModel() {
  const [activeSide, setActiveSide] = useState<"human" | "ai" | null>(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Our Delivery Philosophy
          </h2>
          <p className="text-xl text-gray-600 font-light">
            "Human Judgment. AI Intelligence. Financial Excellence."
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* LEFT SIDE: 70% HUMAN [cite: 494] */}
          <motion.div 
            className={`relative p-10 md:p-14 flex flex-col justify-center transition-all duration-500 ease-in-out cursor-pointer
              ${activeSide === "ai" ? "md:w-[30%]" : "md:w-[70%]"}
              bg-brand-blue text-white
            `}
            onMouseEnter={() => setActiveSide("human")}
            onMouseLeave={() => setActiveSide(null)}
          >
            <div className="relative z-10">
              <h3 className="text-5xl md:text-7xl font-bold text-brand-gold opacity-20 absolute -top-10 -left-6">
                70%
              </h3>
              <h3 className="text-3xl font-bold mb-6 mt-4">Human-Led Advisory</h3>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Complex judgments, IFRS interpretation, and ethical strategy remain 100% human.
              </p>
              
              <ul className="space-y-4">
                {[
                  "IFRS Interpretation & Judgment",
                  "Complex Policy Decisions",
                  "Valuation Logic & Ethics",
                  "Board-Level Negotiation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 30% AI [cite: 513] */}
          <motion.div 
            className={`relative p-10 md:p-14 flex flex-col justify-center transition-all duration-500 ease-in-out cursor-pointer
              ${activeSide === "human" ? "md:w-[30%]" : "md:w-[70%]"}
              bg-brand-dark text-white border-l border-gray-800
            `}
            onMouseEnter={() => setActiveSide("ai")}
            onMouseLeave={() => setActiveSide(null)}
          >
            <div className="relative z-10">
              <h3 className="text-5xl md:text-7xl font-bold text-cyan-400 opacity-20 absolute -top-10 -left-6">
                30%
              </h3>
              <h3 className="text-3xl font-bold mb-6 mt-4 text-cyan-50">AI-Led Intelligence</h3>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Accelerated data processing, pattern recognition, and initial drafting.
              </p>

              <ul className="space-y-4">
                {[
                  "Automated Data Cleansing",
                  "Scenario Stress Testing",
                  "Variance & Trend Analysis",
                  "Drafting Routine Disclosures"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    <span className="font-medium text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges [cite: 538, 661] */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-widest">
          <span className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Human-Validated</span>
          <span className="flex items-center"><span className="text-brand-gold mr-2">✓</span> Audit-Defensible</span>
          <span className="flex items-center"><span className="text-brand-gold mr-2">✓</span> No Autonomous Decisions</span>
        </div>
      </div>
    </section>
  );
}