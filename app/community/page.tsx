'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CommunitySection } from '@/components/CommunitySection';

export default function Community() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Community</h1>
          <p className="text-xl text-gray-400">
            Connect with 5000+ startup founders, share experiences, and grow together
          </p>
        </div>
        <CommunitySection />
      </section>
      <Footer />
    </main>
  );
}
