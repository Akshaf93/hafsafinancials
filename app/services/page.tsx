import AuditTransformation from "@/components/AuditTabs"; 
import ServicesDetailed from "@/components/ServicesDetailed"; 
// Removed ComplexityCalculator import
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Hafsa Financials",
};

export default function ServicesPage() {
  return (
    <main className="w-full home-snap-trigger">
      
      {/* SECTION 1: Service Offerings (Handles its own snap sections) */}
      <ServicesDetailed />

      {/* SECTION 2: Case Study */}
      {/* UPDATED: Changed min-h-screen to h-screen and added overflow-hidden to fix 'peeking' */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10 bg-[#0a0a0a] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <AuditTransformation />
        </div>
      </section>

      {/* SECTION 3: Pricing & CTA */}
      <section className="h-screen w-full flex flex-col items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10 bg-[#0a0a0a]/50">
        <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0] mb-8">
                Defensible <span className="text-[#E5D095]">Pricing</span>
            </h2>
            
            <p className="text-[#FDFCF0]/60 max-w-2xl mx-auto mb-12 text-lg">
              We operate on a transparency-first model. Explore our complexity-based pricing tiers or get a custom quote for your specific jurisdiction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/pricing"
                className="px-8 py-4 bg-[#E5D095] text-[#050505] font-bold uppercase tracking-widest hover:bg-[#FDFCF0] transition-colors min-w-[200px]"
              >
                View Pricing Model
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border border-[#FDFCF0]/20 text-[#FDFCF0] font-bold uppercase tracking-widest hover:border-[#E5D095] hover:text-[#E5D095] transition-colors min-w-[200px]"
              >
                Start Engagement
              </Link>
            </div>
        </div>
      </section>

    </main>
  );
}