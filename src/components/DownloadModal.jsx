import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck, QrCode, Smartphone, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../theme/themeConfig';

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-navy-900 border border-gold-primary/40 rounded-3xl p-6 sm:p-8 shadow-gold-glow overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-navy-850 text-slate-400 hover:text-white border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Safe Android APK
            </div>
            <h3 className="font-orbitron font-black text-xl sm:text-2xl text-gradient-gold">
              DOWNLOAD {SITE_CONFIG.name}
            </h3>
            <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto">
              Get the latest official app for 1-Minute Live Color Prediction & Instant UPI Withdrawals.
            </p>
          </div>

          {/* QR Code & Direct APK Box */}
          <div className="bg-navy-850 border border-gold-primary/20 rounded-2xl p-5 mb-6 text-center space-y-4">
            <div className="w-32 h-32 mx-auto bg-white p-2 rounded-2xl shadow-inner flex items-center justify-center border-2 border-gold-bright">
              {/* Simulated QR Code styling */}
              <div className="w-full h-full border-4 border-navy-950 rounded-xl flex flex-col items-center justify-center bg-navy-950 text-gold-bright font-mono text-[9px] font-black p-1 text-center">
                <QrCode className="w-12 h-12 text-gold-bright mb-1" />
                <span>SCAN TO INSTALL</span>
              </div>
            </div>
            <span className="text-[11px] text-slate-400 font-mono block">Scan with camera or click button below</span>

            <a
              href={SITE_CONFIG.downloadUrl}
              download
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-poppins font-black text-sm tracking-wide shadow-green-glow flex items-center justify-center gap-2 btn-touch active:scale-95 transition-all"
            >
              <Download className="w-5 h-5 text-white stroke-[3] animate-bounce" />
              <span>DIRECT APK DOWNLOAD ({SITE_CONFIG.version})</span>
            </a>
          </div>

          {/* Quick Features List */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>24/7 Fast Deposit & Withdrawal via UPI / QR / NetBanking</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Live WebSocket 1-Minute Period Result Engine</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Commission Referral & Loyalty Rewards</span>
            </div>
          </div>

          {/* WhatsApp Support Link */}
          <div className="pt-4 border-t border-slate-800 text-center">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Need help installing? Get APK link directly on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
