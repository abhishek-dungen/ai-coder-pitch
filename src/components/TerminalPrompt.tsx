import React, { useState } from 'react';

interface ToolDetail {
  name: string;
  shortName: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
  image: string;
  borderColor: string;
  bgGradient: string;
  glowColor: string;
}

export const TerminalPrompt: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
  
  const tools: ToolDetail[] = [
    {
      name: 'Cursor Composer Pro',
      shortName: 'Cursor Pro',
      badge: 'Active Paid Pro Subscriber',
      badgeColor: 'var(--color-cyan)',
      description: 'Used daily as my primary IDE. I have an active paid subscription and use its multi-file composer capabilities for complex features and automated refactoring workflows.',
      features: [
        'Workspace codebase semantic index parsing',
        'Composer orchestration to refactor multi-file routes',
        'Instant terminal debugger loops and code generation'
      ],
      image: 'cursor_composer.webp',
      borderColor: 'var(--color-cyan)',
      bgGradient: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(6,182,212,0.03) 100%)',
      glowColor: 'var(--color-cyan-glow)'
    },
    {
      name: 'Claude Code Agent',
      shortName: 'Claude Code',
      badge: 'Active Developer Agent',
      badgeColor: 'var(--color-magenta)',
      description: 'Connected directly to terminal workflows. Executing complex edits, automated script checking, and CLI-driven agentic workspace refactoring loops.',
      features: [
        'Agentic file reading, modification, and checks',
        'Direct terminal code execution and lint error fixes',
        'Refactoring payment handler webhooks in place'
      ],
      image: 'claude_cowork.webp',
      borderColor: 'var(--color-magenta)',
      bgGradient: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(244,63,94,0.03) 100%)',
      glowColor: 'var(--color-magenta-glow)'
    },
    {
      name: 'OpenClaw Agent',
      shortName: 'OpenClaw',
      badge: 'Early Tester & Deployer',
      badgeColor: 'var(--color-indigo)',
      description: 'Using open-source GUI coding agents locally. Managing local agent loops to inspect HTML elements and execute autonomous component updates.',
      features: [
        'Local agent loops connecting to browser interfaces',
        'Visual layout checkups and autonomous bug fixing',
        'Open-source prompt templates for custom app builds'
      ],
      image: 'openclaw.webp',
      borderColor: 'var(--color-indigo)',
      bgGradient: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(99,102,241,0.03) 100%)',
      glowColor: 'var(--color-indigo-glow)'
    },
    {
      name: 'Google Antigravity Early-Access',
      shortName: 'Antigravity',
      badge: 'Partner Early Testing',
      badgeColor: 'var(--color-emerald)',
      description: 'Early-access developer testing advanced AI coding capabilities. Utilizing large context window loops for extensive system codebase updates.',
      features: [
        'Early testing developer loop integrations',
        'Multi-modal prompt scans and architecture mappings',
        'Large context window codebase transformation pipelines'
      ],
      image: 'images_0.jpeg',
      borderColor: 'var(--color-emerald)',
      bgGradient: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(16,185,129,0.03) 100%)',
      glowColor: 'var(--color-emerald-glow)'
    },
    {
      name: 'Replit Agent Core',
      shortName: 'Replit Agent',
      badge: 'Paid Core Subscriber',
      badgeColor: '#ff007f',
      description: 'Active paid subscriber of Replit Core. Used for cloud sandbox deployments, database provisioning, and instant interactive dashboard prototyping.',
      features: [
        'Instant cloud workspace spin-ups and sharing links',
        'Rapid database initialization with Postgres',
        'Autonomous API routing setup and testing dashboards'
      ],
      image: 'replit_logo.png',
      borderColor: '#ff007f',
      bgGradient: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(255,0,127,0.03) 100%)',
      glowColor: 'rgba(255,0,127,0.2)'
    },
    {
      name: 'VS Code Extension Stack',
      shortName: 'VS Code Stack',
      badge: 'Integrated Developer',
      badgeColor: 'var(--color-cyan)',
      description: 'Fully customized local developer environment. Pairing IDE profiles with inline autocompletions, lint checks, and database explorers for full control.',
      features: [
        'Workspace index sync configurations',
        'Inline AI copilot prompts and autocompletion stack',
        'Integrated terminal tooling and themes synchronization'
      ],
      image: 'images_1.jpeg',
      borderColor: 'var(--color-cyan)',
      bgGradient: 'linear-gradient(135deg, rgba(13,17,28,0.75) 0%, rgba(6,182,212,0.03) 100%)',
      glowColor: 'var(--color-cyan-glow)'
    }
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  const tool = tools[activeTab];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center', width: '100%', minHeight: 0 }}>
      
      {/* 2-Column Grid Selector for the 6 Advanced Builders */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {tools.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`btn interactive ${activeTab === idx ? '' : 'btn-secondary'}`}
            style={{
              padding: '10px 12px',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              gap: '6px',
              borderRadius: '12px',
              border: activeTab === idx ? `1px solid ${t.borderColor}` : '1px solid var(--color-border)',
              background: activeTab === idx ? t.bgGradient : 'rgba(255,255,255,0.02)',
              color: activeTab === idx ? '#ffffff' : '#9ca3af',
              boxShadow: activeTab === idx ? `0 4px 15px ${t.glowColor}` : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            {t.shortName}
          </button>
        ))}
      </div>

      {/* Proof Dashboard Glass Panel */}
      <div 
        className="glass-panel active-tool-dashboard"
        style={{ 
          borderColor: tool.borderColor,
          background: tool.bgGradient,
          padding: '24px',
          borderRadius: '20px',
          boxShadow: `0 8px 32px ${tool.glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`,
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          animation: 'fadeIn 0.3s ease'
        }}
      >
        {/* Header Title & Status Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '10px' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
              {tool.name}
            </h4>
          </div>
          <div style={{ 
            border: `1px solid ${tool.borderColor}`, 
            background: 'rgba(255,255,255,0.03)', 
            color: tool.borderColor, 
            padding: '4px 10px', 
            borderRadius: '20px', 
            fontSize: '0.7rem', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.5px',
            fontFamily: 'var(--font-mono)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: tool.borderColor, animation: 'ping-status 1.5s infinite' }}></span>
            {tool.badge}
          </div>
        </div>

        {/* Content details and Screenshot Stack split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '20px', flex: 1, minHeight: 0, alignItems: 'center' }}>
          
          {/* Left: Description and key capabilities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', lineHeight: 1.5 }}>
              {tool.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700, letterSpacing: '0.5px' }}>CORE USAGE METRICS:</div>
              {tool.features.map((feature, fIdx) => (
                <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#e5e7eb' }}>
                  <span style={{ color: tool.borderColor }}>✔</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Proof Screenshot */}
          <div 
            className="tool-proof-img-container"
            style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              aspectRatio: '16/10',
              position: 'relative',
              width: '100%',
              height: '100%',
              maxHeight: '170px'
            }}
          >
            <img 
              src={`${base}${tool.image}`} 
              alt={tool.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', 
              padding: '6px 10px', 
              fontSize: '0.58rem', 
              color: '#9ca3af', 
              textAlign: 'center',
              fontWeight: 500
            }}>
              Hover to magnify active session proof
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ping-status {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }
        .tool-proof-img-container:hover img {
          transform: scale(1.08);
        }
        .tool-proof-img-container {
          transition: all 0.3s ease;
        }
        .tool-proof-img-container:hover {
          border-color: rgba(255,255,255,0.2) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.8) !important;
        }
      `}</style>
    </div>
  );
};

export default TerminalPrompt;
