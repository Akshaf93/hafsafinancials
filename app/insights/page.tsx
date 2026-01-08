import NewsletterSection from "@/components/NewsletterSection";
import ResourcesGrid from "@/components/ResourcesGrid";
import Link from "next/link";

export default function InsightsPage() {
  return (
    <main className="w-full bg-[#050505] min-h-screen">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full pt-32 pb-20 px-6 border-b border-[#FDFCF0]/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5D095]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-[#E5D095] text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Knowledge Hub
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0] mb-8 leading-tight">
            Stay Ahead with <span className="text-[#E5D095]">Strategic Intelligence</span>
          </h1>
          <p className="text-[#FDFCF0]/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Expert commentary on IFRS updates, M&A trends, and AI-driven financial modeling. 
            Relevant for professionals across the UK, UAE, USA, and Pakistan.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link 
                href="#newsletters" 
                className="px-8 py-3 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded hover:bg-[#FDFCF0] transition-colors"
            >
                Subscribe to Newsletters
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: LATEST ARTICLES & CASE STUDIES */}
      <section className="py-20 px-6">
        <ResourcesGrid />
      </section>

      {/* SECTION 3: NEWSLETTER SUBSCRIPTIONS (Pricing from PDF) */}
      <section id="newsletters" className="py-20 px-6 bg-[#1a1a1a]/30 border-t border-[#FDFCF0]/10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-[#FDFCF0] mb-4">
                    Premium <span className="text-[#E5D095]">Newsletters</span>
                </h2>
                <p className="text-[#FDFCF0]/60 max-w-2xl mx-auto">
                    Choose your intelligence stream. From technical IFRS amendments to strategic M&A and AI insights.
                </p>
            </div>
            <NewsletterSection />
        </div>
      </section>

    </main>
  );
}