import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const targetDate = new Date('2026-09-12T19:00:00');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center font-vt323 mt-12 w-full max-w-2xl mx-auto">
      <div className="flex flex-col items-center justify-center p-4 border border-white/20 bg-black/40 backdrop-blur-sm">
        <span className="text-4xl md:text-6xl text-white mb-2 text-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          {timeLeft.days.toString().padStart(2, '0')}
        </span>
        <span className="text-sm md:text-lg text-gray-400 uppercase tracking-widest">Күн</span>
      </div>
      <div className="flex flex-col items-center justify-center p-4 border border-white/20 bg-black/40 backdrop-blur-sm">
        <span className="text-4xl md:text-6xl text-white mb-2 text-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span className="text-sm md:text-lg text-gray-400 uppercase tracking-widest">Сағат</span>
      </div>
      <div className="flex flex-col items-center justify-center p-4 border border-white/20 bg-black/40 backdrop-blur-sm">
        <span className="text-4xl md:text-6xl text-white mb-2 text-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span className="text-sm md:text-lg text-gray-400 uppercase tracking-widest">Минут</span>
      </div>
      <div className="flex flex-col items-center justify-center p-4 border border-white/20 bg-black/40 backdrop-blur-sm">
        <span className="text-4xl md:text-6xl text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <span className="text-sm md:text-lg text-gray-400 uppercase tracking-widest">Секунд</span>
      </div>
    </div>
  );
};
