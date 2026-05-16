'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown, Rocket, ShieldCheck, Briefcase } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal'; 
import { useTheme } from 'next-themes';

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted ? resolvedTheme === 'dark' : true;

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const industries = [
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'D2C & Retail', href: '/industries/d2c' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'MSME', href: '/industries/msme' },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-[100]">
      <nav className={`transition-all duration-500 border-b ${
        isDarkMode ? 'bg-[#060B1A]/80 border-white/5' : 'bg-white/80 border-slate-200'
      } backdrop-blur-xl`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
          
          {/* LEFT: Logo & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center gap-2 group">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight transition-all">
                <span className="italic text-[#B48A32] dark:text-[#E4C37B]">Startup Kare</span>
              </h1>
            </Link>
          </div>

          {/* CENTER: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services -> Leads to Contact Us as requested */}
            <Link href="/#services" className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#938BF1] transition-all">
              Services
            </Link>

            {/* INDUSTRY DROPDOWN (New Point 8 Implementation) */}
            <div 
              className="relative"
              onMouseEnter={() => setIsIndustryOpen(true)}
              onMouseLeave={() => setIsIndustryOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#938BF1] transition-all outline-none">
                Industries <ChevronDown size={14} className={`transition-transform duration-300 ${isIndustryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isIndustryOpen && (
                <div className="absolute top-full left-0 w-56 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-2 overflow-hidden">
                    {industries.map((ind) => (
                      <Link 
                        key={ind.name} 
                        href={ind.href}
                        className="block px-4 py-3 text-xs font-bold text-slate-500 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-indigo-600 dark:hover:text-white rounded-xl transition-all uppercase tracking-widest"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#packages" className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#938BF1] transition-all">Packages</Link>
            <Link href="/#schemes" className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#938BF1] transition-all">Govt Schemes</Link>
            <Link href="/#news" className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#938BF1] transition-all">News</Link>
            <Link href="/about-us" className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#938BF1] transition-all">About</Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#938BF1] transition-all">Blog</Link>
          </div>

          {/* RIGHT: Theme & CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center hover:scale-105 transition-all"
            >
              {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-all"
            >
              Free Consultation
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#060B1A] animate-in slide-in-from-top-5 duration-300">
            <div className="px-6 py-8 flex flex-col gap-2">
              {['Services', 'Packages', 'Schemes', 'News', 'About'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'About' ? '/about-us' : item === 'Services' ? '/contact-us' : `/#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-4 rounded-xl text-lg font-bold text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all border-b border-slate-50 dark:border-white/5 last:border-0"
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                className="mt-6 w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl"
              >
                Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}