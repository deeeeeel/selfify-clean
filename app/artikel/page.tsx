'use client';

import Link from 'next/link';

const artikelList = [
  {
    title: 'Lo Capek Jiwa Tapi Masih Ketawa?',
    slug: 'capek-tapi-ketawa',
    excerpt: 'Kadang kita keliatan oke, tapi dalamnya ambyar. Artikel ini buat lo yang suka pura-pura kuat.',
  },
  {
    title: 'Self Check-in Buat Mulai Hari',
    slug: 'self-checkin-pagi',
    excerpt: 'Sebelum ngadepin dunia, kenalan dulu sama diri lo sendiri tiap pagi.',
  },
  {
    title: 'Kenapa Kita Sering Ngerasa Kosong?',
    slug: 'kosong-dalam',
    excerpt: 'Bukan lo doang kok yang ngerasa hampa — ini alasannya.',
  },
];

export default function ArtikelPage() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6 text-blue-700 text-center">
        📖 Artikel Booster
      </h1>

      <div className="grid gap-4">
        {artikelList.map((item, i) => (
          <Link
            key={i}
            href={`/artikel/${item.slug}`}
            className="bg-white p-4 rounded-xl border shadow hover:bg-gray-50"
          >
            <h3 className="text-blue-700 font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
