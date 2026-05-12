'use client';

import { Shield, Target, Award, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-[#060B1A] relative scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div>
            <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-6">Who We Are</div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-[1.15]" style={{ fontFamily: 'var(--font-heading)' }}>
              Architecting the <br />
              Future of <span className="text-indigo-400">Indian Industry</span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
              Startup Kare is more than a platform; it's a mission-driven ecosystem architected to bridge the gap between visionary entrepreneurs and industrial excellence. We provide the structural integrity required to scale startups into national assets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>Integrity</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Verified compliance and institutional trust.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>Precision</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Data-driven metrics for absolute clarity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Card */}
          <div 
            ref={cardRef} 
            className={`relative transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}
          >
            <div className="p-10 md:p-12 relative z-10 bg-[#0B1D3A] border border-white/5 rounded-[2rem] shadow-2xl shadow-indigo-500/5 backdrop-blur-xl">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-[100ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      Impact Radius
                    </p>
                    <p className={`text-3xl font-extrabold text-white tracking-tight transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-[200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                      Pan-India
                    </p>
                  </div>
                  <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[300ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.8]'}`}>
                    <Award className="text-indigo-400" size={32} />
                  </div>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                <div className={`grid grid-cols-2 gap-8 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <div>
                    <p className="text-4xl font-extrabold text-white mb-1 font-serif italic" style={{ fontFamily: 'var(--font-heading)' }}>5K+</p>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Founders Empowered</p>
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold text-indigo-400 mb-1 font-serif italic" style={{ fontFamily: 'var(--font-heading)' }}>₹500Cr</p>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Facilitated Growth</p>
                  </div>
                </div>

                <button className={`w-full p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-indigo-600 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-[500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <span className="font-bold text-white text-[10px] uppercase tracking-widest">Our Strategic Vision</span>
                  <ArrowUpRight className="text-indigo-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={18} />
                </button>
              </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className={`absolute -top-6 -right-6 w-full h-full border-2 border-dashed border-white/5 rounded-[2rem] z-0 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-[100ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}></div>
            <div className={`absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl z-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-[300ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
