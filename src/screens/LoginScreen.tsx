import { useState } from 'react'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

export default function LoginScreen({ nav }: Props) {
  const [tab, setTab] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [company, setCompany] = useState('')

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--background)' }}>
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[480px] shrink-0 p-10 relative overflow-hidden" style={{ background: 'var(--card)', borderRight: '1px solid var(--border)' }}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(79,126,240,0.2) 0%, transparent 70%)' }} />

        {/* Logo */}
        <div className="flex items-center gap-2.5 relative z-10">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary)' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="4.5" fill="white" opacity="0.9" />
              <rect x="2" y="14" width="16" height="2" rx="1" fill="white" opacity="0.7" />
            </svg>
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--foreground)' }}>HeadshotAI</span>
        </div>

        {/* Feature list */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-2xl font-bold leading-snug" style={{ color: 'var(--foreground)' }}>
            The professional headshot platform for modern HR teams.
          </h2>
          {[
            { icon: '🖼️', t: 'Batch upload & process', s: 'Upload 50+ selfies at once, get uniform headshots back.' },
            { icon: '🎨', t: 'Custom brand styles', s: 'Match your company background, blazer color, and lighting.' },
            { icon: '🔐', t: 'Enterprise-grade privacy', s: 'SOC 2 Type II, GDPR. All photos deleted within 30 days.' },
          ].map(f => (
            <div key={f.t} className="flex gap-3">
              <span className="text-2xl mt-0.5">{f.icon}</span>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{f.t}</div>
                <div className="text-sm mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{f.s}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-xs" style={{ color: 'var(--muted-foreground)' }}>
          © 2026 HeadshotAI Inc. · SOC 2 · GDPR
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Tab toggle */}
          <div className="flex rounded-xl p-1 mb-8" style={{ background: 'var(--secondary)' }}>
            {(['login', 'signup'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{
                  background: tab === t ? 'var(--card)' : 'transparent',
                  color: tab === t ? 'var(--foreground)' : 'var(--muted-foreground)',
                  border: tab === t ? '1px solid var(--border)' : 'none'
                }}>
                {t === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
            {tab === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-sm mb-7" style={{ color: 'var(--muted-foreground)' }}>
            {tab === 'login' ? 'Sign in to your HR dashboard.' : 'Set up your company account in 2 minutes.'}
          </p>

          {/* SSO button */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 mb-4"
            style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <rect x="2" y="2" width="6" height="6" rx="1" fill="#4285F4" />
              <rect x="10" y="2" width="6" height="6" rx="1" fill="#34A853" />
              <rect x="2" y="10" width="6" height="6" rx="1" fill="#EA4335" />
              <rect x="10" y="10" width="6" height="6" rx="1" fill="#FBBC04" />
            </svg>
            Continue with Corporate SSO
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>or with email</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          <div className="space-y-4">
            {tab === 'signup' && (
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Company Name</label>
                <input value={company} onChange={e => setCompany(e.target.value)}
                  placeholder="Acme Corp"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Work Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="hr@company.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>Password</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
            </div>

            {tab === 'login' && (
              <div className="text-right">
                <button className="text-xs font-medium transition-colors hover:text-white" style={{ color: 'var(--primary)' }}>Forgot password?</button>
              </div>
            )}

            <button onClick={() => nav('dashboard')}
              className="w-full py-3.5 rounded-xl font-semibold text-sm mt-2 transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'var(--primary)', color: 'white', boxShadow: '0 0 20px rgba(79,126,240,0.3)' }}>
              {tab === 'login' ? 'Sign In to Dashboard' : 'Create Account →'}
            </button>
          </div>

          {tab === 'signup' && (
            <p className="text-xs text-center mt-4" style={{ color: 'var(--muted-foreground)' }}>
              By signing up, you agree to our{' '}
              <button className="underline" style={{ color: 'var(--primary)' }}>Terms</button> and{' '}
              <button className="underline" style={{ color: 'var(--primary)' }}>Privacy Policy</button>.
            </p>
          )}

          <p className="text-xs text-center mt-6" style={{ color: 'var(--muted-foreground)' }}>
            {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => setTab(tab === 'login' ? 'signup' : 'login')} className="font-semibold" style={{ color: 'var(--primary)' }}>
              {tab === 'login' ? 'Sign up free' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
