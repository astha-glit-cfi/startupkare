'use client';

import { Navbar } from '@/components/Navbar'; // Path check kar lena
import { Footer } from '@/components/Footer'; // Path check kar lena
import { Target, Users, Rocket, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <main className="min-h-screen !bg-white dark:!bg-[#02040A] transition-colors duration-500">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-flex px-4 py-2 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-600 dark:text-[#938BF1] uppercase tracking-[0.25em] mb-8">
            Our Journey
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-medium !text-slate-950 dark:!text-white mb-8 leading-tight">
            We build the <span className="italic !text-[#B48A32] dark:!text-[#E4C37B]">Foundations</span> <br />
            of Future Giants.
          </h1>
          <p className="max-w-3xl mx-auto text-xl !text-slate-600 dark:!text-gray-400 leading-relaxed font-normal">
            Startup Kare is India's leading consulting partner, dedicated to turning ambitious ideas into scalable, profitable, and compliant businesses.
          </p>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-24 border-y !border-slate-100 dark:!border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-12 rounded-[40px] bg-slate-50 dark:bg-[#0B0F1A] border !border-slate-200 dark:!border-white/5">
            <Target className="text-indigo-600 mb-8" size={40} />
            <h3 className="text-3xl font-serif font-bold !text-slate-900 dark:!text-white mb-6">Our Vision</h3>
            <p className="text-lg !text-slate-600 dark:!text-gray-400 leading-relaxed">
              To democratize entrepreneurship in India by providing world-class legal, financial, and strategic support to every founder, regardless of their background or location.
            </p>
          </div>
          <div className="p-12 rounded-[40px] bg-indigo-50/50 dark:bg-indigo-500/5 border !border-indigo-100 dark:!border-indigo-500/10">
            <Rocket className="text-indigo-600 mb-8" size={40} />
            <h3 className="text-3xl font-serif font-bold !text-slate-900 dark:!text-white mb-6">Our Mission</h3>
            <p className="text-lg !text-slate-600 dark:!text-gray-400 leading-relaxed">
              To empower 10,000+ startups by 2030 with the right capital, compliance, and community, making India the global hub of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* --- WHY US / CORE VALUES --- */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif !text-slate-950 dark:!text-white mb-6">Why Founders <span className="italic !text-[#B48A32]">Choose Us</span></h2>
            <p className="!text-slate-500 dark:!text-gray-400 text-lg">Four pillars that define Startup Kare's excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Absolute Integrity", desc: "Transparent pricing and honest advice, always." },
              { icon: <Award />, title: "Expert Led", desc: "Team of ex-founders, CAs, and legal veterans." },
              { icon: <Users />, title: "Investor Network", desc: "Direct access to 200+ active VCs and Angels." },
              { icon: <Rocket />, title: "End-to-End", desc: "From registration to IPO, we handle it all." }
            ].map((value, i) => (
              <div key={i} className="group p-8 rounded-3xl !bg-white dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 hover:!border-indigo-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/5 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold !text-slate-900 dark:!text-white mb-3">{value.title}</h4>
                <p className="!text-slate-500 dark:!text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[56px] bg-[##210D3B] text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full"></div>
           <h2 className="text-5xl md:text-8xl font-serif font-medium !text-slate-950 dark:!text-white mb-8 leading-tight">Ready to start your <br /> success story?</h2>
           <Link href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg- text-indigo-600 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg relative z-10">
              Get Started Now <ArrowRight size={20} />
           </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}