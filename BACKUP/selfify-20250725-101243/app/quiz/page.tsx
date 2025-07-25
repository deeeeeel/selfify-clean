// app/quiz/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { fetchQuizzes } from '@/lib/wpClient';

interface Quiz {
  slug: string;
  title: string;
  content: string;
}

export default function QuizPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    fetchQuizzes().then((data) => setQuizzes(data));
  }, []);

  const currentQuiz = quizzes.find((q) => q.slug === selectedSlug);

  if (selectedSlug && currentQuiz) {
    return (
      <main className="min-h-screen p-6">
        <button
          onClick={() => setSelectedSlug(null)}
          className="underline mb-4"
        >
          &larr; Back to Quizzes
        </button>
        <h1 className="text-2xl font-bold mb-2">{currentQuiz.title}</h1>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: currentQuiz.content }}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Available Quizzes</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quizzes.map((q) => (
          <li key={q.slug}>
            <button
              onClick={() => setSelectedSlug(q.slug)}
              className="w-full p-4 bg-yellow-100 rounded hover:bg-yellow-200"
            >
              {q.title}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
