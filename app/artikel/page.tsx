import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Artikel – Selfify',
  description: 'Kumpulan artikel refleksi diri, mental health, dan life phase dari Selfify.',
}

const articles = [
  {
    title: 'Self-Worth Lo Bukan dari Gaji',
    slug: 'self-worth-bukan-dari-gaji',
    excerpt:
      'Nilai diri lo nggak ditentuin angka di slip gaji. Yuk bahas kenapa self-worth itu harus datang dari dalam.',
    thumbnail: '/assets/artikel/self-worth.webp',
  },
  {
    title: 'Lo Capek Jiwa Tapi Masih Ketawa?',
    slug: 'lo-capek-jiwa-tapi-masih-ketawa',
    excerpt:
      'Kadang kita keliatan oke, tapi dalamnya ambyar. Artikel ini buat lo yang suka pura-pura kuat.',
    thumbnail: '/assets/artikel/lo-capek-jiwa-tapi-masih-ketawa.webp',
  },
  {
    title: 'Self Check-in Buat Mulai Hari',
    slug: 'self-check-in-buat-mulai-hari',
    excerpt:
      'Sebelum ngadepin dunia, kenalan dulu sama diri lo sendiri tiap pagi.',
    thumbnail: '/assets/artikel/self-check-in-buat-mulai-hari.webp',
  },
  {
    title: 'Kenapa Kita Sering Ngerasa Kosong?',
    slug: 'kenapa-kita-sering-ngerasa-kosong',
    excerpt:
      'Bukan lo doang kok yang ngerasa hampa — ini alasannya.',
    thumbnail: '/assets/artikel/kenapa-kita-sering-ngerasa-kosong.webp',
  },
]

export default function ArtikelIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-700 mb-6">
        <span className="text-yellow-500">📖</span>
        Artikel Booster
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((art) => (
          <Link
            href={`/artikel/${art.slug}`}
            key={art.slug}
            className="flex gap-4 bg-white rounded-xl shadow hover:shadow-md transition p-4"
          >
            <Image
              src={art.thumbnail}
              alt={art.title}
              width={120}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-blue-700">
                {art.title}
              </h2>
              <p className="text-sm text-gray-700 mt-1">{art.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
