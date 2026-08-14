import React, { useState } from 'react';
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

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

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
        <HeroSection onOpenDownload={handleOpenDownload} />
        <TrustBadgesSection />
        <ColorMarketsSection onOpenDownload={handleOpenDownload} />
        <LiveWinnersTicker />
        <GameRatesSection />
        <HowToPlaySection onOpenDownload={handleOpenDownload} />
        <FAQSection />
      </main>

      {/* Footer */}
      <FooterSection onOpenDownload={handleOpenDownload} />

      {/* Sticky Bottom Bar on mobile/scroll */}
      <FixedBottomBar onOpenDownload={handleOpenDownload} />

      {/* Download App Modal */}
      <DownloadModal isOpen={downloadModalOpen} onClose={handleCloseDownload} />
    </div>
  );
}
