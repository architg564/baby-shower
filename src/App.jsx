import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AmbientStars from './components/AmbientStars';
import TopGuestBar from './components/TopGuestBar';
import HeroWaxSeal from './components/HeroWaxSeal';
import InvitationCard from './components/InvitationCard';
import PersonalizeModal from './components/PersonalizeModal';

export default function App() {
  const [guestName, setGuestName] = useState('');
  const [isUnveiled, setIsUnveiled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestParam = params.get('guest') || params.get('to') || params.get('name');
    if (guestParam) {
      setGuestName(decodeURIComponent(guestParam).trim());
    }

    if (params.get('unveil') === 'true') {
      setIsUnveiled(true);
    }
  }, []);

  return (
    <>
      {/* Floating Canvas Stars */}
      <AmbientStars />

      {/* Top Floating Guest Experience Bar */}
      <TopGuestBar
        guestName={guestName}
        onOpenPersonalize={() => setIsModalOpen(true)}
      />

      {/* Main Container */}
      <main className="page-container">
        <AnimatePresence mode="wait">
          {!isUnveiled ? (
            <HeroWaxSeal key="seal" onUnveil={() => setIsUnveiled(true)} />
          ) : (
            <InvitationCard key="card" />
          )}
        </AnimatePresence>
      </main>

      {/* Page Footer */}
      <footer className="page-footer">
        <p>॥ ॐ श्री कृष्णाय नमः • Shubh Kuan Pujan • 4th November 2026 ॥</p>
        <p style={{ marginTop: 4, opacity: 0.8 }}>
          Welcoming Our Little Prince into the Raghav Family
        </p>
      </footer>

      {/* Guest Personalization Modal */}
      <PersonalizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
