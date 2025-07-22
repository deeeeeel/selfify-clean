// app/api/confess/[id]/comment/route.ts
import { NextRequest, NextResponse } from 'next/server'

let commentsStore: Record<string, { id: number; text: string }[]> = {}
let commentIdCounter = 1

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const thread = commentsStore[id] || []
  return NextResponse.json(thread)
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const { text } = await req.json()
  const thread = commentsStore[id] || []
  const newComment = { id: commentIdCounter++, text }
  commentsStore[id] = [...thread, newComment]
  return NextResponse.json(newComment)
}
