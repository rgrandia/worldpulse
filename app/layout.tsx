import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WorldPulse — Global News Dashboard',
  description:
    'Stay ahead of the world. Real-time news from every corner of the globe, filtered by topic and region.',
  keywords: ['news', 'world news', 'breaking news', 'global', 'current events'],
  authors: [{ name: 'WorldPulse' }],
  openGraph: {
    title: 'WorldPulse — Global News Dashboard',
    description: 'Stay ahead of the world. Real-time news from every corner of the globe.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
