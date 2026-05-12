'use client';

import { Trophy } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  icon: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Tech Startup Success',
    description: 'From idea to ₹5Cr Series A in 18 months using our platform',
    metrics: [
      { label: 'Revenue Growth', value: '300%' },
      { label: 'Team Size', value: '25+' },
      { label: 'Funding Raised', value: '₹5Cr' },
    ],
    icon: '🚀',
  },
  {
    title: 'EdTech Revolution',
    description: 'Scaled to 100K students using government schemes and investor network',
    metrics: [
      { label: 'Students', value: '100K+' },
      { label: 'Cities', value: '15' },
      { label: 'Impact', value: '₹10Cr' },
    ],
    icon: '📚',
  },
  {
    title: 'FinTech Success Story',
    description: 'Achieved profitability within 14 months with our ERP and compliance tools',
    metrics: [
      { label: 'Transactions', value: '₹50Cr+' },
      { label: 'Users', value: '50K+' },
      { label: 'MRR', value: '₹50L+' },
    ],
    icon: '💰',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="section-label mx-auto w-fit"><Trophy size={14} className="mr-2" /> Proven Results</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D3A] mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Case <span className="text-[#FF6B35]">Studies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Detailed analysis of how we've helped Indian startups achieve market dominance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-10">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="case-study-container group">
              <div className="mobile-card relative p-8 pt-12 bg-white border-[10px] border-[#0B1D3A] rounded-[3rem] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-[#FF6B35] group-hover:shadow-orange-500/10 min-h-[520px] flex flex-col overflow-hidden">
                
                {/* Mobile Notch/Header */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-100 rounded-full flex items-center justify-center gap-1.5 px-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-6 h-1 rounded-full bg-gray-300"></div>
                </div>

                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {study.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0B1D3A] mb-3 tracking-tight group-hover:text-[#FF6B35]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  {study.description}
                </p>

                <div className="flex flex-col gap-4 mb-8 flex-grow">
                  {study.metrics.map((metric, midx) => (
                    <div key={midx} className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{metric.label}</span>
                      <span className="text-sm font-extrabold text-[#0B1D3A]">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-widest border-2 border-gray-100 text-[#0B1D3A] group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] group-hover:text-white transition-all shadow-sm">
                  Full Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .case-study-container {
          perspective: 1500px;
        }
        
        .mobile-card {
          transform: rotateX(5deg) rotateY(-15deg);
          transform-style: preserve-3d;
        }
        
        .case-study-container:hover .mobile-card {
          transform: rotateX(0deg) rotateY(0deg) scale(1.05);
        }

        @media (max-width: 768px) {
          .mobile-card {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
