// app/artikel/page.tsx
export const dynamic = 'force-dynamic';
import Link from 'next/link'
import Image from 'next/image'
import { fetchArticles } from '@/lib/wpClient'

export const metadata = {
  title: 'Artikel – Selfify',
  description: 'Daftar artikel Selfify yang bisa kamu jelajahi untuk refleksi diri.',
}

export default async function ArtikelPage() {
  const articles = await fetchArticles()

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">Artikel Terbaru</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((art: any) => (
          <Link
            key={art.slug}
            href={`/artikel/${art.slug}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            legacyBehavior>
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
              <p className="text-gray-600 text-sm line-clamp-3">{art.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
