import React from 'react';
import { Moon, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Moon size={28} color="var(--accent-gold)" />
              <span className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>The Celestial Story</span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Where coffee meets the cosmos. Every cup tells a story of distant stars and rich, earthly flavors.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/menu" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Our Menu</Link></li>
              <li><Link to="/story" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Our Story</Link></li>
              <li><Link to="/reservations" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Reservations</Link></li>
              <li><Link to="/rewards" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Celestial Rewards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Visit Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li>123 Starlight Avenue</li>
              <li>Cosmos District, NY 10001</li>
              <li style={{ marginTop: '0.5rem' }}>Mon-Thu: 7am - 10pm</li>
              <li>Fri-Sun: 8am - Midnight</li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} The Celestial Story. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Privacy Policy</Link>
            <Link to="/terms" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
