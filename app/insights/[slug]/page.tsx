import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// 1. GENERATE STATIC PARAMS (Crucial for Vercel Performance)
// This tells Next.js to pre-build all your articles so they load instantly.
export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: "article",
    select: ['fields.slug'],
  });

  return res.items.map((item: any) => ({
    slug: item.fields.slug,
  }));
}

// 2. FETCH DATA
async function getArticle(slug: string) {
  const res = await client.getEntries({
    content_type: "article",
    "fields.slug": slug,
    limit: 1,
  });

  if (!res.items.length) {
    return null;
  }

  return res.items[0];
}

// 3. RICH TEXT OPTIONS (Styling the Content)
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target.fields;
      return (
        <div className="my-12 relative w-full h-[400px] rounded-lg overflow-hidden border border-[#FDFCF0]/10">
          <Image
            src={"https:" + file.url}
            alt={title || "Article Image"}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      );
    },
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-serif text-[#FDFCF0] mt-12 mb-6 border-l-4 border-[#E5D095] pl-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-xl font-bold text-[#E5D095] mt-8 mb-4">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="text-[#FDFCF0]/90 text-lg leading-8 mb-8 font-light tracking-wide">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc pl-6 space-y-3 mb-8 text-[#FDFCF0]/90 text-lg leading-8 font-light">{children}</ul>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-2 border-[#E5D095] pl-6 py-2 my-10 bg-[#E5D095]/5 italic text-[#FDFCF0] text-xl">
        "{children}"
      </blockquote>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <span className="font-bold text-[#FDFCF0]">{text}</span>,
  },
};

// 4. THE PAGE COMPONENT
export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article: any = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const { title, date, category, body, coverImage } = article.fields;

  return (
    <main className="w-full min-h-screen text-[#FDFCF0]">
      
      {/* PROGRESS BAR (Optional visual touch) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E5D095] to-[#050505] z-50 opacity-20" />

      {/* HEADER SECTION */}
      <header className="relative w-full pt-40 pb-20 px-6 border-b border-[#FDFCF0]/10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link href="/insights" className="inline-block mb-8 text-xs font-bold uppercase tracking-widest text-[#FDFCF0]/40 hover:text-[#E5D095] transition-colors">
            ← Back to Intelligence
          </Link>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#E5D095]/10 border border-[#E5D095]/20 text-[#E5D095] text-[10px] font-bold uppercase tracking-widest rounded">
              {category}
            </span>
            <span className="text-[#FDFCF0]/40 text-xs font-mono uppercase">
              {new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            {title}
          </h1>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Cover Image (Only if exists) */}
        {coverImage && (
          <div className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-xl overflow-hidden border border-[#FDFCF0]/10 shadow-2xl">
            <Image
              src={"https:" + coverImage.fields.file.url}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* The Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {documentToReactComponents(body, renderOptions)}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 pt-12 border-t border-[#FDFCF0]/10 text-center">
            <h3 className="text-xl font-serif mb-4">Enjoyed this analysis?</h3>
            <p className="text-[#FDFCF0]/60 mb-8">Subscribe to the newsletter for weekly updates.</p>
            <Link href="/contact" className="px-8 py-3 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded hover:bg-[#FDFCF0] transition-colors">
                Get Updates
            </Link>
        </div>
      </article>

    </main>
  );
}