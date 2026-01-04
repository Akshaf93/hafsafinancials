import ComplexityCalculator from "@/components/ComplexityCalculator";

export default function PricingPage() {
  return (
    <main className="pt-10 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mt-4">
            From "Starter" packages for micro-businesses to "Enterprise" solutions for multinationals.
          </p>
        </div>

        {/* 1. The Calculator (Dynamic) */}
        <div className="mb-20">
             <ComplexityCalculator />
        </div>

        {/* 2. The Bundles Table (Static Source: 58) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Starter */}
            <div className="p-8 hover:bg-blue-50 transition-colors group">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Starter</h3>
              <p className="text-sm text-gray-500 mb-6">Sole Proprietor / Micro</p>
              <div className="text-3xl font-bold text-brand-blue mb-6">$1.5k - $3k</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>IFRS Advisory Lite</li>
                <li>Basic Ratio Analysis</li>
                <li>Tax Filing Support</li>
              </ul>
              <button className="w-full py-2 border border-brand-blue text-brand-blue font-bold rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-all">Choose Starter</button>
            </div>

            {/* Growth */}
            <div className="p-8 hover:bg-blue-50 transition-colors group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Growth</h3>
              <p className="text-sm text-gray-500 mb-6">SMEs</p>
              <div className="text-3xl font-bold text-brand-blue mb-6">$5k - $10k</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>Full IFRS Advisory</li>
                <li>Business Analysis</li>
                <li>Risk Assessment</li>
                <li>KPI Dashboards</li>
              </ul>
              <button className="w-full py-2 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-dark transition-all">Choose Growth</button>
            </div>

            {/* Professional */}
            <div className="p-8 hover:bg-blue-50 transition-colors group">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Professional</h3>
              <p className="text-sm text-gray-500 mb-6">Medium Enterprises</p>
              <div className="text-3xl font-bold text-brand-blue mb-6">$12k - $25k</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>Financial Architect Services</li>
                <li>Stress Testing</li>
                <li>Internal Controls</li>
                <li>Tax Advisory</li>
              </ul>
              <button className="w-full py-2 border border-brand-blue text-brand-blue font-bold rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-all">Choose Pro</button>
            </div>

            {/* Enterprise */}
            <div className="p-8 bg-brand-dark text-white">
              <h3 className="text-xl font-bold text-brand-gold mb-2">Enterprise</h3>
              <p className="text-sm text-gray-400 mb-6">Large Corporates</p>
              <div className="text-3xl font-bold text-white mb-6">$30k+</div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Tailored Consultancy</li>
                <li>Custom Financial Models</li>
                <li>Multi-location Risk</li>
                <li>Strategic Advisory</li>
              </ul>
              <button className="w-full py-2 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-white transition-all">Contact Us</button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}