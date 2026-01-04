import ComplexityCalculator from "@/components/ComplexityCalculator";
import HybridModel from "@/components/HybridModel";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <section className="bg-brand-blue text-white py-24 px-6 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 skew-x-12 transform origin-top translate-x-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hafsa Financials
          </h1>
          <p className="text-xl md:text-3xl text-brand-gold font-light tracking-wide">
            Empowering Businesses with Strategic Financial Excellence.
          </p>
          <p className="max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
            Trusted IFRS Advisory, Financial Architecture, and Risk Management for 
            global businesses in the UK, UAE, and USA.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-lg">
              Get a Consultation
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* 2. Hybrid Delivery Model (NEW) */}
      <HybridModel />
      
    </main>
  );
}