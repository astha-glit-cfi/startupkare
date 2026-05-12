'use client';

import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ProcessSection } from '@/components/ProcessSection';
import { PartnerMarquee } from '@/components/PartnerMarquee';
import { ServicesCards } from '@/components/ServicesCards';
import { StrategicJourney } from '@/components/StrategicJourney';
// import SchemeSection from '@/components/SchemeSection'; // FIX: Space hata diya
import { NewsSection } from '@/components/NewsSection';
import { SuccessStories } from '@/components/SuccessStories';
import { CommunitySection } from '@/components/CommunitySection';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';
import RoadmapPopup from '@/components/RoadmapPopup';

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#02040A] min-h-screen transition-colors duration-500">
      <Navbar />
      <Hero />
      <ProcessSection />
      <PartnerMarquee />
      <ServicesCards />
      <PricingSection />
      <StrategicJourney />
      /
      <SuccessStories />
      <NewsSection />
      <CommunitySection />
      <Footer />
      <RoadmapPopup />
    </main>
  );
}