import React from 'react';
import { Compass, Lightbulb, HeartHandshake, Shield, Sparkles } from 'lucide-react';

export default function TheDecision() {
  const progressions = [
    { text: "You can give them a compass.", icon: Compass },
    { text: "You can teach them how to think.", icon: Lightbulb },
    { text: "You can build a relationship they can return to.", icon: HeartHandshake },
    { text: "You can model the character you want them to carry.", icon: Shield },
    { text: "You can make sure that the wisdom you inherited does not disappear simply because the world changed.", icon: Sparkles }
  ];

  return (
    <section
      id="the-decision"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '880px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE CHOICE BEFORE YOU
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            THE DECISION
          </h2>

          <p
            className="serif-italic"
            style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
              color: 'var(--accent-terracotta)',
              fontWeight: 500,
              margin: 0
            }}
          >
            “One day, your child will inherit a world you cannot fully predict.”
          </p>
        </div>

        {/* What You Cannot Do */}
        <div style={{ maxWidth: '780px', margin: '0 auto 36px' }}>
          <div
            style={{
              padding: '24px 28px',
              backgroundColor: 'var(--bg-light)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {[
              "You will not be able to follow them into every classroom.",
              "You will not be able to monitor every conversation.",
              "You will not be able to see every screen.",
              "You will not be able to make every decision for them."
            ].map((cannot, cIdx) => (
              <p
                key={cIdx}
                style={{
                  fontSize: 'clamp(0.88rem, 1.05vw, 1.02rem)',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.45
                }}
              >
                • {cannot}
              </p>
            ))}
          </div>
        </div>

        {/* Transition Highlight */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)',
              fontWeight: 900,
              color: 'var(--accent-amber)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}
          >
            BUT YOU CAN PREPARE THEM.
          </span>
        </div>

        {/* Actionable Progression List */}
        <div style={{ maxWidth: '880px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {progressions.map((prog, pIdx) => {
              const IconComp = prog.icon;
              return (
                <div
                  key={pIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px 20px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    borderRadius: '3px'
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      backgroundColor: 'rgba(217, 119, 6, 0.1)',
                      color: 'var(--accent-amber)',
                      borderRadius: '4px',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={18} />
                  </div>
                  <p
                    style={{
                      fontSize: 'clamp(0.92rem, 1.05vw, 1.08rem)',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      margin: 0,
                      lineHeight: 1.45
                    }}
                  >
                    {prog.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Affirmation */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '28px 32px',
            backgroundColor: 'var(--text-dark)',
            color: '#FFFFFF',
            borderRadius: '4px'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.55rem)',
              fontWeight: 800,
              color: 'var(--accent-amber)',
              margin: 0,
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}
          >
            THAT IS THE WORK OF SALVAGE AGENDA.
          </p>
        </div>
      </div>
    </section>
  );
}
