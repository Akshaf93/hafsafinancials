"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const PLANS = {
  ifrs: {
    title: "The IFRS & Amendments",
    description: "For finance professionals, auditors, and CFOs needing technical clarity.",
    tiers: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        features: [
          "Summary of latest IFRS updates",
          "Key amendments alerts",
          "Access to 1 archived issue/month"
        ],
        cta: "Sign Up Free"
      },
      {
        name: "Professional",
        price: "$15",
        period: "/month",
        popular: true,
        features: [
          "Full newsletter content",
          "Expert commentary & examples",
          "Access to full archive",
          "Bi-weekly delivery"
        ],
        cta: "Coming Soon"
      },
      {
        name: "Enterprise",
        price: "$50",
        period: "/month",
        features: [
          "Priority email support for queries",
          "Deep-dive analysis & case studies",
          "Direct access to IFRS experts",
          "PDF downloads & charts"
        ],
        cta: "Coming Soon"
      }
    ]
  },
  ma: {
    title: "M&A and AI Intelligence",
    description: "For business leaders, investors, and strategy teams navigating the future.",
    tiers: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        features: [
          "Highlights of M&A news",
          "Key AI application trends",
          "Monthly insights"
        ],
        cta: "Sign Up Free"
      },
      {
        name: "Professional",
        price: "$20",
        period: "/month",
        popular: true,
        features: [
          "Full expert analysis",
          "Deep-dive case studies",
          "Archive access",
          "Early invites to webinars"
        ],
        cta: "Coming Soon"
      },
      {
        name: "Enterprise",
        price: "$60",
        period: "/month",
        features: [
          "Executive interviews",
          "AI-driven modeling tips",
          "Priority Q&A with founder",
          "Advanced strategic insights"
        ],
        cta: "Coming Soon"
      }
    ]
  }
};

export default function NewsletterSection() {
  const [activeTab, setActiveTab] = useState<'ifrs' | 'ma'>('ifrs');

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#FDFCF0] mb-6">
            Direct to <span className="text-[#E5D095]">Inbox</span>
        </h2>
        <p className="text-[#FDFCF0]/60 max-w-2xl mx-auto text-lg">
            Subscribe to our specialized streams. Get models, regulatory alerts, and case studies delivered monthly.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#1a1a1a] border border-[#FDFCF0]/10 rounded-full p-1 flex">
          <button
            onClick={() => setActiveTab('ifrs')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === 'ifrs' 
                ? 'bg-[#E5D095] text-[#050505] shadow-[0_0_20px_rgba(229,208,149,0.3)]' 
                : 'text-[#FDFCF0]/60 hover:text-[#FDFCF0]'
            }`}
          >
            IFRS & Amendments
          </button>
          <button
            onClick={() => setActiveTab('ma')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === 'ma' 
                ? 'bg-[#E5D095] text-[#050505] shadow-[0_0_20px_rgba(229,208,149,0.3)]' 
                : 'text-[#FDFCF0]/60 hover:text-[#FDFCF0]'
            }`}
          >
            M&A & AI Strategy
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-serif text-[#FDFCF0] mb-2">{PLANS[activeTab].title}</h3>
            <p className="text-[#FDFCF0]/50 text-sm">{PLANS[activeTab].description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLANS[activeTab].tiers.map((tier) => (
              <div 
                key={tier.name}
                className={`relative p-8 rounded-2xl border flex flex-col ${
                  tier.popular 
                    ? 'bg-[#1a1a1a]/80 border-[#E5D095]/50 shadow-[0_0_30px_rgba(229,208,149,0.1)]' 
                    : 'bg-[#1a1a1a]/40 border-[#FDFCF0]/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E5D095] text-[#050505] text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-[#FDFCF0] font-bold mb-2">{tier.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif text-[#E5D095]">{tier.price}</span>
                    <span className="text-[#FDFCF0]/40 text-sm">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#FDFCF0]/70">
                      <span className="text-[#E5D095] mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded text-xs font-bold uppercase tracking-widest transition-colors ${
                  tier.popular
                    ? 'bg-[#E5D095] text-[#050505] hover:bg-[#FDFCF0]'
                    : 'border border-[#FDFCF0]/20 text-[#FDFCF0] hover:border-[#E5D095] hover:text-[#E5D095]'
                }`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* FOOTER */}
      <div className="mt-12 pt-12 border-t border-[#FDFCF0]/5 text-center">
        <Link href="/" className="text-[#FDFCF0]/40 hover:text-[#E5D095] text-xs font-bold uppercase tracking-widest transition-colors">
            ← Return Home
        </Link>
      </div>
    </div>
  );
}