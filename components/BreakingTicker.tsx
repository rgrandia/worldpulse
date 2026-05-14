'use client';

import { Zap } from 'lucide-react';
import { Article } from '@/types';

interface BreakingTickerProps {
  articles: Article[];
}

export default function BreakingTicker({ articles }: BreakingTickerProps) {
  if (!articles.length) return null;

  // Duplicate for seamless loop
  const items = [...articles, ...articles];

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-indigo-600/20 border-b border-indigo-500/20 overflow-hidden">
      <div className="flex items-center">
        {/* Badge */}
        <div className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 z-10">
          <Zap size={13} className="text-white" fill="white" />
          <span className="text-[10px] font-bold text-white tracking-widest uppercase whitespace-nowrap">
            Breaking
          </span>
        </div>

        {/* Ticker track */}
        <div className="ticker-wrapper flex-1">
          <div className="ticker-track py-2">
            {items.map((article, i) => (
              <span key={`${article.id}-${i}`} className="inline-flex items-center">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-slate-300 hover:text-white transition-colors whitespace-nowrap mx-2 cursor-pointer"
                >
                  {article.title}
                </a>
                <span className="text-indigo-500/60 text-lg mx-4 select-none">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
