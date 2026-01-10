import { client } from "@/lib/contentful";
import InsightsFeed from "@/components/InsightsFeed";
import NewsletterSection from "@/components/NewsletterSection";
import InsightsHero from "@/components/InsightsHero";

// Revalidate every hour (ISR) instead of forcing dynamic rendering on every request
export const revalidate = 3600;

// app/insights/page.tsx
async function getArticles() {
  const res = await client.getEntries({
    content_type: "article",
    // CHANGE THIS LINE: Wrap the string in [ ]
    order: ["-fields.date"], 
    select: ['sys.id', 'fields.title', 'fields.slug', 'fields.date', 'fields.excerpt', 'fields.category', 'fields.isFeatured'],
  });
  return res.items;
}
export default async function InsightsPage() {
  const articles = await getArticles();

  // Filter for "isFeatured" or fallback to the most recent article
  const featuredArticles = articles.filter((article: any) => article.fields.isFeatured);
  const heroArticles = featuredArticles.length > 0 ? featuredArticles : (articles.length > 0 ? [articles[0]] : []);

  const feedArticles = articles.slice(1);

  return (
    <main className="w-full home-snap-trigger">
      
      {/* --- SECTION 1: HERO (Snap Start) --- */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6 relative border-b border-[#FDFCF0]/10 overflow-hidden">
        <InsightsHero featuredArticles={heroArticles} />
      </section>


      {/* --- SECTION 2: THE FEED (Snap Start) --- */}
      {/* Fixed height + internal scroll for "always in view" feel */}
      <section className="h-screen w-full snap-start snap-always pt-24 pb-12">
        <InsightsFeed articles={feedArticles} />
      </section>


      {/* --- SECTION 3: NEWSLETTER (Snap Start) --- */}
      <section id="newsletter" className="h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-6 border-t border-[#FDFCF0]/10">
         <div className="max-w-5xl mx-auto w-full text-center">
            <NewsletterSection />
         </div>
      </section>

    </main>
  );
}