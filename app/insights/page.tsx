import { client } from "@/lib/contentful";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import InsightsHero from "@/components/InsightsHero";

// 1. DYNAMIC IMPORTS
// These components are below the fold (or lower priority).
// We add a 'loading' skeleton to prevent layout shift during load.
const InsightsFeed = dynamic(() => import("@/components/InsightsFeed"), {
  loading: () => <div className="h-screen w-full bg-[#050505] animate-pulse" />
});

const NewsletterSection = dynamic(() => import("@/components/NewsletterSection"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050505]" />
});

export const metadata: Metadata = {
  title: "Insights | Hafsa Financials",
  description: "Global Intelligence Unit: IFRS, M&A Strategy, and Financial Architecture.",
};

export const revalidate = 3600;

async function getArticles() {
  const res = await client.getEntries({
    content_type: "article",
    order: ["-fields.date"], 
    // Select minimal fields to keep the HTML payload small
    select: ['sys.id', 'fields.title', 'fields.slug', 'fields.date', 'fields.excerpt', 'fields.category', 'fields.isFeatured', 'fields.coverImage'],
  });
  return res.items;
}

export default async function InsightsPage() {
  const articles = await getArticles();

  // Logic: Featured > Most Recent > Fallback
  const featuredArticles = articles.filter((article: any) => article.fields.isFeatured);
  const heroArticles = featuredArticles.length > 0 ? featuredArticles : (articles.length > 0 ? [articles[0]] : []);
  const feedArticles = articles.slice(1);

  return (
    <main className="w-full home-snap-trigger bg-[#050505]">
      
      {/* SECTION 1: HERO (Critical Path - Loaded Immediately) */}
      <section className="min-h-screen w-full snap-start snap-always flex items-center justify-center px-6 py-20 relative border-b border-[#FDFCF0]/10 overflow-hidden">
        {/* We pass the data directly. No 'dynamic' here. */}
        <InsightsHero featuredArticles={heroArticles} />
      </section>

      {/* SECTION 2: THE FEED (Lazy Loaded) */}
      <section className="min-h-screen md:h-screen w-full snap-start snap-always pt-24 pb-12">
        <InsightsFeed articles={feedArticles} />
      </section>

      {/* SECTION 3: NEWSLETTER (Lazy Loaded) */}
      <section id="newsletter" className="min-h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-6 py-20 border-t border-[#FDFCF0]/10">
         <div className="max-w-5xl mx-auto w-full text-center">
            <NewsletterSection />
         </div>
      </section>

    </main>
  );
}