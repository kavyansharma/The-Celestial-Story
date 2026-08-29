
import { motion } from 'framer-motion';

export const Story = () => {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>
            Every Café Has a Story. Ours Is Still Being Written.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            The Celestial Story was created as a space where food, conversations and memories come together. Inspired by the beauty of the night sky, every corner of the café is designed to make ordinary moments feel a little more special.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Cafe Interior" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>A Celestial Vision</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Our journey began with a simple idea: to craft a sanctuary away from the hustle of everyday life. We wanted to blend the warmth of a traditional coffee house with the serene, mysterious allure of the cosmos.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              From our starlit ceilings to our meticulously roasted beans, every detail has been curated to inspire awe and foster connection. Whether you're here for a quiet morning brew or an evening of shared stories, you are part of our constellation.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
