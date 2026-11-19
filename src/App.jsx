import { useState } from 'react';

export default function App() {
  const [paid, setPaid] = useState(false);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#FAF9F6', minHeight: '100vh', display: 'grid', placeItems: 'center', margin: 0 }}>
      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '20px', padding: '40px', maxWidth: '460px', width: '90%', textAlign: 'center', boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}>
        <span style={{ background: '#F5F5F4', color: '#44403C', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em' }}>
          PRODUCTION MAIN • v1.0
        </span>
        <h1 style={{ fontSize: '26px', margin: '18px 0 8px', color: '#1C1917' }}>NovaPay Checkout</h1>
        <p style={{ color: '#57534E', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
          Standard single-currency checkout flow running on the production branch.
        </p>
        <button
          onClick={() => setPaid(!paid)}
          style={{ background: '#1C1917', color: '#FFFFFF', border: 'none', padding: '12px 26px', borderRadius: '12px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
        >
          {paid ? 'Payment Confirmed ✓' : 'Pay $49.00'}
        </button>
      </div>
    </div>
  );
}
