'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ArtikelList({ articles }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-4 text-center">Artikel Terbaru</h2>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/artikel/${article.slug}`}
            className="flex gap-4 items-center bg-zinc-900 border border-zinc-800 rounded-lg p-3 hover:border-yellow-500 transition-all"
          >
            <div className="w-16 h-16 rounded-md overflow-hidden bg-zinc-700 flex-shrink-0">
              <Image
                src={article.featured_image}
                alt={article.title}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white mb-1">{article.title}</h3>
              <p className="text-xs text-zinc-400 line-clamp-2">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
