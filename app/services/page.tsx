import AuditTransformation from "@/components/AuditTabs"; // Case Study
import ServicesDetailed from "@/components/ServicesDetailed"; // Core Offerings
import GlobalReach from "@/components/GlobalReach"; // International Scope (Doc Page 13)
import ComplexityCalculator from "@/components/ComplexityCalculator"; // Pricing Tool (Doc Page 14)
import InsightsPreview from "@/components/InsightsPreview"; // Newsletters (Doc Page 7)

export default function ServicesPage() {
  return (
    // UPDATED: Removed fixed/bg-black. Added 'home-snap-trigger' to enable global snapping.
    <main className="w-full home-snap-trigger">
      
      {/* 1. CORE SERVICES (Detailed Grid) */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-24 pb-12">
         <ServicesDetailed />
      </section>

      {/* 2. GLOBAL REACH (Trust & Scale) */}
      {/* Removed bg-[#0a0a0a] to show global background */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <GlobalReach />
      </section>

      {/* 3. CASE STUDY (Proof of Competence) */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <div className="w-full">
          <AuditTransformation />
        </div>
      </section>

      {/* 4. INTERACTIVE PRICING (Engagement Tool) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0]">
            Transparent <span className="text-[#E5D095]">Investment</span>
          </h2>
          <p className="text-[#FDFCF0]/60 mt-4 text-lg font-light max-w-2xl mx-auto">
            "We believe in defensible pricing based on complexity, not ambiguity."
          </p>
        </div>
        <ComplexityCalculator />
        </div>
      </section>

       {/* 5. THOUGHT LEADERSHIP (Newsletters) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <InsightsPreview />
      </section>

    </main>
  );
}