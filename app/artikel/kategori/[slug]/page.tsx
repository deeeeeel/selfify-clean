import Link from 'next/link';
import Image from 'next/image';

const dummyData = {
  'mental-health': [
    {
      title: 'Self-Worth Lo Bukan dari Gaji',
      slug: 'self-worth-bukan-dari-gaji',
      excerpt: 'Nilai diri lo nggak ditentuin angka di slip gaji. Yuk bahas kenapa self-worth itu harus datang dari dalam...',
      thumbnail: '/assets/artikel/self-worth.jpg',
    },
    // Tambah artikel lain di sini
  ],
  // Tambah kategori lain di sini
};

export default function KategoriPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const articles = dummyData[slug] || [];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Logo */}
      <div className="flex items-center justify-center py-6">
        <Link href="/">
          <Image
            src="/assets/logo-selfify.svg"
            alt="Logo Selfify"
            width={160}
            height={40}
          />
        </Link>
      </div>

      {/* Judul */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-yellow-500 capitalize">
          Artikel: {slug.replace('-', ' ')}
        </h1>
      </div>

      {/* Daftar Artikel */}
      <div className="grid gap-6 px-6 md:grid-cols-2 max-w-5xl mx-auto">
        {articles.map((article, index) => (
          <Link
            href={`/artikel/${article.slug}`}
            key={index}
            className="bg-blue-50 rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-700">{article.title}</h2>
            <p className="text-sm text-gray-700 mt-1">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
