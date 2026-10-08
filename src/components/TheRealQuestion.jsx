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
        <div style={{ maxWidth: '900px', margin: '0 auto 64px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            THE PERSPECTIVE SHIFT
          </div>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '12px',
              fontWeight: 700
            }}
          >
            THE REAL QUESTION IS NOT:
          </p>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
              lineHeight: 1.15,
              color: 'var(--text-dark)',
              fontWeight: 800,
              marginBottom: '36px',
              textTransform: 'uppercase'
            }}
          >
            “WILL MY CHILD BE SUCCESSFUL?”
          </h2>

          <div style={{ margin: '32px 0' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
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
              fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
              lineHeight: 1.1,
              color: 'var(--accent-amber)',
              fontWeight: 800,
              textTransform: 'uppercase'
            }}
          >
            “WHO WILL THEY BECOME <br />
            WHEN SUCCESS ARRIVES?”
          </h3>
        </div>

        {/* Questions Editorial List */}
        <div style={{ maxWidth: '820px', margin: '0 auto 64px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {questions.map((q, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '16px',
                  padding: '20px 24px',
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
                    fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    margin: 0,
                    lineHeight: 1.5
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
            padding: '28px 36px',
            backgroundColor: 'var(--text-dark)',
            color: '#FFFFFF',
            borderRadius: '4px'
          }}
        >
          <p
            className="serif-italic"
            style={{
              fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
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
