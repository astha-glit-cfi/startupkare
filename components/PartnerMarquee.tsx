'use client';

import { useEffect, useState } from 'react';

// SLOWER & PREMIUM Ease-Out Count-up Hook
function useCountUp(target: number, isMounted: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isMounted) return; // Jab tak mount na ho, animation shuru mat karo

    const duration = 2000; 
    const frameRate = 30; 
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const t = currentFrame / totalFrames;
      const progress = 1 - Math.pow(1 - t, 3);

      if (currentFrame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(progress * target));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [target, isMounted]);

  return count;
}

const StatItem = ({ stat, isMounted }: { stat: any, isMounted: boolean }) => {
  const animatedValue = useCountUp(stat.targetValue, isMounted);

  return (
    <div className="text-center group min-h-[80px] md:min-h-[110px] flex flex-col justify-center">
      <div className={`text-5xl md:text-7xl font-normal mb-4 font-serif italic ${stat.color} tracking-tight leading-none drop-shadow-[0_0_15px_rgba(147,139,241,0.2)] transition-opacity duration-700 ${isMounted && animatedValue > 0 ? 'opacity-100' : 'opacity-0'}`}>
        {/* 
            FIX: Number tabhi dikhega jab isMounted true ho aur value 0 se badi ho.
            Isse '0+' wala placeholder kabhi nahi dikhega.
        */}
        {stat.prefix}{animatedValue}{stat.suffix}
      </div>
      <div className={`text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-[0.35em] transition-all duration-1000 ${isMounted ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {stat.label}
      </div>
    </div>
  );
};

export function PartnerMarquee() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // 500ms baad mounting true hogi taaki layout stable ho jaye
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const stats = [
    { targetValue: 500, suffix: '+', label: 'CLIENTS SERVED', color: 'text-[#938BF1]' },
    { targetValue: 50, prefix: '₹', suffix: 'Cr+', label: 'FUNDING RAISED', color: 'text-[#E5C37B]' },
    { targetValue: 15, suffix: ' yrs', label: 'COMBINED EXPERIENCE', color: 'text-[#938BF1]' },
    { targetValue: 98, suffix: '%', label: 'CLIENT SATISFACTION', color: 'text-[#E5C37B]' },
  ];

  // Professional SVG Logos
  const partners = [
    { name: 'Stripe', logo: 'https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg' },
    { name: 'Shopify', logo: 'https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg' },
    { name: 'Y Combinator', logo: 'https://www.vectorlogo.zone/logos/ycombinator/ycombinator-ar21.svg' },
    { name: 'Slack', logo: 'https://www.vectorlogo.zone/logos/slack/slack-ar21.svg' },
    { name: 'Airbnb', logo: 'https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg' },
    { name: 'Google', logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
    { name: 'Amazon', logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg' },
  ];

  return (
    <section className="pt-20 pb-16 !bg-white dark:!bg-[#02040A] overflow-hidden relative transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 mb-24 md:mb-32">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} isMounted={isMounted} />
          ))}
        </div>

        <div className="flex flex-col items-center mb-16 text-center">
          <div className="h-[1px] w-24 bg-slate-200 dark:bg-white/10 mb-8"></div>
          <p className="text-[9px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em] opacity-80">
            Trusted by founders from leading ecosystems
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="inline-flex flex-col items-center mx-12 md:mx-20 group">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                referrerPolicy="no-referrer"
                className="h-8 md:h-12 w-auto object-contain transition-all duration-500 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 dark:invert dark:brightness-[10] dark:group-hover:brightness-100" 
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}