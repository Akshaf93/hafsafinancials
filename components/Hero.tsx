"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- ANIMATED GRID FLOOR (Adds Depth & Grounding) ---
const GridFloor = () => (
  <div className="absolute bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-none perspective-[1000px] opacity-30">
    <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,#1e3a8a_100%)] absolute top-0 left-0 z-10" />
    <div className="w-[200%] h-[200%] -ml-[50%] bg-[size:60px_60px] bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] transform rotate-x-[60deg] animate-grid-flow" />
  </div>
);

// --- FLOATING "DATA STREAM" LINES ---
const DataStream = ({ top, delay, duration }: any) => (
  <motion.div
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: "200%", opacity: [0, 1, 0] }}
    transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "linear" }}
    className="absolute h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent w-full z-10"
    style={{ top }}
  />
);

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Mouse Parallax Effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // Move up to 20px
      const y = (e.clientY / innerHeight - 0.5) * 20;
      springX.set(x);
      springY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  return (
    <section className="relative h-[95vh] min-h-[800px] flex items-center overflow-hidden bg-brand-dark">
      
      {/* --- LAYER 1: ARCHITECTURAL BACKDROP (Busy & Detailed) --- */}
      {/* High-rise buildings representing "Financial Architecture" & Structure */}
      <motion.div 
        style={{ y: yBg, x: springX, scale: 1.1 }} 
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          alt="Financial Architecture"
          fill
          className="object-cover opacity-20 grayscale brightness-75" 
          priority
        />
        {/* Overlay to tint it Royal Blue */}
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
      </motion.div>

      {/* --- LAYER 2: THE GRID FLOOR (Structure) --- */}
      <GridFloor />

      {/* --- LAYER 3: DATA STREAMS (Motion) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
         <DataStream top="20%" delay={0} duration={8} />
         <DataStream top="45%" delay={2} duration={12} />
         <DataStream top="70%" delay={4} duration={10} />
      </div>

      {/* --- LAYER 4: MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT: HERO TEXT (Span 7 cols) --- */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Animated "Signal" Badge */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1 h-6 items-end">
              {[1,2,3,4,5].map(i => (
                <motion.div 
                  key={i} 
                  animate={{ height: [10, 24, 10] }} 
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-brand-gold rounded-full"
                />
              ))}
            </div>
            <span className="text-brand-gold font-bold tracking-[0.2em] text-sm uppercase">
              Live from Dubai, London & NY
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight">
            Structure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-400">
              Your Growth.
            </span>
          </h1>
          
          <div className="h-1 w-32 bg-brand-gold rounded-full" />

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl border-l-4 border-white/10 pl-6">
            We architect financial clarity for the global enterprise. 
            Blending <span className="text-brand-gold font-bold">IFRS Precision</span> with <span className="text-cyan-400 font-bold">AI Intelligence</span>.
          </p>

          <div className="flex flex-wrap gap-6 pt-2">
            <button className="bg-brand-gold text-brand-dark px-10 py-5 rounded-sm font-bold text-lg hover:bg-white transition-all border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1">
              Start Consultation
            </button>
            <Link href="/services" className="group flex items-center gap-4 px-8 py-5 text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-dark transition-colors">
                ➔
              </div>
              <span className="font-bold">Explore Expertise</span>
            </Link>
          </div>
        </div>

        {/* --- RIGHT: THE "GLASS STACK" (Span 5 cols) --- */}
        {/* Instead of one abstract shape, a dense stack of actionable cards */}
        <motion.div 
          style={{ y: springY }}
          className="lg:col-span-5 hidden lg:flex flex-col gap-6"
        >
          {/* Card 1: The "Architect" Metric */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl">📊</div>
            <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-1">Financial Accuracy</h3>
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <motion.div animate={{ width: "99.9%" }} transition={{ duration: 2 }} className="h-full bg-brand-gold" />
            </div>
          </motion.div>

          {/* Card 2: The "Global" Map Preview */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className="bg-brand-blue/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-6"
          >
             <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center border border-white/10 relative">
                <div className="absolute inset-0 border border-brand-gold rounded-full animate-ping opacity-20"></div>
                🌍
             </div>
             <div>
               <h3 className="text-white font-bold text-lg">Global Advisory</h3>
               <p className="text-xs text-gray-400">Serving UK, UAE, USA & PK</p>
             </div>
          </motion.div>

          {/* Card 3: The "Hybrid" Badge */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.6 }}
             className="bg-gradient-to-r from-brand-gold/20 to-transparent border border-brand-gold/30 p-6 rounded-2xl"
          >
             <div className="flex justify-between items-center mb-2">
               <span className="text-brand-gold font-bold">Hybrid Model</span>
               <span className="text-white text-xs bg-white/10 px-2 py-1 rounded">Active</span>
             </div>
             <div className="flex gap-1 text-sm text-gray-300">
               <span>70% Human</span>
               <span className="text-brand-gold">•</span>
               <span>30% AI</span>
             </div>
          </motion.div>

        </motion.div>
      </div>

      {/* --- DECORATIVE: BACKGROUND TEXTURE --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/40 to-transparent pointer-events-none" />
    </section>
  );
}