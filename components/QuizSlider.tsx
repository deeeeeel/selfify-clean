'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';
import type { Quiz } from '@/types';

export default function QuizSlider({ quizzes }: { quizzes: Quiz[] }) {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Quiz Populer
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {quizzes.map((q) => (
          <SwiperSlide key={q.slug} className="!w-auto">
            <Link
              href={`/quiz/${q.slug}`}
              className="block bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition w-80 mx-auto"
            >
              <h3 className="text-lg font-semibold text-blue-700">
                {q.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
