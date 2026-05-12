'use client';

import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Foundation',
    badge: 'GET LAUNCH-READY',
    description: 'Everything you need to legally launch and operate.',
    price: '49,999',
    priceSub: 'one-time',
    features: [
      'Pvt Ltd / LLP incorporation',
      'GST, PAN, TAN, MSME registration',
      'DPIIT Startup India recognition',
      'Trademark filing (1 class)',
      'Founder agreements & NDA',
      '3 months compliance support',
    ],
    buttonText: 'Get Started',
    popular: false,
    hoverColor: 'hover:!bg-slate-900 hover:!text-white dark:hover:!bg-[#E5C37B] dark:hover:!text-black'
  },
  {
    name: 'Growth Partner',
    badge: 'MOST POPULAR',
    description: 'Full operational, funding, and digital partnership.',
    price: '24,999',
    priceSub: '/mo + equity',
    features: [
      'Everything in Foundation',
      'Pitch deck & financial model',
      'Investor intros (200+ network)',
      'Website + SEO + ads management',
      'Monthly bookkeeping + GST filing',
      'Dedicated growth strategist',
      'Quarterly board reviews',
    ],
    buttonText: 'Get Started',
    popular: true,
  },
  {
    name: 'Scale & List',
    badge: 'PRE-IPO READY',
    description: 'End-to-end advisory through scale and SME IPO listing.',
    price: 'Custom',
    priceSub: 'retainer',
    features: [
      'Everything in Growth Partner',
      'CFO-on-demand services',
      'Internal & statutory audit',
      'Pre-IPO restructuring',
      'NSE Emerge / BSE SME listing',
      'Dedicated team of 5+ experts',
      '24/7 priority support',
    ],
    buttonText: 'Get Started',
    popular: false,
    hoverColor: 'hover:!bg-slate-900 hover:!text-white dark:hover:!bg-[#E5C37B] dark:hover:!text-black'
  },
];

export function PricingSection() {
  return (
    <section
      id="packages"
      className="relative py-20 !bg-white dark:!bg-[#02040A] scroll-mt-24 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/[0.03] dark:bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-12 text-center flex flex-col items-center">

        {/* Header Section - Mobile Optimized Font Sizes */}
        <div className="mb-16 md:mb-24">
          <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-8">
            Packages
          </div>

          <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] font-normal !text-slate-950 dark:!text-white mb-6 md:mb-10 leading-tight tracking-tight font-serif transition-colors">
            Pick the <span className="italic !text-[#B48A32] dark:!text-[#E4C37B] font-serif">Partnership</span> <br className="hidden sm:block" /> That Fits your Stage
          </h2>

          <p className="!text-slate-600 dark:!text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-normal">
            Transparent pricing. No hidden fees. Cancel any retainer with 30 days notice.
          </p>
        </div>

        {/* Pricing Grid - Gap and Padding Fixed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              /* 
                 FIXED: p-8 for mobile, p-12 for desktop. 
                 md:scale-105 ensures scale only happens on large screens. 
              */
              className={`group relative p-8 md:p-12 rounded-[40px] flex flex-col text-left transition-all duration-500 backdrop-blur-md ${plan.popular
                ? '!bg-white dark:!bg-white/[0.05] border-2 !border-indigo-600 dark:!border-[#938BF1]/40 shadow-2xl md:scale-105 z-20'
                : '!bg-slate-50 dark:!bg-white/[0.02] border !border-slate-200 dark:!border-white/10 hover:!border-indigo-500 z-10'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#E5C37B] rounded-full text-[9px] font-black text-black shadow-lg flex items-center gap-1.5 whitespace-nowrap uppercase tracking-widest">
                  ✨ MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] !text-indigo-600 dark:!text-[#938BF1]">
                  {plan.badge}
                </span>
                <h3 className="text-3xl md:text-4xl font-normal !text-slate-950 dark:!text-white mt-4 mb-4 font-serif italic">{plan.name}</h3>
                <p className="!text-slate-500 dark:!text-gray-400 text-sm leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* FIXED: text-5xl for mobile to prevent overflow */}
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-2xl font-serif text-slate-400">₹</span>
                <span className="text-5xl md:text-6xl font-normal font-serif !text-slate-950 dark:!text-white">{plan.price}</span>
                <span className="text-[10px] font-bold !text-slate-400 dark:!text-gray-500 uppercase tracking-widest ml-1">{plan.priceSub}</span>
              </div>

              <button className={`w-full py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all mb-10 ${plan.popular
                ? 'bg-indigo-600 dark:bg-[#E5C37B] text-white dark:text-black hover:bg-indigo-700'
                : `bg-transparent border !border-slate-300 dark:!border-white/10 !text-slate-900 dark:!text-white ${plan.hoverColor}`
                }`}>
                {plan.buttonText}
              </button>

              <div className="space-y-5 flex-grow">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full !bg-indigo-50 dark:!bg-[#938BF1]/10 border !border-indigo-100 dark:!border-[#938BF1]/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <Check className="w-3 h-3 !text-indigo-600 dark:!text-[#938BF1]" strokeWidth={3} />
                    </div>
                    <span className="!text-slate-600 dark:!text-gray-400 text-[13px] md:text-sm leading-snug font-medium group-hover/item:!text-slate-950 dark:group-hover/item:!text-gray-200 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}