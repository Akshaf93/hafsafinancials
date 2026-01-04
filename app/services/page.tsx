import ServicesOverview from "@/components/ServicesOverview";

export default function ServicesPage() {
  return (
    <main className="pt-10 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Tailored financial architecture, IFRS advisory, and risk management for sole proprietors to large enterprises[cite: 9].
          </p>
        </div>

        {/* Reusing the Interactive Tiles Component here, but you can expand this 
            section with full text blocks for "IFRS Advisory" etc. later. */}
        <ServicesOverview />
        
        {/* Additional Detail Section (Example for IFRS Source: 20) */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h3 className="text-2xl font-bold text-brand-blue mb-4">IFRS Advisory & Transition</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We guide businesses from sole proprietors to large enterprises through complex IFRS implementations, 
              including IFRS 9, 15, 16, and 17. Our approach ensures policy alignment and audit readiness.
            </p>
            <ul className="space-y-2">
              {["Accounting Policy Development", "Financial Statement Review", "Complex Standard Interpretation"].map(item => (
                <li key={item} className="flex items-center text-gray-700">
                  <span className="text-brand-gold mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
             <h4 className="font-bold text-brand-dark mb-2">Why Choose Us?</h4>
             <p className="text-sm text-gray-600">
               "Clients with complex IFRS needs will recognize the value of our specialized expertise." [cite: 118]
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}