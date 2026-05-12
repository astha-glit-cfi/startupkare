'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import EligibilityModal from './EligibilityModal'; 

export default function GovernmentSchemes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 1. State for Accordion: Kaunsa box khula hai track karne ke liye
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 2. Data with Descriptions
  const schemes = [
    {
      title: "Startup India / DPIIT Recognition",
      desc: "Get income tax exemption for 3 years, access to government tenders, and easy winding up of company. This recognition makes you eligible for various SIDBI funds."
    },
    {
      title: "Mudra Loan (Shishu / Kishor / Tarun)",
      desc: "Collateral-free loans up to ₹10 Lakhs for small businesses. Shishu (up to 50k), Kishor (50k-5L), and Tarun (5L-10L) categories cover all stages."
    },
    {
      title: "Stand-Up India",
      desc: "Bank loans between ₹10 Lakhs and ₹1 Crore to at least one SC/ST borrower and one woman borrower per bank branch for setting up greenfield enterprises."
    },
    {
      title: "PM Vishwakarma Yojana",
      desc: "End-to-end support for artisans and craftspeople, including skill training, toolkit incentives, and credit support with subsidized interest rates."
    },
    {
      title: "Atal Innovation Mission",
      desc: "A flagship initiative to promote innovation and entrepreneurship. Provides grant-in-aid to set up incubators and support established ones."
    },
    {
      title: "SIDBI Fund of Funds",
      desc: "A ₹10,000 crore corpus to provide equity funding to startups through SEBI-registered Venture Capital Funds. It helps in scaling high-growth startups."
    },
    {
      title: "Production Linked Incentive (PLI)",
      desc: "Cash incentives on incremental sales for goods manufactured in India. Aimed at boosting domestic manufacturing and making India export-ready."
    },
    {
      title: "GeM Portal Registration",
      desc: "Register on Government e-Marketplace to sell products/services directly to government departments. Startups get special exemptions on Earnest Money Deposit."
    }
  ];

  // 3. Click handler logic
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="schemes" className="relative py-24 bg-white dark:bg-[#02040A] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side Content */}
        <div className="flex flex-col justify-center h-fit lg:sticky lg:top-32">
          <div className="inline-flex w-fit px-3 py-1 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-600 dark:text-[#938BF1] uppercase tracking-widest mb-10">
            Government Schemes
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight !text-slate-950 dark:!text-white">
            <span className="!text-[#B48A32] dark:!text-[#E5C37B]">₹500Cr+</span> <br />
            in Govt Incentives, <br />
            Unclaimed.
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
            We handle the paperwork, eligibility checks, and follow-ups — so you actually get the benefits.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-fit flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/20 group cursor-pointer"
          >
            Check My Eligibility
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side (Accordions) */}
        <div className="space-y-4">
          {schemes.map((scheme, index) => (
            <div 
              key={index} 
              onClick={() => toggleAccordion(index)} // Click par khulega
              className={`p-6 border transition-all duration-300 rounded-[24px] cursor-pointer group ${
                openIndex === index 
                ? 'border-indigo-500 bg-indigo-50/30 dark:bg-indigo-500/5' 
                : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-semibold transition-colors ${
                  openIndex === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-800 dark:text-slate-200'
                }`}>
                  {scheme.title}
                </span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-indigo-600' : 'text-slate-400'
                  }`} 
                />
              </div>

              {/* Description Logic: Animate height/visibility */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-4">
                  {scheme.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EligibilityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}