'use client';

import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ProcessSection } from '@/components/ProcessSection';
import { PartnerMarquee } from '@/components/PartnerMarquee';
import { ServicesCards } from '@/components/ServicesCards';
import { StrategicJourney } from '@/components/StrategicJourney';
import { CaseStudies } from '@/components/CaseStudies'; 
import { NewsSection } from '@/components/NewsSection';
import { SuccessStories } from '@/components/SuccessStories';
import { CommunitySection } from '@/components/CommunitySection';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';
import RoadmapPopup from '@/components/RoadmapPopup';
import { GoogleReviews } from '@/components/GoogleReviews';
import { MidPageCTA } from '@/components/MidPageCTA'; 
import { FloatingContact } from '@/components/FloatingContact';

// Naye Authority aur Industry components import kiye
import { IndustryExpertise } from '@/components/IndustryExpertise';
import { KnowledgeHub } from '@/components/KnowledgeHub';
import SchemeSection from '@/components/SchemeSection';
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500 overflow-x-hidden relative">
      <Navbar />

      {/* 1. HERO: Main Value Proposition */}
      <Hero />

      {/* 2. TRUST BAR: Brand associations & Logos */}
      <PartnerMarquee />

      {/* 3. PROCESS: Roadmap logic */}
      <ProcessSection />

      {/* 4. SERVICES: Top 6 Core Offerings */}
      <ServicesCards />

      {/* 5. INDUSTRY POSITIONING: Specialized Sector focus (Point 8) */}
      <IndustryExpertise />

      {/* 6. JOURNEY: Growth visual impact */}
      <StrategicJourney />

      {/* 7. CASE STUDIES: Results & Data-backed Success */}
      <CaseStudies />

      {/* 8. STRATEGIC CTA: Mid-page conversion */}
      <MidPageCTA />

      {/* 9. PRICING: Transparency & Tiers */}
      <PricingSection />

      {/* 10. SOCIAL PROOF: Reviews & Testimonials */}
      <div className="bg-slate-50/30 dark:bg-white/[0.01] border-y border-slate-100 dark:border-white/5">
        <GoogleReviews />
        <SuccessStories />
      </div>

      {/* 11. AUTHORITY BUILDING: Expert Playbooks & Guides (Point 7) */}
      <KnowledgeHub />

      <SchemeSection />

      {/* 12. NEWS: Daily Startup Intelligence */}
      <NewsSection />

      {/* 13. FINAL CTA: Closing slot */}
      <CommunitySection />

      <Footer />

      {/* --- FLOATING & POPUP ELEMENTS --- */}
      <FloatingContact />
      <RoadmapPopup />
      
    </main>
  );
}