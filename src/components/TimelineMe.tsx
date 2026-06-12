import React from 'react';
import { Video, BrainCircuit, Play } from 'lucide-react';

export const TimelineMe: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', justifyContent: 'center' }}>
      
      {/* Dedicated Experience Highlight Panel (Byju's Content Head) */}
      <div className="glass-panel" style={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px', 
        borderColor: 'var(--color-magenta)',
        background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(244,63,94,0.05) 100%)',
        animation: 'fadeIn 0.4s ease',
        minHeight: '340px',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
              Vertical Content Head
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-magenta)', fontFamily: 'var(--font-mono)' }}>
              Byju's (~6 Years)
            </div>
          </div>
          <div style={{ padding: '8px', background: 'rgba(244,63,94,0.1)', borderRadius: '8px', color: 'var(--color-magenta)', display: 'flex', alignItems: 'center' }}>
            <Video size={20} />
          </div>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: '1.5' }}>
          Handled a complete creative vertical in the content department, working deeply on curriculum translation into interactive animations, scripts, and video assets.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '4px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-magenta)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
              <Play size={14} fill="currentColor" /> Storytelling
            </div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.3 }}>
              Script writing, hook design, storylines, and maintaining audience retention.
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-magenta)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
              <BrainCircuit size={14} /> Learning Design
            </div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.3 }}>
              Breaking down highly complex, scary math or science concepts into simple pieces.
            </div>
          </div>
        </div>

        <div style={{ borderLeft: '2px dashed var(--color-magenta)', paddingLeft: '12px', marginTop: '8px', fontSize: '0.8rem', color: '#9ca3af' }}>
          💡 <strong>Key Advantage:</strong> I know how to script videos, build retention hooks, and explain coding models to average people.
        </div>
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

export default TimelineMe;
