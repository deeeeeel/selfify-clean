'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ArticlePreviewSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('https://cms.selfify.id/wp-json/wp/v2/posts?_embed&per_page=2');
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error('Gagal fetch artikel dari WordPress:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-4 text-center">Artikel Terbaru</h2>
      <div className="space-y-4">
        {articles.map((item) => (
          <Link
            key={item.id}
            href={`/artikel/${item.slug}`}
            className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-3 rounded-xl hover:bg-zinc-800 transition-colors"
          >
            <div className="w-16 h-16 flex-shrink-0 relative rounded overflow-hidden">
              <Image
                src={item._embedded['wp:featuredmedia']?.[0]?.source_url || '/assets/default-thumbnail.jpg'}
                alt={item.title.rendered}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white text-sm">
              <h3 className="font-semibold leading-snug line-clamp-2 mb-1" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              <p className="text-zinc-400 text-xs">
                {item._embedded['wp:term']?.[0]?.[0]?.name || 'Tanpa Kategori'} • {new Date(item.date).toLocaleDateString('id-ID')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
