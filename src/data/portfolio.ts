/**
 * Central portfolio data — every fact on the site comes from this file.
 * Hridoy Dhor: web developer building landing pages, online shops and
 * Android apps for small businesses in Chittagong, Bangladesh.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Hridoy Dhor',
  displayName: 'Hridoy Dhor',
  firstName: 'HRIDOY',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A HRIDOY ORIGINAL',
  role: 'Web Developer',
  tagline: ['Web Developer', 'Digital Creator', 'Landing Pages · Online Shops · Apps'],
  intro:
    'I build modern landing pages, online shops and custom Android apps for small businesses. Every website comes with an easy admin panel, WhatsApp ordering and a 24/7 AI support assistant, so owners can run their shop with confidence.',
  location: 'Chittagong, Bangladesh',
  links: {
    whatsapp: 'https://is.gd/w29tLj',
    github: 'https://github.com/Hridoysoha',
    portfolio: 'https://hridoy-portfolio.pages.dev',
  },
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Hridoy Dhor',
  },
  interests: ['Landing Pages', 'Online Shops', 'Android Apps', 'AI Assistants'],
};

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Live website URL — shown as a "Live Site" button. */
  live?: string;
  /** Optional repository URL — shown as a "GitHub" button when present. */
  github?: string;
  /** Optional screenshot shown behind the generated key art. */
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const standardMetrics: Metric[] = [
  { value: 'Live', label: 'online now' },
  { value: '24/7', label: 'AI support assistant' },
  { value: '1-Tap', label: 'WhatsApp ordering' },
  { value: 'Admin', label: 'self-managed panel' },
];

const standardFeatures = [
  'Product photos & prices',
  'One-tap WhatsApp order button',
  'Admin panel — update products & prices',
  '24/7 AI support assistant',
  'Fast, mobile-first design',
];

