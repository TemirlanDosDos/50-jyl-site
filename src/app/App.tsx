import React, { useState, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { StartScreen } from './components/StartScreen';
import { MainContent } from './components/MainContent';
import '../styles/retro.css';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-black text-white crt-effect selection:bg-cyan-500/30">
        <Helmet>
          <title>Рустем • 50 Жас Мерейтой</title>
          <meta name="description" content="Сіздерді өмірімнің жарты ғасырлық белесі – 50 жасқа толған мерейтойыма арналған ақ дастарханымның қадірлі қонағы болуға шақырамын!" />
          
          {/* Open Graph / Telegram / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Рустем • 50 Жас Мерейтой" />
          <meta property="og:description" content="Сіздерді өмірімнің жарты ғасырлық белесі – 50 жасқа толған мерейтойыма арналған ақ дастарханымның қадірлі қонағы болуға шақырамын!" />
          {/* Замените YOUR_IMAGE_URL на прямую ссылку на картинку для превью */}
          <meta property="og:image" content="https://images.unsplash.com/photo-1599073499036-dc27fc297dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Рустем • 50 Жас Мерейтой" />
          <meta name="twitter:description" content="50 жасқа толған мерейтойыма шақырамын!" />
          <meta name="twitter:image" content="https://images.unsplash.com/photo-1599073499036-dc27fc297dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
        </Helmet>
        
        <div className="tape-noise"></div>
        <div className="scanline"></div>
        
        {/* 
          ОСЫ ЖЕРГЕ ӨЗІҢІЗДІҢ МУЗЫКАҢЫЗДЫҢ СІЛТЕМЕСІН ҚОЙЫҢЫЗ:
          src="YOUR_AUDIO_URL_HERE" немесе файлды public папкасына салып src="/my-music.mp3" деп жазыңыз.
        */}
        <audio 
          ref={audioRef}
          src="YOUR_AUDIO_URL_HERE" 
          loop 
        />

        {!isOpened ? (
          <StartScreen onOpen={handleOpen} />
        ) : (
          <MainContent />
        )}
      </div>
    </HelmetProvider>
  );
}
