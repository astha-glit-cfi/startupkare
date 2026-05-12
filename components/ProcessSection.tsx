'use client';

import {
  Lightbulb,
  ShieldCheck,
  Scale,
  Wallet,
  Rocket,
  TrendingUp,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Idea',
    description: 'Validate the opportunity with market research and customer discovery.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Validation',
    description: 'Build MVP, test with early users, refine product-market fit.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Legal',
    description: 'Incorporate, register IP, set up compliance and tax structure.',
    icon: Scale,
  },
  {
    number: '04',
    title: 'Funding',
    description: 'Pitch deck, financial model, investor intros — close your round.',
    icon: Wallet,
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Brand, website, performance marketing — go to market with confidence.',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Scale',
    description: 'CFO services, hiring, automation, and pre-IPO readiness.',
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative pt-10 pb-10 !bg-white dark:!bg-[#02040A] transition-colors duration-500 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-indigo-500/[0.05] dark:bg-indigo-600/[0.08] blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <div className="mb-24">
          <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-10">
            Our Process
          </div>

          {/* MAIN HEADING - !text-slate-950 use kiya hai taaki light mode mein har haal mein dikhe */}
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] !text-slate-950 dark:!text-white mb-10 leading-[1.05] tracking-tight font-serif max-w-5xl transition-colors duration-500">
            From{' '}
            <span className="italic !text-[#B48A32] dark:!text-[#E5C37B] font-serif">
              Spark
            </span>{' '}
            to Scale, In Six Clear{' '}
            <span className="italic !text-[#B48A32] dark:!text-[#E5C37B] font-serif">
              Steps
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="!text-slate-700 dark:!text-slate-400 text-xl md:text-2xl max-w-3xl leading-relaxed font-normal">
            A repeatable, proven journey we've taken with 500+ founders across India.
          </p>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] !bg-slate-200 dark:!bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-20 gap-x-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center lg:items-start group">
                  <div className="relative mb-10">
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 !bg-[#E5C37B] rounded-full flex items-center justify-center text-[12px] font-black !text-black z-20 shadow-md">
                      {step.number}
                    </div>

                    {/* Icon Box */}
                    <div className="w-[104px] h-[104px] rounded-[32px] !bg-slate-50 dark:!bg-[#161831] border !border-slate-200 dark:!border-white/10 flex items-center justify-center shadow-lg dark:shadow-none group-hover:!border-indigo-600 transition-all duration-500">
                      <Icon
                        className="w-8 h-8 !text-indigo-700 dark:!text-[#938BF1] group-hover:scale-110 transition-transform duration-500"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Step Title - Forced dark in light mode */}
                  <h3 className="text-2xl font-normal !text-slate-950 dark:!text-white mb-4 font-serif group-hover:!text-indigo-700 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="!text-slate-600 dark:!text-slate-400 text-[14px] leading-relaxed max-w-[200px] lg:max-w-none group-hover:!text-slate-900 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}