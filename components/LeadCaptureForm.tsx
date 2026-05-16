'use client';

import { Building2, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react';

export function LeadCaptureForm() {
  return (
    <section
      id="contact"
      className="relative pt-24 pb-32 bg-[#02040A] overflow-hidden scroll-mt-24 transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/[0.03] blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-24">
          <h2 className="text-white text-6xl md:text-8xl font-serif leading-tight mb-8 tracking-tight">
            Where <span className="italic text-[#E5C37B]">Founders</span> Meet
            <br />
            Capital
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
          {/* Middle Connector */}
          <div className="hidden lg:flex absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none w-full px-20">
            <div className="w-full h-[1px] bg-white/[0.05] relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#938BF1] shadow-[0_0_15px_#938BF1]"></div>
            </div>
          </div>

          {/* Startup Card */}
          <div className="group p-10 lg:p-14 bg-[#0B0D1A] border border-white/[0.05] rounded-[40px] shadow-2xl">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                <Building2 className="text-gray-400" size={24} />
              </div>

              <div>
                <h3 className="text-3xl text-white font-serif italic">
                  I'm a Startup
                </h3>
                <p className="text-xs uppercase tracking-[4px] text-gray-500 mt-1">
                  Looking for funding
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Name */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="dark-input-field"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="dark-input-field"
                />
              </div>

              {/* Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stage */}
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Stage
                  </label>

                  <div className="relative">
                    <select
                      defaultValue=""
                      className="dark-input-field appearance-none !pr-10 cursor-pointer"
                    >
                      <option value="" disabled hidden>
                        Select Stage
                      </option>

                      <option value="ideation">Ideation</option>
                      <option value="mvp">MVP / Beta</option>
                      <option value="traction">Early Traction</option>
                      <option value="scaling">Scaling</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Funding */}
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Funding Need
                  </label>

                  <input
                    type="text"
                    placeholder="₹50L - ₹2Cr"
                    className="dark-input-field"
                  />
                </div>
              </div>

              {/* Button */}
              <button className="w-full py-5 bg-[#938BF1] hover:bg-[#8278E6] text-black font-bold rounded-2xl transition-all duration-300 shadow-lg active:scale-95">
                Join the Platform
                <ArrowRight size={18} className="inline ml-2" />
              </button>
            </div>
          </div>

          {/* Investor Card */}
          <div className="group p-10 lg:p-14 bg-[#0B0D1A] border border-white/[0.05] rounded-[40px] shadow-2xl">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                <TrendingUp className="text-gray-400" size={24} />
              </div>

              <div>
                <h3 className="text-3xl text-white font-serif italic">
                  I'm an Investor
                </h3>

                <p className="text-xs uppercase tracking-[4px] text-gray-500 mt-1">
                  Looking for deals
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Name */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Smith"
                  className="dark-input-field"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Work Email
                </label>

                <input
                  type="email"
                  placeholder="john@vc-firm.com"
                  className="dark-input-field"
                />
              </div>

              {/* Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ticket Size */}
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Ticket Size
                  </label>

                  <div className="relative">
                    <select
                      defaultValue=""
                      className="dark-input-field appearance-none !pr-10 cursor-pointer"
                    >
                      <option value="" disabled hidden>
                        Select Size
                      </option>

                      <option value="10-50">₹10L - ₹50L</option>
                      <option value="50-200">₹50L - ₹2Cr</option>
                      <option value="200-plus">₹2Cr+</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Sector */}
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Focus Sector
                  </label>

                  <input
                    type="text"
                    placeholder="SaaS, Fintech..."
                    className="dark-input-field"
                  />
                </div>
              </div>

              {/* Button */}
              <button className="w-full py-5 bg-[#E5C37B] hover:bg-[#d4b46a] text-black font-bold rounded-2xl transition-all duration-300 shadow-lg active:scale-95">
                Join the Platform
                <ArrowRight size={18} className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dark-input-field {
          width: 100%;
          background: #05070e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem 1.2rem;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        .dark-input-field:focus {
          border-color: rgba(147, 139, 241, 0.5);
          background: #070914;
          box-shadow: 0 0 0 3px rgba(147, 139, 241, 0.08);
        }

        .dark-input-field::placeholder {
          color: #4b5563;
        }

        select.dark-input-field {
          color: white;
        }

        select option {
          background: #0b0d1a;
          color: white;
        }
      `}</style>
    </section>
  );
}     