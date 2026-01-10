"use client";

import { useState } from "react";
import { m } from "framer-motion";

const SERVICE_DATA = {
  ifrs: {
    name: "IFRS Advisory",
    base: 3000,
    complexityMultipliers: { standard: 1, intermediate: 1.25, advanced: 1.50 },
    description: "Policy alignment, IFRS 9/15/16 guidance, and reporting.",
  },
  modeling: {
    name: "Financial Modeling",
    base: 4000,
    complexityMultipliers: { standard: 1, intermediate: 1.35, advanced: 1.60 },
    description: "3-Statement models, valuations (DCF), and stress testing.",
  },
  risk: {
    name: "Risk Assessment",
    base: 2500,
    complexityMultipliers: { standard: 1, intermediate: 1.20, advanced: 1.45 },
    description: "Financial, Cyber, and Business risk heat maps.",
  },
};

type ServiceKey = keyof typeof SERVICE_DATA;
type ComplexityLevel = "standard" | "intermediate" | "advanced";
const SERVICE_KEYS = Object.keys(SERVICE_DATA) as ServiceKey[];

export default function ComplexityCalculator() {
  const [service, setService] = useState<ServiceKey>("ifrs");
  const [complexity, setComplexity] = useState<ComplexityLevel>("standard");
  const [isMultiCountry, setIsMultiCountry] = useState(false);

  const calculatePrice = () => {
    const data = SERVICE_DATA[service];
    let multiplier = data.complexityMultipliers[complexity];
    if (isMultiCountry) multiplier += 0.20; // [Source: 384]

    const minPrice = Math.round(data.base * multiplier);
    const maxPrice = Math.round(minPrice * 1.5);
    return { min: minPrice, max: maxPrice };
  };

  const { min, max } = calculatePrice();

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0a0a0a] rounded-xl shadow-2xl border border-[#E5D095]/20 overflow-hidden">
      <div className="bg-[#1a1a1a] p-6 text-[#FDFCF0] text-center border-b border-[#E5D095]/10">
        <h3 className="text-2xl font-bold">Smart Fee Estimator</h3>
        <p className="text-[#E5D095]/80 text-sm mt-1">Estimate investment based on complexity & scope</p>
      </div>
      <div className="p-8 space-y-8">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-[#FDFCF0]/60 uppercase tracking-wide">Select Service</label>
          <div className="grid grid-cols-3 gap-2">
            {SERVICE_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setService(key)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  service === key ? "bg-[#E5D095] text-[#050505] shadow-md" : "bg-[#1a1a1a] text-[#FDFCF0]/60 hover:bg-[#2a2a2a]"
                }`}
              >
                {SERVICE_DATA[key].name}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-[#FDFCF0]/60 uppercase tracking-wide">Complexity Level</label>
            <span className="text-xs font-bold text-[#E5D095] bg-[#E5D095]/10 px-2 py-1 rounded">
              {complexity === "standard" ? "Standard (Base)" : complexity === "intermediate" ? "Intermediate (+25%)" : "Advanced (+50%)"}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            {["standard", "intermediate", "advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setComplexity(level as ComplexityLevel)}
                className={`flex-1 py-2 rounded-md border-2 text-sm font-semibold capitalize transition-all ${
                  complexity === level ? "border-[#E5D095] bg-[#E5D095]/10 text-[#E5D095]" : "border-[#333] text-[#FDFCF0]/40 hover:border-[#555]"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-[#1a1a1a] rounded-lg">
          <input
            type="checkbox"
            id="multiCountry"
            checked={isMultiCountry}
            onChange={(e) => setIsMultiCountry(e.target.checked)}
            className="w-5 h-5 text-[#E5D095] rounded focus:ring-[#E5D095] bg-[#0a0a0a] border-[#333]"
          />
          <label htmlFor="multiCountry" className="text-sm text-[#FDFCF0]/80 font-medium cursor-pointer">
            Multi-Country / Cross-Border Scope? <span className="text-xs text-[#E5D095]">(+20%)</span>
          </label>
        </div> 
        <div className="bg-[#000000] rounded-xl p-6 text-center text-white relative overflow-hidden border border-[#333]">
          <div className="relative z-10">
            <p className="text-[#FDFCF0]/40 text-xs uppercase tracking-widest mb-2">Estimated Investment</p>
            <m.div
              key={`${min}-${max}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-[#E5D095]"
            >
              ${min.toLocaleString()} - ${max.toLocaleString()}
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}