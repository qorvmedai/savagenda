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
        <div style={{ maxWidth: '840px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE PACKAGE
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.45rem, 4vw, 3.6rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
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
            margin: '0 auto 48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {/* Main Product: Complete Book (7 cols on desktop) */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#FFFFFF',
              border: '2px solid var(--accent-amber)',
              borderRadius: '4px',
              padding: 'clamp(24px, 4vw, 40px)',
              position: 'relative',
              boxShadow: '0 12px 32px rgba(217, 119, 6, 0.1)'
            }}
            className="wyg-main-col"
          >
            <span
              style={{
                position: 'absolute',
                top: '-12px',
                left: '24px',
                backgroundColor: 'var(--accent-amber)',
                color: '#FFFFFF',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                padding: '3px 12px',
                borderRadius: '2px',
                textTransform: 'uppercase'
              }}
            >
              PRIMARY ITEM
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  padding: '10px',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  borderRadius: '4px',
                  color: 'var(--accent-amber)',
                  flexShrink: 0
                }}
              >
                <Book size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)', fontWeight: 800, color: 'var(--text-dark)' }}>
                  THE COMPLETE SALVAGE AGENDA BOOK
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                  By {SITE_CONFIG.AUTHOR}
                </p>
              </div>
            </div>

            <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1rem)', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Full access to all 6 chapters containing field-tested frameworks, strategic parenting tools, and actionable guidance for modern families.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0 }}>
              {[
                "High-quality editorial layout & readable formatting",
                "Actionable conversation guides for children & teens",
                "Framework for balancing discipline with emotional safety"
              ].map((feat, fIdx) => (
                <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                  <CheckCircle size={15} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
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
              padding: 'clamp(24px, 4vw, 36px)',
              position: 'relative',
              border: '1px solid var(--border-dark)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}
            className="wyg-bonus-col"
          >
            <div>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: 'var(--accent-terracotta)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                INCLUDED ACCESS BONUS
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <MessageSquare size={22} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
                <h3 style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3 }}>
                  {SITE_CONFIG.BONUS_COMMUNITY}
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                Exclusive access to an active community of like-minded parents, discussion forums, and ongoing insights from Patrick Anietie John.
              </p>
            </div>

            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(217, 119, 6, 0.2)',
                  color: 'var(--accent-amber)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  borderRadius: '2px',
                  letterSpacing: '0.04em'
                }}
              >
                INCLUDED WITH YOUR ORDER
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            GET SALVAGE AGENDA NOW
            <ArrowRight size={16} />
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
