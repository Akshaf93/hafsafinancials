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
  const featuredArticle = articles[0];
  const feedArticles = articles.slice(1);

  return (
    <main className="w-full home-snap-trigger">
      
      {/* --- SECTION 1: HERO (Snap Start) --- */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6 relative border-b border-[#FDFCF0]/10 overflow-hidden">
        <InsightsHero featuredArticle={featuredArticle} />
      </section>


      {/* --- SECTION 2: THE FEED (Snap Start) --- */}
      {/* Fixed height + internal scroll for "always in view" feel */}
      <section className="h-screen w-full snap-start snap-always pt-24 pb-12">
        <InsightsFeed articles={feedArticles} />
      </section>


      {/* --- SECTION 3: NEWSLETTER (Snap Start) --- */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-6 border-t border-[#FDFCF0]/10">
         <div className="max-w-5xl mx-auto w-full text-center">
            <NewsletterSection />
         </div>
      </section>

    </main>
  );
}