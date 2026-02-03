import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Link from "next/link";

// Dynamically import components that are below the fold
// This reduces the initial JavaScript payload significantly.
const ServicesOverview = dynamic(() => import("@/components/ServicesOverview"));
const HybridModel = dynamic(() => import("@/components/HybridModel"));
const TeamPreview = dynamic(() => import("@/components/TeamPreview"));
const InsightsPreview = dynamic(() => import("@/components/InsightsPreview"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  return (
    // We let the 'html' tag in globals.css handle the snap scrolling.
    <main className="w-full">
      
      {/* SECTION 1: HERO - Keep Static for Immediate LCP */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden">
        <Hero />
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-center">
        <ServicesOverview />
      </section>

      {/* SECTION 4: HYBRID MODEL */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-center">
        <HybridModel />
      </section>

      {/* SECTION 5: TEAM */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-center">
        <TeamPreview />
      </section>

      {/* SECTION 6: INSIGHTS */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-center">
        <InsightsPreview />
      </section>

      {/* SECTION 7: TESTIMONIALS & CTA */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-between">
        {/* Top Spacer */}
        <div />
        
        {/* Content Centered */}
        <div className="flex-grow flex flex-col justify-center py-20">
            <Testimonials />
        </div>
        
        {/* Footer CTA */}
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