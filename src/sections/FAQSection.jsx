import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../theme/themeConfig';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-extrabold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-gold-bright" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-gradient-gold uppercase">
            HAVE QUESTIONS? WE HAVE ANSWERS
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-glass-card rounded-2xl border border-gold-primary/20 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-poppins font-bold text-sm sm:text-base text-white hover:text-gold-bright btn-touch transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-bright transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed border-t border-slate-800/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
