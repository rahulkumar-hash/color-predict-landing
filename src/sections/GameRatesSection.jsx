import React from 'react';
import { IndianRupee, Sparkles, TrendingUp } from 'lucide-react';
import { GAME_RATES } from '../theme/themeConfig';

export default function GameRatesSection() {
  return (
    <section id="rates" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 bg-navy-900/40 border-y border-gold-primary/15">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-extrabold uppercase tracking-widest">
            <IndianRupee className="w-3.5 h-3.5 text-gold-bright" /> GAME RATES & MULTIPLIERS
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-gradient-gold uppercase">
            BEST WINNING PAYOUT RATES
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Transparent and highest payout rates in India. High returns on every prediction.
          </p>
        </div>

        {/* Rates Table Container */}
        <div className="bg-glass-card rounded-3xl overflow-hidden border border-gold-primary/30 shadow-gold-glow">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-navy-850 border-b border-gold-primary/20 text-gold-bright font-rajdhani font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                  <th className="py-4 px-6">Game Prediction Type</th>
                  <th className="py-4 px-6">Base Bid (₹)</th>
                  <th className="py-4 px-6">Payout Return (₹)</th>
                  <th className="py-4 px-6 text-right">Multiplier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-medium">
                {GAME_RATES.map((r, i) => (
                  <tr key={i} className="hover:bg-navy-800/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-bright shrink-0" />
                      <span>{r.type}</span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-300">₹{r.bid}</td>
                    <td className="py-4 px-6 font-mono font-bold text-emerald-400">{r.payout}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="px-3 py-1 rounded-full font-orbitron font-black text-xs bg-gold-primary/20 text-gold-bright border border-gold-primary/30 inline-block shadow-sm">
                        {r.multiplier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
