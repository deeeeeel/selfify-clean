import { NextRequest, NextResponse } from 'next/server'

// Sementara simpan di memory. Untuk production, ganti dengan DB.
let confessions: string[] = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Hari ini capek banget, tapi harus kuat!',
  'Kadang butuh ruang buat dengerin diri sendiri.',
  'Ternyata curhat random bisa bikin lega!'
];

export async function GET() {
  return NextResponse.json(confessions);
}

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  if (typeof text !== 'string' || !text.trim()) {
    return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  }
  confessions.unshift(text.trim());
  if (confessions.length > 20) confessions.pop();
  return NextResponse.json({ ok: true });
}
