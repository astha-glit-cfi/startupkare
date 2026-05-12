'use client';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, FinSync',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
    badge: 'SEED-FUNDED • 2025',
    quote: 'StartupKare took us from idea to ₹2 Cr seed round in 8 months. Their investor network is unmatched in India.',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, GreenLeaf D2C',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200',
    badge: 'BOOTSTRAPPED • ₹3CR ARR',
    quote: 'DPIIT recognition, GST, trademarks, term sheet review — all done by one team. Saved us months of headache.',
  },
  {
    name: 'Rohan Iyer',
    role: 'CEO, Synapse Health',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200',
    badge: 'NSE EMERGE • 2026',
    quote: 'Their CFO-on-demand service helped us prepare for SME IPO. We listed on NSE Emerge in 2026.',
  }
];

export function SuccessStories() {
  return (
    <section
      id="testimonials"
      /* PB-20: Niche se professional gap ke liye | border-none: Line hatane ke liye */
      className="relative pt-32 pb-20 !bg-white dark:!bg-[#02040A] overflow-hidden transition-colors duration-500 border-none outline-none z-10"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/[0.03] dark:bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-10">
            Founders Speak
          </div>
          <h2 className="text-5xl md:text-7xl font-normal !text-slate-950 dark:!text-white mb-10 leading-[1.05] tracking-tight font-serif max-w-5xl mx-auto transition-colors duration-500">
            Built on Trust, <span className="italic !text-[#B48A32] dark:!text-[#E4C37B] font-serif">Measured in</span> Outcomes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative !bg-slate-50 dark:!bg-white/[0.02] border !border-slate-200 dark:!border-white/5 rounded-[40px] p-10 lg:p-12 flex flex-col transition-all duration-500 hover:!border-indigo-500/50 shadow-xl dark:shadow-none"
            >
              <div className="mb-10 select-none">
                <span className="text-7xl font-serif leading-none !text-indigo-600/10 dark:!text-[#938BF1]/20 transition-colors">“</span>
              </div>

              <p className="!text-slate-700 dark:!text-gray-300 text-[18px] lg:text-[19px] leading-relaxed mb-16 flex-grow font-normal italic">
                {item.quote}
              </p>

              <div className="pt-10 border-t !border-slate-200 dark:!border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/20">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold !text-slate-900 dark:!text-white text-lg tracking-tight">{item.name}</h4>
                    <p className="!text-slate-500 dark:!text-gray-500 text-sm font-medium">{item.role}</p>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-md !bg-indigo-50 dark:!bg-indigo-500/10 text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.2em]">
                  {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Blue/Dark Line deleted from here */}
    </section>
  );
}