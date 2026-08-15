"use client";

import { m, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import strategyIcon from "@/public/strategy-icon.png";
import shieldIcon from "@/public/shield-icon.jpg";

export default function TeamPreview() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.4, once: true });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] max-h-[1080px] flex items-center justify-center overflow-hidden border-t border-[#FDFCF0]/5 home-snap-trigger"
    >
      {/* Subtle Left-Side Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#E5D095]/10 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full opacity-60" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: EDITORIAL CONTENT --- */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 w-full flex flex-col items-start"
          >
            {/* Standardized Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-[#E5D095]"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E5D095]">
                Intellectual Capital
              </span>
            </div>

            {/* Standardized H2 */}
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#FDFCF0] leading-tight mb-5 tracking-tight">
              Expert Leadership.
            </h2>
            
            <p className="text-[14px] md:text-[15px] text-[#FDFCF0]/60 font-light leading-relaxed max-w-[500px] mb-6">
              We do not rely on standard staff-augmentation. We deploy multidisciplinary advisory teams combining the precision of Chartered Accountants with the strategic foresight of CFAs and the rigorous risk management of FRMs.
            </p>

            {/* Standardized Glassmorphism Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
               {["ACCA", "CFA", "FRM", "ICAEW", "CA"].map((badge, i) => (
                 <m.span 
                   key={badge} 
                   initial={{ opacity: 0, y: 10 }}
                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                   transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                   className="px-2.5 py-1 border border-[#FDFCF0]/15 text-[#FDFCF0]/80 text-[9px] font-bold rounded-sm uppercase tracking-widest bg-[#FDFCF0]/5 select-none"
                 >
                   {badge}
                 </m.span>
               ))}
            </div>

            {/* Editorial Link Out */}
            <Link 
              href="/team" 
              className="group inline-flex items-center gap-2 text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.15em] transition-all"
            >
              <span className="underline underline-offset-4 decoration-[#E5D095]/40 group-hover:decoration-[#E5D095]">Meet the Experts</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </m.div>

          {/* --- RIGHT SIDE: ANIMATED VISUAL CARDS --- */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4 md:gap-6 opacity-100">
              
              {/* CARD 1: STRATEGY */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                // Refined the card borders to match the glass aesthetic
                className="relative h-48 md:h-56 bg-[#050505]/50 backdrop-blur-sm border border-[#FDFCF0]/10 rounded-sm flex items-end p-5 md:p-6 overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                 <m.div 
                   initial={{ scale: 1.2, opacity: 0 }}
                   animate={isInView ? { scale: 1, opacity: 0.4 } : { scale: 1.2, opacity: 0 }} 
                   whileHover={{ scale: 1.05, opacity: 0.7, transition: { duration: 0.5 } }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="absolute inset-0"
                 >
                   <Image
                     src={strategyIcon}
                     alt="Strategy Abstract"
                     fill
                     sizes="(max-width: 768px) 50vw, 25vw"
                     placeholder="blur"
                     className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                 </m.div>
                 
                 <span className="relative z-10 text-[#E5D095] font-serif text-xl md:text-2xl drop-shadow-md">
                   Strategy.
                 </span>
              </m.div>

              {/* CARD 2: COMPLIANCE */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-48 md:h-56 bg-[#050505]/50 backdrop-blur-sm border border-[#FDFCF0]/10 rounded-sm flex items-end p-5 md:p-6 mt-8 md:mt-12 overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                 <m.div 
                   initial={{ scale: 1.2, opacity: 0 }}
                   animate={isInView ? { scale: 1, opacity: 0.4 } : { scale: 1.2, opacity: 0 }} 
                   whileHover={{ scale: 1.05, opacity: 0.7, transition: { duration: 0.5 } }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                   className="absolute inset-0"
                 >
                   <Image
                     src={shieldIcon}
                     alt="Compliance Abstract"
                     fill
                     sizes="(max-width: 768px) 50vw, 25vw"
                     placeholder="blur"
                     className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                   {/* Gradient overlay to ensure text readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                 </m.div>

                 <span className="relative z-10 text-[#E5D095] font-serif text-xl md:text-2xl drop-shadow-md">
                   Compliance.
                 </span>
              </m.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}