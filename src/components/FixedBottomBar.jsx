import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sparkles, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../theme/themeConfig';

export default function FixedBottomBar({ onOpenDownload }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-2xl border-t border-gold-primary/30 p-3 sm:p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Zap className="w-4 h-4 animate-pulse" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-white block truncate">{SITE_CONFIG.appName} {SITE_CONFIG.version}</span>
                <span className="text-[10px] text-emerald-400 font-semibold block">💎 24/7 Fast UPI Withdrawals • Guaranteed Security</span>
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto flex-1 sm:flex-none py-3 px-6 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-poppins font-black text-sm tracking-wide shadow-green-glow flex items-center justify-center gap-2 btn-touch active:scale-95 transition-all"
            >
              <Download className="w-4 h-4 text-white stroke-[3] animate-bounce" />
              <span>DOWNLOAD OFFICIAL APP (APK)</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
