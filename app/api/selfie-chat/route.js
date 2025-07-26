// app/api/selfie-chat/route.js
import OpenAI from 'openai';
import { streamToResponse } from 'ai';

export const runtime = 'edge';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    stream: true,
    messages,
  });

  return streamToResponse(response);
}
