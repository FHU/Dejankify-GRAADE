interface Scores {
  performance: number;
  seo: number;
  accessibility: number;
  overall: number;
}

interface Analysis {
  id: number;
  url: string;
  timestamp: string;
  scores: Scores;
  title: string;
  fullUrl: string;
}

interface Metric {
  title: string;
  icon: string;
  value: string;
  unit: string;
  target: string;
}

type IssueSeverity = 'critical' | 'warning' | 'info';

interface Issue {
  severity: IssueSeverity;
  title: string;
  description: string;
  recommendation: string;
}

interface IssuesCollection {
  performance: Issue[];
  seo: Issue[];
  accessibility: Issue[];
  bestPractices: Issue[];
}

type ScoreColorClass = 'excellent' | 'good' | 'fair' | 'poor';

// Sample data
const sampleAnalyses: Analysis[] = [
  {
    id: 1,
    url: 'example-store.com',
    timestamp: '2 minutes ago',
    scores: { performance: 52, seo: 78, accessibility: 85, overall: 67 },
    title: 'Example Store - Online Retail Shop',
    fullUrl: 'https://example-store.com',
  },
  {
    id: 2,
    url: 'myblog.io',
    timestamp: '1 hour ago',
    scores: { performance: 89, seo: 92, accessibility: 88, overall: 90 },
    title: 'My Personal Blog',
    fullUrl: 'https://myblog.io',
  },
  {
    id: 3,
    url: 'startup-landing.com',
    timestamp: '3 hours ago',
    scores: { performance: 42, seo: 68, accessibility: 71, overall: 60 },
    title: 'Startup Landing Page',
    fullUrl: 'https://startup-landing.com',
  },
  {
    id: 4,
    url: 'portfolio-site.dev',
    timestamp: 'Yesterday',
    scores: { performance: 91, seo: 94, accessibility: 90, overall: 92 },
    title: 'Portfolio Site',
    fullUrl: 'https://portfolio-site.dev',
  },
  {
    id: 5,
    url: 'ecommerce-shop.store',
    timestamp: '2 days ago',
    scores: { performance: 73, seo: 81, accessibility: 76, overall: 77 },
    title: 'E-commerce Shop',
    fullUrl: 'https://ecommerce-shop.store',
  },
];

const sampleMetrics: Metric[] = [
  { title: 'First Contentful Paint', icon: '🎨', value: '3.2', unit: 's', target: '< 1.8s' },
  { title: 'Largest Contentful Paint', icon: '🖼️', value: '5.1', unit: 's', target: '< 2.5s' },
  { title: 'Total Blocking Time', icon: '⏱️', value: '890', unit: 'ms', target: '< 200ms' },
  { title: 'Cumulative Layout Shift', icon: '📐', value: '0.18', unit: '', target: '< 0.1' },
];
