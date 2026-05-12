import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

  try {
    // URL decode karna jo frontend se aaya hai
    const url = decodeURIComponent(id);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) throw new Error('Failed to fetch article');

    const html = await response.text();
    const $ = cheerio.load(html);

    let content = '';

    // YourStory ke naye aur purane dono selectors ka mix
    const articleSelectors = [
      '.sc-content p',
      '.article-content p',
      'div[class*="ArticleBody"] p',
      'article p',
      'section p'
    ];

    articleSelectors.forEach(selector => {
      if (content.length < 200) { // Agar ek selector se data mil jaye toh wahin ruk jayein
        $(selector).each((_, el) => {
          const text = $(el).text().trim();
          // Noise filter: Sirf wo paragraphs jo 50 characters se bade hon
          if (text.length > 50 && !text.includes('Sign up for our newsletter') && !text.includes('Follow us on')) {
            content += `<p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-sans">${text}</p>`;
          }
        });
      }
    });

    if (!content || content.length < 100) {
      content = "<p class='text-center py-10'>Full content could not be cleaned for reader mode. We recommend checking back in a few minutes or ensuring your connection is stable.</p>";
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Scraping Error:", error);
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 });
  }
}