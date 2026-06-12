import React, { useState } from 'react';
import { Briefcase, Video, Database, BrainCircuit, BarChart3 } from 'lucide-react';

export const TimelineMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blinkit' | 'byjus' | 'synergy'>('synergy');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Control Switcher tabs */}
      <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.03)', padding: '6px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
        <button
          onClick={() => setActiveTab('blinkit')}
          className={`btn interactive ${activeTab === 'blinkit' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flexGrow: 1, padding: '10px', fontSize: '0.85rem' }}
        >
          <Database size={16} /> Blinkit (Data & Ops)
        </button>
        <button
          onClick={() => setActiveTab('synergy')}
          className={`btn interactive ${activeTab === 'synergy' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flexGrow: 1, padding: '10px', fontSize: '0.85rem', margin: '0 6px' }}
        >
          <BrainCircuit size={16} /> The Synergy Advantage
        </button>
        <button
          onClick={() => setActiveTab('byjus')}
          className={`btn interactive ${activeTab === 'byjus' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flexGrow: 1, padding: '10px', fontSize: '0.85rem' }}
        >
          <Video size={16} /> Byju's (Learning Design)
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1, minHeight: 0, display: 'flex' }}>
        {activeTab === 'blinkit' && (
          <div className="glass-panel" style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            borderColor: 'var(--color-cyan)',
            animation: 'fadeIn 0.4s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>Senior Manager</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>Blinkit (Currently Active)</div>
              </div>
              <div style={{ padding: '8px', background: 'rgba(6,182,212,0.1)', borderRadius: '8px', color: 'var(--color-cyan)' }}>
                <Briefcase size={20} />
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: '1.5' }}>
              Deeply involved in day-to-day business, analytics, execution planning, and large-scale operations. This builds real-world understanding of business processes and manual bottlenecks.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-cyan)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  <Database size={14} /> Data & Systems
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Cleaning reports, building tracking sheets, and orchestrating flows.</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-cyan)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  <BarChart3 size={14} /> Business & Ops
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Solving practical coordination problems and building reporting trackers.</div>
              </div>
            </div>

            <div style={{ borderLeft: '2px dashed var(--color-cyan)', paddingLeft: '12px', marginTop: 'auto', fontSize: '0.8rem', color: '#9ca3af' }}>
              💡 <strong>Key Advantage:</strong> I understand what tools <em>actually</em> solve business problems because I manage them daily.
            </div>
          </div>
        )}

        {activeTab === 'byjus' && (
          <div className="glass-panel" style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            borderColor: 'var(--color-magenta)',
            animation: 'fadeIn 0.4s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>Vertical Content Head</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-magenta)', fontFamily: 'var(--font-mono)' }}>Byju's (~6 Years)</div>
              </div>
              <div style={{ padding: '8px', background: 'rgba(244,63,94,0.1)', borderRadius: '8px', color: 'var(--color-magenta)' }}>
                <Video size={20} />
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: '1.5' }}>
              Handled a complete creative vertical in the content department, working deeply on curriculum translation into interactive animations, scripts, and video assets.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-magenta)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  <Video size={14} /> Storytelling
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Script writing, hook design, storylines, and maintaining audience retention.</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-magenta)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  <BrainCircuit size={14} /> Learning Design
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Breaking down highly complex, scary math or science concepts into simple pieces.</div>
              </div>
            </div>

            <div style={{ borderLeft: '2px dashed var(--color-magenta)', paddingLeft: '12px', marginTop: 'auto', fontSize: '0.8rem', color: '#9ca3af' }}>
              💡 <strong>Key Advantage:</strong> I know how to script videos, build retention hooks, and explain coding models to average people.
            </div>
          </div>
        )}

        {activeTab === 'synergy' && (
          <div className="glass-panel" style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            borderColor: 'var(--color-indigo)',
            background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(99,102,241,0.05) 100%)',
            animation: 'fadeIn 0.4s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>Why This Niche Fuses Both Perfectly</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-indigo)', fontFamily: 'var(--font-mono)' }}>Execution (Ops) + Storytelling (Content)</div>
              </div>
              <div style={{ padding: '8px', background: 'rgba(99,102,241,0.1)', borderRadius: '8px', color: 'var(--color-indigo)' }}>
                <BrainCircuit size={20} className="animate-float" />
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: '1.6' }}>
              This page is not about theorizing AI algorithms or code compilers. It's about taking <strong>everyday problems (Ops/Business)</strong>, converting them into <strong>tiny useful products (Execution)</strong>, and explaining the building process in an <strong>interesting, visual way (Storytelling)</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#9ca3af' }}>
                <span style={{ color: 'var(--color-cyan)' }}>✔</span> <span>I know how to build hooks to keep viewers scrolling.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#9ca3af' }}>
                <span style={{ color: 'var(--color-cyan)' }}>✔</span> <span>I know how to explain complex systems simply.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#9ca3af' }}>
                <span style={{ color: 'var(--color-cyan)' }}>✔</span> <span>I run a side-business and operations, giving me infinite real problems to solve.</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', padding: '10px 14px', borderRadius: '10px', fontSize: '0.8rem', color: 'white', marginTop: 'auto' }}>
              <BrainCircuit size={16} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
              <span><strong>The Fusion Advantage:</strong> Creating AI tools + Packaging them for viral short-form delivery.</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
