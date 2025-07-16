'use client';

import Link from 'next/link';

const artikelList = [
  {
    title: 'Lo Capek Jiwa Tapi Masih Ketawa?',
    slug: 'capek-tapi-ketawa',
  },
  {
    title: 'Self Check-in Buat Mulai Hari',
    slug: 'self-checkin-pagi',
  },
];

export default function ArtikelBooster() {
  return (
    <div className="flex flex-col gap-3">
      {artikelList.map((item, i) => (
        <div key={i} className="flex justify-between items-center bg-white border p-4 rounded-xl shadow hover:bg-gray-50">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              🖼️
            </div>
            <h3 className="font-semibold text-blue-700 text-sm">{item.title}</h3>
          </div>
          <Link href={`/artikel/${item.slug}`} className="text-yellow-500 text-sm font-bold">
            Baca →
          </Link>
        </div>
      ))}
      <Link
        href="/artikel"
        className="block text-center text-sm bg-yellow-400 text-blue-900 mt-4 font-semibold px-4 py-2 rounded-xl"
      >
        Lihat Semua Artikel
      </Link>
    </div>
  );
}
