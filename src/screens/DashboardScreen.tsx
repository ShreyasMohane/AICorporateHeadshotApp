import AppShell from '../components/AppShell'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

const batches = [
  { id: 'B-2024-089', company: 'Engineering Team', count: 24, date: 'Sep 14, 2026', status: 'completed', cost: '$120' },
  { id: 'B-2024-088', company: 'Sales Department', count: 18, date: 'Sep 10, 2026', status: 'completed', cost: '$90' },
  { id: 'B-2024-087', company: 'C-Suite Executives', count: 6, date: 'Sep 5, 2026', status: 'completed', cost: '$30' },
  { id: 'B-2024-086', company: 'Marketing Team', count: 32, date: 'Aug 28, 2026', status: 'completed', cost: '$160' },
  { id: 'B-2024-085', company: 'Customer Success', count: 14, date: 'Aug 20, 2026', status: 'archived', cost: '$70' },
]

const avatarColors = ['#4f7ef0','#38bdf8','#48BB78','#ED8936','#E53E3E','#805AD5']

export default function DashboardScreen({ nav }: Props) {
  return (
    <AppShell nav={nav} active="dashboard">
      <div className="p-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>Dashboard</h1>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Welcome back, Jane. Here's your headshot activity.</p>
          </div>
          <button onClick={() => nav('styles')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'var(--primary)', color: 'white', boxShadow: '0 0 20px rgba(79,126,240,0.3)' }}>
            + Start New Batch
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Headshots', value: '312', delta: '+24 this month', color: '#4f7ef0' },
            { label: 'Batches Processed', value: '18', delta: '+3 this month', color: '#38bdf8' },
            { label: 'Avg. Turnaround', value: '8 min', delta: 'Per 10 employees', color: '#48BB78' },
            { label: 'Total Spend', value: '$1,560', delta: '$90 saved vs. studio', color: '#805AD5' },
          ].map(stat => (
            <div key={stat.label} className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: stat.color }} />
              <div className="text-2xl font-bold mb-0.5" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
              <div className="text-xs font-medium mb-1" style={{ color: 'var(--foreground)' }}>{stat.label}</div>
              <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{stat.delta}</div>
            </div>
          ))}
        </div>

        {/* Recent batches */}
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
            <h2 className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>Recent Batches</h2>
            <button onClick={() => nav('results')} className="text-xs font-medium hover:underline" style={{ color: 'var(--primary)' }}>
              View all results →
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Batch ID', 'Team / Group', 'Employees', 'Date', 'Status', 'Cost', ''].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {batches.map((b, i) => (
                <tr key={b.id} className="transition-colors hover:bg-white/[0.02]" style={{ borderBottom: i < batches.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <td className="px-6 py-4 text-xs font-mono" style={{ color: 'var(--muted-foreground)' }}>{b.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: avatarColors[i % avatarColors.length] }}>
                        {b.company[0]}
                      </div>
                      <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{b.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground)' }}>{b.count}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>{b.date}</td>
                  <td className="px-6 py-4">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{
                      background: b.status === 'completed' ? 'rgba(72,187,120,0.12)' : 'rgba(107,127,168,0.12)',
                      color: b.status === 'completed' ? '#48BB78' : 'var(--muted-foreground)'
                    }}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{b.cost}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => nav('results')} className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:opacity-90"
                      style={{ background: 'var(--secondary)', color: 'var(--foreground)', border: '1px solid var(--border)' }}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  )
}
