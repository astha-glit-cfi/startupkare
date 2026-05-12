'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, Loader2, Calendar, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        const found = data.find((item: any) => item.id === params.id);
        setArticle(found);
      } catch (err) {
        console.error("Load error");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [params.id]);

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-[#02040A]">
      <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
      <p className="text-slate-400 font-medium">Fetching Article...</p>
    </div>
  );

  if (!article) return (
    <div className="h-screen flex items-center justify-center dark:text-white">
      Article Not Found. <button onClick={() => router.push('/')} className="ml-2 text-indigo-600 underline">Go Back</button>
    </div>
  );

  return (
    <main className="bg-white dark:bg-[#02040A] min-h-screen transition-colors">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm mb-12 transition-all">
          <ChevronLeft size={20} /> Back to News
        </button>

        <div className="flex items-center gap-4 text-rose-500 font-bold text-xs uppercase tracking-widest mb-6">
          <Calendar size={14} /> {article.time} • STARTUP KARE LIVE
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-10 leading-tight">
          {article.title}
        </h1>

        <div className="rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-slate-100 dark:border-white/5">
          <img src={article.image} className="w-full h-auto object-cover" alt="" referrerPolicy="no-referrer" />
        </div>

        {/* Content Render (Ab ye 100% Load hoga) */}
        <div className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed whitespace-pre-wrap font-sans">
          {article.body}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 dark:border-white/5 text-center">
           <p className="text-slate-400 text-sm italic">You are reading a live intelligence feed via StartupKare.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}