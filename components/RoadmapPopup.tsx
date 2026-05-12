'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Loader2, ChevronDown } from 'lucide-react';

export default function RoadmapPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '', // Initial empty for placeholder
  });

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem('roadmap_submitted')) return;

    let intervalId: NodeJS.Timeout;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        window.removeEventListener('scroll', handleScroll);
        // Har 5 second mein check karega popup dikhane ke liye
        intervalId = setInterval(() => {
          setIsOpen((prev) => (!prev ? true : prev));
        }, 5000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.industry) {
        alert("Please select an industry");
        return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem('roadmap_submitted', 'true');
        setIsOpen(false);
        alert("Success! Your roadmap is being prepared.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || !isOpen) return null;

  const inputClass = "w-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-slate-900 dark:text-white outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400";

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      <div className="relative w-full max-w-4xl bg-white dark:bg-[#060B1A] rounded-[40px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-500">
        
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 z-30 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all shadow-sm">
          <X size={18} />
        </button>

        {/* LEFT SIDE: Brand Info */}
        <div className="relative md:w-[42%] p-10 md:p-12 flex flex-col justify-center bg-indigo-50 dark:bg-[#040814] border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600/10 dark:bg-white/5 border border-indigo-600/20 dark:border-white/10 rounded-full text-[9px] font-bold text-indigo-700 dark:text-[#E5C37B] uppercase tracking-widest mb-8">
              <Sparkles size={12} className="text-indigo-600 dark:text-[#E5C37B]" /> Free Roadmap
            </div>

            <h3 className="!text-slate-950 dark:!text-white text-4xl font-serif font-extrabold leading-tight mb-8">
              Your Startup <br />
              <span className="italic text-[#B48A32] dark:text-[#E5C37B]">Roadmap</span>, on us.
            </h3>

            <ul className="space-y-5">
              {[
                "Personalized scheme matches", 
                "Funding readiness audit", 
                "Compliance checklist"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm !text-slate-700 dark:!text-white/80 font-medium">
                  <CheckCircle2 size={18} className="text-indigo-600 dark:text-[#938BF1]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="md:w-[58%] p-10 md:p-14 bg-white dark:bg-[#060B1A] flex flex-col justify-center">
          <h4 className="text-2xl text-slate-900 dark:text-white font-serif font-bold mb-10 text-left">Tell us about you</h4>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1.5 text-left">
              <label className="text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest ml-1">Full name *</label>
              <input type="text" required placeholder="Jane Doe" className={inputClass} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest ml-1">Email *</label>
                <input type="email" required placeholder="jane@startup.com" className={inputClass} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest ml-1">Phone *</label>
                <input type="tel" required placeholder="+91 98765 43210" className={inputClass} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>

            <div className="space-y-1.5 text-left relative">
              <label className="text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest ml-1">Industry</label>
              <div className="relative">
                <select 
                  required 
                  className={`${inputClass} appearance-none cursor-pointer pr-10`} 
                  value={formData.industry} 
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  style={{ colorScheme: 'light dark' }}
                >
                  <option value="" disabled>Select Industry</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Ecommerce">E-commerce & D2C</option>
                  <option value="SaaS">SaaS & Software</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Edtech">Edtech</option>
                  <option value="AI">AI & Tech</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 dark:text-white text-slate-900" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/20 mt-4 flex items-center justify-center gap-2 group active:scale-95">
              {loading ? <Loader2 className="animate-spin" /> : <>Send My Roadmap <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}