import React from 'react';
import { Download, MessageCircle, Send, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../theme/themeConfig';

export default function FooterSection({ onOpenDownload }) {
  return (
    <footer className="bg-navy-950/90 border-t border-gold-primary/20 pt-16 pb-28 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-primary via-gold-bright to-gold-dark p-0.5 shadow-gold-glow">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-orbitron font-black text-gold-bright text-base">
                  CP
                </div>
              </div>
              <span className="font-orbitron font-black text-lg text-gradient-gold">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              India's #1 Instant Color Prediction platform. Play games, check live results, and win payouts with 24/7 fast withdrawals!
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-rajdhani font-bold text-sm text-gold-bright uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#markets" className="hover:text-gold-bright transition-colors">Live Markets</a></li>
              <li><a href="#rates" className="hover:text-gold-bright transition-colors">Game Payout Rates</a></li>
              <li><a href="#how" className="hover:text-gold-bright transition-colors">How To Play Guide</a></li>
              <li><a href="#faq" className="hover:text-gold-bright transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Markets List */}
          <div className="space-y-3">
            <h4 className="font-rajdhani font-bold text-sm text-gold-bright uppercase tracking-wider">Prediction Rooms</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><span>Color Parity 1-Min</span></li>
              <li><span>Speed Color 30-Sec</span></li>
              <li><span>Sapre 3-Min Room</span></li>
              <li><span>Bcone VIP Market</span></li>
            </ul>
          </div>

          {/* Support & Download */}
          <div className="space-y-4">
            <h4 className="font-rajdhani font-bold text-sm text-gold-bright uppercase tracking-wider">App & Support</h4>
            <div className="space-y-2">
              <button
                onClick={onOpenDownload}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-poppins font-bold text-xs tracking-wide shadow-green-glow flex items-center justify-center gap-2 btn-touch"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD APK ({SITE_CONFIG.version})</span>
              </button>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-navy-850 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 font-poppins font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp 24/7 Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-3">
          <p className="text-[11px] text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Disclaimer: This platform is intended solely for users aged 18 and above. Please ensure compliance with local gaming and online skill prediction regulations in your region.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 font-medium">
            <span>&copy; 2026 {SITE_CONFIG.name}. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
