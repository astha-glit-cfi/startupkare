'use client';

import { useState } from 'react';
import { Star, X, Send } from 'lucide-react';

export function GoogleReviews() {
  // 1. Initial Dummy Reviews (Jo hamesha dikhenge)
  const [reviewsList, setReviewsList] = useState([
    {
      name: "Ananya Iyer",
      date: "2 days ago",
      rating: 5,
      text: "Startup Kare made our DPIIT recognition process so simple. Highly recommended for new founders!",
      initial: "A",
      color: "bg-purple-600"
    },
    {
      name: "Vikram Malhotra",
      date: "1 week ago",
      rating: 5,
      text: "Best consultancy for fundraising. They helped us close our seed round in record time.",
      initial: "V",
      color: "bg-pink-500"
    },
    {
      name: "Rajesh Kumar",
      date: "2 weeks ago",
      rating: 5,
      text: "Extremely professional team. Their compliance support saved us from a lot of legal trouble.",
      initial: "R",
      color: "bg-blue-500"
    },
    {
      name: "Sneha Kapoor",
      date: "1 month ago",
      rating: 5,
      text: "The website they built for my D2C brand is amazing. Great attention to detail.",
      initial: "S",
      color: "bg-emerald-600"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', text: '', rating: 5 });

  // 2. Naya review add karne ka function
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      ...formData,
      date: "Just now",
      initial: formData.name.charAt(0).toUpperCase(),
      color: "bg-indigo-600"
    };
    
    // Naya review list mein sabse upar add hoga
    setReviewsList([newReview, ...reviewsList]);
    setIsModalOpen(false);
    setFormData({ name: '', text: '', rating: 5 });
  };

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
              <span className="text-4xl font-bold text-slate-900 dark:text-white">5.0</span>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" />)}
              </div>
              <span className="text-sm text-slate-400 font-medium">{reviewsList.length + 198} reviews</span>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg"
            >
              Write A Review
            </button>
          </div>
        </div>

        {/* --- REVIEWS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviewsList.map((rev, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] flex flex-col hover:shadow-xl transition-all duration-500 group">
              <div className="flex text-orange-400 mb-6">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-8 flex-grow italic">
                "{rev.text}"
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col items-center">
                <div className={`w-12 h-12 ${rev.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-md`}>
                  {rev.initial}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{rev.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rev.date}</p>
                <div className="flex items-center gap-1.5 mt-3 grayscale opacity-40">
                   <img src="https://www.google.com/favicon.ico" alt="" className="w-3 h-3" />
                   <span className="text-[9px] font-bold dark:text-white uppercase tracking-tighter">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- WRITE REVIEW MODAL --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in" onClick={() => setIsModalOpen(false)}></div>
            
            <form onSubmit={handleAddReview} className="relative w-full max-w-md bg-white dark:bg-[#0B0F1A] p-10 rounded-[40px] shadow-2xl border border-white/10 animate-in zoom-in duration-300">
               <button type="button" onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-white/5 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all"><X size={20}/></button>
               
               <h3 className="text-2xl font-bold mb-2 dark:text-white font-serif">Leave a Review</h3>
               <p className="text-sm text-slate-500 mb-8">Share your experience with Startup Kare</p>
               
               <div className="space-y-5">
                 <div className="space-y-2 text-left">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                   <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Jane Doe" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-all" />
                 </div>

                 <div className="space-y-2 text-left">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Rating</label>
                   <div className="flex gap-2 text-orange-400">
                      {[1,2,3,4,5].map(num => (
                        <Star 
                          key={num} 
                          size={24} 
                          className="cursor-pointer transition-transform hover:scale-110" 
                          fill={formData.rating >= num ? "currentColor" : "none"} 
                          onClick={() => setFormData({...formData, rating: num})}
                        />
                      ))}
                   </div>
                 </div>

                 <div className="space-y-2 text-left">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                   <textarea required value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} placeholder="What was it like working with us?" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white outline-none h-32 resize-none focus:border-blue-500 transition-all" />
                 </div>

                 <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20">
                    Submit Review <Send size={18} />
                 </button>
               </div>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}