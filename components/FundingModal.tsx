'use client';

import { X, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function FundingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // AGAR ISOPEN FALSE HAI TOH KUCH MAT DIKHAO
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop (Is par click karne se modal band hona chahiye) */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
      ></div>
      
      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0B0D1A] rounded-[32px] overflow-hidden shadow-2xl z-[210] animate-in zoom-in duration-300">
        <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-red-500 z-50"
        >
            <X size={24}/>
        </button>
        
        <div className="p-8 md:p-12 text-left">
           <h3 className="text-2xl font-bold dark:text-white mb-2">Funding Eligibility Form</h3>
           {/* ... Baki ka form code jo maine pehle diya tha ... */}
        </div>
      </div>
    </div>
  );
}