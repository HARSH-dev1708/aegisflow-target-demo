import { useState } from 'react';

export default function App() {
  const [currency, setCurrency] = useState('INR');
  const [paid, setPaid] = useState(false);

  const prices = { INR: '₹4,150', USD: '$49.00', EUR: '€45.00' };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#ECFDF5', minHeight: '100vh', display: 'grid', placeItems: 'center', margin: 0 }}>
      <div style={{ background: '#FFFFFF', border: '2px solid #10B981', borderRadius: '20px', padding: '40px', maxWidth: '460px', width: '90%', textAlign: 'center', boxShadow: '0 16px 36px rgba(16,185,129,0.12)' }}>
        <span style={{ background: '#D1FAE5', color: '#065F46', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em' }}>
          EPHEMERAL PR PREVIEW • v2.0
        </span>
        <h1 style={{ fontSize: '26px', margin: '18px 0 8px', color: '#064E3B' }}>NovaPay Multi-Currency</h1>
        <p style={{ color: '#047857', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
          Live isolated React build provisioned automatically by AegisFlow!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
          {['INR', 'USD', 'EUR'].map((curr) => (
            <button
              key={curr}
              onClick={() => { setCurrency(curr); setPaid(false); }}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: currency === curr ? '2px solid #059669' : '1px solid #D1D5DB',
                background: currency === curr ? '#ECFDF5' : '#FFFFFF',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {curr}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPaid(!paid)}
          style={{ background: '#059669', color: '#FFFFFF', border: 'none', padding: '12px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
        >
          {paid ? `Paid ${prices[currency]} ✓` : `Pay ${prices[currency]}`}
        </button>
      </div>
    </div>
  );
}
