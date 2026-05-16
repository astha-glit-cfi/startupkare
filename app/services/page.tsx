'use client';

import { useState, useEffect } from 'react'; // useEffect add kiya background scroll lock ke liye
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Briefcase, Building2, Handshake, ShieldCheck, Code2, BarChart3, 
  Rocket, Users2, Search, Globe, Landmark, Gavel, ArrowLeft, 
  CheckCircle2, X, Loader2, ArrowRight, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

// Detailed data for all 12 services
const allServices = [
  { 
    icon: <Briefcase />, 
    title: 'Company Incorporation', 
    desc: 'Pvt Ltd, LLP, and Firm registration with complete legal structuring.',
    longDesc: 'Setting up the right legal entity is crucial for fundraising and scaling. We handle everything from name approval to final incorporation.',
    howWeHelp: ['Director KYC & DSC', 'MOA/AOA Drafting', 'PAN & TAN Allocation', 'Bank Account Opening Support']
  },
  { 
    icon: <Building2 />, 
    title: 'Startup India (DPIIT)', 
    desc: 'Securing your recognition certificate and unlocking 80-IAC tax benefits.',
    longDesc: 'DPIIT recognition is the gateway to government grants and tax holidays. We ensure 100% success rate in your application.',
    howWeHelp: ['Recognition Certificate', '80-IAC Tax Holiday Filing', 'Self-Certification setup', 'Patent Rebate Access']
  },
  { 
    icon: <Handshake />, 
    title: 'Fundraising Support', 
    desc: 'End-to-end help with Pitch Decks, Valuation, and Investor Intros.',
    longDesc: 'Raising capital requires a solid story and numbers. We prepare you to face VCs and Angel networks with confidence.',
    howWeHelp: ['Pitch Deck Design', 'Financial Projections', 'Valuation Reports', 'Curated Investor Intros']
  },
  { 
    icon: <Landmark />, 
    title: 'MSME Govt Schemes', 
    desc: 'Mudra loans, ZED Certification, and Govt grants for small businesses.',
    longDesc: 'Many founders miss out on crores in government subsidies. We identify and apply for the right schemes for your sector.',
    howWeHelp: ['Mudra & MSME Loans', 'ZED Gold Certification', 'Subsidy Management', 'Cluster Dev. Schemes']
  },
  { 
    icon: <ShieldCheck />, 
    title: 'Intellectual Property', 
    desc: 'Trademark, Patent, and Copyright filing to protect your brand assets.',
    longDesc: 'Your brand is your biggest asset. We provide end-to-end protection for your ideas, logos, and software code.',
    howWeHelp: ['Trademark Registration', 'Patent Searching & Filing', 'Copyright Protection', 'IP Infringement Legal Care']
  },
  { 
    icon: <Code2 />, 
    title: 'MVP & Tech Build', 
    desc: 'Website development, App MVPs, and AI-driven automation systems.',
    longDesc: 'Technology should be your competitive advantage. We build high-performance products that investors love.',
    howWeHelp: ['Web & Mobile MVPs', 'AI/ML Integrations', 'Custom CRM/ERP', 'CTO-on-Demand']
  },
  { 
    icon: <BarChart3 />, 
    title: 'Tax & Compliance', 
    desc: 'GST, TDS, Income Tax filing, and annual statutory auditing.',
    longDesc: 'Never miss a deadline. Our CAs and CSs handle your entire backend compliance so you can focus on building.',
    howWeHelp: ['GST & TDS Filings', 'Statutory Audits', 'Annual ROC Filing', 'Monthly Bookkeeping']
  },
  { 
    icon: <Rocket />, 
    title: 'Growth Marketing', 
    desc: 'Performance marketing and SEO strategies to scale your startup revenue.',
    longDesc: 'Scaling revenue requires data-backed performance marketing. We help you acquire customers at the lowest CAC.',
    howWeHelp: ['Google & Meta Ads', 'SEO & Content Engine', 'Conversion Optimization', 'Email Automations']
  },
  { 
    icon: <Users2 />, 
    title: 'Mentorship Access', 
    desc: '1-on-1 sessions with industry veterans who have built multi-crore brands.',
    longDesc: 'Learn from those who have been there. Access exclusive sessions with founders of Unicorns and Soonicorns.',
    howWeHelp: ['Founder-to-Founder Networking', 'Strategy Masterclasses', 'Peer Learning Groups', 'Exit Strategy Guidance']
  },
  { 
    icon: <Search />, 
    title: 'Market Research', 
    desc: 'In-depth analysis of competitors, target audience, and market gaps.',
    longDesc: 'Data beats opinion. We provide deep-dive reports to help you find your product-market fit (PMF) faster.',
    howWeHelp: ['Competitor Benchmarking', 'Customer Persona Discovery', 'Go-To-Market Strategy', 'Pricing Analysis']
  },
  { 
    icon: <Globe />, 
    title: 'Global Entity Setup', 
    desc: 'Expanding to US/UK/Singapore? We handle foreign compliance.',
    longDesc: 'Thinking of global markets? We help you incorporate and manage compliance in the world’s leading business hubs.',
    howWeHelp: ['Delaware/UK/Singapore Setup', 'Cross-border Payments', 'Foreign Tax Planning', 'Flip-structure Guidance']
  },
  { 
    icon: <Gavel />, 
    title: 'Legal Drafting', 
    desc: 'Founder agreements, Vendor contracts, and customized NDAs.',
    longDesc: 'Bulletproof your business relations. We draft customized agreements that protect your interests in every deal.',
    howWeHelp: ['Founder Vesting Agreements', 'ESOP Plan Drafting', 'Vendor & Client Contracts', 'Employee NDAs']
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Modal khulne par background scroll stop karne ke liye
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => { setSuccess(false); setSelectedService(null); }, 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-left animate-in fade-in slide-in-from-top-4 duration-1000">
            <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:gap-4 transition-all">
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-8xl font-serif font-bold !text-slate-950 dark:!text-white mb-6">
              ALL <span className="italic text-[#B48A32]">Service</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-gray-400 max-w-3xl leading-relaxed">
              Every stage of your growth needs a different structural integrity. We deliver the modules you need to survive and lead.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((ser, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedService(ser)}
                className="group p-8 rounded-[32px] bg-slate-50 dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/5 hover:shadow-2xl hover:!border-indigo-500/50 transition-all cursor-pointer flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 dark:text-[#E4C37B] shadow-sm">
                  {ser.icon}
                </div>
                <h3 className="text-xl font-bold !text-slate-900 dark:!text-white mb-4 font-serif leading-tight">{ser.title}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-8 flex-grow">{ser.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 dark:text-[#938BF1] uppercase tracking-widest group-hover:gap-4 transition-all">
                  Details <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREMIUM SERVICE POPUP MODAL --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedService(null)}></div>
          
          <div className="relative w-full max-w-5xl bg-white dark:bg-[#060B1A] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] animate-in zoom-in duration-300">
            
            <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 z-50 p-2 bg-slate-100 dark:bg-white/10 rounded-full dark:text-white hover:bg-red-500 transition-colors"><X size={20}/></button>

            {/* Modal Left: Specific Content - FIXED SCROLL ISSUE HERE */}
            <div className="w-full lg:w-1/2 p-8 md:p-14 bg-indigo-50/30 dark:bg-[#040814] overflow-y-auto overflow-x-hidden no-scrollbar text-left border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/5">
               <div className="text-indigo-600 dark:text-[#E4C37B] mb-6 scale-150 origin-left">{selectedService.icon}</div>
               <h2 className="text-3xl md:text-5xl font-serif font-bold !text-slate-900 dark:!text-white mb-6 leading-tight">{selectedService.title}</h2>
               <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-10">{selectedService.longDesc}</p>
               
               <h4 className="text-xs font-bold !text-slate-900 dark:!text-white uppercase tracking-[0.2em] mb-6">Execution Deliverables:</h4>
               <div className="space-y-4">
                  {selectedService.howWeHelp.map((point: string) => (
                    <div key={point} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" /> <span className="text-sm">{point}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Modal Right: Quick Form - FIXED SCROLL ISSUE HERE */}
            <div className="w-full lg:w-1/2 p-8 md:p-14 bg-white dark:bg-[#060B1A] overflow-y-auto overflow-x-hidden no-scrollbar text-left">
               {!success ? (
                 <>
                   <h3 className="text-2xl font-bold !text-slate-900 dark:!text-white mb-2">Request callback</h3>
                   <p className="text-slate-500 text-sm mb-8 italic">Consult an expert about {selectedService.title}</p>
                   
                   <form className="space-y-4" onSubmit={handleSubmit}>
                      <input required placeholder="Your Full Name" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl dark:text-white outline-none focus:border-indigo-600 transition-all placeholder:text-slate-500" />
                      <input required type="email" placeholder="Work Email" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl dark:text-white outline-none focus:border-indigo-600 transition-all placeholder:text-slate-500" />
                      <input required type="tel" placeholder="Mobile Number" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl dark:text-white outline-none focus:border-indigo-600 transition-all placeholder:text-slate-500" />
                      <textarea placeholder="Specific requirements or stage..." className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl dark:text-white outline-none h-24 resize-none focus:border-indigo-600 transition-all placeholder:text-slate-500"></textarea>
                      
                      <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/10">
                        {isSubmitting ? <Loader2 className="animate-spin" /> : <>Request Expert Callback <ArrowRight size={20}/></>}
                      </button>
                   </form>
                 </>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                    <CheckCircle2 size={80} className="text-green-500" />
                    <h3 className="text-3xl font-bold dark:text-white">Inquiry Received!</h3>
                    <p className="text-slate-500 dark:text-gray-400">Our {selectedService.title} expert will contact you within 15 minutes.</p>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}