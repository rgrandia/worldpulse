'use client';

import { useState } from 'react';
import { Globe2, Search, Bell, Zap, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onSearch: (q: string) => void;
  searchQuery: string;
}

export default function Navbar({ onSearch, searchQuery }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2.5 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Globe2 className="w-4.5 h-4.5 text-white" size={18} />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full live-dot border-2 border-[#06060f]" />
            </div>
            <div>
              <span className="text-lg font-bold gradient-text tracking-tight">WorldPulse</span>
              <div className="text-[9px] text-slate-500 -mt-0.5 font-medium tracking-widest uppercase">
                Global News
              </div>
            </div>
          </motion.div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <AnimatePresence mode="wait">
              {searchOpen ? (
                <motion.div
                  key="search-open"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex w-full items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2"
                >
                  <Search className="text-slate-400 shrink-0" size={16} />
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search stories, topics, places…"
                    className="search-input bg-transparent text-sm text-slate-200 placeholder-slate-500 outline-none flex-1"
                  />
                  <button
                    onClick={() => { onSearch(''); setSearchOpen(false); }}
                    className="text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  key="search-closed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSearchOpen(true)}
                  className="flex w-full items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-xl px-4 py-2 transition-all group"
                >
                  <Search className="text-slate-500 group-hover:text-slate-400" size={15} />
                  <span className="text-sm text-slate-500 group-hover:text-slate-400">
                    Search news…
                  </span>
                  <kbd className="ml-auto text-[10px] text-slate-600 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                    ⌘K
                  </kbd>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Live Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full live-dot" />
              <span className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase">
                Live
              </span>
            </div>

            <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-all">
              <Bell size={16} className="text-slate-400" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
            </button>

            {/* Mobile search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-all"
            >
              <Search size={16} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="px-4 py-3 flex items-center gap-3">
              <Search className="text-slate-500 shrink-0" size={15} />
              <input
                autoFocus
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search news…"
                className="search-input bg-transparent text-sm text-slate-200 placeholder-slate-500 outline-none flex-1"
              />
              <button onClick={() => { onSearch(''); setSearchOpen(false); }}>
                <X size={14} className="text-slate-500" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
