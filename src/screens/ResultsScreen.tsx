import { useState } from 'react'
import AppShell from '../components/AppShell'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

const employees = [
  { name: 'Sarah Chen', role: 'Engineering', initials: 'SC', color: '#4f7ef0', batch: 'B-2024-089' },
  { name: 'Marcus Johnson', role: 'Sales', initials: 'MJ', color: '#38bdf8', batch: 'B-2024-089' },
  { name: 'Priya Patel', role: 'Product', initials: 'PP', color: '#48BB78', batch: 'B-2024-089' },
  { name: 'David Kim', role: 'Engineering', initials: 'DK', color: '#805AD5', batch: 'B-2024-089' },
  { name: 'Emma Rodriguez', role: 'Marketing', initials: 'ER', color: '#ED8936', batch: 'B-2024-089' },
  { name: 'James Wilson', role: 'Sales', initials: 'JW', color: '#E53E3E', batch: 'B-2024-089' },
  { name: 'Aisha Okonkwo', role: 'HR', initials: 'AO', color: '#38bdf8', batch: 'B-2024-088' },
  { name: 'Tom Fischer', role: 'Engineering', initials: 'TF', color: '#4f7ef0', batch: 'B-2024-088' },
  { name: 'Nina Yamamoto', role: 'Design', initials: 'NY', color: '#48BB78', batch: 'B-2024-088' },
  { name: 'Carlos Mendes', role: 'Finance', initials: 'CM', color: '#805AD5', batch: 'B-2024-088' },
  { name: 'Sophie Laurent', role: 'Legal', initials: 'SL', color: '#ED8936', batch: 'B-2024-088' },
  { name: 'Ryan O\'Brien', role: 'Engineering', initials: 'RO', color: '#E53E3E', batch: 'B-2024-088' },
]

export default function ResultsScreen({ nav }: Props) {
  const [selected, setSelected] = useState<number[]>([])
  const [filter, setFilter] = useState('all')

  const batches = ['all', 'B-2024-089', 'B-2024-088']
  const filtered = filter === 'all' ? employees : employees.filter(e => e.batch === filter)

  const toggleSelect = (i: number) => {
    setSelected(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i])
  }

  const selectAll = () => {
    if (selected.length === filtered.length) setSelected([])
    else setSelected(filtered.map((_, i) => i))
  }

  return (
    <AppShell nav={nav} active="results">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>Headshot Results</h1>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{employees.length} headshots generated · Ready to download</p>
          </div>
          <div className="flex gap-3">
            {selected.length > 0 && (
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
                ↓ Download Selected ({selected.length})
              </button>
            )}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'var(--primary)', color: 'white', boxShadow: '0 0 20px rgba(79,126,240,0.3)' }}>
              ↓ Download All ({employees.length})
            </button>
          </div>
        </div>

        {/* Filter + select toolbar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'var(--secondary)' }}>
            {batches.map(b => (
              <button key={b} onClick={() => setFilter(b)}
                className="px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: filter === b ? 'var(--card)' : 'transparent',
                  color: filter === b ? 'var(--foreground)' : 'var(--muted-foreground)',
                  border: filter === b ? '1px solid var(--border)' : 'none'
                }}>
                {b === 'all' ? 'All Batches' : b}
              </button>
            ))}
          </div>
          <button onClick={selectAll} className="text-xs font-medium hover:underline" style={{ color: 'var(--primary)' }}>
            {selected.length === filtered.length ? 'Deselect all' : 'Select all'}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-4">
          {filtered.map((emp, i) => (
            <div key={i} onClick={() => toggleSelect(i)}
              className="group rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02]"
              style={{
                background: 'var(--card)',
                border: selected.includes(i) ? '2px solid var(--primary)' : '2px solid var(--border)',
                boxShadow: selected.includes(i) ? '0 0 16px rgba(79,126,240,0.25)' : 'none'
              }}>
              {/* Headshot preview — simulated with gradient + initials */}
              <div className="relative w-full aspect-[3/4] flex items-end justify-center overflow-hidden"
                style={{ background: `linear-gradient(160deg, #1a2a4a 0%, #0d1117 100%)` }}>
                {/* Background style simulation */}
                <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 70%, ${emp.color}22 0%, transparent 70%)` }} />
                {/* Body silhouette */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 rounded-t-full opacity-20"
                  style={{ background: `linear-gradient(to top, ${emp.color}40, transparent)` }} />
                {/* Face circle */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${emp.color} 0%, ${emp.color}88 100%)` }}>
                  {emp.initials}
                </div>
                {/* "AI Generated" badge */}
                <div className="absolute top-3 left-3 text-[9px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.7)' }}>
                  AI GENERATED
                </div>
                {/* Select checkbox */}
                <div className="absolute top-3 right-3 w-5 h-5 rounded flex items-center justify-center transition-all"
                  style={{ background: selected.includes(i) ? 'var(--primary)' : 'rgba(0,0,0,0.5)', border: selected.includes(i) ? 'none' : '1px solid rgba(255,255,255,0.3)' }}>
                  {selected.includes(i) && <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>}
                </div>
              </div>
              {/* Info */}
              <div className="p-3">
                <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--foreground)' }}>{emp.name}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{emp.role}</span>
                  <button className="text-[10px] font-semibold px-2 py-1 rounded transition-all hover:opacity-80"
                    style={{ background: 'var(--secondary)', color: 'var(--foreground)', border: '1px solid var(--border)' }}>
                    ↓
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom export bar */}
        <div className="mt-8 flex items-center justify-between p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            Export format: <strong style={{ color: 'var(--foreground)' }}>JPG 1200×1600px</strong> · Named by employee
          </div>
          <div className="flex gap-2">
            {['JPG', 'PNG', 'ZIP'].map(fmt => (
              <button key={fmt} className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all hover:opacity-80"
                style={{ background: fmt === 'ZIP' ? 'var(--primary)' : 'var(--secondary)', color: 'white', border: fmt !== 'ZIP' ? '1px solid var(--border)' : 'none' }}>
                {fmt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
