"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm"; // <--- Import the new component

const PLANS = {
  // ... (Keep your existing PLANS object exactly the same) ...
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
        isFree: true // <--- Add this flag to Free tiers
      },
      // ... keep other tiers same ...
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
      // ... keep other tiers same ...
    ]
  }
};

export default function NewsletterSection() {
  const [activeTab, setActiveTab] = useState<'ifrs' | 'ma'>('ifrs');

  return (
    <div className="w-full">
      {/* ... (Keep your existing TABS code exactly the same) ... */}
      
      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* ... (Keep title section same) ... */}

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
                {/* ... (Keep Header & Features code same) ... */}

                {/* DYNAMIC BUTTON LOGIC */}
                <div className="mt-auto">
                  {tier.isFree ? (
                    // If Free, show the Input Form (Database Entry)
                    <SubscribeForm plan={tier.name} />
                  ) : (
                    // If Paid, show the Link to Contact Page (Sales Lead)
                    <Link 
                      href={tier.link || "/contact"}
                      className={`block w-full text-center py-3 rounded text-xs font-bold uppercase tracking-widest transition-colors ${
                      tier.popular
                        ? 'bg-[#E5D095] text-[#050505] hover:bg-[#FDFCF0]'
                        : 'border border-[#FDFCF0]/20 text-[#FDFCF0] hover:border-[#E5D095] hover:text-[#E5D095]'
                    }`}>
                      {tier.cta}
                    </Link>
                  )}
                </div>

              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}