import Hero from "@/components/Hero";
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";
import GlobalReach from "@/components/GlobalReach";
import TeamPreview from "@/components/TeamPreview";
import Link from "next/link";

export default function Home() {
  return (
    // Height Calculation: 100vh (Screen) - 80px (Navbar approx)
    // This creates a perfect scroll container below the header.
    <main className="h-[calc(100vh-80px)] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-transparent">
      
      {/* SECTION 1: HERO */}
      <section className="h-full w-full snap-start relative flex flex-col justify-center overflow-hidden">
        <Hero />
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="h-full w-full snap-start relative flex flex-col justify-center">
        <ServicesOverview />
      </section>

      {/* SECTION 3: GLOBAL REACH */}
      <section className="h-full w-full snap-start relative flex flex-col justify-center">
        <GlobalReach />
      </section>

      {/* SECTION 4: HYBRID MODEL */}
      <section className="h-full w-full snap-start relative flex flex-col justify-center">
        <HybridModel />
      </section>

      {/* SECTION 5: TEAM */}
      <section className="h-full w-full snap-start relative flex flex-col justify-center">
        <TeamPreview />
      </section>

      {/* SECTION 6: INSIGHTS */}
      <section className="h-full w-full snap-start relative flex flex-col justify-center">
        <InsightsPreview />
      </section>

      {/* SECTION 7: TESTIMONIALS & CTA */}
      <section className="h-full w-full snap-start relative flex flex-col justify-between">
        {/* Top Spacer */}
        <div />
        
        {/* Content Centered */}
        <div className="flex-grow flex flex-col justify-center">
            <Testimonials />
        </div>
        
        {/* Footer CTA (Sticks to bottom of this section) */}
        <div className="py-12 bg-[#FDFCF0]/5 border-t border-[#FDFCF0]/10 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-[#FDFCF0] mb-4">Ready to Start?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/pricing" className="bg-[#D4AF37] text-[#050505] px-8 py-3 rounded-sm font-bold hover:bg-[#FDFCF0] transition-colors shadow-lg">
              View Pricing
            </Link>
            <Link href="/contact" className="border border-[#FDFCF0]/20 text-[#FDFCF0] px-8 py-3 rounded-sm font-bold hover:border-[#D4AF37] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}