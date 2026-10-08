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
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Book Image */}
          <div
            style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center' }}
            className="positioning-book-col"
          >
            <div className="book-cover-frame">
              <div className="book-glow-backdrop"></div>
              <img
                src={SITE_CONFIG.BOOK_COVER_IMAGE}
                alt="SALVAGE Agenda Book Cover"
                className="book-cover-img"
                style={{ maxWidth: '380px' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Positioning Content */}
          <div style={{ gridColumn: 'span 7' }} className="positioning-text-col">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              {SITE_CONFIG.TITLE}
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-dark)',
                fontWeight: 800,
                marginBottom: '28px',
                textTransform: 'uppercase'
              }}
            >
              RAISING THE <span style={{ color: 'var(--accent-amber)' }}>NEXT GENERATION</span> <br />
              IN A WORLD THAT HAS ALREADY CHANGED
            </h2>

            {/* Major Visual Statement */}
            <div
              style={{
                padding: '32px 36px',
                backgroundColor: 'var(--bg-light)',
                borderLeft: '4px solid var(--accent-terracotta)',
                marginBottom: '36px'
              }}
            >
              <h3
                className="serif-italic"
                style={{
                  fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                  lineHeight: 1.35,
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
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .positioning-book-col, .positioning-text-col {
            grid-column: span 12 !important;
          }
          .positioning-book-col {
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  );
}
