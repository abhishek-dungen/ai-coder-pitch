import React from 'react';
import { BrainCircuit, Play } from 'lucide-react';

export const TimelineMe: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%', justifyContent: 'center', width: '100%' }}>
      
      {/* Title Header placed directly above the glass-panel block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 className="title-large" style={{ fontSize: '2.5rem' }}>
          Why <span className="title-accent">Me?</span>
        </h2>
        <p className="slide-description" style={{ fontSize: '1.1rem', color: '#9ca3af' }}>
          A creative background focused on learning design, scriptwriting, and high-retention video packaging.
        </p>
      </div>
      
      {/* 3-Column Premium Dashboard Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.9fr 0.9fr', gap: '20px', alignItems: 'stretch' }}>
        
        {/* Column 1: Byju's Role Card */}
        <div className="glass-panel" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          borderColor: 'var(--color-magenta)',
          background: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(244,63,94,0.03) 100%)',
          animation: 'fadeIn 0.4s ease',
          padding: '24px',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ 
              border: '1px solid rgba(244,63,94,0.3)', 
              background: 'rgba(244,63,94,0.05)', 
              color: 'var(--color-magenta)', 
              padding: '4px 10px', 
              borderRadius: '20px', 
              fontSize: '0.68rem', 
              fontWeight: 600, 
              width: 'fit-content', 
              textTransform: 'uppercase', 
              letterSpacing: '1px', 
              fontFamily: 'var(--font-mono)' 
            }}>
              Role & Responsibilities
            </div>
            
            <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontFamily: 'var(--font-display)', marginTop: '14px', fontWeight: 700 }}>
              Vertical Content Head
            </h3>
            
            <div style={{ fontSize: '0.88rem', color: 'var(--color-magenta)', fontFamily: 'var(--font-mono)', marginTop: '4px', fontWeight: 500 }}>
              Byju's (~6 Years)
            </div>
            
            <p style={{ fontSize: '0.84rem', color: '#d1d5db', lineHeight: '1.5', marginTop: '12px' }}>
              Handled a complete creative vertical in the content department, working deeply on curriculum translation into interactive animations, scripts, and video assets.
            </p>
          </div>

          <div style={{
            marginTop: '20px',
            background: 'linear-gradient(90deg, rgba(244,63,94,0.08) 0%, transparent 100%)',
            borderLeft: '3px solid var(--color-magenta)',
            padding: '12px 14px',
            borderRadius: '0 8px 8px 0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.1rem', marginTop: '-2px' }}>💡</span>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 700, marginBottom: '2px', letterSpacing: '0.5px' }}>KEY ADVANTAGE</div>
                <div style={{ fontSize: '0.76rem', color: '#d1d5db', lineHeight: 1.4 }}>
                  I know how to script videos, build retention hooks, and explain concepts to students.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Core Competencies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }}>
          
          {/* Storytelling Card */}
          <div className="glass-panel card-hover-effect" style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            padding: '20px', 
            background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(99,102,241,0.03) 100%)', 
            borderColor: 'rgba(99,102,241,0.15)',
            borderRadius: '16px', 
            transition: 'all 0.3s ease',
            minHeight: '135px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-indigo)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>
              <div style={{ padding: '6px', background: 'rgba(99,102,241,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={14} fill="currentColor" style={{ color: 'var(--color-indigo)' }} />
              </div>
              Storytelling
            </div>
            <div style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.45 }}>
              Script writing, hook design, storylines, and maintaining audience retention.
            </div>
          </div>

          {/* Learning Design Card */}
          <div className="glass-panel card-hover-effect" style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            padding: '20px', 
            background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(6,182,212,0.03) 100%)', 
            borderColor: 'rgba(6,182,212,0.15)',
            borderRadius: '16px', 
            transition: 'all 0.3s ease',
            minHeight: '135px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-cyan)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>
              <div style={{ padding: '6px', background: 'rgba(6,182,212,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BrainCircuit size={14} style={{ color: 'var(--color-cyan)' }} />
              </div>
              Learning Design
            </div>
            <div style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.45 }}>
              Breaking down highly complex, scary concepts into simple pieces.
            </div>
          </div>

        </div>

        {/* Column 3: Proofs - Media Gallery */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }}>
          
          {/* YouTube Video link */}
          <a 
            href="https://www.youtube.com/watch?v=wMiujMjoRmk" 
            target="_blank" 
            rel="noreferrer" 
            className="interactive video-thumbnail-link"
            style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              position: 'relative', 
              flex: 1,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              minHeight: '135px'
            }}
          >
            <div style={{
              position: 'absolute',
              width: '38px',
              height: '38px',
              background: 'rgba(244, 63, 94, 0.95)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              zIndex: 2,
              boxShadow: '0 0 15px rgba(244, 63, 94, 0.6)'
            }}
            className="youtube-play-btn"
            >
              <Play size={16} fill="white" style={{ marginLeft: '1px' }} />
            </div>
            <img 
              src={`${base}byjus_video_screenshot.png`} 
              alt="Byjus Video Screenshot" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 100%)', 
              padding: '6px 10px', 
              fontSize: '0.65rem', 
              color: '#fff', 
              textAlign: 'center',
              fontWeight: 600,
              zIndex: 1,
              borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
              Watch Byju's Video I Created ↗
            </div>
          </a>

          {/* Abhishek Profile at BYJU'S */}
          <div 
            style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              position: 'relative', 
              flex: 1,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '135px'
            }}
          >
            <img 
              src={`${base}byjus_profile.jpg`} 
              alt="Working in BYJUS" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 100%)', 
              padding: '6px 10px', 
              fontSize: '0.65rem', 
              color: '#fff', 
              textAlign: 'center',
              fontWeight: 600,
              borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
              Working in BYJUS
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .video-thumbnail-link:hover .youtube-play-btn {
          transform: scale(1.1);
          background: #ff0000 !important;
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.8) !important;
        }
        .video-thumbnail-link .youtube-play-btn {
          transition: all 0.2s ease;
        }
        .card-hover-effect:hover {
          border-color: rgba(255, 255, 255, 0.18) !important;
          background: rgba(255, 255, 255, 0.04) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default TimelineMe;
