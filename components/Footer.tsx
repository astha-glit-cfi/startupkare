'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, FileText, MessageCircle} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/startupkare',
      bg: 'bg-[#0077b5]',
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
  <rect width="4" height="12" x="2" y="9"></rect>
  <circle cx="4" cy="4" r="2"></circle>
</svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/startupkare',
      bg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      icon: (
       <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="20" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919876543210',
      bg: 'bg-[#25d366]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.893 11.891-2.011 0-3.98-.509-5.719-1.474l-6.274 1.645zm6.495-3.415c1.554.921 3.197 1.408 4.896 1.408 5.403 0 9.8-4.403 9.8-9.805 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.313-2.872-6.93-2.872-5.405 0-9.807 4.403-9.807 9.805 0 1.83.511 3.614 1.478 5.19l-.101-.175-1.103 4.026 4.123-1.081-.285-.159zm10.518-7.391c-.287-.144-1.696-.838-1.958-.934-.263-.096-.454-.144-.645.144-.191.287-.741.934-.908 1.124-.167.191-.335.215-.622.071-.287-.144-1.21-.446-2.305-1.424-.853-.761-1.428-1.7-1.595-1.987-.167-.287-.018-.442.126-.584.13-.127.287-.335.43-.502.144-.167.191-.287.287-.478.096-.191.048-.359-.024-.502-.072-.144-.645-1.554-.885-2.128-.234-.569-.47-.491-.645-.491-.167 0-.359-.024-.55-.024s-.502.072-.765.359c-.263.287-1.004.982-1.004 2.396 0 1.415 1.028 2.783 1.171 2.975.144.191 2.023 3.088 4.901 4.311.685.291 1.22.464 1.637.597.687.218 1.312.187 1.807.114.551-.081 1.696-.694 1.935-1.364.24-.67.24-1.244.167-1.364-.072-.12-.263-.191-.55-.335z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative !bg-white dark:!bg-[#02040A] pt-24 pb-12 border-t !border-slate-100 dark:!border-white/5 overflow-hidden transition-colors duration-500">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 1. Brand */}
          <div className="space-y-8">
            <h3 className="!text-slate-950 dark:!text-white font-bold text-2xl font-serif italic text-[#E4C37B]">Startup Kare</h3>
            <p className="!text-slate-600 dark:!text-gray-400 text-sm leading-relaxed max-w-xs transition-colors">
              India's most trusted startup partner. From incorporation to IPO.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-10 h-10 ${social.bg} rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Expertise */}
          <div>
            <h4 className="!text-slate-950 dark:!text-white font-bold text-sm uppercase tracking-widest mb-8">Expertise</h4>
            <ul className="space-y-4">
              {['Business Consulting', 'Funding & Investors', 'Government Schemes', 'Legal Compliance'].map((link) => (
                <li key={link}><Link href={`/#${link.toLowerCase().replace(/ /g, '-')}`} className="!text-slate-500 dark:!text-gray-400 hover:text-indigo-600 dark:hover:text-[#938BF1] text-sm transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* 3. Our Presence */}
          <div>
            <h4 className="!text-slate-950 dark:!text-white font-bold text-sm uppercase tracking-widest mb-8">Our Presence</h4>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <MapPin size={18} className="text-indigo-600 dark:text-[#938BF1] shrink-0" />
                <div className="text-sm">
                  <p className="font-bold !text-slate-900 dark:!text-white">Corporate HQ</p>
                  <p className="!text-slate-500 dark:!text-gray-400">JLN Marg, Jaipur, Rajasthan</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-indigo-600 dark:text-[#938BF1] shrink-0" />
                <div className="text-sm">
                  <p className="font-bold !text-slate-900 dark:!text-white">Regional Hubs</p>
                  <p className="!text-slate-500 dark:!text-gray-400">BKC Mumbai · Koramangala Bengaluru</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h4 className="!text-slate-950 dark:!text-white font-bold text-sm uppercase tracking-widest mb-8 text-left">Reach Out</h4>
            <ul className="space-y-5">
              {/* FIXED: Added mailto link */}
              <li className="flex items-center gap-3 !text-slate-500 dark:!text-gray-400 text-sm group">
                <Mail size={16} className="text-indigo-600" />
                <a href="mailto:hello@startupkare.com" className="hover:text-indigo-600 dark:hover:text-[#938BF1] transition-colors">hello@startupkare.com</a>
              </li>
              {/* FIXED: Added tel link */}
              <li className="flex items-center gap-3 !text-slate-500 dark:!text-gray-400 text-sm group">
                <Phone size={16} className="text-indigo-600" />
                <a href="tel:+919876543210" className="hover:text-indigo-600 dark:hover:text-[#938BF1] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="px-4 py-2 bg-indigo-50 dark:bg-white/5 rounded-xl border border-indigo-100 dark:border-white/10 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">24/7 Priority Support</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mt-12 py-10 border-t !border-slate-200 dark:!border-white/10">
          <div className="flex flex-wrap justify-between items-center gap-10">
            <div className="flex flex-wrap gap-6">
               <div className="flex flex-col gap-2">
                 <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">Corporate Identity</span>
                 <div className="px-5 py-2.5 border-2 border-slate-300 dark:border-indigo-400/40 rounded-xl bg-slate-50 dark:bg-indigo-500/10 shadow-sm transition-colors">
                    <span className="text-[11px] font-bold !text-slate-900 dark:!text-white uppercase font-mono tracking-tight">CIN: U74999RJ2024PTC123456</span>
                 </div>
               </div>
               <div className="flex flex-col gap-2">
                 <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">Tax Registration</span>
                 <div className="px-5 py-2.5 border-2 border-slate-300 dark:border-indigo-400/40 rounded-xl bg-slate-50 dark:bg-indigo-500/10 shadow-sm transition-colors">
                    <span className="text-[11px] font-bold !text-slate-900 dark:!text-white uppercase font-mono tracking-tight">GST: 08AAAAA0000A1Z5</span>
                 </div>
               </div>
            </div>
            
            <div className="flex items-center gap-6 p-5 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all group hover:border-indigo-500/30">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/1/10/Startup_India_Logo.png" 
                 className="h-10 w-auto object-contain brightness-0 dark:brightness-200 transition-all group-hover:brightness-100" 
                 alt="Startup India" 
                 referrerPolicy="no-referrer"
               />
               <div className="h-8 w-px bg-slate-200 dark:bg-white/10"></div>
               <div className="flex flex-col">
                 <p className="text-[11px] font-black !text-slate-900 dark:!text-[#E4C37B] uppercase tracking-tighter">Recognized Startup</p>
                 <p className="text-[9px] font-bold text-slate-500 dark:text-gray-400 uppercase">By DPIIT, Govt. of India</p>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t !border-slate-100 dark:!border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="!text-slate-400 dark:!text-gray-600 text-xs font-medium">© {new Date().getFullYear()} Startup Kare. All rights reserved.</p>
          <div className="flex flex-wrap gap-8 !text-slate-500 dark:!text-gray-500 text-[10px] font-black uppercase tracking-[0.15em]">
            <Link href="/privacy-policy" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}