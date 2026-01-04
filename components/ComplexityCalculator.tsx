"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl border border-brand-gold/20 overflow-hidden">
      <div className="bg-brand-blue p-6 text-white text-center">
        <h3 className="text-2xl font-bold">Smart Fee Estimator</h3>
        <p className="text-brand-gold/80 text-sm mt-1">Estimate investment based on complexity & scope</p>
      </div>
      <div className="p-8 space-y-8">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Select Service</label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(SERVICE_DATA) as ServiceKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setService(key)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  service === key ? "bg-brand-blue text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {SERVICE_DATA[key].name}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Complexity Level</label>
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded">
              {complexity === "standard" ? "Standard (Base)" : complexity === "intermediate" ? "Intermediate (+25%)" : "Advanced (+50%)"}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            {["standard", "intermediate", "advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setComplexity(level as ComplexityLevel)}
                className={`flex-1 py-2 rounded-md border-2 text-sm font-semibold capitalize transition-all ${
                  complexity === level ? "border-brand-gold bg-brand-gold/10 text-brand-blue" : "border-gray-200 text-gray-400 hover:border-gray-300"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <input
            type="checkbox"
            id="multiCountry"
            checked={isMultiCountry}
            onChange={(e) => setIsMultiCountry(e.target.checked)}
            className="w-5 h-5 text-brand-blue rounded focus:ring-brand-gold"
          />
          <label htmlFor="multiCountry" className="text-sm text-gray-700 font-medium cursor-pointer">
            Multi-Country / Cross-Border Scope? <span className="text-xs text-brand-gold">(+20%)</span>
          </label>
        </div>
        <div className="bg-brand-dark rounded-xl p-6 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Estimated Investment</p>
            <motion.div
              key={`${min}-${max}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-brand-gold"
            >
              ${min.toLocaleString()} - ${max.toLocaleString()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}