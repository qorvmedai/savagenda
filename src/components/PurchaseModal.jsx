import React, { useState } from 'react';
import { X, ShoppingBag, MessageSquare, Check, ShieldCheck, ExternalLink, Settings } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function PurchaseModal({ isOpen, onClose, price, setPrice, currency, setCurrency }) {
  const [showConfig, setShowConfig] = useState(false);
  const [customUrl, setCustomUrl] = useState(SITE_CONFIG.BOOK_PURCHASE_URL);
  const [orderStatus, setOrderStatus] = useState(null);

  if (!isOpen) return null;

  const handleProceedCheckout = () => {
    if (customUrl && customUrl !== '#checkout' && customUrl.startsWith('http')) {
      window.open(customUrl, '_blank');
    } else {
      setOrderStatus('success');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          maxWidth: '560px',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '24px 28px',
            backgroundColor: 'var(--bg-dark)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-dark)'
          }}
        >
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--accent-amber)', textTransform: 'uppercase' }}>
              OFFICIAL CHECKOUT
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              GET SALVAGE AGENDA
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setShowConfig(!showConfig)}
              title="Configure Price & Purchase Link"
              style={{
                padding: '8px',
                color: showConfig ? 'var(--accent-amber)' : 'var(--text-light-muted)',
                borderRadius: '4px'
              }}
            >
              <Settings size={20} />
            </button>

            <button
              onClick={onClose}
              style={{ padding: '8px', color: '#FFFFFF', borderRadius: '4px' }}
              aria-label="Close checkout modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Developer / Client Live Config Drawer Toggle */}
        {showConfig && (
          <div
            style={{
              padding: '18px 24px',
              backgroundColor: 'rgba(217, 119, 6, 0.08)',
              borderBottom: '1px solid rgba(217, 119, 6, 0.2)',
              fontSize: '0.85rem'
            }}
          >
            <p style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: '10px' }}>
              ⚙️ EDITABLE SETTINGS (CLIENT DEMO):
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '10px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: 600 }}>Currency:</span>
                <input
                  type="text"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{ padding: '6px 10px', border: '1px solid #CCC', borderRadius: '3px', width: '60px' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: 1 }}>
                <span style={{ fontWeight: 600 }}>Book Price Placeholder:</span>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={{ padding: '6px 10px', border: '1px solid #CCC', borderRadius: '3px' }}
                />
              </label>
            </div>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontWeight: 600 }}>Purchase URL (Paystack / Flutterwave / WhatsApp):</span>
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://paystack.com/pay/salvagenda"
                style={{ padding: '6px 10px', border: '1px solid #CCC', borderRadius: '3px', width: '100%' }}
              />
            </label>
          </div>
        )}

        {/* Body Content */}
        <div style={{ padding: '28px' }}>
          {orderStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(217, 119, 6, 0.15)', color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Check size={32} strokeWidth={3} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                ORDER INITIATED!
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Thank you for selecting <strong>SALVAGE Agenda</strong>. To connect your active payment gateway, update the <code>BOOK_PURCHASE_URL</code> in <code>src/config.js</code> or use the settings gear ⚙️ above!
              </p>
              <button onClick={() => setOrderStatus(null)} className="btn-secondary" style={{ width: '100%' }}>
                Back to Order Summary
              </button>
            </div>
          ) : (
            <>
              {/* Order Summary Item */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: 'var(--bg-light)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  marginBottom: '24px'
                }}
              >
                <img
                  src={SITE_CONFIG.BOOK_COVER_IMAGE}
                  alt="Book Cover"
                  style={{ width: '56px', height: '80px', objectFit: 'contain', borderRadius: '2px' }}
                />
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0 0 4px' }}>
                    {SITE_CONFIG.TITLE}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 4px' }}>
                    Complete Book + WhatsApp Community
                  </p>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-amber)' }}>
                    {currency}{price}
                  </span>
                </div>
              </div>

              {/* What's Included Check list */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', display: 'block', marginBottom: '10px' }}>
                  INCLUDED IN YOUR PURCHASE:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                    <Check size={16} color="var(--accent-amber)" />
                    <span>Digital / Print Edition of <strong>SALVAGE Agenda</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                    <Check size={16} color="var(--accent-amber)" />
                    <span>Free Access to <strong>{SITE_CONFIG.BONUS_COMMUNITY}</strong></span>
                  </div>
                </div>
              </div>

              {/* Main Purchase Trigger */}
              <button
                onClick={handleProceedCheckout}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '18px 24px', fontSize: '1rem', marginBottom: '14px' }}
              >
                {customUrl && customUrl.startsWith('http') ? (
                  <>
                    PROCEED TO PAYMENT GATEWAY
                    <ExternalLink size={18} />
                  </>
                ) : (
                  <>
                    CONFIRM & GET SALVAGE AGENDA
                    <ShoppingBag size={18} />
                  </>
                )}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justify: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="var(--accent-amber)" />
                <span>Secure Checkout • Instant Access</span>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
