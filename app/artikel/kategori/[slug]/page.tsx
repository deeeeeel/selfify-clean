// app/artikel/kategori/[slug]/page.tsx
import Link from 'next/link';

// Tambahkan dummy data artikel per kategori
const articlesByCategory: Record<string, Array<{ title: string; slug: string; excerpt: string; thumbnail: string }>> = {
  'mental-health': [
    {
      title: 'Self-Worth Lo Bukan dari Gaji',
      slug: 'self-worth-bukan-dari-gaji',
      excerpt: 'Nilai diri lo nggak ditentuin angka di slip gaji. Yuk bahas kenapa self-worth itu harus datang dari dalam.',
      thumbnail: '/assets/artikel/self-worth.webp',
    },
  ],
  'survive-mode': [
    {
      title: 'Lo Capek Jiwa Tapi Masih Ketawa?',
      slug: 'lo-capek-jiwa-tapi-masih-ketawa',
      excerpt: 'Kadang kita keliatan oke, tapi dalamnya ambyar. Artikel ini buat lo yang suka pura-pura kuat.',
      thumbnail: '/assets/artikel/lo-capek-jiwa-tapi-masih-ketawa.webp',
    },
  ],
  // Tambahkan kategori lain sesuai kebutuhan
};

export const metadata = ({ params }: { params: { slug: string } }) => ({
  title: `Kategori: ${params.slug.replace(/-/g, ' ')}`,
  description: `Daftar artikel kategori ${params.slug.replace(/-/g, ' ')}`,
});

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const articles = articlesByCategory[slug] || [];

  return (
    <div className="min-h-screen px-4 py-8 bg-white font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 capitalize">{`Kategori: ${slug.replace(/-/g, ' ')}`}</h1>
      {articles.length > 0 ? (
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
          {articles.map((art) => (
            <Link key={art.slug} href={`/artikel/${art.slug}`}>
              <a className="bg-white rounded-xl shadow hover:shadow-md transition p-4 block">
                <img
                  src={art.thumbnail}
                  alt={art.title}
                  className="rounded-lg object-cover w-full mb-4"
                />
                <h2 className="text-lg font-semibold text-blue-700">{art.title}</h2>
                <p className="text-sm text-gray-700 mt-1">{art.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-8">Belum ada artikel di kategori ini.</p>
      )}
    </div>
  );
}
