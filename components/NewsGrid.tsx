'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Frown, RefreshCcw } from 'lucide-react';
import { Article } from '@/types';
import NewsCard from './NewsCard';

interface NewsGridProps {
  articles: Article[];
  loading: boolean;
  onRefresh: () => void;
}

export default function NewsGrid({ articles, loading, onRefresh }: NewsGridProps) {
  if (!loading && articles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
          <Frown size={28} className="text-slate-600" />
        </div>
        <h3 className="text-slate-300 font-semibold text-lg mb-1">No stories found</h3>
        <p className="text-slate-600 text-sm mb-6">
          Try adjusting your filters or search terms
        </p>
        <button
          onClick={onRefresh}
          className="flex items-center gap-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-400 px-5 py-2 rounded-full text-sm font-semibold transition-all"
        >
          <RefreshCcw size={14} />
          Reset filters
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={articles.map((a) => a.id).join('')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 news-grid"
      >
        {articles.map((article, i) => (
          <NewsCard key={article.id} article={article} index={i} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
