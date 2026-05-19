'use client';

import { BookOpen, FileText, Download, ArrowRight, Lightbulb, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    title: "Startup Funding Playbook 2024",
    category: "FUNDRAISING",
    type: "Guide",
    desc: "A complete step-by-step guide on how to prepare your pitch deck and value your startup.",
    icon: <FileText size={24} />,
    href: "/resources/seed-funding-india" // Naya Link
  },
  {
    title: "DPIIT Recognition Explainer",
    category: "GOVT SCHEMES",
    type: "Report",
    desc: "Understanding the 3-year tax holiday and other benefits under the Startup India mission.",
    icon: <ShieldCheck size={24} />,
    href: "/resources/dpiit-guide" // Naya Link
  },
  {
    title: "MSME ZED Certification Blueprint",
    category: "GROWTH",
    type: "Playbook",
    desc: "How to achieve Zero Defect manufacturing and avail government subsidies for your unit.",
    icon: <Lightbulb size={24} />,
    href: "/resources/msme-zed-certification" // Naya Link
  }
];

export function KnowledgeHub() {
  return (
    <section id="resources" className="relative py-32 !bg-white dark:!bg-[#02040A] transition-colors border-t border-slate-100 dark:border-white/5 scroll-mt-24">
      
      {/* Background Subtle Detail */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-700 dark:text-[#938BF1] uppercase tracking-[0.25em] mb-8">
              Authority & Insights
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold !text-slate-950 dark:!text-white leading-[1.1] mb-6">
              Thought <span className="italic text-[#B48A32] dark:text-[#E4C37B]">Leadership.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-gray-400 max-w-xl font-normal leading-relaxed">
              Proprietary playbooks and industry reports designed to help founders build bulletproof foundations.
            </p>
          </div>
          
         <Link href="/resources" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#B48A32] flex items-center gap-2 transition-all group">
  Access All Guides <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
</Link> 
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {resources.map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="group p-10 bg-slate-50 dark:bg-[#0B0D1A] border border-slate-200 dark:border-white/5 rounded-[40px] hover:!border-[#B48A32]/40 dark:hover:!border-[#E4C37B]/30 hover:shadow-2xl transition-all flex flex-col h-full relative overflow-hidden"
            >
              {/* Top Row: Icon & Badge */}
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-indigo-600 dark:text-[#938BF1] shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <span className="px-3 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm">
                  {item.type}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold !text-slate-900 dark:!text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-[#E4C37B] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-12 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Footer CTA */}
              <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em] group-hover:text-indigo-600 transition-colors">
                  Open Guide <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-gray-600 group-hover:text-[#B48A32] transition-all">
                   <Download size={16} />
                </div>
              </div>

              {/* Decorative Corner Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B48A32]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}