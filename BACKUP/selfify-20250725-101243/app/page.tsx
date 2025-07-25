import { Lock, Heart, MessageSquare, Briefcase, Share2, Download, Gamepad2, User, Home, Play, SkipForward } from 'lucide-react';

export default function HomePage() {
  return (
    // Kontainer utama dengan latar belakang hitam dan teks putih
    <div className="bg-black text-white min-h-screen font-sans max-w-md mx-auto">
      <div className="p-4 pb-24"> {/* Padding bawah untuk footer */}
        
        {/* Header */}
        <header className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-zinc-400 mb-2">Senin, 21 Juli, 2025</p>
            {/* Music Player Bar */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-2 flex items-center space-x-3">
                <div className="w-12 h-12 bg-zinc-700 rounded-md flex-shrink-0">
                    {/* Placeholder untuk album art */}
                </div>
                <div className="flex-grow">
                    <p className="font-bold text-sm">Lover</p>
                    <p className="text-xs text-zinc-400">Taylor Swift</p>
                </div>
                <div className="flex items-center space-x-3 pr-2">
                    <button className="text-zinc-300">
                        <Play size={22} />
                    </button>
                    <button className="text-zinc-300">
                        <SkipForward size={22} />
                    </button>
                </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-12 h-12 rounded-full border border-zinc-400 flex items-center justify-center">
              <User size={24} className="text-zinc-400" />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              4
            </span>
          </div>
        </header>

        <main>
          {/* Kotak Confess */}
          <div className="border border-zinc-700 rounded-lg p-2 mb-6">
            <textarea
              placeholder="What's on your mind..."
              className="w-full bg-transparent text-white placeholder-zinc-500 border-none focus:ring-0 h-20 resize-none"
            ></textarea>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-4 text-zinc-400">
                <span>👍</span>
                <span>❤️</span>
                <span>💬</span>
              </div>
              <button className="bg-zinc-800 text-white text-sm font-semibold border border-zinc-600 rounded-full px-4 py-2">
                Confess wall
              </button>
            </div>
          </div>

          {/* Quiz Move On */}
          <section className="mb-8">
            <h2 className="text-center text-xl mb-4">Quiz Move On</h2>
            <div className="grid grid-cols-2 gap-4">
              <QuizCard title="Mental Check in" icon={<Heart size={20} />} likes="412" />
              <QuizCard title="Character Scanner" icon={<Heart size={20} />} likes="412" />
            </div>
          </section>

          {/* Quotes Mood */}
          <section className="mb-8">
            <h2 className="text-center text-xl mb-4">Quotes Mood</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="w-full h-48 bg-zinc-800 rounded-lg flex items-center justify-center">
                 <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-600">
                    <path d="M21.25 13.75L16.75 9.25L11.5 14.5L8.5 11.5L3.75 16.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 2.5H7.5C5.01472 2.5 3 4.51472 3 7V17C3 19.4853 5.01472 21.5 7.5 21.5H16.5C18.9853 21.5 21 19.4853 21 17V7C21 4.51472 18.9853 2.5 16.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 8.5C9.32843 8.5 10 7.82843 10 7C10 6.17157 9.32843 5.5 8.5 5.5C7.67157 5.5 7 6.17157 7 7C7 7.82843 7.67157 8.5 8.5 8.5Z" fill="currentColor"/>
                 </svg>
              </div>
              <div className="flex justify-between items-center mt-4 px-2">
                <button className="text-zinc-400"><Share2 size={24} /></button>
                <button className="text-zinc-400"><Download size={24} /></button>
              </div>
            </div>
          </section>
          
          {/* 2AM Lounge */}
          <section className="mb-8">
            <div className="relative mb-2">
              <input type="text" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 pr-10" />
              <Lock size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
            <button className="w-full bg-white text-black font-bold text-lg rounded-lg py-3">2Am LOUNGE</button>
          </section>

          {/* Deep Talk & Survive Mode */}
          <section className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              <ActionCard title="Deep Talk" icon={<MessageSquare size={48} strokeWidth={1.5} />} buttonText="Lets Talk" />
              <ActionCard title="Survive Mode" icon={<Briefcase size={48} strokeWidth={1.5} />} buttonText="Lets Talk" />
            </div>
          </section>
          
          {/* Collabs Wall & BizBoost */}
          <section className="grid grid-cols-2 gap-4 mb-8">
              <div>
                  <h3 className="font-semibold mb-2">Collabs Wall</h3>
                  <div className="h-20 bg-zinc-900 border border-zinc-800 rounded-lg"></div>
              </div>
              <div>
                  <h3 className="font-semibold mb-2">BizBoost</h3>
                  <div className="h-20 bg-zinc-900 border border-zinc-800 rounded-lg"></div>
              </div>
          </section>

          {/* Grid List */}
          <section className="grid grid-cols-2 gap-2">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
          </section>

        </main>
        
        {/* Footer Navigation */}
        <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-zinc-900 border-t border-zinc-800">
          <div className="flex justify-around items-center h-16">
            <button className="text-zinc-400"><Gamepad2 size={28} /></button>
            <button className="bg-zinc-700 text-white rounded-full w-14 h-14 flex items-center justify-center -mt-8 border-4 border-black">
              <Home size={28} />
            </button>
            <button className="text-zinc-400"><User size={28} /></button>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Komponen Card untuk Quiz
const QuizCard = ({ title, icon, likes }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center">
    <div className="self-end flex items-center gap-1 text-sm text-zinc-400">
      {icon}
      <span>{likes}</span>
    </div>
    <h3 className="text-lg font-bold mt-2 mb-4">{title}</h3>
    <button className="bg-zinc-800 text-white text-sm font-semibold border border-zinc-600 rounded-full px-6 py-2 mt-auto">
      Cek Quiz
    </button>
  </div>
);

// Komponen Card untuk Deep Talk/Survive Mode
const ActionCard = ({ title, icon, buttonText }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center gap-3">
    <h3 className="text-lg font-bold">{title}</h3>
    <div className="my-2 text-zinc-300">{icon}</div>
    <button className="bg-zinc-800 text-white text-sm font-semibold border border-zinc-600 rounded-full px-6 py-2 mt-auto">
      {buttonText}
    </button>
  </div>
);

// Komponen untuk item di grid bawah
const GridItem = () => (
    <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        <div className="w-16 h-16 bg-zinc-800 flex-shrink-0"></div>
        <div className="p-2">
            <p className="font-bold text-sm">Title</p>
            <p className="text-xs text-zinc-400">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
    </div>
);