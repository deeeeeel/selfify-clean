import Image from 'next/image';

export const metadata = {
  title: 'Self-Worth Lo Bukan dari Gaji',
  description: 'Nilai diri lo nggak ditentuin slip gaji. Yuk bahas kenapa self-worth itu harus datang dari dalam.',
};

export default function ArtikelPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Thumbnail */}
      <div className="mb-6">
  <img
    src="/assets/artikel/self-worth.webp"
    alt="Self-Worth Thumbnail"
    className="rounded-xl object-cover w-full"
  />
</div>

      {/* Judul */}
      <h1 className="text-3xl font-bold text-yellow-500 mb-2">
        Self-Worth Lo Bukan dari Gaji
      </h1>
      <p className="text-sm text-blue-700 mb-6">Kategori: Mental Health</p>

      {/* Konten */}
      <div className="space-y-5 leading-relaxed">
        <p>Lo pernah ngerasa gaji lo rendah banget dibanding temen-temen satu circle? Atau udah kerja keras, tapi tetap ngerasa gak cukup? Pelan-pelan bro, bisa jadi lo lagi terjebak di ilusi: "gue baru berharga kalau penghasilan gue tinggi."</p>

        <h2 className="text-xl font-semibold text-blue-800">1. Slip Gaji Bukan Cermin Nilai Diri</h2>
        <p>Gaji itu penting, kita semua tahu. Tapi menjadikan gaji sebagai satu-satunya tolok ukur nilai diri itu bahaya. Gaji cuma angka — sedangkan diri lo punya cerita, perjuangan, dan nilai yang nggak bisa ditakar uang.</p>

        <p>Ada jutaan pekerja sosial, guru, pejuang UMKM, sampai seniman jalanan yang punya impact besar ke lingkungan mereka. Tapi gaji mereka? Kadang bahkan di bawah UMR. Apakah mereka nggak layak dihargai? Tentu layak. Justru mereka punya makna yang lebih luas dari sekadar angka.</p>

        <h2 className="text-xl font-semibold text-blue-800">2. Validasi Diri Gak Datang dari Luar</h2>
        <p>Lo kerja keras, ngerasa belum cukup, terus ngeliat orang lain di sosmed flexing liburan atau mobil baru. Gampang banget buat ngerasa “kalah”. Padahal, lo gak hidup buat balapan. Validasi terbaik adalah saat lo bisa bangun pagi dan bilang ke diri sendiri: “Gue cukup. Gue udah berproses.”</p>

        <h2 className="text-xl font-semibold text-blue-800">3. Sistem Kerja Modern Bikin Kita Lupa Tujuan Hidup</h2>
        <p>Kapitalisme dan hustle culture bikin kita sering lupa: hidup itu bukan cuma kerja. Kita diajarin buat jadi produktif, tapi lupa buat jadi manusia utuh. Kerja keras boleh, tapi jangan sampai kehilangan arah. Sukses itu gak harus naik jabatan tiap tahun. Kadang sukses itu sesimpel bisa pulang tenggo dan makan malam bareng keluarga.</p>

        <h2 className="text-xl font-semibold text-blue-800">4. Hidup Gak Cuma Tentang Kompetisi</h2>
        <p>Kita hidup di era banding-bandingan. LinkedIn ngasih notifikasi tiap orang promosi. Instagram penuh dengan pencapaian orang lain. Tanpa sadar, kita bikin standar kebahagiaan pakai hidup orang lain. Padahal, lo punya jalur sendiri. Lo bisa punya definisi sukses sendiri — dan itu valid.</p>

        <h2 className="text-xl font-semibold text-blue-800">5. Ukur Diri dari Hal-Hal yang Bermakna</h2>
        <p>Coba pikirin ini:</p>
        <ul className="list-disc ml-6">
          <li>Lo lagi berjuang keluar dari burnout? Itu kuat.</li>
          <li>Lo masih bangkit dari trauma masa lalu? Itu hebat.</li>
          <li>Lo berani mulai usaha kecil, meski belum cuan? Itu berani.</li>
        </ul>
        <p>Ini semua adalah bentuk nilai diri yang gak bisa dibeli atau ditunjukin lewat angka.</p>

        <h2 className="text-xl font-semibold text-blue-800">6. Reframe Pola Pikir: Dari Gaji ke Growth</h2>
        <p>Dari pada nanya, “Gaji gue cukup nggak?”, coba ubah jadi: “Apakah gue berkembang dari versi gue yang kemarin?” Self-worth itu soal berkembang, bukan pamer hasil. Soal bangga sama langkah kecil lo, bukan cuma hasil besar yang bisa di-posting.</p>

        <h2 className="text-xl font-semibold text-blue-800">Penutup: Lo Udah Berharga</h2>
        <p>Nilai diri lo gak muncul karena angka. Nilai diri lo udah ada — karena lo manusia, karena lo punya cerita, dan karena lo terus bertumbuh. Lo gak perlu jadi kaya buat jadi berharga. Lo gak harus punya jabatan tinggi buat layak dihargai.</p>

        {/* CTA */}
        <div className="mt-8 bg-yellow-100 p-4 rounded-lg text-center">
          <p className="mb-2 text-lg font-semibold text-yellow-700">Udah cukup dibanding-bandingin.</p>
          <p className="mb-4 text-sm text-gray-800">Sekarang giliran lo kenal lebih dalam sama diri lo:</p>
          <a
            href="/quiz/q2"
            className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Quiz: Apa Value Diri Lo Sebenarnya?
          </a>
        </div>
      </div>
    </div>
  );
}
