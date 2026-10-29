import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Crown } from 'lucide-react';

export default function HeroWaxSeal({ onUnveil }) {
  const handleOpen = () => {
    // Auspicious golden and starlight blue confetti burst
    confetti({
      particleCount: 95,
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
        <Sparkles size={15} />
        <span>WELCOMING OUR LITTLE PRINCE</span>
        <Sparkles size={15} />
      </div>

      {/* Unobstructed Center View for Baby Prince on Moon */}
      <div className="baby-moon-unobstructed-window" />

      {/* Premium Royal Wax Seal & Action Box */}
      <motion.div
        className="wax-seal-action-box"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        onClick={handleOpen}
      >
        {/* Ornate Royal Golden 3D Wax Seal */}
        <motion.div
          className="royal-wax-seal"
          animate={{
            scale: [1, 1.045, 1],
            boxShadow: [
              '0 10px 28px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 217, 118, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.25)',
              '0 14px 36px rgba(0, 0, 0, 0.7), 0 0 35px rgba(249, 217, 118, 0.75), inset 0 0 22px rgba(255, 255, 255, 0.4)',
              '0 10px 28px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 217, 118, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.25)'
            ]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Outer Beaded Golden Rim */}
          <div className="seal-outer-rim">
            {/* Inner Metallic Disc */}
            <div className="seal-inner-disc">
              <Crown size={22} className="seal-crown-icon" />
              <div className="seal-hindi-name">शुभ कुआं पूजन</div>
              <div className="seal-english-sub">RAGHAV FAMILY</div>
              <div className="seal-stars">✦ ✦ ✦</div>
            </div>
          </div>
        </motion.div>

        {/* Action Button & Hindi Couplet */}
        <div className="seal-text-group">
          <button
            className="royal-open-btn"
            onClick={e => {
              e.stopPropagation();
              handleOpen();
            }}
          >
            <Sparkles size={16} />
            <span>निमंत्रण पत्र खोलें • Open Invitation</span>
            <Sparkles size={16} />
          </button>

          <p className="seal-hindi-couplet">
            "घर में गूंजी नन्हीं किलकारी, खुशियां छाईं अपार
            <br />
            राघव परिवार में आपका हार्दिक स्वागत एवं सत्कार"
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
