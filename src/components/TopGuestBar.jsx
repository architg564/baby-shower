import React, { useState } from 'react';
import { Sparkles, Music, Share2, VolumeX } from 'lucide-react';
import { toggleFluteMelody } from '../utils/audio';

export default function TopGuestBar({ guestName, onOpenPersonalize }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleMusic = () => {
    toggleFluteMelody(state => setIsPlaying(state));
  };

  return (
    <nav className="guest-top-bar">
      <div className="guest-welcome-pill">
        <Sparkles size={16} className="text-gold" />
        <span>
          Cordially Inviting:{' '}
          <strong>{guestName || 'Dear Guest & Family'}</strong> to our Little Prince's Celebration!
        </span>
      </div>

      <div className="top-action-pills">
        <button
          onClick={handleToggleMusic}
          className={`pill-btn ${isPlaying ? 'active' : ''}`}
          title="Play Auspicious Krishna Flute Melody"
        >
          {isPlaying ? <Music size={15} /> : <VolumeX size={15} />}
          <span>{isPlaying ? 'Flute Playing ♪' : 'Sacred Flute Melody'}</span>
        </button>

        <button
          onClick={onOpenPersonalize}
          className="pill-btn"
          title="Personalize Link for a Guest"
        >
          <Share2 size={15} />
          <span>Personalize Link</span>
        </button>
      </div>
    </nav>
  );
}
