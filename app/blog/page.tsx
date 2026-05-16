'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          'https://www.consultavalon.com/wp-json/wp/v2/posts?_embed&per_page=6'
        );

        const data = await res.json();

        const formattedBlogs = data.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
          date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          author: post._embedded?.author?.[0]?.name || 'Admin',
          image:
            post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
            'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80',
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-950 dark:text-white mb-6 uppercase tracking-tighter">
            Our <span className="italic text-[#B48A32]">Blog</span>
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl">
            Expert insights on startup growth, compliance, funding, and industry trends.
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="animate-pulse"
              >
                <div className="h-64 rounded-[32px] bg-slate-200 dark:bg-white/5 mb-6"></div>

                <div className="h-3 w-32 bg-slate-200 dark:bg-white/5 rounded mb-4"></div>

                <div className="h-8 bg-slate-200 dark:bg-white/5 rounded mb-4"></div>

                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 dark:bg-white/5 rounded"></div>
                  <div className="h-3 bg-slate-200 dark:bg-white/5 rounded"></div>
                  <div className="h-3 w-2/3 bg-slate-200 dark:bg-white/5 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Blog Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                {/* Image */}
                <div className="relative h-64 mb-6 overflow-hidden rounded-[32px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-[10px] font-black text-[#B48A32] uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-slate-950 dark:text-white mb-4 group-hover:text-[#B48A32] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                  Read Article

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}