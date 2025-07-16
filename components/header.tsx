'use client';

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-6 px-2">
      {/* Logo kosong dulu */}
      <div className="w-28 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
        Logo
      </div>

      {/* Avatar user */}
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
        <span className="text-xl">👤</span>
      </div>
    </div>
  );
}
