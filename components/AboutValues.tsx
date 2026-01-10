"use client";

import { m } from "framer-motion";

const VALUES = [
  {
    id: "01",
    title: "Technical Depth",
    desc: "Led by an ACCA and Oxford Brookes University (OBU) finalist. Our multidisciplinary team includes Chartered Accountants, CFAs, FRMs, and Cyber Risk Specialists to address issues across finance, risk, and governance."
  },
  {
    id: "02",
    title: "Hybrid Intelligence",
    desc: "70% Professional Human Advisory for judgment and strategy. 30% AI-Enabled Intelligence for simulation and automation. A balance that maintains accountability while enhancing speed."
  },
  {
    id: "03",
    title: "Global Orientation",
    desc: "Designing services aligned with frameworks across UAE, KSA, UK, USA, Canada, Australia, NZ, and Pakistan. Tailored to client's operating geography and regulatory exposure."
  }
];

export default function AboutValues() {
  return (
    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col justify-center h-full py-20">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0]">
          The <span className="text-[#E5D095]">Foundation</span>
        </h2>
        <p className="text-[#FDFCF0]/60 mt-4 max-w-2xl">
            Human Judgment. Technical Rigor. Global Perspective.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {VALUES.map((item, index) => (
          <m.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[#1a1a1a] border border-[#FDFCF0]/10 p-8 rounded-xl overflow-hidden hover:border-[#E5D095]/50 transition-colors duration-500 flex flex-col"
          >
            {/* Background Number */}
            <span className="absolute -right-4 -top-4 text-8xl font-serif text-[#FDFCF0]/5 group-hover:text-[#E5D095]/10 transition-colors duration-500 select-none">
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
          </m.div>
        ))}
      </div>

      {/* Commitment Footer */}
      <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="border-t border-[#FDFCF0]/10 pt-8 text-center md:text-left grid md:grid-cols-2 gap-8"
      >
         <div>
            <h3 className="text-[#E5D095] font-bold uppercase tracking-widest text-sm mb-2">Our Commitment</h3>
            <p className="text-[#FDFCF0]/70 text-sm font-light">
                Hafsa Financials is committed to ethical advisory, technical excellence, regulatory discipline, and long-term client relationships.
            </p>
         </div>
         <div className="flex items-center md:justify-end">
            <p className="text-[#FDFCF0] font-serif italic text-lg">
                "Measured not by presentation, but by accuracy, resilience, and results."
            </p>
         </div>
      </m.div>
    </div>
  );
}