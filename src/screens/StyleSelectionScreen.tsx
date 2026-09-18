import { useState } from 'react'
import AppShell from '../components/AppShell'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

const backgrounds = [
  { id: 'b1', name: 'Corporate Gray', desc: 'Neutral gradient, universally professional', color: '#6B7280', hex: '#9ca3af' },
  { id: 'b2', name: 'LinkedIn Blue', desc: 'Classic blue, great for tech companies', color: '#2563EB', hex: '#3b82f6' },
  { id: 'b3', name: 'Executive White', desc: 'Clean white, high contrast', color: '#D1D5DB', hex: '#e5e7eb' },
  { id: 'b4', name: 'Warm Office', desc: 'Warm beige bokeh, welcoming tone', color: '#D97706', hex: '#fbbf24' },
  { id: 'b5', name: 'Dark Slate', desc: 'Bold and modern, leadership presence', color: '#1E293B', hex: '#334155' },
  { id: 'b6', name: 'Emerald Studio', desc: 'Subtle green, natural feel', color: '#065F46', hex: '#10b981' },
]

const outfits = [
  { id: 'o1', name: 'Navy Blazer', desc: 'Classic navy suit jacket', emoji: '🧥' },
  { id: 'o2', name: 'Business Casual', desc: 'Smart shirt, no jacket', emoji: '👔' },
  { id: 'o3', name: 'Executive Black', desc: 'Black suit, white shirt', emoji: '⬛' },
  { id: 'o4', name: 'Keep Original', desc: 'Preserve employee attire', emoji: '✨' },
]

export default function StyleSelectionScreen({ nav }: Props) {
  const [selBg, setSelBg] = useState('b1')
  const [selOutfit, setSelOutfit] = useState('o1')

  return (
    <AppShell nav={nav} active="styles">
      <div className="p-8 max-w-4xl">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--primary)' }}>Step 1 of 3</div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>Choose Your Style</h1>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Select the background and outfit style for your team's headshots.</p>
        </div>

        {/* Background */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Background Style</h2>
          <div className="grid grid-cols-3 gap-4">
            {backgrounds.map(bg => (
              <button key={bg.id} onClick={() => setSelBg(bg.id)}
                className="group flex flex-col gap-3 p-4 rounded-xl text-left transition-all"
                style={{
                  background: 'var(--card)',
                  border: selBg === bg.id ? `2px solid var(--primary)` : '2px solid var(--border)',
                  boxShadow: selBg === bg.id ? '0 0 16px rgba(79,126,240,0.2)' : 'none'
                }}>
                {/* Color swatch */}
                <div className="w-full h-24 rounded-lg relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${bg.color} 0%, ${bg.hex} 100%)` }}>
                  {/* Simulated person silhouette */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 rounded-t-full opacity-30"
                    style={{ background: 'rgba(0,0,0,0.5)' }} />
                  {selBg === bg.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--primary)' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{bg.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{bg.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Outfit */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Outfit / Attire Style</h2>
          <div className="grid grid-cols-4 gap-4">
            {outfits.map(o => (
              <button key={o.id} onClick={() => setSelOutfit(o.id)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all"
                style={{
                  background: 'var(--card)',
                  border: selOutfit === o.id ? `2px solid var(--primary)` : '2px solid var(--border)',
                  boxShadow: selOutfit === o.id ? '0 0 16px rgba(79,126,240,0.2)' : 'none'
                }}>
                <span className="text-3xl">{o.emoji}</span>
                <div className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{o.name}</div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{o.desc}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Selection summary */}
        <div className="flex items-center justify-between p-4 rounded-xl mb-6" style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}>
          <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            Selected: <strong style={{ color: 'var(--foreground)' }}>{backgrounds.find(b => b.id === selBg)?.name}</strong> background + <strong style={{ color: 'var(--foreground)' }}>{outfits.find(o => o.id === selOutfit)?.name}</strong>
          </div>
        </div>

        <button onClick={() => nav('upload')}
          className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          style={{ background: 'var(--primary)', color: 'white', boxShadow: '0 0 20px rgba(79,126,240,0.3)' }}>
          Continue to Upload →
        </button>
      </div>
    </AppShell>
  )
}
