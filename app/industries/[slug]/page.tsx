'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { 
  CheckCircle2, Quote, ChevronRight, 
  FileText, PhoneCall, Rocket, Target, Download 
} from 'lucide-react';

export default function IndustryPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Strategic Consulting');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. POORA INDUSTRY DATA (5 Industries)
  const industryData: any = {
    saas: {
      title: "SAAS",
      tagline: "Building Global-Ready Recurring Revenue Engines",
      intro: ["We position SaaS startups for global markets by optimizing ARR and implementing robust flip-structures.", "Our expertise lies in bridging technical innovation with commercial excellence."],
      consultingExamples: {
        "Strategic Consulting": ["International GTM strategy", "Pricing architecture", "VC-ready financial modeling"],
        "Operational Excellence": ["Customer Success automation", "Sales pipeline engineering", "Churn prediction"],
        "Risk & Compliance": ["SOC2 & GDPR readiness", "Global IP protection", "Cross-border tax"]
      },
      successStories: [
        { title: "ARR Scaling Success", desc: "Helped a DevTools startup scale from $10k to $100k Monthly Recurring Revenue in 8 months." },
        { title: "Global Flip Setup", desc: "Successfully managed the Delaware Flip for an Indian AI startup for its YC entry." }
      ]
    },
    fintech: {
      title: "FINTECH",
      tagline: "Navigating Regulations with Secure Financial Frameworks",
      intro: ["Navigating RBI guidelines while building high-performance systems is our specialty.", "We ensure your structural integrity in digital lending and payments."],
      consultingExamples: {
        "Strategic Consulting": ["NBFC License Roadmap", "Digital Lending Models", "Bank Partnerships"],
        "Operational Excellence": ["Fraud detection setup", "KYC automation", "AUM growth optimization"],
        "Risk & Compliance": ["RBI PMLA Audits", "AML setup", "Cybersecurity framework"]
      },
      successStories: [
        { title: "NBFC License Victory", desc: "Consulted a lending startup to successfully obtain an NBFC license in record 6 months." },
        { title: "Secure Audit Ready", desc: "Implemented a zero-failure cybersecurity framework for a payment aggregator." }
      ]
    },
    d2c: {
      title: "D2C & RETAIL",
      tagline: "High-Margin Growth for Modern Consumer Brands",
      intro: ["From local marketplaces to national powerhouses, we turn products into household names.", "We optimize your unit margins and protect your brand equity through institutional excellence."],
      consultingExamples: {
        "Strategic Consulting": ["Omnichannel growth roadmap", "Marketplace entry (Amazon/Blinkit)", "Unit margin optimization"],
        "Operational Excellence": ["Inventory funding & Supply chain tech", "CAC optimization engine", "Logistics legal framework"],
        "Risk & Compliance": ["Trademark & Design filing", "FSSAI & BIS packaging rules", "E-com GST input claims"]
      },
      successStories: [
        { title: "Scale to ₹1Cr/Mo", desc: "Consulted a skincare brand to scale its revenue from ₹10L to ₹1Cr monthly through CAC optimization." },
        { title: "Brand Protection", desc: "Successfully registered and defended trademarks for a lifestyle startup against 5+ infringements." }
      ]
    },
    healthcare: {
      title: "HEALTHCARE",
      tagline: "Regulatory Excellence for Medical-Tech Innovators",
      intro: ["Ensuring regulatory excellence for medical-tech and wellness innovators is our primary focus.", "We help health-tech startups navigate drug licenses and patient data privacy laws."],
      consultingExamples: {
        "Strategic Consulting": ["Franchise model scaling", "Investment prep for Bio-tech", "GTM for telemedicine apps"],
        "Operational Excellence": ["Telemedicine workflow automation", "Lab management systems", "Patient privacy frameworks"],
        "Risk & Compliance": ["Drug License & Device compliance", "ISO Medical certifications", "NABH accreditation support"]
      },
      successStories: [
        { title: "ISO Medical Cert", desc: "Handled end-to-end ISO certification for a surgical device manufacturer for European exports." },
        { title: "Health-Tech Exit", desc: "Prepared a telemedicine startup for its acquisition by a major hospital chain through rigorous audit." }
      ]
    },
    msme: {
      title: "MSME",
      tagline: "Institutional Excellence for Traditional Powerhouses",
      intro: ["We help MSMEs transform from family-run units to institutional enterprises.", "Unlock government subsidies and modernize your factory operations."],
      consultingExamples: {
        "Strategic Consulting": ["B2G Growth & GeM Portal", "Lean manufacturing", "Working capital management"],
        "Operational Excellence": ["ERP & Inventory digitization", "Supply chain legal mapping", "Tech upgradation"],
        "Risk & Compliance": ["ZED Gold Certification", "Labour law compliance", "Mudra subsidy management"]
      },
      successStories: [
        { title: "₹50Cr Subsidy Success", desc: "Identified and secured government subsidies worth ₹50Cr for a cluster of manufacturing units." },
        { title: "Export Ready", desc: "Enabled 15 local MSMEs to start exporting to European markets through ZED certification." }
      ]
    }
  };

  // current define kiya
  const current = industryData[slug as string] || industryData.saas;

  // 2. POORI LIST SIDEBAR KE LIYE (Yahan missing industries add ki hain)
  const industries = ["saas", "d2c", "fintech", "healthcare", "msme"];

  const downloadSuccessStory = (index: number) => {
    const fileName = `${slug}-story-${index + 1}.pdf`;
    const pdfPath = `/pdfs/${fileName}`;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <div className="pt-32 pb-24 max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SIDEBAR (Now showing all 5) */}
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-32 space-y-2">
              <h5 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                Sector Expertise
              </h5>
              {industries.map((item) => (
                <button 
                  key={item}
                  onClick={() => router.push(`/industries/${item}`)}
                  className={`w-full text-left px-6 py-4 rounded-xl text-[11px] font-black transition-all flex items-center justify-between group uppercase tracking-[0.2em] ${slug === item ? 'bg-[#B48A32] text-white shadow-lg shadow-[#B48A32]/20' : 'bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-slate-100'}`}
                >
                  {item} <ChevronRight size={14} className={slug === item ? 'opacity-100 translate-x-1' : 'opacity-0'} />
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <section className="w-full lg:w-3/4">
            
            <div className="mb-16">
               <h1 className="text-5xl md:text-8xl font-serif font-bold !text-slate-950 dark:!text-white mb-4 leading-[0.9] tracking-tighter uppercase">
                {current.title}<br/><span className="italic text-[#B48A32] dark:text-[#E4C37B]">SOLUTIONS</span>
               </h1>
               <p className="text-[#B48A32] font-black text-[10px] uppercase tracking-[0.4em] mb-8">{current.tagline}</p>
               <div className="space-y-6 max-w-3xl">
                  {current.intro.map((p: string, idx: number) => (
                    <p key={idx} className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed font-medium">
                        {p}
                    </p>
                  ))}
               </div>
            </div>

            {/* CONSULTING EXAMPLES (Tabs) */}
            <div className="mb-20 bg-slate-50 dark:bg-[#0B0F1A] p-10 md:p-14 rounded-[48px] border border-slate-200 dark:border-white/5 shadow-inner">
                <div className="flex items-center gap-4 mb-10">
                   <Target className="text-[#B48A32]" />
                   <h3 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">Engagement Areas</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-12">
                   {Object.keys(current.consultingExamples).map((tab) => (
                     <button 
                       key={tab}
                       onClick={() => setActiveTab(tab)}
                       className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-slate-900 text-white dark:bg-[#B48A32]' : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'}`}
                     >
                       {tab}
                     </button>
                   ))}
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {current.consultingExamples[activeTab].map((item: string, i: number) => (
                     <li key={i} className="flex items-center gap-4 text-slate-800 dark:text-slate-200 font-bold">
                        <CheckCircle2 size={16} className="text-[#B48A32] shrink-0" />
                        <span className="text-sm">{item}</span>
                     </li>
                   ))}
                </ul>
            </div>

            {/* SECTOR SUCCESS STORIES (Clickable) */}
            <div className="mb-20">
               <div className="flex items-center gap-4 mb-8">
                  <Rocket className="text-[#B48A32]" />
                  <h3 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">
                    Sector Success Stories
                  </h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {current.successStories.map((story: any, i: number) => (
                    <div 
                      key={i} 
                      onClick={() => downloadSuccessStory(i)}
                      className="cursor-pointer p-8 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[32px] group hover:border-[#B48A32] dark:hover:border-[#E4C37B] transition-all bg-white dark:bg-white/5 shadow-sm hover:shadow-xl"
                    >
                       <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-bold !text-slate-950 dark:!text-white flex items-center gap-2 group-hover:text-[#B48A32] transition-colors">
                             <FileText size={20} className="text-[#B48A32]" /> {story.title}
                          </h4>
                          <Download size={18} className="text-slate-300 dark:text-slate-600 group-hover:text-[#B48A32]" />
                       </div>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{story.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* CTA BUTTON */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group w-full md:w-auto bg-slate-950 dark:bg-white text-white dark:text-black px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#B48A32] transition-all flex items-center justify-center gap-4 shadow-2xl"
            >
              <PhoneCall size={18} /> Consult our {current.title} Expert
            </button>

          </section>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </main>
  );
}