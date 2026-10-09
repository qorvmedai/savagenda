import React from 'react';
import { Compass, ShieldCheck, Heart, Scale, Award, BookOpen } from 'lucide-react';

export default function CentralIdea() {
  const values = [
    { name: "Discipline", desc: "Internal self-governance rather than external force.", icon: ShieldCheck },
    { name: "Respect", desc: "Mutual dignity built on trust rather than fear.", icon: Heart },
    { name: "Hard Work", desc: "Purposeful diligence adapted for modern opportunities.", icon: Award },
    { name: "Values", desc: "Unshakeable moral compass in a noisy digital age.", icon: Compass },
    { name: "Faith", desc: "Deep personal conviction that stands test of time.", icon: Scale },
    { name: "Character", desc: "Who they are when nobody is looking.", icon: BookOpen }
  ];

  return (
    <section
      id="central-idea"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Giant Headline */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE CORE PHILOSOPHY
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.45rem, 4.2vw, 3.8rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase'
            }}
          >
            THE <span style={{ color: 'var(--accent-amber)' }}>DESTINATION</span> CAN STAY THE SAME. <br className="desktop-only" />
            THE <span style={{ color: 'var(--accent-terracotta)' }}>STRATEGY</span> MAY HAVE TO CHANGE.
          </h2>
        </div>

        {/* Values Grid */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 48px' }}>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
              textAlign: 'center',
              color: 'var(--text-dark)',
              fontWeight: 600,
              marginBottom: '28px'
            }}
          >
            These timeless anchor values do not need to be abandoned:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px'
            }}
          >
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: '24px 20px',
                    backgroundColor: 'var(--bg-light)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(217, 119, 6, 0.1)',
                        color: 'var(--accent-amber)'
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                      {v.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Narrative Banner & Declaration */}
        <div
          style={{
            padding: 'clamp(28px, 4vw, 48px)',
            background: 'linear-gradient(135deg, var(--bg-dark) 0%, #171A21 100%)',
            color: '#FFFFFF',
            borderRadius: '4px',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '0 auto',
            boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
            border: '1px solid var(--border-dark)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--accent-amber), var(--accent-terracotta))'
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2vw, 1.75rem)',
              fontStyle: 'italic',
              color: '#FFFFFF',
              lineHeight: 1.4,
              marginBottom: '16px',
              fontWeight: 400
            }}
          >
            “The values can remain intact while the method of transmitting them evolves to meet modern realities.”
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.3rem)',
              letterSpacing: '0.05em',
              color: 'var(--accent-amber)',
              textTransform: 'uppercase'
            }}
          >
            <span>YOUR TIME IS NOT THEIR TIME.</span>
            <span style={{ color: '#FFFFFF' }}>THE WORLD THAT SHAPED YOU IS NOT THE WORLD SHAPING THEM.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
