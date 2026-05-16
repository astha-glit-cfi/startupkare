'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  ArrowLeft, FileText, Layout, Target, 
  TrendingUp, BarChart3, Cpu, Download 
} from 'lucide-react';
import Link from 'next/link';

const allResources = [
  {
    title: "Startup Scaling Framework",
    category: "Startup Scaling",
    desc: "A proven blueprint for moving from Seed stage to Series A with efficiency.",
    icon: <TrendingUp className="text-blue-500" />,
    type: "Guide"
  },
  {
    title: "Investor Readiness Checklist",
    category: "Investor Readiness",
    desc: "30+ points every founder must check before meeting VCs or Angels.",
    icon: <Target className="text-red-500" />,
    type: "Checklist"
  },
  {
    title: "0 to 1M ARR SaaS Guide",
    category: "SaaS Metrics",
    desc: "Deep dive into LTV, CAC, and Churn metrics to hit your first million.",
    icon: <BarChart3 className="text-emerald-500" />,
    type: "Playbook"
  },
  {
    title: "GTM Strategy Blueprint",
    category: "GTM Strategy",
    desc: "Step-by-step Go-To-Market plan for launching in competitive markets.",
    icon: <Layout className="text-purple-500" />,
    type: "Blueprint"
  },
  {
    title: "AI Growth Engine",
    category: "AI Growth",
    desc: "How to integrate AI into your operational workflows for 10x output.",
    icon: <Cpu className="text-indigo-500" />,
    type: "Report"
  },
  {
    title: "Founder Agreement Template",
    category: "Legal Setup",
    desc: "A legally-vetted framework for co-founder vesting and equity split.",
    icon: <FileText className="text-amber-500" />,
    type: "Template"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-left">
          <Link href="/" className="inline-flex items-center gap-2 text-[#B48A32] font-bold text-[10px] uppercase tracking-widest mb-8 hover:gap-4 transition-all">
             <ArrowLeft size={14} /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-950 dark:text-white mb-6 uppercase tracking-tighter">
            Resource <span className="italic text-[#B48A32]">Library.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
            Proprietary frameworks and playbooks curated for high-growth founders. 
            All insights are based on 1000+ consulting engagements.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allResources.map((res, i) => (
            <div 
              key={i} 
              className="group p-10 bg-slate-50 dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/5 rounded-[48px] hover:shadow-2xl hover:border-[#B48A32]/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 dark:border-white/5">
                {res.icon}
              </div>

              <div className="flex-grow">
                <div className="text-[10px] font-black text-[#B48A32] uppercase tracking-[0.3em] mb-4">
                  {res.category}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950 dark:text-white mb-4 leading-tight group-hover:text-[#B48A32] transition-colors">
                  {res.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10">
                  {res.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-white/5">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{res.type}</span>
                 <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-950 dark:text-white hover:text-[#B48A32] transition-colors">
                    Access <Download size={14} className="text-[#B48A32]" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}