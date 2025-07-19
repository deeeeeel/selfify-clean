// app/layout.tsx
import '../styles/globals.css';
import BottomNav from '@/components/BottomNav';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Modal hanya client-side
const GreetingModal = dynamic(() => import('@/components/GreetingModal'), { ssr: false });

export const metadata = {
  title: 'Selfify — Amplify Your Self',
  description: 'Platform refleksi dan penguatan diri untuk Gen Z, Millennial, dan Gen X',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        {/* Pop-up greeting */}
        <GreetingModal />

        {/* Konten halaman */}
        {children}

        {/* Bottom navigation */}
        <BottomNav />
      </body>
    </html>
  );
}
