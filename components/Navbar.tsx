'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal'; 

import { useTheme } from 'next-themes';

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Theme Logic: next-themes ka use karenge stable toggle ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted ? resolvedTheme === 'dark' : true;

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[100]">
      <nav className="bg-white dark:bg-[#060B1A] border-b border-gray-200 dark:border-white/10 transition-all">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-900 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-serif italic text-[#E4C37B]">
              Startup Kare
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {['Services', 'Packages', 'Schemes', 'Investors', 'News', 'About', 'Contact'].map((item) => (
              <Link key={item} href={item === 'About' ? '/about-us' : `/#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-indigo-600">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* TOGGLE BUTTON - Fixed for IP */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center"
            >
              {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            {/* CONSULTATION BUTTON */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* POPUP MODAL */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}