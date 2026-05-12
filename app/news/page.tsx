'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NewsSection } from '@/components/NewsSection';

// Ye function default export hai, isse build error khatam ho jayegi
export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A]">
      <Navbar />
      
      {/* pt-32 isliye taaki content navbar ke niche na dabe */}
      <div className="pt-32 pb-20">
        <NewsSection />
      </div>

      <Footer />
    </main>
  );
}