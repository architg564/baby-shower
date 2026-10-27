import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, MessageCircle } from 'lucide-react';

export default function PersonalizeModal({ isOpen, onClose }) {
  const [guestInput, setGuestInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  useEffect(() => {
    const origin = window.location.origin + window.location.pathname;
    if (guestInput.trim()) {
      setGeneratedUrl(`${origin}?guest=${encodeURIComponent(guestInput.trim())}`);
    } else {
      setGeneratedUrl(origin);
    }
  }, [guestInput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleWhatsApp = () => {
    const nameVal = guestInput.trim() || 'Dear Family & Friends';
    const msg = encodeURIComponent(
      `🌸 *॥ श्री गणेशाय नमः ॥* 🌸\n` +
      `👶 *॥ श्री बालगोपालाय नमः ॥*\n\n` +
      `*Auspicious Invitation for ${nameVal}*\n\n` +
      `With immense joy and gratitude, Raghav Family cordially invites you and your family to celebrate the auspicious *Kuan Pujan (कुआं पूजन एवं जलवा समारोह)* of our newborn baby boy! 👑✨\n\n` +
      `📅 *Date:* Wednesday, 4th November 2026\n` +
      `🔥 *10:15 AM:* Sacred Havan & Bal Gopal Pujan\n` +
      `🍲 *01:15 PM:* Preeti Bhoj (Grand Royal Feast)\n` +
      `🪔 *04:15 PM:* Kuan Pujan & Jalwa Ceremony\n` +
      `📍 *Venue:* Raghav Niwas\n\n` +
      `Tap your personalized digital invitation card below to view full details:\n` +
      `${generatedUrl}\n\n` +
      `Kindly shower your love and blessings upon our little prince! 🙏🌟`
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-box"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Create Personalized Guest Link</h3>
              <button className="close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">
                Type the guest or family's name below to generate a tailored invitation link with their name prominently featured at the top!
              </p>

              <label className="input-label">Guest / Family Name:</label>
              <input
                type="text"
                className="guest-input"
                placeholder="e.g. Verma Family, Sharma Ji, Rahul Uncle"
                value={guestInput}
                onChange={e => setGuestInput(e.target.value)}
                autoFocus
              />

              <label className="input-label">Personalized Link:</label>
              <div className="copy-field">
                <input type="text" readOnly value={generatedUrl} />
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check size={14} style={{ display: 'inline', marginRight: 4 }} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} style={{ display: 'inline', marginRight: 4 }} /> Copy
                    </>
                  )}
                </button>
              </div>

              <button className="whatsapp-share-btn" onClick={handleWhatsApp}>
                <MessageCircle size={18} />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
