'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, ChevronDown } from 'lucide-react';

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // FIX 1: Initial service value ko khali ('') rakha taaki placeholder dikhe
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '' 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) { alert("Error sending message"); }
    finally { setLoading(false); }
  };

  const inputStyle = "w-full bg-slate-50 dark:bg-[#0B0F1A] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-600 transition-all";

  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT: Contact Info (Same as before) */}
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl md:text-8xl font-serif font-medium !text-slate-950 dark:!text-white mb-8 leading-tight">
                  Let’s talk <br /> <span className="italic text-[#B48A32] dark:!text-[#E4C37B]">Business.</span>
                </h1>
                <p className="text-xl text-slate-500 dark:text-gray-400 max-w-md leading-relaxed">
                  Have a question or ready to scale your startup? Our team of experts is just a message away.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <Mail />, title: "Email us", detail: "hello@startupkare.com" },
                  { icon: <Phone />, title: "Call us", detail: "+91 98765 43210" },
                  { icon: <MapPin />, title: "Visit us", detail: "Jaipur · Mumbai · Bengaluru" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 dark:bg-white/5 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1 uppercase text-xs tracking-widest">{item.title}</h4>
                      <p className="text-lg text-slate-600 dark:text-gray-400 font-medium">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="bg-white dark:bg-[#060B1A] rounded-[48px] p-8 md:p-12 border border-slate-100 dark:border-white/5 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required placeholder="Full Name" className={inputStyle} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <input required type="email" placeholder="Email Address" className={inputStyle} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required type="tel" placeholder="Phone Number" className={inputStyle} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    
                    <div className="relative group">
                      <select 
                        required 
                        style={{ colorScheme: 'light dark' }}
                        /* FIX 2: selected hatakar yahan value={formData.service} dala */
                        value={formData.service}
                        className={`${inputStyle} appearance-none cursor-pointer pr-12`} 
                        onChange={e => setFormData({...formData, service: e.target.value})}
                      >
                        {/* selected attribute yahan se remove kar diya gaya hai */}
                        <option value="" disabled className="bg-white dark:bg-[#0B0F1A]">Select Service</option>
                        <option value="Business Consulting" className="bg-white dark:bg-[#0B0F1A]">Business Consulting</option>
                        <option value="Funding Support" className="bg-white dark:bg-[#0B0F1A]">Funding Support</option>
                        <option value="Legal & Compliance" className="bg-white dark:bg-[#0B0F1A]">Legal & Compliance</option>
                        <option value="Tech & IT Services" className="bg-white dark:bg-[#0B0F1A]">Tech & IT Services</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-indigo-600 transition-colors">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  <textarea required placeholder="Tell us about your startup needs..." className={inputStyle + " h-32 resize-none"} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>

                  <button type="submit" disabled={loading} className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/20 group">
                    {loading ? <Loader2 className="animate-spin" /> : <><Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>}
                  </button>
                </form>
              ) : (
                <div className="py-20 text-center space-y-6">
                  <CheckCircle size={80} className="text-green-500 mx-auto" />
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Message Sent!</h2>
                  <p className="text-slate-500 dark:text-gray-400">We’ve received your inquiry and will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-indigo-600 font-bold underline hover:text-indigo-700">Send another message</button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}