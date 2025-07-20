'use client'

import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

// Dummy confess data (sementara, nanti fetch dari API)
const confessList = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Hari ini capek banget, tapi harus kuat!',
  'Kadang butuh ruang buat dengerin diri sendiri.',
  'Ternyata curhat random bisa bikin lega!'
]

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function HomePage() {
  const router = useRouter()
  const [confessIdx, setConfessIdx] = useState(0)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const currentId = confessIdx.toString()

  // slider otomatis tiap 3 detik
  useEffect(() => {
    const t = setInterval(() => {
      setConfessIdx(i => (i + 1) % confessList.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  // SWR: like count
  const { data: likeData, mutate: mutateLikes } = useSWR<{ likes: number }>(
    `/api/confess/${currentId}/like`, fetcher,
    { refreshInterval: 5000 }
  )

  // SWR: comments
  const { data: comments, mutate: mutateComments } = useSWR<{ id: string, text: string }[]>(
    `/api/confess/${currentId}/comment`, fetcher
  )

  const handleLike = async () => {
    await fetch(`/api/confess/${currentId}/like`, { method: 'POST' })
    mutateLikes()
  }

  const handleComment = async () => {
    if (!newComment.trim()) return
    await fetch(`/api/confess/${currentId}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newComment })
    })
    setNewComment('')
    mutateComments()
  }

  // tanggal format Indonesia, singkatan Hari, tgl bln thn
  function getTanggal() {
    const d = new Date()
    const hari = ['Mgg','Sen','Sel','Rab','Kam','Jum','Sab'][d.getDay()]
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des'][d.getMonth()]
    return `${hari}, ${d.getDate()} ${bln} ${d.getFullYear()}`
  }

  return (
    <main className="flex flex-col items-center bg-[#FCFAFF] min-h-screen pt-4 pb-20" style={{ maxWidth: 360, margin: '0 auto' }}>
      {/* HEADER */}
      <div className="w-full px-4 flex items-center mb-4">
        <span className="text-gray-600 font-semibold text-sm">{getTanggal()}</span>
        <button
          className="ml-auto w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          aria-label="Notifikasi"
        >
          <svg width={22} height={22} fill="none" stroke="#3B82F6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>
      </div>

      {/* CONFESS WALL CARD */}
      <div className="w-[95%] relative bg-yellow-100 rounded-3xl p-6 shadow mb-6 flex flex-col justify-between">
        {/* SLIDER TEXT */}
        <div className="min-h-[80px] flex items-center justify-center px-2">
          <p className="text-center text-gray-800 font-bold text-lg leading-snug">
            “{confessList[confessIdx]}”
          </p>
        </div>

        {/* REACTIONS & SHARE */}
        <div className="flex items-center gap-4 mt-4">
          <button onClick={handleLike} className="flex items-center gap-1 text-xl">
            <span>❤️</span>
            <span className="text-base">{likeData?.likes ?? 0}</span>
          </button>
          <button onClick={() => setShowComments(true)} className="text-xl">🗨️</button>
          <button onClick={() => navigator.share?.({ title: 'Confess', url: window.location.href }) || document.execCommand('copy')} className="text-xl">🔗</button>
          {/* tombol ke halaman input confess */}
          <button
            onClick={() => router.push('/confess')}
            className="ml-auto bg-white text-yellow-500 border border-yellow-200 px-3 py-1 rounded-full text-sm font-bold shadow hover:bg-yellow-50 transition"
          >
            Confess Wall
          </button>
        </div>

        {/* MODAL KOMENTAR */}
        {showComments && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-end">
            <div className="bg-white w-full max-h-1/2 rounded-t-3xl p-4 overflow-auto">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Komentar</h3>
                <button onClick={() => setShowComments(false)} className="text-xl">✖️</button>
              </div>
              <div className="space-y-2">
                {comments?.map(c => (
                  <div key={c.id} className="text-gray-700">{c.text}</div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <input
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  className="flex-1 p-2 border rounded"
                  placeholder="Tulis komentar..."
                />
                <button onClick={handleComment} className="px-4 bg-blue-600 text-white rounded">Kirim</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* QUIZ POPULER */}
      <div className="w-full px-4 mb-6">
        <div className="font-bold text-2xl text-gray-800 mb-3">Quiz Populer</div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          {["Mental", "Survive", "Character", "Relationship", "Reflection"].map((cat, i) => (
            <div
              key={cat}
              className="flex-none min-w-[110px] h-14 px-3 flex items-center justify-center rounded-2xl bg-white shadow text-sm font-semibold border"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* GRID: Mood Quotes / Survive Mode / 2AM Lounge */}
      <div className="w-full px-4 grid grid-cols-2 gap-4 mb-8">
        {/* Mood Quotes */}
        <div className="row-span-2 bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between shadow min-h-[300px]">
          <span className="text-yellow-800 font-semibold text-base">Mood Quotes</span>
          <p className="text-lg font-bold flex-1 leading-snug mb-4">"Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."</p>
          <div className="flex gap-3">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border">
              ⬇️
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border">
              📤
            </button>
          </div>
        </div>
        {/* Survive Mode */}
        <div className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between shadow min-h-[200px]">
          <span className="text-blue-700 font-semibold text-base">Survive Mode</span>
          <p className="font-bold text-base leading-snug flex-1 mb-4">Tes ketahanan mental & bertahan hidup!</p>
          <button className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-2xl font-semibold shadow">Masuk</button>
        </div>
        {/* 2AM Lounge */}
        <div className="col-span-2 bg-pink-100 rounded-3xl p-5 flex justify-between items-center shadow min-h-[100px]">
          <div>
            <span className="text-pink-700 font-semibold text-base block">2AM Lounge</span>
            <span className="text-gray-700 text-sm">Eksklusif untuk member premium.</span>
          </div>
          <svg width={24} height={24} fill="none" stroke="#ec4899" strokeWidth={2} viewBox="0 0 24 24">
            <rect x={5} y={11} width={14} height={8} rx={2}/>
            <circle cx={12} cy={15} r={1}/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
      </div>

      {/* ARTIKEL TERBARU */}
      <section className="w-full px-4 mb-12">
        <h2 className="font-bold text-base mb-3 text-[#21242b]">Artikel Terbaru</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm border font-semibold text-sm">Kenali Fase Hidupmu!</div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border font-semibold text-sm">Cara Atasi Quarter Life Crisis</div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border font-semibold text-sm">Self-Worth Bukan dari Gaji</div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border font-semibold text-sm">Tips Kelola Stres</div>
        </div>
      </section>

      {/* BOTTOM NAV */}
      <BottomNav />
    </main>
);
}
