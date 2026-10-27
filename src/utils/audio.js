// Web Audio Synthesizer for Sacred Krishna Flute Melody & Auspicious Chimes
let audioCtx = null;
let fluteInterval = null;
let isPlaying = false;

export function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playSacredChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

    gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.08 + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + idx * 0.08);
    osc.stop(ctx.currentTime + idx * 0.08 + 1.3);
  });
}

export function playFluteNote(freq, duration = 0.9, delay = 0) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // Flute warmth using sine with gentle vibrato
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, t);

  // Subtle breath vibrato
  const vibrato = ctx.createOscillator();
  const vibratoGain = ctx.createGain();
  vibrato.frequency.value = 5.2; // 5Hz vibrato
  vibratoGain.gain.value = freq * 0.015;
  vibrato.connect(osc.frequency);
  vibrato.start(t);
  vibrato.stop(t + duration);

  // Soft envelope
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.16, t + 0.12);
  gain.gain.setValueAtTime(0.14, t + duration - 0.2);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(t);
  osc.stop(t + duration + 0.1);
}

// Classical Raag Yaman inspired meditative flute phrase
const yamanNotes = [
  { freq: 440.00, dur: 0.8 }, // Sa (A4)
  { freq: 493.88, dur: 0.7 }, // Re (B4)
  { freq: 554.37, dur: 0.9 }, // Ga (C#5)
  { freq: 622.25, dur: 1.1 }, // Ma tivra (D#5)
  { freq: 659.25, dur: 1.0 }, // Pa (E5)
  { freq: 739.99, dur: 0.8 }, // Dha (F#5)
  { freq: 830.61, dur: 0.9 }, // Ni (G#5)
  { freq: 880.00, dur: 1.4 }, // Sa (A5)
  { freq: 739.99, dur: 0.7 },
  { freq: 659.25, dur: 1.0 },
  { freq: 554.37, dur: 1.2 },
  { freq: 493.88, dur: 0.8 },
  { freq: 440.00, dur: 1.6 }
];

export function toggleFluteMelody(onStateChange) {
  const ctx = getAudioContext();
  if (!ctx) return false;

  if (isPlaying) {
    if (fluteInterval) {
      clearInterval(fluteInterval);
      fluteInterval = null;
    }
    isPlaying = false;
    if (onStateChange) onStateChange(false);
    return false;
  }

  isPlaying = true;
  if (onStateChange) onStateChange(true);

  const playSequence = () => {
    let delay = 0;
    yamanNotes.forEach(n => {
      playFluteNote(n.freq, n.dur, delay);
      delay += n.dur * 0.92;
    });
  };

  playSequence();
  // Loop the soothing flute melody every 14 seconds
  fluteInterval = setInterval(() => {
    if (isPlaying) playSequence();
  }, 14000);

  return true;
}
