import React from 'react';

export default function FloatingParticles() {
  const particles = Array.from({ length: 24 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = 3 + (i % 4) * 2;
        const left = (i * 4.3) % 100;
        const delay = (i * 0.7) % 8;
        const duration = 6 + (i % 6);
        const isGold = i % 2 === 0;

        return (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              isGold ? 'bg-gold-bright shadow-gold-glow' : 'bg-emerald-400 shadow-green-glow'
            }`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-20px`,
              animation: `particleFloat ${duration}s infinite ease-in-out`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes particleFloat {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          20% { opacity: 0.4; }
          80% { opacity: 0.2; }
          100% { opacity: 0; transform: translateY(-100vh) translateX(40px) scale(1.5); }
        }
      `}</style>
    </div>
  );
}
