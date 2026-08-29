import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/story' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      transition: 'var(--transition-normal)',
      background: scrolled ? 'rgba(11, 15, 25, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <Moon size={28} color="var(--accent-gold)" />
          <span className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
            The Celestial Story
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: 500,
                color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-primary)',
                transition: 'color var(--transition-fast)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-primary)'}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservations" className="btn-primary" style={{ textDecoration: 'none', padding: '0.6rem 1.25rem', fontSize: '0.9rem', letterSpacing: '1px' }}>
            Reserve a Table
          </Link>
        </nav>

        <button 
          className="mobile-menu-btn"
          style={{ display: 'none', color: 'var(--text-primary)' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-primary)', padding: '2rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 500, color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservations" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center', textDecoration: 'none' }}>
            Reserve a Table
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 991px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
