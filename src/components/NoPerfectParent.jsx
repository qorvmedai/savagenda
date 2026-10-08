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
        <div style={{ maxWidth: '900px', margin: '0 auto 64px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            COMPASSIONATE INTENTIONALITY
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.6rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase'
            }}
          >
            THIS IS NOT ANOTHER BOOK <br />
            <span style={{ color: 'var(--accent-terracotta)' }}>TELLING YOU TO BE A PERFECT PARENT.</span>
          </h2>
        </div>

        {/* Short Editorial Statements with Generous Whitespace */}
        <div style={{ maxWidth: '780px', margin: '0 auto 64px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              textAlign: 'center'
            }}
          >
            {statements.map((stmt, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'clamp(1.15rem, 1.6vw, 1.45rem)',
                  fontWeight: idx === statements.length - 1 ? 800 : 500,
                  color: idx === statements.length - 1 ? 'var(--accent-amber)' : 'var(--text-dark)',
                  lineHeight: 1.5,
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
            padding: '36px 40px',
            backgroundColor: 'var(--bg-light)',
            borderLeft: '4px solid var(--accent-amber)',
            borderRadius: '0 4px 4px 0',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              margin: 0,
              lineHeight: 1.4
            }}
          >
            SALVAGE Agenda is not asking you to become perfect. <br />
            <span style={{ color: 'var(--accent-amber)' }}>It is asking you to become intentional.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
