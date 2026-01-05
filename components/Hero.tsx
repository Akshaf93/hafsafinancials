"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden pt-32 pb-40 px-6 min-h-[90vh] flex flex-col justify-center">
      
      {/* --- BACKGROUND VISUAL: ABSTRACT WORLD MAP [Source: 263] --- */}
      {/* This represents the "Global Presence" visual requested in the doc */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract Dot Grid Map */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated Pulse Points for Key Locations (UAE, UK, USA, PK) */}
          {/* UK */}
          <motion.circle cx="480" cy="130" r="4" fill="#d4af37" 
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }} 
            transition={{ duration: 3, repeat: Infinity }} 
          />
          {/* UAE */}
          <motion.circle cx="560" cy="210" r="4" fill="#d4af37" 
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }} 
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }} 
          />
          {/* Pakistan */}
          <motion.circle cx="600" cy="200" r="4" fill="#d4af37" 
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }} 
            transition={{ duration: 3, delay: 1, repeat: Infinity }} 
          />
          {/* USA (East Coast) */}
          <motion.circle cx="280" cy="160" r="4" fill="#d4af37" 
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }} 
            transition={{ duration: 3, delay: 1.5, repeat: Infinity }} 
          />
        </svg>
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT: CONTENT --- */}
        <div className="space-y-8 text-center lg:text-left">
          
          {/* Trust Badge [Source: 8] */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-900/50 border border-brand-gold/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">
              Trusted IFRS & Financial Advisory
            </span>
          </motion.div>

          {/* Main Headline [Source: 4] */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
          >
            Empowering Businesses with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Strategic Financial
            </span>
            <span className="block text-brand-gold mt-2">Excellence.</span>
          </motion.h1>

          {/* Sub-Headline / Description [Source: 262] */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Global advisory serving businesses in <span className="text-white font-semibold">UAE, Saudi Arabia, UK, Canada, Australia, USA, and Pakistan.</span>
          </motion.p>

          {/* CTA Buttons [Source: 5, 80] */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Get a Consultation
            </button>
            <Link href="/services" className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
              Explore Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Team Highlights [Source: 10] */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-medium text-blue-300 uppercase tracking-wide"
          >
            <span>Chartered Accountants</span> • <span>CFAs</span> • <span>FRMs</span> • <span>IT Auditors</span>
          </motion.div>
        </div>

        {/* --- RIGHT: INTERACTIVE DASHBOARD CARD (Abstract Visual) [Source: 6, 90] --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Abstract Glassmorphism Card representing 'Financial Clarity' */}
          <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-500 ease-out">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="h-3 w-32 bg-white/20 rounded-full"></div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            {/* Chart Area */}
            <div className="space-y-4">
              <div className="flex justify-between items-end h-32 gap-4">
                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                  <div key={i} className="w-full bg-brand-gold/80 rounded-t-sm relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="w-full bg-gradient-to-t from-brand-gold to-white/50 absolute bottom-0"
                    />
                  </div>
                ))}
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full"></div>
            </div>
            {/* Metric */}
            <div className="mt-6 flex justify-between items-center">
              <div>
                <div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
                <div className="h-6 w-24 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold font-bold text-sm">
                  +24.5%
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-300">IFRS Compliance</div>
                <div className="text-lg font-bold text-white">100%</div>
              </div>
            </div>
          </div>

          {/* Decorative Glow Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/50 blur-[100px] -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
}