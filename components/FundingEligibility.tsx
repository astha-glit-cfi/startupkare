'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FundingModal } from './FundingModal'; // <-- Path check karein sahi hai na?

export function FundingEligibility() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-0 !bg-white dark:!bg-[#02040A] overflow-hidden flex flex-col items-center">
      {/* Background and other UI... */}
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-[1.75rem] md:text-[2.5rem] font-bold !text-slate-900 dark:!text-white mb-8">
           Check Your Eligibility
        </h2>

        {/* 1. BUTTON PAR ONCLICK HONA CHAHIYE */}
        <button 
          onClick={() => {
            console.log("Button Clicked!"); // Console mein check karein click ho raha hai ya nahi
            setIsModalOpen(true);
          }}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm shadow-xl hover:scale-105 transition-all cursor-pointer relative z-30"
          style={{ background: 'linear-gradient(90deg, #3B2667 0%, #E95260 100%)' }}
        >
          Check Your Eligibility
          <ArrowUpRight size={16} />
        </button>

        {/* Baki ka UI code... */}
      </div>

      {/* 2. MODAL COMPONENT SECTION KE END MEIN HONA CHAHIYE */}
      <FundingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}