import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/images/logo.jpg" alt="The Celestial Story" style={{ height: '3.5rem', width: 'auto', objectFit: 'contain', maxHeight: '100%' }} />
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
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme} 
            style={{ marginLeft: '0.5rem' }}
            aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-actions">
          <button 
            className="mobile-actions-btn theme-toggle-btn"
            style={{ display: 'none' }}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button 
            className="mobile-actions-btn"
            style={{ display: 'none', color: 'var(--text-primary)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
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
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 991px) {
          .mobile-actions-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
