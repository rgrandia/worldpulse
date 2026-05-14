'use client';

import { motion } from 'framer-motion';
import { ChevronDown, MapPin, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Category, Region } from '@/types';
import { CATEGORIES, REGIONS, cn } from '@/lib/utils';

interface FilterBarProps {
  category: Category;
  region: Region;
  onCategoryChange: (c: Category) => void;
  onRegionChange: (r: Region) => void;
  totalResults: number;
}

const CATEGORY_ORDER: Category[] = [
  'all',
  'technology',
  'business',
  'sports',
  'science',
  'health',
  'entertainment',
  'politics',
];

export default function FilterBar({
  category,
  region,
  onCategoryChange,
  onRegionChange,
  totalResults,
}: FilterBarProps) {
  const [regionOpen, setRegionOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Top row: label + region picker + count */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={15} className="text-slate-500" />
          <span className="text-sm font-semibold text-slate-300">Filters</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Region picker */}
          <div className="relative">
            <button
              onClick={() => setRegionOpen(!regionOpen)}
              className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/15 rounded-xl px-3.5 py-2 text-sm text-slate-300 transition-all"
            >
              <MapPin size={13} className="text-indigo-400" />
              <span className="text-[12px] font-medium">
                {REGIONS[region].flag} {REGIONS[region].label}
              </span>
              <ChevronDown
                size={12}
                className={cn(
                  'text-slate-500 transition-transform',
                  regionOpen && 'rotate-180'
                )}
              />
            </button>

            {regionOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-full mt-2 w-52 glass-card border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/60 z-40"
              >
                {(Object.keys(REGIONS) as Region[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => { onRegionChange(r); setRegionOpen(false); }}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left',
                      r === region
                        ? 'bg-indigo-600/20 text-indigo-300'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    )}
                  >
                    <span className="text-base">{REGIONS[r].flag}</span>
                    <span className="font-medium text-[13px]">{REGIONS[r].label}</span>
                    {r === region && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Results count */}
          <div className="text-[11px] text-slate-600 font-medium bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            {totalResults} {totalResults === 1 ? 'story' : 'stories'}
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {CATEGORY_ORDER.map((cat) => {
          const meta = CATEGORIES[cat];
          const isActive = category === cat;

          return (
            <motion.button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'filter-pill flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold border transition-all',
                isActive
                  ? `bg-gradient-to-r ${meta.gradient} border-transparent text-white shadow-lg active`
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-slate-200 hover:bg-white/[0.07]'
              )}
            >
              <span className="text-[13px]">{meta.icon}</span>
              {meta.label}
            </motion.button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />
    </div>
  );
}
