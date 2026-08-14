import React from 'react';
import { Flame, Zap } from 'lucide-react';
import { LIVE_MARKETS_DATA } from '../theme/themeConfig';

export default function TopMarquee() {
  return (
    <div className="mt-16 sm:mt-20 bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border-y border-gold-primary/30 py-2.5 overflow-hidden backdrop-blur-xl relative z-20 flex items-center shadow-lg">
      {/* Fixed News Flash Badge on Left */}
      

      {/* Smooth Continuous Right-To-Left News Flash Ticker Bar */}
      <div className="overflow-hidden flex-1 relative">
        <div className="animate-news-ticker">
          {/* Double array for continuous seamless infinite loop */}
          {[...LIVE_MARKETS_DATA, ...LIVE_MARKETS_DATA, ...LIVE_MARKETS_DATA].map((m, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 px-6 font-rajdhani font-extrabold text-xs sm:text-sm tracking-wide text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-gold-bright uppercase font-orbitron text-xs">{m.name}:</span>
              <span className="text-white font-mono bg-navy-950/80 px-2 py-0.5 rounded border border-slate-800">{m.open} → {m.close}</span>
              <span className="text-emerald-400 font-extrabold bg-emerald-500/20 px-2.5 py-0.5 rounded-full text-[10px] border border-emerald-500/30">
                LIVE ({m.interval})
              </span>
              <span className="text-gold-bright/60 font-black px-2 text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
