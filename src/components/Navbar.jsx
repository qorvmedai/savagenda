import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function Navbar({ onBuyClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(249, 248, 245, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(18, 20, 23, 0.08)' : '1px solid transparent',
        paddingTop: scrolled ? '14px' : '22px',
        paddingBottom: scrolled ? '14px' : '22px',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Brand Logo */}
        <a href="#" style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)',
              letterSpacing: '0.08em',
              color: 'var(--text-dark)',
              textTransform: 'uppercase'
            }}
          >
            SALVAGE AGENDA
          </span>
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              color: 'var(--accent-amber)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginTop: '-2px'
            }}
          >
            By Patrick Anietie John
          </span>
        </a>

        {/* Center/Right Nav Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px'
          }}
          className="desktop-nav"
        >
          <a
            href="#the-book"
            onClick={(e) => handleNavClick(e, 'the-book')}
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              color: 'var(--text-dark)',
              transition: 'color 0.2s ease'
            }}
            className="nav-link"
          >
            The Book
          </a>
          <a
            href="#inside"
            onClick={(e) => handleNavClick(e, 'inside')}
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              color: 'var(--text-dark)',
              transition: 'color 0.2s ease'
            }}
            className="nav-link"
          >
            Inside
          </a>
          <a
            href="#the-author"
            onClick={(e) => handleNavClick(e, 'the-author')}
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              color: 'var(--text-dark)',
              transition: 'color 0.2s ease'
            }}
            className="nav-link"
          >
            The Author
          </a>
        </nav>

        {/* Right: GET THE BOOK CTA (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onBuyClick}
            className="btn-primary desktop-cta-btn"
            style={{
              padding: '12px 24px',
              fontSize: '0.85rem'
            }}
          >
            GET THE BOOK
            <ArrowRight size={15} />
          </button>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--text-dark)'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-light)',
            borderBottom: '1px solid var(--border-light)',
            padding: '24px 28px 36px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <a
            href="#the-book"
            onClick={(e) => handleNavClick(e, 'the-book')}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}
          >
            The Book
          </a>
          <a
            href="#inside"
            onClick={(e) => handleNavClick(e, 'inside')}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}
          >
            Inside
          </a>
          <a
            href="#the-author"
            onClick={(e) => handleNavClick(e, 'the-author')}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}
          >
            The Author
          </a>
          <div style={{ paddingTop: '12px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBuyClick();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              GET THE BOOK
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 840px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta-btn {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        .nav-link:hover {
          color: var(--accent-amber) !important;
        }
      `}</style>
    </header>
  );
}
