'use client';

// FIX: Yahan ArrowRight add kar diya hai
import { Trophy, ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    slug: 'seed-round-closure',
    title: 'Seed Round Closure',
    client: 'FINTECH STARTUP',
    tag: 'FUNDRAISING',
    description: 'Closed ₹5Cr Series A in 8 months by refining financial models and investor matching.',
    metrics: [
      { label: 'Valuation Jump', value: '2.5x' },
      { label: 'Investor Intros', value: '15+' },
      { label: 'Capital Raised', value: '₹5Cr' },
    ],
    icon: '💰',
  },
  {
    slug: 'dpiit-tax-exemption',
    title: 'DPIIT & Tax Exemption',
    client: 'D2C RETAIL BRAND',
    tag: 'COMPLIANCE',
    description: 'Secured 3-year income tax holiday and government procurement benefits.',
    metrics: [
      { label: 'Tax Saved', value: '₹12L/yr' },
      { label: 'Status', value: 'Verified' },
      { label: 'Grants', value: '₹5L' },
    ],
    icon: '🏛️',
  },
  {
    slug: 'market-dominance',
    title: 'Market Dominance',
    client: 'SAAS PLATFORM',
    tag: 'STRATEGY',
    description: 'Achieved 300% revenue growth using our strategic go-to-market roadmap.',
    metrics: [
      { label: 'Users', value: '50K+' },
      { label: 'Revenue', value: '300%↑' },
      { label: 'MRR', value: '₹40L+' },
    ],
    icon: '📈',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-32 !bg-white dark:!bg-[#02040A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-700 dark:text-[#938BF1] uppercase tracking-[0.2em] mb-8">
            <Trophy size={14} /> Proven Outcomes
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-bold !text-slate-950 dark:!text-white mb-6"> 
            Our <span className="italic text-[#B48A32] dark:text-[#E4C37B]">Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-slate-50 dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/5 rounded-[40px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-4xl">{study.icon}</div>
                <span className="text-[10px] font-black text-indigo-600 dark:text-[#938BF1] uppercase tracking-widest">{study.tag}</span>
              </div>
              
              <h3 className="text-2xl font-bold !text-slate-900 dark:!text-white mb-1 font-serif">
                {study.title}
              </h3>
              <p className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-widest">{study.client}</p>
              
              <p className="text-[15px] !text-slate-600 dark:!text-gray-400 mb-8 leading-relaxed line-clamp-3">
                {study.description}
              </p>

              <div className="space-y-3 mb-10 flex-grow">
                {study.metrics.map((metric, midx) => (
                  <div key={midx} className="flex justify-between items-center py-2 border-b border-slate-200/60 dark:border-white/5 last:border-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{metric.label}</span>
                    <span className="text-[14px] font-black !text-slate-900 dark:text-indigo-300 flex items-center gap-1">
                      {metric.value} <CheckCircle2 size={12} className="text-green-500" />
                    </span>
                  </div>
                ))}
              </div>

              <Link 
                href={`/case-studies/${study.slug}`}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/10 active:scale-95"
              >
                Access Full Report <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}