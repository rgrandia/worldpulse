export type Category =
  | 'all'
  | 'technology'
  | 'business'
  | 'sports'
  | 'science'
  | 'health'
  | 'entertainment'
  | 'politics'
  | 'general';

export type Region =
  | 'world'
  | 'us'
  | 'gb'
  | 'eu'
  | 'asia'
  | 'latam'
  | 'africa'
  | 'mideast';

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  category: Category;
  region: Region;
}

export interface NewsFilters {
  category: Category;
  region: Region;
  query: string;
}

export interface CategoryMeta {
  label: string;
  color: string;
  gradient: string;
  icon: string;
}

export interface RegionMeta {
  label: string;
  flag: string;
  code: string;
}
