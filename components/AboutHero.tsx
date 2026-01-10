"use client";

import { m } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="max-w-5xl mx-auto text-center px-6">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[#E5D095] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6">
          About Hafsa Financials
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif font-medium text-[#FDFCF0] mb-8 leading-[1.1]">
          Built for <br />
          <span className="text-[#E5D095]">Complexity</span>
        </h1>
        <div className="w-24 h-[1px] bg-[#E5D095] mx-auto mb-8 opacity-50"></div>
        <p className="text-xl md:text-2xl text-[#FDFCF0]/70 font-light max-w-4xl mx-auto leading-relaxed">
          An independent financial advisory firm established to support organizations navigating complex accounting standards, financial risk, regulatory change, and strategic transformation.
        </p>
        <p className="text-[#FDFCF0]/50 mt-6 text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
          We work with clients ranging from SMEs and founder-led businesses to growing enterprises and group structures, delivering solutions that are technically rigorous, commercially grounded, and execution-focused.
        </p>
      </m.div>
    </div>
  );
}