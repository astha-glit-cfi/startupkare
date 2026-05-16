import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TrendingUp, CheckCircle2, Clock, ArrowLeft, Send, BarChart4 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Seed Funding Guide for Indian Founders (2024) | Startup Kare",
  description: "Learn how to raise your first ₹50L to ₹5Cr. A comprehensive playbook on pitch decks, valuation, and angel networks.",
  keywords: ["seed funding India", "how to raise capital", "startup valuation India", "angel investors"]
};

export default function SeedFundingGuide() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A]">
      <Navbar />
      <section className="pt-40 pb-16 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/#resources" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-8"><ArrowLeft size={16} /> Back to Resources</Link>
          <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">Playbook</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 12 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
            How to Raise <span className="italic text-[#B48A32]">Seed Funding</span> in India
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg dark:prose-invert">
          <h2 className="font-serif">The Indian Fundraising Landscape</h2>
          <p>Raising seed capital in 2024 requires more than just a good idea. Investors are now looking for sustainable unit economics and clear MVP traction.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
             <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                <BarChart4 className="text-indigo-600 mb-4" />
                <h4 className="font-bold dark:text-white">Valuation Math</h4>
                <p className="text-sm text-slate-500">Learn how to calculate pre-money vs post-money valuation without over-diluting equity.</p>
             </div>
             <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                <TrendingUp className="text-indigo-600 mb-4" />
                <h4 className="font-bold dark:text-white">Traction Metrics</h4>
                <p className="text-sm text-slate-500">What numbers do angels really want to see? MRR, LTV, and CAC explained.</p>
             </div>
          </div>

          <h2 className="font-serif">Investor Presentation Checklist</h2>
          <ul className="list-none p-0 space-y-4">
             {["Problem & Market Gap", "Your Unique Solution", "Unit Economics", "Competitive Advantage", "The Ask & Allocation"].map(item => (
               <li key={item} className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 size={18} className="text-indigo-600" /> {item}
               </li>
             ))}
          </ul>
          
          <div className="mt-20 p-12 rounded-[40px] bg-slate-950 text-white text-center shadow-2xl">
             <h3 className="text-3xl font-serif font-bold mb-6">Need a Pitch Deck that <br/> actually converts?</h3>
             <p className="text-slate-400 mb-10">Our analysts have helped startups raise over ₹500Cr. Let's build your deck.</p>
             <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-[#B48A32] text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                Book Fundraising Strategy <Send size={20} />
             </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}