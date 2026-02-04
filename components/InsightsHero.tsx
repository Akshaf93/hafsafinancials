import InsightsCarousel from "@/components/InsightsCarousel";

export default function InsightsHero({ featuredArticles }: { featuredArticles: any[] }) {
  const articles = Array.isArray(featuredArticles) ? featuredArticles : [];

  return (
    <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20">
        
        {/* LEFT: Text Content - LCP Priority */}
        <div className="text-center lg:text-left relative z-10">
            <div>
                <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.4em] mb-6">
                    Global Intelligence Unit
                </h2>
                {/* 'will-change-transform' helps browser anticipate painting */}
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#FDFCF0] mb-6 leading-[0.9] will-change-transform">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] to-[#E5D095]">Ledger</span>
                </h1>
                <p className="text-[#FDFCF0]/60 text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                    Defensible analysis across IFRS, M&A Strategy, and Financial Architecture.
                    <span className="text-[#E5D095]/60 text-sm mt-2 block">Read. Analyze. Execute.</span>
                </p>
            </div>
        </div>

        {/* RIGHT: Featured Article Carousel */}
        {/* This is now optimized to show the first slide immediately via server HTML */}
        <InsightsCarousel articles={articles} />
    </div>
  );
}