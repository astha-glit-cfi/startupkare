'use client';

import { useState } from 'react'; // useState import kiya
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal'; // Modal ko import karein

export function CommunitySection() {
  // Modal ki state handle karne ke liye
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-32 !bg-white dark:!bg-[#02040A] overflow-hidden flex justify-center items-center px-6 transition-colors duration-500"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[65%] bg-indigo-500/[0.03] dark:bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-purple-500/[0.02] dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1440px] w-full relative z-10 flex justify-center">
        <div className="relative w-full max-w-6xl z-10 !bg-slate-50 dark:!bg-[#0A0B1E] rounded-[56px] p-10 md:p-24 border !border-slate-200 dark:border-white/[0.03] overflow-hidden shadow-2xl dark:shadow-[0_0_100px_-20px_rgba(99,102,241,0.3)] flex items-center min-h-[550px] transition-all duration-500">

          {/* Internal Corner Light */}
          <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>

          <div className="relative z-10 w-full text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center px-4 py-2 !bg-white dark:!bg-white/5 border !border-slate-200 dark:border-[#E5C37B]/20 rounded-full text-[10px] font-bold !text-indigo-700 dark:text-[#E5C37B] uppercase tracking-[0.25em] mb-14 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full !bg-indigo-600 dark:bg-[#E5C37B] mr-2 animate-pulse"></span>
              Free 30-Min Discovery Call
            </div>

            <h2 className="!text-slate-950 dark:!text-white text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.05] tracking-tight mb-14 transition-colors duration-500">
              Let's build your <br className="hidden lg:block" />
              <span className="italic font-serif !text-[#B48A32] dark:text-[#E5C37B] font-medium">unfair advantage.</span>
            </h2>

            <p className="!text-slate-600 dark:!text-gray-400 text-lg md:text-xl font-normal mb-16 max-w-2xl leading-relaxed">
              Talk to a senior consultant. Get a custom roadmap. No commitment, no pitch — just clarity on your next move.
            </p>

            <div className="flex flex-wrap gap-7">
              {/* BOOK YOUR CALL BUTTON - Link kiya modal se */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 px-12 py-5 bg-[#938BF1] dark:bg-[#E5C37B] text-black rounded-2xl font-bold text-lg hover:bg-[#8278E6] dark:hover:bg-[#d4b26a] transition-all shadow-xl shadow-indigo-500/10 dark:shadow-[0_15px_35px_rgba(229,195,123,0.3)] group"
              >
                <Calendar size={22} strokeWidth={2.5} />
                Book Your Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="flex items-center justify-center px-12 py-5 !bg-white dark:!bg-white/[0.02] !text-slate-900 dark:!text-white border !border-slate-300 dark:border-white/10 rounded-2xl font-bold text-lg hover:!bg-slate-100 dark:hover:bg-white/5 transition-all shadow-sm">
                <MessageCircle size={22} className="mr-2 !text-indigo-600 dark:!text-white" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL COMPONENT - Isme form details hain */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}