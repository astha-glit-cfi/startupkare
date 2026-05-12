'use client';

import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

// DHAYAN DEIN: Maine function ka naam StrategicJourney se badal kar SchemeFinder kar diya hai
export function SchemeFinder() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="schemes" className="relative pt-32 pb-48 bg-[#050816] overflow-hidden scroll-mt-24">

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-900/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Content */}
          <div className="lg:w-1/2 lg:sticky lg:top-40">
            <h2 className="text-white text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[1] mb-12 tracking-tight">
              Find Your <br />
              <span className="italic text-[#E5C37B] font-serif font-medium">Scheme</span> &<br />
              Growth<br />
              Path.
            </h2>

            <p className="text-slate-400 text-xl md:text-2xl max-w-xl leading-relaxed font-normal">
              Unlock government incentives tailored for every stage of your startup journey.
            </p>
          </div>

          {/* Right Visual (Milestones) */}
          <div className="lg:w-1/2 relative min-h-[700px] w-full flex items-center justify-center">

            <div className="relative w-full max-w-[550px] aspect-[4/6]">
              {/* Animated Path Line */}
              <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                <defs>
                  <filter id="glow-line">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="path-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#938BF1" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#938BF1" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 550 Q 80 550, 120 450 T 220 280 T 380 50"
                  fill="none"
                  stroke="url(#path-grad)"
                  strokeWidth="4"
                  filter="url(#glow-line)"
                  strokeDasharray="1200"
                  strokeDashoffset={isMounted ? 0 : 1200}
                  style={{ transition: 'stroke-dashoffset 4s ease-out' }}
                />
              </svg>

              {/* 01 SEED SCHEMES */}
              <div className={`absolute left-[5%] bottom-[15%] transition-all duration-1000 delay-[500ms] ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="bg-[#0A0C1E]/60 border-l-4 border-indigo-500/40 p-8 backdrop-blur-xl rounded-r-2xl shadow-2xl w-[260px]">
                  <div className="text-5xl font-serif italic text-white/10 mb-2">01</div>
                  <div className="text-sm font-bold text-white tracking-[0.2em] mb-3 uppercase">IDEA STAGE</div>
                  <div className="text-[13px] text-gray-400 leading-relaxed font-medium">Seed Fund Schemes & DPIIT Recognition benefits.</div>
                </div>
              </div>

              {/* 02 GROWTH SCHEMES */}
              <div className={`absolute left-[35%] top-[35%] transition-all duration-1000 delay-[1500ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-[#0A0C1E]/60 border-l-4 border-indigo-500/40 p-8 backdrop-blur-xl rounded-r-2xl shadow-2xl w-[260px]">
                  <div className="text-5xl font-serif italic text-white/10 mb-2">02</div>
                  <div className="text-sm font-bold text-white tracking-[0.2em] mb-3 uppercase">GROWTH</div>
                  <div className="text-[13px] text-gray-400 leading-relaxed font-medium">MSME Loans, Mudra, and Production Linked Incentives.</div>
                </div>
              </div>

              {/* 03 IPO SCHEMES */}
              <div className={`absolute right-[-5%] top-[0%] transition-all duration-1000 delay-[2500ms] ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="bg-[#0A0C1E]/60 border-l-4 border-[#E5C37B]/60 p-8 backdrop-blur-xl rounded-r-2xl shadow-2xl w-[260px]">
                  <div className="text-5xl font-serif italic text-[#E5C37B]/10 mb-2">03</div>
                  <div className="text-sm font-bold text-white tracking-[0.2em] mb-3 uppercase">Listing Support</div>
                  <div className="text-[13px] text-gray-400 leading-relaxed font-medium">SME IPO Listing subsidies & NSE Emerge assistance.</div>
                </div>
              </div>

              {/* ROCKET */}
              <div className={`absolute right-[-10%] top-[-10%] transition-all duration-1000 delay-[3200ms] ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative p-8 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10">
                  <div className="absolute inset-0 bg-indigo-500/20 blur-3xl animate-pulse rounded-full"></div>
                  <Rocket size={72} className="text-white -rotate-45 drop-shadow-[0_0_25px_rgba(147,139,241,0.6)]" strokeWidth={1.5} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}