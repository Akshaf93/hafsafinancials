import { client } from "@/lib/contentful";
import InsightsFeed from "@/components/InsightsFeed";
import NewsletterSection from "@/components/NewsletterSection";
import InsightsHero from "@/components/InsightsHero";

// Force Dynamic Rendering to ensure fresh content on every visit
export const dynamic = 'force-dynamic';

// app/insights/page.tsx
async function getArticles() {
  const res = await client.getEntries({
    content_type: "article",
    // CHANGE THIS LINE: Wrap the string in [ ]
    order: ["-fields.date"], 
  });
  return res.items;
}
export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <main className="w-full home-snap-trigger">
      
      {/* --- SECTION 1: HERO (Snap Start) --- */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-6 relative border-b border-[#FDFCF0]/10">
        <InsightsHero />
      </section>


      {/* --- SECTION 2: THE FEED (Snap Start) --- */}
      {/* We use h-screen so it snaps perfectly, but the inner Feed handles scrolling */}
      <section className="min-h-screen w-full snap-start snap-always pt-24">
        <InsightsFeed articles={articles} />
      </section>


      {/* --- SECTION 3: NEWSLETTER (Snap Start) --- */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-6 border-t border-[#FDFCF0]/10 bg-[#0a0a0a]/50 backdrop-blur-sm">
         <div className="max-w-5xl mx-auto w-full text-center">
            <NewsletterSection />
         </div>
      </section>

    </main>
  );
}