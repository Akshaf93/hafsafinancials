"use client";

import { motion, Variants } from "framer-motion";

export default function FounderSignature() {
  // Animation variants for the "Write-on" effect
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2.5, 
        ease: "easeInOut", // Smooth start/end like real writing
        delay: 0.2
      }
    }
  };

  return (
    <div className="relative w-fit group cursor-pointer">
      <svg 
        width="280" 
        height="100" 
        viewBox="0 0 320 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* GLOW FILTER: Adds a subtle 'wet ink' shine */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. "Mirza" - The 'M' is large and looping */}
        <motion.path
          d="M 20 70 C 20 70, 25 30, 40 30 C 50 30, 50 80, 50 80 C 50 80, 60 40, 75 40 C 85 40, 85 70, 90 70 C 95 70, 100 60, 105 50"
          stroke="#E5D095"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        
        {/* "irza" - Fast scribbles connecting */}
        <motion.path
          d="M 105 50 C 110 45, 115 55, 120 55 C 125 55, 130 50, 135 50 C 140 50, 140 60, 145 60 C 150 60, 160 50, 165 45"
          stroke="#E5D095"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8 }} // Delays until 'M' is done
        />

        {/* 2. "Bilal" - Distinct 'B' with a strong vertical */}
        <motion.path
          d="M 180 20 L 180 80 M 180 50 C 180 50, 200 40, 205 50 C 210 60, 190 65, 185 65 C 185 65, 215 65, 220 75 C 225 85, 200 90, 180 90"
          stroke="#E5D095"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />

        {/* "ilal" - The finish */}
        <motion.path
          d="M 220 90 C 230 85, 235 70, 240 70 C 245 70, 250 80, 255 80 C 260 80, 260 60, 265 50 L 265 85 C 265 85, 275 90, 285 85"
          stroke="#E5D095"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        />

        {/* 3. The Executive Underline - Fast and decisive */}
        <motion.path
          d="M 15 105 C 80 115, 200 95, 310 100"
          stroke="#E5D095"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-60"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.6 }} // Fast swipe at the end
        />

        {/* Dot for the 'i' in Mirza */}
        <motion.circle
          cx="118"
          cy="35"
          r="3"
          fill="#E5D095"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, type: "spring" }}
          viewport={{ once: true }}
        />
        
        {/* Dot for the 'i' in Bilal */}
        <motion.circle
          cx="240"
          cy="55"
          r="3"
          fill="#E5D095"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6, type: "spring" }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
}