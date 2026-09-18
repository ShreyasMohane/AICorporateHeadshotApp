import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

export default function SplashScreen({ nav }: Props) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: 'var(--background)' }}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }} />

      {/* Glow orbs */}
      <div className="absolute top-[-80px] left-[20%] w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(79,126,240,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-100px] right-[10%] w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)' }} />

      {/* Nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="4" fill="white" opacity="0.9" />
              <rect x="2" y="12" width="14" height="2" rx="1" fill="white" opacity="0.7" />
              <rect x="5" y="15" width="8" height="1.5" rx="0.75" fill="white" opacity="0.5" />
            </svg>
          </div>
          <span className="font-bold text-base tracking-tight" style={{ color: 'var(--foreground)' }}>HeadshotAI</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => nav('about')} className="text-sm font-medium transition-colors px-3 py-1.5 rounded-md hover:text-white" style={{ color: 'var(--muted-foreground)' }}>
            About
          </button>
          <button onClick={() => nav('login')} className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90 active:scale-95" style={{ background: 'var(--secondary)', color: 'var(--foreground)', border: '1px solid var(--border)' }}>
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pt-12 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-wide" style={{ background: 'rgba(79,126,240,0.12)', border: '1px solid rgba(79,126,240,0.25)', color: 'var(--primary)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--primary)' }} />
          AI-POWERED · B2B MICRO-SAAS
        </div>

        <h1 className="text-6xl font-extrabold leading-[1.08] tracking-[-0.04em] max-w-3xl mb-5" style={{ color: 'var(--foreground)' }}>
          Corporate headshots,<br />
          <span style={{ color: 'var(--primary)' }}>standardized at scale.</span>
        </h1>

        <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: 'var(--muted-foreground)' }}>
          Turn 50 messy employee selfies into polished, uniform corporate headshots in under 10 minutes. GDPR-compliant. No photo studio required.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button onClick={() => nav('login')} className="px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
            style={{ background: 'var(--primary)', color: 'white', boxShadow: '0 0 24px rgba(79,126,240,0.35)' }}>
            Start Free Trial
          </button>
          <button onClick={() => nav('dashboard')} className="px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:bg-opacity-80 active:scale-95"
            style={{ background: 'var(--secondary)', color: 'var(--foreground)', border: '1px solid var(--border)' }}>
            View Demo →
          </button>
        </div>

        {/* Value props */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl w-full">
          {[
            { icon: '⚡', label: '10 min processing', sub: 'Per batch of 50 employees' },
            { icon: '🔒', label: 'GDPR compliant', sub: 'Auto-delete after 30 days' },
            { icon: '🎯', label: '$5 per headshot', sub: 'vs. $300+ at a photo studio' },
          ].map(v => (
            <div key={v.label} className="flex flex-col items-center gap-1.5 p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-2xl">{v.icon}</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{v.label}</span>
              <span className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>{v.sub}</span>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center gap-3" style={{ color: 'var(--muted-foreground)' }}>
          <div className="flex -space-x-2">
            {['4A90D9', '48BB78', 'ED8936', 'E53E3E', '805AD5'].map((c, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white" style={{ borderColor: 'var(--background)', background: `#${c}` }}>
                {['M','S','J','A','K'][i]}
              </div>
            ))}
          </div>
          <span className="text-sm">Trusted by <strong className="text-white">200+ HR teams</strong> globally</span>
        </div>
      </div>
    </div>
  )
}
