import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Trophy, Users, ShieldCheck, Zap, Dices, Crown, Flame, Gem } from 'lucide-react';
import { SITE_CONFIG } from '../theme/themeConfig';

export default function HeroSection({ onOpenDownload }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-navy-800/40 via-transparent to-transparent pointer-events-none"></div>

      {/* Floating Micro Icons Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <Dices className="absolute top-[15%] left-[6%] w-10 h-10 text-gold-bright animate-float-slow" />
        <Trophy className="absolute top-[25%] right-[8%] w-12 h-12 text-gold-primary animate-float-slow" style={{ animationDelay: '1.5s' }} />
        <Crown className="absolute bottom-[30%] left-[10%] w-14 h-14 text-gold-light animate-float-slow" style={{ animationDelay: '3s' }} />
        <Flame className="absolute bottom-[20%] right-[6%] w-10 h-10 text-emerald-400 animate-float-slow" style={{ animationDelay: '2s' }} />
        <Gem className="absolute top-[50%] left-[4%] w-10 h-10 text-purple-400 animate-float-slow" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/40 backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-orbitron font-extrabold text-xs text-gold-bright tracking-widest uppercase">
            LIVE COLOR PREDICTION MARKET
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight uppercase"
        >
          <span className="text-gradient-gold block drop-shadow-2xl">COLOR PREDICT</span>
          <span className="text-white text-2xl sm:text-4xl block mt-2 font-black">
            INDIA'S #1 PREDICTION PLATFORM
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Predict <span className="text-emerald-400 font-extrabold">GREEN</span>, <span className="text-purple-400 font-extrabold">VIOLET</span>, or <span className="text-rose-400 font-extrabold">RED</span> in live 1-minute rounds. Win instant payouts with <span className="text-gold-bright font-bold">24/7 Fast UPI Withdrawals!</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onOpenDownload}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-poppins font-black text-base tracking-wide shadow-green-glow hover:scale-105 btn-touch transition-all"
          >
            <Download className="w-5 h-5 text-white stroke-[3] animate-bounce" />
            <span>DOWNLOAD APP (APK)</span>
          </button>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-4 rounded-full bg-navy-850 hover:bg-navy-800 text-slate-200 border border-emerald-500/40 font-poppins font-bold text-base shadow-lg transition-all btn-touch"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
            <span>GET APP LINK ON WHATSAPP</span>
          </a>
        </motion.div>

        {/* Live Platform Telemetry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto"
        >
          <div className="bg-glass-card rounded-2xl p-4 text-center border border-gold-primary/20">
            <span className="font-orbitron font-black text-xl sm:text-2xl text-gold-bright block">1-MIN</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Live Rounds</span>
          </div>

          <div className="bg-glass-card rounded-2xl p-4 text-center border border-gold-primary/20">
            <span className="font-orbitron font-black text-xl sm:text-2xl text-emerald-400 block">24/7</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1">UPI Withdrawals</span>
          </div>

          <div className="bg-glass-card rounded-2xl p-4 text-center border border-gold-primary/20">
            <span className="font-orbitron font-black text-xl sm:text-2xl text-purple-400 block">5L+</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Active Players</span>
          </div>

          <div className="bg-glass-card rounded-2xl p-4 text-center border border-gold-primary/20">
            <span className="font-orbitron font-black text-xl sm:text-2xl text-gold-primary block">100%</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Genuine & Safe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
