"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICE_TABS } from "./ServicesOverview";

export default function ServicesDetailed() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICE_TABS.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#1a1a1a] border border-[#FDFCF0]/10 rounded-xl p-8 hover:border-[#E5D095]/50 transition-colors overflow-hidden flex flex-col"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5D095]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-[#E5D095] text-xs font-bold uppercase tracking-widest mb-2">
                  {service.label}
                </h3>
                <h2 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] group-hover:text-white transition-colors">
                  {service.headline}
                </h2>
              </div>

              {/* Content */}
              <p className="text-[#FDFCF0]/70 leading-relaxed mb-8 flex-grow">
                {service.content}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-[#050505] text-[#FDFCF0]/60 text-[10px] uppercase tracking-wider rounded border border-[#FDFCF0]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[#FDFCF0]/10">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E5D095] hover:tracking-wide transition-all"
                >
                  Request Consultation <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}