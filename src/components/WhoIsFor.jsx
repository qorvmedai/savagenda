import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { AUDIENCE_TARGETS } from '../config';

export default function WhoIsFor({ onBuyClick }) {
  return (
    <section
      id="who-is-for"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto 48px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            TARGET AUDIENCE
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.45rem, 4vw, 3.4rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}
          >
            THIS BOOK IS <span style={{ color: 'var(--accent-amber)' }}>FOR YOU IF...</span>
          </h2>

          <p style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.08rem)', color: 'var(--text-muted)' }}>
            SALVAGE Agenda was written for intentional individuals who refuse to leave their child's future to chance.
          </p>
        </div>

        {/* Audience List */}
        <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {AUDIENCE_TARGETS.map((target, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '18px 20px',
                  backgroundColor: 'var(--bg-light)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  transition: 'transform 0.25s ease, border-color 0.25s ease'
                }}
                className="audience-item"
              >
                <div
                  style={{
                    padding: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(217, 119, 6, 0.12)',
                    color: 'var(--accent-amber)',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Check size={16} strokeWidth={3} />
                </div>

                <p
                  style={{
                    fontSize: 'clamp(0.92rem, 1.05vw, 1.08rem)',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    margin: 0,
                    lineHeight: 1.5
                  }}
                >
                  {target}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            CLAIM YOUR COPY OF SALVAGE AGENDA
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .audience-item:hover {
          border-color: var(--accent-amber);
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
