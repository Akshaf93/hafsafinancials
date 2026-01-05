"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      
      {/* --- 1. BACKGROUND ART (Abstract Blue/Gold) --- */}
      {/* We use a specific high-res Unsplash image that matches your "Royal Blue & Gold" theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract Financial Art"
          fill
          className="object-cover"
          priority
        />
        
        {/* --- 2. THE COLOR SCHEME TWEAK --- */}
        {/* Instead of solid blue, we use a sophisticated gradient overlay.
            This makes the text readable while letting the 'Art' shine through. */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-brand-dark/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT: CONTENT --- */}
        <div className="space-y-8">
          
          {/* Trust Badge - Glassmorphism Style */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#d4af37]"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              Global Financial Advisory
            </span>
          </motion.div>

          {/* Headline - Clean & Sharp */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold drop-shadow-sm">
              Financial Excellence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-blue-100/80 font-light leading-relaxed max-w-xl border-l-2 border-brand-gold/50 pl-6"
          >
            Empowering businesses in <span className="text-white font-medium">UAE, UK, USA, & Pakistan</span> with IFRS-ready, AI-accelerated, and human-judged financial architecture.
          </motion.p>

          {/* CTA Buttons - Gold & Glass */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 pt-4"
          >
            <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              Get a Consultation
            </button>
            <Link href="/services" className="px-8 py-4 rounded-lg font-bold text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
              Explore Services
              <span className="group-hover:translate-x-1 transition-transform text-brand-gold">→</span>
            </Link>
          </motion.div>
        </div>

        {/* --- RIGHT: ABSTRACT VISUAL (Instead of Dashboard Card) --- */}
        {/* We let the background art take center stage, but add a 
            minimalist 'Glass Card' floating here to show the 'Human + AI' metric. */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex justify-end"
        >
          <div className="relative p-8 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl max-w-sm w-full shadow-2xl">
            
            {/* Decorative Gold Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-1">Our Model</h3>
                <p className="text-2xl font-light text-white">70% Human Expertise</p>
                <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-brand-gold"
                  />
                </div>
              </div>

              <div>
                <p className="text-2xl font-light text-white">30% AI Intelligence</p>
                <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "30%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-full bg-cyan-400"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Audit Defensible</span>
                <span className="text-white">● ● ●</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}