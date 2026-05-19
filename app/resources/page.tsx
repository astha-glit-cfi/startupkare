'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  ArrowLeft, FileText, Layout, Target, 
  TrendingUp, BarChart3, Cpu, Download, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const allResources = [
  {
    title: "Startup Scaling Framework",
    slug: "scaling-framework", // Agar iska folder nahi hai toh bana lena ya existing use karna
    category: "Startup Scaling",
    desc: "A proven blueprint for moving from Seed stage to Series A with efficiency.",
    icon: <TrendingUp className="text-blue-500" />,
    type: "Guide"
  },
  {
    title: "Investor Readiness Checklist",
    slug: "investor-checklist",
    category: "Investor Readiness",
    desc: "30+ points every founder must check before meeting VCs or Angels.",
    icon: <Target className="text-red-500" />,
    type: "Checklist"
  },
  {
    title: "0 to 1M ARR SaaS Guide",
    slug: "saas-guide",
    category: "SaaS Metrics",
    desc: "Deep dive into LTV, CAC, and Churn metrics to hit your first million.",
    icon: <BarChart3 className="text-emerald-500" />,
    type: "Playbook"
  },
  {
    title: "DPIIT Recognition Explainer",
    slug: "dpiit-guide", // Yeh aapke folder name se match kar raha hai
    category: "Govt Schemes",
    desc: "Understanding the 3-year tax holiday and other benefits under Startup India.",
    icon: <Layout className="text-purple-500" />,
    type: "Report"
  },
  {
    title: "MSME ZED Certification",
    slug: "msme-zed-certification", // Yeh aapke folder name se match kar raha hai
    category: "Manufacturing",
    desc: "How to achieve Zero Defect manufacturing and avail govt subsidies.",
    icon: <Cpu className="text-indigo-500" />,
    type: "Blueprint"
  },
  {
    title: "Seed Funding India Guide",
    slug: "seed-funding-india", // Yeh aapke folder name se match kar raha hai
    category: "Funding",
    desc: "A complete step-by-step guide on how to prepare your pitch deck.",
    icon: <FileText className="text-amber-500" />,
    type: "Template"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500 text-left">
      <Navbar />

      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-left animate-in fade-in slide-in-from-top-4 duration-1000">
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
            <Link 
              key={i} 
              href={`/resources/${res.slug}`} // Click hone par is path par jayega
              className="group flex flex-col h-full"
            >
              <div 
                className="p-10 bg-slate-50 dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/5 rounded-[48px] hover:shadow-2xl hover:border-[#B48A32]/40 transition-all duration-500 flex flex-col h-full cursor-pointer relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                  {res.icon}
                </div>

                <div className="flex-grow">
                  <div className="text-[10px] font-black text-[#B48A32] uppercase tracking-[0.3em] mb-4">
                    {res.category}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950 dark:text-white mb-4 leading-tight group-hover:text-[#B48A32] transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10 line-clamp-3">
                    {res.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-white/5">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{res.type}</span>
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-950 dark:text-white group-hover:text-[#B48A32] transition-colors">
                      Open Guide <ArrowRight size={14} className="text-[#B48A32]" />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}