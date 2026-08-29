
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/mockData';

export const Home = () => {
  const signatureItems = menuItems.filter(item => item.isSignature).slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        paddingTop: '80px',
        background: 'linear-gradient(rgba(11, 15, 25, 0.7), rgba(11, 15, 25, 0.9)), url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80") center/cover no-repeat'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '650px' }}
          >
            <h1 className="font-serif" style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', marginBottom: '0.5rem', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '2px' }}>
              The Celestial <span className="text-gradient">Story</span>
            </h1>
            <h2 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: 400 }}>
              Where coffee meets the cosmos.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Good food, beautiful spaces and stories worth remembering.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/menu" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2rem' }}>
                Explore Our Menu
              </Link>
              <Link to="/reservations" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2rem' }}>
                Reserve a Table
              </Link>
            </div>
            
            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2ecc71', boxShadow: '0 0 10px rgba(46, 204, 113, 0.5)' }}></div>
              <span style={{ fontWeight: 500, color: '#fff' }}>Open Today</span>
              <span>• 8:00 AM – 10:00 PM</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--accent-gold)' }}>
              “Every Visit Has a Story.”
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              At The Celestial Story, we believe a café is more than a place to eat. It is a place to pause, connect, celebrate and create memories.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Signature Experience Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>A Taste of the Extraordinary.</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Discover our most beloved creations, crafted with precision and stellar ingredients.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {signatureItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem' }}>{item.name}</h3>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>₹{item.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{item.description}</p>
                  <Link to="/menu" className="btn-secondary" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/menu" style={{ color: 'var(--accent-gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '1.1rem', transition: 'gap var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.gap = '1rem'} onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}>
              View Full Menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
