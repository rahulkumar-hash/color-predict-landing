import React from 'react';
import { ShieldCheck, Zap, Smartphone, Clock, Award, Lock, CheckCircle2 } from 'lucide-react';

export default function TrustBadgesSection() {
  const badges = [
    { icon: ShieldCheck, text: "100% Safe & Encrypted" },
    { icon: Zap, text: "Instant UPI Payouts" },
    { icon: Smartphone, text: "Android APK Compatible" },
    { icon: Clock, text: "24/7 Dedicated Support" },
    { icon: Award, text: "#1 Trusted Color Platform" },
    { icon: Lock, text: "SHA-256 Fair Result Engine" },
  ];

  return (
    <div className="py-8 bg-navy-900/60 border-y border-gold-primary/15 backdrop-blur-md relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-850/80 border border-gold-primary/20 hover:border-gold-primary/50 text-xs font-semibold text-slate-200 shadow-md transition-all"
            >
              <Icon className="w-4 h-4 text-gold-bright shrink-0" />
              <span>{b.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
