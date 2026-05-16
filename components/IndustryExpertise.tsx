'use client';
import { Cloud, ShoppingBag, Landmark, HeartPulse, Factory, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  { name: 'SaaS', icon: <Cloud />, desc: 'Subscription models, global compliance & recurring billing setup.' },
  { name: 'D2C', icon: <ShoppingBag />, desc: 'Brand registration, inventory funding & e-commerce legalities.' },
  { name: 'Fintech', icon: <Landmark />, desc: 'RBI licenses, payment gateway compliance & data security.' },
  { name: 'Healthcare', icon: <HeartPulse />, desc: 'Medical certifications, drug licenses & health-tech scaling.' },
  { name: 'MSMEs', icon: <Factory />, desc: 'ZED certifications, Mudra loans & cluster development schemes.' },
];

export function IndustryExpertise() {
  return (
    <section className="py-24 !bg-white dark:!bg-[#02040A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="!text-slate-950 dark:!text-white text-3xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] mb-8 tracking-tight font-serif transition-colors duration-500">
            Expertise Across <span className="italic text-[#B48A32]">Sectors</span>
          </h2>
          <p className="!text-slate-500 dark:!text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Specialized consulting solutions for India's high-growth industries.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((item, i) => (
            <Link 
              key={i} 
              href={`/industries/${item.name.toLowerCase()}`} 
              className="group p-8 rounded-3xl !bg-slate-50 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 hover:!border-indigo-500 transition-all text-center flex flex-col h-full shadow-sm dark:shadow-none"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 !bg-white dark:!bg-white/5 !text-indigo-600 dark:!text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm border !border-slate-100 dark:!border-transparent">
                {item.icon}
              </div>

              {/* HEADING FIX: Forced Visibility for Light Mode */}
              <h4 className="font-bold text-lg !text-slate-900 dark:!text-white mb-3">
                {item.name}
              </h4>

              {/* DESCRIPTION FIX: Forced Visibility for Light Mode */}
              <p className="text-xs !text-slate-600 dark:!text-gray-400 leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              {/* BUTTON FIX: Forced Visibility for Light Mode */}
              <div className="text-[10px] font-bold !text-indigo-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                Explore Solution <ArrowRight size={12}/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}