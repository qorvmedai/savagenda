import React from 'react';

export default function NoPerfectParent() {
  const statements = [
    "You will make mistakes.",
    "You will lose your patience.",
    "You will get some conversations wrong.",
    "You will sometimes discover that the advice you are trying to apply is harder than it sounded on the page.",
    "That is parenting."
  ];

  return (
    <section
      id="no-perfect-parent"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            COMPASSIONATE INTENTIONALITY
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.45rem, 3.8vw, 3.4rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase'
            }}
          >
            THIS IS NOT ANOTHER BOOK <br className="desktop-only" />
            <span style={{ color: 'var(--accent-terracotta)' }}>TELLING YOU TO BE A PERFECT PARENT.</span>
          </h2>
        </div>

        {/* Short Editorial Statements with Generous Whitespace */}
        <div style={{ maxWidth: '780px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              textAlign: 'center'
            }}
          >
            {statements.map((stmt, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'clamp(1.05rem, 1.4vw, 1.35rem)',
                  fontWeight: idx === statements.length - 1 ? 800 : 500,
                  color: idx === statements.length - 1 ? 'var(--accent-amber)' : 'var(--text-dark)',
                  lineHeight: 1.45,
                  margin: 0,
                  fontFamily: idx === statements.length - 1 ? 'var(--font-sans)' : 'var(--font-serif)',
                  fontStyle: idx === statements.length - 1 ? 'normal' : 'italic'
                }}
              >
                {stmt}
              </p>
            ))}
          </div>
        </div>

        {/* Shift to Intentionality */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '24px clamp(16px, 3vw, 32px)',
            backgroundColor: 'var(--bg-light)',
            borderLeft: '4px solid var(--accent-amber)',
            borderRadius: '0 4px 4px 0',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              margin: 0,
              lineHeight: 1.4
            }}
          >
            SALVAGE Agenda is not asking you to become perfect. <br className="desktop-only" />
            <span style={{ color: 'var(--accent-amber)' }}>It is asking you to become intentional.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
