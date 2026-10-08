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
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 64px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE CORE PHILOSOPHY
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.8vw, 4.4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase'
            }}
          >
            THE <span style={{ color: 'var(--accent-amber)', underline: 'underline' }}>DESTINATION</span> CAN STAY THE SAME. <br />
            THE <span style={{ color: 'var(--accent-terracotta)' }}>STRATEGY</span> MAY HAVE TO CHANGE.
          </h2>
        </div>

        {/* Values Grid */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 64px' }}>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)',
              textAlign: 'center',
              color: 'var(--text-dark)',
              fontWeight: 600,
              marginBottom: '36px'
            }}
          >
            These timeless anchor values do not need to be abandoned:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: '32px 28px',
                    backgroundColor: 'var(--bg-light)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(217, 119, 6, 0.1)',
                        color: 'var(--accent-amber)'
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                      {v.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
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
            padding: 'clamp(36px, 5vw, 56px)',
            background: 'linear-gradient(135deg, var(--bg-dark) 0%, #171A21 100%)',
            color: '#FFFFFF',
            borderRadius: '4px',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '0 auto',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
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
              fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
              fontStyle: 'italic',
              color: '#FFFFFF',
              lineHeight: 1.4,
              marginBottom: '20px',
              fontWeight: 400
            }}
          >
            “The values can remain intact while the method of transmitting them evolves to meet modern realities.”
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
              letterSpacing: '0.08em',
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
