// app/page.tsx
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { fetchArticles, fetchQuizzes } from '@/lib/wpClient';

// Dynamically import sliders as client components
const QuizSlider = dynamic(() => import('@/components/QuizSlider'), { ssr: false });
const ArticleSlider = dynamic(() => import('@/components/ArticleSlider'), { ssr: false });

export default async function HomePage() {
  const quizzes = await fetchQuizzes().catch(() => []);
  const articles = await fetchArticles().catch(() => []);

  return (
    <>
      <main className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-blue-600 to-purple-600 dark:from-gray-800 dark:to-black">
          <div className="z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Amplify Your Self</h1>
            <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 mb-6">
              Jelajahi fitur interaktif: artikel, quiz, dan tools self-growth.
            </p>
            <Link
              href="/artikel"
              className="inline-block bg-yellow-400 dark:bg-yellow-600 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Cek Artikel
            </Link>
          </div>
          <div className="absolute inset-0 opacity-20">
            <Image src="/assets/icons/quotes/qm1.svg" alt="" fill className="object-cover" />
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/bizboost"
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
          >
            <span className="self-end bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
              Soon
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">
              BizBoost
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
              Empower UMKM kamu lewat campaign giveaway & toolkit keuangan.
            </p>
            <span className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">
              Selengkapnya →
            </span>
          </Link>

          <Link
            href="/survive-mode"
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Survive Mode
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
              Simulasi interview & persiapan karier lengkap dengan roadmap fitur.
            </p>
            <span className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">
              Mulai Simulasi →
            </span>
          </Link>
        </section>

        {/* Quiz Populer Slider */}
        <div className="py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Quiz Populer
          </h2>
          <QuizSlider quizzes={quizzes} />
        </div>

        {/* Artikel Pilihan Slider */}
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Artikel Pilihan
          </h2>
          <ArticleSlider articles={articles} />
        </div>

        {/* Eksplor Fitur Lain */}
        <section className="py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Eksplor Fitur Lain
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Mood Quotes', href: '/mood-quotes' },
              { title: 'Confess Wall', href: '/confess' },
              { title: 'Talk to Selfie', href: '/talk-to-selfie' },
              { title: '2AM Lounge', href: '/2am-lounge' },
              { title: 'Daily Check-In', href: '/daily-checkin' },
              { title: 'Community Challenges', href: '/challenges' },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <span className="text-gray-900 dark:text-gray-100">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button for Talk to Selfie */}
      <Link
        href="/talk-to-selfie"
        aria-label="Talk to Selfie"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition"
      >
        💬
      </Link>
    </>
  );
}
