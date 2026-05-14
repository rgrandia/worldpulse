# 🌍 WorldPulse — Global News Dashboard

A beautifully designed, real-time news dashboard built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Deploy to Vercel in one click.

![WorldPulse Preview](https://picsum.photos/seed/worldpulse-preview/1200/630)

---

## ✨ Features

- **Breaking news ticker** — animated headline strip at the top
- **Hero featured story** — full-bleed cinematic card for the top article
- **Category filters** — Technology, Business, Sports, Science, Health, Entertainment, Politics
- **Region filters** — World, US, UK, Europe, Asia, Latin America, Africa, Middle East
- **Live search** — instant full-text search across all stories
- **Auto-refresh** — fetches fresh news every 5 minutes in the background
- **Glassmorphism UI** — dark theme with blur cards, gradients & glow effects
- **Smooth animations** — Framer Motion page transitions and card entrance effects
- **Skeleton loading** — polished shimmer placeholders while fetching
- **Zero-config demo mode** — runs with rich built-in mock data, no API key needed

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/worldpulse.git
cd worldpulse

# 2. Install dependencies
npm install

# 3. (Optional) Add your NewsAPI key
cp .env.example .env.local
# Edit .env.local and add your key from https://newsapi.org/register

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app works immediately with mock data.

---

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/worldpulse)

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Add `NEWSAPI_KEY` in **Settings → Environment Variables**
4. Deploy — live in ~60 seconds

---

## 🔑 NewsAPI Setup (Optional)

The app ships with 30+ realistic mock articles so you can explore it without any key.

To get live real-world news:

1. Register for free at [newsapi.org/register](https://newsapi.org/register)
2. Copy your API key
3. Add it to Vercel environment variables as `NEWSAPI_KEY`

> **Note:** The free NewsAPI plan is limited to developer use (localhost). For production, upgrade to their paid plan or use an alternative like [GNews API](https://gnews.io) or [Mediastack](https://mediastack.com).

---

## 🗂 Project Structure

```
worldpulse/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main dashboard page (client)
│   ├── globals.css         # Global styles, animations, glassmorphism
│   └── api/news/route.ts   # API route → NewsAPI + mock fallback
├── components/
│   ├── Navbar.tsx          # Sticky nav with search
│   ├── BreakingTicker.tsx  # Animated scrolling ticker
│   ├── HeroArticle.tsx     # Featured article card
│   ├── NewsCard.tsx        # Individual story card
│   ├── FilterBar.tsx       # Category pills + region dropdown
│   ├── NewsGrid.tsx        # Responsive grid layout
│   ├── StatsBar.tsx        # Quick stats row
│   └── LoadingSkeleton.tsx # Shimmer placeholders
├── lib/
│   ├── api.ts              # Client-side fetch helper
│   ├── mockData.ts         # 30+ built-in demo articles
│   └── utils.ts            # timeAgo, truncate, category metadata
├── types/
│   └── index.ts            # TypeScript types
├── .env.example
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#06060f` |
| Card | `rgba(15,15,30,0.85)` + backdrop blur |
| Accent gradient | Indigo → Purple → Pink |
| Technology | Indigo `#6366f1` |
| Business | Emerald `#10b981` |
| Sports | Orange `#f97316` |
| Science | Cyan `#06b6d4` |
| Health | Rose `#f43f5e` |
| Entertainment | Purple `#a855f7` |

---

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org) — App Router, API Routes, Server Components
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Framer Motion](https://www.framer.com/motion) — animations
- [Lucide React](https://lucide.dev) — icons
- [date-fns](https://date-fns.org) — date formatting
- [NewsAPI](https://newsapi.org) — news data source

---

## 📄 License

MIT — free to use, modify, and deploy.
