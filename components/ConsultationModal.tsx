'use client';

import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* 1. Backdrop: Light mode mein halka shadow, dark mein deep black */}
      <div 
        className="absolute inset-0 bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* 2. Main Modal: Base (Light) is WHITE, Dark is NAVY */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#060B1A] rounded-[40px] shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col md:flex-row animate-in zoom-in duration-300">
        
        {/* Close Button: Adaptive colors */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-20 p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all shadow-sm"
        >
          <X size={20} />
        </button>

        {/* LEFT SECTION: Branding Panel */}
        {/* Light: Halka indigo | Dark: Deep Navy */}
        <div className="w-full md:w-[42%] bg-indigo-50 dark:bg-[#040814] p-10 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5">
            <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 bg-indigo-600/10 dark:bg-white/5 border border-indigo-600/20 dark:border-white/10 rounded-full text-[9px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest mb-8 w-fit">
                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2 animate-pulse"></span>
                   Free Roadmap
                </div>
                
                {/* Heading: Light mode mein Slate-900 (Blackish) rahega */}
                <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    Your Startup <br />
                    <span className="italic text-[#B48A32] dark:text-[#E4C37B]">Roadmap</span>, on us.
                </h2>

                <div className="space-y-5">
                    {[
                        'Personalized scheme matches',
                        'Funding readiness audit',
                        'Compliance checklist'
                    ].map((text) => (
                        <div key={text} className="flex items-center gap-3 text-slate-600 dark:text-indigo-100/70 text-sm font-medium">
                            <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* RIGHT SECTION: The Form */}
        {/* Light: Pure White | Dark: Navy */}
        <div className="w-full md:w-[58%] p-10 md:p-14 bg-white dark:bg-[#060B1A]">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">Tell us about you</h3>
            
            <form className="space-y-6">
                {/* Full Name Input */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-gray-500 ml-1">Full Name *</label>
                    <input 
                        required
                        type="text" 
                        placeholder="Jane Doe" 
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600" 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-gray-500 ml-1">Email *</label>
                        <input 
                            required
                            type="email" 
                            placeholder="jane@startup.com" 
                            className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400" 
                        />
                    </div>
                    {/* Phone Input */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-gray-500 ml-1">Phone *</label>
                        <input 
                            required
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400" 
                        />
                    </div>
                </div>

                {/* Stage Select */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-gray-500 ml-1">Stage</label>
                    <select className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white outline-none cursor-pointer focus:border-indigo-500 transition-all appearance-none">
                        <option>Idea Stage</option>
                        <option>Prototype / MVP</option>
                        <option>Early Traction</option>
                        <option>Scaling</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 group mt-4"
                >
                    Send My Roadmap
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}