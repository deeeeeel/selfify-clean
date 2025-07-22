'use client';
import Link from 'next/link';
import { FaHome, FaUser, FaArrowLeft } from 'react-icons/fa';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white shadow-inner py-2">
      <div className="flex justify-around max-w-[360px] mx-auto text-black">
        <Link href="#" className="text-xl"><FaArrowLeft /></Link>
        <Link href="/" className="text-xl"><FaHome /></Link>
        <Link href="/profile" className="text-xl"><FaUser /></Link>
      </div>
    </nav>
  );
}
