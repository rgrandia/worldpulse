import { clsx, type ClassValue } from 'clsx';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { Category, CategoryMeta, Region, RegionMeta } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function timeAgo(dateString: string): string {
  try {
    return formatDistanceToNow(parseISO(dateString), { addSuffix: true });
  } catch {
    return 'recently';
  }
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

export const CATEGORIES: Record<Category, CategoryMeta> = {
  all: {
    label: 'All News',
    color: 'text-slate-300',
    gradient: 'from-slate-500 to-slate-400',
    icon: '🌐',
  },
  technology: {
    label: 'Technology',
    color: 'text-indigo-400',
    gradient: 'from-indigo-600 to-blue-500',
    icon: '💻',
  },
  business: {
    label: 'Business',
    color: 'text-emerald-400',
    gradient: 'from-emerald-600 to-teal-500',
    icon: '📈',
  },
  sports: {
    label: 'Sports',
    color: 'text-orange-400',
    gradient: 'from-orange-600 to-amber-500',
    icon: '⚽',
  },
  science: {
    label: 'Science',
    color: 'text-cyan-400',
    gradient: 'from-cyan-600 to-sky-500',
    icon: '🔬',
  },
  health: {
    label: 'Health',
    color: 'text-rose-400',
    gradient: 'from-rose-600 to-pink-500',
    icon: '🏥',
  },
  entertainment: {
    label: 'Entertainment',
    color: 'text-purple-400',
    gradient: 'from-purple-600 to-violet-500',
    icon: '🎬',
  },
  politics: {
    label: 'Politics',
    color: 'text-slate-400',
    gradient: 'from-slate-600 to-gray-500',
    icon: '🏛️',
  },
  general: {
    label: 'General',
    color: 'text-slate-400',
    gradient: 'from-slate-600 to-gray-500',
    icon: '📰',
  },
};

export const REGIONS: Record<Region, RegionMeta> = {
  world: { label: 'World', flag: '🌍', code: 'world' },
  us: { label: 'United States', flag: '🇺🇸', code: 'us' },
  gb: { label: 'United Kingdom', flag: '🇬🇧', code: 'gb' },
  eu: { label: 'Europe', flag: '🇪🇺', code: 'eu' },
  asia: { label: 'Asia', flag: '🌏', code: 'asia' },
  latam: { label: 'Latin America', flag: '🌎', code: 'latam' },
  africa: { label: 'Africa', flag: '🌍', code: 'africa' },
  mideast: { label: 'Middle East', flag: '🕌', code: 'mideast' },
};

export const CATEGORY_BG: Record<Category, string> = {
  all: 'bg-slate-500/20 border-slate-500/30 text-slate-300',
  technology: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300',
  business: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300',
  sports: 'bg-orange-500/20 border-orange-500/30 text-orange-300',
  science: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300',
  health: 'bg-rose-500/20 border-rose-500/30 text-rose-300',
  entertainment: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
  politics: 'bg-slate-500/20 border-slate-500/30 text-slate-300',
  general: 'bg-slate-500/20 border-slate-500/30 text-slate-300',
};
