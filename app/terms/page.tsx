'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronLeft, Scale, ShieldAlert, FileText, Gavel, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <div className="pt-40 pb-24 max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-12 hover:gap-3 transition-all">
          <ChevronLeft size={20} /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="!text-slate-950 dark:!text-white text-3xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] mb-8 tracking-tight font-serif transition-colors duration-500">
            Terms & <span className="italic text-[#B48A32]">Conditions</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 font-medium flex items-center gap-2">
            <FileText size={16} /> Last Updated: March 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
          
          <section>
            <p className="text-lg">
              These terms and conditions outline the rules and regulations for the use of <strong>Startup Kare</strong>, a brand owned and operated by <strong>Startup Kare Private Limited</strong>. By accessing this website, you agree to comply with these terms.
            </p>
          </section>

          {/* Section 1 & 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Scale size={20} className="text-indigo-600" /> 1. Terms of Use
              </h2>
              <p className="text-sm">Startup Kare provides consultancy services including business planning, strategy, and financial advisory. You must be at least 18 years of age to use our services.</p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Gavel size={20} className="text-indigo-600" /> 2. Intellectual Property
              </h2>
              <p className="text-sm">All content, trademarks, and materials on this website are owned by Startup Kare. You are granted limited access only for personal use.</p>
            </div>
          </div>

          {/* Section 3: Restrictions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Restrictions</h2>
            <div className="bg-rose-50 dark:bg-rose-500/5 border border-rose-100 dark:border-rose-500/20 p-6 rounded-2xl">
              <ul className="list-disc pl-6 space-y-2 text-rose-900 dark:text-rose-200 text-sm font-medium">
                <li>Do not publish or copy website content without permission</li>
                <li>Do not sell or commercialize website materials</li>
                <li>Do not misuse the website in any harmful way</li>
                <li>Do not interfere with website access or performance</li>
              </ul>
            </div>
          </section>

          {/* Section 4 to 9 (Compact) */}
          <section className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">4. User Content</h3>
              <p>By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use and distribute your content.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">6. No Warranties</h3>
              <p>This website is provided &quot;as is&quot; without any warranties. We do not guarantee accuracy or availability.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">7. Limitation of Liability</h3>
              <p>Startup Kare shall not be held liable for any damages arising from the use or inability to use this website.</p>
            </div>
          </section>

          {/* Section 10: User Info */}
          <section className="p-8 bg-indigo-50 dark:bg-indigo-500/5 rounded-3xl border border-indigo-100 dark:border-white/5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Use of User Information</h2>
            <p>By providing your information, you consent to its use for communication, service delivery, support, marketing updates, and legal compliance. You may withdraw consent via email.</p>
          </section>

          {/* Section 12: Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert size={24} className="text-indigo-600" /> 12. Governing Law
            </h2>
            <p>These terms are governed by the laws of <strong>Jaipur, Rajasthan, India</strong>. Any disputes shall be subject to the jurisdiction of Jaipur courts.</p>
          </section>

          {/* Contact CTA */}
          <section className="pt-10 border-t border-slate-100 dark:border-white/5 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Questions about Terms?</h2>
            <div className="inline-flex flex-col md:flex-row items-center gap-6 p-8 rounded-[40px] bg-slate-900 text-white shadow-2xl">
               <div className="flex items-center gap-3">
                  <Mail className="text-[#E4C37B]" />
                  <span className="font-bold">info@startupkare.net</span>
               </div>
               <div className="hidden md:block h-8 w-px bg-white/10"></div>
               <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Startup Kare Private Limited</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}