import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Clock, Sparkles, Trophy, Download, CheckCircle2, Zap } from 'lucide-react';
import { LIVE_MARKETS_DATA } from '../theme/themeConfig';

export default function ColorMarketsSection({ onOpenDownload }) {
  const [seconds, setSeconds] = useState(48);
  const [periodCounter, setPeriodCounter] = useState(492);
  const [liveNotification, setLiveNotification] = useState(null);

  const [historyResults, setHistoryResults] = useState([
    { period: "491", number: 7, color: "green" },
    { period: "490", number: 0, color: "violet" },
    { period: "489", number: 2, color: "red" },
    { period: "488", number: 9, color: "green" },
    { period: "487", number: 5, color: "violet" },
    { period: "486", number: 4, color: "red" },
    { period: "485", number: 3, color: "green" },
    { period: "484", number: 8, color: "red" },
    { period: "483", number: 1, color: "green" },
  ]);

  // Real-time period countdown & automatic result resolution engine
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 1) return prev - 1;

        // Period complete! Resolve round with randomized winner result
        const num = Math.floor(Math.random() * 10);
        let color = 'green';
        if (num === 0 || num === 5) color = 'violet';
        else if (num % 2 === 0) color = 'red';

        const newPeriodStr = String(periodCounter);
        setHistoryResults((h) => [{ period: newPeriodStr, number: num, color }, ...h.slice(0, 10)]);
        setPeriodCounter((p) => p + 1);

        return 60;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [periodCounter]);

  // Periodic Random Winner Notification Popup
  useEffect(() => {
    const names = ["rahul_****99", "priya_****42", "vikram_****87", "amit_****34", "suresh_****55", "ankit_****18"];
    const games = ["Green 2x", "Violet 4.5x", "Red 2x", "Number 7 (9x)", "Number 3 (9x)"];
    const amounts = ["₹2,400", "₹4,500", "₹9,000", "₹18,000", "₹27,000"];

    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      const game = games[Math.floor(Math.random() * games.length)];
      const amount = amounts[Math.floor(Math.random() * amounts.length)];

      setLiveNotification({ name, game, amount });

      setTimeout(() => setLiveNotification(null), 4000);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const activePeriodId = `20260814${periodCounter}`;

  return (
    <section id="markets" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-extrabold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-gold-bright" /> REAL-TIME PERIOD ENGINE
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-gradient-gold uppercase">
            1-MINUTE COLOR PREDICTION ROOMS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Live period countdown engine with 1-tap color & number selection.
          </p>
        </div>

        {/* Live Period & Timer Showcase Card */}
        <div className="bg-glass-card rounded-3xl p-6 sm:p-8 border border-gold-primary/30 shadow-gold-glow relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Active Period ID</span>
              <span className="font-mono font-black text-xl sm:text-2xl text-gold-bright tracking-wider block">
                #{activePeriodId}
              </span>
            </div>

            {/* Countdown Badge */}
            <div className="flex items-center gap-3 bg-navy-850 px-5 py-2.5 rounded-2xl border border-gold-primary/30 shadow-inner">
              <Clock className="w-5 h-5 text-gold-bright animate-spin" style={{ animationDuration: '8s' }} />
              <div className="text-right">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Count Down</span>
                <span className="font-mono font-black text-2xl text-emerald-400">
                  00:{seconds < 10 ? `0${seconds}` : seconds}
                </span>
              </div>
            </div>
          </div>

          {/* Color Selection Action Buttons Preview */}
          <div className="py-8 space-y-6">
            <span className="text-xs font-extrabold text-slate-300 uppercase tracking-wider text-center block">
              Predict Winning Color for Payout
            </span>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto">
              <button
                onClick={onOpenDownload}
                className="py-4 px-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-orbitron font-black text-sm sm:text-base shadow-green-glow hover:scale-105 btn-touch transition-all flex flex-col items-center gap-1"
              >
                <span>GREEN</span>
                <span className="text-[10px] font-poppins opacity-90">2.0x Payout</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="py-4 px-3 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 text-white font-orbitron font-black text-sm sm:text-base shadow-violet-glow hover:scale-105 btn-touch transition-all flex flex-col items-center gap-1"
              >
                <span>VIOLET</span>
                <span className="text-[10px] font-poppins opacity-90">4.5x Payout</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="py-4 px-3 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white font-orbitron font-black text-sm sm:text-base shadow-red-glow hover:scale-105 btn-touch transition-all flex flex-col items-center gap-1"
              >
                <span>RED</span>
                <span className="text-[10px] font-poppins opacity-90">2.0x Payout</span>
              </button>
            </div>

            {/* Lucky Numbers (0-9) Selector Grid */}
            <div className="pt-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center block mb-3">
                Or Pick Exact Number (9.0x Payout Multiplier)
              </span>
              <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={onOpenDownload}
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-navy-850 hover:bg-gold-primary hover:text-navy-950 border border-slate-700 font-orbitron font-black text-sm text-slate-200 transition-all btn-touch shadow-md flex items-center justify-center"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Period History Strip */}
          <div className="border-t border-slate-800 pt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Recent Winner Records (Auto-updating)
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> LIVE SYNC
              </span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <AnimatePresence>
                {historyResults.map((r, i) => (
                  <motion.div
                    key={`${r.period}-${i}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-1 bg-navy-850 p-2.5 rounded-xl border border-slate-800 shrink-0 shadow-md"
                  >
                    <span className="text-[10px] font-mono text-slate-400">#{r.period}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-orbitron font-bold text-xs text-white shadow-md ${
                        r.color === 'green' ? 'bg-emerald-600 border border-emerald-400 shadow-green-glow' :
                        r.color === 'violet' ? 'bg-purple-600 border border-purple-400 shadow-violet-glow' :
                        'bg-rose-600 border border-rose-400 shadow-red-glow'
                      }`}
                    >
                      {r.number}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Live Markets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LIVE_MARKETS_DATA.map((m, i) => (
            <div
              key={i}
              className="bg-glass-card bg-glass-card-hover rounded-2xl p-5 border border-gold-primary/20 flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="font-rajdhani font-black text-base text-white tracking-wide block">{m.name}</span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-gold-bright" /> {m.open} → {m.close}
                </span>
              </div>
              <div className="text-right space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 inline-block">
                  ● {m.status}
                </span>
                <span className="text-[10px] font-mono font-bold text-gold-bright block">{m.interval}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Real-time Winner Toast Notification */}
      <AnimatePresence>
        {liveNotification && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-4 z-40 bg-navy-900/95 border border-gold-bright/40 p-3 rounded-2xl shadow-gold-glow backdrop-blur-xl flex items-center gap-3 max-w-xs"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-extrabold text-white truncate">
                {liveNotification.name} <span className="text-emerald-400 font-mono font-black">won {liveNotification.amount}!</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono block">Prediction: {liveNotification.game}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
