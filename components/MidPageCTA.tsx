'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal'; // Path sahi check kar lena

export function MidPageCTA() {
  // 1. Modal state handle karne ke liye
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 px-6 !bg-white dark:!bg-[#02040A] transition-colors duration-500">
      <div className="max-w-6xl mx-auto p-10 md:p-16 rounded-[48px] bg-indigo-600 text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-20 -mb-20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
            Not sure where to <span className="italic text-indigo-200">start?</span>
          </h2>
          
          <p className="text-indigo-50 mb-12 max-w-2xl mx-auto text-lg md:text-xl font-normal opacity-90">
            Get a free 30-minute strategy session with our senior partners. No commitment, just a clear roadmap for your startup's growth.
          </p>

          {/* 2. BUTTON PAR onClick LAGAYA MODAL OPEN KARNE KE LIYE */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group px-12 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-[1.02] active:scale-95 flex items-center gap-3 mx-auto"
          >
            Book My Free Slot
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-8 text-xs font-bold text-indigo-200 uppercase tracking-[0.2em] opacity-80">
            Limited Slots Available per week
          </p>
        </div>
      </div>

      {/* 3. MODAL COMPONENT KO YAHAN RENDER KIYA */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}