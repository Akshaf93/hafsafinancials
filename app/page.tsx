import Hero from "@/components/Hero";
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";
import TeamPreview from "@/components/TeamPreview";

export default function Home() {
  return (
    // UPDATED: Removed fixed height & overflow-scroll. 
    // We let the 'html' tag in globals.css handle the snap scrolling.
    <main className="w-full">
      
      {/* SECTION 1: HERO */}
      {/* h-screen ensures it fills exactly one viewport for snapping */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden">
        <Hero />
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <ServicesOverview />
      </section>

      {/* SECTION 3: GLOBAL REACH (Merged into Hero? Or if separate, keep it) */}
      {/* If you are using the separate component, uncomment below: */}
      {/* <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <GlobalReach />
      </section> 
      */}

      {/* SECTION 4: HYBRID MODEL */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <HybridModel />
      </section>

      {/* SECTION 5: TEAM */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <TeamPreview />
      </section>

      {/* SECTION 6: INSIGHTS */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
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