export const projects: Project[] = [
  {
    id: 'jilani-cosmetics',
    title: 'Jilani Cosmetics',
    year: '2026',
    genre: 'Cosmetics · Online Shop',
    logline: 'An online shop for a Chittagong cosmetics store — products, prices and orders straight to WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'Firebase'],
    build: [
      'Designed and built a complete online shop for Jilani Cosmetics with product photos, prices and a clean catalogue customers can browse on any phone.',
      'Added one-tap WhatsApp ordering, a self-managed admin panel (the owner updates products and prices himself) and a 24/7 AI support assistant.',
    ],
    features: standardFeatures,
    metrics: standardMetrics,
    live: 'https://jilani-cosmetics.pages.dev',
    image: '/assets/projects/jilani-cosmetics.jpg',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'safa-marwa-borka-house',
    title: 'Safa Marwa Borka House',
    year: '2026',
    genre: 'Fashion · Borka & Abaya',
    logline: 'A showcase and ordering site for a borka house — collections presented beautifully, orders in one tap.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare'],
    build: [
      'Built a showcase website for Safa Marwa Borka House presenting their borka and abaya collections with polished product photography.',
      'Added one-tap WhatsApp ordering, an easy admin panel and a 24/7 AI support assistant for customer questions.',
    ],
    features: standardFeatures,
    metrics: standardMetrics,
    live: 'https://safa-marwa-borka-house.pages.dev',
    image: '/assets/projects/safa-marwa-borka-house.jpg',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'fashion-ghor',
    title: 'Fashion Ghor',
    year: '2026',
    genre: 'Fashion · Clothing',
    logline: 'A clothing shop website with product galleries, prices and WhatsApp ordering built in.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare'],
    build: [
      'Designed and built the Fashion Ghor clothing website with product galleries that load fast and look sharp on mobile.',
      'Added one-tap WhatsApp ordering, a self-managed admin panel and a 24/7 AI support assistant.',
    ],
    features: standardFeatures,
    metrics: standardMetrics,
    live: 'https://fashion-ghor.pages.dev',
    image: '/assets/projects/fashion-ghor.jpg',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'rongberong-cosmetics',
    title: 'Rongberong Cosmetics',
    year: '2026',
    genre: 'Cosmetics & Gifts · Online Shop',
    logline: 'A colourful online shop for cosmetics and gifts with an easy self-managed admin panel.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare'],
    build: [
      'Built a colourful online shop for Rongberong Cosmetics — cosmetics and gift products presented with photos and prices.',
      'Added one-tap WhatsApp ordering, an admin panel the owner manages himself and a 24/7 AI support assistant.',
    ],
    features: standardFeatures,
    metrics: standardMetrics,
    live: 'https://rongberong-cosmetics.pages.dev',
    image: '/assets/projects/rongberong-cosmetics.jpg',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'rongdhonu-fashion',
    title: 'Rongdhonu Fashion',
    year: '2026',
    genre: 'AI Demo · Fashion Shop',
    logline: 'A demo fashion shop run by a real AI assistant that answers customers and takes orders in chat.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'AI Assistant'],
    build: [
      'Built Rongdhonu Fashion as a working demo shop with a real AI support assistant — it answers customer questions in natural Bengali and collects orders in the chat.',
      'Orders flow straight to WhatsApp, showing exactly how the AI assistant works on every client website.',
    ],
    features: standardFeatures,
    metrics: standardMetrics,
    live: 'https://rongdhonu-ai-demo.netlify.app',
    image: '/assets/projects/rongdhonu-fashion.jpg',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'wear-fashion-collection',
    title: 'Wear Fashion Collection',
    year: '2026',
    genre: "Women's Fashion · Online Shop",
    logline: "An online shop for a women's fashion collection — browse, pick, and order on WhatsApp.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare'],
    build: [
      'Designed and built an online shop for Wear Fashion Collection with an elegant catalogue of women\'s fashion.',
      'Added one-tap WhatsApp ordering, a self-managed admin panel and a 24/7 AI support assistant.',
    ],
    features: standardFeatures,
    metrics: standardMetrics,
    live: 'https://wearfashioncollectionbd.netlify.app',
    image: '/assets/projects/wear-fashion-collection.jpg',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'six-live',
    title: '6 Live Websites',
    org: 'Client & Demo Sites',
    detail: 'Six real websites designed, built and put live on the web — cosmetics, fashion and gift shops.',
    laurel: 'Live & Online',
  },
  {
    id: 'ai-assistant',
    title: 'AI Support Assistant',
    org: 'On Every Website',
    detail: 'Every site ships with a 24/7 AI assistant that answers customer questions and collects orders in chat.',
    laurel: '24/7 Assistant',
  },
  {
    id: 'admin-panel',
    title: 'Admin Panel',
    org: 'Client-Managed',
    detail: 'Owners update their own products, photos and prices from a simple panel — no technical skill needed.',
    laurel: 'Self-Managed',
  },
  {
    id: 'whatsapp-ordering',
    title: 'WhatsApp Ordering',
    org: 'Built Into Every Site',
    detail: 'Customers order in one tap and the order lands directly in the shop\'s WhatsApp, ready to confirm.',
    laurel: '1-Tap Orders',
  },
  {
    id: 'android-apps',
    title: 'Android Apps',
    org: 'Custom Builds',
    detail: 'Custom Android apps for shops and services, built around each business and its customers.',
    laurel: 'Custom Apps',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'services',
    title: 'Services',
    subtitle: 'What I build for clients',
    skills: [
      { name: 'Landing Page Website', mono: 'Lp', note: 'Primary' },
      { name: 'Online Shop / E-commerce', mono: 'Sh' },
      { name: 'Admin Panel', mono: 'Ad' },
      { name: 'AI Live Support Assistant', mono: 'Ai' },
      { name: 'Custom Android App', mono: 'An' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
    ],
  },
  {
    id: 'platform',
    title: 'Platform & Tools',
    subtitle: 'Hosting, data & delivery',
    skills: [
      { name: 'Cloudflare', mono: 'Cf' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'WhatsApp Ordering', mono: 'Wa' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill shows up across the live projects.
 */
export const skillEvidence: Record<string, string[]> = {
  'Landing Page Website': ['Fashion Ghor', 'Wear Fashion Collection'],
  'Online Shop / E-commerce': ['Jilani Cosmetics', 'Rongberong Cosmetics'],
  'Admin Panel': ['Jilani Cosmetics', 'Rongberong Cosmetics'],
  'AI Live Support Assistant': ['Rongdhonu Fashion', 'Jilani Cosmetics'],
  'Custom Android App': ['Custom builds for shops & services'],
  HTML: ['Jilani Cosmetics', 'Fashion Ghor', 'Wear Fashion Collection'],
  CSS: ['Safa Marwa Borka House', 'Rongberong Cosmetics'],
  JavaScript: ['Jilani Cosmetics', 'Rongdhonu Fashion', 'Fashion Ghor'],
  React: ['Portfolio websites & interfaces'],
  Cloudflare: ['Jilani Cosmetics', 'Safa Marwa Borka House', 'Fashion Ghor'],
  Firebase: ['Jilani Cosmetics'],
  'Git / GitHub': ['All six live websites'],
  'WhatsApp Ordering': ['Every live website'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Setting Up Shop',
    period: 'The Services',
    synopsis: 'What Hridoy builds for small businesses — websites and apps that turn visitors into orders.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Landing Page',
        description: 'One-page websites for Facebook and Instagram ads that turn visitors into WhatsApp orders.',
        tags: ['Landing Page', 'WhatsApp Orders'],
        runtime: 'Service',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Online Shop',
        description: 'Full product catalogues with photos and prices, plus an admin panel the owner controls.',
        tags: ['E-commerce', 'Admin Panel'],
        runtime: 'Service',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'The Assistant',
        description: 'A 24/7 AI support assistant on every site — answering customers and collecting orders while the owner sleeps.',
        tags: ['AI Assistant', '24/7'],
        runtime: 'Service',
        palette: violet,
      },
      {
        code: 'S01 E04',
        title: 'The App',
        description: 'Custom Android apps for shops and services, built around each business.',
        tags: ['Android', 'Custom App'],
        runtime: 'Service',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The Originals',
    period: 'Live Now',
    synopsis: 'Six real websites — designed, built and live on the web.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Cosmetics, Covered',
        description: 'Jilani Cosmetics and Rongberong Cosmetics — two beauty shops selling online with admin panels and WhatsApp ordering.',
        tags: ['Jilani Cosmetics', 'Rongberong Cosmetics'],
        runtime: 'Live now',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'Fashion Forward',
        description: 'Safa Marwa Borka House and Fashion Ghor — fashion collections presented beautifully, with one-tap WhatsApp orders.',
        tags: ['Safa Marwa Borka House', 'Fashion Ghor'],
        runtime: 'Live now',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'The AI Demo',
        description: 'Rongdhonu Fashion — a demo shop run by a real AI assistant — alongside the Wear Fashion Collection store.',
        tags: ['Rongdhonu Fashion', 'Wear Fashion Collection'],
        runtime: 'Live now',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary service', title: 'Landing Pages', detail: 'One-page sites that sell', palette: amber },
  { label: 'The AI demo', title: 'Rongdhonu Fashion', detail: 'A shop with a real AI assistant', palette: crimson },
  { label: 'Client site', title: 'Jilani Cosmetics', detail: 'Cosmetics shop · Chittagong', palette: ocean },
  { label: 'Client site', title: 'Safa Marwa', detail: 'Borka house · live now', palette: violet },
  { label: 'Client site', title: 'Fashion Ghor', detail: 'Clothing shop · live now', palette: jade },
  { label: 'Client site', title: 'Rongberong', detail: 'Cosmetics & gifts · live now', palette: crimson },
  { label: 'Client site', title: 'Wear Fashion', detail: "Women's fashion · live now", palette: amber },
  { label: 'Always included', title: 'Admin Panel', detail: 'Clients update their own sites', palette: ocean },
  { label: 'Always included', title: 'WhatsApp Orders', detail: 'Orders land in WhatsApp', palette: jade },
  { label: 'Also building', title: 'Android Apps', detail: 'Custom apps for businesses', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Services',
    title: 'Websites that sell.',
    lines: ['Landing pages and online shops for small businesses', 'Admin panel · WhatsApp ordering · AI assistant'],
    chips: ['Landing Pages', 'Online Shops', 'Android Apps'],
  },
  {
    kicker: 'Projects',
    title: 'Six Originals',
    lines: ['Jilani Cosmetics — live online shop', 'Safa Marwa Borka House · Fashion Ghor', 'Rongberong Cosmetics · Wear Fashion Collection'],
  },
  {
    kicker: 'The AI demo',
    title: 'Rongdhonu Fashion',
    lines: ['A demo shop with a real AI support assistant', 'It answers customers and takes orders in chat'],
  },
  {
    kicker: 'Standard on every site',
    title: 'Built In',
    lines: ['Easy admin panel — update products & prices yourself', 'One-tap WhatsApp ordering', '24/7 AI support assistant'],
    chips: ['Admin Panel', 'WhatsApp', 'AI Assistant'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['More shops, more sales — one website at a time', 'Based in Chittagong, Bangladesh'],
  },
];

export type ProfileId = 'hridoy' | 'client' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'hridoy',
    name: 'Hridoy',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments'],
  },
  {
    id: 'client',
    name: 'Client',
    blurb: 'Work, services & contact first',
    color: '#4cc9ff',
    order: ['originals', 'skills', 'about', 'picks', 'moments', 'journey'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Who I am', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Live now`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the work', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Highlights', meta: `${achievements.length} Highlights`, palette: crimson },
};
