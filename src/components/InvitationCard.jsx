import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import VerticalTimeline from './VerticalTimeline';
import CountdownTimer from './CountdownTimer';

export default function InvitationCard() {
  return (
    <motion.article
      className="transparent-invitation-card"
      id="invitation-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Ornate Golden Corners */}
      <div className="corner-ornament top-left" />
      <div className="corner-ornament top-right" />
      <div className="corner-ornament bottom-left" />
      <div className="corner-ornament bottom-right" />

      {/* Ornate Arch Frame */}
      <div className="card-inner-frame">
        {/* Top Auspicious Invocations */}
        <header className="card-header">
          <div className="top-deities single-center">
            <h3 className="deity-shloka-center">॥ Shri Ganeshay Namah ॥</h3>
          </div>

          <div className="gold-swirl-divider">
            <span className="star">✦</span>
            <span className="line" />
            <span className="motif">𑁍</span>
            <span className="line" />
            <span className="star">✦</span>
          </div>

          <p className="cordial-invitation-lead">You are cordially invited to the</p>
        </header>

        {/* Grand Headline */}
        <div className="celebration-headline-container">
          <h1 className="main-celebration-title">CRADLE CEREMONY</h1>
          <div className="sub-celebration">OF OUR BABY</div>
        </div>

        {/* Invitation Text */}
        <div className="invitation-body">
          <p className="divine-blessing-text">
            With the blessings of God and the love of our family, we are delighted to
            invite you to the cradle ceremony of our little one.
          </p>
        </div>

        {/* Auspicious Date Spotlight */}
        <div className="date-spotlight-card">
          <div className="date-day">WEDNESDAY</div>
          <div className="date-huge-num">04</div>
          <div className="date-month-year">NOVEMBER 2026</div>
          <div className="date-tithi">Wednesday, 4th November 2026</div>
        </div>

        {/* Vertical Timeline Bar (Havan 10:15 AM | Lunch 1:15 PM | Cradle Ceremony 4:15 PM) */}
        <VerticalTimeline />

        {/* Family Structure Grid */}
        <div className="family-hierarchy-grid">
          {/* Great Grandparents */}
          <div className="family-block">
            <span className="role-label">Grand Grandparents</span>
            <h3 className="family-names">
              Late Saudan Singh Raghav <span className="name-sep">&</span> Late Anarkali Raghav
            </h3>
          </div>

          {/* Grandparents Set 1 */}
          <div className="family-block">
            <span className="role-label">Grandparents</span>
            <h3 className="family-names">
              Shri Satyapal Singh Raghav <span className="name-sep">&</span> Smt. Kusum Raghav
            </h3>
          </div>

          {/* Grandparents Set 2 */}
          <div className="family-block">
            <span className="role-label">Grandparents</span>
            <h3 className="family-names">
              Shri Satyaveer Singh Raghav <span className="name-sep">&</span> Smt. Mithilesh Raghav
            </h3>
          </div>

          {/* Parents */}
          <div className="family-block parents-highlight">
            <span className="role-label">Parents</span>
            <h3 className="family-names">
              Shri Gaurav Raghav <span className="name-sep">&</span> Smt. Preeti Raghav
            </h3>
          </div>
        </div>

        {/* Celebration Venue */}
        <div className="venue-showcase-box">
          <div className="venue-label-row">
            <MapPin size={16} />
            <span className="venue-label">VENUE</span>
          </div>
          <div className="venue-address-stack">
            <p className="venue-address-line">House No. 3, near Ganesh Mandir,</p>
            <p className="venue-address-line city">Majri Road, Neemrana</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="contact-showcase-box">
          <div className="contact-label-row">
            <Phone size={14} />
            <span className="contact-label">CONTACT</span>
          </div>
          <div className="contact-numbers">
            <a href="tel:+917906921612">+91 7906921612</a>
            <span className="phone-sep">|</span>
            <a href="tel:+919887952718">+91 9887952718</a>
          </div>
        </div>

        {/* Sign-off */}
        <div className="warm-regards-section">
          <p className="regards-title">Warm Regards</p>
          <h2 className="signature-family">The Raghav Family</h2>
        </div>

        {/* Live Countdown */}
        <CountdownTimer />
      </div>
    </motion.article>
  );
}
