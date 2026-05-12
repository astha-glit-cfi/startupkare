'use client';

import { useState, useEffect, useCallback } from 'react';
import { Loader2, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function NewsSection() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const fetchNews = useCallback(async () => {
    try {
      const res = await fetch(`/api/news?t=${Date.now()}`, { cache: 'no-store' });
      const data = await res.json();
      if (Array.isArray(data)) setNews(data);
    } catch (e) {
      console.error("Fetch failed");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    const timer = setInterval(fetchNews, 180000);
    return () => clearInterval(timer);
  }, [fetchNews]);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const currentNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (loading) return (
    <div className="py-40 flex flex-col items-center justify-center !bg-white dark:!bg-[#02040A]">
      <Loader2 className="animate-spin text-[#B48A32]" size={50} />
      <p className="mt-4 text-slate-500 font-medium">Loading Live News...</p>
    </div>
  );

  return (
    <section id="news" className="relative pt-20 pb-24 !bg-white dark:!bg-[#02040A] border-none outline-none overflow-hidden transition-colors z-10">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-7xl font-serif font-bold !text-slate-950 dark:!text-white">
            Latest <span className="italic text-[#B48A32]">News</span>
          </h2>
          <div className="flex items-center gap-2 text-[#B48A32] animate-pulse">
            <Zap size={20} fill="currentColor" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Live Updates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentNews.map((item, index) => (
            <Link 
              key={`${item.id}-${index}`} 
              href={`/news/${item.id}`} 
              className="group bg-white dark:bg-[#0B0F1A] rounded-2xl overflow-hidden border !border-slate-100 dark:!border-white/5 shadow-sm hover:shadow-xl transition-all flex flex-col h-full min-h-[400px]"
            >
              {/* 1. Image Area */}
              <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-white/5">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                  alt={item.title} 
                />
              </div>

              {/* 2. Content Area */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Date on top */}
                <p className="text-[11px] font-bold text-slate-400 mb-3 uppercase">{item.time}</p>
                
                {/* Heading - FORCED VISIBILITY FIX */}
                <h3 className="text-[15px] font-bold !text-slate-900 dark:!text-slate-100 mb-4 line-clamp-3 leading-snug group-hover:text-[#B48A32] transition-colors">
                  {item.title}
                </h3>
                
                {/* Category at Bottom (Golden) */}
                <div className="mt-auto pt-4 border-t !border-slate-50 dark:!border-white/5">
                  <span className="text-[10px] font-black text-[#B48A32] dark:text-[#E4C37B] uppercase tracking-[0.15em]">
                    {item.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination logic remains same... */}
      </div>
    </section>
  );
}