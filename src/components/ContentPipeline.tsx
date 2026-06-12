import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ToolIdea {
  title: string;
  category: 'personal' | 'business' | 'ai';
  desc: string;
  prompt: string;
}

export const ContentPipeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'personal' | 'business' | 'ai'>('all');
  const [selectedIdea, setSelectedIdea] = useState<ToolIdea | null>(null);

  const ideas: ToolIdea[] = [
    { title: 'Personal Expense Manager', category: 'personal', desc: 'Custom ledger for bank SMS parsed cards.', prompt: 'Parse expense SMS alerts and organize into monthly charts.' },
    { title: 'Daily Activity Log System', category: 'personal', desc: 'Track daily achievements vs planned goals.', prompt: 'Create checklist with circular progress ring representing day completion.' },
    { title: 'Personal Note-Taking App', category: 'personal', desc: 'Structured tags organizer with index searches.', prompt: 'Create card-based note compiler supporting custom tags.' },
    { title: 'Habit & Routine Tracker', category: 'personal', desc: 'Streak builder for daily habits (workout, read).', prompt: 'Create habit calendar checker showing consecutive day counts.' },
    { title: 'Study Timetable Planner', category: 'personal', desc: 'Dynamic schedule scheduler with alarm queues.', prompt: 'Design timeline layout which splits study intervals with break notifications.' },
    { title: 'Eating & Health Tracker', category: 'personal', desc: 'Log calorie splits and water targets.', prompt: 'Create metric input tracker that adds water intake to a graphic bottle cup.' },
    { title: 'Reminder Alert Widget', category: 'personal', desc: 'Floating system reminder triggers.', prompt: 'Generate audio timer notifications when checklist items are overdue.' },
    
    { title: 'Payment Collection Dashboard', category: 'business', desc: 'Revenue aggregator for stripe & cashfree APIs.', prompt: 'Integrate Cashfree API gateway response to draw daily collection charts.' },
    { title: 'Zoom Webinar Analytics', category: 'business', desc: 'Analyze drop points and attendees stays.', prompt: 'Graph participant duration lists showing drop-off curves at time markers.' },
    { title: 'CRM-Style Lead Tracker', category: 'business', desc: 'Track sales deals pipeline status.', prompt: 'Design kanban board showing Lead ➔ In Touch ➔ Proposal ➔ Won columns.' },
    { title: 'Client Communication Tracker', category: 'business', desc: 'Log meetings, emails, and follow-ups.', prompt: 'Create dashboard containing last interaction times and color-coded warnings.' },
    { title: 'Invoice Tracker & Generator', category: 'business', desc: 'Compile PDF invoices for small businesses.', prompt: 'Create printable invoice creator with automated tax calculations.' },
    { title: 'Follow-up Email Scheduler', category: 'business', desc: 'Queue reminder emails for client contracts.', prompt: 'Generate standard follow-up draft script templates based on date differences.' },
    
    { title: 'Website Summarizer', category: 'ai', desc: 'Parse articles URLs into concise bullets.', prompt: 'Use Gemini API to fetch website source text and extract key 3 action points.' },
    { title: 'PDF Analyzer Agent', category: 'ai', desc: 'Chat interface for loaded documentation files.', prompt: 'Implement chat input that parses local pdf keywords and displays answers.' },
    { title: 'Landing Page Builder', category: 'ai', desc: 'AI-generated HTML designs with one prompt.', prompt: 'Compile layout components based on text description of brand values.' },
    { title: 'Form Automation System', category: 'ai', desc: 'Create custom intake forms with spreadsheet bindings.', prompt: 'Generate form inputs that feed data directly to a customized database API.' },
    { title: 'Business Report Creator', category: 'ai', desc: 'Clean raw data logs and output reports.', prompt: 'Parse daily raw operations sheets into summarized charts and tables.' }
  ];

  const filteredIdeas = ideas.filter(idea => {
    return activeFilter === 'all' || idea.category === activeFilter;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      {/* Category Pills (Centered, no search bar) */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveFilter('all')} 
            className={`btn interactive ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px' }}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('personal')} 
            className={`btn interactive ${activeFilter === 'personal' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px' }}
          >
            Personal Utility
          </button>
          <button 
            onClick={() => setActiveFilter('business')} 
            className={`btn interactive ${activeFilter === 'business' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px' }}
          >
            Business & Sales
          </button>
          <button 
            onClick={() => setActiveFilter('ai')} 
            className={`btn interactive ${activeFilter === 'ai' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px' }}
          >
            AI & Media
          </button>
        </div>
      </div>

      {/* Grid container */}
      <div style={{ flexGrow: 1, overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', minHeight: 0, paddingRight: '4px' }}>
        {filteredIdeas.map((idea) => {
          let catColor = 'var(--color-cyan)';
          if (idea.category === 'business') catColor = 'var(--color-indigo)';
          if (idea.category === 'ai') catColor = 'var(--color-magenta)';

          return (
            <div 
              key={idea.title}
              onClick={() => setSelectedIdea(idea)}
              className="glass-panel interactive"
              style={{ 
                padding: '12px 14px', 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `2.5px solid ${catColor}`,
                background: 'var(--color-surface)',
                transition: 'var(--transition-fast)'
              }}
            >
              <div>
                <strong style={{ fontSize: '0.85rem', color: '#ffffff', fontFamily: 'var(--font-display)', display: 'block', marginBottom: '4px' }}>
                  {idea.title}
                </strong>
                <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{idea.desc}</span>
              </div>
              <span style={{ 
                fontSize: '0.62rem', 
                color: catColor, 
                fontFamily: 'var(--font-mono)', 
                textTransform: 'uppercase', 
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={8} /> Click to view prompt
              </span>
            </div>
          );
        })}
      </div>

      {/* Modal Prompt Expansion Overlay */}
      {selectedIdea && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 6, 10, 0.85)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 200,
          padding: '20px'
        }}>
          <div className="glass-panel" style={{ 
            maxWidth: '500px', 
            width: '100%', 
            borderColor: 'var(--color-indigo)',
            background: 'var(--color-surface)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            animation: 'modalScale 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>{selectedIdea.title}</h4>
              <button 
                onClick={() => setSelectedIdea(null)} 
                className="interactive"
                style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 700 }}
              >
                ✕
              </button>
            </div>
            
            <div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>IDEATION PIPELINE PROMPT:</div>
              <div style={{ 
                background: '#090a10', 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid var(--color-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#a7f3d0',
                marginTop: '6px',
                textAlign: 'left'
              }}>
                {selectedIdea.prompt}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
              <button onClick={() => setSelectedIdea(null)} className="btn btn-secondary interactive" style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalScale {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
