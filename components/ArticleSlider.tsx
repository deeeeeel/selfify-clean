// components/ArticleSlider.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types';

export default function ArticleSlider({ articles }: { articles: Article[] }) {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-4 animate-scroll">
        {articles.map((art) => (
          <Link
            key={art.slug}
            href={`/artikel/kategori/${art.slug}`}
            className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {art.featuredImage?.node?.sourceUrl && (
              <Image
                src={art.featuredImage.node.sourceUrl}
                alt={art.title}
                width={300}
                height={180}
                className="w-full h-44 object-cover"
                unoptimized
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{art.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
