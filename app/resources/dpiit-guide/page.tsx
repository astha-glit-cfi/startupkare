import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookOpen, CheckCircle2, Clock, ArrowLeft, Download, Send, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// SEO Metadata
export const metadata = {
  title: "DPIIT Registration Guide (2024) | Startup Kare",
  description: "Step-by-step guide for Indian startups to get DPIIT recognition and claim tax benefits under 80-IAC.",
  keywords: ["DPIIT registration", "Startup India recognition", "tax exemption for startups"]
};

export default function DpiitGuide() {
  const tableOfContents = [
    "What is DPIIT Recognition?",
    "Eligibility Criteria",
    "Key Tax Benefits (80-IAC)",
    "Step-by-Step Registration",
    "Mandatory Documents"
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <section className="pt-40 pb-16 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/#resources" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Resources
          </Link>
          <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px]">Guide</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 10 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white leading-tight mb-8">
            The Ultimate Guide to <span className="italic text-[#B48A32]">DPIIT Recognition</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed">
            Everything you need to know about the Startup India mission, from tax holidays to government procurement preferences.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 hidden lg:block h-fit sticky top-32">
             <h4 className="font-bold text-slate-900 dark:text-white uppercase text-[10px] tracking-[0.2em] mb-6">In this playbook</h4>
             <ul className="space-y-4 border-l-2 border-slate-100 dark:border-white/5">
                {tableOfContents.map((item, i) => (
                  <li key={i} className="pl-4 border-l-2 border-transparent -ml-[2px] hover:border-indigo-600 transition-all text-sm font-medium text-slate-500 dark:text-gray-400">
                    {item}
                  </li>
                ))}
             </ul>
             <button className="mt-12 w-full py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 dark:text-white transition-all">
                <Download size={14} /> Download PDF
             </button>
          </aside>

          <div className="lg:col-span-9 max-w-3xl">
             <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                <h2 className="font-serif">What is DPIIT Recognition?</h2>
                <p>Recognized startups can avail themselves of various benefits under the Startup India initiative, such as access to intellectual property rights (IPR) services, self-certification under labor and environment laws, and many more.</p>
                
                <div className="my-10 p-8 bg-indigo-50 dark:bg-indigo-500/5 rounded-3xl border border-indigo-100 dark:border-indigo-500/20">
                   <h4 className="text-indigo-700 dark:text-[#E4C37B] mt-0 font-bold uppercase text-xs tracking-widest">Crucial Benefit</h4>
                   <p className="font-bold text-slate-900 dark:text-slate-100">Section 80-IAC Tax Exemption: A recognized startup is eligible for a tax holiday for 3 consecutive financial years out of its first 10 years.</p>
                </div>

                <h2 className="font-serif">Step-by-Step Registration</h2>
                <ol>
                  <li>Create a profile on the Startup India Portal.</li>
                  <li>Fill out the DPIIT Recognition application.</li>
                  <li>Upload Letter of Recommendation (Optional now).</li>
                  <li>Receive your Digital Certificate.</li>
                </ol>
             </div>

             <div className="mt-20 p-12 rounded-[40px] bg-indigo-600 text-white text-center relative overflow-hidden shadow-2xl">
                <h3 className="text-3xl font-serif font-bold mb-6">Want to fast-track your <br/> DPIIT Certificate?</h3>
                <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
                  Talk to a Compliance Expert <Send size={20} />
                </Link>
             </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}