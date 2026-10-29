import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export default function HeroWaxSeal({ onUnveil }) {
  const handleOpen = () => {
    // Auspicious golden and starlight blue confetti burst
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#f9d976', '#ffe8a3', '#8ec5fc', '#ffd166', '#ffffff']
    });

    onUnveil();
  };

  return (
    <motion.section
      className="hero-stage-fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.94, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Top Auspicious Ribbon */}
      <div className="hero-top-ribbon">
        <Sparkles size={16} />
        <span>WELCOMING OUR LITTLE PRINCE</span>
        <Sparkles size={16} />
      </div>

      {/* Unobstructed Center View for Baby on Moon */}
      <div className="baby-moon-unobstructed-window" />

      {/* Royal Wax Seal Action Box */}
      <motion.div
        className="wax-seal-action-box"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleOpen}
      >
        <motion.div
          className="wax-seal-btn"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 10px 30px rgba(42, 109, 217, 0.5), 0 0 25px rgba(249, 217, 118, 0.4)',
              '0 14px 38px rgba(42, 109, 217, 0.65), 0 0 35px rgba(249, 217, 118, 0.75)',
              '0 10px 30px rgba(42, 109, 217, 0.5), 0 0 25px rgba(249, 217, 118, 0.4)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="seal-inner">
            <span className="seal-feet">👣</span>
            <span className="seal-title">KUAN PUJAN</span>
            <span className="seal-sub">RAGHAV FAMILY</span>
          </div>
        </motion.div>

        <p className="tap-hint-text">✨ Tap Royal Seal to Open Invitation ✨</p>
        <p className="baby-tagline-quote">
          "Ten little fingers, ten little toes, with love and grace, our family grows!"
        </p>
        <button
          className="direct-view-link"
          onClick={e => {
            e.stopPropagation();
            handleOpen();
          }}
        >
          Or View Invitation Directly ↓
        </button>
      </motion.div>
    </motion.section>
  );
}
