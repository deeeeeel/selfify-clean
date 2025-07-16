'use client';

import { useEffect, useState } from 'react';

export default function Hasil4Page() {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState({
    title: '',
    advice: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('quiz_score');
    const scoreInt = saved ? parseInt(saved) : 0;
    setScore(scoreInt);

    if (scoreInt <= 6) {
      setResult({
        title: 'Lagi Nyari Pegangan',
        advice: 'Gak apa-apa kalau lo lagi ngerasa lost. Pelan-pelan aja, yang penting terus jalan.',
      });
    } else if (scoreInt <= 10) {
      setResult({
        title: 'Lagi di Fase “Tengah-tengah”',
        advice: 'Lo udah jalan jauh, tapi masih ada yang bikin ngerasa nanggung. Ambil jeda, lalu lanjut.',
      });
    } else {
      setResult({
        title: 'Lagi Butuh Reset Total',
        advice: 'Kayaknya udah banyak beban yang numpuk. Lo butuh waktu sendiri dan jujur sama diri lo sendiri.',
      });
    }
  }, []);

  const shareText = encodeURIComponent(
    `Hasil quiz Selfify gue: "${result.title}". ${result.advice} — https://selfify.id`
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
      <p className="mb-6 text-gray-700">{result.advice}</p>

      <div className="f
