import { Article } from '@/types';

const now = Date.now();
const mins = (m: number) => new Date(now - m * 60 * 1000).toISOString();

export const mockArticles: Article[] = [
  // ── TECHNOLOGY ──────────────────────────────────────────────────────────────
  {
    id: 't1',
    title: "OpenAI's New Model Surpasses Human Expert Performance on Medical and Legal Benchmarks",
    description:
      'The latest AI model demonstrates unprecedented reasoning capabilities, achieving over 90% accuracy on bar exam questions and diagnosing rare diseases with greater precision than specialist physicians.',
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/ai-research/800/450',
    publishedAt: mins(18),
    source: { id: 'techcrunch', name: 'TechCrunch' },
    author: 'Sarah Chen',
    category: 'technology',
    region: 'us',
  },
  {
    id: 't2',
    title: 'Apple Announces Neural Engine Breakthrough: On-Device AI Without Cloud Dependency',
    description:
      "Apple's new Neural Engine chip processes large language models entirely on-device, promising privacy-first AI experiences across iPhone, Mac, and iPad.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/apple-chip/800/450',
    publishedAt: mins(45),
    source: { id: 'theverge', name: 'The Verge' },
    author: 'Marcus Williams',
    category: 'technology',
    region: 'us',
  },
  {
    id: 't3',
    title: 'Quantum Computing Firm Achieves 1,000-Qubit Milestone, Threatening Current Encryption Standards',
    description:
      'Researchers at a leading quantum computing company have demonstrated error-corrected computation at scale, a breakthrough that could fundamentally reshape cybersecurity.',
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/quantum/800/450',
    publishedAt: mins(90),
    source: { id: 'wired', name: 'WIRED' },
    author: 'Dr. Aisha Patel',
    category: 'technology',
    region: 'us',
  },
  {
    id: 't4',
    title: 'Samsung Reveals Rollable OLED Display That Expands From Phone to Tablet Size',
    description:
      "Samsung's latest innovation features a flexible rollable screen that seamlessly transitions between a compact 5-inch phone and a full 10-inch tablet within seconds.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/samsung-display/800/450',
    publishedAt: mins(150),
    source: { id: null, name: 'The Korea Times' },
    author: 'Ji-hoon Park',
    category: 'technology',
    region: 'asia',
  },
  {
    id: 't5',
    title: 'EU Passes Historic AI Act: Strict Regulations on High-Risk AI Systems Take Effect',
    description:
      "Europe's landmark AI regulation mandates transparency requirements, human oversight, and bans on biometric surveillance systems, setting a global precedent.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/eu-ai-law/800/450',
    publishedAt: mins(200),
    source: { id: null, name: 'Politico Europe' },
    author: 'Clara Hoffman',
    category: 'technology',
    region: 'eu',
  },

  // ── BUSINESS ────────────────────────────────────────────────────────────────
  {
    id: 'b1',
    title: 'Global Markets Surge as Inflation Data Shows Fastest Decline in Two Decades',
    description:
      'Wall Street rallied sharply as new consumer price data showed inflation cooling to 1.8%, below the Fed target for the first time since 2018, sparking expectations of rate cuts.',
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/markets-bull/800/450',
    publishedAt: mins(25),
    source: { id: 'wsj', name: 'Wall Street Journal' },
    author: 'Robert Kline',
    category: 'business',
    region: 'us',
  },
  {
    id: 'b2',
    title: 'Amazon and Microsoft in Talks Over $80 Billion Cloud Infrastructure Merger',
    description:
      "In a deal that would reshape the tech landscape, both companies are exploring a joint venture for hyperscale data centers to counter growing competition from Chinese cloud providers.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/cloud-merger/800/450',
    publishedAt: mins(70),
    source: { id: 'ft', name: 'Financial Times' },
    author: 'Emma Hartley',
    category: 'business',
    region: 'us',
  },
  {
    id: 'b3',
    title: "Africa's Fintech Boom: Mobile Payments Volume Tops $1 Trillion for First Time",
    description:
      "Sub-Saharan Africa's mobile money ecosystem has crossed the trillion-dollar milestone, driven by platforms like M-Pesa and Wave transforming financial inclusion across the continent.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/africa-fintech/800/450',
    publishedAt: mins(180),
    source: { id: null, name: 'Quartz Africa' },
    author: 'Amara Diallo',
    category: 'business',
    region: 'africa',
  },
  {
    id: 'b4',
    title: "BRICS Nations Launch New Currency Framework to Reduce Dollar Dependence",
    description:
      "The BRICS bloc announced a digital settlement currency backed by a basket of member currencies and commodities, signaling a structural shift in global trade finance.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/brics-currency/800/450',
    publishedAt: mins(320),
    source: { id: null, name: 'Reuters' },
    author: 'Priya Sharma',
    category: 'business',
    region: 'world',
  },

  // ── SPORTS ──────────────────────────────────────────────────────────────────
  {
    id: 's1',
    title: 'Real Madrid Defeats Manchester City 3–1 in Electrifying Champions League Final',
    description:
      "Kylian Mbappé delivered a hat-trick in what analysts are calling the greatest Champions League final in history, with 90,000 fans at Wembley witnessing a football masterclass.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/champions-league/800/450',
    publishedAt: mins(10),
    source: { id: null, name: 'ESPN FC' },
    author: 'Antonio Rossi',
    category: 'sports',
    region: 'eu',
  },
  {
    id: 's2',
    title: "Simone Biles Sets New World Record at Paris Diamond League, Defying Age at 27",
    description:
      "The gymnastics legend earned a perfect 10 on the floor exercise — a score not awarded in international competition for 15 years — leaving judges and audiences speechless.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/gymnastics-biles/800/450',
    publishedAt: mins(55),
    source: { id: null, name: 'Sports Illustrated' },
    author: 'Tanya Brooks',
    category: 'sports',
    region: 'eu',
  },
  {
    id: 's3',
    title: "NBA Playoffs: Boston Celtics Clinch Title in 7-Game Thriller Against Golden State",
    description:
      "Jayson Tatum's 48-point performance in Game 7 sealed a historic championship for Boston, giving the Celtics their 18th NBA title and breaking their tie with the Los Angeles Lakers.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/nba-celtics/800/450',
    publishedAt: mins(120),
    source: { id: null, name: 'The Athletic' },
    author: 'Derrick Johnson',
    category: 'sports',
    region: 'us',
  },
  {
    id: 's4',
    title: "Formula 1: Verstappen Breaks Schumacher's All-Time Wins Record at Suzuka",
    description:
      "Max Verstappen claimed his 92nd Formula 1 victory at the Japanese Grand Prix, surpassing Michael Schumacher's long-standing record in front of an emotional crowd.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/f1-record/800/450',
    publishedAt: mins(280),
    source: { id: null, name: 'Autosport' },
    author: 'James Hunt Jr.',
    category: 'sports',
    region: 'asia',
  },

  // ── SCIENCE ─────────────────────────────────────────────────────────────────
  {
    id: 'sc1',
    title: 'James Webb Telescope Captures First Direct Image of Earth-Like Planet in Habitable Zone',
    description:
      "NASA's James Webb Space Telescope has photographed a rocky exoplanet 40 light-years away showing signs of water vapor in its atmosphere — the most promising candidate for extraterrestrial life yet.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/exoplanet-webb/800/450',
    publishedAt: mins(30),
    source: { id: null, name: 'NASA Jet Propulsion Lab' },
    author: 'Dr. Maria Santos',
    category: 'science',
    region: 'us',
  },
  {
    id: 'sc2',
    title: 'Scientists Reverse Alzheimer\'s Cognitive Decline in Human Trial: "A New Dawn"',
    description:
      "A Phase III clinical trial of a new gene therapy reversed measurable cognitive decline in 73% of early-stage Alzheimer's patients, with some showing near-full memory restoration.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/alzheimers-cure/800/450',
    publishedAt: mins(95),
    source: { id: null, name: 'Nature Medicine' },
    author: 'Prof. Hiroshi Tanaka',
    category: 'science',
    region: 'asia',
  },
  {
    id: 'sc3',
    title: 'Deep-Sea Expedition Discovers 50 New Species in the Mariana Trench',
    description:
      "An international team of marine biologists using autonomous submarines at depths of 11,000 meters has catalogued half a century's worth of new species in a single three-week expedition.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/deep-sea/800/450',
    publishedAt: mins(240),
    source: { id: null, name: 'National Geographic' },
    author: 'Dr. Lena Vasquez',
    category: 'science',
    region: 'world',
  },
  {
    id: 'sc4',
    title: "Nuclear Fusion Reactor Achieves Net Energy Gain for 100 Consecutive Days",
    description:
      "The ITER project in France reports consistent net-positive fusion energy output over 100 days, crossing the threshold from scientific proof of concept to engineering reality.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/fusion-energy/800/450',
    publishedAt: mins(350),
    source: { id: null, name: 'Science' },
    author: 'Dr. Yves Moreau',
    category: 'science',
    region: 'eu',
  },

  // ── HEALTH ──────────────────────────────────────────────────────────────────
  {
    id: 'h1',
    title: 'WHO Approves mRNA Cancer Vaccine Showing 94% Efficacy Against Triple-Negative Breast Cancer',
    description:
      "A universal mRNA vaccine targeting specific tumor proteins has received emergency approval after trials showed near-complete remission in the most aggressive form of breast cancer.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/cancer-vaccine/800/450',
    publishedAt: mins(40),
    source: { id: null, name: 'The Lancet' },
    author: 'Dr. Fatima Al-Rashid',
    category: 'health',
    region: 'world',
  },
  {
    id: 'h2',
    title: 'Study Links Ultra-Processed Food Consumption to 30% Higher Risk of Early Mortality',
    description:
      "A 20-year study tracking 500,000 individuals across 12 countries found that those consuming more than 4 servings of ultra-processed foods daily faced significantly elevated mortality risks.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/processed-food/800/450',
    publishedAt: mins(160),
    source: { id: null, name: 'JAMA Internal Medicine' },
    author: 'Dr. Elena Kovač',
    category: 'health',
    region: 'eu',
  },
  {
    id: 'h3',
    title: 'Mental Health Crisis: Youth Anxiety Rates Triple Since 2015 Across Developed Nations',
    description:
      "New UNICEF data reveals an alarming 300% increase in clinically significant anxiety among teenagers, with researchers pointing to social media exposure and academic pressure as primary drivers.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/mental-health-youth/800/450',
    publishedAt: mins(290),
    source: { id: null, name: 'UNICEF' },
    author: 'Dr. Priya Mehta',
    category: 'health',
    region: 'world',
  },

  // ── ENTERTAINMENT ────────────────────────────────────────────────────────────
  {
    id: 'e1',
    title: "Cannes Film Festival: Korean Director's Epic Wins Palme d'Or in Unanimous Decision",
    description:
      "Park Chan-wook's three-hour masterpiece exploring colonial memory and intergenerational trauma received a standing ovation lasting 18 minutes — the longest in Cannes history.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/cannes-film/800/450',
    publishedAt: mins(35),
    source: { id: null, name: 'Variety' },
    author: 'Sophie Laurent',
    category: 'entertainment',
    region: 'eu',
  },
  {
    id: 'e2',
    title: "Taylor Swift's Eras Tour Film Becomes All-Time Highest-Grossing Concert Film",
    description:
      "The extended director's cut of the concert film has surpassed $1 billion in global box office revenue, overtaking 'This Is It' by a historic margin with no signs of slowing.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/taylor-concert/800/450',
    publishedAt: mins(110),
    source: { id: null, name: 'Billboard' },
    author: 'Chris Monroe',
    category: 'entertainment',
    region: 'us',
  },
  {
    id: 'e3',
    title: "Netflix's AI-Generated Drama Sparks Industry Debate Over Creative Authenticity",
    description:
      "The platform's first fully AI-scripted and animated series drew 50 million views in its first week, igniting fierce debate about creativity, authorship, and writer compensation.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/netflix-ai-show/800/450',
    publishedAt: mins(210),
    source: { id: null, name: 'The Hollywood Reporter' },
    author: 'Rebecca Cole',
    category: 'entertainment',
    region: 'us',
  },

  // ── POLITICS ─────────────────────────────────────────────────────────────────
  {
    id: 'p1',
    title: 'G20 Summit Reaches Landmark Climate Agreement: Net-Zero Carbon by 2045',
    description:
      "All 20 member nations signed a binding treaty committing to net-zero emissions by 2045, backed by a $5 trillion green transition fund — the largest climate commitment in history.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/g20-climate/800/450',
    publishedAt: mins(50),
    source: { id: null, name: 'Reuters' },
    author: 'Helena Fischer',
    category: 'politics',
    region: 'world',
  },
  {
    id: 'p2',
    title: 'Latin America Summit: Seven Nations Form New Economic and Defense Alliance',
    description:
      "Brazil, Mexico, Colombia, Argentina, Chile, Peru, and Uruguay have established the ALBA-2 pact, a new multilateral framework covering trade, security, and digital infrastructure.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/latam-summit/800/450',
    publishedAt: mins(130),
    source: { id: null, name: 'El País' },
    author: 'Rodrigo Mendoza',
    category: 'politics',
    region: 'latam',
  },
  {
    id: 'p3',
    title: 'UK General Election: Reform Party Wins Record Seats in Historic Political Earthquake',
    description:
      "Britain's political landscape was reshaped overnight as Reform secured 187 seats, ending the two-party system that had dominated Westminster for over a century.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/uk-election/800/450',
    publishedAt: mins(250),
    source: { id: null, name: 'BBC News' },
    author: 'James Thornton',
    category: 'politics',
    region: 'gb',
  },
  {
    id: 'p4',
    title: "Middle East Peace Talks Resume in Oslo: First Direct Negotiations in Eight Years",
    description:
      "Norwegian-mediated talks have brought regional leaders back to the table after an eight-year hiatus, with preliminary agreements on humanitarian corridors already signed.",
    content: null,
    url: '#',
    urlToImage: 'https://picsum.photos/seed/peace-talks/800/450',
    publishedAt: mins(400),
    source: { id: null, name: 'Al Jazeera' },
    author: 'Layla Hassan',
    category: 'politics',
    region: 'mideast',
  },
];

export function filterArticles(
  articles: Article[],
  category: string,
  region: string,
  query: string
): Article[] {
  return articles.filter((a) => {
    const matchCategory = category === 'all' || a.category === category;
    const matchRegion = region === 'world' || a.region === region;
    const matchQuery =
      !query ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.description.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchRegion && matchQuery;
  });
}
