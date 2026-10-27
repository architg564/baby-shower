import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { playSacredChime } from '../utils/audio';

export default function HeroWaxSeal({ onUnveil }) {
  const handleOpen = () => {
    playSacredChime();

    // Auspicious golden and starlight blue confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f9d976', '#ffe8a3', '#8ec5fc', '#ffd166', '#ffffff']
    });

    onUnveil();
  };

  return (
    <motion.div
      className="hero-stage-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: -20 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="hero-top-ribbon">
        <Sparkles size={16} />
        <span>WELCOMING OUR LITTLE PRINCE</span>
        <Sparkles size={16} />
      </div>

      {/* Clear Hero Window: Baby boy on glowing crescent moon is 100% visible here */}
      <div className="baby-moon-unobstructed-window" />

      <motion.div
        className="wax-seal-action-box"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleOpen}
      >
        <motion.div
          className="wax-seal-btn"
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 10px 30px rgba(42, 109, 217, 0.5), 0 0 25px rgba(249, 217, 118, 0.4)',
              '0 14px 38px rgba(42, 109, 217, 0.6), 0 0 35px rgba(249, 217, 118, 0.7)',
              '0 10px 30px rgba(42, 109, 217, 0.5), 0 0 25px rgba(249, 217, 118, 0.4)'
            ]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="seal-inner">
            <span className="seal-feet">👣</span>
            <span className="seal-title">KUAN PUJAN</span>
            <span className="seal-sub">RAGHAV FAMILY</span>
          </div>
        </motion.div>

        <p className="tap-hint-text">✨ Tap Royal Seal to Unveil Invitation ✨</p>
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
    </motion.div>
  );
}
