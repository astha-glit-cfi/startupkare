'use client';

import { useState } from 'react';
import { X, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props { 
  isOpen: boolean; 
  onClose: () => void; 
}

export default function EligibilityModal({ isOpen, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', startupName: '', stage: '' });

  // IMPORTANT: Agar isOpen false hai toh modal render hi nahi hoga
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/eligibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => { onClose(); setSuccess(false); }, 3000);
      }
    } catch (err) { alert("Error saving data"); }
    finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Container */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0B0D1A] rounded-[40px] shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in duration-300 z-10">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-red-500 transition-colors"><X size={24} /></button>
        
        <div className="p-10">
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <h3 className="text-2xl font-bold dark:text-white font-serif">Check Your Eligibility</h3>
              <div className="space-y-4">
                <input required placeholder="Full Name" className="modal-inp" onChange={(e)=>setFormData({...formData, name:e.target.value})} />
                <input required placeholder="Startup Name" className="modal-inp" onChange={(e)=>setFormData({...formData, startupName:e.target.value})} />
                <select required className="modal-inp" onChange={(e)=>setFormData({...formData, stage:e.target.value})}>
                  <option value="">Select Stage</option>
                  <option value="Idea">Idea</option>
                  <option value="MVP">MVP</option>
                  <option value="Scaling">Scaling</option>
                </select>
                <input required type="email" placeholder="Email" className="modal-inp" onChange={(e)=>setFormData({...formData, email:e.target.value})} />
                <input required type="tel" placeholder="Phone" className="modal-inp" onChange={(e)=>setFormData({...formData, phone:e.target.value})} />
              </div>
              <button type="submit" disabled={loading} className="w-full py-5 bg-[#938BF1] text-black font-bold rounded-2xl flex items-center justify-center gap-2">
                {loading ? <Loader2 className="animate-spin" /> : <>Send Request <ArrowRight size={18}/></>}
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <CheckCircle2 size={60} className="text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold dark:text-white">Request Sent!</h3>
              <p className="text-slate-500 mt-4">We will call you in 15 minutes.</p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`.modal-inp { width: 100%; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1rem 1.25rem; color: #0f172a; outline: none; } :global(.dark) .modal-inp { background: #030617; border-color: rgba(255,255,255,0.05); color: white; }`}</style>
    </div>
  );
}