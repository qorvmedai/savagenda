import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function FinalCTA({ onBuyClick, price, currency }) {
  return (
    <section
      id="final-cta"
      className="section-shell"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        position: 'relative',
        paddingTop: 'clamp(80px, 10vw, 140px)',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
        borderTop: '1px solid var(--border-dark)'
      }}
    >
      {/* Ambient Ember Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.16) 0%, rgba(194, 94, 46, 0.04) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Eyebrow */}
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="eyebrow-dot" style={{ backgroundColor: 'var(--accent-amber)' }}></span>
          {SITE_CONFIG.TITLE} • FINAL CALL
        </div>

        {/* Oversized Statement (Fluid & Mobile Break Safe) */}
        <h2
          style={{
            fontSize: 'clamp(1.45rem, 4.5vw, 4.2rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            fontWeight: 800,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            maxWidth: '1050px',
            margin: '0 auto 36px'
          }}
        >
          DON'T PREPARE YOUR CHILD <br className="desktop-only" />
          <span style={{ color: 'var(--accent-terracotta)' }}>FOR THE WORLD YOU SURVIVED.</span> <br className="desktop-only" />
          <span style={{ color: 'var(--accent-amber)' }}>PREPARE THEM FOR THE WORLD THEY WILL INHERIT.</span>
        </h2>

        {/* Offer Summary Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '36px'
          }}
        >
          <span
            style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-dark)',
              borderRadius: '2px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            BOOK: {currency}{price}
          </span>

          <span
            style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(217, 119, 6, 0.15)',
              border: '1px solid rgba(217, 119, 6, 0.3)',
              borderRadius: '2px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-amber)'
            }}
          >
            WhatsApp Community: Included
          </span>
        </div>

        {/* Primary Purchase Button */}
        <div>
          <button
            onClick={onBuyClick}
            className="btn-dark-primary"
            style={{
              padding: '18px 36px',
              fontSize: '1.05rem'
            }}
          >
            <ShoppingBag size={20} />
            BUY SALVAGE AGENDA
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
