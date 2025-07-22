export default function MoodQuotesCard() {
  return (
    <div className="bg-[#23272F] rounded-2xl flex flex-col items-center justify-center p-5 min-h-[140px]">
      {/* Gambar dummy */}
      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-2">
        <span className="text-gray-400">IMG</span>
      </div>
      {/* Icon download/share kecil (dummy) */}
      <div className="flex gap-2 mt-2">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-400 text-xs">⇩</div>
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-400 text-xs">⤴</div>
      </div>
    </div>
  );
}
