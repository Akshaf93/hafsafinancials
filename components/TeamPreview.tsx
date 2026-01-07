"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function TeamPreview() {
  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#FDFCF0]">
            Expert <span className="text-[#D4AF37]">Leadership</span>
          </h2>
          <p className="text-[#D4AF37] mt-2 font-mono text-xs uppercase tracking-widest">
            Founded by Mirza Muhammad Bilal Qasim Barlas
          </p>
        </div>

        <p className="text-[#FDFCF0]/70 text-lg leading-relaxed max-w-md">
          We combine the precision of <span className="text-[#FDFCF0] font-bold">Chartered Accountants (CA)</span> with the strategic foresight of <span className="text-[#FDFCF0] font-bold">CFAs</span> and the rigorous risk management of <span className="text-[#FDFCF0] font-bold">FRMs</span>.
        </p>

        <div className="flex flex-wrap gap-3">
          {["ACCA", "CFA", "FRM", "ICAEW", "CA"].map((cred) => (
            <span key={cred} className="px-3 py-1 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold rounded-sm uppercase tracking-wider">
              {cred}
            </span>
          ))}
        </div>

        <div className="pt-4">
          <Link href="/team" className="text-[#FDFCF0] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
            Meet the Experts →
          </Link>
        </div>
      </div>

      {/* RIGHT: STRATEGY VS COMPLIANCE CARDS */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        
        {/* CARD 1: STRATEGY (CFA/Architect) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative h-[280px] bg-[#111] border border-[#FDFCF0]/10 rounded-xl overflow-hidden group p-6 flex flex-col justify-end"
        >
          {/* Abstract Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />
          <div className="absolute top-6 right-6 w-20 h-20 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
             <Image 
               src="/strategy-icon.png" 
               alt="Strategy Icon" 
               fill
               className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
             />
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-[#FDFCF0] mb-2">Strategy</h3>
            <p className="text-[#FDFCF0]/60 text-xs leading-relaxed mb-4">
              "Financial Architecture & Growth."
            </p>
            <ul className="space-y-1 text-[#D4AF37] text-xs font-mono uppercase tracking-wide">
              <li>+ M&A Structuring</li>
              <li>+ 3-Statement Models</li>
              <li>+ Valuation (DCF)</li>
            </ul>
          </div>
        </motion.div>

        {/* CARD 2: COMPLIANCE (CA/Risk) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative h-[280px] bg-[#0a0a0a] border border-[#FDFCF0]/10 rounded-xl overflow-hidden group p-6 flex flex-col justify-end mt-0 sm:mt-12"
        >
          {/* Abstract Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />
          
          <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-blue-400">
             <div className="absolute top-6 right-6 w-20 h-20 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
             <Image 
               src="/shield-icon.png" 
               alt="Shield Icon" 
               fill
               className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
             />
          </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-[#FDFCF0] mb-2">Compliance</h3>
            <p className="text-[#FDFCF0]/60 text-xs leading-relaxed mb-4">
              "Regulatory Safety & Risk Mgmt."
            </p>
            <ul className="space-y-1 text-blue-400 text-xs font-mono uppercase tracking-wide">
              <li>+ IFRS Implementation</li>
              <li>+ Internal Audits</li>
              <li>+ Risk Frameworks</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}