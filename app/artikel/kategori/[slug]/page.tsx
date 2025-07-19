// app/artikel/kategori/[slug]/page.tsx
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  fetchArticlesByCategory,
  fetchCategories,
} from '@/lib/wpClient';

export async function generateStaticParams() {
  const cats = await fetchCategories();
  return cats.map((c: any) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const label = slug.replace(/-/g, ' ');
  return {
    title: `Kategori – ${label} | Selfify`,
    description: `Artikel kategori "${label}" di Selfify.`,
  };
}

export default async function CategoryPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const articles = await fetchArticlesByCategory(slug);
  if (!articles || articles.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">{slug.replace(/-/g, ' ')}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((art: any) => (
          <Link
            key={art.slug}
            href={`/artikel/${art.slug}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {art.featuredImage?.node?.sourceUrl && (
              <Image
                src={art.featuredImage.node.sourceUrl}
                alt={art.title}
                width={400}
                height={250}
                className="w-full object-cover"
                unoptimized
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{art.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {art.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
