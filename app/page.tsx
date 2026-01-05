import Hero from "@/components/Hero";
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";
import GlobalReach from "@/components/GlobalReach"; // New
import TeamPreview from "@/components/TeamPreview"; // New
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#050505]">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. SERVICES OVERVIEW (Interactive Tiles) */}
      <ServicesOverview />

      {/* 3. GLOBAL REACH (New: Visualizes Country List) */}
      <GlobalReach />

      {/* 4. HYBRID DELIVERY MODEL (70/30 Philosophy) */}
      <HybridModel />

      {/* 5. TEAM PREVIEW (New: Founder & Credentials) */}
      <TeamPreview />

      {/* 6. INSIGHTS & NEWSLETTERS */}
      <InsightsPreview />

      {/* 7. SOCIAL PROOF */}
      <Testimonials />
      
      {/* 8. FINAL CTA */}
      <section className="py-24 px-6 bg-[#FDFCF0] text-center border-t border-[#D4AF37]/20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-[#050505]">Ready to Optimize Your Financial Strategy?</h2>
          <p className="text-[#050505]/70">
            Join businesses in UAE, UK, and USA trusting Hafsa Financials for their IFRS and Strategic needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/pricing" className="bg-[#050505] text-[#D4AF37] px-8 py-3 rounded-sm font-bold hover:bg-[#1a1a1a] transition-colors shadow-lg">
              View Pricing Bundles
            </Link>
            <Link href="/contact" className="border border-[#050505]/20 text-[#050505] px-8 py-3 rounded-sm font-bold hover:border-[#050505] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}