import React from 'react';
import { ArrowRight, XCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function BookIntro({ onBuyClick }) {
  return (
    <section
      id="the-book"
      className="section-shell"
      style={{
        backgroundColor: 'var(--bg-light)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            INTRODUCING THE BOOK
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 3.8rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text-dark)',
              fontWeight: 800,
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}
          >
            THE SALVAGE AGENDA
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
              color: 'var(--accent-terracotta)',
              fontWeight: 600,
              lineHeight: 1.4
            }}
          >
            {SITE_CONFIG.SUBTITLE}
          </p>
        </div>

        {/* Grid Layout: Large Book Reveal & Core Clarifications */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(24px, 4vw, 56px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Book Image Showcase */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              justifyContent: 'center'
            }}
            className="intro-book-col"
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

          {/* Right Column: Narrative & What This Book Is NOT */}
          <div
            style={{
              gridColumn: 'span 7'
            }}
            className="intro-text-col"
          >
            <h3
              style={{
                fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
                fontWeight: 800,
                color: 'var(--text-dark)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              And this is where <span style={{ color: 'var(--accent-amber)' }}>SALVAGE Agenda</span> begins.
            </h3>

            <p style={{ fontSize: 'clamp(0.92rem, 1.05vw, 1.02rem)', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Most parenting advice fails because it swings between two dangerous extremes: total rigid traditionalism or unstructured permissiveness. SALVAGE Agenda cuts through the noise with practical wisdom.
            </p>

            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)',
                display: 'block',
                marginBottom: '16px'
              }}
            >
              WHAT SALVAGE AGENDA DOES NOT DO:
            </span>

            {/* Visually Separated Clarifications */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '28px'
              }}
            >
              {[
                "Not by telling you to throw away everything your parents taught you.",
                "Not by pretending the past was useless.",
                "Not by replacing discipline with permissiveness.",
                "Not by telling parents that children should simply be allowed to do whatever they want."
              ].map((text, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px 16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                >
                  <XCircle size={18} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: 'clamp(0.88rem, 1vw, 0.98rem)', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.45 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Statement */}
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'var(--bg-dark)',
                color: '#FFFFFF',
                borderRadius: '4px',
                marginBottom: '28px'
              }}
            >
              <h4
                style={{
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)',
                  fontWeight: 800,
                  color: 'var(--accent-amber)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}
              >
                QUITE THE OPPOSITE.
              </h4>
              <p style={{ color: 'var(--text-light-muted)', margin: 0, fontSize: 'clamp(0.88rem, 1vw, 0.95rem)' }}>
                It shows you how to preserve timeless values while modernizing the method by which you instill them into your child's heart and mind.
              </p>
            </div>

            <button onClick={onBuyClick} className="btn-primary">
              GET SALVAGE AGENDA
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .intro-book-col, .intro-text-col {
            grid-column: span 12 !important;
          }
          .intro-book-col {
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
