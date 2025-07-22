'use client';

export default function HomeBottomSection() {
  return (
    <div className="max-w-[360px] mx-auto mt-6 pb-32 px-2">
      {/* 2Am Lounge */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-4 flex items-center relative">
        <span className="font-bold text-2xl text-black">2Am Lounge</span>
        <span className="absolute right-4 top-6 text-gray-400">
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            <rect x="9" y="4" width="4" height="10" rx="2" fill="#888" />
            <rect x="8" y="14" width="6" height="4" rx="2" fill="#888" />
          </svg>
        </span>
      </div>

      {/* Mood Booster (2 kolom: kiri card, kanan survive mode) */}
      <div className="flex gap-2 mb-3">
        {/* Mood Booster Kiri */}
        <div className="flex-1">
          <div className="font-bold text-lg mb-2 text-black">Mood Booster</div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 flex items-center px-3 py-2 gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                  IMG
                </div>
                <div>
                  <div className="font-bold text-base text-black">Tittle</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Survive Mode Kanan */}
        <div className="w-[170px] flex-shrink-0">
          <div className="bg-[#23272F] rounded-2xl p-3 flex flex-col justify-center h-full min-h-[170px]">
            <div className="font-bold text-white mb-2 text-base">Survive Mode</div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
                <div className="bg-white rounded-full h-3 flex-1"></div>
                <div className="bg-white rounded-xl h-3 w-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fitur Tambahan Grid & Mood Booster bawah */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {/* Fitur Tambahan 2 kotak besar kiri */}
        <div className="bg-black rounded-2xl h-28 flex items-center justify-center text-white font-bold text-center col-span-1 row-span-2">
          Fitur <br /> Tambahan
        </div>
        <div className="bg-black rounded-2xl h-28 flex items-center justify-center text-white font-bold text-center col-span-1 row-span-2">
          Fitur <br /> Tambahan
        </div>
        {/* Kotak kecil kanan atas */}
        <div className="bg-black rounded-2xl h-12 flex items-center justify-center text-white font-bold col-span-1">
          Fitur Tambahan
        </div>
        {/* Card Mood Booster bawah */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 flex items-center p-2 gap-3 col-span-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
              IMG
            </div>
            <div>
              <div className="font-bold text-xs text-black">Tittle</div>
              <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
