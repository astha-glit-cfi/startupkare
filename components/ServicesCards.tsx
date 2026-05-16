'use client';

import { useState, useEffect } from 'react'; // useEffect add kiya scroll lock ke liye
import Link from 'next/link';
import { 
  Briefcase, Building2, Handshake, ShieldCheck, 
  Code2, BarChart3, ArrowRight, ChevronRight, X, CheckCircle2, Loader2 
} from 'lucide-react';

const coreServices = [
  { 
    icon: <Briefcase />, 
    title: 'Incorporation', 
    description: 'Complete documentation for Pvt Ltd, LLP, and Firm registration.',
    longDesc: 'Startup registration is the first step toward building a legacy. We handle everything from checking name availability to getting your Certificate of Incorporation.',
    howWeHelp: ['DSC & DIN Allocation', 'MoA & AoA Drafting', 'PAN & TAN Setup', 'Dedicated Legal Advisor']
  },
  { 
    icon: <Building2 />, 
    title: 'Govt. Schemes', 
    description: 'Unlock DPIIT benefits, Mudra loans, and MSME grants.',
    longDesc: 'The Indian government offers numerous incentives for startups. We ensure you don’t miss out on tax holidays and grants.',
    howWeHelp: ['DPIIT Recognition', '80-IAC Tax Exemption', 'Mudra Loan Guidance', 'GeM Registration']
  },
  { 
    icon: <Handshake />, 
    title: 'Fundraising', 
    description: 'Strategic capital raising roadmap and investor matching.',
    longDesc: 'Raising capital requires a solid story. We help you build a pitch deck and financial model that investors can’t ignore.',
    howWeHelp: ['Pitch Deck Design', 'Valuation Reports', 'Financial Projections', 'Investor Connections']
  },
  { 
    icon: <ShieldCheck />, 
    title: 'Legal & IP', 
    description: 'Protect your brand with trademarks and legal agreements.',
    longDesc: 'Protect your intellectual property. We ensure your legal foundation is bulletproof with proper IP filings.',
    howWeHelp: ['Trademark & Patent Filing', 'Founder Agreements', 'Customized NDAs', 'Vendor Contracts']
  },
  { 
    icon: <Code2 />, 
    title: 'Web/IT Build', 
    description: 'Custom website, MVP build, and digital automations.',
    longDesc: 'Technology should scale with your business. We build production-ready MVPs that convert visitors into users.',
    howWeHelp: ['Business Websites', 'App MVPs', 'CRM Integration', 'AI Workflow Setup']
  },
  { 
    icon: <BarChart3 />, 
    title: 'Compliance', 
    description: 'Monthly GST filings, bookkeeping, and annual audits.',
    longDesc: 'Focus on growth while we handle the compliance. Our CAs ensure you stay 100% compliant with tax laws.',
    howWeHelp: ['GST & TDS Filings', 'Statutory Audits', 'Monthly Bookkeeping', 'Annual ROC Filing']
  },
];

export function ServicesCards() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Background scroll lock logic
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => { setSuccess(false); setSelectedService(null); }, 3000);
    }, 1500);
  };

  const inputClass = "w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl text-slate-900 dark:text-white outline-none focus:border-indigo-600 transition-all placeholder:text-slate-500";

  return (
    <section id="services" className="py-32 !bg-white dark:!bg-[#02040A] transition-colors relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        
        <div className="mb-20">
          <div className="inline-flex px-4 py-2 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-700 dark:text-[#938BF1] uppercase mb-10 tracking-widest">
            Expertise
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-bold !text-slate-950 dark:!text-white mb-8 leading-[1.1]">
            Everything Your <span className="italic text-[#B48A32]">Startup</span> Needs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreServices.map((ser, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedService(ser)}
              className="group p-10 bg-slate-50 dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/5 rounded-[40px] hover:!border-indigo-500/50 transition-all cursor-pointer flex flex-col h-full shadow-sm text-left"
            >
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 dark:text-[#E4C37B] shadow-sm border border-slate-100 dark:border-white/5">
                {ser.icon}
              </div>
              <h3 className="text-2xl font-bold !text-slate-950 dark:!text-white mb-4 font-serif">{ser.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-[15px] leading-relaxed mb-8 flex-grow">{ser.description}</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 dark:text-[#938BF1] uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <ChevronRight size={14}/>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="/services" 
            className="group flex items-center gap-3 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
          >
            View All Service
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* --- SERVICE DETAIL POPUP --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedService(null)}></div>
          
          <div className="relative w-full max-w-5xl bg-white dark:bg-[#060B1A] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] animate-in zoom-in duration-300">
            
            <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 z-50 p-2 bg-slate-100 dark:bg-white/10 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all"><X size={20}/></button>

            {/* Left Side: Info - UPDATED WITH OVERFLOW FIX */}
            <div className="w-full lg:w-1/2 p-8 md:p-14 bg-indigo-50/50 dark:bg-[#040814] overflow-y-auto overflow-x-hidden no-scrollbar text-left border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/5">
               <div className="text-indigo-600 dark:text-[#E4C37B] mb-6 scale-125 origin-left shrink-0">{selectedService.icon}</div>
               <h2 className="text-3xl md:text-5xl font-serif font-bold !text-slate-900 dark:!text-white mb-6 leading-tight break-words">{selectedService.title}</h2>
               <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-10 font-medium">{selectedService.longDesc}</p>
               
               <h4 className="text-[10px] font-black !text-slate-900 dark:!text-white uppercase tracking-[0.2em] mb-6">Execution Deliverables:</h4>
               <div className="space-y-4">
                  {selectedService.howWeHelp.map((point: string) => (
                    <div key={point} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" /> <span className="text-[15px]">{point}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Side: Form - UPDATED WITH OVERFLOW FIX */}
            <div className="w-full lg:w-1/2 p-8 md:p-14 bg-white dark:bg-[#060B1A] overflow-y-auto overflow-x-hidden no-scrollbar text-left">
               {!success ? (
                 <>
                   <h3 className="text-2xl font-bold !text-slate-900 dark:!text-white mb-2">Get a Quote</h3>
                   <form className="space-y-5" onSubmit={handleInquiry}>
                      <input required placeholder="Your Full Name" className={inputClass} />
                      <input required type="email" placeholder="Email Address" className={inputClass} />
                      <input required type="tel" placeholder="Mobile Number" className={inputClass} />
                      <textarea placeholder="Tell us about your startup requirements..." className={inputClass + " h-32 resize-none"}></textarea>
                      <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/10">
                        {isSubmitting ? <Loader2 className="animate-spin" /> : <>Request Expert Callback <ArrowRight size={18}/></>}
                      </button>
                   </form>
                 </>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                    <CheckCircle2 size={60} className="text-green-500 shrink-0" />
                    <h3 className="text-2xl font-bold !text-slate-900 dark:!text-white">Inquiry Received!</h3>
                    <p className="text-slate-500">Our {selectedService.title} specialist will call you back within 15 minutes.</p>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}