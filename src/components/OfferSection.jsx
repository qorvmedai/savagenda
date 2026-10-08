import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function OfferSection({ onBuyClick, price, currency }) {
  return (
    <section
      id="checkout"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto 60px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            OFFICIAL RELEASE OFFER
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}
          >
            SALVAGE AGENDA
          </h2>

          <p style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)', color: 'var(--accent-terracotta)', fontWeight: 600 }}>
            {SITE_CONFIG.SUBTITLE}
          </p>
        </div>

        {/* Conversion Box Container */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-light)',
            border: '2px solid var(--accent-amber)',
            borderRadius: '6px',
            padding: 'clamp(32px, 5vw, 64px)',
            boxShadow: '0 24px 60px rgba(217, 119, 6, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Decorative Amber Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              backgroundColor: 'var(--accent-amber)'
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(32px, 4vw, 48px)',
              alignItems: 'center'
            }}
          >
            {/* Left: Product Image Showcase */}
            <div
              style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center' }}
              className="offer-img-col"
            >
              <div className="book-cover-frame">
                <div className="book-glow-backdrop"></div>
                <img
                  src={SITE_CONFIG.BOOK_COVER_IMAGE}
                  alt="SALVAGE Agenda Book Cover"
                  className="book-cover-img"
                  style={{ maxWidth: '340px' }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Pricing & CTA Details */}
            <div style={{ gridColumn: 'span 7' }} className="offer-details-col">
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--accent-amber)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                AUTHOR DIRECT EDITION
              </span>

              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: '16px',
                  textTransform: 'uppercase'
                }}
              >
                THE COMPLETE GUIDE + COMMUNITY
              </h3>

              {/* Price Tag Box */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  marginBottom: '24px',
                  padding: '16px 20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px'
                }}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  PRICE:
                </span>
                <span
                  style={{
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)',
                    fontWeight: 800,
                    color: 'var(--text-dark)'
                  }}
                >
                  {currency}{price}
                </span>
              </div>

              {/* Included Bonuses */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  marginBottom: '32px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-amber)" />
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    Complete <strong>SALVAGE Agenda</strong> Book
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MessageSquare size={20} color="var(--accent-terracotta)" />
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    <strong>{SITE_CONFIG.BONUS_COMMUNITY}</strong> (Included)
                  </span>
                </div>
              </div>

              {/* Main CTA Button */}
              <button
                onClick={onBuyClick}
                className="btn-primary"
                style={{
                  width: '100%',
                  justify: 'center',
                  padding: '20px 32px',
                  fontSize: '1.05rem',
                  marginBottom: '16px'
                }}
              >
                BUY SALVAGE AGENDA
                <ArrowRight size={20} />
              </button>

              {/* Secondary Reassurance */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <ShieldCheck size={16} color="var(--accent-amber)" />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  A practical guide for parents and future parents navigating a changing world.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .offer-img-col, .offer-details-col {
            grid-column: span 12 !important;
          }
          .offer-img-col {
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
