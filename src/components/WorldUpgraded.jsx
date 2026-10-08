import React from 'react';

export default function WorldUpgraded() {
  return (
    <section
      id="world-upgraded"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Large Typographic Statement */}
        <div style={{ maxWidth: '900px', marginBottom: '60px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            THE REALIZATION
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--text-dark)',
              fontWeight: 800,
              textTransform: 'uppercase'
            }}
          >
            THE WORLD UPGRADED. <br />
            <span style={{ color: 'var(--accent-amber)' }}>DID YOUR PARENTING?</span>
          </h2>
        </div>

        {/* Lead Quote Paragraph */}
        <div
          style={{
            maxWidth: '820px',
            marginBottom: '64px',
            paddingLeft: '24px',
            borderLeft: '3px solid var(--accent-terracotta)'
          }}
        >
          <p
            className="serif-italic"
            style={{
              fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
              lineHeight: 1.45,
              color: 'var(--text-dark)',
              fontWeight: 400
            }}
          >
            “In 2019, the world demonstrated something every parent should have noticed: the ability to adapt is not a luxury. It is a survival skill.”
          </p>
        </div>

        {/* Editorial Fragments Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          {[
            { label: "WORK CHANGED", sub: "Remote, automated, and globalized." },
            { label: "SCHOOL CHANGED", sub: "Digital learning and instant information." },
            { label: "BUSINESS CHANGED", sub: "New financial models and platforms." },
            { label: "COMMUNICATION CHANGED", sub: "Instant messaging, algorithms, and social feeds." },
            { label: "TECHNOLOGY ACCELERATED", sub: "AI and machine intelligence rewriting rules." }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: '28px 24px',
                backgroundColor: 'var(--bg-light)',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              className="editorial-fragment-box"
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--accent-amber)',
                  display: 'block',
                  marginBottom: '10px',
                  letterSpacing: '0.1em'
                }}
              >
                0{index + 1}
              </span>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em'
                }}
              >
                {item.label}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Central Observation */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto 64px',
            padding: '32px',
            backgroundColor: 'var(--bg-light)',
            borderRadius: '4px',
            border: '1px dashed rgba(18, 20, 23, 0.15)'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              margin: 0
            }}
          >
            Yet in many homes, the parenting curriculum remained exactly the same.
          </p>
        </div>

        {/* Traditional Echoes Quotes */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              display: 'block',
              textAlign: 'center',
              marginBottom: '24px'
            }}
          >
            STATEMENTS FAMILIAR TO ALMOST EVERY HOUSEHOLD
          </span>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}
          >
            {[
              "“That is how I was trained.”",
              "“My parents never allowed that.”",
              "“We didn't behave like this in our time.”"
            ].map((quote, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  textAlign: 'center'
                }}
              >
                <p
                  className="serif-italic"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-dark)',
                    margin: 0,
                    fontWeight: 600
                  }}
                >
                  {quote}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)',
              lineHeight: 1.7,
              color: 'var(--text-dark)',
              textAlign: 'center',
              fontWeight: 500
            }}
          >
            Those statements may contain wisdom. But they cannot be the entire parenting strategy for a child living in a completely different world.
          </p>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-amber)',
                display: 'inline-block',
                position: 'relative'
              }}
            >
              EXACTLY WHY WE WROTE...
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .editorial-fragment-box:hover {
          transform: translateY(-4px);
          border-color: var(--accent-amber);
        }
      `}</style>
    </section>
  );
}
