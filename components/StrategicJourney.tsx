'use client';

import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export function StrategicJourney() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    /* 
       FIX: Background matching exactly for both modes.
       Light: !bg-white | Dark: !bg-[#02040A]
    */
    <section
      id="journey"
      className="relative pt-15 pb-15 !bg-white dark:!bg-[#02040A] overflow-hidden transition-colors duration-500 scroll-mt-24"
    >

      {/* Background Subtle Glows - Adjusted for Light Mode visibility */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/[0.03] dark:bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-10 backdrop-blur-sm">
              THE STRATEGIC JOURNEY
            </div>

            {/* Heading: Forced dark slate in light mode */}
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] !text-slate-950 dark:!text-white mb-10 leading-[1.05] tracking-tight font-serif transition-colors duration-500">
              From <span className="italic !text-[#B48A32] dark:!text-[#E5C37B] font-serif">Idea</span> to Impact<br /> We Build the Path.
            </h2>

            {/* Subtext: Clearer gray in light mode */}
            <p className="!text-slate-600 dark:!text-slate-400 text-xl md:text-2xl max-w-xl leading-relaxed font-normal">
              A clear roadmap for every founder. Every stage. Every milestone.
            </p>
          </div>

          {/* Right Visual (Interactive Journey Line) */}
          <div className="lg:w-1/2 relative min-h-[600px] w-full flex items-center justify-center">

            <div className="relative w-full max-w-[550px] aspect-[4/5]">
              {/* Path SVG - Adjusted opacity for light mode */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                <defs>
                  <filter id="line-glow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="line-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#938BF1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#938BF1" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 480 Q 50 480, 100 400 T 200 250 T 380 20"
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="4"
                  filter="url(#line-glow)"
                  strokeDasharray="1000"
                  strokeDashoffset={isMounted ? 0 : 1000}
                  style={{ transition: 'stroke-dashoffset 4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
              </svg>

              {/* Milestone Cards: Updated for Light/Dark Mode visibility */}

              {/* 01 SEED Milestone */}
              <div className={`absolute left-[0%] bottom-[5%] transition-all duration-1000 delay-[500ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="!bg-white dark:!bg-[#0A0B1E]/60 border-l-4 border-[#938BF1] p-6 backdrop-blur-md rounded-r-2xl shadow-xl dark:shadow-2xl !border-y !border-r !border-slate-100 dark:border-white/5">
                  <div className="text-4xl font-serif italic !text-slate-100 dark:!text-white/10 mb-2">01</div>
                  <div className="text-sm font-bold !text-slate-900 dark:!text-white tracking-widest mb-2 uppercase">SEED</div>
                  <div className="text-[12px] !text-slate-500 dark:!text-gray-400 max-w-[140px] leading-relaxed">Validate & Build your foundation with market research.</div>
                </div>
              </div>

              {/* 02 GROWTH Milestone */}
              <div className={`absolute left-[30%] top-[40%] transition-all duration-1000 delay-[1500ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="!bg-white dark:!bg-[#0A0B1E]/60 border-l-4 border-[#938BF1] p-6 backdrop-blur-md rounded-r-2xl shadow-xl dark:shadow-2xl !border-y !border-r !border-slate-100 dark:border-white/5">
                  <div className="text-4xl font-serif italic !text-slate-100 dark:!text-white/10 mb-2">02</div>
                  <div className="text-sm font-bold !text-slate-900 dark:!text-white tracking-widest mb-2 uppercase">GROWTH</div>
                  <div className="text-[12px] !text-slate-500 dark:!text-gray-400 max-w-[140px] leading-relaxed">Scale your product & capture the market share.</div>
                </div>
              </div>

              {/* 03 IPO Milestone */}
              <div className={`absolute right-[5%] top-[0%] transition-all duration-1000 delay-[2500ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="!bg-white dark:!bg-[#0A0B1E]/60 border-l-4 border-[#E5C37B] p-6 backdrop-blur-md rounded-r-2xl shadow-xl dark:shadow-2xl !border-y !border-r !border-slate-100 dark:border-white/5">
                  <div className="text-4xl font-serif italic !text-slate-100 dark:!text-[#E5C37B]/10 mb-2">03</div>
                  <div className="text-sm font-bold !text-slate-900 dark:!text-white tracking-widest mb-2 uppercase">IPO & Beyond</div>
                  <div className="text-[12px] !text-slate-500 dark:!text-gray-400 max-w-[140px] leading-relaxed">Go public & create lasting impact globally!</div>
                </div>
              </div>

              {/* ROCKET Visual */}
              <div className={`absolute right-[-8%] top-[-8%] transition-all duration-1000 delay-[3200ms] ${isMounted ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-indigo-500/20 dark:bg-indigo-500/30 blur-3xl rounded-full animate-pulse"></div>
                  <div className="relative p-6 !bg-white dark:!bg-white/5 backdrop-blur-lg rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
                    <Rocket size={64} className="!text-indigo-600 dark:!text-white -rotate-45 drop-shadow-[0_0_20px_#938BF1]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}