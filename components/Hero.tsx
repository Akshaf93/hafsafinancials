"use client";

import { motion, useTransform, useMotionValue, MotionValue } from "framer-motion";
import Link from "next/link";

const WaveLine = ({ delay, opacity, yOffset, mouseX, mouseY, index }: { delay: number; opacity: number; yOffset: number; mouseX: MotionValue<number>; mouseY: MotionValue<number>; index: number }) => {
  const x = useTransform(mouseX, [-0.5, 0.5], [-30 * (index * 0.1 + 1), 30 * (index * 0.1 + 1)]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-15 * (index * 0.1 + 1), 15 * (index * 0.1 + 1)]);

  return (
    <motion.div
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: opacity }}
      transition={{ duration: 2, delay: 0.5 }}
      className="absolute w-[200%] -left-1/2"
      style={{ top: `${50 + yOffset}%`, x, y }}
    >
    <svg viewBox="0 0 1440 320" className="w-full h-[300px] md:h-[500px] fill-none">
      <motion.path
        d="M0,160 C320,300,420,0,740,160 C1060,320,1160,0,1480,160"
        stroke="url(#gold-gradient)"
        strokeWidth="2"
        fill="none"
        animate={{
          d: [
            "M0,160 C320,300,420,0,740,160 C1060,320,1160,0,1480,160",
            "M0,160 C320,0,420,300,740,160 C1060,0,1160,300,1480,160",
            "M0,160 C320,300,420,0,740,160 C1060,320,1160,0,1480,160",
          ],
        }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: delay }}
      />
      <defs>
        <linearGradient id="gold-gradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="#E5D095" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#E5D095" stopOpacity="1" />
          <stop offset="80%" stopColor="#E5D095" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
  );
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX / width) - 0.5);
    mouseY.set((clientY / height) - 0.5);
  };
  
  const lines = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    delay: i * 0.2,
    opacity: 1 - i * 0.05,
    yOffset: i * 3,
  }));

  return (
    <section onMouseMove={handleMouseMove} className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-16 pb-0 md:pt-24 md:pb-0">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5D095]/10 via-[#050505] to-[#050505]" />
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 pointer-events-none perspective-[1000px]">
        <div className="relative w-full h-full transform rotate-x-12 scale-125">
           {lines.map((line, i) => (
             <WaveLine key={line.id} {...line} mouseX={mouseX} mouseY={mouseY} index={i} />
           ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-3 md:space-y-5"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-brand-gold/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mx-auto"
        >
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shadow-[0_0_10px_#d4af37]"></span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-gold/80">
            Audit-Ready Intelligence
          </span>
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shadow-[0_0_10px_#d4af37]"></span>
        </motion.div>

        {/* Typography */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
          <span className="block pb-12 md:pb-20 md:-mb-6">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block py-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Strategic
            </motion.span>
          </span>
          <span className="block relative z-10">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-brand-gold"
              style={{ textShadow: "0 0 30px rgba(229, 208, 149, 0.6), 0 0 60px rgba(229, 208, 149, 0.3)" }}
            >
              Excellence
            </motion.span>
            <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.2 }}
               transition={{ delay: 1 }}
               className="absolute top-full left-0 w-full transform -scale-y-100 blur-sm text-brand-gold/50 pointer-events-none"
            >
              Excellence
            </motion.span>
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-[#FDFCF0]/60 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Empowering global enterprises with <span className="text-[#FDFCF0] font-normal">IFRS Precision</span> & <span className="text-[#FDFCF0] font-normal">AI Acceleration</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 md:pt-8"
        >
          <button className="group relative px-6 py-2.5 sm:px-8 sm:py-3 bg-brand-gold text-brand-dark font-bold text-sm sm:text-base rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] transition-all">
            <span className="relative z-10 group-hover:text-white transition-colors">Start Consultation</span>
            <div className="absolute inset-0 bg-brand-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500 ease-out" />
          </button>
          
          <Link href="/services" className="text-white/80 hover:text-white font-medium text-sm sm:text-base flex items-center gap-2 sm:gap-3 transition-colors group">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all">
              ↓
            </div>
            <span>Explore Capabilities</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Integrated Tabs (Trust Signals) - Moved outside parallax container */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.3, duration: 0.8 }}
         className="relative z-10 mt-8 md:mt-12 border-t border-white/10 pt-6 md:pt-8 grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto text-center"
      >
          <div className="flex flex-col items-center gap-3">
             <div className="text-brand-gold text-2xl mb-2 drop-shadow-[0_0_15px_rgba(229,208,149,0.6)]">🛡️</div>
             <h3 className="text-white font-bold uppercase tracking-widest text-xs">Trusted Advisory</h3>
             <p className="text-gray-400 text-xs">IFRS & Financial Excellence</p>
          </div>
          <div className="flex flex-col items-center gap-3 relative">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10 hidden md:block"></div>
             <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10 hidden md:block"></div>
             <div className="text-brand-gold text-2xl mb-2 drop-shadow-[0_0_15px_rgba(229,208,149,0.6)]">🌍</div>
             <h3 className="text-white font-bold uppercase tracking-widest text-xs">Global Reach</h3>
             <p className="text-gray-400 text-xs">UK, UAE, USA & Pakistan</p>
          </div>
          <div className="flex flex-col items-center gap-3">
             <div className="text-brand-gold text-2xl mb-2 drop-shadow-[0_0_15px_rgba(229,208,149,0.6)]">👨‍💻</div>
             <h3 className="text-white font-bold uppercase tracking-widest text-xs">Expert Team</h3>
             <p className="text-gray-400 text-xs">CAs, CFAs, & FRMs</p>
          </div>
      </motion.div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_20%,#0a0f1e_100%)] opacity-70" />
      
    </section>
  );
}