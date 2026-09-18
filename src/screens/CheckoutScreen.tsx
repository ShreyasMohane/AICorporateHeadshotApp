import { useState } from 'react'
import AppShell from '../components/AppShell'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

export default function CheckoutScreen({ nav }: Props) {
  const [qty, setQty] = useState(10)
  const pricePerHead = 5
  const total = qty * pricePerHead
  const [cardNum, setCardNum] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')

  return (
    <AppShell nav={nav} active="upload">
      <div className="p-8 max-w-4xl">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--primary)' }}>Step 3 of 3</div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>Review & Checkout</h1>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Confirm your batch order details and pay securely.</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Order summary */}
          <div>
            <div className="rounded-xl overflow-hidden mb-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
                <h2 className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>Batch Order Summary</h2>
              </div>
              <div className="px-5 py-4 space-y-4">
                {/* Config summary */}
                <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(79,126,240,0.15)' }}>
                    <span className="text-lg">🧥</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>Navy Blazer + Corporate Gray</div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Selected style · Batch B-2024-090</div>
                  </div>
                </div>

                {/* Quantity control */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Employee Count</label>
                    <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Min 1 · Max 200</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setQty(q => Math.max(1, q - 1))}
                      className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg transition-all hover:opacity-80"
                      style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>−</button>
                    <span className="text-xl font-bold w-12 text-center" style={{ color: 'var(--foreground)' }}>{qty}</span>
                    <button onClick={() => setQty(q => Math.min(200, q + 1))}
                      className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg transition-all hover:opacity-80"
                      style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>+</button>
                    <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>employees</span>
                  </div>
                </div>

                {/* Line items */}
                <div className="space-y-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--muted-foreground)' }}>{qty} headshots × ${pricePerHead}</span>
                    <span style={{ color: 'var(--foreground)' }}>${total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--muted-foreground)' }}>Processing fee</span>
                    <span style={{ color: '#48BB78' }}>Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--muted-foreground)' }}>Rush processing (&lt; 5 min)</span>
                    <span style={{ color: 'var(--muted-foreground)' }}>Not selected</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(79,126,240,0.08)', border: '1px solid rgba(79,126,240,0.2)' }}>
                  <span className="font-semibold" style={{ color: 'var(--foreground)' }}>Total</span>
                  <span className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>${total}</span>
                </div>

                {/* Volume discount */}
                {qty >= 20 && (
                  <div className="flex items-center gap-2 text-xs p-2.5 rounded-lg" style={{ background: 'rgba(72,187,120,0.08)', color: '#48BB78' }}>
                    <span>🎉</span> Volume discount applied: 10% off for 20+ employees
                  </div>
                )}
              </div>
            </div>

            {/* Data guarantee */}
            <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'rgba(79,126,240,0.06)', border: '1px solid rgba(79,126,240,0.15)' }}>
              <span className="text-xl mt-0.5">🔒</span>
              <div>
                <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--foreground)' }}>Data Privacy Guarantee</div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>All uploaded photos are encrypted, processed, and deleted within 30 days. We are GDPR, SOC 2, and CCPA compliant.</div>
              </div>
            </div>
          </div>

          {/* Payment form */}
          <div className="rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
              <h2 className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>Payment Details</h2>
            </div>
            <div className="px-5 py-4 space-y-4">
              {/* Card logos */}
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex'].map(c => (
                  <div key={c} className="px-3 py-1 rounded text-xs font-bold" style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}>{c}</div>
                ))}
                <div className="ml-auto text-xs flex items-center gap-1" style={{ color: 'var(--muted-foreground)' }}>
                  🔒 Powered by Stripe
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Card Number</label>
                <input value={cardNum} onChange={e => setCardNum(e.target.value)}
                  placeholder="4242 4242 4242 4242"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Expiry</label>
                  <input value={expiry} onChange={e => setExpiry(e.target.value)}
                    placeholder="MM / YY"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>CVV</label>
                  <input value={cvv} onChange={e => setCvv(e.target.value)}
                    placeholder="•••"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Company / Billing Name</label>
                <input placeholder="Acme Corporation"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
              </div>

              <button onClick={() => nav('confirmation')}
                className="w-full py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
                style={{ background: 'var(--primary)', color: 'white', boxShadow: '0 0 24px rgba(79,126,240,0.35)', marginTop: '8px' }}>
                🔒 Pay ${total} & Process Batch
              </button>

              <p className="text-center text-xs" style={{ color: 'var(--muted-foreground)' }}>
                By paying you confirm our <button className="underline" style={{ color: 'var(--primary)' }}>Terms of Service</button> and <button className="underline" style={{ color: 'var(--primary)' }}>Refund Policy</button>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
