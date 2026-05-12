'use client';

import { Sparkles, ArrowRight } from 'lucide-react';

export function AITools() {
  return (
    <section className="py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-premium p-10 md:p-14 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/5 rounded-bl-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="section-label bg-[#0B1D3A]/5 text-[#0B1D3A]"><Sparkles size={14} className="text-[#FF6B35]" /> AI Integration</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D3A] mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Automate Your <br />
                <span className="text-[#FF6B35]">Pitch & Plans</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Stop wasting weeks on documentation. Our proprietary AI tools generate investor-ready pitch decks, robust business plans, and validate your core ideas in seconds.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Instant Pitch Deck Generator', 'Business Model Validation', 'Financial Projection AI'].map((item, i) => (
                  <li key={i} className="flex items-center text-[#0B1D3A] font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B35] mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="btn-primary">
                Try AI Tools Free <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="relative h-[400px] w-full rounded-2xl bg-[#0B1D3A] p-6 shadow-2xl overflow-hidden flex flex-col">
              <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B35] shrink-0"></div>
                  <div className="p-4 rounded-2xl bg-white/10 text-white text-sm font-medium w-3/4 shadow-sm">
                    Generate a pitch deck for a SaaS company in logistics.
                  </div>
                </div>
                <div className="flex gap-4 items-start flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-white shrink-0 flex items-center justify-center font-bold text-[#0B1D3A] text-xs">SK</div>
                  <div className="p-4 rounded-2xl bg-[#0B1D3A] border border-white/10 text-gray-300 text-sm w-3/4 shadow-sm">
                    Generating your 12-slide Pitch Deck...
                    <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-[#00E5A0] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
