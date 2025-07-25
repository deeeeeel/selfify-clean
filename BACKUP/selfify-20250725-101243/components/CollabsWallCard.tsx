export default function CollabsWallCard() {
  return (
    <div className="bg-[#23272F] rounded-2xl p-2 pb-4 flex flex-col relative min-h-[65px]">
      {/* Judul kecil pojok kanan atas */}
      <span className="absolute top-2 right-3 text-white text-xs font-bold opacity-80">Collabs Wall</span>
      {/* Card putih di dalam */}
      <div className="bg-white rounded-xl mt-5 h-9 flex items-center justify-center px-2 text-xs text-gray-500 italic">
        (Isi/daftar collab muncul di sini)
      </div>
    </div>
  );
}
