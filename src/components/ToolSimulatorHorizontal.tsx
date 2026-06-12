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

export const ToolSimulatorHorizontal: React.FC = () => {
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
    { id: 'excel', name: 'Excel Automator', icon: <RefreshCw size={16} /> },
    { id: 'expense', name: 'Expense Manager', icon: <DollarSign size={16} /> },
    { id: 'log', name: 'Daily Log System', icon: <Clock size={16} /> },
    { id: 'notes', name: 'Note-Taking App', icon: <FileText size={16} /> },
    { id: 'payments', name: 'Payment Dashboard', icon: <BarChart3 size={16} /> },
    { id: 'zoom', name: 'Webinar Analytics', icon: <Users size={16} /> },
    { id: 'portfolio', name: 'AI Portfolio Website', icon: <Laptop size={16} /> },
    { id: 'dashboard', name: 'AI-Built Dashboards', icon: <Grid size={16} /> }
  ].map(t => ({ ...t, tagline: '' }));

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

  // States for the last two tools (simulators)
  // 7. Portfolio color state
  const [pfColor, setPfColor] = useState('cyan');

  // 8. AI-Built Dashboard widgets state
  const [activeWidgets, setActiveWidgets] = useState({
    clock: true,
    metrics: true,
    quickNote: false,
    chart: true
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '16px' }}>
      
      {/* Video / Simulator View Pane (Full vertical space) */}
      <div style={{ flexGrow: 1, minHeight: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
        
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
              maxHeight: 'calc(100vh - 220px)', // Increased space for video by reducing layout gaps/offsets
              borderRadius: '16px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 12px 45px rgba(6, 182, 212, 0.35)',
              background: '#000000',
              objectFit: 'contain',
            }}
          />
        )}

        {/* Interactive Simulators - Only shown for non-video tools */}
        {!videoFile && (
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, flexGrow: 1, width: '100%', height: '100%', padding: '0 20px' }}>
            
            {/* 7. AI Portfolio simulator */}
            {activeToolId === 'portfolio' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', height: '100%', flexGrow: 1 }}>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', alignItems: 'center' }}>
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
                  flexDirection: 'column',
                  minHeight: '200px'
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', height: '100%', flexGrow: 1 }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', flexGrow: 1, minHeight: 0, marginTop: '10px' }}>
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
        )}

      </div>

      {/* Navigation tabs at the bottom, placed horizontally */}
      <div style={{ 
        display: 'flex', 
        gap: '6px', 
        justifyContent: 'center', 
        padding: '12px 0', 
        borderTop: '1px solid var(--color-border)', 
        flexWrap: 'nowrap',
        width: '100%',
        overflowX: 'auto'
      }}>
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveToolId(t.id)}
            className="interactive"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              border: activeToolId === t.id ? '1px solid var(--color-indigo)' : '1px solid transparent',
              background: activeToolId === t.id ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.02)',
              color: activeToolId === t.id ? '#ffffff' : '#9ca3af',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '0.75rem',
              transition: 'var(--transition-fast)',
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ color: activeToolId === t.id ? 'var(--color-cyan)' : '#4b5563', display: 'flex', alignItems: 'center' }}>
              {t.icon}
            </span>
            {t.name}
          </button>
        ))}
      </div>

    </div>
  );
};
