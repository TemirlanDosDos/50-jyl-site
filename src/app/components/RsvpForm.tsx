import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import { Loader2, Send } from 'lucide-react';

interface RsvpFormData {
  name: string;
  guests: string;
  isComing: string;
}

export const RsvpForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<RsvpFormData>({
    defaultValues: {
      guests: "1",
      isComing: "yes"
    }
  });

  const isComingStatus = watch("isComing");

  const onSubmit = async (data: RsvpFormData) => {
    setIsSubmitting(true);
    try {
      /* 
        =============================================================================
        TELEGRAM BOT CONFIGURATION (NO SUPABASE NEEDED)
        =============================================================================
        To make this work, replace the placeholders below with your actual Bot Token 
        and Chat ID.
        
        1. Message @BotFather on Telegram to create a bot and get the BOT_TOKEN.
        2. Message @userinfobot to get your CHAT_ID.
        3. Replace below:
      */
      const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
      const CHAT_ID = "YOUR_CHAT_ID_HERE";
      
      const messageText = `
🎉 Жаңа жауап (Мерейтой):
Аты-жөні: ${data.name}
Келе ме?: ${data.isComing === 'yes' ? 'Иә, келемін ✅' : 'Өкінішке орай, келе алмаймын ❌'}
${data.isComing === 'yes' ? `Қонақтар саны: ${data.guests}` : ''}
      `;

      // In production, ensure you do not commit real tokens to public repositories.
      // For this pure frontend implementation as requested, we call Telegram directly.
      const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      
      // Attempt to send to Telegram (It will fail in preview if token is dummy, 
      // but we simulate success for the UI).
      if (BOT_TOKEN !== "YOUR_BOT_TOKEN_HERE") {
        await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: messageText,
          }),
        });
      } else {
        // Simulate network request for the preview since we don't have a real token
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Mock submission:", messageText);
      }

      toast.success('Жауабыңыз қабылданды! Рахмет!', {
        style: { background: '#000', color: '#fff', border: '1px solid #333', fontFamily: '"VT323", monospace', fontSize: '1.2rem' }
      });
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Қате кетті. Қайта көріңізші.', {
        style: { background: '#300', color: '#fff', border: '1px solid red', fontFamily: '"VT323", monospace', fontSize: '1.2rem' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-vt323 text-xl max-w-lg mx-auto">
        
        {/* Name */}
        <div className="space-y-2">
          <label className="block text-gray-300 uppercase tracking-wider">Аты-жөніңіз</label>
          <input
            {...register("name", { required: "Аты-жөніңізді жазыңыз" })}
            type="text"
            className="w-full bg-black/50 border border-white/30 p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
            placeholder="Мысалы: Ерасыл"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
        </div>

        {/* Attendance */}
        <div className="space-y-2">
          <label className="block text-gray-300 uppercase tracking-wider">Мерейтойға келесіз бе?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                {...register("isComing")} 
                type="radio" 
                value="yes" 
                className="w-5 h-5 accent-cyan-400"
              />
              <span className="text-white">Иә, қуана келемін</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                {...register("isComing")} 
                type="radio" 
                value="no" 
                className="w-5 h-5 accent-red-400"
              />
              <span className="text-white">Келе алмаймын</span>
            </label>
          </div>
        </div>

        {/* Guests Count */}
        {isComingStatus === 'yes' && (
          <div className="space-y-2">
            <label className="block text-gray-300 uppercase tracking-wider">Қонақтар саны</label>
            <select
              {...register("guests")}
              className="w-full bg-black/50 border border-white/30 p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="1">1 адам</option>
              <option value="2">2 адам</option>
              <option value="3">3 адам</option>
              <option value="4">4 адам</option>
              <option value="5">5+ адам</option>
            </select>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full vhs-button mt-8 flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5" />
              Жіберу
            </>
          )}
        </button>
      </form>
    </>
  );
};
