// components/GridItem.jsx
'use client';

export default function GridItem({ title, icon, link }) {
  return (
    <a href={link} className="bg-zinc-800 text-white p-4 rounded-lg text-center hover:bg-zinc-700">
      <div className="text-3xl mb-1">{icon}</div>
      <div className="text-sm">{title}</div>
    </a>
  );
}
