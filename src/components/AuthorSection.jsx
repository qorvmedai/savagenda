import React from 'react';
import { SITE_CONFIG } from '../config';

export default function AuthorSection() {
  return (
    <section
      id="the-author"
      className="section-shell"
      style={{
        backgroundColor: 'var(--bg-light)'
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
          {/* Left Column: Author Image */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              justifyContent: 'center'
            }}
            className="author-img-col"
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '400px',
                width: '100%'
              }}
            >
              {/* Tasteful editorial framing around portrait */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  right: '12px',
                  bottom: '12px',
                  border: '2px solid var(--accent-amber)',
                  borderRadius: '4px',
                  zIndex: 0,
                  opacity: 0.6
                }}
              />

              <img
                src={SITE_CONFIG.AUTHOR_PORTRAIT_IMAGE}
                alt="Patrick Anietie John - Author of SALVAGE Agenda"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '3px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  position: 'relative',
                  zIndex: 1
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Author Biography & Philosophy */}
          <div style={{ gridColumn: 'span 7' }} className="author-text-col">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              ABOUT THE AUTHOR
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-dark)',
                fontWeight: 800,
                marginBottom: '24px',
                textTransform: 'uppercase'
              }}
            >
              WHY <span style={{ color: 'var(--accent-amber)' }}>PATRICK ANIETIE JOHN</span> <br />
              WROTE THIS BOOK
            </h2>

            {/* Credentials / Bio Highlights */}
            <div style={{ marginBottom: '28px' }}>
              <p
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  marginBottom: '12px'
                }}
              >
                Founder of Awesome Planet
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '20px'
                }}
              >
                Patrick Anietie John is the founder of <strong>Awesome Planet</strong>, a globally recognized organization dedicated to building stronger families for a better society.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '28px'
                }}
              >
                {[
                  "Awesome Planet Founder",
                  "Family Counselling",
                  "Public Speaker",
                  "Trusted Confidant across America & Europe"
                ].map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      padding: '8px 16px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      color: 'var(--text-dark)'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Through family counselling, keynote public speaking, and confidential advisory work with high-profile families across America and Europe, Patrick has observed firsthand the profound gap between traditional parenting intentions and modern youth outcomes.
              </p>
            </div>

            {/* Core Author Philosophy Highlight */}
            <div
              style={{
                padding: '28px 32px',
                backgroundColor: '#FFFFFF',
                borderLeft: '4px solid var(--accent-amber)',
                borderRadius: '0 4px 4px 0',
                boxShadow: '0 6px 20px rgba(0,0,0,0.03)'
              }}
            >
              <p
                className="serif-italic"
                style={{
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                  lineHeight: 1.4,
                  color: 'var(--text-dark)',
                  marginBottom: '12px',
                  fontWeight: 600
                }}
              >
                “Every generation inherits both wisdom and gaps.”
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--accent-terracotta)',
                  margin: 0
                }}
              >
                “Our responsibility is to be honest enough to preserve the wisdom—and courageous enough to close the gaps.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .author-img-col, .author-text-col {
            grid-column: span 12 !important;
          }
          .author-img-col {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
}
