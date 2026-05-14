'use client';

import { TrendingUp, Globe, Newspaper, Clock } from 'lucide-react';

interface StatsBarProps {
  totalArticles: number;
  lastUpdated: Date;
}

export default function StatsBar({ totalArticles, lastUpdated }: StatsBarProps) {
  const stats = [
    {
      icon: <Globe size={14} className="text-indigo-400" />,
      value: '8',
      label: 'regions covered',
    },
    {
      icon: <Newspaper size={14} className="text-emerald-400" />,
      value: totalArticles.toString(),
      label: 'stories today',
    },
    {
      icon: <TrendingUp size={14} className="text-orange-400" />,
      value: '7',
      label: 'categories',
    },
    {
      icon: <Clock size={14} className="text-purple-400" />,
      value: lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      label: 'last updated',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="glass-card rounded-xl px-4 py-3 flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
            {stat.icon}
          </div>
          <div>
            <div className="text-base font-bold text-slate-100">{stat.value}</div>
            <div className="text-[10px] text-slate-500 font-medium">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
