import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, BarChart3, CheckCircle2, Clock, Send } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "0 to 1M ARR SaaS Guide | Startup Kare",
  description: "Deep dive into LTV, CAC, and churn metrics to hit your first million.",
};

export default function SaasGuide() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A]">
      <Navbar />
      <section className="pt-40 pb-16 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-8"><ArrowLeft size={16} /> Back to Resources</Link>
          <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">Playbook</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 10 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
            0 to 1M ARR <span className="italic text-[#B48A32]">SaaS</span> Guide
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg dark:prose-invert">
          <h2 className="font-serif">Key SaaS Metrics</h2>
          <p>Understand the relationships between LTV, CAC, churn and how to optimise them to reach your first million in ARR.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
             <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                <BarChart3 className="text-indigo-600 mb-4" />
                <h4 className="font-bold dark:text-white">LTV & CAC</h4>
                <p className="text-sm text-slate-500">How to calculate and improve economic payback periods.</p>
             </div>
             <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                <CheckCircle2 className="text-indigo-600 mb-4" />
                <h4 className="font-bold dark:text-white">Retention</h4>
                <p className="text-sm text-slate-500">Tactics to increase cohort retention and reduce churn.</p>
             </div>
          </div>

          <h2 className="font-serif">Growth Checklist</h2>
          <ul className="list-none p-0 space-y-4">
            {['Segmented onboarding','Paid acquisition experiments','Referral loops','Pricing tests'].map(item => (
              <li key={item} className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                <CheckCircle2 size={18} className="text-indigo-600" /> {item}
              </li>
            ))}
          </ul>

          <div className="mt-20 p-12 rounded-[40px] bg-slate-950 text-white text-center shadow-2xl">
             <h3 className="text-3xl font-serif font-bold mb-6">Want experiments run for you?</h3>
             <p className="text-slate-400 mb-10">We run fast experiments to find scalable acquisition channels.</p>
             <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-[#B48A32] text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                Book Growth Experiments <Send size={20} />
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
