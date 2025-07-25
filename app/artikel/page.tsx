// File: app/artikel/page.jsx
'use client';

import { useEffect, useState } from 'react';
import ArtikelList from '@/components/ArtikelList';
import Link from 'next/link';

export default function ArtikelPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('https://cms.selfify.id/wp-json/wp/v2/posts?_embed');
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error('Gagal ambil artikel:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-[360px] mx-auto px-4 py-4 text-white">
      <h1 className="text-xl font-bold mb-4 text-center">Artikel Selfify</h1>
      <div className="space-y-4">
        {articles.map((item) => (
          <Link href={`/artikel/${item.slug}`} key={item.id}>
            <a>
              <ArtikelList
                title={item.title.rendered}
                thumbnail={item._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                excerpt={item.excerpt.rendered.replace(/<[^>]+>/g, '')}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
