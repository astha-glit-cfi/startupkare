'use client';

import { Settings, BarChart2, FileText, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function ERPModule() {
  const [activeTab, setActiveTab] = useState('compliance');

  return (
    <section className="py-24 bg-white scroll-mt-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit"><Settings size={14} /> Startup ERP System</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D3A] mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Total Operational <span className="text-[#FF6B35]">Control</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your entire backend—from GST compliance to HR operations—all in one secure, ISO-certified dashboard.
          </p>
        </div>

        <div className="card-premium border-0 shadow-2xl overflow-hidden bg-white">
          <div className="flex flex-col md:flex-row border-b border-gray-100">
            {['Compliance & GST', 'Financial Analytics', 'Document Vault'].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                className={`flex-1 py-5 text-sm font-bold uppercase tracking-widest transition-colors ${
                  activeTab === tab.toLowerCase().split(' ')[0]
                    ? 'bg-[#0B1D3A] text-white'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-10 md:p-16 bg-gray-50 flex flex-col items-center justify-center text-center min-h-[400px]">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 mb-6 text-[#0B1D3A]">
               <BarChart2 size={32} />
             </div>
             <h3 className="text-2xl font-bold text-[#0B1D3A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Enterprise Dashboard Preview</h3>
             <p className="text-gray-500 max-w-md mb-8">Access real-time compliance metrics, generate automated GST reports, and store legal documents securely.</p>
             <button className="btn-outline bg-white">
               Request Demo
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
