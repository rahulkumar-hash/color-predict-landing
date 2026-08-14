import React, { useState, useEffect } from 'react';
import { Trophy, Sparkles, Zap } from 'lucide-react';

const INITIAL_NAMES = [
  "rahul_****99", "priya_****12", "vikram_****87", "amit_****34",
  "suresh_****55", "deepak_****01", "rohit_****48", "pooja_****92",
  "ankit_****15", "karan_****73", "varun_****66", "neha_****39"
];

const PREDICTIONS = [
  { name: "Green 2x", color: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30" },
  { name: "Violet 4.5x", color: "text-purple-300 bg-purple-500/20 border-purple-500/30" },
  { name: "Red 2x", color: "text-rose-400 bg-rose-500/20 border-rose-500/30" },
  { name: "Number 7 (9x)", color: "text-gold-bright bg-gold-primary/20 border-gold-primary/30" },
  { name: "Number 3 (9x)", color: "text-emerald-300 bg-emerald-500/20 border-emerald-500/30" },
  { name: "Number 0 (9x)", color: "text-purple-300 bg-purple-500/20 border-purple-500/30" },
  { name: "Number 9 (9x)", color: "text-amber-300 bg-amber-500/20 border-amber-500/30" },
];

export default function LiveWinnersTicker() {
  const [payouts, setPayouts] = useState([
    { id: 1, username: "rahul_****99", amount: "₹4,500", game: PREDICTIONS[0], time: "Just now" },
    { id: 2, username: "priya_****12", amount: "₹9,000", game: PREDICTIONS[3], time: "Just now" },
    { id: 3, username: "vikram_****87", amount: "₹18,000", game: PREDICTIONS[1], time: "1 min ago" },
    { id: 4, username: "amit_****34", amount: "₹3,500", game: PREDICTIONS[2], time: "1 min ago" },
    { id: 5, username: "suresh_****55", amount: "₹12,500", game: PREDICTIONS[5], time: "2 mins ago" },
    { id: 6, username: "deepak_****01", amount: "₹6,000", game: PREDICTIONS[0], time: "2 mins ago" },
    { id: 7, username: "rohit_****48", amount: "₹22,000", game: PREDICTIONS[4], time: "3 mins ago" },
    { id: 8, username: "pooja_****92", amount: "₹8,500", game: PREDICTIONS[2], time: "3 mins ago" },
  ]);

  // Real-time Randomized Payout Ingestion Loop
  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = INITIAL_NAMES[Math.floor(Math.random() * INITIAL_NAMES.length)];
      const randomDigits = String(Math.floor(10 + Math.random() * 89));
      const maskedName = `${randomName.slice(0, 4)}_****${randomDigits}`;

      const amounts = [1200, 2400, 4500, 9000, 13500, 18000, 27000, 36000];
      const randomAmt = `₹${amounts[Math.floor(Math.random() * amounts.length)].toLocaleString()}`;
      const randomPred = PREDICTIONS[Math.floor(Math.random() * PREDICTIONS.length)];

      const newEntry = {
        id: Date.now() + Math.random(),
        username: maskedName,
        amount: randomAmt,
        game: randomPred,
        time: "Just now"
      };

      setPayouts((prev) => [newEntry, ...prev.slice(0, 11)]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-6 bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border-y border-gold-primary/30 backdrop-blur-xl relative z-20 overflow-hidden flex items-center shadow-lg">
      {/* Fixed News Flash Badge on Left */}
    

      {/* Smooth Continuous Right-To-Left News Ticker */}
      <div className="overflow-hidden flex-1 relative">
        <div className="animate-news-ticker">
          {[...payouts, ...payouts].map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-navy-950/90 border border-gold-primary/25 mx-2 text-xs font-poppins shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-mono font-bold text-slate-200">{p.username}</span>
              <span className="text-slate-400">won</span>
              <span className="font-mono font-black text-emerald-400">{p.amount}</span>
              <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${p.game.color}`}>
                {p.game.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
