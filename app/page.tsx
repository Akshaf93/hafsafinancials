import Hero from "@/components/Hero";
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";
// REMOVED: import GlobalReach from "@/components/GlobalReach";
import TeamPreview from "@/components/TeamPreview";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      
      {/* SECTION 1: HERO (Now includes World Map) */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden">
        <Hero />
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <ServicesOverview />
      </section>

      {/* REMOVED: SECTION 3: GLOBAL REACH */}
      
      {/* SECTION 3: HYBRID MODEL */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <HybridModel />
      </section>

      {/* SECTION 4: TEAM */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <TeamPreview />
      </section>

      {/* SECTION 5: INSIGHTS */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <InsightsPreview />
      </section>

      {/* SECTION 6: TESTIMONIALS & CTA */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-between">
        <div />
        <div className="flex-grow flex flex-col justify-center py-20">
            <Testimonials />
        </div>
        <div className="py-12 bg-[#FDFCF0]/5 border-t border-[#FDFCF0]/10 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-[#FDFCF0] mb-4">Ready to Start?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/pricing" className="bg-[#E5D095] text-[#050505] px-8 py-3 rounded-sm font-bold hover:bg-[#FDFCF0] transition-colors shadow-lg">
              View Pricing
            </Link>
            <Link href="/contact" className="border border-[#FDFCF0]/20 text-[#FDFCF0] px-8 py-3 rounded-sm font-bold hover:border-[#E5D095] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}