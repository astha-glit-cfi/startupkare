'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronLeft, RefreshCcw, AlertCircle, Clock, CreditCard, Scale, Mail, Info } from 'lucide-react';
import Link from 'next/link';

export default function RefundPolicy() {
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
            Refund & <span className="italic text-[#B48A32]">Cancellation</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 font-medium flex items-center gap-2">
            <Clock size={16} /> Last Updated: March 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
          
          <section className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20">
            <p className="m-0 text-blue-900 dark:text-blue-200 text-sm md:text-base">
              This Refund & Cancellation Policy governs the terms under which refunds, cancellations, or service credits may be issued for services offered by <strong>Startup Kare</strong>, operated by <strong>Startup Kare Private Limited</strong>.
            </p>
          </section>

          {/* Section 1: Scope */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-2">
              <Info size={24} className="text-indigo-600" /> 1. Scope & Applicability
            </h2>
            <p>By making a payment, you agree to this policy along with our Terms & Privacy Policy. This applies to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
              {['Startup Registration', 'Legal & Tax Docs', 'Digital & Tech Services', 'Business Consultancy'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm bg-slate-50 dark:bg-white/5 p-3 rounded-lg border border-slate-100 dark:border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 & 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <RefreshCcw size={20} className="text-indigo-600" /> 2. Service Commencement
              </h2>
              <p className="text-sm">A service is considered started once work or consultation begins, documents are prepared, or government filings are initiated. Once started, refund eligibility becomes limited.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CreditCard size={20} className="text-indigo-600" /> 3. Refund Eligibility
              </h2>
              <p className="text-sm">Refunds are considered for delayed initiation, major unresolved deficiencies, duplicate payments, or internal delivery limitations.</p>
            </div>
          </div>

          {/* Section 4: Non-Refundable - IMPORTANT BOX */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Non-Refundable Cases</h2>
            <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 p-8 rounded-3xl">
              <ul className="list-disc pl-6 space-y-3 text-rose-900 dark:text-rose-200 text-sm">
                <li>Incorrect information provided by the client</li>
                <li>Government rejection or external delays</li>
                <li>Change of mind after service initiation</li>
                <li>Partially or fully completed services</li>
                <li>Digital products once delivered</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Deductions - HIGHLIGHT */}
          <section className="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100 dark:border-indigo-900/20">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6. Refund Amount & Deductions</h2>
            <p className="text-sm mb-4">Approved refunds include deductions for work completed, govt fees, and administrative charges (₹1000 or 10%).</p>
            <div className="text-center p-4 bg-white dark:bg-[#02040A] rounded-xl border-2 border-indigo-600 font-bold text-indigo-600 dark:text-indigo-400">
              Refunds (except technical errors) are capped at 30% of total service fee.
            </div>
          </section>

          {/* Section 7: Process */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Refund Process</h2>
            <div className="space-y-4">
              <p>1. Email <span className="font-bold text-indigo-600">info@startupkare.net</span> with invoice details.</p>
              <p>2. Review takes 10–14 business days.</p>
              <p>3. Processed within 21–35 working days upon approval.</p>
            </div>
          </section>

          {/* Section 10: Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Scale size={24} className="text-indigo-600" /> 10. Dispute Resolution
            </h2>
            <p>All disputes are subject to the exclusive jurisdiction of the courts in <strong>Jaipur, Rajasthan, India</strong>.</p>
          </section>

          {/* Contact Support */}
          <section className="pt-10 border-t border-slate-100 dark:border-white/5">
            <div className="p-10 rounded-[40px] bg-slate-950 text-white text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl rounded-full"></div>
               <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Contact Support</h2>
               <div className="space-y-2 relative z-10">
                  <p className="flex items-center justify-center gap-2 font-medium">
                    <Mail className="text-[#E4C37B]" size={20} /> info@startupkare.net
                  </p>
                  <p className="text-slate-400 text-sm">Mon–Fri, 10:00 AM – 6:00 PM (IST)</p>
               </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}