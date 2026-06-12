import React from 'react';
import { Video, BrainCircuit, Play } from 'lucide-react';

export const TimelineMe: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', justifyContent: 'center', width: '100%' }}>
      
      {/* Dedicated BYJU'S Experience & Case Study Highlight Panel */}
      <div className="glass-panel" style={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px', 
        borderColor: 'var(--color-magenta)',
        background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(244,63,94,0.05) 100%)',
        animation: 'fadeIn 0.4s ease',
        minHeight: '380px',
        justifyContent: 'space-between',
        padding: '24px'
      }}>
        {/* Header Title Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '10px' }}>
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

        {/* Reorganized split grid: Left columns of text / Right columns of media */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '20px', flexGrow: 1, minHeight: 0, marginTop: '8px' }}>
          
          {/* Left Text details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '0.88rem', color: '#e5e7eb', lineHeight: '1.5' }}>
              Handled a complete creative vertical in the content department, working deeply on curriculum translation into interactive animations, scripts, and video assets.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-magenta)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  <Play size={14} fill="currentColor" style={{ color: 'var(--color-magenta)' }} /> Storytelling
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.35 }}>
                  Script writing, hook design, storylines, and maintaining audience retention.
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-magenta)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                  <BrainCircuit size={14} /> Learning Design
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.35 }}>
                  Breaking down highly complex, scary concepts into simple pieces.
                </div>
              </div>
            </div>

            <div style={{ borderLeft: '2px dashed var(--color-magenta)', paddingLeft: '12px', marginTop: '6px', fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.35 }}>
              💡 <strong>Key Advantage:</strong> I know how to script videos, build retention hooks, and explain concepts to students.
            </div>
          </div>

          {/* Right Media panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            
            {/* Byju's video screenshot with YouTube link */}
            <a 
              href="https://www.youtube.com/watch?v=wMiujMjoRmk" 
              target="_blank" 
              rel="noreferrer" 
              className="interactive video-thumbnail-link"
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                position: 'relative', 
                aspectRatio: '16/10',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                position: 'absolute',
                width: '32px',
                height: '32px',
                background: 'rgba(244, 63, 94, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(244, 63, 94, 0.6)'
              }}
              className="youtube-play-btn"
              >
                <Play size={14} fill="white" style={{ marginLeft: '1px' }} />
              </div>
              <img 
                src={`${base}byjus_video_screenshot.png`} 
                alt="Byjus Video Screenshot" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                background: 'rgba(0,0,0,0.7)', 
                padding: '3px 6px', 
                fontSize: '0.58rem', 
                color: '#fff', 
                textAlign: 'center',
                fontWeight: 600,
                zIndex: 1
              }}>
                Watch Byju's Video I Created ↗
              </div>
            </a>

            {/* Abhishek Profile at BYJU'S */}
            <div 
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                position: 'relative', 
                flexGrow: 1,
                minHeight: '95px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
                background: 'rgba(0,0,0,0.7)', 
                padding: '3px 6px', 
                fontSize: '0.58rem', 
                color: '#fff', 
                textAlign: 'center',
                fontWeight: 600
              }}>
                Abhishek at BYJU'S
              </div>
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
      `}</style>
    </div>
  );
};

export default TimelineMe;
