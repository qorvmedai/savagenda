import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CostOfWaiting({ onBuyClick }) {
  return (
    <section
      id="cost-of-waiting"
      className="section-shell dark-deep"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)'
      }}
    >
      {/* Father & Child Sky Horizon Sunset Backdrop Effect */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(to top, rgba(217, 119, 6, 0.18) 0%, rgba(194, 94, 46, 0.06) 50%, transparent 100%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" style={{ backgroundColor: 'var(--accent-terracotta)' }}></span>
            THE URGENCY OF TIME
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.6rem, 4.5vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: '#FFFFFF',
              textTransform: 'uppercase'
            }}
          >
            THE COST <br className="desktop-only" />
            <span style={{ color: 'var(--accent-amber)' }}>OF WAITING</span>
          </h2>
        </div>

        {/* Minimal Narrative Build */}
        <div style={{ maxWidth: '720px', margin: '0 auto 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)', color: 'var(--text-light-muted)', marginBottom: '12px', fontWeight: 500 }}>
              There is always another day.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)', color: 'var(--text-light-muted)', marginBottom: '12px', fontWeight: 500 }}>
              Another conversation.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)', color: 'var(--text-light-muted)', marginBottom: '12px', fontWeight: 500 }}>
              Another correction.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)', color: 'var(--text-light-muted)', marginBottom: '12px', fontWeight: 500 }}>
              Another opportunity to explain.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)', color: 'var(--text-light-muted)', marginBottom: '24px', fontWeight: 500 }}>
              Another chance to listen.
            </p>

            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: 'var(--accent-amber)',
                margin: '24px auto'
              }}
            />

            <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)', color: '#FFFFFF', fontWeight: 700, marginBottom: '10px' }}>
              Until suddenly, the child is older.
            </p>
            <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)', color: '#FFFFFF', fontWeight: 700, marginBottom: '10px' }}>
              The problems are bigger.
            </p>
            <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)', color: '#FFFFFF', fontWeight: 700, marginBottom: '10px' }}>
              The influences are stronger.
            </p>
            <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)', color: 'var(--accent-terracotta)', fontWeight: 800 }}>
              The distance is harder to close.
            </p>
          </div>
        </div>

        {/* Major Emotional Climax Statement */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 48px',
            padding: 'clamp(24px, 4vw, 48px)',
            backgroundColor: 'rgba(13, 15, 18, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(217, 119, 6, 0.3)',
            borderRadius: '4px',
            textAlign: 'center',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)'
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
            “You cannot control every influence your child will encounter. <br className="desktop-only" />
            <span style={{ color: 'var(--accent-amber)', fontStyle: 'normal', fontWeight: 700 }}>
              But you can influence the kind of foundation they carry into every encounter.
            </span>”
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-dark-primary">
            GET SALVAGE AGENDA TODAY
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
