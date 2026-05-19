'use client';

import { useState, useEffect } from 'react';
import { Star, Loader2 } from 'lucide-react';

export function GoogleReviews() {
  // 1. Initial Dummy Reviews (ताकि API लोड होने तक या एरर आने पर ये दिखें)
  const [reviewsList, setReviewsList] = useState([
    {
      name: "Ananya Iyer",
      date: "2 days ago",
      rating: 5,
      text: "Startup Kare made our DPIIT recognition process so simple. Highly recommended for new founders!",
      initial: "A",
      photo: null,
      color: "bg-purple-600"
    },
    {
      name: "Vikram Malhotra",
      date: "1 week ago",
      rating: 5,
      text: "Best consultancy for fundraising. They helped us close our seed round in record time.",
      initial: "V",
      photo: null,
      color: "bg-pink-500"
    }
  ]);
  
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ rating: 5.0, total: 198 });

  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          const formattedReviews = data.reviews.map((rev: any) => ({
            name: rev.author_name,
            date: rev.relative_time_description,
            rating: rev.rating,
            text: rev.text,
            photo: rev.profile_photo_url,
            initial: rev.author_name.charAt(0)
          }));
          
          setReviewsList(formattedReviews);
          setStats({
            rating: data.rating,
            total: data.user_ratings_total
          });
        }
      } catch (err) {
        console.error("Using fallback reviews due to API error");
      } finally {
        setLoading(false);
      }
    }

    fetchGoogleReviews();
  }, []);

  return (
    <section className="py-24 !bg-white dark:!bg-[#02040A] transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SUMMARY HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-4">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6 w-auto" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-serif">Reviews</h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">{stats.rating}</span>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} fill={i < Math.floor(stats.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm text-slate-400 font-medium">{stats.total} reviews on Google</span>
            </div>
            
            {loading && <Loader2 className="animate-spin text-indigo-600" size={20} />}
          </div>
        </div>

        {/* --- REVIEWS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviewsList.map((rev: any, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] flex flex-col hover:shadow-xl transition-all duration-500 group">
              <div className="flex text-orange-400 mb-6">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-8 flex-grow italic line-clamp-6">
                "{rev.text}"
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col items-center">
                {rev.photo ? (
                    <img src={rev.photo} alt={rev.name} className="w-12 h-12 rounded-full mb-3 shadow-md object-cover" />
                ) : (
                    <div className={`w-12 h-12 ${rev.color || 'bg-indigo-600'} rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-md`}>
                        {rev.initial}
                    </div>
                )}
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{rev.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rev.date}</p>
                
                <div className="flex items-center gap-1.5 mt-3 grayscale opacity-40">
                   <img src="https://www.google.com/favicon.ico" alt="" className="w-3 h-3" />
                   <span className="text-[9px] font-bold dark:text-white uppercase tracking-tighter">Verified Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}