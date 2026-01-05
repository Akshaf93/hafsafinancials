"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TeamPreview() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FDFCF0]">
              Led by Experts. <br />
              <span className="text-[#D4AF37]">Powered by Integrity.</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-[#FDFCF0]/70 leading-relaxed">
                Our engagements are led by <strong>Mirza Muhammad Bilal Qasim Barlas</strong> (ACCA & OBU Finalist), bringing hands-on IFRS implementation experience to every project.
              </p>
              <p className="text-[#FDFCF0]/70 leading-relaxed">
                We are supported by a multidisciplinary team of <strong>Chartered Accountants, CFAs, FRMs, and IT Auditors</strong>, ensuring that your financial architecture is not just compliant, but strategically robust.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {["ACCA", "CFA Level Expertise", "FRM", "IT Audit"].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-[#1a1a1a] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-sm">
                  {badge}
                </span>
              ))}
            </div>

            <Link href="/team" className="inline-block mt-8 text-[#FDFCF0] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
              Meet the Full Team →
            </Link>
          </motion.div>

          {/* Abstract Visual / Photo Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-[#151515] h-64 rounded-lg border border-[#333] flex items-center justify-center">
                   <span className="text-[#333] font-serif text-6xl opacity-20">CA</span>
                </div>
                <div className="bg-[#1a1a1a] h-64 rounded-lg border border-[#333] mt-12 flex items-center justify-center">
                   <span className="text-[#333] font-serif text-6xl opacity-20">CFA</span>
                </div>
             </div>
             {/* Decorative Element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}