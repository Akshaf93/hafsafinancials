import AuditTransformation from "@/components/AuditTabs"; // Case Study
import ServicesDetailed from "@/components/ServicesDetailed"; // Core Offerings
import GlobalReach from "@/components/GlobalReach"; // International Scope (Doc Page 13)
import ComplexityCalculator from "@/components/ComplexityCalculator"; // Pricing Tool (Doc Page 14)
import InsightsPreview from "@/components/InsightsPreview"; // Newsletters (Doc Page 7)

export default function ServicesPage() {
  return (
    <main className="fixed inset-0 bg-[#050505] overflow-y-scroll snap-y snap-mandatory scroll-smooth z-0">
      
      {/* 1. CORE SERVICES (Detailed Grid) */}
      {/* Source: HAFSA FINANCIALS.pdf (Pages 2-3) */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-24 pb-12">
         <ServicesDetailed />
      </section>

      {/* 2. GLOBAL REACH (Trust & Scale) */}
      {/* Source: HAFSA FINANCIALS.pdf (Page 13 - "Global Presence") */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 bg-[#0a0a0a] border-t border-[#FDFCF0]/10">
        <GlobalReach />
      </section>

      {/* 3. CASE STUDY (Proof of Competence) */}
      {/* Source: Internal Audit.docx (Implementation Story) */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <div className="w-full">
          <AuditTransformation />
        </div>
      </section>

      {/* 4. INTERACTIVE PRICING (Engagement Tool) */}
      {/* Source: HAFSA FINANCIALS.pdf (Page 14 - "Complexity-Based Pricing") */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 bg-[#0a0a0a] border-t border-[#FDFCF0]/10">
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
       {/* Source: HAFSA FINANCIALS.pdf (Page 7 - "Stay Ahead with Our Insights") */}
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 border-t border-[#FDFCF0]/10">
        <InsightsPreview />
      </section>

    </main>
  );
}