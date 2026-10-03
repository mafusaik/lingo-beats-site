/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlayerConceptShowcase } from './components/PlayerConceptShowcase';
import { Methodology } from './components/Methodology';
import { TracksShowcase } from './components/TracksShowcase';
import { SubscriptionSection } from './components/SubscriptionSection';
import { FaqSection } from './components/FaqSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SupportPage } from './pages/SupportPage';
import { Smartphone, Sparkles, Headphones } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Support direct route matching whether at domain root or under /repo-name/
  const normalizedPath = currentPath.toLowerCase();
  if (normalizedPath.includes('/privacy')) {
    return <PrivacyPage />;
  }
  if (normalizedPath.includes('/terms')) {
    return <TermsPage />;
  }
  if (normalizedPath.includes('/support')) {
    return <SupportPage />;
  }

  return (
    <div className="min-h-screen bg-[#0b171f] text-slate-100 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with value proposition and screenshot preview */}
        <Hero />

        {/* Feature Highlights Banner */}
        <section id="about" className="py-12 border-y border-white/10 bg-[#0e202a]/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                <div className="rounded-xl bg-amber-400/10 p-3 text-amber-400">
                  <Headphones className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Параллельный звук</h4>
                  <p className="mt-1 text-xs text-slate-400">Синхронная подача аудио без перерывов на словарь</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                <div className="rounded-xl bg-teal-400/10 p-3 text-teal-400">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Караоке-субтитры</h4>
                  <p className="mt-1 text-xs text-slate-400">Синхронная строка на русском и английском</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                <div className="rounded-xl bg-sky-400/10 p-3 text-sky-400">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Офлайн на смартфоне</h4>
                  <p className="mt-1 text-xs text-slate-400">Скачивайте треки в память устройства для поездок</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interface & Player Feature Overview from real screenshot */}
        <PlayerConceptShowcase />

        {/* 4 Core Principles of the Bilingual Listening Method */}
        <Methodology />

        {/* Informational Tracks Catalogue from screenshot 2 */}
        <TracksShowcase />

        {/* App Store Compliant Subscription & Pricing Disclosures */}
        <SubscriptionSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* App Stores & Download Section */}
        <DownloadSection />
      </main>

      {/* Footer with copyright © 2026 GlazerDev. All rights reserved. */}
      <Footer />

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
