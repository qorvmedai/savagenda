import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function BookPositioning({ onBuyClick }) {
  return (
    <section
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        textAlign: 'center'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            {SITE_CONFIG.TITLE}
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(1.55rem, 4vw, 3.4rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              color: 'var(--text-dark)',
              fontWeight: 800,
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}
          >
            RAISING THE <span style={{ color: 'var(--accent-amber)' }}>NEXT GENERATION</span> <br className="desktop-only" />
            IN A WORLD THAT HAS ALREADY CHANGED
          </h2>

          {/* Centered Book Cover Showcase */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px'
            }}
          >
            <div className="book-cover-frame">
              <div className="book-glow-backdrop"></div>
              <img
                src={SITE_CONFIG.BOOK_COVER_IMAGE}
                alt="SALVAGE Agenda Book Cover"
                className="book-cover-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Major Visual Statement */}
          <div
            style={{
              padding: '24px 28px',
              backgroundColor: 'var(--bg-light)',
              borderLeft: '4px solid var(--accent-terracotta)',
              marginBottom: '28px',
              maxWidth: '780px',
              margin: '0 auto 28px'
            }}
          >
            <h3
              className="serif-italic"
              style={{
                fontSize: 'clamp(1.15rem, 1.8vw, 1.7rem)',
                lineHeight: 1.4,
                color: 'var(--text-dark)',
                margin: 0,
                fontWeight: 600
              }}
            >
              “Don't prepare your child for the world you survived. Prepare them for the world they will inherit.”
            </h3>
          </div>

          <button onClick={onBuyClick} className="btn-primary">
            BUY SALVAGE AGENDA NOW
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
