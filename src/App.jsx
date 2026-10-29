import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AmbientStars from './components/AmbientStars';
import HeroWaxSeal from './components/HeroWaxSeal';
import InvitationCard from './components/InvitationCard';

export default function App() {
  const [isUnveiled, setIsUnveiled] = useState(false);

  useEffect(() => {
    // If URL has ?unveil=true, open directly
    const params = new URLSearchParams(window.location.search);
    if (params.get('unveil') === 'true') {
      setIsUnveiled(true);
    }
  }, []);

  // Prevent any scrolling when on the opening landing seal
  useEffect(() => {
    if (!isUnveiled) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isUnveiled]);

  return (
    <div className={`app-wrapper ${!isUnveiled ? 'screen-locked' : 'screen-scrollable'}`}>
      {/* Floating Canvas Stars in Background */}
      <AmbientStars />

      <AnimatePresence mode="wait">
        {!isUnveiled ? (
          <HeroWaxSeal key="seal" onUnveil={() => setIsUnveiled(true)} />
        ) : (
          <motion.main
            key="card-view"
            className="page-container"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Centered Hindi Family Title */}
            <header className="family-banner-center">
              <span className="banner-motif">𑁍</span>
              <h2 className="family-badge-title">॥ राघव परिवार निमंत्रण ॥</h2>
              <span className="banner-motif">𑁍</span>
            </header>

            {/* Transparent Luxury Invitation Card */}
            <InvitationCard />

            {/* Page Footer */}
            <footer className="page-footer">
              <p>॥ ॐ श्री कृष्णाय नमः • Shubh Kuan Pujan • 4th November 2026 ॥</p>
              <p style={{ marginTop: 6, opacity: 0.85 }}>
                Welcoming Our Little Prince into the Raghav Family
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
