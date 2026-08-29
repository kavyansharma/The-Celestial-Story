import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: "Acoustic Starlight",
    date: "October 12, 2026",
    time: "7:00 PM - 10:00 PM",
    description: "Join us for an evening of acoustic melodies under our starry canopy. Local artist Sarah Jenkins will be performing live.",
    image: "https://images.unsplash.com/photo-1516280440502-861bf0004ff9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Coffee Tasting & Cosmos",
    date: "October 20, 2026",
    time: "5:00 PM - 7:00 PM",
    description: "Experience a guided tasting of our new single-origin roasts, paired with small pastries and cosmic tales.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
  }
];

export const Events = () => {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>What's Happening</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Gather around for moments worth remembering.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          {events.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel event-card"
              style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}
            >
              <div style={{ width: '40%' }} className="event-img">
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ width: '60%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="event-content">
                <h2 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>{event.title}</h2>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                </div>
                <p style={{ color: 'var(--text-primary)', lineHeight: 1.6 }}>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .event-card { flex-direction: column !important; }
          .event-img { width: 100% !important; height: 200px !important; }
          .event-content { width: 100% !important; padding: 1.5rem !important; }
        }
      `}</style>
    </main>
  );
};
