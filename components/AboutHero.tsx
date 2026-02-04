"use client";

import Image from "next/image";
import { m } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGE - LCP OPTIMIZED */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-hero.jpg" // Verify this path matches your actual file
          alt="Hafsa Financials Office"
          fill
          // 1. CRITICAL: Priority tells the browser to load this ASAP
          priority={true} 
          // 2. Sizes helps the browser pick the right file size for mobile vs desktop
          sizes="100vw"
          className="object-cover opacity-60"
          // 3. Ensure no 'framer-motion' or 'opacity-0' class is on this Image
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <m.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-[#FDFCF0] mb-6"
        >
          Our <span className="text-[#E5D095]">Legacy</span>
        </m.h1>
        
        <m.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#FDFCF0]/80 font-light max-w-2xl mx-auto"
        >
          Built on a foundation of integrity, precision, and global expertise.
        </m.p>
      </div>
    </section>
  );
}