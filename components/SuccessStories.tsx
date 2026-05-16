'use client';

import { CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, FinSync',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
    badge: 'RAISED ₹5CR • SERIES A',
    linkedin: '#', // Link yahan dalien
    quote: 'StartupKare took us from idea to ₹2 Cr seed round in 8 months. Their investor network is unmatched in India.',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, GreenLeaf D2C',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200',
    badge: 'DPIIT RECOGNIZED • 2024',
    linkedin: '#',
    quote: 'DPIIT recognition, GST, trademarks, term sheet review — all done by one team. Saved us months of headache.',
  },
  {
    name: 'Rohan Iyer',
    role: 'CEO, Synapse Health',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200',
    badge: 'BOOTSTRAPPED • ₹3CR ARR',
    linkedin: '#',
    quote: 'Their CFO-on-demand service helped us prepare for SME IPO. We listed on NSE Emerge in 2026.',
  }
];

export function SuccessStories() {
  return (
    <section
      id="testimonials"
      className="relative py-32 !bg-white dark:!bg-[#02040A] overflow-hidden transition-colors duration-500 border-none outline-none z-10"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/[0.03] dark:bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-10">
            Real Founder Success
          </div>
          <h2 className="text-5xl md:text-7xl font-normal !text-slate-950 dark:!text-white mb-10 leading-[1.05] tracking-tight font-serif max-w-5xl mx-auto transition-colors">
            Built on Trust, <span className="italic !text-[#B48A32] dark:!text-[#E4C37B] font-serif">Verified by</span> Founders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative !bg-slate-50 dark:!bg-white/[0.02] border !border-slate-200 dark:!border-white/5 rounded-[40px] p-10 lg:p-12 flex flex-col transition-all duration-500 hover:shadow-2xl dark:hover:shadow-none hover:!border-indigo-500/50"
            >
              <div className="mb-8 select-none flex justify-between items-start">
                <span className="text-7xl font-serif leading-none !text-indigo-600/10 dark:!text-[#938BF1]/20">“</span>
                {/* LinkedIn Verification Link */}
                <a href={item.linkedin} target="_blank" className="text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>

              <p className="!text-slate-700 dark:!text-gray-300 text-[18px] lg:text-[19px] leading-relaxed mb-16 flex-grow font-normal italic">
                {item.quote}
              </p>

              <div className="pt-10 border-t !border-slate-200 dark:!border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-md">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold !text-slate-900 dark:!text-white text-lg tracking-tight">{item.name}</h4>
                    <p className="!text-slate-500 dark:!text-gray-500 text-sm font-medium">{item.role}</p>
                  </div>
                </div>
                
                {/* Authentic Result Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg !bg-indigo-50 dark:!bg-indigo-500/10 border !border-indigo-100 dark:!border-indigo-500/20 shadow-sm">
                  <CheckCircle2 size={12} className="text-green-600 dark:text-green-400" />
                  <span className="text-[9px] font-black !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.15em]">
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}