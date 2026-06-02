import React from 'react';

export const Calendar: React.FC = () => {
  // September 2026 starts on Tuesday (index 2 for Mon-based, or index 2 for Sun-based if Sun=0)
  // Let's use Monday as the first day of the week.
  // 1 Sept 2026 is Tuesday.
  const daysInMonth = 30;
  
  // Empty slots before the 1st of September (if Monday is first day)
  const emptyDays = 1; 

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="border border-white/20 p-6 md:p-8 bg-black/50 backdrop-blur-md max-w-md mx-auto font-vt323 mt-16">
      <div className="text-center mb-6">
        <h3 className="text-3xl text-white uppercase tracking-widest border-b border-white/20 pb-4">Қыркүйек 2026</h3>
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center mb-4 text-gray-400 text-lg uppercase">
        <div>Дс</div>
        <div>Сс</div>
        <div>Ср</div>
        <div>Бс</div>
        <div>Жм</div>
        <div className="text-red-400">Сн</div>
        <div className="text-red-400">Жс</div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center text-xl">
        {Array.from({ length: emptyDays }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2"></div>
        ))}
        
        {daysArray.map((day) => (
          <div 
            key={day} 
            className={`p-2 flex items-center justify-center
              ${day === 12 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'text-gray-300 hover:text-white transition-colors'}
            `}
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center text-gray-400 text-lg border-t border-white/20 pt-4">
        12 Қыркүйек — Мерейтой күні
      </div>
    </div>
  );
};
