import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://kqgptresfmvgczbfmxjp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZ3B0cmVzZm12Z2N6YmZteGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDE2OTksImV4cCI6MjA2OTE3NzY5OX0.EvIpU6kMNkosxgobKnhCmLJ2vUpD36P3Z8qSe-Isn8g'
);

export async function POST(req) {
  const body = await req.json();
  const { text } = body;

  const { error } = await supabase.from('confess').insert({
    text,
    love: 0,
    like: 0,
    comment: 0,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
