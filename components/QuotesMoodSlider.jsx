'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { useRef } from 'react';
import { Download, Share2 } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/assets/quotes/mq1.svg',
  '/assets/quotes/mq2.svg',
  '/assets/quotes/mq3.svg',
  '/assets/quotes/mq4.svg',
];

export default function QuotesMoodSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-md">
      <Slider {...settings} ref={sliderRef}>
        {images.map((src, i) => (
          <div key={i} className="relative h-72 w-full">
            <Image
              src={src}
              alt={`Quote ${i + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-between items-center p-3 text-zinc-400">
        <button onClick={() => sliderRef.current.slickNext()} className="flex items-center gap-1">
          <span className="text-sm">🎲 Random</span>
        </button>
        <div className="flex space-x-4">
          <button><Share2 size={20} /></button>
          <button><Download size={20} /></button>
        </div>
      </div>
    </div>
  );
}
