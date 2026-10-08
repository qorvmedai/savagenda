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
        paddingTop: 'clamp(100px, 14vw, 160px)',
        paddingBottom: 'clamp(100px, 14vw, 160px)',
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
          maxWidth: '800px',
          maxHeight: '800px',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.16) 0%, rgba(194, 94, 46, 0.04) 50%, transparent 80%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Eyebrow */}
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="eyebrow-dot" style={{ backgroundColor: 'var(--accent-amber)' }}></span>
          {SITE_CONFIG.TITLE} • FINAL CALL
        </div>

        {/* Oversized Statement */}
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            fontWeight: 800,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            maxWidth: '1100px',
            margin: '0 auto 40px'
          }}
        >
          DON'T PREPARE YOUR CHILD <br />
          <span style={{ color: 'var(--accent-terracotta)' }}>FOR THE WORLD YOU SURVIVED.</span> <br />
          <span style={{ color: 'var(--accent-amber)' }}>PREPARE THEM FOR THE WORLD THEY WILL INHERIT.</span>
        </h2>

        {/* Offer Summary Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '48px'
          }}
        >
          <span
            style={{
              padding: '10px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-dark)',
              borderRadius: '2px',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            BOOK: {currency}{price}
          </span>

          <span
            style={{
              padding: '10px 20px',
              backgroundColor: 'rgba(217, 119, 6, 0.15)',
              border: '1px solid rgba(217, 119, 6, 0.3)',
              borderRadius: '2px',
              fontSize: '0.95rem',
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
              padding: '22px 48px',
              fontSize: '1.15rem'
            }}
          >
            <ShoppingBag size={22} />
            BUY SALVAGE AGENDA
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
