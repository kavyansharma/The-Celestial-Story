import React from 'react';
import { Coffee, Leaf, Utensils, Zap, Award } from 'lucide-react';

interface Props {
  category: string;
  name?: string;
  isSignature?: boolean;
  height?: string | number;
  className?: string;
}

export const CelestialFoodPlaceholder: React.FC<Props> = ({
  category,
  isSignature = false,
  height = '100%',
  className = ''
}) => {
  const getIcon = () => {
    switch (category) {
      case 'Hot Beverages':
        return <Coffee size={36} style={{ color: 'var(--accent-gold)' }} />;
      case 'Protein Shakes':
        return <Zap size={36} style={{ color: '#f39c12' }} />;
      case 'Sandwiches & Salads':
        return <Leaf size={36} style={{ color: '#2ecc71' }} />;
      case 'Pastas':
      case 'Rice Bowls':
      case 'Burritos & Fried Chicken':
      case 'Starters':
      default:
        return <Utensils size={36} style={{ color: 'var(--accent-gold)' }} />;
    }
  };

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: height,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #181410 0%, #0d0a07 100%)',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      {/* Subtle cosmic background glow */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }}
      />

      {/* Decorative stars */}
      <div style={{ position: 'absolute', top: '16px', left: '20px', color: 'rgba(212, 175, 55, 0.4)', fontSize: '10px' }}>✦</div>
      <div style={{ position: 'absolute', bottom: '16px', right: '20px', color: 'rgba(212, 175, 55, 0.4)', fontSize: '10px' }}>✦</div>
      <div style={{ position: 'absolute', top: '24px', right: '28px', color: 'rgba(226, 213, 195, 0.3)', fontSize: '8px' }}>✧</div>
      <div style={{ position: 'absolute', bottom: '24px', left: '28px', color: 'rgba(226, 213, 195, 0.3)', fontSize: '8px' }}>✧</div>

      {isSignature && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(212, 175, 55, 0.2)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: 'var(--accent-gold)',
            fontSize: '0.7rem',
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            letterSpacing: '0.5px'
          }}
        >
          <Award size={12} /> SIGNATURE
        </div>
      )}

      {/* Center Icon circle */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.75rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
        }}
      >
        {getIcon()}
      </div>

      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.72rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)',
          opacity: 0.9,
          fontWeight: 600
        }}
      >
        The Celestial Story
      </div>

      <div
        style={{
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          marginTop: '2px'
        }}
      >
        {category}
      </div>
    </div>
  );
};
