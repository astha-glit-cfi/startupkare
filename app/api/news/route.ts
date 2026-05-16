import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export const dynamic = 'force-dynamic';

const parser = new Parser({
  customFields: {
    item: [['media:content', 'media'], ['content:encoded', 'fullContent']]
  }
});

export async function GET() {
  try {
    const res = await fetch(`https://yourstory.com/feed?t=${Date.now()}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      },
      cache: 'no-store'
    });

    const xml = await res.text();
    const feed = await parser.parseString(xml);

    const items = feed.items
      .map((item: any) => {

        // UNIQUE ID
        const uniqueId =
          item.link?.split('/').filter(Boolean).pop() ||
          Math.random().toString(36).substring(7);

        // IMAGE
        let img =
          item.media?.$?.url ||
          item.enclosure?.url ||
          '';

        if (!img) {
          const match = /<img[^>]+src="([^">]+)"/.exec(
            item.fullContent || ''
          );

          img = match
            ? match[1]
            : 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200';
        }

        // CLEAN CONTENT
        const cleanBody = (item.fullContent || item.contentSnippet || '')
          .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gim, '')
          .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, '')
          .replace(/<[^>]+>/g, (tag: string) =>
            tag.startsWith('</p') ? '\n\n' : ''
          )
          .trim();

        // DATE OBJECT
        const publishDate = item.pubDate
          ? new Date(item.pubDate)
          : new Date();

        return {
          id: uniqueId,
          title: item.title,
          image: img,

          // FORMATTED DATE
          time: publishDate.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),

          // REAL DATE FOR SORTING
          date: publishDate.toISOString(),

          description:
            item.contentSnippet?.slice(0, 120) + '...',

          body: cleanBody
        };
      })

      // SORT LATEST FIRST
      .sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      );

    return NextResponse.json(items);

  } catch (e) {
    return NextResponse.json([]);
  }
}