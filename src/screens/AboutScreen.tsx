import AppShell from '../components/AppShell'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

export default function AboutScreen({ nav }: Props) {
  return (
    <AppShell nav={nav} active="about">
      <div className="p-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>About & Support</h1>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Security, privacy policies, and how to reach us.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Contact support */}
          <div className="p-6 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(79,126,240,0.12)' }}>
                <span className="text-lg">💬</span>
              </div>
              <h2 className="font-semibold" style={{ color: 'var(--foreground)' }}>Customer Support</h2>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Email', value: 'support@headshotai.com', icon: '✉️' },
                { label: 'Response time', value: '< 4 hours (business days)', icon: '⏱' },
                { label: 'Enterprise line', value: '+1 (800) 424-2324', icon: '📞' },
                { label: 'Live chat', value: 'Available 9am–6pm ET', icon: '💬' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm w-5">{c.icon}</span>
                  <div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{c.label}</div>
                    <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--primary)', color: 'white' }}>
              Open Support Ticket
            </button>
          </div>

          {/* About us */}
          <div className="p-6 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(56,189,248,0.12)' }}>
                <span className="text-lg">🏢</span>
              </div>
              <h2 className="font-semibold" style={{ color: 'var(--foreground)' }}>About HeadshotAI</h2>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
              HeadshotAI is a B2B micro-SaaS platform built for HR teams and People Ops professionals. We use generative AI (Flux / SDXL LoRAs) to standardize employee photos without requiring a photo studio.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
              Founded in 2026 · Bootstrapped · SOC 2 Type II certified · 200+ enterprise customers across 30 countries.
            </p>
            <div className="flex flex-wrap gap-2">
              {['SOC 2 Type II', 'GDPR', 'CCPA', 'ISO 27001'].map(badge => (
                <span key={badge} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(79,126,240,0.1)', color: 'var(--primary)', border: '1px solid rgba(79,126,240,0.2)' }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Data deletion guarantee */}
        <div className="p-6 rounded-xl mb-6 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid rgba(72,187,120,0.3)' }}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px]"
            style={{ background: 'radial-gradient(circle, rgba(72,187,120,0.08) 0%, transparent 70%)' }} />
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(72,187,120,0.12)' }}>
              <span className="text-2xl">🗑️</span>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2" style={{ color: '#48BB78' }}>Strict Data Deletion Guarantee</h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted-foreground)' }}>
                We take employee data privacy extremely seriously. All uploaded photos, intermediate AI outputs, and personal identifiers are automatically and permanently deleted from our systems within <strong className="text-white">30 days</strong> of batch completion — no exceptions.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Auto-delete', desc: '30 days after batch delivery', icon: '⏰' },
                  { title: 'Encrypted transit', desc: 'TLS 1.3 + AES-256 at rest', icon: '🔐' },
                  { title: 'No third parties', desc: 'Photos never shared externally', icon: '🚫' },
                ].map(g => (
                  <div key={g.title} className="p-3 rounded-lg" style={{ background: 'rgba(72,187,120,0.06)', border: '1px solid rgba(72,187,120,0.15)' }}>
                    <div className="text-lg mb-1">{g.icon}</div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: '#48BB78' }}>{g.title}</div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{g.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="p-6 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <h2 className="font-semibold mb-4 text-sm" style={{ color: 'var(--foreground)' }}>Legal & Policies</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: 'Privacy Policy', desc: 'How we collect, use, and protect your data', icon: '📄' },
              { title: 'Terms of Service', desc: 'Usage terms and service agreements', icon: '📋' },
              { title: 'Data Processing Agreement (DPA)', desc: 'GDPR-compliant DPA for enterprise clients', icon: '🤝' },
              { title: 'Security Whitepaper', desc: 'Our SOC 2 infrastructure and controls', icon: '🔒' },
              { title: 'Cookie Policy', desc: 'Minimal tracking, no advertising cookies', icon: '🍪' },
              { title: 'GDPR Data Rights', desc: 'Request access, deletion, or export', icon: '🇪🇺' },
            ].map(doc => (
              <button key={doc.title} className="flex items-center gap-3 p-3 rounded-xl text-left transition-all hover:bg-white/[0.03]"
                style={{ border: '1px solid var(--border)' }}>
                <span className="text-xl">{doc.icon}</span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>{doc.title} →</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{doc.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
