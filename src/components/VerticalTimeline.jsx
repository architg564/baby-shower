import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Utensils, Sparkles } from 'lucide-react';

const timelineEvents = [
  {
    time: '10:15 AM',
    title: 'Sacred Havan & Bal Gopal Pujan',
    hindiTitle: '॥ पवित्र हवन एवं बालगोपाल पूजन ॥',
    tag: 'Auspicious Morning',
    icon: <Flame size={17} />,
    desc: 'Chanting sacred Vedic mantras and offering oblations to Agni Dev to seek the Almighty’s divine blessings for the baby boy’s long life, wisdom, and vibrant health.',
    quote:
      '“दीर्घायुष्यं मस्तु • तेजस्वी भव • Like the sacred flame that purifies and illuminates, may divine grace bless our little prince with radiant health, wisdom, and boundless joy.”'
  },
  {
    time: '01:15 PM',
    title: 'Preeti Bhoj (Grand Royal Feast)',
    hindiTitle: '॥ स्नेह प्रीतिभोज एवं मिष्ठान्न ॥',
    tag: '🌟 Royal Feast',
    isFeast: true,
    icon: <Utensils size={17} />,
    desc: 'A lavish traditional festive lunch featuring customary delicacies and sweets, shared in celebration of the newborn with all our cherished relatives and esteemed guests.',
    quote:
      '“अन्नं परब्रह्म स्वरूपम् • Every meal shared among loved ones multiplies joy. May the little prince’s life be blessed with boundless prosperity, contentment, and loving companions.”'
  },
  {
    time: '04:15 PM',
    title: 'Shubh Kuan Pujan & Jalwa Ceremony',
    hindiTitle: '॥ परम्परागत कुआं पूजन एवं जलवा समारोह ॥',
    tag: 'Sacred Ritual',
    icon: <Sparkles size={17} />,
    desc: 'Traditional well-worship ceremony celebrating the wellspring of life, accompanied by maternal folk songs, the first royal step of the newborn, and evening celebratory Aarti.',
    quote:
      '“जल ही जीवन का मूल आधार है • Reverence to the holy waters that sustain all creation. As the tender footsteps of our prince grace our threshold, may he bring eternal pride, prosperity, and blessings to the Raghav lineage.”'
  }
];

export default function VerticalTimeline() {
  return (
    <section className="vertical-timeline-section">
      <div className="timeline-section-heading">
        <span>𑁍</span>
        <h3>Shubh Karyakram Itinerary</h3>
        <span>𑁍</span>
      </div>

      <div className="timeline-wrapper">
        {/* Continuous glowing vertical connecting bar */}
        <div className="timeline-vertical-bar" />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
          >
            {/* Glowing Milestone Node */}
            <div className={`timeline-node ${event.isFeast ? 'feast-node' : ''}`}>
              {event.icon}
            </div>

            {/* Event Details Card */}
            <div className={`timeline-card ${event.isFeast ? 'feast-highlight' : ''}`}>
              <div className="timeline-header-row">
                <span className={`timeline-time-badge ${event.isFeast ? 'gold' : ''}`}>
                  {event.time}
                </span>
                <span className="timeline-pill-tag">{event.tag}</span>
              </div>

              <h4 className="timeline-event-title">{event.title}</h4>
              <div className="timeline-hindi-title">{event.hindiTitle}</div>
              <p className="timeline-event-desc">{event.desc}</p>

              {/* Heartfelt Poetic Quote */}
              <div className="timeline-quote-box">
                {event.quote}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
