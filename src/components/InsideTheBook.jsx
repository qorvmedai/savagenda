import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { CHAPTERS_DATA } from '../config';

export default function InsideTheBook({ onBuyClick }) {
  const [expandedChapter, setExpandedChapter] = useState(null);

  const toggleChapter = (index) => {
    if (expandedChapter === index) {
      setExpandedChapter(null);
    } else {
      setExpandedChapter(index);
    }
  };

  return (
    <section
      id="inside"
      className="section-shell"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            CHAPTER BREAKDOWN
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.45rem, 4vw, 3.6rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              fontWeight: 800,
              color: 'var(--text-dark)',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}
          >
            INSIDE THE BOOK, <br className="desktop-only" />
            <span style={{ color: 'var(--accent-amber)' }}>YOU WILL DISCOVER...</span>
          </h2>

          <p style={{ fontSize: 'clamp(0.92rem, 1.05vw, 1.05rem)', color: 'var(--text-muted)', margin: 0 }}>
            Six comprehensive chapters meticulously crafted to transform your parenting perspective.
          </p>
        </div>

        {/* Chapters Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '48px'
          }}
          className="chapters-grid"
        >
          {CHAPTERS_DATA.map((chapter, idx) => {
            const isExpanded = expandedChapter === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-light)',
                  border: isExpanded ? '1px solid var(--accent-amber)' : '1px solid var(--border-light)',
                  borderRadius: '3px',
                  padding: '24px 20px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isExpanded ? '0 8px 24px rgba(217, 119, 6, 0.1)' : 'none'
                }}
                className="chapter-card"
              >
                <div>
                  {/* Top Bar: Roman & Number */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        color: 'var(--accent-amber)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {chapter.roman}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        color: 'rgba(18, 20, 23, 0.2)'
                      }}
                    >
                      {chapter.number}
                    </span>
                  </div>

                  {/* Chapter Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                      fontWeight: 800,
                      color: 'var(--text-dark)',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                      textTransform: 'uppercase'
                    }}
                  >
                    {chapter.title}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.55,
                      marginBottom: '16px'
                    }}
                  >
                    {chapter.summary}
                  </p>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div
                      style={{
                        paddingTop: '12px',
                        marginTop: '12px',
                        borderTop: '1px dashed var(--border-light)',
                        animation: 'fadeIn 0.3s ease'
                      }}
                    >
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dark)', lineHeight: 1.55, margin: 0 }}>
                        {chapter.details}
                      </p>
                    </div>
                  )}
                </div>

                {/* Read Details Toggle Button */}
                <button
                  onClick={() => toggleChapter(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--accent-terracotta)',
                    marginTop: '16px',
                    padding: 0
                  }}
                >
                  {isExpanded ? 'Show Less' : 'Read Chapter Overview'}
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            GET THE FULL BOOK
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .chapter-card:hover {
          border-color: var(--accent-amber);
          transform: translateY(-3px);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .chapters-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
