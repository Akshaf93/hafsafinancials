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
    // 1. SCROLL SNAP CONTAINER
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-transparent">
      
      {/* SECTION 1: HERO */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden">
        <Hero />
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center bg-transparent">
        <ServicesOverview />
      </section>

      {/* SECTION 3: GLOBAL REACH */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center bg-transparent">
        <GlobalReach />
      </section>

      {/* SECTION 4: HYBRID MODEL */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center bg-transparent">
        <HybridModel />
      </section>

      {/* SECTION 5: TEAM */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center bg-transparent">
        <TeamPreview />
      </section>

      {/* SECTION 6: INSIGHTS */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center bg-transparent">
        <InsightsPreview />
      </section>

      {/* SECTION 7: TESTIMONIALS & CTA (Combined to fit 1 screen or split if needed) */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center bg-transparent">
        <div className="flex-grow flex flex-col justify-center">
            <Testimonials />
        </div>
        
        {/* Footer CTA Mini-Section */}
        <div className="py-12 bg-[#FDFCF0]/5 border-t border-[#FDFCF0]/10 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-[#FDFCF0] mb-4">Ready to Start?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/pricing" className="bg-[#D4AF37] text-[#050505] px-8 py-3 rounded font-bold hover:bg-[#FDFCF0] transition-colors">
              View Pricing
            </Link>
            <Link href="/contact" className="border border-[#FDFCF0]/20 text-[#FDFCF0] px-8 py-3 rounded font-bold hover:border-[#D4AF37] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}