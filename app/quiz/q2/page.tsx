'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  {
    question: 'Apa yang lo lakuin kalau lagi bad mood?',
    options: [
      { text: 'Nonton series seharian', score: 2 },
      { text: 'Makan apa aja asal enak', score: 3 },
      { text: 'Diam di kamar', score: 1 },
      { text: 'Ngobrol sama temen', score: 4 },
    ],
  },
  {
    question: 'Lo merasa nyaman saat…',
    options: [
      { text: 'Lagi sendiri', score: 1 },
      { text: 'Bareng temen deket', score: 4 },
      { text: 'Ngobrol sama orang baru', score: 3 },
      { text: 'Main game/sendiri di luar', score: 2 },
    ],
  },
  {
    question: 'Tipe reaksi lo kalau ada konflik?',
    options: [
      { text: 'Ngomong langsung', score: 4 },
      { text: 'Nunggu reda dulu', score: 3 },
      { text: 'Menyendiri', score: 1 },
