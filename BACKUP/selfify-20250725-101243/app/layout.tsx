// app/layout.tsx
import '../styles/globals.css';  // <- pastikan path ini benar
import { ReactNode } from 'react';
import BottomNav from '@/components/BottomNav';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
    <body>{children}</body>
    </html>
  );
}
