import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
// FIX: Yahan ArrowRight add kiya hai
import { ShieldCheck, Factory, Clock, ArrowLeft, ArrowRight, Send, Zap } from 'lucide-react'; 
import Link from 'next/link';

export const metadata = {
  title: "MSME ZED Certification Guide (2024) | Startup Kare",
  description: "Complete guide on Zero Defect Zero Effect (ZED) certification. Benefits, subsidies, and application process for MSMEs.",
  keywords: ["ZED certification India", "MSME subsidy", "sustainable manufacturing", "Govt grants for MSME"]
};

export default function ZedGuide() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A]">
      <Navbar />
      <section className="pt-40 pb-16 border-b border-slate-100 dark:border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/#resources" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-8">
            <ArrowLeft size={16} /> Back to Resources
          </Link>
          <div className="flex justify-center items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-[10px]">Policy Report</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 7 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
            MSME <span className="italic text-[#B48A32]">ZED</span> Certification Explainer
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-serif">What is ZED Certification?</h2>
            <p>ZED (Zero Defect Zero Effect) is a certification by the Ministry of MSME to promote sustainable manufacturing and boost competitiveness in Indian MSMEs.</p>
            
            <div className="my-12 p-10 bg-slate-50 dark:bg-white/5 rounded-[40px] border-2 border-dashed border-slate-200 dark:border-white/10">
               <h3 className="mt-0 flex items-center gap-2 dark:text-white"><Zap className="text-amber-500"/> Financial Incentives</h3>
               <ul className="space-y-4">
                  <li><strong>Subsidies:</strong> Get up to 80% subsidy on certification costs.</li>
                  <li><strong>Loan Benefits:</strong> Lower interest rates on bank loans for ZED certified units.</li>
                  <li><strong>Tender Preference:</strong> Special weightage in government procurement.</li>
               </ul>
            </div>

            <h2 className="font-serif">The Levels of ZED</h2>
            <p>There are three major levels startups can apply for based on their operational maturity:</p>
            <ol>
               <li><strong>Bronze:</strong> For startups just beginning their sustainability journey.</li>
               <li><strong>Silver:</strong> For units with documented processes and waste control.</li>
               <li><strong>Gold:</strong> The highest standard of global manufacturing excellence.</li>
            </ol>
          </div>

          {/* Call to Action Area */}
          <div className="mt-20 p-12 rounded-[40px] bg-indigo-600 text-white text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10"><Factory size={120} /></div>
             <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Is your MSME ready <br/> for ZED?</h3>
             <p className="text-indigo-100 mb-10 relative z-10">We handle the complete assessment, documentation, and filing for your ZED certification.</p>
             <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all relative z-10 shadow-xl">
                Start ZED Application <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}