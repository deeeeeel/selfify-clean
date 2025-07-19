'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types';

export default function ArticleSlider({ articles }: { articles: Article[] }) {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Artikel Pilihan
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {articles.slice(0, 6).map((art) => (
          <SwiperSlide key={art.slug} className="!w-auto">
            <Link
              href={`/artikel/${art.slug}`}
              className="block bg-white overflow-hidden rounded-xl shadow hover:shadow-lg transition w-80 mx-auto"
            >
              {art.featuredImage?.node?.sourceUrl && (
                <Image
                  src={art.featuredImage.node.sourceUrl}
                  alt={art.title}
                  width={320}
                  height={180}
                  className="object-cover w-full h-40"
                  unoptimized
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {art.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
