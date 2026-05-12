'use client';

import { useEffect, useState } from 'react';

// MUCH SLOWER & PREMIUM Ease-Out Count-up Hook
function useCountUp(target: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // CHANGE: Duration ko 4000ms (4 seconds) kiya hai taaki load bohot slow ho
    const duration = 4000; 
    const frameRate = 30; // 30ms per frame (smooth)
    const totalFrames = Math.round(duration / frameRate);
    
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      
      // Progression (0 to 1)
      const t = currentFrame / totalFrames;
      
      // "Ease Out Cubic" formula: Isse numbers end mein aate-aate bohot slow ho jate hain
      // Ye effect premium websites mein use hota hai
      const progress = 1 - Math.pow(1 - t, 3);

      if (currentFrame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(progress * target));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [target]);

  return count;
}

const StatItem = ({ stat, isMounted }: { stat: any, isMounted: boolean }) => {
  const animatedValue = useCountUp(isMounted ? stat.targetValue : 0);

  return (
    <div className="text-center group">
      <div className={`text-5xl md:text-7xl font-normal mb-4 font-serif italic ${stat.color} tracking-tight leading-none drop-shadow-[0_0_15px_rgba(147,139,241,0.2)]`}>
        {stat.prefix}{isMounted ? animatedValue : 0}{stat.suffix}
      </div>
      <div className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-[0.35em] group-hover:text-slate-600 dark:group-hover:text-gray-400 transition-colors">
        {stat.label}
      </div>
    </div>
  );
};

export function PartnerMarquee() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Thoda delay add kiya taaki page poora load hone ke baad animation start ho
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const stats = [
    { targetValue: 500, suffix: '+', label: 'CLIENTS SERVED', color: 'text-[#938BF1]' },
    { targetValue: 50, prefix: '₹', suffix: 'Cr+', label: 'FUNDING RAISED', color: 'text-[#E5C37B]' },
    { targetValue: 15, suffix: ' yrs', label: 'COMBINED EXPERIENCE', color: 'text-[#938BF1]' },
    { targetValue: 98, suffix: '%', label: 'CLIENT SATISFACTION', color: 'text-[#E5C37B]' },
  ];

  const partners = [
    'Nexus', 'Accel', 'Y Combinator', 'Tiger Global', 'Lightspeed',
    'Matrix', 'Startup India', 'DPIIT', 'Sequoia', 'Blume'
  ];

  return (
    <section className="pt-20 pb-5 md:pb-16 bg-white dark:bg-[#02040A] overflow-hidden relative transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/5 blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 mb-24 md:mb-32">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} isMounted={isMounted} />
          ))}
        </div>

        <div className="flex flex-col items-center mb-16">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/20 to-transparent mb-8"></div>
          <p className="text-[8px] md:text-[9px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-[0.5em] opacity-80">
            TRUSTED BY FOUNDERS & INVESTORS ACROSS INDIA
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 dark:from-[#02040A] dark:via-[#02040A]/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 dark:from-[#02040A] dark:via-[#02040A]/80 to-transparent z-10"></div>

        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-16 md:gap-32 items-center px-12">
            {partners.map((partner, idx) => (
              <span key={idx} className="text-2xl md:text-4xl font-serif italic text-slate-200 dark:text-white/10 hover:text-slate-400 dark:hover:text-white/40 transition-all duration-500 cursor-default">
                {partner}
              </span>
            ))}
          </div>
          <div className="flex gap-16 md:gap-32 items-center px-12">
            {partners.map((partner, idx) => (
              <span key={`dup-${idx}`} className="text-2xl md:text-4xl font-serif italic text-slate-200 dark:text-white/10 hover:text-white/40 transition-all duration-500 cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}