import BottomNav from "@/components/BottomNav";

function getTanggalIndonesia() {
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const d = new Date();
  return `${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-[360px] mx-auto relative pb-28 bg-[#faf8fd]">
      {/* HEADER TANGGAL */}
      <div className="flex items-center gap-2 pt-5 pb-3 px-4">
        <span className="text-gray-700 font-bold text-lg">
          {getTanggalIndonesia()}
        </span>
        <div className="ml-auto">
          <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            <svg width={22} height={22} stroke="#818181" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
        </div>
      </div>

      {/* CONFESS WALL CARD */}
      <div className="px-4">
        <div className="relative">
          <span className="absolute -top-6 left-3 bg-white rounded-full px-5 py-2 shadow text-yellow-500 font-bold text-lg" style={{fontSize:'18px',letterSpacing:0.5}}>Confess Wall</span>
          <div className="rounded-3xl bg-yellow-100 p-6 pt-8 shadow-lg flex flex-col gap-2">
            <div className="font-extrabold text-2xl leading-snug text-gray-800">
              Gue lagi down, tapi tetep semangat. #SelfifyConfess
            </div>
            <div className="flex gap-2 mt-2">
              {/* ICON USER AKTIF (contoh dummy) */}
              {Array(4).fill(0).map((_,i) => (
                <span key={i} className="rounded-full border-2 border-white bg-gray-100 w-8 h-8 flex items-center justify-center -ml-2 first:ml-0 shadow">
                  <svg width={22} height={22} fill="#bbb">
                    <rect x="3" y="7" width="16" height="10" rx="3"/>
                    <circle cx="11" cy="7" r="5" />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* QUIZ POPULER */}
      <div className="px-4 mt-8">
        <div className="font-bold text-2xl text-gray-800 mb-3">Quiz Populer</div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {["Mental Health", "Survive Mode", "Character", "Relationship", "Self Reflection"].map((cat, idx) => (
            <div key={cat}
              className={`min-w-[110px] h-16 px-2 flex items-center justify-center rounded-2xl border-2
                ${idx === 0 ? "border-yellow-400 text-blue-700 font-semibold" :
                  idx === 1 ? "border-blue-400 text-blue-600 font-semibold" :
                  "border-gray-200 text-blue-600"}
                text-[18px] bg-white shadow-sm`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* GRID QUOTE & SURVIVE MODE & 2AM */}
      <div className="px-4 mt-8 grid grid-cols-2 gap-4">
        {/* MOOD QUOTES */}
        <div className="bg-yellow-100 rounded-3xl shadow-lg p-5 flex flex-col justify-between min-h-[220px]">
          <span className="font-bold text-[18px] text-yellow-700 mb-2">Mood Quotes</span>
          <span className="font-bold text-lg text-gray-800 mb-5 leading-snug">"Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."</span>
          <div className="flex gap-3 mt-auto">
            <button className="bg-white rounded-full shadow p-2 border border-gray-100"><svg width={22} height={22} stroke="#edb300" fill="none" viewBox="0 0 24 24" strokeWidth={2}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg></button>
            <button className="bg-white rounded-full shadow p-2 border border-gray-100"><svg width={22} height={22} stroke="#edb300" fill="none" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M8 12l4-4 4 4" /></svg></button>
          </div>
        </div>

        {/* SURVIVE MODE */}
        <div className="bg-blue-100 rounded-3xl shadow-lg p-5 flex flex-col justify-between min-h-[220px]">
          <span className="font-bold text-blue-600 text-[18px] mb-2">Survive Mode</span>
          <span className="font-bold text-lg text-gray-800 mb-5 leading-snug">Tes ketahanan mental & bertahan hidup!</span>
          <button className="bg-blue-600 text-white rounded-xl font-semibold py-2 mt-auto shadow">Masuk</button>
        </div>
        {/* 2AM LOUNGE */}
        <div className="col-span-2 bg-pink-100 rounded-3xl shadow-lg p-5 flex flex-row items-center justify-between min-h-[120px]">
          <div>
            <span className="font-bold text-pink-700 text-[18px] mb-2 block">2AM Lounge</span>
            <span className="font-semibold text-gray-700 text-lg block">Eksklusif untuk member premium.</span>
          </div>
          <span className="ml-auto"><svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth={2}><rect x="5" y="11" width="14" height="8" rx="2"/><circle cx="12" cy="15" r="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
        </div>
      </div>
      // PATCH ONLY BAGIAN ARTIKEL, paste setelah grid card (Mood Quotes/Survive/2AM)

{/* PREVIEW ARTIKEL TERBARU */}
<div className="px-4 mt-8">
  <div className="font-bold text-2xl text-gray-800 mb-3">Artikel Terbaru</div>
  <div className="flex flex-col gap-4">
    {[ // Dummy 3 artikel
      {
        title: "Self-Worth Bukan dari Gaji",
        excerpt: "Nilai diri lo bukan dari angka gaji, tapi dari proses lo bertumbuh.",
        slug: "/artikel/self-worth-bukan-dari-gaji",
      },
      {
        title: "Mental Health: Gak Harus Kuat Sendiri",
        excerpt: "Curhat, minta bantuan itu bukan lemah. Itu bentuk care sama diri sendiri.",
        slug: "/artikel/mental-health-gak-harus-kuat-sendiri",
      },
      {
        title: "5 Cara Bangkit dari Quarter Life Crisis",
        excerpt: "Jangan panik, ini tips-tips simple buat survive dari masa galau usia 20-30an.",
        slug: "/artikel/5-cara-bangkit-quarter-life-crisis",
      }
    ].map((art, idx) => (
      <a
        key={idx}
        href={art.slug}
        className="block bg-white p-4 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-all"
      >
        <div className="font-semibold text-lg text-gray-800">{art.title}</div>
        <div className="text-gray-500 text-sm mt-1">{art.excerpt}</div>
      </a>
    ))}
  </div>
  {/* Tombol lihat semua */}
  <div className="flex justify-end mt-2">
    <a href="/artikel" className="text-blue-600 text-sm font-semibold hover:underline">Lihat Semua &rarr;</a>
  </div>
</div>

      {/* BOTTOM NAV */}
      <BottomNav />
    </div>
  );
}
