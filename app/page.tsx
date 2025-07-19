'use client';

import BottomNav from '@/components/BottomNav';

function getTanggalIndonesia() {
  const d = new Date();
  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const bulan = [
    'Januari','Februari','Maret','April','Mei','Juni',
    'Juli','Agustus','September','Oktober','November','Desember'
  ];
  return `${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

export default function HomePage() {
  return (
    <main className="flex justify-center bg-[#fcfaff] min-h-screen pb-28">
      <div className="w-full max-w-[360px] p-4">
        {/* HEADER: Tanggal */}
        <div className="mb-3 flex justify-between items-center">
          <span className="text-gray-700 font-medium text-sm">
            {getTanggalIndonesia()}
          </span>
        </div>

        {/* Confess Wall */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="relative flex items-center mb-2">
            <span className="bg-white px-4 py-1 rounded-2xl shadow text-[0.9rem] font-semibold text-yellow-500 absolute -top-5 left-2 z-10 border border-[#fff9]">
              Confess Wall
            </span>
          </div>
          <div className="bg-yellow-100 rounded-3xl px-5 py-6 shadow-md flex flex-col justify-between min-h-[112px] relative">
            <p className="font-bold text-base leading-snug mb-5">
              Gue lagi down, tapi tetep semangat. #SelfifyConfess
            </p>
            <div className="flex gap-2 absolute left-5 bottom-4">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="inline-block w-8 h-8 bg-[#e0e7ef] rounded-full border-2 border-white -ml-2 first:ml-0 shadow">
                  <span className="flex items-center justify-center w-full h-full text-lg text-gray-400">🧑‍🦱</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quiz Populer */}
        <div className="mb-6">
          <h2 className="font-bold text-base mb-2 text-[#21242b]">Quiz Populer</h2>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {["Mental Health", "Survive Mode", "Character", "Relationship"].map((c, i) => (
              <button
                key={c}
                className={`
                  min-w-[110px] 
                  px-3 py-3 rounded-2xl 
                  border 
                  font-semibold 
                  text-sm 
                  ${i === 0
                    ? 'border-yellow-400 text-blue-700'
                    : i === 1
                      ? 'border-blue-400 text-blue-700'
                      : 'border-[#ededed] text-blue-700'
                  }
                  bg-white shadow-sm 
                  flex-shrink-0
                  flex items-center justify-center
                  `}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 mb-7 items-stretch">
          {/* Mood Quotes */}
          <div className="row-span-2 bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[310px] max-h-[330px]">
            <span className="text-yellow-800 font-semibold text-base mb-2">Mood Quotes</span>
            <p className="text-[1.05rem] font-bold flex-1 leading-snug mb-4">"Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."</p>
            <div className="flex gap-3">
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
              </button>
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
              </button>
            </div>
          </div>
          {/* Survive Mode */}
          <div className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[200px] max-h-[210px]">
            <span className="text-blue-700 font-semibold text-base mb-2">Survive Mode</span>
            <p className="font-bold text-base leading-snug flex-1 mb-4">Tes ketahanan mental & bertahan hidup!</p>
            <button className="mt-auto bg-blue-600 text-white px-7 py-2 rounded-2xl font-semibold shadow">
              Masuk
            </button>
          </div>
          {/* 2AM Lounge */}
          <div className="bg-pink-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[90px] max-h-[100px] relative">
            <div className="flex justify-between items-center">
              <span className="text-pink-700 font-semibold text-base">2AM Lounge</span>
              <svg width={24} height={24} className="text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x={9} y={11} width={6} height={7} rx={2}/><circle cx={12} cy={7} r={3}/></svg>
            </div>
            <span className="text-[#555] font-semibold text-xs">Eksklusif untuk member premium.</span>
          </div>
        </div>

        {/* ARTIKEL TERBARU */}
        <section className="mb-12">
          <h2 className="font-bold text-base mb-3 text-[#21242b]">Artikel Terbaru</h2>
          <div className="grid gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">Kenali Fase Hidupmu!</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">Cara Atasi Quarter Life Crisis</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">Self-Worth Bukan dari Gaji</div>
          </div>
        </section>
      </div>
      {/* BOTTOM NAV */}
      <div className="fixed left-0 right-0 bottom-0 z-50 flex justify-center bg-transparent">
        <BottomNav />
      </div>
    </main>
  );
}
