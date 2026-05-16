'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  ArrowLeft, CheckCircle2, TrendingUp, Users, 
  IndianRupee, Rocket, Clock, Lightbulb, 
  Target, Zap, Send, Loader2, Globe, ShieldCheck,
  Landmark, FileText, BadgeCheck, BarChart4, LayoutPanelLeft
} from 'lucide-react';
import Link from 'next/link';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const reportData: any = {
    'seed-round-closure': {
      title: "Seed Round Closure",
      startup: "FinSync",
      industry: "FinTech",
      stage: "Seed Round",
      timeline: "8 Months",
      service: "Fundraising",
      overview: "FinSync was struggling to secure institutional funding due to weak financial modeling and lack of a structured investor outreach plan.",
      whatWeDid: [
        "Investor matchmaking with relevant VCs & Angels",
        "Pitch deck optimization for clarity and impact",
        "Financial modeling with growth projections",
        "Fundraising strategy and outreach execution"
      ],
      journey: [
        { id: "01", label: "Discovery", desc: "Understood business model, challenges, and funding requirements.", icon: <Lightbulb size={24}/> },
        { id: "02", label: "Strategy", desc: "Built a customized fundraising strategy and investor list.", icon: <Target size={24}/> },
        { id: "03", label: "Outreach", desc: "Reached out to 50+ investors and scheduled meetings.", icon: <TrendingUp size={24}/> },
        { id: "04", label: "Closure", desc: "Negotiations, due diligence support and round closed successfully.", icon: <CheckCircle2 size={24}/> }
      ],
      highlights: [
        { label: "Investor Meetings", val: "15+", desc: "High-quality meetings with VCs and Angels", icon: <Users className="text-amber-500" /> },
        { label: "Capital Raised", val: "₹5 Cr", desc: "Seed round successfully closed in 8 months", icon: <IndianRupee className="text-amber-500" /> },
        { label: "Valuation Jump", val: "2.5x", desc: "Significant increase in company valuation", icon: <TrendingUp className="text-amber-500" /> },
        { label: "Time to Close", val: "8 Months", desc: "End-to-end support from strategy to closure", icon: <Rocket className="text-amber-500" /> }
      ],
      ctaText: "Book Fundraising Consultation"
    },
    'dpiit-tax-exemption': {
        title: "DPIIT & Tax Exemption",
        startup: "GreenLeaf D2C",
        industry: "Retail / D2C",
        stage: "Growth",
        timeline: "45 Days",
        service: "Compliance",
        overview: "GreenLeaf D2C needed urgent tax planning and government recognition to leverage national procurement benefits.",
        whatWeDid: ["Startup India registration", "DPIIT documentation", "Tax exemption filing", "Compliance roadmap"],
        journey: [
            { id: "01", label: "Audit", desc: "Verified eligibility for DPIIT and tax schemes.", icon: <ShieldCheck size={24}/> },
            { id: "02", label: "Docs", desc: "Prepared legal and financial statements.", icon: <FileText size={24}/> },
            { id: "03", label: "Filing", desc: "Submitted applications via portal.", icon: <Send size={24}/> },
            { id: "04", label: "Approval", desc: "Direct coordinate for certificate.", icon: <BadgeCheck size={24}/> }
        ],
        highlights: [
            { label: "Tax Holiday", val: "3 Yrs", desc: "Confirmed 100% tax exemption", icon: <Landmark className="text-amber-500" /> },
            { label: "Annual Savings", val: "₹12L+", desc: "Significant reduction in tax liability", icon: <IndianRupee className="text-amber-500" /> },
            { label: "IP Rebate", val: "80%", desc: "Refund secured for patent filings", icon: <Zap className="text-amber-500" /> },
            { label: "Tender Ready", val: "Yes", desc: "L1 priority in govt tenders", icon: <Globe className="text-amber-500" /> }
        ],
        ctaText: "Apply for DPIIT Recognition"
    },
    'market-dominance': {
        title: "Market Dominance",
        startup: "Synapse SaaS",
        industry: "SaaS / B2B",
        stage: "Scale-up",
        timeline: "12 Months",
        service: "Strategy",
        overview: "Achieving global scale with an optimized GTM strategy and automated subscription frameworks.",
        whatWeDid: ["Pricing optimization", "CRM automation", "SEO growth engine", "Unit economics focus"],
        journey: [
            { id: "01", label: "Strategy", desc: "Deep dive into SaaS metrics.", icon: <LayoutPanelLeft size={24}/> },
            { id: "02", label: "Legal", desc: "Handled data privacy and laws.", icon: <ShieldCheck size={24}/> },
            { id: "03", label: "Outreach", desc: "Scaling user acquisition.", icon: <Globe size={24}/> },
            { id: "04", label: "Scale", desc: "Reached ₹40L+ MRR.", icon: <TrendingUp size={24}/> }
        ],
        highlights: [
            { label: "MRR Growth", val: "₹40L+", desc: "Consistent monthly revenue", icon: <BarChart4 className="text-amber-500" /> },
            { label: "Users", val: "50K+", desc: "Rapid scale in national market", icon: <Users className="text-amber-500" /> },
            { label: "Churn Rate", val: "< 2%", desc: "Optimized retention systems", icon: <CheckCircle2 className="text-amber-500" /> },
            { label: "GTM Result", val: "300%", desc: "Revenue growth in 12 months", icon: <Rocket className="text-amber-500" /> }
        ],
        ctaText: "Scale My SaaS"
    }
  };

  const current = reportData[slug as string] || reportData['seed-round-closure'];

  const handleForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  return (
    <main className="min-h-screen !bg-white dark:!bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <div className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        
        {/* --- 1. HEADER --- */}
        <div className="mb-12 text-left">
           <button onClick={() => router.back()} className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-10 hover:gap-4 transition-all">
             <ArrowLeft size={16}/> Back to Feed
           </button>
           <h1 className="text-4xl md:text-7xl font-serif font-bold !text-slate-950 dark:!text-white mb-10 tracking-tight leading-tight">
             {current.title}
           </h1>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-100 dark:border-white/10">
              {[
                { label: "Industry", val: current.industry, icon: <Globe size={18}/> },
                { label: "Funding Stage", val: current.stage, icon: <Target size={18}/> },
                { label: "Timeline", val: current.timeline, icon: <Clock size={18}/> },
                { label: "Services", val: current.service, icon: <Rocket size={18}/> }
              ].map((box, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-white/5 rounded-lg text-slate-400">{box.icon}</div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400"> {box.label} </p>
                    <p className="text-sm font-bold !text-slate-800 dark:text-white"> {box.val} </p>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* --- 2. OVERVIEW & IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center text-left">
           <div className="lg:col-span-5 space-y-12">
              <div>
                 <h3 className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-[10px] tracking-widest mb-4">
                   <div className="w-1 h-4 bg-indigo-500"></div> Overview
                 </h3>
                 <p className="text-lg !text-slate-600 dark:text-gray-300 leading-relaxed font-medium"> {current.overview} </p>
              </div>

              <div>
                 <h3 className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-[10px] tracking-widest mb-4">
                   <div className="w-1 h-4 bg-indigo-500"></div> What We Did
                 </h3>
                 <div className="space-y-3">
                    {current.whatWeDid.map((item: string) => (
                      <div key={item} className="p-4 !bg-slate-50 dark:!bg-[#0A0C1E] border !border-slate-100 dark:border-white/5 rounded-2xl flex items-center gap-4 group hover:border-indigo-500 transition-all">
                        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><CheckCircle2 size={16}/></div>
                        <p className="text-sm font-bold !text-slate-700 dark:text-gray-300">{item}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-7">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border border-slate-100 dark:border-white/5">
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Success" />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-indigo-900/90 flex items-center justify-end p-12">
                    <div className="max-w-xs text-right text-white">
                       <p className="text-[#E4C37B] font-bold text-xs uppercase tracking-widest mb-4">Outcome</p>
                       <h2 className="text-4xl md:text-5xl font-bold leading-tight">Growth & Capital Secured.</h2>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- 3. THE JOURNEY --- */}
        <div className="mb-32 p-10 md:p-16 !bg-slate-50 dark:!bg-[#0A0C1E] rounded-[4rem] border !border-slate-100 dark:border-white/5 relative overflow-hidden">
           <h3 className="text-2xl font-bold !text-slate-900 dark:text-white mb-16 text-center font-serif uppercase tracking-widest !text-black dark:!text-white">Execution Roadmap</h3>
           <div className="relative flex flex-col md:flex-row justify-between gap-12">
              <div className="absolute top-10 left-0 w-full h-px border-t border-dashed border-slate-300 dark:border-white/10 hidden md:block"></div>
              {current.journey.map((step: any) => (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white dark:border-[#0A0C1E]">
                      {step.icon}
                   </div>
                   <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 mb-1 uppercase">{step.id}. {step.label}</p>
                   <p className="text-[11px] !text-slate-500 dark:text-gray-400 max-w-[160px] leading-relaxed font-bold">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* --- 4. HIGHLIGHTS --- */}
        <div className="mb-32">
          <h3 className="text-xl font-bold !text-slate-900 dark:text-white mb-12 flex items-center gap-3 text-left">
             <div className="w-1 h-6 bg-amber-500"></div> Measurable Success
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {current.highlights.map((item: any, i: number) => (
               <div key={i} className="p-10 !bg-slate-50 dark:!bg-[#0A0C1E] border border-slate-200 dark:border-white/5 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group text-left">
                  <div className="mb-8 p-3 bg-white dark:bg-white/5 w-fit rounded-2xl shadow-sm">{item.icon}</div>
                  <h4 className="text-4xl font-bold !text-slate-950 dark:text-white mb-2">{item.val}</h4>
                  <p className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-3">{item.label}</p>
                  <p className="text-xs !text-slate-500 dark:text-gray-400 leading-relaxed font-bold">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* --- 5. FORM SECTION (FIXED FOR LIGHT & DARK) --- */}
        <div className="p-10 md:p-20 !bg-slate-50 dark:!bg-[#030612] rounded-[3.5rem] border !border-slate-200 dark:border-white/5 text-center shadow-2xl relative overflow-hidden transition-all duration-500">
           
           {/* Background Glow for Dark mode only */}
           <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 blur-[120px] hidden dark:block"></div>
           
           {!success ? (
             <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-black dark:text-white mb-6 leading-tight !text-black dark:!text-white">
                  Let&apos;s build your <br/> success story.
                </h2>
                <p className="!text-slate-500 dark:text-slate-400 text-lg mb-10">
                  Join hundreds of founders who scaled with StartupKare.
                </p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleForm}>
                   <input 
                      required 
                      placeholder="Full Name" 
                      className="w-full p-4 !bg-white dark:!bg-white/5 border !border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:border-indigo-600 !text-slate-900 dark:text-white placeholder:text-slate-400 transition-all" 
                   />
                   <input 
                      required 
                      type="email" 
                      placeholder="Work Email" 
                      className="w-full p-4 !bg-white dark:!bg-white/5 border !border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:border-indigo-600 !text-slate-900 dark:text-white placeholder:text-slate-400 transition-all" 
                   />
                   <button 
                      type="submit" 
                      disabled={loading} 
                      className="md:col-span-2 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-xl"
                   >
                     {loading ? <Loader2 className="animate-spin"/> : <>Book Fundraising Consultation <Send size={20}/></>}
                   </button>
                </form>
             </div>
           ) : (
             <div className="py-10 animate-in fade-in duration-500 text-center">
                <CheckCircle2 size={80} className="text-green-500 mx-auto mb-8" />
                <h2 className="text-4xl font-bold !text-slate-900 dark:text-white">Request Logged!</h2>
                <p className="!text-slate-500 dark:text-gray-400 mt-4">Our expert will contact you within 24 hours.</p>
             </div>
           )}
        </div>

      </div>
      <Footer />
    </main>
  );
}