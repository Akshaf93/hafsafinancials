export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-[#FDFCF0]/30 uppercase tracking-[0.3em] mb-10">
          Trusted Globally
        </p>
        
        <div className="relative">
          <span className="text-8xl text-[#E5D095] absolute -top-10 -left-10 opacity-20 font-serif">"</span>
          <p className="text-2xl md:text-3xl text-[#FDFCF0] font-light leading-relaxed italic mb-8">
            Hafsa Financials bridged the gap between complex IFRS compliance and business strategy. 
            Their hybrid approach saved us weeks of manual work.
          </p>
          <div>
            <h4 className="font-bold text-[#E5D095] text-lg">CFO, Mid-Market Logistics Firm</h4>
            <p className="text-sm text-[#FDFCF0]/50">Dubai, UAE</p>
          </div>
        </div>
    </div>
  );
}