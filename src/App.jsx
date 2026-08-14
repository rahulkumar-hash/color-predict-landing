import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TopMarquee from './components/TopMarquee';
import FloatingParticles from './components/FloatingParticles';
import FixedBottomBar from './components/FixedBottomBar';
import DownloadModal from './components/DownloadModal';

import HeroSection from './sections/HeroSection';
import TrustBadgesSection from './sections/TrustBadgesSection';
import ColorMarketsSection from './sections/ColorMarketsSection';
import GameRatesSection from './sections/GameRatesSection';
import HowToPlaySection from './sections/HowToPlaySection';
import LiveWinnersTicker from './sections/LiveWinnersTicker';
import FAQSection from './sections/FAQSection';
import FooterSection from './sections/FooterSection';
import { SITE_CONFIG } from './theme/themeConfig';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [config, setConfig] = useState(SITE_CONFIG);

  useEffect(() => {
    // Attempt to fetch real-time public config from backend if connected
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';
    fetch(`${apiBase}/game/config`)
      .then(res => res.json())
      .then(json => {
        if (json?.data) {
          const d = json.data;
          setConfig(prev => ({
            ...prev,
            name: d.appName || prev.name,
            version: d.apkVersion || prev.version,
            downloadUrl: d.apkUrl ? (d.apkUrl.startsWith('http') ? d.apkUrl : `http://localhost:5000${d.apkUrl}`) : prev.downloadUrl,
            supportWhatsapp: d.supportWhatsapp || prev.supportWhatsapp,
            supportEmail: d.supportEmail || prev.supportEmail
          }));
        }
      })
      .catch(() => {
        // Fallback to static theme config seamlessly
      });
  }, []);

  const handleOpenDownload = () => setDownloadModalOpen(true);
  const handleCloseDownload = () => setDownloadModalOpen(false);

  return (
    <div className="min-h-screen bg-navy-950 text-white font-poppins relative selection:bg-gold-primary selection:text-navy-950">
      {/* Floating Micro Particles background */}
      <FloatingParticles />

      {/* Top Header Navigation */}
      <Header onOpenDownload={handleOpenDownload} />

      {/* Marquee Ticker */}
      <TopMarquee />

      {/* Main Landing Page Sections */}
      <main className="relative z-10">
        <HeroSection onOpenDownload={handleOpenDownload} config={config} />
        <TrustBadgesSection />
        <ColorMarketsSection onOpenDownload={handleOpenDownload} />
        <LiveWinnersTicker />
        <GameRatesSection />
        <HowToPlaySection onOpenDownload={handleOpenDownload} />
        <FAQSection />
      </main>

      {/* Footer */}
      <FooterSection onOpenDownload={handleOpenDownload} config={config} />

      {/* Sticky Bottom Bar on mobile/scroll */}
      <FixedBottomBar onOpenDownload={handleOpenDownload} config={config} />

      {/* Download App Modal */}
      <DownloadModal isOpen={downloadModalOpen} onClose={handleCloseDownload} config={config} />
    </div>
  );
}
