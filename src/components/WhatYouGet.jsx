import React from 'react';
import { Book, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function WhatYouGet({ onBuyClick }) {
  return (
    <section
      id="what-you-get"
      className="section-shell"
      style={{
        backgroundColor: 'var(--bg-light)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto 60px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE PACKAGE
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase'
            }}
          >
            WHAT <span style={{ color: 'var(--accent-amber)' }}>YOU GET</span>
          </h2>
        </div>

        {/* Product Cards Container */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto 60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          {/* Main Product: Complete Book (8 cols on desktop) */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#FFFFFF',
              border: '2px solid var(--accent-amber)',
              borderRadius: '4px',
              padding: 'clamp(32px, 4vw, 48px)',
              position: 'relative',
              boxShadow: '0 16px 40px rgba(217, 119, 6, 0.12)'
            }}
            className="wyg-main-col"
          >
            <span
              style={{
                position: 'absolute',
                top: '-14px',
                left: '32px',
                backgroundColor: 'var(--accent-amber)',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                padding: '4px 16px',
                borderRadius: '2px',
                textTransform: 'uppercase'
              }}
            >
              PRIMARY ITEM
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  padding: '12px',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  borderRadius: '4px',
                  color: 'var(--accent-amber)'
                }}
              >
                <Book size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                  THE COMPLETE SALVAGE AGENDA BOOK
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                  By {SITE_CONFIG.AUTHOR}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Full access to all 6 chapters containing field-tested frameworks, strategic parenting tools, and actionable guidance for modern families.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0 }}>
              {[
                "High-quality editorial layout & readable formatting",
                "Actionable conversation guides for children & teens",
                "Framework for balancing discipline with emotional safety"
              ].map((feat, fIdx) => (
                <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                  <CheckCircle size={16} color="var(--accent-amber)" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Bonus Item: WhatsApp Community (5 cols on desktop) */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: 'var(--bg-dark)',
              color: '#FFFFFF',
              borderRadius: '4px',
              padding: 'clamp(32px, 4vw, 44px)',
              position: 'relative',
              border: '1px solid var(--border-dark)'
            }}
            className="wyg-bonus-col"
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: 'var(--accent-terracotta)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              INCLUDED ACCESS BONUS
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <MessageSquare size={24} color="var(--accent-amber)" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3 }}>
                {SITE_CONFIG.BONUS_COMMUNITY}
              </h3>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Exclusive access to an active community of like-minded parents, discussion forums, and ongoing insights from Patrick Anietie John.
            </p>

            <span
              style={{
                display: 'inline-block',
                padding: '6px 14px',
                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                color: 'var(--accent-amber)',
                fontSize: '0.8rem',
                fontWeight: 700,
                borderRadius: '2px',
                letterSpacing: '0.05em'
              }}
            >
              INCLUDED WITH YOUR ORDER
            </span>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            GET SALVAGE AGENDA NOW
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .wyg-main-col, .wyg-bonus-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
