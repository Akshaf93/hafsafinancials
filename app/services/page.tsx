import AuditTransformation from "@/components/AuditTabs"; 
import ServicesDetailed from "@/components/ServicesDetailed"; 
import GlobalReach from "@/components/GlobalReach"; 
import ComplexityCalculator from "@/components/ComplexityCalculator"; 
import InsightsPreview from "@/components/InsightsPreview"; 

export default function ServicesPage() {
  return (
    <main className="w-full home-snap-trigger">
      
      {/* 1. CORE SERVICES */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-24 pb-12">
         <ServicesDetailed />
      </section>

      {/* 2. GLOBAL REACH */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <GlobalReach />
      </section>

      {/* 3. CASE STUDY */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <div className="w-full">
          <AuditTransformation />
        </div>
      </section>

      {/* 4. PRICING TEASER (Calculator Only) */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10 bg-[#0a0a0a]/50">
        <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0] mb-8">
                Defensible <span className="text-[#E5D095]">Pricing</span>
            </h2>
            <div className="max-w-3xl mx-auto">
                <ComplexityCalculator />
            </div>
        </div>
      </section>

       {/* 5. INSIGHTS */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <InsightsPreview />
      </section>

    </main>
  );
}