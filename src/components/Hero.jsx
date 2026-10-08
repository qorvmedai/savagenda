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
        paddingTop: 'clamp(120px, 15vw, 170px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-light)'
      }}
    >
      {/* Background Subtle Ambient Atmosphere Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '65vw',
          height: '65vw',
          maxWidth: '850px',
          maxHeight: '850px',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, rgba(194, 94, 46, 0.04) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Editorial Headline & Narrative (7 cols on desktop) */}
          <div
            style={{
              gridColumn: 'span 7'
            }}
            className="hero-left-col"
          >
            {/* Eyebrow */}
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              {SITE_CONFIG.TITLE} • A MODERN PARENTING GUIDE
            </div>

            {/* Dominant Hero Headline */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.6rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-dark)',
                marginBottom: '28px',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}
            >
              WHAT IF THE PARENTING <br />
              <span style={{ color: 'var(--accent-terracotta)' }}>THAT MADE YOU</span> WHO YOU ARE <br />
              IS THE VERY THING LIMITING <br />
              <span style={{ color: 'var(--accent-amber)' }}>WHO YOUR CHILD</span> CAN BECOME?
            </h1>

            {/* Supporting Copy & Narrative */}
            <div style={{ maxWidth: '620px', marginBottom: '36px' }}>
              <p
                style={{
                  fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginBottom: '16px',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)'
                }}
              >
                “Before you answer that, think about this.”
              </p>

              <p
                style={{
                  fontSize: 'clamp(0.98rem, 1.1vw, 1.05rem)',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  marginBottom: '20px'
                }}
              >
                Today’s children are growing up in a world shaped by artificial intelligence, social media algorithms, digital micro-economies, and global connectivity—opportunities and pressures that did not exist when their parents were young.
              </p>

              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'rgba(217, 119, 6, 0.07)',
                  borderLeft: '3px solid var(--accent-amber)',
                  borderRadius: '0 4px 4px 0'
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    margin: 0
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
                gap: '18px'
              }}
            >
              <button onClick={onBuyClick} className="btn-primary">
                GET SALVAGE AGENDA
                <ArrowRight size={18} />
              </button>

              <button onClick={scrollToExplore} className="btn-secondary">
                <BookOpen size={18} />
                EXPLORE THE BOOK
              </button>
            </div>
          </div>

          {/* Right Column: Premium Book Showcase (5 cols on desktop) */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
            className="hero-right-col"
          >
            <div className="book-cover-frame">
              <div className="book-glow-backdrop animated-glow"></div>
              <img
                src={SITE_CONFIG.BOOK_COVER_IMAGE}
                alt="SALVAGE Agenda Book Cover by Patrick Anietie John"
                className="book-cover-img"
                width="420"
                height="620"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-left-col {
            grid-column: span 12 !important;
          }
          .hero-right-col {
            grid-column: span 12 !important;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
