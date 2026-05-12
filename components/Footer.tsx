'use client';

import Link from 'next/link';

import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.9-2.7 3.8V24h-4V8z" />
        </svg>
      ),
    },

    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.32 4 20 5.68 20 7.75v8.5c0 2.07-1.68 3.75-3.75 3.75h-8.5C5.68 20 4 18.32 4 16.25v-8.5C4 5.68 5.68 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },

    {
      name: 'WhatsApp',
      href: 'https://wa.me/919876543210',
      icon: <MessageCircle size={18} />,
    },
  ];

  return (
    <footer className="relative !bg-white dark:!bg-[#02040A] pt-24 pb-12 border-t !border-slate-100 dark:!border-white/5 overflow-hidden transition-colors duration-500">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/[0.02] dark:bg-indigo-500/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              
              {/* <div className="w-10 h-10 rounded-xl bg-indigo-600 dark:bg-[#938BF1] flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div> */}

              <div>
                <h3 className="!text-slate-950 dark:!text-white font-bold text-xl font-serif">
                  <span className="italic text-[#E4C37B] font-serif">Startup Kare</span>
                </h3>

                {/* <p className="text-[9px] font-bold !text-slate-400 dark:!text-gray-500 tracking-[0.2em] mt-1 uppercase font-mono">
                  Apka Startup, Hamari Zimmedari
                </p> */}
              </div>
            </div>

            <p className="!text-slate-600 dark:!text-gray-400 text-sm leading-relaxed max-w-xs">
              India's most trusted startup partner — from incorporation and compliance to funding, growth, and IPO readiness.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border !border-slate-200 dark:!border-white/10 flex items-center justify-center !text-slate-900 dark:!text-gray-400 hover:!bg-indigo-600 hover:!text-white dark:hover:!bg-[#938BF1] dark:hover:!text-black transition-all !bg-slate-50 dark:!bg-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="!text-slate-950 dark:!text-white font-serif text-lg mb-8">
              Services
            </h4>

            <ul className="space-y-4">
              {[
                'Business Consulting',
                'Funding & Investors',
                'Government Schemes',
                'Packages',
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`/#${link.toLowerCase().replace(/ /g, '-')}`}
                    className="!text-slate-500 dark:!text-gray-400 hover:!text-indigo-600 dark:hover:!text-[#938BF1] text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="!text-slate-950 dark:!text-white font-serif text-lg mb-8">
              Resources
            </h4>

            <ul className="space-y-4">
              {['Startup News', 'About us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'About us' ? '/about-us' : '#'}
                    className="!text-slate-500 dark:!text-gray-400 hover:!text-indigo-600 dark:hover:!text-[#938BF1] text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="!text-slate-950 dark:!text-white font-serif text-lg mb-8">
              Contact
            </h4>

            <ul className="space-y-5">
              
              <li className="flex items-center gap-3 !text-slate-500 dark:!text-gray-400 text-sm">
                <Mail
                  size={16}
                  className="!text-indigo-600 dark:!text-[#938BF1]"
                />

                <span>hello@startupkare.com</span>
              </li>

              <li className="flex items-center gap-3 !text-slate-500 dark:!text-gray-400 text-sm">
                <Phone
                  size={16}
                  className="!text-indigo-600 dark:!text-[#938BF1]"
                />

                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3 !text-slate-500 dark:!text-gray-400 text-sm">
                <MapPin
                  size={16}
                  className="!text-indigo-600 dark:!text-[#938BF1]"
                />

                <span>Jaipur · Mumbai · Bengaluru</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t !border-slate-100 dark:!border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="!text-slate-400 dark:!text-gray-600 text-xs">
            © {new Date().getFullYear()} StartupKare. All rights reserved.
          </p>

          <div className="flex items-center gap-8 !text-slate-400 dark:!text-gray-500 text-[11px] font-bold uppercase tracking-widest">
            
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>

          </div>
        </div>
      </div>
    </footer>
  );
}