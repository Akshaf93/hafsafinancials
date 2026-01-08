import AuditTransformation from "@/components/AuditTabs"; 
import ServicesDetailed from "@/components/ServicesDetailed"; 
import ComplexityCalculator from "@/components/ComplexityCalculator"; 
import Link from "next/link";

export default function ServicesPage() {
  return (
    // UPDATED: Added 'home-snap-trigger' to enable global scroll snapping
    <main className="w-full home-snap-trigger">
      
      {/* SECTION 1: Services List */}
      <section className="min-h-screen w-full flex items-start justify-center snap-start snap-always relative px-6 pt-24 pb-12">
         <ServicesDetailed />
      </section>

      {/* SECTION 2: Case Study */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <div className="w-full py-20">
          <AuditTransformation />
        </div>
      </section>

      {/* SECTION 3: Pricing & CTA */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10 bg-[#0a0a0a]/50">
        <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0] mb-8">
                Defensible <span className="text-[#E5D095]">Pricing</span>
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
                <ComplexityCalculator />
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-[#FDFCF0]/60 text-sm">Ready to structure your financial future?</p>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-[#E5D095] text-[#050505] font-bold uppercase tracking-widest hover:bg-[#FDFCF0] transition-colors"
              >
                Start Engagement
              </Link>
            </div>
        </div>
      </section>

    </main>
  );
}