// 'use client';

// import { Briefcase, TrendingUp, ArrowRight } from 'lucide-react';

// export function InvestorConnect() {
//   return (
//     /* 
//        FIX: Background matching exactly for both modes.
//        Light: !bg-white | Dark: !bg-[#02040A]
//     */
//     <section
//       id="investors"
//       className="relative pt-24 pb-40 !bg-white dark:!bg-[#02040A] overflow-hidden transition-colors duration-500 scroll-mt-24"
//     >

//       {/* Background Subtle Glows */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/[0.03] dark:bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

//       <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">

//         {/* Header Section */}
//         <div className="mb-24">
//           <div className="inline-flex px-4 py-2 !bg-slate-100 dark:!bg-white/5 border !border-slate-200 dark:!border-white/10 rounded-full text-[10px] font-bold !text-indigo-700 dark:!text-[#938BF1] uppercase tracking-[0.25em] mb-10 backdrop-blur-sm">
//             Investor Connect
//           </div>

//           <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal !text-slate-950 dark:!text-white mb-10 leading-[1.05] tracking-tight font-serif max-w-6xl mx-auto transition-colors duration-500">
//             Where <span className="italic !text-[#B48A32] dark:!text-[#E4C37B]">Founders</span> Meet Capital
//           </h2>

//           <p className="!text-slate-600 dark:!text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto font-normal leading-relaxed">
//             Our matching platform connects vetted startups with our 200+ active investor network across India.
//           </p>
//         </div>

//         {/* Dual Cards Grid */}
//         <div className="relative flex flex-col lg:flex-row gap-10 items-stretch justify-center max-w-6xl mx-auto">

//           {/* Connector Line - Visibility fixed for both modes */}
//           <div className="hidden lg:flex absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none w-full px-20">
//             <div className="w-full h-[1px] !bg-slate-200 dark:!bg-white/[0.05] relative flex items-center justify-center">
//               <div className="w-4 h-4 rounded-full !bg-indigo-600 dark:!bg-[#938BF1] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
//             </div>
//           </div>

//           {/* Startup Card */}
//           <div className="flex-1 !bg-slate-50 dark:!bg-[#0B0D1A] border !border-slate-200 dark:!border-white/[0.03] rounded-[40px] p-10 lg:p-14 text-left relative z-10 transition-all duration-500 shadow-xl dark:shadow-none">
//             <div className="flex items-center gap-6 mb-12">
//               <div className="w-14 h-14 rounded-2xl !bg-indigo-50 dark:!bg-white/[0.03] border !border-indigo-100 dark:!border-white/5 flex items-center justify-center">
//                 <Briefcase className="!text-indigo-600 dark:!text-gray-400" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-2xl !text-slate-950 dark:!text-white font-serif italic">I'm a Startup</h3>
//                 <p className="text-[10px] font-bold !text-slate-400 dark:!text-gray-600 uppercase tracking-[0.2em] mt-1">Looking for Funding</p>
//               </div>
//             </div>

//             <div className="space-y-8">
//               <div className="space-y-3">
//                 <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Full Name</label>
//                 <input type="text" placeholder="Jane Doe" className="dark-light-input" />
//               </div>
//               <div className="space-y-3">
//                 <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Email Address</label>
//                 <input type="email" placeholder="jane@company.com" className="dark-light-input" />
//               </div>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Stage</label>
//                   <select className="dark-light-input appearance-none">
//                     <option>Select Stage</option>
//                   </select>
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Funding Need</label>
//                   <input type="text" placeholder="₹50L - ₹2Cr" className="dark-light-input" />
//                 </div>
//               </div>

//               <button className="w-full py-5 bg-indigo-600 dark:bg-[#938BF1] hover:bg-indigo-700 dark:hover:bg-[#8278E6] text-white dark:text-black font-bold rounded-2xl transition-all duration-300 mt-6 flex items-center justify-center gap-2">
//                 Join the Platform <ArrowRight size={18} />
//               </button>
//             </div>
//           </div>

//           {/* Investor Card */}
//           <div className="flex-1 !bg-slate-50 dark:!bg-[#0B0D1A] border !border-slate-200 dark:!border-white/[0.03] rounded-[40px] p-10 lg:p-14 text-left relative z-10 transition-all duration-500 shadow-xl dark:shadow-none">
//             <div className="flex items-center gap-6 mb-12">
//               <div className="w-14 h-14 rounded-2xl !bg-indigo-50 dark:!bg-white/[0.03] border !border-indigo-100 dark:!border-white/5 flex items-center justify-center">
//                 <TrendingUp className="!text-indigo-600 dark:!text-gray-400" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-2xl !text-slate-950 dark:!text-white font-serif italic">I'm an Investor</h3>
//                 <p className="text-[10px] font-bold !text-slate-400 dark:!text-gray-600 uppercase tracking-[0.2em] mt-1">Looking for Deals</p>
//               </div>
//             </div>

//             <div className="space-y-8">
//               <div className="space-y-3">
//                 <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Full Name</label>
//                 <input type="text" placeholder="John Smith" className="dark-light-input" />
//               </div>
//               <div className="space-y-3">
//                 <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Work Email</label>
//                 <input type="email" placeholder="john@vc-firm.com" className="dark-light-input" />
//               </div>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Ticket Size</label>
//                   <select className="dark-light-input appearance-none">
//                     <option>Select Size</option>
//                   </select>
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-[11px] font-bold !text-slate-500 dark:!text-gray-600 uppercase tracking-widest ml-1">Focus Sector</label>
//                   <input type="text" placeholder="SaaS, Fintech..." className="dark-light-input" />
//                 </div>
//               </div>

//               <button className="w-full py-5 bg-[#B48A32] dark:bg-[#E5C37B] hover:bg-[#a17a2a] dark:hover:bg-[#d4b46a] text-white dark:text-black font-bold rounded-2xl transition-all duration-300 mt-6 flex items-center justify-center gap-2">
//                 Join the Platform <ArrowRight size={18} />
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         .dark-light-input {
//           width: 100%;
//           background: #ffffff; 
//           border: 1px solid #e2e8f0; 
//           border-radius: 16px;
//           padding: 1.1rem 1.25rem;
//           color: #0f172a; 
//           font-size: 14px;
//           outline: none;
//           transition: all 0.3s;
//         }
//         :global(.dark) .dark-light-input {
//           background: #05070E;
//           border-color: rgba(255, 255, 255, 0.05);
//           color: white;
//         }
//         .dark-light-input:focus {
//           border-color: #6366f1;
//         }
//         .dark-light-input::placeholder {
//           color: #94a3b8;
//         }
//         :global(.dark) .dark-light-input::placeholder {
//           color: rgba(255, 255, 255, 0.1);
//         }
//       `}</style>
//     </section>
//   );
// }