import AuditTransformation from "@/components/AuditTabs"; // Case Study
import ServicesDetailed from "@/components/ServicesDetailed"; // Core Offerings
import GlobalReach from "@/components/GlobalReach"; // International Scope (Doc Page 13)
import ComplexityCalculator from "@/components/ComplexityCalculator"; // Pricing Tool (Doc Page 14)
import InsightsPreview from "@/components/InsightsPreview"; // Newsletters (Doc Page 7)

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20 bg-[#050505] min-h-screen">
      
      {/* 1. CORE SERVICES (Detailed Grid) */}
      {/* Source: HAFSA FINANCIALS.pdf (Pages 2-3) */}
      <section className="mb-24">
         <ServicesDetailed />
      </section>

      {/* 2. GLOBAL REACH (Trust & Scale) */}
      {/* Source: HAFSA FINANCIALS.pdf (Page 13 - "Global Presence") */}
      <section className="mb-24 relative">
        <GlobalReach />
      </section>

      {/* 3. CASE STUDY (Proof of Competence) */}
      {/* Source: Internal Audit.docx (Implementation Story) */}
      <section className="mb-24 relative">
        <AuditTransformation />
      </section>

      {/* 4. INTERACTIVE PRICING (Engagement Tool) */}
      {/* Source: HAFSA FINANCIALS.pdf (Page 14 - "Complexity-Based Pricing") */}
      <section className="mb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FDFCF0]">
            Transparent <span className="text-[#E5D095]">Investment</span>
          </h2>
          <p className="text-[#FDFCF0]/60 mt-4 text-lg font-light max-w-2xl mx-auto">
            "We believe in defensible pricing based on complexity, not ambiguity."
          </p>
        </div>
        <ComplexityCalculator />
      </section>

       {/* 5. THOUGHT LEADERSHIP (Newsletters) */}
       {/* Source: HAFSA FINANCIALS.pdf (Page 7 - "Stay Ahead with Our Insights") */}
      <section className="relative">
        <InsightsPreview />
      </section>

    </main>
  );
}