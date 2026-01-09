import { client } from "@/lib/contentful";
import InsightsFeed from "@/components/InsightsFeed";
import NewsletterSection from "@/components/NewsletterSection";
import Link from "next/link";

// Force Dynamic Rendering to ensure fresh content on every visit
export const dynamic = 'force-dynamic';

async function getArticles() {
  const res = await client.getEntries({
    content_type: "article",
    order: ["-fields.date"], // Fixed the array bracket issue here too
  });
  return res.items;
}

export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <main className="w-full home-snap-trigger bg-[#050505] overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth">
      
      {/* --- SECTION 1: HERO (Snap Start) --- */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-6 relative border-b border-[#FDFCF0]/10 bg-[#050505]">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(#E5D095 1px, transparent 1px), linear-gradient(90deg, #E5D095 1px, transparent 1px)", 
             backgroundSize: "40px 40px",
             backgroundPosition: "center center"
           }} 
        />
        
        <div className="relative z-10 text-center max-w-4xl mt-20 md:mt-0">
            <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.4em] mb-8 animate-pulse">
                Global Intelligence Unit
            </h2>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-[#FDFCF0] mb-8 leading-[0.9]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] to-[#E5D095]">Ledger</span>
            </h1>
            <p className="text-[#FDFCF0]/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Defensible analysis across IFRS, M&A Strategy, and Financial Architecture.
                <br/> <span className="text-[#E5D095]/60 text-sm mt-4 block">Read. Analyze. Execute.</span>
            </p>

            <div className="animate-bounce mt-10">
               <span className="text-[#FDFCF0]/30 text-xs uppercase tracking-widest">Scroll for Feed ↓</span>
            </div>
        </div>
      </section>


      {/* --- SECTION 2: THE FEED (Snap Start) --- */}
      {/* overflow-hidden ensures this section stays cleanly within its screen boundaries */}
      <section className="h-screen w-full snap-start snap-always pt-24 bg-[#050505] overflow-hidden">
        <InsightsFeed articles={articles} />
      </section>


      {/* --- SECTION 3: DIRECT TO INBOX (Snap Start) --- */}
      {/* FIX: Changed justify-center to justify-start and added pt-32 */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-start items-center px-6 border-t border-[#FDFCF0]/10 bg-[#1a1a1a]/30 pt-32 overflow-y-auto">
         <div className="max-w-5xl mx-auto w-full text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#FDFCF0] mb-6">
                Direct to <span className="text-[#E5D095]">Inbox</span>
            </h2>
            <p className="text-[#FDFCF0]/60 max-w-2xl mx-auto mb-16 text-lg">
                Subscribe to our specialized streams. Get models, regulatory alerts, and case studies delivered monthly.
            </p>
            
            <NewsletterSection />
            
            <div className="mt-12 pb-12 pt-12 border-t border-[#FDFCF0]/5">
                <Link href="/" className="text-[#FDFCF0]/40 hover:text-[#E5D095] text-xs font-bold uppercase tracking-widest transition-colors">
                    ← Return Home
                </Link>
            </div>
         </div>
      </section>

    </main>
  );
}