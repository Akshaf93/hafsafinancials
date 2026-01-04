import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white">
      
      {/* 1. HERO SECTION [Source: 3-6] */}
      <section className="bg-brand-blue text-white pt-28 pb-32 px-6 relative overflow-hidden">
        {/* Abstract Background Graphic */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/10 to-transparent skew-x-12 transform origin-top translate-x-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Empowering Businesses with <br/>
            <span className="text-brand-gold">Strategic Financial Excellence.</span>
          </h1>
          
          {/* Value Prop Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium border border-white/20">
            <span>IFRS-Ready</span>
            <span className="w-1 h-1 bg-brand-gold rounded-full"></span>
            <span>AI-Accelerated</span>
            <span className="w-1 h-1 bg-brand-gold rounded-full"></span>
            <span>Human-Judged</span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed font-light">
            Global Financial Advisory serving businesses in UAE, Saudi Arabia, UK, Canada, and Pakistan.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-gold/20">
              Get a Consultation
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* 2. KEY HIGHLIGHTS BAR [Source: 7-10] */}
      <div className="relative -mt-16 max-w-7xl mx-auto px-6 z-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b-4 border-brand-gold">
          <div className="space-y-2">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-bold text-brand-dark">Trusted Advisory</h3>
            <p className="text-sm text-gray-500">IFRS & Financial Excellence</p>
          </div>
          <div className="space-y-2 border-l-0 md:border-l border-gray-100">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold text-brand-dark">Tailored for All</h3>
            <p className="text-sm text-gray-500">Startups to Large Enterprises</p>
          </div>
          <div className="space-y-2 border-l-0 md:border-l border-gray-100">
            <div className="text-3xl mb-2">👨‍💻</div>
            <h3 className="font-bold text-brand-dark">Expert Team</h3>
            <p className="text-sm text-gray-500">CAs, CFAs, FRMs & IT Auditors</p>
          </div>
        </div>
      </div>

      {/* 3. SERVICES PREVIEW [Source: 11] */}
      <ServicesOverview />

      {/* 4. HYBRID DELIVERY MODEL [Source: 490] */}
      <HybridModel />

      {/* 5. INSIGHTS & NEWSLETTERS [Source: 68] */}
      <InsightsPreview />

      {/* 6. SOCIAL PROOF [Source: 13] */}
      <Testimonials />

    </main>
  );
}