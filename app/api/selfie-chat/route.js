// app/api/selfie-chat/route.js
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge'; // Optional: disarankan oleh Next.js untuk route API

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Pastikan key-nya ada di .env.local
});

export async function POST(req) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
