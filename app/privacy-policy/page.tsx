'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronLeft, ShieldCheck, Lock, Eye, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-12 hover:gap-3 transition-all">
          <ChevronLeft size={20} /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="!text-slate-950 dark:!text-white text-3xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] mb-8 tracking-tight font-serif transition-colors duration-500">
            Privacy <span className="italic text-[#B48A32]">Policy</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 font-medium">
            Last Updated: March 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
          
          <section>
            <p>
              This Privacy Policy governs how <strong>https://startupkare.com</strong> collects, uses, maintains, and discloses information collected from users (&quot;User&quot;). This policy applies to all products and services offered by Startup Kare Private Limited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Lock className="text-indigo-600" size={24} /> 1. Personal Identification Information
            </h2>
            <p>We may collect personal identification information in various ways, including when users visit our site, register, place an order, or interact with our services.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Mailing address, business details</li>
              <li>Date of birth or incorporation</li>
            </ul>
            <p className="italic text-sm text-slate-500">Users may visit our site anonymously. Providing personal data is optional, but some features may not function properly without it.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Eye className="text-indigo-600" size={24} /> 2. Non-Personal Identification Information
            </h2>
            <p>We may collect non-personal information such as browser type, device details, operating system, and internet service provider whenever a User interacts with our Site.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Cookie className="text-indigo-600" size={24} /> 3. Cookies
            </h2>
            <p>Our website may use cookies to enhance user experience. Users can choose to disable cookies in their browser settings, but some features may not work properly.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <ShieldCheck className="text-indigo-600" size={24} /> 4. How We Use Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                <p className="m-0 text-sm">To improve customer service & personalize experience</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                <p className="m-0 text-sm">To process payments & send service updates</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Data Protection</h2>
            <p>We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure. All data exchange is secured via SSL encryption.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Sharing Your Information</h2>
            <p>We may share your information with trusted third-party service providers for business operations such as communication, marketing, or service delivery.</p>
            <p>In case of merger or acquisition, user data may be transferred with prior notice.</p>
          </section>

          <section className="space-y-4 pt-10 border-t border-slate-100 dark:border-white/5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please reach out to us:</p>
            <div className="p-8 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20">
               <p className="font-bold mb-1">Email: info@startupkare.net</p>
               <p className="font-bold opacity-80">Company: Startup Kare Private Limited</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}