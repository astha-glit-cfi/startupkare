import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, TrendingUp, CheckCircle2, Send, BarChart4 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Startup Scaling Framework | Startup Kare",
  description: "Blueprint for moving from Seed to Series A with efficiency.",
};

export default function ScalingFramework() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A]">
      <Navbar />
      <section className="pt-40 pb-16 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-8"><ArrowLeft size={16} /> Back to Resources</Link>
          <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">Guide</span>
            <span className="flex items-center gap-1"><BarChart4 size={12} /> 8 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
            Startup <span className="italic text-[#B48A32]">Scaling</span> Framework
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg dark:prose-invert">
          <h2 className="font-serif">Scaling with Repeatability</h2>
          <p>Moving from product-market fit to repeatable growth requires processes, metrics, and the right team structure. This guide outlines practical steps founders can execute in the next 90 days.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
             <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                <BarChart4 className="text-indigo-600 mb-4" />
                <h4 className="font-bold dark:text-white">Scaling Metrics</h4>
                <p className="text-sm text-slate-500">KPIs to watch: retention cohorts, CAC payback, gross margin expansion.</p>
             </div>
             <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                <TrendingUp className="text-indigo-600 mb-4" />
                <h4 className="font-bold dark:text-white">Growth Playbooks</h4>
                <p className="text-sm text-slate-500">Repeatable onboarding flows and referral loops that scale.</p>
             </div>
          </div>

          <h2 className="font-serif">Operational Checklist</h2>
          <ul className="list-none p-0 space-y-4">
             {[
               "Define 3 growth levers",
               "Document your onboarding funnel",
               "Set weekly cohort reviews",
               "Hire for repeatable roles"
             ].map(item => (
               <li key={item} className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 size={18} className="text-indigo-600" /> {item}
               </li>
             ))}
          </ul>

          <div className="mt-20 p-12 rounded-[40px] bg-slate-950 text-white text-center shadow-2xl">
             <h3 className="text-3xl font-serif font-bold mb-6">Need help scaling faster?</h3>
             <p className="text-slate-400 mb-10">Our growth team can help operationalise your playbook and run experiments.</p>
             <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-[#B48A32] text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                Book a Growth Call <Send size={20} />
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
