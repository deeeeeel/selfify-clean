// File: lib/dummyConfess.ts
// Deskripsi: Array confession dummy lengkap dengan properti id & comments

export type DummyConfess = {
  id: number;
  text: string;
  love: number;
  like: number;
  comments: number;
};

export const dummyConfess: DummyConfess[] = [
  { id: 1,  text: "Kadang gue merasa sendiri di tengah keramaian.",      love: 23, like: 150, comments: 42 },
  { id: 2,  text: "Gue takut gagal, makanya gue ga mulai-mulai.",         love: 27, like: 143, comments: 17 },
  { id: 3,  text: "Gue ngerasa ga berguna akhir-akhir ini.",             love: 8,  like: 77,  comments: 6  },
  { id: 4,  text: "Mereka pikir gue bahagia, padahal cuma jago acting.", love: 31, like: 172, comments: 28 },
  { id: 5,  text: "Gue suka sama temen sendiri. Ribet ga sih?",           love: 21, like: 124, comments: 19 },
  { id: 6,  text: "Kadang gue capek, tapi ga bisa cerita ke siapa-siapa.",love: 7,  like: 85,  comments: 9  },
  { id: 7,  text: "Kadang gue takut sendirian di malam gelap.",           love: 19, like:  98, comments: 14 },
  { id: 8,  text: "Pikiran gue muter mulu, ga bisa tidur.",               love: 14, like: 110, comments: 23 },
  { id: 9,  text: "Gue rindu masa lalu tapi juga ga mau balik.",          love: 17, like:  95, comments: 11 },
  { id: 10, text: "Gue butuh tempat buat cerita, dan horizon gue sempit.",love: 12, like: 102, comments: 8  },
];
