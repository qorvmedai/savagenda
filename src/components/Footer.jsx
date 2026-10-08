import React from 'react';
import { SITE_CONFIG } from '../config';

export default function Footer({ onBuyClick }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#07080A',
        color: '#FFFFFF',
        paddingTop: '60px',
        paddingBottom: '40px',
        borderTop: '1px solid var(--border-dark)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            paddingBottom: '40px',
            borderBottom: '1px solid var(--border-dark)'
          }}
        >
          {/* Brand Info */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px'
              }}
            >
              {SITE_CONFIG.TITLE}
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)', margin: 0, maxWidth: '480px' }}>
              {SITE_CONFIG.SUBTITLE}
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', fontWeight: 700, display: 'block', marginTop: '6px' }}>
              By {SITE_CONFIG.AUTHOR}
            </span>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px' }}>
            <a
              href="#the-book"
              onClick={(e) => handleNavClick(e, 'the-book')}
              style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-light-muted)' }}
            >
              The Book
            </a>
            <a
              href="#inside"
              onClick={(e) => handleNavClick(e, 'inside')}
              style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-light-muted)' }}
            >
              Inside
            </a>
            <a
              href="#the-author"
              onClick={(e) => handleNavClick(e, 'the-author')}
              style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-light-muted)' }}
            >
              The Author
            </a>
            <button
              onClick={onBuyClick}
              style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-amber)', padding: 0 }}
            >
              Get the Book
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '28px',
            fontSize: '0.8rem',
            color: 'var(--text-light-muted)'
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {SITE_CONFIG.TITLE} by {SITE_CONFIG.AUTHOR}. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
            Published by Awesome Planet.
          </p>
        </div>
      </div>
    </footer>
  );
}
