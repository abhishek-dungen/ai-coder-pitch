import React, { useState, useRef } from 'react';
import { ArrowLeftRight, Zap, ShieldAlert } from 'lucide-react';

export const NicheSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      {/* Title description */}
      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '6px', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={18} style={{ color: 'var(--color-cyan)' }} />
          Niche: "Building everyday AI tools I wish existed"
        </h3>
        <p style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
          Drag the slider left and right to compare traditional development against modern AI-assisted building.
        </p>
      </div>

      {/* Comparison Split Screen Container */}
      <div 
        ref={containerRef}
        style={{ 
          flexGrow: 1, 
          minHeight: '260px', 
          position: 'relative', 
          borderRadius: '16px', 
          border: '1px solid var(--color-border)', 
          overflow: 'hidden',
          background: '#090a0f'
        }}
      >
        {/* Left Side: Traditional Development */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #181115 0%, #0c080b 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '24px',
          paddingRight: `${100 - sliderPosition}%`,
          transition: 'padding-right 0.05s linear',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <div style={{ color: 'var(--color-magenta)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <ShieldAlert size={20} />
            <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Traditional Dev (The Old Way)</h4>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: '#e5e7eb', fontSize: '0.82rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--color-magenta)' }}>✕</span> Hire expensive agencies or developers
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--color-magenta)' }}>✕</span> 3-6 months to build simple MVP databases
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--color-magenta)' }}>✕</span> Adjust yourself to rigid Play Store SaaS apps
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--color-magenta)' }}>✕</span> High barrier to entry: syntax errors, compilers
            </li>
          </ul>
        </div>

        {/* Right Side: AI Assisted Development (Clipping overlay) */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #091a22 0%, #050d12 100%)',
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          transition: 'clip-path 0.05s linear',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          textAlign: 'right',
          padding: '24px',
          paddingLeft: `${sliderPosition}%`,
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <div style={{ color: 'var(--color-cyan)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>AI assisted Building (Our Niche)</h4>
            <Zap size={20} />
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: '#e5e7eb', fontSize: '0.82rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
              Zero coding background needed to start <span style={{ color: 'var(--color-cyan)' }}>✔</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
              Build customized tools in hours, not months <span style={{ color: 'var(--color-cyan)' }}>✔</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
              Create personalized trackers tailored to your workflow <span style={{ color: 'var(--color-cyan)' }}>✔</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
              Solves immediate business & daily life problems <span style={{ color: 'var(--color-cyan)' }}>✔</span>
            </li>
          </ul>
        </div>

        {/* Drag line overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPosition}%`,
          width: '2px',
          background: 'linear-gradient(to bottom, var(--color-cyan), var(--color-indigo), var(--color-magenta))',
          pointerEvents: 'none',
          boxShadow: '0 0 10px var(--color-cyan)',
          zIndex: 10
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'var(--color-surface)',
            border: '2px solid var(--color-indigo)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-cyan)',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
          }}>
            <ArrowLeftRight size={14} />
          </div>
        </div>

        {/* Input slider control layered on top */}
        <input 
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="interactive"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'ew-resize',
            zIndex: 20
          }}
        />
      </div>

      {/* Quote summary */}
      <div className="glass-panel" style={{ padding: '12px 18px', background: 'rgba(255,255,255,0.02)', fontSize: '0.8rem', color: '#9ca3af', borderLeft: '3px solid var(--color-indigo)' }}>
        "I am not trying to teach AI in a boring theoretical way. I show how average people can solve real problems by building customized software alongside AI assistants."
      </div>
    </div>
  );
};
