'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
// LinkedIn ko yahan se hata diya hai taaki build error na aaye
import { Target, Users, Rocket, ShieldCheck, ArrowRight, Award, Mail } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: "Aman Sharma",
    role: "Founder & CEO",
    bio: "Ex-Investment Banker with 10+ years of experience in startup fundraising and scaling.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Dr. Priya Verma",
    role: "Head of Legal & Compliance",
    bio: "Corporate Lawyer specializing in DPIIT recognitions and intellectual property rights.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Vikram Malhotra",
    role: "Strategic Growth Partner",
    bio: "Growth hacker who has helped 50+ D2C brands cross the ₹10Cr ARR mark.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    linkedin: "#",
  }
];

export default function AboutUs() {
  return (
    <main className="min-h-screen !bg-white dark:!bg-[#02040A] transition-colors duration-500">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="inline-flex px-4 py-2 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full text-[10px] font-bold text-indigo-600 dark:text-[#938BF1] uppercase tracking-[0.25em] mb-8">
            Our Journey
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold !text-slate-950 dark:!text-white mb-8 leading-tight">
            We build the <span className="italic text-[#B48A32] dark:text-[#E4C37B]">Foundations</span> <br />
            of Future Giants.
          </h1>
          <p className="max-w-3xl mx-auto text-xl !text-slate-600 dark:!text-gray-400">
            Startup Kare is India's leading consulting partner, dedicated to turning ambitious ideas into scalable and compliant businesses.
          </p>
        </div>
      </section>

      {/* --- LEADERSHIP / TEAM SECTION --- */}
      <section className="py-32 bg-slate-50 dark:bg-white/[0.02] border-y !border-slate-100 dark:!border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-serif !text-slate-950 dark:!text-white mb-20">
            Meet the <span className="italic text-[#B48A32]">Leadership</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-xl border !border-slate-200 dark:!border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* LinkedIn Hover Overlay - Using Direct SVG to fix Build Error */}
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={member.linkedin} target="_blank" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:scale-110 transition-transform shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="text-left px-2">
                  <h4 className="text-2xl font-bold !text-slate-950 dark:!text-white mb-1">{member.name}</h4>
                  <p className="text-indigo-600 dark:text-[#E4C37B] font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-serif !text-slate-950 dark:!text-white mb-20">Why Founders <span className="italic text-[#B48A32]">Choose Us</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Absolute Integrity", desc: "Transparent pricing and honest advice, always." },
              { icon: <Award />, title: "Expert Led", desc: "Team of ex-founders, CAs, and legal veterans." },
              { icon: <Users />, title: "Investor Network", desc: "Direct access to 200+ active VCs and Angels." },
              { icon: <Rocket />, title: "End-to-End", desc: "From registration to IPO, we handle it all." }
            ].map((value, i) => (
              <div key={i} className="group p-8 rounded-3xl !bg-white dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 hover:!border-indigo-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/5 flex items-center justify-center text-indigo-600 mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold !text-slate-900 dark:!text-white mb-3">{value.title}</h4>
                <p className="!text-slate-500 dark:!text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}