import React from 'react';

export default function TheRealQuestion() {
  const questions = [
    "Who will they be when nobody is watching?",
    "Can they think for themselves?",
    "Can they question what needs to be questioned without becoming rebellious for the sake of rebellion?",
    "Can they make decisions when you are not in the room?",
    "Can they recover from failure?",
    "Can they resist pressure?",
    "Can they recognize manipulation?",
    "Can they communicate what they feel?",
    "Can they return to you when life becomes complicated?"
  ];

  return (
    <section
      id="real-question"
      className="section-shell"
      style={{
        backgroundColor: 'var(--bg-light)'
      }}
    >
      <div className="container">
        {/* Minimal Editorial Header */}
        <div style={{ maxWidth: '900px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE PERSPECTIVE SHIFT
          </div>

          <p
            style={{
              fontSize: 'clamp(0.85rem, 1.1vw, 1.1rem)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '10px',
              fontWeight: 700
            }}
          >
            THE REAL QUESTION IS NOT:
          </p>

          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3.5vw, 2.8rem)',
              lineHeight: 1.15,
              color: 'var(--text-dark)',
              fontWeight: 800,
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}
          >
            “WILL MY CHILD BE SUCCESSFUL?”
          </h2>

          <div style={{ margin: '24px 0' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                fontStyle: 'italic',
                color: 'var(--accent-terracotta)',
                fontWeight: 600
              }}
            >
              IT IS:
            </span>
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.45rem, 4vw, 3.4rem)',
              lineHeight: 1.12,
              color: 'var(--accent-amber)',
              fontWeight: 800,
              textTransform: 'uppercase'
            }}
          >
            “WHO WILL THEY BECOME <br className="desktop-only" />
            WHEN SUCCESS ARRIVES?”
          </h3>
        </div>

        {/* Questions Editorial List */}
        <div style={{ maxWidth: '820px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {questions.map((q, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  padding: '16px 20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px'
                }}
              >
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--accent-terracotta)'
                  }}
                >
                  ?
                </span>
                <p
                  style={{
                    fontSize: 'clamp(0.92rem, 1.05vw, 1.08rem)',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    margin: 0,
                    lineHeight: 1.45
                  }}
                >
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Climax Statement */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto',
            padding: '24px clamp(16px, 3vw, 32px)',
            backgroundColor: 'var(--text-dark)',
            color: '#FFFFFF',
            borderRadius: '4px'
          }}
        >
          <p
            className="serif-italic"
            style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.55rem)',
              color: 'var(--accent-amber)',
              margin: 0,
              fontWeight: 500
            }}
          >
            “These are not questions a school certificate can answer.”
          </p>
        </div>
      </div>
    </section>
  );
}
