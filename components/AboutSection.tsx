'use client';
import { Shield, Target , ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 !bg-white dark:!bg-[#060B1A] overflow-hidden transition-colors duration-500 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT CONTENT: Mission & Values --- */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex px-3 py-1 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-600 dark:text-[#938BF1] uppercase tracking-[0.3em] mb-8">
              Leadership & Trust
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white mb-8 leading-tight">
              Built by Founders, <br />
              For <span className="italic text-[#B48A32] dark:text-[#E4C37B]">Founders.</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-gray-400 mb-10 leading-relaxed font-normal">
              Startup Kare is more than a consultancy; it's a mission-driven ecosystem built to provide the structural integrity required to scale startups into national assets. We bridge the gap between vision and execution.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-white/5 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-wider">Absolute Integrity</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed">Verified compliance and institutional trust in every step.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-white/5 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-wider">Precision Scaling</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed">Data-driven strategies for fundraising and market entry.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-slate-100 dark:border-white/5">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#060B1A] bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                    </div>
                  ))}
               </div>
               <p className="text-sm font-medium text-slate-500 dark:text-gray-400">
                 Trusted by <span className="text-slate-900 dark:text-white font-bold">500+ Founders</span> across India
               </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: Founder Profile Card --- */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative z-10 bg-slate-50 dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/5 rounded-[48px] p-2 overflow-hidden shadow-2xl">
              
              {/* Photo Area */}
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                  alt="Founder" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Stats Overlay on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex justify-between items-center text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Facilitated Growth</p>
                    <p className="text-2xl font-bold font-serif">₹500Cr+</p>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Experience</p>
                    <p className="text-2xl font-bold font-serif">12+ Yrs</p>
                  </div>
                </div>
              </div>

              {/* Founder Info */}
              <div className="p-8 md:p-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Founder Name</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest">Managing Partner & CEO</p>
                </div>
        {/* Line 131-135 ke paas isse replace karein */}
<a 
  href="https://linkedin.com/in/your-profile" 
  target="_blank"
  className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white transition-all shadow-sm"
>
  {/* LinkedIn SVG Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
</a>
              </div>
            </div>

            {/* Decorative Grid Behind */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}