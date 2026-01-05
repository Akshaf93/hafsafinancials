import Hero from "@/components/Hero"; // Import the new Hero
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";
import Link from "next/link"; // Required for the CTA below

export default function Home() {
  return (
    <main className="bg-white">
      
      {/* 1. HERO SECTION (New & Focused) */}
      <Hero />

      {/* 2. KEY HIGHLIGHTS BAR [Source: 7-10] */}
      {/* Kept separate to act as a bridge between Hero and Services */}
      <div className="relative -mt-10 max-w-6xl mx-auto px-6 z-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b-4 border-brand-gold">
          <div className="space-y-2">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-bold text-brand-dark">Trusted Advisory</h3>
            <p className="text-sm text-gray-500">IFRS & Financial Excellence</p>
          </div>
          <div className="space-y-2 border-l-0 md:border-l border-gray-100">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold text-brand-dark">Tailored for All</h3>
            <p className="text-sm text-gray-500">Startups to Large Enterprises</p>
          </div>
          <div className="space-y-2 border-l-0 md:border-l border-gray-100">
            <div className="text-3xl mb-2">👨‍💻</div>
            <h3 className="font-bold text-brand-dark">Expert Team</h3>
            <p className="text-sm text-gray-500">CAs, CFAs, FRMs & IT Auditors</p>
          </div>
        </div>
      </div>

      {/* 3. SERVICES PREVIEW */}
      <ServicesOverview />

      {/* 4. HYBRID DELIVERY MODEL */}
      <HybridModel />

      {/* 5. INSIGHTS & NEWSLETTERS */}
      <InsightsPreview />

      {/* 6. SOCIAL PROOF */}
      <Testimonials />
      
      {/* 7. FINAL CTA (Before Footer) */}
      <section className="py-24 px-6 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-brand-dark">Ready to Optimize Your Financial Strategy?</h2>
          <p className="text-gray-600">
            Join the businesses in UAE, UK, and USA trusting Hafsa Financials for their IFRS and Strategic needs.
          </p>
          <Link href="/pricing" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
            View Pricing Bundles
          </Link>
        </div>
      </section>

    </main>
  );
}