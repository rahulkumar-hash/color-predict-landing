import React from 'react';
import { Download, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../theme/themeConfig';

export default function Header({ onOpenDownload }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/85 backdrop-blur-xl border-b border-gold-primary/20 px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between shadow-2xl transition-all">
      {/* Brand Logo & Name */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gold-primary via-gold-bright to-gold-dark p-0.5 shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-orbitron font-black text-gold-bright text-base sm:text-lg">
            CP
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-orbitron font-black text-sm sm:text-xl tracking-tight text-gradient-gold">
            COLOR PREDICT
          </span>
          <span className="text-[9px] sm:text-xs text-emerald-400 font-semibold tracking-widest uppercase flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> OFFICIAL APP
          </span>
        </div>
      </a>

      {/* Center Tagline (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-2 font-rajdhani font-bold text-sm text-gold-light bg-navy-850/80 px-4 py-1.5 rounded-full border border-gold-primary/20 shadow-inner">
        <Sparkles className="w-4 h-4 text-gold-bright animate-spin" style={{ animationDuration: '6s' }} />
        <span>India's Most Trusted Color Prediction App</span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-poppins font-bold text-xs sm:text-sm hover:brightness-110 shadow-green-glow transition-all btn-touch"
        >
          <MessageCircle className="w-4 h-4 text-white fill-white" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <button
          onClick={onOpenDownload}
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-gold-primary via-gold-bright to-gold-dark text-navy-950 font-poppins font-extrabold text-xs sm:text-sm shadow-gold-glow animate-bounce-soft hover:animate-none hover:scale-105 transition-all btn-touch"
        >
          <Download className="w-4 h-4 text-navy-950 stroke-[3]" />
          <span>Download App</span>
        </button>
      </div>
    </header>
  );
}
