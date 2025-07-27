export const runtime = 'nodejs';

import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    console.log('🧪 ENV CHECK | OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

    const body = await req.json();
    console.log('[🔥 BODY]', body);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are Selfie, jawab dengan bahasa Indonesia.' },
        { role: 'user', content: 'Halo Selfie!' },
      ],
    });

    return NextResponse.json({
      reply: {
        role: 'assistant',
        content: response.choices[0].message.content,
      },
    });
  } catch (error) {
    console.error('❌ SELFIE FATAL:', error);
    return NextResponse.json({ reply: null }, { status: 500 });
  }
}
