import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Find Us</h1>
          <p style={{ color: 'var(--text-secondary)' }}>We'd love to hear from you.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} /> Location
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>123 Starlight Avenue<br/>Cosmos District, NY 10001</p>
            </div>
            
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} /> Hours
              </h3>
              <p style={{ color: 'var(--text-secondary)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0.5rem' }}>
                <span>Mon-Thu</span><span>8 AM – 10 PM</span>
                <span>Fri-Sat</span><span>8 AM – 11 PM</span>
                <span>Sunday</span><span>9 AM – 10 PM</span>
              </p>
            </div>
            
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={20} /> Contact
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>Phone: (555) 123-4567<br/>Email: hello@thecelestialstory.com</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="#" style={{ color: 'var(--text-primary)' }}><Instagram size={20} /></a>
                <a href="#" style={{ color: 'var(--text-primary)' }}><Facebook size={20} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows={4} required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>Send Message</button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
};
