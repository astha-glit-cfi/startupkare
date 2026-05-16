'use client';

import { useState } from 'react'; // 1. useState import kiya
import { ArrowRight, Play } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal'; // 2. Modal import karein (path check kar lena)

export  default  function Hero() {
  // 3. Modal state handle karne ke liye
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative h-auto flex flex-col !bg-white dark:!bg-[#0D0E25] pt-32 pb-10 overflow-hidden transition-colors duration-500"
    >
      {/* Background Lighting Logic same rahega... */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,56,202,0.05)_0%,transparent_80%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.5)_0%,rgba(2,6,23,1)_80%)] z-0"></div>
      
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 md:px-12 w-full">
        {/* Top Badge same rahega... */}
        <div className="inline-flex items-center gap-3 px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-slate-600 dark:!text-gray-300 uppercase tracking-[0.2em] mb-10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]"></span>
          India's #1 Startup Consulting Partner
        </div>

        <div className="max-w-5xl">
          <h1 className="!text-slate-950 dark:!text-white text-3xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.1] mb-8 tracking-tight font-serif transition-colors duration-500">
            We build the <span className="italic !text-[#B48A32] dark:!text-[#E4C37B] font-serif">Foundations</span><br />
            of future giants
          </h1>

          <p className="!text-slate-600 dark:!text-slate-400 text-lg md:text-xl font-normal mb-10 max-w-3xl leading-relaxed transition-colors duration-500">
            From <span className="!text-slate-900 dark:!text-white font-bold">Idea to IPO</span> — Business Consulting, Funding, Legal, IT Services and everything your startup needs to thrive.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            {/* 4. BUTTON PAR onClick LAGAYA MODAL OPEN KARNE KE LIYE */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 px-10 py-5 bg-[#938BF1] text-black font-bold rounded-xl text-base hover:bg-[#8278E6] transition-all shadow-xl shadow-indigo-500/20 group cursor-pointer"
            >
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="#services"
              className="flex items-center gap-3 px-10 py-5 !bg-slate-100/50 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 !text-slate-900 dark:!text-white rounded-xl font-bold text-base transition-all duration-300 group backdrop-blur-sm cursor-pointer hover:scale-[1.02] hover:!border-indigo-500/50"
            >
              <div className="w-6 h-6 rounded-full border border-slate-300 dark:border-white/30 flex items-center justify-center transition-colors group-hover:border-indigo-500">
                <Play size={10} fill="currentColor" className="ml-0.5" />
              </div>
              Explore Services
            </a>
          </div>
        </div>

        {/* Stats Section Logic same rahega... */}
        <div className="w-full border-t !border-slate-200 dark:!border-white/10 pt-12">
            {/* ... stats code here ... */}
        </div>
      </div>

      {/* 5. MODAL COMPONENT KO YAHAN RAKHA */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}