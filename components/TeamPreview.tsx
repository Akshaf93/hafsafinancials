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
          transition={{ duration: 0.8, ease: "easeOut" }}
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
             {["ACCA", "CFA", "FRM", "ICAEW", "CA"].map((badge, i) => (
               <motion.span 
                 key={badge} 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 + 0.5 }}
                 className="px-3 py-1 border border-[#E5D095]/30 text-[#E5D095] text-xs font-bold rounded"
               >
                 {badge}
               </motion.span>
             ))}
          </div>
          <div className="pt-6">
            <Link href="/team" className="text-[#FDFCF0] hover:text-[#E5D095] border-b border-[#E5D095] pb-1 transition-colors">
              Meet the Experts →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: ANIMATED VISUALS */}
        <motion.div 
          className="md:w-1/2 w-full"
        >
          <div className="grid grid-cols-2 gap-4 opacity-100">
            
            {/* CARD 1: STRATEGY (Chess Piece) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, borderColor: "rgba(229, 208, 149, 0.4)", transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-48 bg-[#FDFCF0]/5 border border-[#FDFCF0]/10 rounded flex items-end p-6 pb-2 overflow-hidden cursor-pointer group"
            >
               {/* Animated Background Image - AUTO SCALE ON ENTRY */}
               <motion.div 
                 initial={{ scale: 1.2, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 0.6 }} // Visible by default, no hover needed
                 whileHover={{ scale: 1.1, opacity: 0.8, transition: { duration: 0.5 } }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="absolute inset-0"
               >
                 <Image 
                   src="/strategy-icon.png" 
                   alt="Strategy Abstract" 
                   fill 
                   className="object-cover object-center"
                 />
               </motion.div>
               {/* Label */}
               <span className="relative z-10 text-[#E5D095] font-bold text-lg drop-shadow-md">Strategy</span>
            </motion.div>

            {/* CARD 2: COMPLIANCE (Shield) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, borderColor: "rgba(229, 208, 149, 0.4)", transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-48 bg-[#FDFCF0]/5 border border-[#FDFCF0]/10 rounded flex items-end p-6 pb-2 mt-8 overflow-hidden cursor-pointer group"
            >
               {/* Animated Background Image - AUTO SCALE ON ENTRY */}
               <motion.div 
                 initial={{ scale: 1.2, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 0.6 }} // Visible by default, no hover needed
                 whileHover={{ scale: 1.1, opacity: 0.8, transition: { duration: 0.5 } }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                 className="absolute inset-0"
               >
                 <Image 
                   src="/shield-icon.jpg" 
                   alt="Compliance Abstract" 
                   fill 
                   className="object-cover object-center"
                 />
               </motion.div>
               {/* Label */}
               <span className="relative z-10 text-[#E5D095] font-bold text-lg drop-shadow-md">Compliance</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}