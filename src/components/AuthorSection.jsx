import React from 'react';
import { SITE_CONFIG } from '../config';

export default function AuthorSection() {
  return (
    <section
      id="the-author"
      className="section-shell"
      style={{
        backgroundColor: 'var(--bg-light)',
        textAlign: 'center'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            ABOUT THE AUTHOR
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.45rem, 3.8vw, 3.2rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              color: 'var(--text-dark)',
              fontWeight: 800,
              marginBottom: '28px',
              textTransform: 'uppercase'
            }}
          >
            WHY <span style={{ color: 'var(--accent-amber)' }}>PATRICK ANIETIE JOHN</span> <br className="desktop-only" />
            WROTE THIS BOOK
          </h2>

          {/* Centered Author Portrait */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px'
            }}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '320px',
                width: '100%',
                padding: '8px'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: '16px',
                  bottom: '16px',
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
                  boxShadow: '0 16px 36px rgba(0,0,0,0.12)',
                  position: 'relative',
                  zIndex: 1
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio Details */}
          <div style={{ maxWidth: '750px', margin: '0 auto 28px' }}>
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                fontWeight: 700,
                color: 'var(--text-dark)',
                marginBottom: '10px'
              }}
            >
              Founder of Awesome Planet
            </p>

            <p
              style={{
                fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '20px'
              }}
            >
              Patrick Anietie John is the founder of <strong>Awesome Planet</strong>, a globally recognized organization dedicated to building stronger families for a better society.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '24px'
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
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    padding: '6px 12px',
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

            <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1rem)', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              Through family counselling, keynote public speaking, and confidential advisory work with high-profile families across America and Europe, Patrick has observed firsthand the profound gap between traditional parenting intentions and modern youth outcomes.
            </p>
          </div>

          {/* Core Author Philosophy Highlight */}
          <div
            style={{
              padding: '24px 28px',
              backgroundColor: '#FFFFFF',
              borderLeft: '4px solid var(--accent-amber)',
              borderRadius: '0 4px 4px 0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              maxWidth: '750px',
              margin: '0 auto'
            }}
          >
            <p
              className="serif-italic"
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
                lineHeight: 1.4,
                color: 'var(--text-dark)',
                marginBottom: '8px',
                fontWeight: 600
              }}
            >
              “Every generation inherits both wisdom and gaps.”
            </p>

            <p
              style={{
                fontSize: 'clamp(0.88rem, 1vw, 0.98rem)',
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
    </section>
  );
}
