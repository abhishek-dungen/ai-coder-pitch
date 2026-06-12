import React, { useState } from 'react';

interface CollageTool {
  name: string;
  image: string;
  color: string;
  glow: string;
}

export const TerminalPrompt: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const tools: CollageTool[] = [
    { 
      name: 'Codex', 
      image: 'codex.webp', 
      color: 'var(--color-cyan)', 
      glow: 'var(--color-cyan-glow)' 
    },
    { 
      name: 'Claude Code', 
      image: 'claude_code.jpeg', 
      color: 'var(--color-magenta)', 
      glow: 'var(--color-magenta-glow)' 
    },
    { 
      name: 'Replit', 
      image: 'replit_collage.jpg', 
      color: '#ff007f', 
      glow: 'rgba(255,0,127,0.3)' 
    },
    { 
      name: 'Google Antigravity', 
      image: 'antigravity.webp', 
      color: 'var(--color-emerald)', 
      glow: 'var(--color-emerald-glow)' 
    },
    { 
      name: 'Claude cowork', 
      image: 'claude_cowork.webp', 
      color: '#ff7a00', 
      glow: 'rgba(255,122,0,0.3)' 
    },
    { 
      name: 'openclaw', 
      image: 'openclaw.webp', 
      color: 'var(--color-indigo)', 
      glow: 'var(--color-indigo-glow)' 
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', width: '100%', minHeight: 0 }}>
      {/* 3x2 Collage Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '14px', 
        height: '100%', 
        width: '100%', 
        minHeight: 0,
        maxHeight: '430px'
      }}>
        {tools.map((t, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: isHovered ? `1px solid ${t.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(13,17,28,0.7)',
                boxShadow: isHovered 
                  ? `0 12px 32px ${t.glow}, inset 0 1px 0 rgba(255,255,255,0.05)` 
                  : '0 4px 16px rgba(0,0,0,0.4)',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image Container */}
              <div style={{ 
                flex: 1, 
                overflow: 'hidden', 
                position: 'relative', 
                background: 'transparent',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <img 
                  src={`${base}${t.image}`} 
                  alt={t.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.4s ease',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }} 
                />
              </div>

              {/* Title / Label Banner */}
              <div style={{ 
                padding: '8px 12px', 
                background: 'linear-gradient(to top, rgba(13,17,28,0.95) 0%, rgba(13,17,28,0.75) 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  background: t.color,
                  boxShadow: `0 0 6px ${t.color}`
                }}></span>
                <span style={{ 
                  fontSize: '0.78rem', 
                  color: '#ffffff', 
                  fontWeight: 700, 
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.3px'
                }}>
                  {t.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TerminalPrompt;
