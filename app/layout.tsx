// app/layout.tsx

import "../styles/globals.css";
import type { ReactNode } from "react";

// Tidak perlu import BottomNav di layout, biar BottomNav hanya muncul di page tertentu (misal: homepage).
// import BottomNav from "@/components/BottomNav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#faf8fd] min-h-screen w-full">
        {/* WRAPPER MAX WIDTH MOBILE */}
        <div className="mx-auto max-w-[360px] w-full bg-[#faf8fd] min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
