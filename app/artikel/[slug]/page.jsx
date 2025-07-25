import { notFound } from 'next/navigation';
import Image from 'next/image';

async function getArtikel(slug) {
  try {
    const res = await fetch(`https://cms.selfify.id/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 }, // Cache selama 60 detik (optional)
    });
    const data = await res.json();
    if (!data || !data.length) return null;

    const post = data[0];
    return {
      title: post.title.rendered,
      content: post.content.rendered,
      featured_image: post._embedded['wp:featuredmedia']?.[0]?.source_url || '',
      date: post.date,
    };
  } catch (err) {
    return null;
  }
}

export default async function ArtikelDetailPage({ params }) {
  const article = await getArtikel(params.slug);

  if (!article) return notFound();

  return (
    <main className="max-w-[360px] mx-auto px-4 py-6 text-white font-[Satoshi] bg-black min-h-screen">
      <h1 className="text-xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {new Date(article.date).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>

      {article.featured_image && (
        <div className="mb-4">
          <Image
            src={article.featured_image}
            alt={article.title}
            width={360}
            height={200}
            className="rounded-md object-cover w-full h-auto"
          />
        </div>
      )}

      <div
        className="prose prose-sm prose-invert text-zinc-200 max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}
