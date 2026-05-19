'use client';

import { CheckCircle2, } from 'lucide-react';

const testimonials = [
  { 
    name: 'Aarav Mehta',
    role: 'Founder, FinSync',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
    badge: 'RAISED ₹5CR • SERIES A',
    linkedin: '#',
    quote: 'StartupKare took us from idea to ₹2 Cr seed round in 8 months. Their investor network is unmatched in India.',
    impact: ['Equity Structuring', 'Pitch Deck Design', 'Investor Connects']
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, GreenLeaf D2C',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200',
    badge: 'DPIIT RECOGNIZED • 2024',
    linkedin: '#',
    quote: 'DPIIT recognition, GST, trademarks, term sheet review — all done by one team. Saved us months of headache.',
    impact: ['IP Protection', 'GST Compliance', 'DPIIT Registration']
  },
  {
    name: 'Rohan Iyer',
    role: 'CEO, Synapse Health',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200',
    badge: 'BOOTSTRAPPED • ₹3CR ARR',
    linkedin: '#',
    quote: 'Their CFO-on-demand service helped us prepare for SME IPO. We listed on NSE Emerge in 2026.',
    impact: ['IPO Readiness', 'CFO Services', 'Financial Audits']
  }
];

export function SuccessStories() {
  return (
    <section
      id="testimonials"
      className="relative py-32 !bg-white dark:!bg-[#02040A] overflow-hidden transition-colors duration-500 z-10"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-10">
            Real Founder Success
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold !text-slate-950 dark:!text-white mb-10 leading-[1.05] tracking-tight">
            Built on Trust, <span className="italic !text-[#B48A32] dark:!text-[#E4C37B]">Verified by</span> Founders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-[500px] !bg-slate-50 dark:!bg-[#0B0F1A] border !border-slate-200 dark:!border-white/5 rounded-[48px] overflow-hidden transition-all duration-500 hover:shadow-2xl shadow-sm"
            >
              
              {/* --- FRONT FACE (Jo hamesha dikhta hai) --- */}
              <div className="p-10 lg:p-12 flex flex-col h-full transition-all duration-500 group-hover:opacity-20 group-hover:blur-sm group-hover:scale-95">
                <div className="mb-8">
                  <span className="text-7xl font-serif leading-none !text-indigo-600/10 dark:!text-[#938BF1]/20">“</span>
                </div>

                <p className="!text-slate-700 dark:!text-gray-300 text-lg leading-relaxed mb-12 flex-grow italic">
                  {item.quote}
                </p>

                <div className="pt-8 border-t !border-slate-200 dark:!border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div>
                      <h4 className="font-bold !text-slate-900 dark:!text-white text-md">{item.name}</h4>
                      <p className="text-slate-500 text-xs uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm">
                    <CheckCircle2 size={10} className="text-green-500" />
                    <span className="text-[9px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">{item.badge}</span>
                  </div>
                </div>
              </div>

              {/* --- INTERACTIVE OVERLAY POP-UP (Hover hone par slide hoga) --- */}
              <div className="absolute inset-0 !bg-slate-900/90 dark:!bg-[#938BF1] backdrop-blur-md flex flex-col items-center justify-center p-10 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                
                {/* 1. Pop Image */}
                <div className="relative mb-6 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 delay-100">
                  <div className="relative w-28 h-24 mb-4">
                     <img 
                       src={item.image} 
                       className="w-full h-full rounded-3xl object-cover border-4 border-white shadow-2xl" 
                       alt={item.name} 
                     />
                     <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="18" 
  height="18" 
  viewBox="0 0 24 24" 
  fill="currentColor" 
  stroke="none"
>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
</svg>
                  </div>
                </div>

                {/* 2. Impact Content */}
                <h3 className="text-white font-serif italic text-2xl mb-2">{item.name}</h3>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Consulting Impact</p>
                
                <div className="w-full space-y-3 mb-10">
                   {item.impact.map((point, i) => (
                     <div key={i} className="flex items-center justify-center gap-3 text-white font-bold text-sm">
                        <CheckCircle2 size={16} className="text-white shrink-0" />
                        <span className="border-b border-white/20 pb-0.5">{point}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto">
                    <p className="text-[9px] font-black text-white uppercase tracking-[0.3em] opacity-40">Startup Kare • Excellence</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}