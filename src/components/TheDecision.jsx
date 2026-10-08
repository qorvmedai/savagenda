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
        <div style={{ maxWidth: '880px', margin: '0 auto 60px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE CHOICE BEFORE YOU
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase',
              marginBottom: '28px'
            }}
          >
            THE DECISION
          </h2>

          <p
            className="serif-italic"
            style={{
              fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
              color: 'var(--accent-terracotta)',
              fontWeight: 500,
              margin: 0
            }}
          >
            “One day, your child will inherit a world you cannot fully predict.”
          </p>
        </div>

        {/* What You Cannot Do */}
        <div style={{ maxWidth: '780px', margin: '0 auto 48px' }}>
          <div
            style={{
              padding: '32px 36px',
              backgroundColor: 'var(--bg-light)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
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
                  fontSize: 'clamp(1.02rem, 1.2vw, 1.15rem)',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                • {cannot}
              </p>
            ))}
          </div>
        </div>

        {/* Transition Highlight */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              fontWeight: 900,
              color: 'var(--accent-amber)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            BUT YOU CAN PREPARE THEM.
          </span>
        </div>

        {/* Actionable Progression List */}
        <div style={{ maxWidth: '880px', margin: '0 auto 64px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
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
                    gap: '20px',
                    padding: '24px 28px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                    borderRadius: '3px'
                  }}
                >
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'rgba(217, 119, 6, 0.1)',
                      color: 'var(--accent-amber)',
                      borderRadius: '4px',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <p
                    style={{
                      fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      margin: 0,
                      lineHeight: 1.5
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
            padding: '36px 40px',
            backgroundColor: 'var(--text-dark)',
            color: '#FFFFFF',
            borderRadius: '4px'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
              fontWeight: 800,
              color: 'var(--accent-amber)',
              margin: 0,
              letterSpacing: '0.05em',
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
