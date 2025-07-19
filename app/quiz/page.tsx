// app/quiz/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { fetchCategories, fetchQuizBySlug } from '@/lib/wpClient';

interface Category { slug: string; name: string; }
interface Quiz { slug: string; title: string; content: string; }

export default function QuizPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  // Fetch daftar kategori sekali
  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  // Saat slug berubah, fetch detail quiz
  useEffect(() => {
    if (selectedSlug) {
      fetchQuizBySlug(selectedSlug).then(setQuiz);
    }
  }, [selectedSlug]);

  // Back to category list
  const back = () => {
    setQuiz(null);
    setSelectedSlug(null);
  };

  // Render
  if (quiz) {
    return (
      <main className="p-6">
        <button onClick={back} className="underline mb-4">&larr; Kembali</button>
        <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: quiz.content }} />
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Pilih Quiz</h1>
      <ul className="grid grid-cols-2 gap-4">
        {categories.map(cat => (
          <li key={cat.slug}>
            <button
              onClick={() => setSelectedSlug(cat.slug)}
              className="block w-full p-4 bg-yellow-100 rounded hover:bg-yellow-200"
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
