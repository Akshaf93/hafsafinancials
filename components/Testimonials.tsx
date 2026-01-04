export default function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by Finance Leaders In
        </p>
        
        {/* Logos (Placeholders for now) */}
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale mb-16">
           {/* You can replace these with actual SVGs later */}
           <span className="text-2xl font-bold text-gray-300">UAE CORP</span>
           <span className="text-2xl font-bold text-gray-300">SAUDI GROUP</span>
           <span className="text-2xl font-bold text-gray-300">UK FINTECH</span>
           <span className="text-2xl font-bold text-gray-300">US HOLDINGS</span>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-10 relative">
          <span className="text-6xl text-brand-gold absolute -top-4 -left-2 opacity-50">"</span>
          <p className="text-xl text-brand-dark font-medium italic mb-6">
            Hafsa Financials bridged the gap between complex IFRS compliance and practical business strategy. 
            Their hybrid AI approach saved us weeks of manual reconciliation.
          </p>
          <div>
            <h4 className="font-bold text-brand-blue">CFO, Mid-Market Logistics Firm</h4>
            <p className="text-xs text-gray-500">Dubai, UAE</p>
          </div>
        </div>
      </div>
    </section>
  );
}