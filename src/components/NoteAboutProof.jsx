import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function NoteAboutProof() {
  return (
    <section
      id="note-about-proof"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '32px clamp(20px, 4vw, 36px)',
            backgroundColor: 'var(--bg-light)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <ShieldAlert size={20} color="var(--accent-amber)" />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)'
              }}
            >
              TRANSPARENCY & INTEGRITY
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              lineHeight: 1.2
            }}
          >
            A NOTE ABOUT PROOF
          </h2>

          <p style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.02rem)', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '16px' }}>
            In an era of artificial social proof, fabricated star ratings, and inflated metrics, SALVAGE Agenda chooses absolute honesty.
          </p>

          <p style={{ fontSize: 'clamp(0.92rem, 1.05vw, 1.02rem)', color: 'var(--text-dark)', lineHeight: 1.65, fontWeight: 600, margin: 0 }}>
            We do not use invented testimonials, manufactured reviews, or hyped promises. The strength of this book rests entirely on the clarity, relevance, and truth of its argument. Read the ideas on this page; if they resonate with your spirit as a parent, this book was written for you.
          </p>
        </div>
      </div>
    </section>
  );
}
