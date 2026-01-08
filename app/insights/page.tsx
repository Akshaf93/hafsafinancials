import { client } from "@/lib/contentful";
import InsightsFeed from "@/components/InsightsFeed";
import NewsletterSection from "@/components/NewsletterSection";

// Fetch from Contentful
async function getArticles() {
  const res = await client.getEntries({
    content_type: "article",
    order: ["-fields.date"],
  });
  return res.items;
}

export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <main className="w-full min-h-screen bg-[#050505] pt-32">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Global Intelligence
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#FDFCF0] mb-6">
            The <span className="text-[#E5D095]">Knowledge Hub</span>
        </h1>
        <p className="text-[#FDFCF0]/60 text-lg font-light max-w-2xl mx-auto">
            Defensible analysis across our 5 core pillars: IFRS, Architecture, Analysis, Tax, and Controls.
        </p>
      </div>

      {/* THE INTERACTIVE FEED (Handles 5 Categories) */}
      <InsightsFeed articles={articles} />

      {/* FOOTER CTA */}
      <section className="bg-[#1a1a1a]/30 border-t border-[#FDFCF0]/10 py-20 px-6 mt-20">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-[#FDFCF0] mb-4">Deep Dive Analysis</h2>
            <p className="text-[#FDFCF0]/60 mb-8">Unlock full access to our case study archive and models.</p>
            <NewsletterSection />
         </div>
      </section>

    </main>
  );
}