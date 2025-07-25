export default function DeepTalkCard() {
  return (
    <div className="bg-[#23272F] rounded-2xl p-4 flex flex-col items-center justify-between min-h-[90px]">
      <span className="font-bold text-white mb-2">Deep Talk</span>
      <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center mb-2">
        {/* Icon bubble dummy */}
        <span className="text-gray-400">💬</span>
      </div>
      <button className="bg-white text-black font-bold rounded-lg px-4 py-1 mt-1 text-xs">
        Lets Talk
      </button>
    </div>
  );
}
