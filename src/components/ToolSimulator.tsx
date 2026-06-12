import React, { useState } from 'react';
import { 
  DollarSign, Clock, FileText, BarChart3, Users, 
  RefreshCw, Plus, Search, Laptop, Grid,
  Play, CheckSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Tool {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
}

export const ToolSimulator: React.FC = () => {
  const tools: Tool[] = [
    { id: 'expense', name: 'Expense Manager', icon: <DollarSign size={16} />, tagline: 'Personalized financial tracking.' },
    { id: 'log', name: 'Daily Log System', icon: <Clock size={16} />, tagline: 'Activity and routine tracker.' },
    { id: 'notes', name: 'Note-Taking App', icon: <FileText size={16} />, tagline: 'Customized notes & tags.' },
    { id: 'payments', name: 'Payment Dashboard', icon: <BarChart3 size={16} />, tagline: 'Multi-gateway collections.' },
    { id: 'zoom', name: 'Webinar Analytics', icon: <Users size={16} />, tagline: 'Zoom retention & Q&A tracker.' },
    { id: 'excel', name: 'Excel Automator', icon: <RefreshCw size={16} />, tagline: 'CSV & data-cleaning system.' },
    { id: 'portfolio', name: 'AI Portfolio Website', icon: <Laptop size={16} />, tagline: 'Personal landing layouts.' },
    { id: 'dashboard', name: 'AI-Built Dashboards', icon: <Grid size={16} />, tagline: 'Custom widget orchestrator.' }
  ];

  const [activeToolId, setActiveToolId] = useState<string>('expense');

  // 1. Expense tracker state
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Uber Cab', amount: 350, cat: 'Travel' },
    { id: 2, name: 'Team Lunch', amount: 1200, cat: 'Food' },
    { id: 3, name: 'Cursor AI Sub', amount: 1600, cat: 'SaaS' }
  ]);
  const [expName, setExpName] = useState('');
  const [expAmt, setExpAmt] = useState('');
  const [expCat, setExpCat] = useState('Food');

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expName || !expAmt) return;
    const newExp = {
      id: Date.now(),
      name: expName,
      amount: parseFloat(expAmt),
      cat: expCat
    };
    setExpenses([newExp, ...expenses]);
    setExpName('');
    setExpAmt('');
    
    // Confetti!
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  // 2. Daily logs state
  const [logs, setLogs] = useState([
    { id: 1, task: 'Gym Workout & Hydration', done: true },
    { id: 2, task: 'Blinkit Operations Planning', done: true },
    { id: 3, task: 'Read Claude-code release documentation', done: false },
    { id: 4, task: 'Record video draft for YouTube Shorts', done: false }
  ]);

  const toggleLog = (id: number) => {
    setLogs(logs.map(log => log.id === id ? { ...log, done: !log.done } : log));
  };

  const getLogProgress = () => {
    const doneCount = logs.filter(l => l.done).length;
    return Math.round((doneCount / logs.length) * 100);
  };

  // 3. Note Taking App State
  const [notes, setNotes] = useState([
    { id: 1, title: 'Excel prompt idea', content: 'Clean names from string: TRIM(PROPER(A1))', tag: 'Excel' },
    { id: 2, title: 'Video hooks list', content: 'Top 3 AI tools I used to double my productivity', tag: 'Video' }
  ]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteTag, setNoteTag] = useState('Excel');
  const [noteSearch, setNoteSearch] = useState('');

  const saveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteTitle || !noteContent) return;
    setNotes([{ id: Date.now(), title: noteTitle, content: noteContent, tag: noteTag }, ...notes]);
    setNoteTitle('');
    setNoteContent('');
  };

  // 4. Payment state
  const [paymentFilter, setPaymentFilter] = useState<'all' | 'success' | 'failed'>('all');
  const transactions = [
    { id: 'TXN001', gateway: 'Cashfree', amt: '₹4,999', status: 'success', date: '11:24 AM' },
    { id: 'TXN002', gateway: 'PayU', amt: '₹1,999', status: 'failed', date: '10:52 AM' },
    { id: 'TXN003', gateway: 'Cashfree', amt: '₹4,999', status: 'success', date: '09:15 AM' },
    { id: 'TXN004', gateway: 'PayU', amt: '₹4,999', status: 'success', date: '08:42 AM' }
  ];

  // 5. Zoom Webinar analytics state
  const [selectedWebinar, setSelectedWebinar] = useState('june10');
  const webinarDetails = {
    june10: { attendees: 382, stayTime: '48m', questions: 14, dropOffTime: 'At 35 min (sales pitch)' },
    june05: { attendees: 250, stayTime: '42m', questions: 8, dropOffTime: 'At 28 min (demo loop)' }
  };

  // 6. Excel Data cleaner state
  const [rawCSV, setRawCSV] = useState('John Doe, john@gmail.com, 9876543210\njane SMITH, JANE@YAHOO.COM, 8765432109\n   bob johnson  , bob@work.co  , 7654321098');
  const [cleanedData, setCleanedData] = useState<{ name: string; email: string; phone: string }[] | null>(null);
  const [isCleaning, setIsCleaning] = useState(false);

  const runDataCleaning = () => {
    setIsCleaning(true);
    setTimeout(() => {
      const rows = rawCSV.split('\n');
      const parsed = rows.map(row => {
        const cols = row.split(',');
        if (cols.length < 3) return { name: '', email: '', phone: '' };
        return {
          name: cols[0].trim().replace(/\b\w/g, c => c.toUpperCase()), // Title Case
          email: cols[1].trim().toLowerCase(),
          phone: cols[2].trim()
        };
      }).filter(r => r.name !== '');
      setCleanedData(parsed);
      setIsCleaning(false);
      confetti({ particleCount: 30, spread: 40 });
    }, 1000);
  };

  // 7. Portfolio built using AI iframe simulation state
  const [pfColor, setPfColor] = useState('cyan');

  // 8. AI-Built Dashboard widgets state
  const [activeWidgets, setActiveWidgets] = useState({
    clock: true,
    metrics: true,
    quickNote: false,
    chart: true
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '20px', height: '100%' }}>
      {/* Sidebar - list of tools */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderRight: '1px solid var(--color-border)', paddingRight: '16px', overflowY: 'auto' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'var(--font-mono)', paddingLeft: '8px', marginBottom: '8px' }}>
          PROOFS OF BUILD
        </div>
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveToolId(t.id)}
            className="interactive"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '10px',
              border: activeToolId === t.id ? '1px solid var(--color-indigo)' : '1px solid transparent',
              background: activeToolId === t.id ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: activeToolId === t.id ? '#ffffff' : '#9ca3af',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '0.85rem',
              transition: 'var(--transition-fast)'
            }}
          >
            <span style={{ color: activeToolId === t.id ? 'var(--color-cyan)' : '#4b5563' }}>{t.icon}</span>
            {t.name}
          </button>
        ))}
      </div>

      {/* Simulator view pane */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        {/* Header tag */}
        <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)', marginBottom: '16px' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Interactive Demo
          </span>
          <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            {tools.find(t => t.id === activeToolId)?.name}
          </h4>
          <p style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
            {tools.find(t => t.id === activeToolId)?.tagline}
          </p>
        </div>

        {/* Dynamic simulator frames */}
        <div style={{ flexGrow: 1, minHeight: 0, display: 'flex' }}>
          
          {/* 1. Expense Manager Simulator */}
          {activeToolId === 'expense' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <form onSubmit={addExpense} style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  value={expName} 
                  onChange={(e) => setExpName(e.target.value)} 
                  placeholder="e.g. Starbucks Coffee" 
                  style={{ flexGrow: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '0.8rem' }}
                />
                <input 
                  type="number" 
                  value={expAmt} 
                  onChange={(e) => setExpAmt(e.target.value)} 
                  placeholder="₹ Amount" 
                  style={{ width: '100px', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '0.8rem' }}
                />
                <select 
                  value={expCat} 
                  onChange={(e) => setExpCat(e.target.value)}
                  style={{ padding: '8px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'rgba(5,6,10,0.9)', color: 'white', fontSize: '0.8rem' }}
                >
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="SaaS">SaaS</option>
                </select>
                <button type="submit" className="btn btn-primary interactive" style={{ padding: '8px 14px', borderRadius: '8px' }}>
                  <Plus size={14} /> Add
                </button>
              </form>

              {/* Expense Graph Visualization */}
              <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '12px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#9ca3af' }}>Live Recalculating Graph:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1, justifyContent: 'center' }}>
                  {['Food', 'Travel', 'SaaS'].map(category => {
                    const totalForCategory = expenses
                      .filter(e => e.cat === category)
                      .reduce((sum, current) => sum + current.amount, 0);
                    const totalAll = expenses.reduce((sum, curr) => sum + curr.amount, 0) || 1;
                    const pct = Math.min(100, Math.round((totalForCategory / totalAll) * 100));
                    
                    let barColor = 'var(--color-cyan)';
                    if (category === 'Travel') barColor = 'var(--color-indigo)';
                    if (category === 'SaaS') barColor = 'var(--color-magenta)';

                    return (
                      <div key={category} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 60px', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.78rem', color: '#f3f4f6', fontWeight: 500 }}>{category}</span>
                        <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', background: barColor, width: `${pct}%`, transition: 'width 0.4s ease' }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#9ca3af', textAlign: 'right' }}>
                          ₹{totalForCategory}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 2. Daily Log System Simulator */}
          {activeToolId === 'log' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(99,102,241,0.1)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(99,102,241,0.2)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Daily Workflow Focus:</span>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)' }}>
                  Progress: {getLogProgress()}%
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                {logs.map((log) => (
                  <div 
                    key={log.id} 
                    onClick={() => toggleLog(log.id)}
                    className="interactive"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      padding: '10px 12px', 
                      background: 'rgba(255,255,255,0.02)', 
                      borderRadius: '8px', 
                      border: '1px solid var(--color-border)', 
                      cursor: 'pointer',
                      textDecoration: log.done ? 'line-through' : 'none',
                      opacity: log.done ? 0.6 : 1,
                      transition: 'all 0.2s'
                    }}
                  >
                    <CheckSquare size={16} style={{ color: log.done ? 'var(--color-emerald)' : '#9ca3af' }} />
                    <span style={{ fontSize: '0.8rem', color: '#f3f4f6' }}>{log.task}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Note-Taking Simulator */}
          {activeToolId === 'notes' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Search size={14} style={{ color: '#9ca3af' }} />
                <input 
                  type="text" 
                  value={noteSearch} 
                  onChange={(e) => setNoteSearch(e.target.value)} 
                  placeholder="Search notes..." 
                  style={{ flexGrow: 1, padding: '6px 10px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '0.78rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px', flexGrow: 1, minHeight: 0 }}>
                {/* Notes list */}
                <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {notes.filter(n => n.title.toLowerCase().includes(noteSearch.toLowerCase())).map((n) => (
                    <div key={n.id} style={{ padding: '8px 10px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <strong style={{ fontSize: '0.8rem', color: '#ffffff' }}>{n.title}</strong>
                        <span style={{ fontSize: '0.65rem', background: 'rgba(99,102,241,0.2)', color: 'var(--color-indigo)', padding: '1px 5px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>{n.tag}</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{n.content}</p>
                    </div>
                  ))}
                </div>

                {/* Note creator */}
                <form onSubmit={saveNote} style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'rgba(0,0,0,0.15)', padding: '10px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                  <input 
                    type="text" 
                    value={noteTitle} 
                    onChange={(e) => setNoteTitle(e.target.value)} 
                    placeholder="Note Title" 
                    style={{ padding: '6px 8px', borderRadius: '6px', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '0.75rem' }}
                  />
                  <textarea 
                    value={noteContent} 
                    onChange={(e) => setNoteContent(e.target.value)} 
                    placeholder="Content..." 
                    style={{ flexGrow: 1, padding: '6px 8px', borderRadius: '6px', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '0.75rem', resize: 'none' }}
                  />
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <select value={noteTag} onChange={(e) => setNoteTag(e.target.value)} style={{ padding: '4px', borderRadius: '6px', border: '1px solid var(--color-border)', background: '#090a10', color: 'white', fontSize: '0.75rem' }}>
                      <option value="Excel">Excel</option>
                      <option value="Video">Video</option>
                      <option value="Personal">Personal</option>
                    </select>
                    <button type="submit" className="btn btn-primary interactive" style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '6px', flexGrow: 1, justifyContent: 'center' }}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* 4. Payment Collection Dashboard */}
          {activeToolId === 'payments' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>TOTAL COLLECTIONS</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-cyan)', marginTop: '2px' }}>₹16,996</div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>SUCCESS RATE</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-emerald)', marginTop: '2px' }}>75.0%</div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>GATEWAYS ACTIVE</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-indigo)', marginTop: '2px' }}>Cashfree, PayU</div>
                </div>
              </div>

              {/* Transactions grid */}
              <div style={{ flexGrow: 1, minHeight: 0, overflowY: 'auto' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <button onClick={() => setPaymentFilter('all')} style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', border: 'none', background: paymentFilter === 'all' ? 'var(--color-indigo)' : 'rgba(255,255,255,0.05)', color: 'white', cursor: 'pointer' }}>All</button>
                  <button onClick={() => setPaymentFilter('success')} style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', border: 'none', background: paymentFilter === 'success' ? 'var(--color-emerald)' : 'rgba(255,255,255,0.05)', color: 'white', cursor: 'pointer' }}>Success</button>
                  <button onClick={() => setPaymentFilter('failed')} style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', border: 'none', background: paymentFilter === 'failed' ? 'var(--color-magenta)' : 'rgba(255,255,255,0.05)', color: 'white', cursor: 'pointer' }}>Failed</button>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-border)', color: '#9ca3af' }}>
                      <th style={{ padding: '6px' }}>Txn ID</th>
                      <th style={{ padding: '6px' }}>Gateway</th>
                      <th style={{ padding: '6px' }}>Amount</th>
                      <th style={{ padding: '6px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .filter(t => paymentFilter === 'all' || t.status === paymentFilter)
                      .map((t) => (
                        <tr key={t.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                          <td style={{ padding: '6px', fontFamily: 'var(--font-mono)' }}>{t.id}</td>
                          <td style={{ padding: '6px' }}>{t.gateway}</td>
                          <td style={{ padding: '6px', fontWeight: 600 }}>{t.amt}</td>
                          <td style={{ padding: '6px', color: t.status === 'success' ? 'var(--color-emerald)' : 'var(--color-magenta)' }}>{t.status.toUpperCase()}</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. Zoom Webinar Analytics */}
          {activeToolId === 'zoom' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
                <button 
                  onClick={() => setSelectedWebinar('june10')}
                  style={{ background: 'none', border: 'none', color: selectedWebinar === 'june10' ? 'var(--color-cyan)' : '#9ca3af', borderBottom: selectedWebinar === 'june10' ? '2px solid var(--color-cyan)' : 'none', paddingBottom: '4px', fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  Session: June 10 (382 attendees)
                </button>
                <button 
                  onClick={() => setSelectedWebinar('june05')}
                  style={{ background: 'none', border: 'none', color: selectedWebinar === 'june05' ? 'var(--color-cyan)' : '#9ca3af', borderBottom: selectedWebinar === 'june05' ? '2px solid var(--color-cyan)' : 'none', paddingBottom: '4px', fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  Session: June 05 (250 attendees)
                </button>
              </div>

              {/* Data sheets metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '12px', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Avg Stay Time</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>{webinarDetails[selectedWebinar as 'june10' | 'june05'].stayTime}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Max Drop-off Trigger</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-magenta)', marginTop: '2px' }}>
                      {webinarDetails[selectedWebinar as 'june10' | 'june05'].dropOffTime}
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--color-border)', padding: '10px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ fontSize: '0.75rem', color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>Attendees Questions Asked:</strong>
                  <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.7rem' }}>
                    {selectedWebinar === 'june10' ? (
                      <>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '4px' }}>
                          <span style={{ color: 'var(--color-cyan)' }}>Amit K:</span> Can this connect directly with google sheets?
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '4px' }}>
                          <span style={{ color: 'var(--color-cyan)' }}>Rohan S:</span> How to handle token auth in cursor composer?
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '4px' }}>
                          <span style={{ color: 'var(--color-cyan)' }}>Sana M:</span> Do we need coding backgrounds for using these tools?
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '4px' }}>
                          <span style={{ color: 'var(--color-cyan)' }}>Priya:</span> Can you share the prompt templates?
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '4px' }}>
                          <span style={{ color: 'var(--color-cyan)' }}>Vikram:</span> Is there a free option for google antigravity tools?
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. Excel Data Cleaner */}
          {activeToolId === 'excel' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flexGrow: 1, minHeight: 0 }}>
                {/* Input CSV */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.72rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>Messy CSV Raw Input:</label>
                  <textarea 
                    value={rawCSV} 
                    onChange={(e) => setRawCSV(e.target.value)}
                    style={{ flexGrow: 1, padding: '8px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.25)', color: '#a7f3d0', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', resize: 'none' }}
                  />
                </div>

                {/* Output table */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.72rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>Cleaned & Standardized Output:</label>
                  <div style={{ flexGrow: 1, background: 'rgba(0,0,0,0.15)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '8px', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: cleanedData ? 'flex-start' : 'center', alignItems: cleanedData ? 'stretch' : 'center' }}>
                    {isCleaning ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>Running RegEx and AI cleans...</span>
                        <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.05)', borderTopColor: 'var(--color-cyan)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                      </div>
                    ) : cleanedData ? (
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.7rem', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid var(--color-border)', color: '#9ca3af' }}>
                            <th style={{ padding: '4px' }}>Name</th>
                            <th style={{ padding: '4px' }}>Email</th>
                            <th style={{ padding: '4px' }}>Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cleanedData.map((row, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                              <td style={{ padding: '4px', fontWeight: 600 }}>{row.name}</td>
                              <td style={{ padding: '4px', color: 'var(--color-cyan)' }}>{row.email}</td>
                              <td style={{ padding: '4px' }}>{row.phone}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: '#4b5563' }}>No data cleaned yet.</span>
                    )}
                  </div>
                </div>
              </div>
              <button 
                onClick={runDataCleaning}
                disabled={isCleaning}
                className="btn btn-primary interactive" 
                style={{ alignSelf: 'flex-end', padding: '8px 16px', borderRadius: '8px', fontSize: '0.8rem' }}
              >
                <Play size={14} /> Clean CSV Data
              </button>
            </div>
          )}

          {/* 7. AI Portfolio simulator */}
          {activeToolId === 'portfolio' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Toggle Portfolio Accent Color:</span>
                {['cyan', 'indigo', 'magenta'].map(c => (
                  <button 
                    key={c}
                    onClick={() => setPfColor(c)}
                    className="interactive"
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: 'none',
                      background: c === 'cyan' ? 'var(--color-cyan)' : c === 'indigo' ? 'var(--color-indigo)' : 'var(--color-magenta)',
                      cursor: 'pointer',
                      outline: pfColor === c ? '2px solid white' : 'none'
                    }}
                  />
                ))}
              </div>

              {/* Simulated portfolio mockup browser frame */}
              <div style={{
                flexGrow: 1,
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                background: '#0a0c10',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ background: '#141722', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></span>
                    <span style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%' }}></span>
                    <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></span>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', flexGrow: 1, padding: '2px 8px', borderRadius: '4px', color: '#9ca3af', fontSize: '0.65rem', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                    https://abhishek.build
                  </div>
                </div>
                
                {/* Simulated landing screen */}
                <div style={{ flexGrow: 1, padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    background: pfColor === 'cyan' ? 'var(--color-cyan)' : pfColor === 'indigo' ? 'var(--color-indigo)' : 'var(--color-magenta)',
                    filter: 'blur(35px)',
                    opacity: 0.3,
                    zIndex: 0
                  }} />
                  <h5 style={{ fontSize: '1rem', color: 'white', fontFamily: 'var(--font-display)', zIndex: 1, marginBottom: '2px' }}>
                    Abhishek Kumar
                  </h5>
                  <p style={{ fontSize: '0.65rem', color: pfColor === 'cyan' ? 'var(--color-cyan)' : pfColor === 'indigo' ? 'var(--color-indigo)' : 'var(--color-magenta)', fontFamily: 'var(--font-mono)', zIndex: 1, marginBottom: '10px' }}>
                    AI Builder & Senior Manager
                  </p>
                  <p style={{ fontSize: '0.7rem', color: '#9ca3af', maxWidth: '280px', zIndex: 1 }}>
                    I convert daily workflows and automation problems into interactive tools using generative coding agents.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 8. AI-Built Dashboards builder */}
          {activeToolId === 'dashboard' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', color: '#9ca3af', display: 'flex', alignItems: 'center', marginRight: '6px' }}>Widgets Configuration:</span>
                {Object.keys(activeWidgets).map((widget) => {
                  const key = widget as keyof typeof activeWidgets;
                  return (
                    <button
                      key={widget}
                      onClick={() => setActiveWidgets({ ...activeWidgets, [key]: !activeWidgets[key] })}
                      className="interactive"
                      style={{
                        padding: '4px 8px',
                        fontSize: '0.7rem',
                        borderRadius: '6px',
                        border: '1px solid var(--color-border)',
                        background: activeWidgets[key] ? 'rgba(99,102,241,0.15)' : 'transparent',
                        color: activeWidgets[key] ? 'white' : '#9ca3af',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {activeWidgets[key] ? '✔' : '+'} {widget.replace(/^[a-z]/, c => c.toUpperCase())}
                    </button>
                  );
                })}
              </div>

              {/* Dashboard render grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', flexGrow: 1, minHeight: 0 }}>
                {activeWidgets.clock && (
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>LOCAL TIME</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>11:33 AM</span>
                  </div>
                )}
                {activeWidgets.metrics && (
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>SUBSCRIBER RETENTION</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-magenta)' }}>92.4%</span>
                  </div>
                )}
                {activeWidgets.quickNote && (
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <strong style={{ fontSize: '0.7rem', color: 'white', marginBottom: '2px' }}>Sticky Memo:</strong>
                    <span style={{ fontSize: '0.68rem', color: '#9ca3af' }}>Record Excel data clean reels tomorrow morning.</span>
                  </div>
                )}
                {activeWidgets.chart && (
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>TRAFFIC SPLIT</span>
                    <div style={{ display: 'flex', gap: '4px', height: '40px', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                      <div style={{ width: '8px', height: '35%', background: 'var(--color-cyan)', borderRadius: '2px' }} />
                      <div style={{ width: '8px', height: '65%', background: 'var(--color-indigo)', borderRadius: '2px' }} />
                      <div style={{ width: '8px', height: '90%', background: 'var(--color-magenta)', borderRadius: '2px' }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
