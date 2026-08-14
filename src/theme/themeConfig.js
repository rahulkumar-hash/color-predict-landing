// Centralized Theme Configuration & Data Store
export const SITE_CONFIG = {
  name: "COLOR PREDICT OFFICIAL",
  appName: "Color Predict App",
  version: "v5.4.0 (Latest Release)",
  tagline: "India's #1 Instant Color & Number Prediction Platform",
  downloadUrl: "/color-predict-official.apk",
  whatsappNumber: "916375057068",
  whatsappUrl: "https://wa.me/916375057068?text=Hello%20Color%20Predict%20Support%2C%20I%20want%20to%20download%20the%20app%20and%20register!",
  telegramUrl: "https://t.me/colorpredict_official",
  supportEmail: "support@colorpredictofficial.com",
};

export const COLOR_THEME = {
  navyDark: "#030b1f",
  navyCard: "#071236",
  goldPrimary: "#B99052",
  goldLight: "#CCA262",
  goldBright: "#F5C518",
  gameGreen: "#10b981",
  gameViolet: "#a855f7",
  gameRed: "#ef4444",
};

export const GAME_RATES = [
  { type: "Single Color (Green / Red)", bid: "10.00", payout: "2.0x (₹20.00)", multiplier: "2x" },
  { type: "Special Violet (Dual Combination)", bid: "10.00", payout: "4.5x (₹45.00)", multiplier: "4.5x" },
  { type: "Exact Lucky Number (0 - 9)", bid: "10.00", payout: "9.0x (₹90.00)", multiplier: "9x" },
  { type: "First Deposit Referral Bonus", bid: "100.00", payout: "100% Matching Bonus", multiplier: "100%" },
  { type: "VIP House Commission Rebate", bid: "All Bids", payout: "0.5% Cash Rebate Daily", multiplier: "Rebate" },
];

export const LIVE_MARKETS_DATA = [
  { id: "CP01", name: "COLOR PARITY 1-MIN", open: "00:00 AM", close: "11:59 PM", status: "LIVE", interval: "1 Min", color: "green" },
  { id: "CP02", name: "SPEED COLOR 30-SEC", open: "00:00 AM", close: "11:59 PM", status: "LIVE", interval: "30 Sec", color: "violet" },
  { id: "CP03", name: "SAPRE 3-MIN ROOM", open: "00:00 AM", close: "11:59 PM", status: "LIVE", interval: "3 Min", color: "red" },
  { id: "CP04", name: "BCONE VIP MARKET", open: "00:00 AM", close: "11:59 PM", status: "LIVE", interval: "1 Min", color: "gold" },
  { id: "CP05", name: "EMERD HIGH ROLLER", open: "00:00 AM", close: "11:59 PM", status: "LIVE", interval: "5 Min", color: "green" },
  { id: "CP06", name: "ROYAL NIGHT SPECIAL", open: "08:00 PM", close: "11:59 PM", status: "LIVE", interval: "1 Min", color: "violet" },
];

export const HOW_IT_WORKS_STEPS = [
  { step: "01", title: "Download Official App", desc: "Click the Download APK button to install the official Android App safely." },
  { step: "02", title: "Quick OTP Registration", desc: "Sign up in 10 seconds using your mobile number and verify with instant OTP." },
  { step: "03", title: "Predict Color or Number", desc: "Pick Green, Violet, or Red, or choose exact numbers (0-9) in live 1-min rounds." },
  { step: "04", title: "Instant UPI Withdrawal", desc: "Win payouts automatically credited to your wallet & withdraw to your UPI instantly." },
];

export const FAQS_DATA = [
  { q: "How do I download the Color Predict App?", a: "Simply click on any 'Download App APK' button on this official page to download the latest Android application file directly to your smartphone." },
  { q: "Is registration free?", a: "Yes! Registration is 100% free. You also receive a welcome bonus upon your first registration and initial wallet top-up." },
  { q: "How fast are UPI withdrawals processed?", a: "Withdrawals are processed 24/7 in real-time. Once requested, your funds land directly in your PhonePe, Google Pay, or Paytm UPI account within minutes." },
  { q: "What are the winning multipliers for Green, Red, and Violet?", a: "Green and Red pay 2.0x your bid. Special Violet pays 4.5x, and guessing the exact single number (0-9) pays 9.0x!" },
  { q: "Is the platform safe and secure?", a: "Yes, Color Predict utilizes SSL encryption, SHA-256 random number generation, and 24/7 automated monitoring to guarantee 100% fair and transparent play." }
];
