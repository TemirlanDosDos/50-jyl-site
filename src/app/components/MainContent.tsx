import React from 'react';
import { RsvpForm } from './RsvpForm';
import { Countdown } from './Countdown';
import { Calendar as CalendarWidget } from './Calendar';
import { Heart, Calendar, MapPin, Music } from 'lucide-react';
import { motion } from 'motion/react';

export const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative z-10 pb-24 font-cormorant text-gray-200">
      {/* Background Vintage Texture */}
      <div className="fixed inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1636119475872-7e84f2f737f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 pt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-8 h-8 text-red-500/80 animate-pulse" fill="currentColor" />
          </div>
          <p className="text-xl md:text-2xl uppercase tracking-[0.3em] mb-4 text-gray-400 font-vt323">
            Мерейтойға шақыру
          </p>
          <h1 className="text-6xl md:text-8xl mb-8 tracking-wide font-semibold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Рустем<br />
            <span className="text-5xl md:text-7xl italic text-cyan-400 my-4 inline-block font-vt323">50 Жас</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 max-w-2xl mx-auto font-cormorant mb-6">
            Құрметті ағайын-туыс, бауырлар, құда-жекжат, достар мен әріптестер!<br/><br/>
            Сіздерді өмірімнің жарты ғасырлық белесі – 50 жасқа толған мерейтойыма арналған ақ дастарханымның қадірлі қонағы болуға шақырамын. Қуанышымды бөлісіп, осы кештің сәнін кіргізіңіздер!
          </p>
          <p className="text-2xl md:text-3xl font-vt323 text-cyan-400 mt-8">
            Той иелері: Балалары
          </p>
        </motion.div>

        {/* Details Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 font-vt323"
        >
          <div className="border border-white/20 p-8 backdrop-blur-sm bg-black/40 hover:bg-white/5 transition-colors duration-500">
            <Calendar className="w-10 h-10 mb-6 text-cyan-400" />
            <h3 className="text-2xl uppercase tracking-widest text-white mb-4">Уақыты</h3>
            <p className="text-xl text-gray-300">12 Қыркүйек 2026</p>
            <p className="text-xl text-gray-300 mt-2">Жиналу уақыты: 19:00</p>
            <p className="text-xl text-gray-300">Басталуы: 20:00</p>
          </div>

          <div className="border border-white/20 p-8 backdrop-blur-sm bg-black/40 hover:bg-white/5 transition-colors duration-500 flex flex-col items-start">
            <MapPin className="w-10 h-10 mb-6 text-red-400" />
            <h3 className="text-2xl uppercase tracking-widest text-white mb-4">Мекен-жайы</h3>
            <p className="text-xl text-gray-300">Деркул ПДП2, Абылай хан 113</p>
            <p className="text-xl text-gray-300">"BAQ Saray" мейрамханасы</p>
            <a 
              href="https://2gis.kz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-white/30 px-4 py-2 text-gray-300 hover:text-white hover:border-white/60 transition-colors bg-white/5"
            >
              <img src="/src/imports/image.png" alt="2GIS" className="w-6 h-6 object-contain" />
              <span className="text-lg">Картадан көру</span>
            </a>
          </div>
        </motion.div>

        {/* Calendar and Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 flex flex-col items-center"
        >
          <CalendarWidget />
          <Countdown />
        </motion.div>

        {/* Polaroids/Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video md:aspect-[21/9] mb-32 border border-white/10 p-2 bg-white/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1599073499036-dc27fc297dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwNTB0aCUyMGJpcnRoZGF5JTIwcGFydHl8ZW58MXx8fHwxNzgwNDI3OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Vintage Jubilee" 
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 font-vt323 text-xl text-white backdrop-blur-md">
            REC 🔴
          </div>
        </motion.div>

        {/* RSVP Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          id="rsvp"
          className="border border-white/30 p-8 md:p-12 bg-black/60 backdrop-blur-md relative overflow-hidden"
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/50"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/50"></div>

          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-vt323 tracking-widest text-white mb-4">
              Жауабыңызды күтемін
            </h2>
            <p className="text-xl text-gray-400 font-cormorant italic">
              Мерейтойға келетініңізді раст��уыңызды сұраймын
            </p>
          </div>

          <RsvpForm />
        </motion.div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-black/80 border border-white/20 p-3 rounded-full animate-bounce">
          <Music className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </div>
  );
};
