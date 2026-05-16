'use client';

import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle, Sparkles, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', stage: 'Idea Stage', challenge: 'Fundraising'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Yahan aapka MongoDB API logic aayega
    setTimeout(() => { setLoading(false); onClose(); }, 1500); 
  };

  const inputClass = "w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-slate-900 dark:text-white outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400";

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#060B1A] rounded-[40px] shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col md:flex-row animate-in zoom-in duration-300">
        
        <button onClick={onClose} className="absolute top-6 right-6 z-30 p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all"><X size={20} /></button>

        {/* LEFT SECTION */}
        <div className="w-full md:w-[42%] bg-indigo-600 dark:bg-[#040814] p-10 md:p-12 flex flex-col justify-center text-white relative">
            <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-[9px] font-bold uppercase tracking-widest mb-8">
                   <Sparkles size={12} className="mr-2"/> Free Strategy Session
                </div>
                
                <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">
                    Get Your Startup <br />
                    <span className="italic text-[#E4C37B]">Roadmap</span>, on us.
                </h2>

                <div className="space-y-5 mb-10">
                    {['30-Min Strategy Call', 'Govt. Scheme Eligibility', 'Fundraising Audit'].map((text) => (
                        <div key={text} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-[#E4C37B]" /> {text}
                        </div>
                    ))}
                </div>

                {/* Quick WhatsApp Integration inside Modal */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-[10px] text-white/50 uppercase tracking-widest mb-4">Or Connect Instantly</p>
                    <a href="https://wa.me/919876543210" target="_blank" className="flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                        <MessageCircle size={20} /> WhatsApp an Expert
                    </a>
                </div>
            </div>
        </div>

        {/* RIGHT SECTION (Form) */}
        <div className="w-full md:w-[58%] p-10 md:p-14 bg-white dark:bg-[#060B1A]">
            <div className="mb-10">
                <h3 className="text-2xl font-bold !text-slate-900 dark:!text-white mb-2">Tell us about you</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400">Join 500+ founders who scaled with us.</p>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input required type="text" placeholder="Jane Doe" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                        <input required type="email" placeholder="jane@startup.com" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                        <input required type="tel" placeholder="+91 98765 43210" className={inputClass} />
                    </div>
                </div>

                {/* HIGH VALUE FIELDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Stage</label>
                        <select className={inputClass + " appearance-none"}>
                            <option>Idea Stage</option>
                            <option>MVP / Prototype</option>
                            <option>Early Traction</option>
                            <option>Scaling</option>
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Biggest Challenge</label>
                        <select className={inputClass + " appearance-none"}>
                            <option>Fundraising</option>
                            <option>Govt. Schemes</option>
                            <option>Legal & Compliance</option>
                            <option>Tech / MVP</option>
                        </select>
                    </div>
                </div>

                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 group mt-4"
                >
                    {loading ? <Loader2 className="animate-spin" /> : <>Book Free Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}