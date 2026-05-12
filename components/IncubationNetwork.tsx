'use client';

import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { IndiaMap } from './IndiaMap';

const partnerLogos = [
  { name: 'AIC', logo: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg' },
  { name: 'GNITS', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'ACIC', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'FinAGG', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
  { name: 'VEL TECH', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' },
  { name: 'Marwari Catalysts', logo: 'https://cdn.worldvectorlogo.com/logos/meta-7.svg' },
  { name: 'Bhopal Angels', logo: 'https://cdn.worldvectorlogo.com/logos/apple-11.svg' },
  { name: 'SREI', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
  { name: 'PIERC', logo: 'https://cdn.worldvectorlogo.com/logos/spotify-1.svg' },
];

function PartnerLogo({ partner }: { partner: typeof partnerLogos[0] }) {
  const [error, setError] = useState(false);

  return (
    <div className="group relative flex items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 aspect-square cursor-pointer overflow-hidden backdrop-blur-sm">
      {!error ? (
        <img 
          src={partner.logo} 
          alt={partner.name}
          onError={() => setError(true)}
          className="w-full h-full object-contain p-2 grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 scale-90 group-hover:scale-100"
        />
      ) : (
        <div className="w-full h-full rounded-lg bg-white/5 flex items-center justify-center text-white font-bold text-xs uppercase tracking-tighter">
          {partner.name.substring(0, 2)}
        </div>
      )}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#0B1D3A] text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-lg border border-white/10">
        {partner.name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0B1D3A] rotate-45 border-r border-b border-white/10"></div>
      </div>
    </div>
  );
}

export function IncubationNetwork() {
  return (
    <section className="py-24 bg-[#060B1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1 flex justify-center p-8 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
            <IndiaMap />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="section-label">India's Largest Network</div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              We have the
              <span className="block text-indigo-400">Strongest network</span>
              of Incubation centres in India
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
              Providing guidance, resources, and mentorship across the nation to turn your vision into a scalable reality. Access premium state-of-the-art facilities in every major hub.
            </p>

            <a href="/contact" className="btn-primary mb-12">
              Share Your Business Plan
              <ArrowRight size={18} />
            </a>

            {/* Partner logos */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em] mb-5">
                Trusted Network Partners
              </p>
              <div className="grid grid-cols-5 gap-3">
                {partnerLogos.map((partner, idx) => (
                  <PartnerLogo key={idx} partner={partner} />
                ))}
                <div className="flex items-center justify-center aspect-square rounded-xl border-2 border-dashed border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <span className="text-gray-500 group-hover:text-indigo-400 text-[11px] font-bold text-center leading-snug transition-colors">
                    and<br />100+<br />more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
