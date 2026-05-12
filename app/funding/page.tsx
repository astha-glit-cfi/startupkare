'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
// import { InvestorConnect } from '@/components/InvestorConnect';

export default function Funding() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Investor Network</h1>
          <p className="text-xl text-gray-400">
            Connect with 500+ verified investors actively funding Indian startups
          </p>
        </div>
        {/* <InvestorConnect /> */}
      </section>
      <Footer />
    </main>
  );
}
