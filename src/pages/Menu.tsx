import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { categories, menuItems } from '../data/mockData';
import type { MenuItem } from '../data/mockData';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === "All Items" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Menu</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Discover culinary creations inspired by the cosmos.</p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                background: activeCategory === category ? 'var(--accent-gold)' : 'transparent',
                color: activeCategory === category ? '#000' : 'var(--text-primary)',
                border: activeCategory === category ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                padding: '0.6rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 500,
                transition: 'all var(--transition-fast)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="glass-panel"
                style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onClick={() => setSelectedItem(item)}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.2rem' }}>{item.name}</h3>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>₹{item.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>{item.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      {item.isVegetarian ? <span style={{ color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem' }}><Leaf size={14} /> Veg</span> : null}
                      {item.protein && <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>Protein: {item.protein}g</span>}
                    </div>
                    <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'row', position: 'relative', zIndex: 1001, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
              <div style={{ width: '50%', minHeight: '400px' }} className="modal-img">
                <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ width: '50%', padding: '2.5rem', display: 'flex', flexDirection: 'column' }} className="modal-content">
                <button onClick={() => setSelectedItem(null)} style={{ alignSelf: 'flex-end', color: 'var(--text-secondary)' }}>Close ✕</button>
                <h2 className="font-serif" style={{ fontSize: '2rem', marginTop: '1rem', color: 'var(--accent-gold)' }}>{selectedItem.name}</h2>
                <span style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>₹{selectedItem.price}</span>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, flex: 1 }}>{selectedItem.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                  {selectedItem.isVegetarian && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2ecc71' }}>
                      <Leaf size={18} /> <span>Vegetarian</span>
                    </div>
                  )}
                  {selectedItem.protein && (
                    <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.1rem' }}>
                      Protein: {selectedItem.protein}g
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            <style>{`
              @media (max-width: 768px) {
                .modal-img { width: 100% !important; min-height: 250px !important; }
                .modal-content { width: 100% !important; }
                div[style*="maxWidth: '800px'"] { flex-direction: column !important; }
              }
            `}</style>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
