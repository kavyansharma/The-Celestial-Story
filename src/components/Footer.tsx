import { Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const TwitterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>);
const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);

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
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><InstagramIcon /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><TwitterIcon /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><FacebookIcon /></a>
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
