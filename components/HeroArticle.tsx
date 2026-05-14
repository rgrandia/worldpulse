'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Clock, User, TrendingUp } from 'lucide-react';
import { Article } from '@/types';
import { CATEGORIES, CATEGORY_BG, timeAgo } from '@/lib/utils';

interface HeroArticleProps {
  article: Article;
}

export default function HeroArticle({ article }: HeroArticleProps) {
  const cat = CATEGORIES[article.category] ?? CATEGORIES.general;
  const catBg = CATEGORY_BG[article.category] ?? CATEGORY_BG.general;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full rounded-2xl overflow-hidden group cursor-pointer"
      style={{ minHeight: '480px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
        )}
        {/* Gradient overlay */}
        <div className="hero-overlay absolute inset-0" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-10" style={{ minHeight: '480px' }}>
        {/* Top badges */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <span
            className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-sm ${catBg}`}
          >
            {cat.icon} {cat.label}
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/15 text-rose-400 backdrop-blur-sm">
            🔥 Featured
          </span>
        </div>

        {/* Article info */}
        <div className="max-w-3xl">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover/link:text-indigo-200 transition-colors">
              {article.title}
            </h1>
          </a>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
            {article.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Source */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-[8px] font-bold text-white">
                {article.source.name.charAt(0)}
              </div>
              <span className="text-xs font-semibold text-slate-200">{article.source.name}</span>
            </div>

            {/* Author */}
            {article.author && (
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <User size={12} />
                <span>{article.author}</span>
              </div>
            )}

            {/* Time */}
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Clock size={12} />
              <span>{timeAgo(article.publishedAt)}</span>
            </div>

            {/* Read more */}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-lg shadow-indigo-900/50 hover:shadow-indigo-900/70 hover:-translate-y-0.5"
            >
              Read full story
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Corner glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-indigo-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}
