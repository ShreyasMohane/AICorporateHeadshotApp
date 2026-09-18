import { useState, useRef } from 'react'
import AppShell from '../components/AppShell'
import { Screen } from '../App'

interface Props { nav: (s: Screen) => void }

const defaultEmployees = [
  { name: 'Sarah Chen', email: 'schen@acme.com', status: 'ready' },
  { name: 'Marcus Johnson', email: 'mjohnson@acme.com', status: 'ready' },
  { name: 'Priya Patel', email: 'ppatel@acme.com', status: 'ready' },
  { name: 'David Kim', email: 'dkim@acme.com', status: 'warning' },
  { name: 'Emma Rodriguez', email: 'erodriguez@acme.com', status: 'ready' },
]

export default function UploadScreen({ nav }: Props) {
  const [dragging, setDragging] = useState(false)
  const [uploaded, setUploaded] = useState(3)
  const [employees, setEmployees] = useState(defaultEmployees)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const addEmployee = () => {
    if (!newName.trim()) return
    setEmployees(prev => [...prev, { name: newName, email: newEmail, status: 'ready' }])
    setNewName('')
    setNewEmail('')
  }

  return (
    <AppShell nav={nav} active="upload">
      <div className="p-8 max-w-4xl">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--primary)' }}>Step 2 of 3</div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>Upload Employee Selfies</h1>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Drag and drop selfies for each team member. Match them to the employee list below.</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Drop zone */}
          <div>
            <div
              onDragOver={e => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={e => { e.preventDefault(); setDragging(false); setUploaded(p => p + 1) }}
              onClick={() => fileRef.current?.click()}
              className="flex flex-col items-center justify-center gap-4 p-10 rounded-2xl cursor-pointer transition-all mb-4"
              style={{
                background: dragging ? 'rgba(79,126,240,0.08)' : 'var(--card)',
                border: dragging ? '2px dashed var(--primary)' : '2px dashed var(--border)',
                minHeight: '240px'
              }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(79,126,240,0.1)' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 20V8M14 8L9 13M14 8L19 13" stroke="#4f7ef0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 22h18" stroke="#4f7ef0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Drop selfies here</div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>JPG, PNG, HEIC · Max 10MB each<br />Works best with clear face, good lighting</div>
              </div>
              <div className="text-xs px-4 py-2 rounded-lg font-medium" style={{ background: 'var(--secondary)', color: 'var(--foreground)', border: '1px solid var(--border)' }}>
                Browse Files
              </div>
              <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={() => setUploaded(p => p + 1)} />
            </div>

            {/* Upload progress */}
            <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>Uploaded Photos</span>
                <span className="text-xs font-bold" style={{ color: 'var(--primary)' }}>{uploaded} / {employees.length}</span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--secondary)' }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${(uploaded / employees.length) * 100}%`, background: 'var(--primary)' }} />
              </div>

              {/* Validation checks */}
              <div className="mt-4 space-y-2">
                {[
                  { label: 'Face detected in all photos', ok: true },
                  { label: 'Minimum resolution met (600×600px)', ok: true },
                  { label: 'One face per photo', ok: uploaded < 4 },
                  { label: 'Employee list matches photo count', ok: uploaded === employees.length },
                ].map(check => (
                  <div key={check.label} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: check.ok ? 'rgba(72,187,120,0.12)' : 'rgba(237,137,54,0.12)' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8">
                        {check.ok
                          ? <path d="M1.5 4l2 2L6.5 2" stroke="#48BB78" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                          : <path d="M2 4h4M4 2v4" stroke="#ED8936" strokeWidth="1.5" fill="none" strokeLinecap="round"/>}
                      </svg>
                    </div>
                    <span className="text-xs" style={{ color: check.ok ? 'var(--foreground)' : '#ED8936' }}>{check.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Employee list */}
          <div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Employee List ({employees.length})</h3>
              <div className="space-y-2 mb-4 max-h-52 overflow-auto scrollbar-hide">
                {employees.map((e, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: 'var(--secondary)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                      style={{ background: i < uploaded ? '#48BB78' : 'var(--border)' }}>
                      {i < uploaded ? '✓' : e.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold truncate" style={{ color: 'var(--foreground)' }}>{e.name}</div>
                      <div className="text-[10px] truncate" style={{ color: 'var(--muted-foreground)' }}>{e.email}</div>
                    </div>
                    {e.status === 'warning' && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(237,137,54,0.15)', color: '#ED8936' }}>Low res</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Add employee */}
              <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="text-xs font-semibold mb-2" style={{ color: 'var(--muted-foreground)' }}>Add Employee</div>
                <input value={newName} onChange={e => setNewName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 rounded-lg text-xs mb-2 outline-none"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                <input value={newEmail} onChange={e => setNewEmail(e.target.value)}
                  placeholder="work@company.com"
                  className="w-full px-3 py-2 rounded-lg text-xs mb-2 outline-none"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                <button onClick={addEmployee}
                  className="w-full py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
                  + Add to List
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={() => nav('styles')} className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
            style={{ background: 'var(--secondary)', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
            ← Back
          </button>
          <button onClick={() => nav('checkout')}
            className="px-8 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'var(--primary)', color: 'white' }}>
            Review Order →
          </button>
        </div>
      </div>
    </AppShell>
  )
}
