import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function Hero({ onBuyClick }) {
  const scrollToExplore = () => {
    const el = document.getElementById('world-upgraded');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="section-shell"
      style={{
        paddingTop: 'clamp(110px, 14vw, 170px)',
        paddingBottom: 'clamp(60px, 8vw, 120px)',
        position: 'relative',
        backgroundColor: 'var(--bg-light)',
        textAlign: 'center'
      }}
    >
      {/* Background Subtle Ambient Atmosphere Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75vw',
          height: '75vw',
          maxWidth: '750px',
          maxHeight: '750px',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.14) 0%, rgba(194, 94, 46, 0.04) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            {SITE_CONFIG.TITLE} • A MODERN PARENTING GUIDE
          </div>

          {/* Dominant Centered Hero Headline */}
          <h1
            style={{
              fontSize: 'clamp(1.55rem, 4.5vw, 3.6rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-dark)',
              marginBottom: '24px',
              fontWeight: 800,
              textTransform: 'uppercase',
              maxWidth: '100%',
              wordBreak: 'break-word',
              textAlign: 'center'
            }}
          >
            WHAT IF THE PARENTING <br className="desktop-only" />
            <span style={{ color: 'var(--accent-terracotta)' }}>THAT MADE YOU</span> WHO YOU ARE <br className="desktop-only" />
            IS THE VERY THING LIMITING <br className="desktop-only" />
            <span style={{ color: 'var(--accent-amber)' }}>WHO YOUR CHILD</span> CAN BECOME?
          </h1>

          {/* Supporting Copy */}
          <div style={{ maxWidth: '680px', margin: '0 auto 36px', textAlign: 'center' }}>
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--text-dark)',
                marginBottom: '14px',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)'
              }}
            >
              “Before you answer that, think about this.”
            </p>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.05vw, 1.05rem)',
                lineHeight: 1.65,
                color: 'var(--text-muted)',
                marginBottom: '20px'
              }}
            >
              Today’s children are growing up in a world shaped by artificial intelligence, social media algorithms, digital micro-economies, and global connectivity—opportunities and pressures that did not exist when their parents were young.
            </p>

            <div
              style={{
                padding: '14px 20px',
                backgroundColor: 'rgba(217, 119, 6, 0.07)',
                borderLeft: '3px solid var(--accent-amber)',
                borderRadius: '0 4px 4px 0',
                textAlign: 'center'
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                The central conflict is simple yet profound: <span style={{ color: 'var(--accent-terracotta)' }}>Parents are raising children for a world that no longer exists.</span>
              </p>
            </div>
          </div>

          {/* Hero CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '48px'
            }}
          >
            <button onClick={onBuyClick} className="btn-primary">
              GET SALVAGE AGENDA
              <ArrowRight size={16} />
            </button>

            <button onClick={scrollToExplore} className="btn-secondary">
              <BookOpen size={16} />
              EXPLORE THE BOOK
            </button>
          </div>

          {/* Prominent Centered Book Cover Display */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              maxWidth: '380px',
              margin: '0 auto'
            }}
          >
            <div className="book-cover-frame">
              <div className="book-glow-backdrop animated-glow"></div>
              <img
                src={SITE_CONFIG.BOOK_COVER_IMAGE}
                alt="SALVAGE Agenda Book Cover by Patrick Anietie John"
                className="book-cover-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
