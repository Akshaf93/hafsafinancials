import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

async function getArticle(slug: string) {
  const res = await client.getEntries({
    content_type: "article",
    "fields.slug": slug,
    limit: 1,
  });
  return res.items[0];
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const { title, date, category, content } = article.fields as any;

  // Rich Text Options
  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-[#FDFCF0]/80 text-lg leading-relaxed mb-6 font-light">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="text-3xl md:text-4xl font-serif text-[#FDFCF0] mt-12 mb-6">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] mt-10 mb-6">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="text-xl md:text-2xl font-serif text-[#E5D095] mt-8 mb-4">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc pl-6 mb-6 space-y-2 text-[#FDFCF0]/80 marker:text-[#E5D095]">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#FDFCF0]/80 marker:text-[#E5D095]">{children}</ol>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote className="border-l-2 border-[#E5D095] pl-6 my-8 italic text-[#FDFCF0]/60 text-xl">
          {children}
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-[#E5D095] hover:underline decoration-[#E5D095]/30 underline-offset-4">
          {children}
        </a>
      ),
    },
  };

  return (
    <main className="min-h-screen w-full pt-32 pb-20 px-6 bg-[#050505]">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start mb-6">
            <span className="px-3 py-1 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-sm">
              {category}
            </span>
            <span className="text-[#FDFCF0]/40 text-sm font-mono">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0] leading-tight mb-8">
            {title}
          </h1>
          
          <div className="w-full h-[1px] bg-[#FDFCF0]/10"></div>
        </header>

        {/* Content */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {documentToReactComponents(content, renderOptions)}
        </div>

        {/* Footer / Back Link */}
        <div className="mt-20 pt-10 border-t border-[#FDFCF0]/10 flex justify-between items-center">
          <Link 
            href="/insights"
            className="text-[#E5D095] text-xs font-bold uppercase tracking-widest hover:text-[#FDFCF0] transition-colors flex items-center gap-2"
          >
            ← Back to Insights
          </Link>
        </div>
      </article>
    </main>
  );
}