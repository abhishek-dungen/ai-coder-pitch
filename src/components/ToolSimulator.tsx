import React, { useState, useEffect, useRef } from 'react';
import { 
  DollarSign, Clock, FileText, BarChart3, Users, 
  RefreshCw, Laptop, Grid
} from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
}

export const ToolSimulator: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
  const videoMapping: Record<string, string> = {
    expense: 'MOney.mp4',
    excel: 'Automations.mp4',
    log: 'Habit.mp4',
    payments: 'instamojo.mp4',
    notes: 'note.mp4',
    zoom: 'zoom.mp4',
  };

  const tools: Tool[] = [
    { id: 'excel', name: 'Excel Automated Reports', icon: <RefreshCw size={16} />, tagline: 'CSV & data-cleaning system.' },
    { id: 'portfolio', name: 'AI Portfolio', icon: <Laptop size={16} />, tagline: 'Personal landing layouts.' },
    { id: 'dashboard', name: 'AI-Built Dashboards', icon: <Grid size={16} />, tagline: 'Custom widget orchestrator.' },
    { id: 'expense', name: 'Expense Manager', icon: <DollarSign size={16} />, tagline: 'Personalized financial tracking.' },
    { id: 'log', name: 'Habit Tracker', icon: <Clock size={16} />, tagline: 'Activity and routine tracker.' },
    { id: 'notes', name: 'Note-Taking App', icon: <FileText size={16} />, tagline: 'Customized notes & tags.' },
    { id: 'payments', name: 'Integrated Payment Dashboard', icon: <BarChart3 size={16} />, tagline: 'Multi-gateway collections.' },
    { id: 'zoom', name: 'Webinar Analytics', icon: <Users size={16} />, tagline: 'Zoom retention & Q&A tracker.' }
  ];

  const [activeToolId, setActiveToolId] = useState<string>('excel');
  const videoFile = videoMapping[activeToolId];

  // Single video ref for dynamic unmuted autoplay handling
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false; // Default to unmuted
      videoRef.current.play().catch(err => {
        console.log("Unmuted autoplay blocked, falling back to muted play: ", err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(err2 => {
            console.log("Muted autoplay also failed: ", err2);
          });
        }
      });
    }
  }, [activeToolId]);

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
            onClick={() => {
              setActiveToolId(t.id);
              if (t.id === 'portfolio') {
                window.open('https://glittery-madeleine-73be6e.netlify.app/', '_blank');
              } else if (t.id === 'dashboard') {
                window.open('https://chimerical-palmier-b581bc.netlify.app/', '_blank');
              }
            }}
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

      {/* Simulator / Video View Pane */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, flexGrow: 1, height: '100%', justifyContent: 'center' }}>
        
        {/* Single Video Tag - Loaded dynamically and adjusted to fit screen height */}
        {videoFile && (
          <video
            key={activeToolId}
            ref={videoRef}
            src={`${base}Images/${videoFile}`}
            preload="auto"
            loop
            playsInline
            controls
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100vh - 200px)',
              borderRadius: '16px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 12px 45px rgba(6, 182, 212, 0.35)',
              background: '#000000',
              objectFit: 'contain',
            }}
          />
        )}

        {/* Live Netlify Iframes - Rendered dynamically for portfolio & dashboard */}
        {!videoFile && (
          <iframe
            key={activeToolId}
            src={activeToolId === 'portfolio' ? "https://glittery-madeleine-73be6e.netlify.app/" : "https://chimerical-palmier-b581bc.netlify.app/"}
            title={activeToolId === 'portfolio' ? "AI Portfolio" : "AI Dashboards"}
            style={{
              width: '100%',
              height: 'calc(100vh - 200px)',
              borderRadius: '16px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 12px 45px rgba(6, 182, 212, 0.35)',
              background: '#0c0e14'
            }}
          />
        )}

      </div>
    </div>
  );
};
