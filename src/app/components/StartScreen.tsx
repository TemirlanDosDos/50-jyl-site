import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

interface StartScreenProps {
  onOpen: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onOpen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).toUpperCase();
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-zinc-900">
      {/* Background Vintage Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale mix-blend-overlay"
        style={{ backgroundImage: 'url("https://i.ibb.co.com/Ngn4x78S/picture.png")' }}
      ></div>

      {/* VCR UI overlays */}
      <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
        <div className="vhs-text text-2xl flex items-center gap-2">
          <Play className="w-6 h-6 fill-white" /> PLAY
        </div>
        <div className="vhs-text text-xl text-green-400">SP</div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 text-right flex flex-col gap-1">
        <div className="vhs-text text-2xl tracking-widest">{formatTime(time)}</div>
        <div className="vhs-text text-xl">{formatDate(time)}</div>
      </div>

      <div className="absolute top-8 right-8 z-10">
        <div className="vhs-text text-xl">CH 03</div>
      </div>

      {/* Main Action */}
      <div className="z-10 flex flex-col items-center gap-8 px-4 text-center">
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="vhs-text text-5xl md:text-7xl font-bold tracking-widest text-white mb-2">
            МЕРЕЙТОЙ
          </h1>
          <p className="vhs-text text-xl text-gray-300 tracking-wider">
            РУСТЕМ • 50 ЖАС
          </p>
        </div>

        <button 
          onClick={onOpen}
          className="vhs-button group flex items-center gap-3 mt-8"
        >
          <Play className="w-5 h-5 group-hover:fill-black transition-colors" />
          <span>АШУ</span>
        </button>
      </div>
    </div>
  );
};
