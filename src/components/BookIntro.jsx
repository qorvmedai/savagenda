import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
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
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            INTRODUCING THE BOOK
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text-dark)',
              fontWeight: 800,
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}
          >
            THE SALVAGE AGENDA
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.15rem, 1.5vw, 1.4rem)',
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
            gap: 'clamp(32px, 5vw, 64px)',
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
                style={{ maxWidth: '380px' }}
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
                fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                fontWeight: 800,
                color: 'var(--text-dark)',
                marginBottom: '20px',
                lineHeight: 1.2
              }}
            >
              And this is where <span style={{ color: 'var(--accent-amber)' }}>SALVAGE Agenda</span> begins.
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
              Most parenting advice fails because it swings between two dangerous extremes: total rigid traditionalism or unstructured permissiveness. SALVAGE Agenda cuts through the noise with practical wisdom.
            </p>

            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)',
                display: 'block',
                marginBottom: '20px'
              }}
            >
              WHAT SALVAGE AGENDA DOES NOT DO:
            </span>

            {/* Visually Separated Clarifications */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '36px'
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
                    gap: '14px',
                    padding: '16px 20px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  <XCircle size={20} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.5 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Statement */}
            <div
              style={{
                padding: '24px 28px',
                backgroundColor: 'var(--bg-dark)',
                color: '#FFFFFF',
                borderRadius: '4px',
                marginBottom: '32px'
              }}
            >
              <h4
                style={{
                  fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
                  fontWeight: 800,
                  color: 'var(--accent-amber)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}
              >
                QUITE THE OPPOSITE.
              </h4>
              <p style={{ color: 'var(--text-light-muted)', margin: 0, fontSize: '0.98rem' }}>
                It shows you how to preserve timeless values while modernizing the method by which you instill them into your child's heart and mind.
              </p>
            </div>

            <button onClick={onBuyClick} className="btn-primary">
              GET SALVAGE AGENDA
              <ArrowRight size={18} />
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
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  );
}
