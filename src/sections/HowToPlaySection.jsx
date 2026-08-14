import React from 'react';
import { HelpCircle, Download, UserPlus, Dices, ArrowUpRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../theme/themeConfig';

export default function HowToPlaySection({ onOpenDownload }) {
  return (
    <section id="how" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-extrabold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-gold-bright" /> EASY GUIDE
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-gradient-gold uppercase">
            HOW TO PLAY & WIN IN 4 EASY STEPS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Start playing in under 1 minute from your mobile device.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((s, i) => (
            <div
              key={i}
              className="bg-glass-card bg-glass-card-hover rounded-3xl p-6 border border-gold-primary/20 flex flex-col justify-between text-center relative group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-gold-primary to-gold-dark text-navy-950 font-orbitron font-black text-xl flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform mb-4">
                {s.step}
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="font-rajdhani font-black text-lg text-white uppercase">{s.title}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{s.desc}</p>
              </div>

              {i === 0 && (
                <button
                  onClick={onOpenDownload}
                  className="w-full py-2.5 rounded-xl bg-gold-primary/20 hover:bg-gold-primary hover:text-navy-950 text-gold-bright text-xs font-extrabold transition-all border border-gold-primary/40 flex items-center justify-center gap-1 btn-touch"
                >
                  <Download className="w-3.5 h-3.5" /> Download App
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
