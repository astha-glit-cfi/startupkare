'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  ArrowLeft,
  Share2,
  Clock,
  User,
  Calendar,
} from 'lucide-react';

interface BlogPost {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const res = await fetch(
          `https://www.consultavalon.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
        );

        const data = await res.json();

        if (data.length > 0) {
          const blog = data[0];

          setPost({
            title: blog.title.rendered,
            content: blog.content.rendered,
            image:
              blog._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              'https://images.unsplash.com/photo-1551288049-bbda38a5f452',
            author: blog._embedded?.author?.[0]?.name || 'Admin',
            date: new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            readTime: '6 min read',
          });
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching single post:', error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchSinglePost();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-[#02040A]">
        <Navbar />

        <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto animate-pulse">
          <div className="h-10 bg-slate-200 dark:bg-white/5 rounded mb-8 w-40"></div>

          <div className="h-20 bg-slate-200 dark:bg-white/5 rounded mb-8"></div>

          <div className="h-16 bg-slate-200 dark:bg-white/5 rounded mb-12"></div>

          <div className="h-[450px] bg-slate-200 dark:bg-white/5 rounded-[40px] mb-12"></div>

          <div className="space-y-4">
            <div className="h-4 bg-slate-200 dark:bg-white/5 rounded"></div>
            <div className="h-4 bg-slate-200 dark:bg-white/5 rounded"></div>
            <div className="h-4 bg-slate-200 dark:bg-white/5 rounded w-2/3"></div>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#02040A] transition-colors duration-500">
      <Navbar />

      <article className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#B48A32] font-bold text-xs uppercase tracking-widest mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </button>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white mb-8 leading-tight">
            {post?.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-y border-slate-200 dark:border-white/5 py-6">
            
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#B48A32]/20 flex items-center justify-center">
                <User className="text-[#B48A32]" size={24} />
              </div>

              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {post?.author}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post?.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post?.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Share */}
            <button className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#B48A32] hover:text-white transition-all flex items-center justify-center">
              <Share2 size={18} />
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[250px] md:h-[500px] mb-14 rounded-[40px] overflow-hidden">
          <img
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Blog Content */}
        <div
          className="
            prose 
            prose-lg 
            dark:prose-invert 
            max-w-none

            prose-headings:font-serif
            prose-headings:text-slate-950
            dark:prose-headings:text-white

            prose-p:text-slate-700
            dark:prose-p:text-slate-300

            prose-strong:text-slate-950
            dark:prose-strong:text-white

            prose-a:text-[#B48A32]

            prose-blockquote:border-[#B48A32]
            prose-blockquote:text-slate-700
            dark:prose-blockquote:text-slate-300

            prose-img:rounded-[24px]
          "
          dangerouslySetInnerHTML={{ __html: post?.content || '' }}
        />
      </article>

      <Footer />
    </main>
  );
}