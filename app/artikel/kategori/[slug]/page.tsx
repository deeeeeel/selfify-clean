// app/artikel/[slug]/page.tsx
import { fetchArticleBySlug, fetchArticles } from '@/lib/wpClient';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PageProps { params: { slug: string } }

// Pre-generate pages for all article slugs
export async function generateStaticParams() {
  const articles = await fetchArticles();
  return articles.map((art: any) => ({ slug: art.slug }));
}

export default async function ArticleDetail({ params }: PageProps) {
  const article = await fetchArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      {article.featuredImage?.node?.sourceUrl && (
        <Image
          src={article.featuredImage.node.sourceUrl}
          alt={article.title}
          width={800}
          height={450}
          className="rounded-lg mb-6"
          unoptimized
        />
      )}
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}