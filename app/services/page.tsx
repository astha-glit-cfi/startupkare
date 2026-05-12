'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServicesCards } from '@/components/ServicesCards';

export default function Services() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400">
            Complete toolkit for startup founders to validate, build, and scale their businesses
          </p>
        </div>
        <ServicesCards />
      </section>
      <Footer />
    </main>
  );
}
