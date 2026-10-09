import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function RefuseToUpgrade({ onBuyClick }) {
  const consequences = [
    "A child may learn to obey without learning to think.",
    "They may learn to fear correction without understanding responsibility.",
    "They may learn to hide problems instead of bringing them home.",
    "They may become excellent at following instructions but struggle when nobody gives them instructions.",
    "They may know how to earn certificates but not how to navigate money, relationships, pressure, identity, failure, technology, or uncertainty."
  ];

  return (
    <section
      id="refuse-to-upgrade"
      className="section-shell dark-deep"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)'
      }}
    >
      {/* Background Warm Amber Atmospheric Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '75vw',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.16) 0%, rgba(194, 94, 46, 0.05) 50%, transparent 80%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" style={{ backgroundColor: 'var(--accent-terracotta)' }}></span>
            THE HARD REALITY
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.45rem, 4.2vw, 3.8rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: '#FFFFFF',
              textTransform: 'uppercase'
            }}
          >
            BUT LET'S SAY <br className="desktop-only" />
            <span style={{ color: 'var(--accent-amber)' }}>YOU REFUSE TO UPGRADE.</span>
          </h2>
        </div>

        {/* Revealed Consequences List */}
        <div style={{ maxWidth: '840px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {consequences.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '18px 20px',
                  backgroundColor: 'var(--bg-dark-card)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '2px'
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--accent-amber)',
                    padding: '3px 8px',
                    backgroundColor: 'rgba(217, 119, 6, 0.12)',
                    borderRadius: '2px',
                    flexShrink: 0
                  }}
                >
                  0{idx + 1}
                </div>
                <p
                  style={{
                    fontSize: 'clamp(0.92rem, 1.05vw, 1.05rem)',
                    color: '#E5E7EB',
                    margin: 0,
                    lineHeight: 1.55,
                    fontWeight: 500
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Climax — Major Typographic Moment */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 48px',
            padding: 'clamp(24px, 4vw, 48px)',
            backgroundColor: 'rgba(217, 119, 6, 0.08)',
            borderLeft: '4px solid var(--accent-amber)',
            borderRadius: '0 4px 4px 0',
            position: 'relative'
          }}
        >
          <p
            className="serif-italic"
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.85rem)',
              lineHeight: 1.4,
              color: '#FFFFFF',
              margin: 0,
              fontWeight: 500
            }}
          >
            “And perhaps most painfully, they may grow up knowing that their parent loved them—but not feeling safe enough to tell that parent what is really happening inside their world.”
          </p>
        </div>

        {/* Conclusion Box */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.2vw, 1.2rem)',
              lineHeight: 1.6,
              color: 'var(--text-light-muted)',
              marginBottom: '28px'
            }}
          >
            The danger is not that you don't love your child. <br className="desktop-only" />
            <strong style={{ color: '#FFFFFF' }}>
              The danger is that love, without an updated method of expression, may not produce the result you intended.
            </strong>
          </p>

          <button onClick={onBuyClick} className="btn-dark-primary">
            GET SALVAGE AGENDA NOW
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
