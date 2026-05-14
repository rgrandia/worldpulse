import { Article, Category, Region } from '@/types';

export interface FetchNewsParams {
  category?: Category;
  region?: Region;
  query?: string;
}

export async function fetchNews(params: FetchNewsParams): Promise<Article[]> {
  const searchParams = new URLSearchParams();
  if (params.category && params.category !== 'all') {
    searchParams.set('category', params.category);
  }
  if (params.region) searchParams.set('region', params.region);
  if (params.query) searchParams.set('q', params.query);

  const res = await fetch(`/api/news?${searchParams.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error('Failed to fetch news');
  const data = await res.json();
  return data.articles as Article[];
}
