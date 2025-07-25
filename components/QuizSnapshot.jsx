'use client';

import { useState } from 'react';
import { Brain, HeartHandshake, Users, DollarSign, LifeBuoy, MessageSquareHeart, CalendarCheck, ShieldCheck } from 'lucide-react';

const categories = [
  {
    title: 'Mental Health',
    icon: <Brain size={20} />, 
    description: 'Responden ngaku ‘baik-baik aja’ padahal hasilnya nunjukin ada tekanan yang terpendam.',
    stat: '68%'
  },
  {
    title: 'Survive Mode',
    icon: <ShieldCheck size={20} />, 
    description: ' Pekerja ggerasa lagi di titik capek, tapi tetep maksain jalan sendiri tanpa cerita ke siapa pun.',
    stat: '74%'
  },
  {
    title: 'Character Scan',
    icon: <HeartHandshake size={20} />, 
    description: 'Pelajari cara lo ngadepin konflik, kritik, dan keputusan penting.',
    stat: null
  },
  {
    title: 'Relationship Decode',
    icon: <Users size={20} />, 
    description: 'Pria kesulitan jawab soal komunikasi yang jujur sama pasangan.',
    stat: '81%'
  },
  {
    title: 'Self Reflection',
    icon: <MessageSquareHeart size={20} />, 
    description: 'Gen Z Ngaku nggak yakin sama arah hidupnya waktu diminta jawab soal mimpi pribadi.',
    stat: '75%'
  },
  {
    title: 'Money & You',
    icon: <DollarSign size={20} />, 
    description: 'Penghasilan boleh kecil, tapi mindset finansial harus dibenerin.',
    stat: null
  },
  {
    title: 'Life Phase',
    icon: <CalendarCheck size={20} />, 
    description: 'Banyak yang bingung: quarter life? midlife? atau stuck life?',
    stat: null
  },
  {
    title: 'Selfify Picks',
    icon: <LifeBuoy size={20} />, 
    description: 'Rekomendasi quiz buat bantu lo lebih kenal diri lo sendiri.',
    stat: null
  }
];

export default function QuizSnapshot() {
  const [startIndex, setStartIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setStartIndex((prev) => (prev + 2) % categories.length);
    } else {
      setStartIndex((prev) => (prev - 2 + categories.length) % categories.length);
    }
  };

  const visibleCards = [
    categories[startIndex % categories.length],
    categories[(startIndex + 1) % categories.length],
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4 text-center">Quiz Snapshot</h2>
      <div className="flex gap-4 overflow-x-auto snap-x">
        {visibleCards.map((item) => (
          <div key={item.title} className="flex-shrink-0 w-[160px] bg-zinc-900 border border-zinc-800 rounded-xl p-4 snap-start">
            <div className="flex items-center gap-2 mb-2 text-yellow-400">{item.icon}</div>
            <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
            {item.stat && <p className="text-2xl font-bold text-white mb-1">{item.stat}</p>}
            <p className="text-sm text-zinc-400 mb-3 leading-tight">{item.description}</p>
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-1 px-2 text-sm rounded-full">Cek Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
}
