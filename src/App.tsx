import { useState } from "react";
import type { Analysis } from "./types";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

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

const App: React.FC = () => {
  const [analyses] = useState<Analysis[]>(sampleAnalyses);
  const [activeId, setActiveId] = useState<number>(1);
  const [urlInput, setUrlInput] = useState<string>('');

  const activeAnalysis = analyses.find(a => a.id === activeId);

  const handleAnalyze = (): void => {
    if (urlInput.trim()) {
      alert(`Analyzing: ${urlInput}`);
      // In a real app, you would trigger the analysis here

    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        analyses={analyses}
        activeId={activeId}
        onSelectAnalysis={setActiveId}
        urlInput={urlInput}
        setUrlInput={setUrlInput}
        onAnalyze={handleAnalyze}
      />

      <MainContent analysis={activeAnalysis} />
    </div>
  );
};

export default App;