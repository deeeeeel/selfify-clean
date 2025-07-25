import { Briefcase } from 'lucide-react';

export default function BizBoostCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6 text-white">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">BizBoost</h3>
        <Briefcase className="text-yellow-400" size={20} />
      </div>
      <p className="text-sm text-zinc-400 mb-4">
        Dapatkan dorongan ekstra buat ide atau usaha lo. Temukan cara baru buat tumbuh bareng komunitas.
      </p>
      <button className="w-full bg-yellow-400 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg transition-colors">
        Cari Peluang
      </button>
    </div>
  );
}
