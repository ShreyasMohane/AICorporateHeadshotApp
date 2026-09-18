import { ReactNode } from 'react'
import { Screen } from '../App'

interface Props {
  children: ReactNode
  nav: (s: Screen) => void
  active: Screen
}

const navItems: { label: string; screen: Screen; icon: string }[] = [
  { label: 'Dashboard', screen: 'dashboard', icon: '⊞' },
  { label: 'Styles', screen: 'styles', icon: '🎨' },
  { label: 'Upload', screen: 'upload', icon: '⬆' },
  { label: 'Results', screen: 'results', icon: '🖼' },
  { label: 'About', screen: 'about', icon: '💬' },
]

export default function AppShell({ children, nav, active }: Props) {
  return (
    <div className="min-h-screen flex" style={{ background: 'var(--background)' }}>
      {/* Sidebar */}
      <aside className="w-[220px] shrink-0 flex flex-col py-6 px-4 sticky top-0 h-screen" style={{ background: 'var(--card)', borderRight: '1px solid var(--border)' }}>
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-2 mb-8">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5.5" r="3.5" fill="white" opacity="0.9" />
              <rect x="1.5" y="11" width="13" height="1.8" rx="0.9" fill="white" opacity="0.7" />
            </svg>
          </div>
          <span className="font-bold text-sm tracking-tight" style={{ color: 'var(--foreground)' }}>HeadshotAI</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1">
          {navItems.map(item => (
            <button key={item.screen} onClick={() => nav(item.screen)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left"
              style={{
                background: active === item.screen ? 'rgba(79,126,240,0.12)' : 'transparent',
                color: active === item.screen ? 'var(--primary)' : 'var(--muted-foreground)',
                borderLeft: active === item.screen ? '2px solid var(--primary)' : '2px solid transparent',
              }}>
              <span className="text-base leading-none">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* New batch CTA */}
        <button onClick={() => nav('styles')} className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 mt-4"
          style={{ background: 'var(--primary)', color: 'white' }}>
          + New Batch
        </button>

        <div className="mt-4 px-2">
          <div className="flex items-center gap-2.5 py-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--primary)', color: 'white' }}>JM</div>
            <div>
              <div className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>Jane Mitchell</div>
              <div className="text-[10px]" style={{ color: 'var(--muted-foreground)' }}>HR Manager · Acme Corp</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
