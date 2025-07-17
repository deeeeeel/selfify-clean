// app/layout.tsx
import '../styles/globals.css';
import BottomNav from '@/components/BottomNav';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Selfify — Amplify Your Self',
  description: 'Platform refleksi dan penguatan diri untuk Gen Z, Millennial, dan Gen X',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
