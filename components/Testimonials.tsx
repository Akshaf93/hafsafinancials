export default function Testimonials() {
  return (
    <section className="py-20 bg-[#050505] border-t border-[#FDFCF0]/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-bold text-[#FDFCF0]/40 uppercase tracking-widest mb-8">
          Trusted by Finance Leaders In
        </p>
        
        {/* Logos (Placeholders for now) */}
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale mb-16">
           {/* You can replace these with actual SVGs later */}
           <span className="text-2xl font-bold text-[#FDFCF0]/30">UAE CORP</span>
           <span className="text-2xl font-bold text-[#FDFCF0]/30">SAUDI GROUP</span>
           <span className="text-2xl font-bold text-[#FDFCF0]/30">UK FINTECH</span>
           <span className="text-2xl font-bold text-[#FDFCF0]/30">US HOLDINGS</span>
        </div>

        <div className="max-w-4xl mx-auto bg-[#FDFCF0]/5 border border-[#FDFCF0]/10 rounded-2xl p-10 relative">
          <span className="text-6xl text-[#D4AF37] absolute -top-4 -left-2 opacity-50">"</span>
          <p className="text-xl text-[#FDFCF0] font-medium italic mb-6">
            Hafsa Financials bridged the gap between complex IFRS compliance and practical business strategy. 
            Their hybrid AI approach saved us weeks of manual reconciliation.
          </p>
          <div>
            <h4 className="font-bold text-[#D4AF37]">CFO, Mid-Market Logistics Firm</h4>
            <p className="text-xs text-[#FDFCF0]/60">Dubai, UAE</p>
          </div>
        </div>
      </div>
    </section>
  );
}