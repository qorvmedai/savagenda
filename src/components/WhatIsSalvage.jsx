import React from 'react';

export default function WhatIsSalvage() {
  const pillars = [
    {
      num: "01",
      title: "PRACTICAL EXAMINATION",
      desc: "This is not theoretical jargon or academic posturing. It is a field-tested examination of modern family dynamics, digital exposure, and parental authority."
    },
    {
      num: "02",
      title: "ONE CENTRAL IDEA",
      desc: "Built entirely around the premise that traditional values remain vital, but the vehicle used to transmit those values must adapt to today's cultural and technological reality."
    },
    {
      num: "03",
      title: "AN INTENTIONAL BLUEPRINT",
      desc: "Designed to shift parents from reactive firefighting to proactive, strategic parenting—building emotional safety, intellectual independence, and moral strength."
    }
  ];

  return (
    <section
      id="what-is-salvage"
      className="section-shell"
      style={{
        backgroundColor: 'var(--bg-light)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto 48px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            EXECUTIVE SUMMARY
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.45rem, 4vw, 3.4rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              marginBottom: '18px',
              textTransform: 'uppercase'
            }}
          >
            WHAT IS <span style={{ color: 'var(--accent-amber)' }}>SALVAGE AGENDA?</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.15vw, 1.15rem)',
              lineHeight: 1.65,
              color: 'var(--text-muted)'
            }}
          >
            SALVAGE Agenda is a modern parenting blueprint for raising children with discipline, character, unshakeable values, transparent communication, and adaptability in a world that has already changed forever.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px 24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                position: 'relative'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: 'rgba(217, 119, 6, 0.25)',
                  display: 'block',
                  marginBottom: '12px',
                  lineHeight: 1
                }}
              >
                {item.num}
              </span>

              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: '10px',
                  letterSpacing: '0.01em',
                  textTransform: 'uppercase'
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
