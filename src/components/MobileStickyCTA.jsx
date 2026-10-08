import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MobileStickyCTA({ onBuyClick, price, currency }) {
  return (
    <div className="mobile-sticky-cta" aria-label="Mobile purchase bar">
      <div>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: 'var(--accent-amber)',
            display: 'block',
            letterSpacing: '0.05em'
          }}
        >
          SALVAGE AGENDA
        </span>
        <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>
          {currency}{price}
        </span>
      </div>

      <button
        onClick={onBuyClick}
        style={{
          backgroundColor: 'var(--accent-amber)',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '10px 18px',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          letterSpacing: '0.03em',
          textTransform: 'uppercase'
        }}
      >
        GET BOOK
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
