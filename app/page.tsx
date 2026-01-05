import Hero from "@/components/Hero";
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      
      {/* 1. HERO SECTION (Includes the integrated trust signals) */}
      <Hero />

      {/* 2. SERVICES PREVIEW */}
      <ServicesOverview />

      {/* 3. HYBRID DELIVERY MODEL */}
      <HybridModel />

      {/* 4. INSIGHTS & NEWSLETTERS */}
      <InsightsPreview />

      {/* 5. SOCIAL PROOF */}
      <Testimonials />
      
      {/* 6. FINAL CTA (Before Footer) */}
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