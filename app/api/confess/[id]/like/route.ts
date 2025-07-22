// app/api/confess/[id]/like/route.ts
import { NextRequest, NextResponse } from 'next/server'

let likesStore: Record<string, number> = {}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const count = likesStore[id] || 0
  return NextResponse.json({ id, likes: count })
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  likesStore[id] = (likesStore[id] || 0) + 1
  return NextResponse.json({ id, likes: likesStore[id] })
}
