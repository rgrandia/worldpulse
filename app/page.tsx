'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { RefreshCcw, Rss } from 'lucide-react';
import { motion } from 'framer-motion';

import { Article, Category, Region } from '@/types';
import { filterArticles, mockArticles } from '@/lib/mockData';

import Navbar from '@/components/Navbar';
import BreakingTicker from '@/components/BreakingTicker';
import HeroArticle from '@/components/HeroArticle';
import FilterBar from '@/components/FilterBar';
import NewsGrid from '@/components/NewsGrid';
import StatsBar from '@/components/StatsBar';
import { HeroSkeleton, SkeletonGrid } from '@/components/LoadingSkeleton';

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<Category>('all');
  const [region, setRegion] = useState<Region>('world');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const loadNews = useCallback(
    async (cat: Category, reg: Region, q: string, refresh = false) => {
      if (refresh) setIsRefreshing(true);
      else setLoading(true);

      abortRef.current?.abort();
      abortRef.current = new AbortController();

      try {
        const params = new URLSearchParams();
        if (cat !== 'all') params.set('category', cat);
        if (reg !== 'world') params.set('region', reg);
        if (q) params.set('q', q);

        const res = await fetch(`/api/news?${params}`, {
          signal: abortRef.current.signal,
        });

        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        setArticles(data.articles ?? []);
        setLastUpdated(new Date());
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        // Fallback to local mock data on any error
        setArticles(filterArticles(mockArticles, cat, reg, q));
      } finally {
        setLoading(false);
        setIsRefreshing(false);
      }
    },
    []
  );

  // Initial load + whenever filters change
  useEffect(() => {
    loadNews(category, region, searchQuery);
  }, [category, region, searchQuery, loadNews]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(
      () => loadNews(category, region, searchQuery, true),
      5 * 60 * 1000
    );
    return () => clearInterval(interval);
  }, [category, region, searchQuery, loadNews]);

  const handleReset = () => {
    setCategory('all');
    setRegion('world');
    setSearchQuery('');
  };

  const hero = articles[0] ?? null;
  const gridArticles = articles.slice(1);

  return (
    <div className="relative min-h-screen">
      {/* Sticky Navbar */}
      <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />

      {/* Breaking ticker */}
      {!loading && articles.length > 0 && (
        <BreakingTicker articles={articles.slice(0, 8)} />
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 relative z-10">
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between flex-wrap gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Rss size={14} className="text-indigo-400" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-indigo-400">
                Live Feed
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
              What&apos;s happening{' '}
              <span className="gradient-text">right now</span>
            </h1>
            <p className="text-slate-500 text-sm mt-1.5">
              Curated stories from every corner of the planet
            </p>
          </div>

          {/* Refresh button */}
          <button
            onClick={() => loadNews(category, region, searchQuery, true)}
            disabled={isRefreshing}
            className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] hover:border-white/15 text-slate-400 hover:text-slate-200 px-4 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-50"
          >
            <RefreshCcw
              size={13}
              className={isRefreshing ? 'animate-spin text-indigo-400' : ''}
            />
            {isRefreshing ? 'Updating…' : 'Refresh'}
          </button>
        </motion.div>

        {/* ── Stats Bar ──────────────────────────────────────── */}
        <StatsBar totalArticles={articles.length} lastUpdated={lastUpdated} />

        {/* ── Hero Article ───────────────────────────────────── */}
        {loading ? (
          <HeroSkeleton />
        ) : hero ? (
          <HeroArticle article={hero} />
        ) : null}

        {/* ── Filters ────────────────────────────────────────── */}
        <FilterBar
          category={category}
          region={region}
          onCategoryChange={setCategory}
          onRegionChange={setRegion}
          totalResults={gridArticles.length}
        />

        {/* ── News Grid ──────────────────────────────────────── */}
        {loading ? (
          <SkeletonGrid count={9} />
        ) : (
          <NewsGrid
            articles={gridArticles}
            loading={loading}
            onRefresh={handleReset}
          />
        )}

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer className="text-center py-8 border-t border-white/5">
          <p className="text-slate-600 text-xs">
            WorldPulse — Powered by{' '}
            <a
              href="https://newsapi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              NewsAPI
            </a>
            {' '}· Built with Next.js & deployed on Vercel
          </p>
        </footer>
      </main>
    </div>
  );
}
