import ComplexityCalculator from "@/components/ComplexityCalculator";

export default function PricingPage() {
  return (
    <main className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0] mb-6">
            Transparent <span className="text-[#E5D095]">Investment</span>
          </h1>
          <p className="text-[#FDFCF0]/60 text-lg max-w-2xl mx-auto font-light">
            Clear, upfront pricing based on engagement complexity and scope. No hidden fees, just value-driven results.
          </p>
        </div>

        {/* Calculator Component */}
        <ComplexityCalculator />
        
        {/* Additional Context */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#FDFCF0]/30 uppercase tracking-widest">
            * Final quote subject to detailed scoping session
          </p>
        </div>

      </div>
    </main>
  );
}