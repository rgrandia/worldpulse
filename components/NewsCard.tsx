'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, ExternalLink, User } from 'lucide-react';
import { Article } from '@/types';
import { CATEGORIES, CATEGORY_BG, timeAgo, truncate } from '@/lib/utils';

interface NewsCardProps {
  article: Article;
  index: number;
  variant?: 'default' | 'wide';
}

export default function NewsCard({ article, index, variant = 'default' }: NewsCardProps) {
  const cat = CATEGORIES[article.category] ?? CATEGORIES.general;
  const catBg = CATEGORY_BG[article.category] ?? CATEGORY_BG.general;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.07, 0.5),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className={`glass-card rounded-2xl overflow-hidden group cursor-pointer flex transition-all duration-300 ${
        variant === 'wide' ? 'flex-row' : 'flex-col'
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden shrink-0 ${
          variant === 'wide' ? 'w-44 md:w-52' : 'h-44 sm:h-52 w-full'
        }`}
      >
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${cat.gradient} opacity-30`} />
        )}
        <div className="card-overlay absolute inset-0" />

        {/* Category badge on image */}
        <div className="absolute top-3 left-3">
          <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border backdrop-blur-md ${catBg}`}>
            {cat.icon} {cat.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        {/* Source + Time */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div
              className={`w-5 h-5 rounded-md bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-[9px] font-bold text-white`}
            >
              {article.source.name.charAt(0)}
            </div>
            <span className="text-[11px] font-semibold text-slate-400">
              {article.source.name}
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-600 text-[10px]">
            <Clock size={10} />
            <span>{timeAgo(article.publishedAt)}</span>
          </div>
        </div>

        {/* Title */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link"
        >
          <h2 className="text-sm font-bold text-slate-100 leading-snug mb-2 group-hover/link:text-indigo-300 transition-colors line-clamp-3">
            {article.title}
          </h2>
        </a>

        {/* Description */}
        <p className="text-[12px] text-slate-500 leading-relaxed flex-1 line-clamp-2">
          {truncate(article.description, 140)}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
          {article.author ? (
            <div className="flex items-center gap-1 text-slate-600 text-[10px]">
              <User size={9} />
              <span className="truncate max-w-[120px]">{article.author}</span>
            </div>
          ) : (
            <span />
          )}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Read more
            <ExternalLink size={9} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
