'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronLeft, Loader2, Clock, Calendar } from 'lucide-react';

export default function ArticlePage() {
  const { id } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/news?v=' + Date.now());
        const data = await res.json();
        if (Array.isArray(data)) {
          const found = data.find((item: any) => item.id === id);
          if (found) setArticle(found);
        }
      } catch (err) {
        console.error('Error fetching article');
      } finally {
        setLoading(false);
      }
    };
    if (id) loadArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center !bg-white dark:!bg-[#02040A]">
        <Loader2 className="animate-spin text-[#B48A32]" size={42} />
        <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium">Loading Story...</p>
      </div>
    );
  }

  if (!article) return <div className="h-screen flex items-center justify-center !bg-white dark:text-white">Story not found.</div>;

  return (
    <main className="min-h-screen !bg-white dark:!bg-[#02040A] transition-colors duration-500">
      <Navbar />

      {/* Padding adjustment for mobile (pt-24) and desktop (pt-32) */}
      <div className="pt-24 md:pt-32 pb-24 max-w-4xl mx-auto px-6 text-left">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-10 hover:gap-3 transition-all"
        >
          <ChevronLeft size={18} /> Back to News
        </button>

        <article className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
          {/* DATE META */}
          <div className="flex items-center gap-3 text-rose-600 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6">
            <Clock size={14} /> {article.time || 'Latest Update'} • STARTUP KARE LIVE
          </div>

          <h1 className="hero-heading">
  {article.title}
</h1>
          {/* IMAGE AREA */}
          <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-slate-100 dark:border-white/5 bg-slate-50">
            <img 
              src={article.image} 
              alt="" 
              referrerPolicy="no-referrer" 
              className="w-full h-auto object-cover max-h-[600px]" 
            />
          </div>

          {/* CONTENT AREA: Forced visibility for light/dark */}
          <div
            className="
              prose prose-lg md:prose-xl max-w-none 
              
              /* Light Mode Colors */
              !text-slate-800
              prose-p:!text-slate-700
              prose-headings:!text-slate-950
              
              /* Dark Mode Colors */
              dark:!text-slate-300
              dark:prose-p:!text-slate-300
              dark:prose-headings:!text-white
              
              leading-relaxed font-sans space-y-4
            "
            dangerouslySetInnerHTML={{ __html: article.body || article.bodyContent }}
          />

          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-white/5 text-center">
            <p className="text-slate-400 dark:text-slate-500 text-sm italic">
              © {new Date().getFullYear()} Startup Kare Intelligence Feed.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}