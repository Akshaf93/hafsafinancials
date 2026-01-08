"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FounderSignature from "@/components/FounderSignature"; // Ensure you have this file from previous steps

export default function OwnersMessage() {
  return (
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center h-full w-full">
      
      {/* LEFT: Headline & Signature */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:col-span-4 flex flex-col justify-center h-full"
      >
        <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.3em] mb-6">
          Owner's Message
        </h2>
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0] mb-8 leading-tight">
          A Note from <br />
          <span className="text-[#E5D095]">The Founder</span>
        </h1>
        
        <div className="mt-8 pt-8 border-t border-[#E5D095]/20">
            {/* REPLACED: Static text with Animated Signature */}
            <div className="mb-6 -ml-4 -rotate-2 origin-bottom-left select-none">
              <FounderSignature />
            </div>
            
            <h3 className="text-xl font-serif text-[#FDFCF0]">Mirza Muhammad <br/> Bilal Qasim Barlas</h3>
            <p className="text-[#E5D095] text-xs uppercase tracking-widest mt-2">Founder & President</p>
            <p className="text-[#FDFCF0]/40 text-xs mt-1">Hafsa Financials</p>

            <div className="mt-8">
              <Link href="/contact" className="px-8 py-3 border border-[#E5D095] text-[#E5D095] hover:bg-[#E5D095] hover:text-[#050505] transition-all duration-300 uppercase tracking-widest text-xs font-bold inline-block">
                Contact Founder
              </Link>
            </div>
        </div>
      </motion.div>

      {/* RIGHT: Message Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-8 bg-[#1a1a1a]/80 backdrop-blur-md border border-[#FDFCF0]/10 p-8 md:p-12 rounded-2xl relative max-h-[60vh] md:max-h-[70vh] overflow-y-auto shadow-2xl"
      >
         <div className="absolute top-6 right-8 text-[#E5D095]/5 font-serif text-9xl leading-none select-none pointer-events-none">"</div>

         <div className="space-y-6 text-[#FDFCF0]/80 font-light text-sm md:text-base leading-relaxed pr-2 relative z-10">
             <p>
                When I founded Hafsa Financials, the objective was clear: to build a financial advisory firm grounded in substance, integrity, and technical depth, not surface-level consultancy.
            </p>
            <p>
                In today’s environment, businesses face increasing complexity — evolving accounting standards, heightened regulatory scrutiny, financial risk, and rapidly changing technologies. In such conditions, decision-makers do not need opinions; they need clarity that can be defended. <strong>Hafsa Financials was established to meet that need.</strong>
            </p>
            <p>
                As an ACCA and Oxford Brookes University (OBU) finalist, my professional journey has been shaped by first-hand IFRS implementation, financial analysis, and advisory engagements, rather than purely academic interpretation. This experience has reinforced a core belief: <em>financial advice must be practical, judgment-driven, and execution-focused.</em>
            </p>
            <p>
                At Hafsa Financials, we deliberately combine human expertise with intelligent systems. While technology and AI enhance efficiency and insight, professional judgment, ethics, and accountability remain at the center of every engagement. This balance defines how we work and how we advise.
            </p>
            <p>
                Our firm serves clients across multiple jurisdictions, each with its own regulatory realities and business dynamics. Regardless of geography or size, our commitment remains the same — to deliver work that is technically sound, commercially relevant, and built to last.
            </p>
            <p>
                Hafsa Financials is not designed to be the largest advisory firm. It is designed to be trusted, respected, and relied upon.
            </p>
            <p>
                I personally stand behind every engagement undertaken by the firm and remain closely involved in ensuring that our standards, values, and discipline are upheld at all times.
            </p>
            <p className="text-[#E5D095] font-medium pt-4">
                I welcome you to Hafsa Financials and look forward to building a relationship founded on clarity, confidence, and long-term value.
            </p>
         </div>
      </motion.div>

    </div>
  );
}