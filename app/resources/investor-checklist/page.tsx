import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Target, CheckCircle2, Clock, Send } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Investor Readiness Checklist | Startup Kare",
  description: "30+ points every founder must check before meeting VCs or Angels.",
};

export default function InvestorChecklist() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A]">
      <Navbar />
      <section className="pt-40 pb-16 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-8"><ArrowLeft size={16} /> Back to Resources</Link>
          <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">Checklist</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 6 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
            Investor Readiness <span className="italic text-[#B48A32]">Checklist</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg dark:prose-invert">
          <h2 className="font-serif">Before You Pitch</h2>
          <p>Use this checklist to ensure your pitch meetings are efficient and focused — a short, evidence-backed deck saves time for both founders and investors.</p>

          <ul className="list-none p-0 space-y-4 mt-8">
            {[
              'One-line problem statement',
              'Clear go-to-market plan',
              'Unit economics and CAC payback',
              'Customer references or case studies',
              'Realistic use of funds'
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-indigo-600 mt-1" />
                <div>
                  <div className="font-bold dark:text-white">{item}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Short guidance for this item.</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 p-12 rounded-[40px] bg-slate-950 text-white text-center shadow-2xl">
             <h3 className="text-3xl font-serif font-bold mb-6">Want a review of your deck?</h3>
             <p className="text-slate-400 mb-10">Submit your deck and our team will provide actionable feedback.</p>
             <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-[#B48A32] text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                Request Deck Review <Send size={20} />
             </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
