"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm"; // <--- Import the new component

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
        cta: "Sign Up Free",
        link: "/contact?plan=ifrs_free",
        isFree: true
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
        cta: "Sign Up Free",
        link: "/contact?plan=ma_free",
        isFree: true // <--- Add this flag to Free tiers
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
  },
  tax: {
    title: "Tax Updates & Risk Strategy",
    description: "For entities operating in UK & Pakistan requiring strict compliance and efficiency.",
    tiers: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        features: [
          "Key tax deadline alerts",
          "Regulatory updates (UK/Pak)",
          "Monthly compliance tips"
        ],
        cta: "Sign Up Free",
        link: "/contact?plan=tax_free",
        isFree: true
      },
      {
        name: "Professional",
        price: "$25",
        period: "/month",
        popular: true,
        features: [
          "In-depth tax impact analysis",
          "Cross-border structuring guides",
          "Risk mitigation strategies",
          "Quarterly Q&A sessions"
        ],
        cta: "Coming Soon"
      },
      {
        name: "Enterprise",
        price: "$75",
        period: "/month",
        features: [
          "Bespoke tax risk assessment",
          "Priority filing advisory",
          "Direct access to tax partners",
          "Custom strategy workshops"
        ],
        cta: "Coming Soon"
      }
    ]
  }
};

export default function NewsletterSection() {
  const [activeTab, setActiveTab] = useState<'ifrs' | 'ma' | 'tax'>('ifrs');

  return (
    <div className="w-full min-h-[600px]">
      {/* TABS */}
      <div className="flex justify-center mb-10 px-4">
        <div className="inline-flex flex-col md:flex-row bg-[#1a1a1a] p-1 rounded-lg border border-[#FDFCF0]/10 w-full md:w-auto">
        <button
          onClick={() => setActiveTab('ifrs')}
          className={`px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
            activeTab === 'ifrs'
              ? "bg-[#E5D095] text-[#050505] shadow-lg"
              : "text-[#FDFCF0]/60 hover:text-[#FDFCF0]"
          }`}
        >
          IFRS & Amendments
        </button>
        <button
          onClick={() => setActiveTab('ma')}
          className={`px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
            activeTab === 'ma'
              ? "bg-[#E5D095] text-[#050505] shadow-lg"
              : "text-[#FDFCF0]/60 hover:text-[#FDFCF0]"
          }`}
        >
          M&A & AI Strategy
        </button>
        <button
          onClick={() => setActiveTab('tax')}
          className={`px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
            activeTab === 'tax'
              ? "bg-[#E5D095] text-[#050505] shadow-lg"
              : "text-[#FDFCF0]/60 hover:text-[#FDFCF0]"
          }`}
        >
          Tax & Risk
        </button>
        </div>
      </div>
      
      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <m.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#FDFCF0] mb-4">
              {PLANS[activeTab].title}
            </h2>
            <p className="text-[#FDFCF0]/60 max-w-2xl mx-auto">
              {PLANS[activeTab].description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            {PLANS[activeTab].tiers.map((tier, index) => (
              <m.div 
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border flex flex-col transition-all duration-500 group h-full ${
                  tier.popular 
                    ? 'bg-[#1a1a1a] border-[#E5D095] shadow-[0_0_50px_rgba(229,208,149,0.15)] md:scale-105 z-10' 
                    : 'bg-[#0a0a0a]/40 border-[#FDFCF0]/10 hover:border-[#FDFCF0]/30 hover:bg-[#1a1a1a]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E5D095] to-[#bfa15f] text-[#050505] text-[10px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* HEADER */}
                <div className="mb-6 text-center">
                  <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${tier.popular ? 'text-[#E5D095]' : 'text-[#FDFCF0]/60'}`}>{tier.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-serif text-[#FDFCF0]">{tier.price}</span>
                    <span className="text-[#FDFCF0]/40 text-sm self-end mb-2">{tier.period}</span>
                  </div>
                </div>

                <div className={`w-full h-px mb-6 ${tier.popular ? 'bg-gradient-to-r from-transparent via-[#E5D095]/50 to-transparent' : 'bg-[#FDFCF0]/10'}`} />

                {/* FEATURES */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#FDFCF0]/80 font-light">
                      <span className={`mt-1 flex-shrink-0 ${tier.popular ? 'text-[#E5D095]' : 'text-[#FDFCF0]/40'}`}>
                        {tier.popular ? '✦' : '✓'}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* DYNAMIC BUTTON LOGIC */}
                <div className="mt-auto">
                  {tier.isFree ? (
                    // If Free, show the Input Form (Database Entry)
                    <SubscribeForm plan={tier.name} />
                  ) : (
                    // If Paid, show the Link to Contact Page (Sales Lead)
                    <Link 
                      href={tier.link || "/contact"}
                      className={`block w-full text-center py-4 rounded text-xs font-bold uppercase tracking-widest transition-all ${
                      tier.popular
                        ? 'bg-[#E5D095] text-[#050505] hover:bg-[#FDFCF0] shadow-[0_0_20px_rgba(229,208,149,0.3)]'
                        : 'border border-[#FDFCF0]/20 text-[#FDFCF0] hover:border-[#E5D095] hover:text-[#E5D095]'
                    }`}>
                      {tier.cta}
                    </Link>
                  )}
                </div>

              </m.div>
            ))}
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  );
}