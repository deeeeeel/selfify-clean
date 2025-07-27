// /scripts/seedConfess.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqgptresfmvgczbfmxjp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZ3B0cmVzZm12Z2N6YmZteGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDE2OTksImV4cCI6MjA2OTE3NzY5OX0.EvIpU6kMNkosxgobKnhCmLJ2vUpD36P3Z8qSe-Isn8g'
const supabase = createClient(supabaseUrl, supabaseKey);

async function seedConfess() {
  const dummy = [
    {
      text: 'Cuma di Selfify gue bisa jujur tentang kecemasan gue tiap malam.',
      love: 12, like: 112, comment: 21,
    },
    {
      text: 'Kenapa ya gue selalu ngerasa belum cukup, padahal orang lain bilang gue keren?',
      love: 8, like: 95, comment: 15,
    },
    {
      text: 'Gue pengen resign tapi takut ga ada backup. Selfify bantu mikir yuk?',
      love: 20, like: 132, comment: 33,
    },
    {
      text: 'Hari ini nangis di kamar mandi kantor. Gatau mau cerita ke siapa.',
      love: 33, like: 190, comment: 40,
    },
    {
      text: 'Gue suka sama temen deket gue. Tapi takut hubungan kita rusak kalau dia tau.',
      love: 15, like: 145, comment: 27,
    },
  ];

  const { data, error } = await supabase.from('confess').insert(dummy);
  if (error) console.error('❌ Error:', error);
  else console.log('✅ Dummy data injected:', data);
}

seedConfess();
