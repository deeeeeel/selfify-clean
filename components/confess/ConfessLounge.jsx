'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqgptresfmvgczbfmxjp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZ3B0cmVzZm12Z2N6YmZteGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDE2OTksImV4cCI6MjA2OTE3NzY5OX0.EvIpU6kMNkosxgobKnhCmLJ2vUpD36P3Z8qSe-Isn8g';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ConfessLounge() {
  const [confessList, setConfessList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchConfess = async () => {
      const { data, error } = await supabase
        .from('confess')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching confess:', error);
      } else {
        setConfessList(data);
      }
    };

    fetchConfess();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % confessList.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [confessList]);

  if (confessList.length === 0) {
    return (
      <div className="max-w-[360px] mx-auto text-white px-4 py-6 text-sm text-zinc-400">
        Memuat confess terbaru...
      </div>
    );
  }

  const currentConfess = confessList[currentIndex];

  return (
    <div className="max-w-[360px] mx-auto text-white font-[Satoshi] px-4 py-6">
      <div className="bg-white/10 p-4 rounded-2xl shadow-md">
        <p className="text-base mb-2 text-white font-medium">
          {currentConfess.text}
        </p>
        <div className="flex items-center justify-end text-sm text-yellow-400 gap-4">
          <span>❤️ {currentConfess.love}</span>
          <span>👍 {currentConfess.like}</span>
          <span>💬 {currentConfess.comment}</span>
        </div>
      </div>
    </div>
  );
}
