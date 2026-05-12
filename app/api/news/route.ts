import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media'],
      ['media:thumbnail', 'thumbnail'],
      ['content:encoded', 'fullContent'],
      ['category', 'categories', {keepArray: true}]
    ],
  }
});

export async function GET() {
  try {
    const response = await fetch(`https://yourstory.com/feed?v=${Date.now()}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      cache: 'no-store'
    });

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    // Latest news hamesha upar rahegi
    const sortedItems = feed.items.sort((a, b) => 
      new Date(b.pubDate || 0).getTime() - new Date(a.pubDate || 0).getTime()
    );

    const items = sortedItems.slice(0, 48).map((item: any) => {
      // --- मजबूत LIVE IMAGE LOGIC ---
      let img = "";
      if (item.media && item.media.$) img = item.media.$.url;
      else if (item.thumbnail && item.thumbnail.$) img = item.thumbnail.$.url;
      else if (item.enclosure) img = item.enclosure.url;
      else {
        // Agar tags mein nahi hai toh content ke andar se <img> dhoondho
        const match = /<img[^>]+src="([^">]+)"/.exec(item.fullContent || item.content || "");
        img = match ? match[1] : "";
      }

      // Final Fallback: Agar kuch na mile toh Unique Tech Image
      if (!img || img.includes('placeholder')) {
        img = `https://images.unsplash.com/photo-1519389403731-44598bbd8fd5?q=80&w=800&auto=format&fit=crop&sig=${Math.random()}`;
      }

      const body = (item.fullContent || item.contentSnippet || "")
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<[^>]+>/g, (tag: string) => (tag === '</p>' ? '\n\n' : ''))
        .trim();

      return {
        id: Buffer.from(item.link).toString('base64').replace(/[^a-zA-Z0-9]/g, '').substring(0, 32),
        title: item.title,
        link: item.link,
        image: img,
        category: item.categories ? item.categories[0].toUpperCase() : "LATEST",
        time: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : 'Today',
        body: body
      };
    });

    return NextResponse.json(items, {
        headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' }
    });
  } catch (e) {
    return NextResponse.json([]);
  }
}