'use client';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Phone Button */}
      <a href="tel:+919876543210" className="w-12 h-12 bg-white dark:bg-slate-800 text-indigo-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border border-slate-100 dark:border-white/10">
        <Phone size={20} />
      </a>
      {/* WhatsApp Button */}
      <a href="https://wa.me/919876543210" target="_blank" className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all animate-bounce">
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
}