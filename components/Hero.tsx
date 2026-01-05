"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Particle component for the "floating data" effect
const Particle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.8, 0], 
      y: [0, -100], 
      x: [0, Math.random() * 50 - 25] 
    }}
    transition={{ 
      duration: Math.random() * 3 + 2, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute w-1 h-1 bg-brand-gold rounded-full blur-[1px]"
    style={{ left: `${x}%`, top: `${y}%` }}
  />
);

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax effect for background
  const y2 = useTransform(scrollY, [0, 500], [0, -100]); // Reverse parallax for cards
  
  // Generate random particles only on client-side to avoid hydration mismatch
  const [particles, setParticles] = useState<{id: number, x: number, y: number, delay: number}[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(p);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-brand-dark">
      
      {/* --- LAYER 1: CINEMATIC BACKGROUND (Parallax) --- */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1639322537228-ad7117a39499?q=80&w=2664&auto=format&fit=crop"
          alt="Abstract Liquid Gold"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        {/* Deep Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-blue/90 to-brand-blue/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent" />
      </motion.div>

      {/* --- LAYER 2: ANIMATED PARTICLES --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="space-y-8">
          
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full overflow-hidden whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_15px_#d4af37] animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-gold/90">
              Future of Finance
            </span>
          </motion.div>

          {/* Headline with Staggered Reveal */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: 100 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, ease: "circOut" }}
                className="block"
              >
                Precision
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: 100 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white"
              >
                Meets Vision.
              </motion.span>
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg text-blue-100/70 font-light leading-relaxed max-w-xl"
          >
            A new era of financial architecture for the 
            <span className="text-white font-medium mx-1">Global Enterprise</span>. 
            Blending human IFRS judgment with the computational power of AI.
          </motion.p>

          {/* Magnetic Buttons (Standard CSS hover effects) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-5 pt-6"
          >
            <button className="relative px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-lg overflow-hidden group shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors">Start Consultation</span>
              <div className="absolute inset-0 bg-brand-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </button>
            
            <Link href="/services" className="px-8 py-4 rounded-lg font-bold text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-3">
              <span>Our Expertise</span>
              <span className="text-brand-gold">↓</span>
            </Link>
          </motion.div>
        </div>

        {/* --- RIGHT: 3D FLOATING GLASS CARDS --- */}
        <motion.div 
          style={{ y: y2 }}
          className="hidden lg:block relative h-[600px] w-full perspective-1000"
        >
          {/* Main Glass Card */}
          <motion.div 
            initial={{ rotateX: 20, rotateY: -20, opacity: 0 }}
            animate={{ rotateX: 0, rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-20 left-10 w-80 h-96 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl z-20"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-xl">
                ✦
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Accuracy</p>
                <p className="text-2xl font-bold text-white">99.9%</p>
              </div>
            </div>
            <div className="space-y-4">
               <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
                 <motion.div 
                   animate={{ width: ["0%", "80%"] }} 
                   transition={{ duration: 2, delay: 1 }} 
                   className="h-full bg-brand-gold" 
                  />
               </div>
               <div className="h-1 bg-white/10 rounded-full w-2/3 overflow-hidden">
                 <motion.div 
                   animate={{ width: ["0%", "60%"] }} 
                   transition={{ duration: 2, delay: 1.2 }} 
                   className="h-full bg-blue-400" 
                  />
               </div>
            </div>
            <div className="mt-12">
               <p className="text-sm text-gray-400 mb-2">Audit Readiness</p>
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-brand-dark"></div>
                 ))}
                 <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold text-xs z-10 border-2 border-brand-dark">✓</div>
               </div>
            </div>
          </motion.div>

          {/* Floating Secondary Card (Behind) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -20, 0] }}
            transition={{ 
              opacity: { delay: 0.5, duration: 1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-60 right-10 w-72 h-80 bg-brand-blue/30 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 z-10"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-3xl" />
             <p className="text-xs text-brand-gold uppercase tracking-widest mb-4">Live Analysis</p>
             <div className="flex gap-2 items-end h-32">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + (i*0.1), duration: 1 }}
                    className="w-full bg-white/20 rounded-t-sm"
                  />
                ))}
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}