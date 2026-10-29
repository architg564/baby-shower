import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ isUnveiled }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isManuallyMuted, setIsManuallyMuted] = useState(false);
  const audioRef = useRef(null);

  // Initialize the audio element
  useEffect(() => {
    const audio = new Audio('/krishna_flute.mp3');
    audio.loop = true;
    audio.volume = 0.55; // Gentle, soothing volume
    audioRef.current = audio;

    // Stop playing if user switches tabs, minimizes browser, or locks phone screen
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
        }
      } else {
        // Tab is visible again: resume only if already unveiled and not explicitly muted by user
        if (audioRef.current && isUnveiled && !isManuallyMuted) {
          audioRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }
    };

    // Stop immediately if user leaves page or closes tab
    const handlePageHide = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handlePageHide);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // When user taps the seal to unveil, start playing automatically
  useEffect(() => {
    if (isUnveiled && audioRef.current && !isManuallyMuted) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.log('Audio playback waiting for gesture:', err);
        });
    }
  }, [isUnveiled, isManuallyMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsManuallyMuted(true);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsManuallyMuted(false);
        })
        .catch(() => {});
    }
  };

  // Floating music control is visible once the invitation is opened
  if (!isUnveiled) return null;

  return (
    <div className="floating-music-container">
      <button
        className={`floating-music-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause flute music' : 'Play flute music'}
        title={isPlaying ? 'Mute Music' : 'Play Music'}
      >
        {isPlaying ? (
          <>
            <div className="music-wave-bars">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </div>
            <Volume2 size={16} className="music-icon" />
          </>
        ) : (
          <VolumeX size={16} className="music-icon" />
        )}
      </button>
    </div>
  );
}
