// app/layout.tsx
import '../styles/globals.css';
import BottomNav from '@/components/BottomNav';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Selfify — Amplify Your Self',
  description: 'Platform refleksi dan penguatan diri untuk Gen Z, Millennial, dan Gen X',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans bg-white text-gray-900 antialiased">
        {/* Logo / Header */}
        <header className="flex justify-center items-center py-4 border-b border-gray-200">
          <Link href="/">
            <Image
              src="/assets/logo-selfify.svg"
              alt="Logo Selfify"
              width={160}
              height={40}
              priority
            />
          </Link>
        </header>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-56px)]">{children}</main>

        {/* Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}
