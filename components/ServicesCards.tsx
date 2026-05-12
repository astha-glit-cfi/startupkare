'use client';

import Link from 'next/link'; // 1. Link import kiya
import {
  Briefcase,
  BarChart3,
  Handshake,
  Building2,
  Code2,
  Users2,
  Newspaper,
  Magnet,
  ArrowRight
} from 'lucide-react';

const services = [
  { icon: Briefcase, title: 'Business Consulting', description: 'Strategy, market entry, business model design — built for Indian startups.' },
  { icon: BarChart3, title: 'Management Consulting', description: 'Operations, finance, and growth advisory from senior practitioners.' },
  { icon: Handshake, title: 'Investor Connect & Funding', description: 'Pitch decks, financial models, intros to our 200+ investor network.' },
  { icon: Building2, title: 'Government Schemes', description: 'DPIIT, Mudra, Stand-Up India, PLI — we handle the paperwork end-to-end.' },
  { icon: Code2, title: 'IT Services', description: 'Websites, MVPs, automations, AI integrations — production-grade builds.' },
  { icon: Users2, title: 'Startup Communities', description: '5000+ entrepreneurs network — events, mentorship, peer learning.' },
  { icon: Newspaper, title: 'Startup World News', description: 'Curated funding, policy, and ecosystem intelligence — daily.' },
  { icon: Magnet, title: 'Lead Capture & Growth', description: 'Performance marketing, CRM, automation — turn traffic into revenue.' },
];

export function ServicesCards() {
  return (
    <section
      id="services"
      className="relative pt-10 pb-10 !bg-white dark:!bg-[#02040A] overflow-hidden transition-colors duration-500 scroll-mt-24"
    >

      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/[0.03] dark:bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] dark:bg-blue-900/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">

        {/* Header Section */}
        <div className="mb-24">
          <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-10 backdrop-blur-sm">
            What We Do
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal !text-slate-950 dark:!text-white mb-10 leading-[1.05] tracking-tight font-serif max-w-5xl transition-colors duration-500">
            Everything Your <span className="italic !text-[#B48A32] dark:!text-[#E4C37B] font-serif">Startup</span> Needs,<br /> Under One Roof
          </h2>

          <p className="!text-slate-600 dark:!text-gray-400 text-xl md:text-2xl max-w-3xl leading-relaxed font-normal transition-colors duration-500">
            Eight integrated service modules built specifically for Indian founders — from incorporation to IPO.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              /* 2. div ko Link tag mein badal diya aur href set kiya */
              <Link
                key={idx}
                href="/contact-us"
                className="group p-10 !bg-slate-50 dark:!bg-white/[0.03] border !border-slate-200 dark:!border-white/10 rounded-[32px] hover:!border-indigo-500/50 dark:hover:border-[#938BF1]/40 transition-all duration-500 flex flex-col h-full relative overflow-hidden shadow-sm dark:shadow-none cursor-pointer"
              >
                {/* Glow Effect on Hover (Only Dark Mode) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#938BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl !bg-white dark:!bg-[#161831] border !border-slate-200 dark:!border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 relative z-10 shadow-sm">
                  <Icon className="w-6 h-6 !text-indigo-700 dark:!text-[#938BF1]" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-normal !text-slate-900 dark:!text-white mb-6 font-serif relative z-10 group-hover:!text-indigo-700 dark:group-hover:!text-[#E4C37B] transition-colors">
                  {service.title}
                </h3>

                <p className="!text-slate-500 dark:!text-gray-500 text-[15px] leading-relaxed mb-10 flex-grow relative z-10">
                  {service.description}
                </p>

                {/* Explore link UI */}
                <div className="flex items-center text-[10px] font-bold !text-slate-400 dark:!text-white/20 uppercase tracking-[0.2em] group-hover:!text-indigo-700 dark:group-hover:!text-[#938BF1] transition-all relative z-10">
                  Explore <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}