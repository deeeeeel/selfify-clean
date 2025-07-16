'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navs = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Quiz', href: '/quiz', icon: '🧠' },
  { name: 'Confess', href: '/confess', icon: '💬' },
  { name: 'Artikel', href: '/artikel', icon: '📖' },
  { name: 'Lounge', href: '/lounge', icon: '🔒' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner flex justify-around py-2 z-50">
      {navs.map((nav, i) => {
        const active = pathname === nav.href;
        return (
          <Link
            key={i}
            href={nav.href}
            className={`text-xs flex flex-col items-center ${
              active ? 'text-blue-600 font-bold' : 'text-gray-500'
            }`}
          >
            <span className="text-xl">{nav.icon}</span>
            {nav.name}
          </Link>
        );
      })}
    </nav>
  );
}
