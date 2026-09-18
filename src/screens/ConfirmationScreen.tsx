import { useEffect, useState } from 'react'
import AppShell from '../components/AppShell'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

export default function ConfirmationScreen({ nav }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 2
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    { label: 'Order received', done: true },
    { label: 'Uploading photos to secure servers', done: progress > 15 },
    { label: 'AI face detection & alignment', done: progress > 40 },
    { label: 'Applying style & background', done: progress > 65 },
    { label: 'Quality assurance pass', done: progress > 85 },
    { label: 'Preparing download package', done: progress >= 100 },
  ]

  return (
    <AppShell nav={nav} active="dashboard">
      <div className="p-8 flex items-center justify-center min-h-full">
        <div className="max-w-lg w-full text-center">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative"
            style={{ background: 'rgba(72,187,120,0.1)' }}>
            <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#48BB78' }} />
            <svg width="36" height="36" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="17" stroke="#48BB78" strokeWidth="2" fill="none" />
              <path d="M10 18l5.5 5.5L26 12" stroke="#48BB78" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Order Confirmed!</h1>
          <p className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>Batch <strong className="text-white font-mono">B-2024-090</strong> is being processed.</p>
          <p className="text-sm mb-8" style={{ color: 'var(--muted-foreground)' }}>A confirmation has been sent to <strong className="text-white">hr@acme.com</strong></p>

          {/* Processing time banner */}
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl mb-8" style={{ background: 'rgba(79,126,240,0.08)', border: '1px solid rgba(79,126,240,0.2)' }}>
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>Estimated processing time: ~8 minutes</div>
              <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>For 10 employees · You'll get an email when ready</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>AI Processing</span>
              <span className="text-xs font-bold" style={{ color: 'var(--primary)' }}>{progress}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: 'var(--secondary)' }}>
              <div className="h-full rounded-full transition-all duration-100" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)' }} />
            </div>
          </div>

          {/* Steps */}
          <div className="text-left space-y-3 mb-8 p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all"
                  style={{ background: step.done ? 'rgba(72,187,120,0.15)' : 'var(--secondary)' }}>
                  {step.done
                    ? <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2 2L8 2.5" stroke="#48BB78" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                    : <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--border)' }} />}
                </div>
                <span className="text-xs" style={{ color: step.done ? 'var(--foreground)' : 'var(--muted-foreground)' }}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* Order details */}
          <div className="grid grid-cols-3 gap-3 mb-8 text-center">
            {[
              { label: 'Order ID', value: 'B-2024-090' },
              { label: 'Employees', value: '10' },
              { label: 'Amount Paid', value: '$50.00' },
            ].map(d => (
              <div key={d.label} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="text-xs mb-0.5" style={{ color: 'var(--muted-foreground)' }}>{d.label}</div>
                <div className="text-sm font-bold font-mono" style={{ color: 'var(--foreground)' }}>{d.value}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={() => nav('dashboard')} className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
              style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
              Back to Dashboard
            </button>
            <button onClick={() => nav('results')}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--primary)', color: 'white' }}>
              View Results →
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
