import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
          <div className="top-deities">
            <span className="deity-shloka">॥ श्री गणेशाय नमः ॥</span>
            <span className="deity-divider">✦</span>
            <span className="deity-shloka">॥ श्री बालगोपालाय नमः ॥</span>
          </div>

          {/* Baby Prince Crown Emblem */}
          <div className="crown-badge">
            <svg viewBox="0 0 100 80" width="70" height="56">
              <path
                d="M10 65 L20 25 L38 45 L50 15 L62 45 L80 25 L90 65 Z"
                fill="url(#goldGradCard)"
                stroke="#fff"
                strokeWidth="1.5"
                filter="drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
              />
              <circle cx="20" cy="22" r="4.5" fill="#fff" stroke="#d4af37" strokeWidth="1.5" />
              <circle cx="50" cy="12" r="5.5" fill="#5bc0be" stroke="#fff" strokeWidth="1.5" />
              <circle cx="80" cy="22" r="4.5" fill="#fff" stroke="#d4af37" strokeWidth="1.5" />
              <ellipse cx="50" cy="65" rx="36" ry="6" fill="#aa771c" />
              <defs>
                <linearGradient id="goldGradCard" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff2be" />
                  <stop offset="50%" stopColor="#ffd166" />
                  <stop offset="100%" stopColor="#c99700" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="charan-paduka">
            <span>👣</span>
            <span>Auspicious Baby Arrival</span>
            <span>👣</span>
          </div>

          <div className="gold-swirl-divider">
            <span className="star">✦</span>
            <span className="line" />
            <span className="motif">𑁍</span>
            <span className="line" />
            <span className="star">✦</span>
          </div>
        </header>

        {/* Invitation Text & Hosts */}
        <div className="invitation-body">
          <p className="divine-blessing-text">
            With the divine blessings of Lord Krishna, Kuldevi & Respected Ancestors
          </p>

          <div className="grandparents-block">
            <span className="role-label">Most Respected Grandparents</span>
            <h2 className="grandparent-names">
              Smt. Mithlesh Raghav & Shri Satyabir Singh Raghav
            </h2>
          </div>

          <p className="cordial-request">
            humbly request the honour of your esteemed presence and blessings with your family to
            celebrate the auspicious
          </p>

          {/* Grand Headline */}
          <div className="celebration-headline-container">
            <div className="sub-celebration">WELCOMING OUR BELOVED NEWBORN BABY BOY</div>
            <h1 className="main-celebration-title">SHUBH KUAN PUJAN</h1>
            <div className="hindi-celebration-title">॥ शुभ कुआं पूजन एवं जलवा समारोह ॥</div>
          </div>

          {/* Parents Block */}
          <div className="parents-block">
            <span className="proud-label">Heartily welcomed by the proud parents</span>
            <h3 className="parent-names">Smt. Preeti Raghav & Shri Gaurav Raghav</h3>
            <p className="baby-welcome-note">
              "A sweet bundle of joy has arrived to fill our hearts with laughter and our home with endless love."
            </p>
          </div>
        </div>

        {/* Auspicious Date Spotlight */}
        <div className="date-spotlight-card">
          <div className="date-day">WEDNESDAY</div>
          <div className="date-huge-num">04</div>
          <div className="date-month-year">NOVEMBER 2026</div>
          <div className="date-tithi">Auspicious Muhurat • 4th Nov 2026</div>
        </div>

        {/* Vertical Timeline Bar with Quotes */}
        <VerticalTimeline />

        {/* Celebration Venue */}
        <div className="venue-showcase-box">
          <span className="venue-label">CELEBRATION VENUE</span>
          <h3 className="venue-name">Raghav Niwas</h3>
          <p className="venue-address">Royal Heritage Enclave, Main City Road</p>
          <a
            href="https://maps.google.com/?q=Raghav+Niwas"
            target="_blank"
            rel="noopener noreferrer"
            className="venue-map-link"
          >
            <MapPin size={15} />
            <span>View on Google Maps</span>
          </a>
        </div>

        {/* Compliments & RSVP */}
        <div className="compliments-row">
          <div className="compliments-cell">
            <strong>R.S.V.P.:</strong> Raghav Family
          </div>
          <div className="deity-divider">✦</div>
          <div className="compliments-cell">
            <strong>With Best Compliments:</strong> Near & Dear Ones of Raghav Family
          </div>
        </div>

        <div className="shanti-mantra">
          ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
        </div>

        {/* Live Countdown */}
        <CountdownTimer />
      </div>
    </motion.article>
  );
}
