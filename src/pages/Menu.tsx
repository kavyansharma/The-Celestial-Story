import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Award, Zap, Sparkles, Flame, HeartPulse, Scale, ShieldCheck, X } from 'lucide-react';
import { categories, menuItems, nutritionOverview } from '../data/mockData';
import type { MenuItem } from '../data/mockData';
import { CelestialFoodPlaceholder } from '../components/CelestialFoodPlaceholder';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === "All Items" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const renderDietaryBadge = (item: MenuItem) => {
    if (item.dietaryType === 'both' || item.isBothVegNonVeg) {
      return (
        <span 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            fontSize: '0.75rem', 
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2ecc71' }}></span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e74c3c' }}></span>
          Veg / Non-Veg
        </span>
      );
    }

    if (item.dietaryType === 'veg' || item.isVegetarian) {
      return (
        <span 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            fontSize: '0.75rem', 
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(46, 204, 113, 0.1)',
            border: '1px solid rgba(46, 204, 113, 0.3)',
            color: '#2ecc71'
          }}
        >
          <Leaf size={12} /> Veg
        </span>
      );
    }

    if (item.dietaryType === 'non-veg' || item.isVegetarian === false) {
      return (
        <span 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            fontSize: '0.75rem', 
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(231, 76, 60, 0.1)',
            border: '1px solid rgba(231, 76, 60, 0.3)',
            color: '#e74c3c'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e74c3c' }}></span>
          Non-Veg
        </span>
      );
    }

    return null;
  };

  const renderPriceDisplay = (item: MenuItem) => {
    if (item.sizes) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span style={{ 
            background: 'rgba(212, 175, 55, 0.12)', 
            border: '1px solid rgba(212, 175, 55, 0.25)', 
            padding: '2px 7px', 
            borderRadius: 'var(--radius-sm)', 
            fontSize: '0.78rem',
            color: 'var(--text-primary)'
          }}>
            <strong style={{ color: 'var(--accent-gold)' }}>M:</strong> ₹{item.sizes.M}
          </span>
          <span style={{ 
            background: 'rgba(212, 175, 55, 0.12)', 
            border: '1px solid rgba(212, 175, 55, 0.25)', 
            padding: '2px 7px', 
            borderRadius: 'var(--radius-sm)', 
            fontSize: '0.78rem',
            color: 'var(--text-primary)'
          }}>
            <strong style={{ color: 'var(--accent-gold)' }}>L:</strong> ₹{item.sizes.L}
          </span>
        </div>
      );
    }

    if (item.variants) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span style={{ 
            background: 'rgba(46, 204, 113, 0.08)', 
            border: '1px solid rgba(46, 204, 113, 0.25)', 
            padding: '2px 7px', 
            borderRadius: 'var(--radius-sm)', 
            fontSize: '0.78rem',
            color: 'var(--text-primary)'
          }}>
            <strong style={{ color: '#2ecc71' }}>Veg:</strong> ₹{item.variants.veg}
          </span>
          <span style={{ 
            background: 'rgba(231, 76, 60, 0.08)', 
            border: '1px solid rgba(231, 76, 60, 0.25)', 
            padding: '2px 7px', 
            borderRadius: 'var(--radius-sm)', 
            fontSize: '0.78rem',
            color: 'var(--text-primary)'
          }}>
            <strong style={{ color: '#e74c3c' }}>Non-Veg:</strong> ₹{item.variants.nonVeg}
          </span>
        </div>
      );
    }

    return (
      <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '1.15rem' }}>
        ₹{item.price}
      </span>
    );
  };

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
            <Sparkles size={16} /> HMH CAFE <Sparkles size={16} />
          </div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}>
            The Celestial <span className="text-gradient">Menu</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
            Authentic culinary creations, handcrafted beverages, and balanced nutrition inspired by cosmic finesse.
          </p>
        </div>

        {/* Nutrition Overview Banner */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: '1.75rem 2rem', 
            marginBottom: '3rem', 
            position: 'relative', 
            border: '1px solid var(--border-gold)',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(26, 22, 18, 0.8) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--accent-gold)', color: '#000', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeartPulse size={14} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--accent-gold)', margin: 0 }}>
              {nutritionOverview.title}
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginLeft: 'auto' }}>
              ✦ Main Course Dietary Standards
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            {nutritionOverview.subtitle}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {nutritionOverview.metrics.map((metric, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.9rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {metric.label}
                  </span>
                  {idx === 0 && <Flame size={14} style={{ color: '#e67e22' }} />}
                  {idx === 1 && <Scale size={14} style={{ color: 'var(--accent-gold)' }} />}
                  {idx === 2 && <ShieldCheck size={14} style={{ color: '#2ecc71' }} />}
                  {idx === 3 && <Sparkles size={14} style={{ color: '#9b59b6' }} />}
                </div>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {metric.value}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div 
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            gap: '0.65rem', 
            marginBottom: '2.5rem',
            paddingBottom: '0.75rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          className="category-scroll"
        >
          {categories.map(category => {
            const isActive = activeCategory === category;
            const count = category === "All Items" 
              ? menuItems.length 
              : menuItems.filter(i => i.category === category).length;

            return (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  background: isActive ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#000' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all var(--transition-fast)',
                  flexShrink: 0
                }}
              >
                <span>{category}</span>
                <span 
                  style={{ 
                    fontSize: '0.75rem', 
                    opacity: isActive ? 0.9 : 0.6,
                    background: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.08)',
                    padding: '1px 6px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Empty state for categories with 0 items */}
        {filteredItems.length === 0 && (
          <div 
            className="glass-panel" 
            style={{ 
              textAlign: 'center', 
              padding: '4rem 2rem', 
              borderRadius: 'var(--radius-lg)', 
              marginBottom: '3rem' 
            }}
          >
            <Sparkles size={36} style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }} />
            <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {activeCategory} Coming Soon
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
              Our celestial mixologists and chefs are crafting seasonal specials for this collection. Check back soon!
            </p>
            <button 
              className="btn-primary" 
              onClick={() => setActiveCategory("All Items")}
              style={{ fontSize: '0.9rem' }}
            >
              Browse All Items
            </button>
          </div>
        )}

        {/* Menu Grid */}
        <motion.div 
          layout 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.75rem', 
            marginBottom: '4rem' 
          }}
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-panel menu-card-item"
                style={{ 
                  overflow: 'hidden', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Media Container */}
                <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform var(--transition-slow)' 
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                    />
                  ) : (
                    <CelestialFoodPlaceholder 
                      category={item.category} 
                      name={item.name} 
                      isSignature={item.isSignature}
                    />
                  )}

                  {/* Category Pill on top left */}
                  <span 
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(15, 12, 8, 0.8)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <h3 
                      className="font-serif" 
                      style={{ 
                        fontSize: '1.05rem', 
                        lineHeight: 1.3, 
                        fontWeight: 600,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Price Row */}
                  <div style={{ marginBottom: '0.85rem' }}>
                    {renderPriceDisplay(item)}
                  </div>

                  {/* Badges / Protein / Dietary row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '0.5rem' }}>
                    {renderDietaryBadge(item)}

                    {item.protein && (
                      <span 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.3rem', 
                          fontSize: '0.75rem', 
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(212, 175, 55, 0.12)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        <Zap size={12} /> {item.protein}g Protein
                      </span>
                    )}
                  </div>

                  {/* Action row */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button 
                      className="btn-secondary" 
                      style={{ 
                        padding: '0.35rem 0.85rem', 
                        fontSize: '0.8rem', 
                        width: '100%',
                        textAlign: 'center'
                      }}
                    >
                      View Details
                    </button>
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
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              zIndex: 1000, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '1.25rem' 
            }}
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedItem(null)} 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: 'rgba(0,0,0,0.85)', 
                backdropFilter: 'blur(8px)' 
              }} 
            />

            {/* Modal Dialog */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.96 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 30, scale: 0.96 }} 
              style={{ 
                background: 'var(--bg-secondary)', 
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                maxWidth: '750px', 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'row', 
                position: 'relative', 
                zIndex: 1001, 
                boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7)' 
              }}
              className="modal-box"
            >
              {/* Modal Media Side */}
              <div 
                style={{ 
                  width: '45%', 
                  minHeight: '340px',
                  position: 'relative',
                  background: '#120f0c'
                }} 
                className="modal-img"
              >
                {selectedItem.image ? (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <CelestialFoodPlaceholder 
                    category={selectedItem.category} 
                    name={selectedItem.name} 
                    isSignature={selectedItem.isSignature}
                    height="100%"
                  />
                )}
              </div>

              {/* Modal Content Side */}
              <div 
                style={{ 
                  width: '55%', 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column' 
                }} 
                className="modal-content"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    {selectedItem.category}
                  </span>
                  <button 
                    onClick={() => setSelectedItem(null)} 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid var(--border-subtle)', 
                      borderRadius: '50%', 
                      width: '32px', 
                      height: '32px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>
                </div>

                <h2 
                  className="font-serif" 
                  style={{ 
                    fontSize: '1.6rem', 
                    lineHeight: 1.25, 
                    color: 'var(--text-primary)',
                    marginBottom: '1rem' 
                  }}
                >
                  {selectedItem.name}
                </h2>

                {/* Pricing Breakdown inside Modal */}
                <div style={{ marginBottom: '1.25rem' }}>
                  {selectedItem.sizes ? (
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>
                        Size & Pricing Options:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)', padding: '0.75rem', textAlign: 'center' }}>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Medium (M)</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-gold)', marginTop: '2px' }}>₹{selectedItem.sizes.M}</div>
                        </div>
                        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)', padding: '0.75rem', textAlign: 'center' }}>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Large (L)</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-gold)', marginTop: '2px' }}>₹{selectedItem.sizes.L}</div>
                        </div>
                      </div>
                    </div>
                  ) : selectedItem.variants ? (
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>
                        Preparation Variants:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <div style={{ background: 'rgba(46, 204, 113, 0.05)', border: '1px solid rgba(46, 204, 113, 0.3)', borderRadius: 'var(--radius-md)', padding: '0.75rem', textAlign: 'center' }}>
                          <div style={{ fontSize: '0.75rem', color: '#2ecc71', fontWeight: 600 }}>Vegetarian</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>₹{selectedItem.variants.veg}</div>
                        </div>
                        <div style={{ background: 'rgba(231, 76, 60, 0.05)', border: '1px solid rgba(231, 76, 60, 0.3)', borderRadius: 'var(--radius-md)', padding: '0.75rem', textAlign: 'center' }}>
                          <div style={{ fontSize: '0.75rem', color: '#e74c3c', fontWeight: 600 }}>Non-Vegetarian</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>₹{selectedItem.variants.nonVeg}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                        ₹{selectedItem.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Dietary & Nutrition Badges in Modal */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {renderDietaryBadge(selectedItem)}

                    {selectedItem.isSignature && (
                      <span 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.35rem', 
                          fontSize: '0.75rem', 
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(212, 175, 55, 0.15)',
                          border: '1px solid rgba(212, 175, 55, 0.35)',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        <Award size={12} /> Chef Signature
                      </span>
                    )}

                    {selectedItem.protein && (
                      <span 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.35rem', 
                          fontSize: '0.75rem', 
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(212, 175, 55, 0.15)',
                          border: '1px solid rgba(212, 175, 55, 0.35)',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        <Zap size={12} /> {selectedItem.protein}g Protein
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    Available for dine-in & takeaway at HMH Cafe — The Celestial Story.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .category-scroll::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .modal-box {
            flex-direction: column !important;
            max-height: 90vh;
            overflow-y: auto;
          }
          .modal-img {
            width: 100% !important;
            min-height: 200px !important;
            height: 200px !important;
          }
          .modal-content {
            width: 100% !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </main>
  );
};
