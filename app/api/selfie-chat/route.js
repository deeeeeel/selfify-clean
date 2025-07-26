// app/api/selfie-chat/route.js

import { OpenAIStream, streamToResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge'; // Disarankan oleh Next.js untuk API route streaming

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Pastikan ada di .env.local
});

export async function POST(req) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return streamToResponse(stream); // Ganti dari StreamingTextResponse → streamToResponse
}
