import React from 'react';
import { BrainCircuit, Play, Lightbulb, Sparkles, BookOpen } from 'lucide-react';

export const TimelineMe: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', justifyContent: 'center', width: '100%', minHeight: 0 }}>
      
      {/* Title Header placed directly above the glass-panel block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 className="title-large" style={{ fontSize: '2.5rem' }}>
          My Experience in <span className="title-accent">Content creation</span>
        </h2>
        <p className="slide-description" style={{ fontSize: '1.1rem', color: '#9ca3af' }}>
          A creative background focused on learning design, scriptwriting, and high-retention video packaging.
        </p>
      </div>
      
      {/* 2-Column Balanced Layout Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '24px', alignItems: 'stretch', flex: 1, minHeight: 0 }}>
        
        {/* Left Column: Single Unified Experience & Competency Panel */}
        <div 
          className="glass-panel main-role-card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            borderColor: 'rgba(244, 63, 94, 0.4)',
            background: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(244,63,94,0.03) 100%)',
            animation: 'fadeIn 0.4s ease',
            padding: '24px',
            justifyContent: 'flex-start',
            boxShadow: '0 8px 32px rgba(244, 63, 94, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Role Header and Description */}
          <div>
            <div style={{ 
              border: '1px solid rgba(244,63,94,0.3)', 
              background: 'rgba(244,63,94,0.06)', 
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
            
            <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontFamily: 'var(--font-display)', marginTop: '12px', fontWeight: 700 }}>
              Vertical Content Head
            </h3>
            
            <div style={{ fontSize: '0.88rem', color: 'var(--color-magenta)', fontFamily: 'var(--font-mono)', marginTop: '3px', fontWeight: 500 }}>
              Byju's (~6 Years)
            </div>
            
            <p style={{ fontSize: '0.84rem', color: '#d1d5db', lineHeight: '1.5', marginTop: '10px' }}>
              Handled a complete creative vertical in the content department, working deeply on curriculum translation into interactive animations, scripts, and video assets.
            </p>
          </div>

          {/* Competency Row: 2x2 Grid Layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gridTemplateRows: 'auto auto',
            gap: '16px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            paddingTop: '16px',
            marginTop: '8px'
          }}>
            {/* Storytelling details */}
            <div className="competency-item storytelling-item" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-indigo)', fontSize: '0.85rem', fontWeight: 700 }}>
                <Play size={12} fill="currentColor" style={{ color: 'var(--color-indigo)' }} /> Storytelling
              </div>
              <div style={{ fontSize: '0.76rem', color: '#9ca3af', lineHeight: 1.45 }}>
                Script writing, hook design, storylines, and maintaining audience retention.
              </div>
            </div>

            {/* Learning Design details */}
            <div className="competency-item learning-design-item" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-cyan)', fontSize: '0.85rem', fontWeight: 700 }}>
                <BrainCircuit size={12} style={{ color: 'var(--color-cyan)' }} /> Learning Design
              </div>
              <div style={{ fontSize: '0.76rem', color: '#9ca3af', lineHeight: 1.45 }}>
                Breaking down highly complex, scary concepts into simple pieces.
              </div>
            </div>

            {/* Visual Packaging details */}
            <div className="competency-item visual-packaging-item" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontSize: '0.85rem', fontWeight: 700 }}>
                <Sparkles size={12} style={{ color: '#f59e0b' }} /> Visual Packaging
              </div>
              <div style={{ fontSize: '0.76rem', color: '#9ca3af', lineHeight: 1.45 }}>
                Curating high-retention animations and premium styling to hook students.
              </div>
            </div>

            {/* Curriculum Mapping details */}
            <div className="competency-item curriculum-mapping-item" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-emerald)', fontSize: '0.85rem', fontWeight: 700 }}>
                <BookOpen size={12} style={{ color: 'var(--color-emerald)' }} /> Curriculum Mapping
              </div>
              <div style={{ fontSize: '0.76rem', color: '#9ca3af', lineHeight: 1.45 }}>
                Aligning creative storytelling with academic rigor to ensure high educational outcomes.
              </div>
            </div>
          </div>

          {/* Key Advantage Highlight Banner */}
          <div style={{
            marginTop: 'auto',
            background: 'linear-gradient(90deg, rgba(244,63,94,0.08) 0%, transparent 100%)',
            borderLeft: '3px solid var(--color-magenta)',
            padding: '10px 12px',
            borderRadius: '0 8px 8px 0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start'
          }}>
            <Lightbulb size={16} style={{ color: 'var(--color-magenta)', flexShrink: 0, marginTop: '1px' }} />
            <div>
              <div style={{ fontSize: '0.72rem', color: '#ffffff', fontWeight: 700, marginBottom: '1px', letterSpacing: '0.5px' }}>KEY ADVANTAGE</div>
              <div style={{ fontSize: '0.75rem', color: '#d1d5db', lineHeight: 1.4 }}>
                I know how to script videos, build retention hooks, and explain concepts to students.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Media Stack (YouTube Video & Working Photo) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', minHeight: 0 }}>
          
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
              minHeight: 0,
              transition: 'all 0.3s ease'
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
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'transform 0.4s ease' }}
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
            className="profile-image-container"
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
              minHeight: 0,
              transition: 'all 0.3s ease'
            }}
          >
            <img 
              src={`${base}byjus_profile.jpg`} 
              alt="Working in BYJUS" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
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
        .main-role-card:hover {
          border-color: rgba(244, 63, 94, 0.7) !important;
          box-shadow: 0 12px 40px rgba(244, 63, 94, 0.12), inset 0 1px 0 rgba(255,255,255,0.1) !important;
        }
        .video-thumbnail-link:hover img {
          transform: scale(1.05);
          opacity: 0.9 !important;
        }
        .video-thumbnail-link:hover {
          border-color: rgba(244, 63, 94, 0.5) !important;
          box-shadow: 0 12px 30px rgba(244, 63, 94, 0.15) !important;
        }
        .video-thumbnail-link:hover .youtube-play-btn {
          transform: scale(1.1);
          background: #ff0000 !important;
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.8) !important;
        }
        .video-thumbnail-link .youtube-play-btn {
          transition: all 0.2s ease;
        }
        .profile-image-container:hover img {
          transform: scale(1.05);
        }
        .profile-image-container:hover {
          border-color: rgba(255, 255, 255, 0.18) !important;
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default TimelineMe;
