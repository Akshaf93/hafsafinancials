"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function TeamPreview() {
  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 snap-start snap-always">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0]">
            Expert <span className="text-[#E5D095]">Leadership</span>
          </h2>
          <p className="text-xl text-[#FDFCF0]/60 font-light">
            Founded by Mirza Muhammad Bilal Qasim Barlas.
          </p>
          <p className="text-[#FDFCF0]/70 leading-relaxed">
            We combine the precision of Chartered Accountants (CA) with the strategic foresight of CFAs and the rigorous risk management of FRMs.
          </p>
          <div className="flex gap-3 pt-4">
             {["ACCA", "CFA", "FRM", "ICAEW", "CA"].map(badge => (
               <span key={badge} className="px-3 py-1 border border-[#E5D095]/30 text-[#E5D095] text-xs font-bold rounded">{badge}</span>
             ))}
          </div>
          <div className="pt-6">
            <Link href="/team" className="text-[#FDFCF0] hover:text-[#E5D095] border-b border-[#E5D095] pb-1 transition-colors">
              Meet the Experts →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: IMAGES (Strategy & Compliance) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="grid grid-cols-2 gap-4 opacity-80">
            
            {/* CARD 1: STRATEGY (Chess Piece) */}
            <div className="relative h-40 bg-[#FDFCF0]/5 border border-[#FDFCF0]/10 rounded flex items-end p-4 overflow-hidden group">
               {/* Background Image */}
               <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                 <Image 
                   src="/strategy-icon.png" 
                   alt="Strategy Abstract" 
                   fill 
                   className="object-cover object-center"
                 />
               </div>
               {/* Label */}
               <span className="relative z-10 text-[#E5D095] font-bold text-lg drop-shadow-md">Strategy</span>
            </div>

            {/* CARD 2: COMPLIANCE (Shield) */}
            <div className="relative h-40 bg-[#FDFCF0]/5 border border-[#FDFCF0]/10 rounded flex items-end p-4 mt-8 overflow-hidden group">
               {/* Background Image */}
               <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                 <Image 
                   src="/shield-icon.png" 
                   alt="Compliance Abstract" 
                   fill 
                   className="object-cover object-center"
                 />
               </div>
               {/* Label */}
               <span className="relative z-10 text-[#E5D095] font-bold text-lg drop-shadow-md">Compliance</span>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}