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
            padding: '40px 36px',
            backgroundColor: 'var(--bg-light)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <ShieldAlert size={24} color="var(--accent-amber)" />
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)'
              }}
            >
              TRANSPARENCY & INTEGRITY
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              lineHeight: 1.2
            }}
          >
            A NOTE ABOUT PROOF
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
            In an era of artificial social proof, fabricated star ratings, and inflated metrics, SALVAGE Agenda chooses absolute honesty.
          </p>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.7, fontWeight: 600, margin: 0 }}>
            We do not use invented testimonials, manufactured reviews, or hyped promises. The strength of this book rests entirely on the clarity, relevance, and truth of its argument. Read the ideas on this page; if they resonate with your spirit as a parent, this book was written for you.
          </p>
        </div>
      </div>
    </section>
  );
}
