import { NextRequest, NextResponse } from 'next/server';
import { mockArticles, filterArticles } from '@/lib/mockData';
import { Article } from '@/types';

const NEWSAPI_KEY = process.env.NEWSAPI_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const REGION_TO_COUNTRY: Record<string, string> = {
  us: 'us',
  gb: 'gb',
  eu: 'de',
  asia: 'jp',
  latam: 'br',
  africa: 'za',
  mideast: 'ae',
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // Empty string means "all categories"
  const category = searchParams.get('category') || '';
  const region = searchParams.get('region') || 'world';
  const query = searchParams.get('q') || '';

  // Fall back to mock data if no API key is set
  if (!NEWSAPI_KEY) {
    const filtered = filterArticles(mockArticles, category || 'all', region, query);
    return NextResponse.json({ articles: filtered, total: filtered.length });
  }

  try {
    let url: string;
    // NewsAPI category param — use 'general' when none specified
    const newsApiCategory = category || 'general';

    if (query) {
      // everything endpoint supports language + free-text search
      url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=30&apiKey=${NEWSAPI_KEY}`;
    } else if (region && region !== 'world') {
      // top-headlines with country (no language param needed)
      const country = REGION_TO_COUNTRY[region] || 'us';
      url = `${BASE_URL}/top-headlines?country=${country}&category=${newsApiCategory}&pageSize=30&apiKey=${NEWSAPI_KEY}`;
    } else {
      // top-headlines does NOT support language= — use country=us as default world feed
      url = `${BASE_URL}/top-headlines?country=us&category=${newsApiCategory}&pageSize=30&apiKey=${NEWSAPI_KEY}`;
    }

    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      const filtered = filterArticles(mockArticles, category || 'all', region, query);
      return NextResponse.json({ articles: filtered, total: filtered.length });
    }

    const data = await res.json();

    if (data.status !== 'ok') {
      const filtered = filterArticles(mockArticles, category || 'all', region, query);
      return NextResponse.json({ articles: filtered, total: filtered.length });
    }

    // Map NewsAPI response to our Article type
    const articles: Article[] = (data.articles || [])
      .filter((a: { title?: string; description?: string; urlToImage?: string }) =>
        a.title && a.description && a.urlToImage
      )
      .map(
        (
          a: {
            title: string;
            description: string;
            content: string | null;
            url: string;
            urlToImage: string | null;
            publishedAt: string;
            source: { id: string | null; name: string };
            author: string | null;
          },
          i: number
        ) => ({
          id: `live-${i}`,
          title: a.title,
          description: a.description,
          content: a.content,
          url: a.url,
          urlToImage: a.urlToImage,
          publishedAt: a.publishedAt,
          source: a.source,
          author: a.author,
          category: category as Article['category'],
          region: region as Article['region'],
        })
      );

    return NextResponse.json({ articles, total: data.totalResults });
  } catch {
    const filtered = filterArticles(mockArticles, category || 'all', region, query);
    return NextResponse.json({ articles: filtered, total: filtered.length });
  }
}
