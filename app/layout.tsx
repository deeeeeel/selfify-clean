// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Selfify — Amplify Your Self',
  description: 'Platform refleksi dan penguatan diri untuk Gen Z, Millennial, dan Gen X',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 font-sans antialiased">{children}</body>
    </html>
  );
}
