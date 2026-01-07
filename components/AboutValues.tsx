"use client";

import { motion } from "framer-motion";

const VALUES = [
  {
    id: "01",
    title: "Radical Transparency",
    desc: "We believe clients should know exactly what they are paying for. Our complexity-based pricing model eliminates hidden fees and hourly billing ambiguity."
  },
  {
    id: "02",
    title: "Global Reach",
    desc: "With a presence in key financial hubs including the UK, UAE, and Pakistan, we bridge the gap between local regulatory nuance and international strategic goals."
  },
  {
    id: "03",
    title: "Defensible Insight",
    desc: "We provide insights that stand up to scrutiny. Every audit, model, and strategy is built to withstand the toughest questions from boards and regulators."
  }
];

export default function AboutValues() {
  return (
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0]">
          The <span className="text-[#E5D095]">Pillars</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {VALUES.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[#1a1a1a] border border-[#FDFCF0]/10 p-8 md:p-10 rounded-xl overflow-hidden hover:border-[#E5D095]/50 transition-colors duration-500"
          >
            {/* Background Number */}
            <span className="absolute -right-4 -top-4 text-9xl font-serif text-[#FDFCF0]/5 group-hover:text-[#E5D095]/10 transition-colors duration-500 select-none">
              {item.id}
            </span>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#FDFCF0] mb-4 group-hover:text-[#E5D095] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#FDFCF0]/60 font-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}