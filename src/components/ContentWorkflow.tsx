import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Lightbulb, FileEdit, Cpu, Hammer, ShieldCheck, Award } from 'lucide-react';

interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  title: string;
  details: string;
  codeSnippet?: string;
}

export const ContentWorkflow: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      label: 'Problem',
      icon: <HelpCircle size={14} />,
      color: '#10b981', // Emerald
      title: 'Identify Everyday Pain Points',
      details: 'We start with a real-life frustration. For example: "I have to cross-reference Zoom attendee drop-off lists with webinar chat questions manually every week, and it takes 3 hours."',
    },
    {
      id: 2,
      label: 'Idea',
      icon: <Lightbulb size={14} />,
      color: '#f59e0b', // Gold/Yellow
      title: 'Tiny MVP Concept Design',
      details: 'Instead of complex systems, design a simple, single-page client dashboard that processes files locally. It should just show a retention graph and list questions.',
    },
    {
      id: 3,
      label: 'Prompt',
      icon: <FileEdit size={14} />,
      color: '#06b6d4', // Cyan
      title: 'Craft the Perfect Instruction',
      details: 'Translate the concept into a structured prompt detailing inputs, outputs, UI style rules, and data structures for the LLM developer agent.',
      codeSnippet: `Prompt: Write a React typescript page that takes a Zoom CSV attendance report and parses it to show a line chart of retention % over time and highlights Q&A. Use dark styling.`
    },
    {
      id: 4,
      label: 'AI Workflow',
      icon: <Cpu size={14} />,
      color: '#6366f1', // Indigo
      title: 'AI Agent Generation',
      details: 'Leverage tools like Claude Code or Google Antigravity to parse folder structure, install charts dependencies, and build components autonomously.',
    },
    {
      id: 5,
      label: 'Building',
      icon: <Hammer size={14} />,
      color: '#ec4899', // Magenta
      title: 'Co-Pilot Debugging',
      details: 'Identify edge cases (like empty rows, malformed logs, or mobile sizing bugs) and execute quick iterative refactor commands with the agent.',
    },
    {
      id: 6,
      label: 'Product',
      icon: <ShieldCheck size={14} />,
      color: '#8b5cf6', // Violet/Purple
      title: 'Finished Web Tool',
      details: 'The compiled, fully-responsive dashboard works exactly as requested. It is fast, clean, and runs directly in the browser.',
    },
    {
      id: 7,
      label: 'Use Case',
      icon: <HelpCircle size={14} />,
      color: '#06b6d4', // Cyan
      title: 'Instant Production Action',
      details: 'Load the real CSV reports from the last webinar, see the attendee drops immediately, and understand which sections had the lowest retention.',
    },
    {
      id: 8,
      label: 'Benefit',
      icon: <Award size={14} />,
      color: '#f59e0b', // Gold
      title: 'High-Value Productivity',
      details: 'Hours of tedious manual spreadsheets compressed into a 5-second file upload. It is custom-built, free, and owned entirely by the creator.',
    }
  ];

  const [activeStepId, setActiveStepId] = useState<number>(1);

  // Isometric landing positions
  const landings = [
    { id: 1, cx: 160, cy: 410 },
    { id: 2, cx: 300, cy: 360 },
    { id: 3, cx: 160, cy: 310 },
    { id: 4, cx: 300, cy: 260 },
    { id: 5, cx: 160, cy: 210 },
    { id: 6, cx: 300, cy: 160 },
    { id: 7, cx: 160, cy: 110 },
    { id: 8, cx: 300, cy: 60 }
  ];

  const oddSteps = steps.filter(s => s.id % 2 !== 0);
  const evenSteps = steps.filter(s => s.id % 2 === 0);

  return (
    <div className="workflow-grid" style={{
      display: 'grid',
      gridTemplateColumns: '300px 1fr 300px',
      gap: '24px',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      minHeight: '430px',
      maxHeight: 'calc(100vh - 240px)',
      position: 'relative'
    }}>
      {/* COLUMN 1: ODD STEPS (LEFT SIDE) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
        {oddSteps.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <div
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className="interactive workflow-card"
              style={{
                padding: '12px 14px',
                borderRadius: '12px',
                background: isActive 
                  ? `linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, ${step.color}0a 100%)` 
                  : 'rgba(255, 255, 255, 0.01)',
                border: `1.5px solid ${isActive ? step.color : 'rgba(255, 255, 255, 0.05)'}`,
                boxShadow: isActive ? `0 0 15px ${step.color}1c` : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: `1.5px solid ${step.color}`,
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? `${step.color}1a` : 'transparent'
                }}>
                  {step.id}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: isActive ? '#ffffff' : '#9ca3af', fontSize: '0.85rem' }}>{step.icon}</span>
                  <strong style={{ color: isActive ? '#ffffff' : '#e5e7eb', fontSize: '0.85rem', fontFamily: 'var(--font-display)' }}>{step.label}</strong>
                </div>
              </div>

              {/* Collapsible details inside card */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.4, margin: '0 0 6px 0' }}>
                      {step.details}
                    </p>
                    {step.codeSnippet && (
                      <pre style={{
                        margin: '6px 0 0 0',
                        padding: '6px 8px',
                        background: '#040508',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        borderRadius: '6px',
                        fontSize: '0.65rem',
                        color: '#a7f3d0',
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {step.codeSnippet}
                      </pre>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* COLUMN 2: CENTER 3D WINDING STAIRCASE */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'relative'
      }}>
        <svg 
          viewBox="0 0 460 490" 
          className="staircase-svg"
          style={{ 
            width: '100%', 
            height: '100%', 
            maxHeight: '450px',
            overflow: 'visible'
          }}
        >
          {/* DEFINITIONS FOR GRADIENTS & FILTERS */}
          <defs>
            {/* Soft Glow Filter */}
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Pedestal Sides Gradients */}
            <linearGradient id="wall-left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="wall-right" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>

            {/* Step Specific Top Gradients */}
            {steps.map(step => (
              <linearGradient key={step.id} id={`grad-top-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={step.color} />
                <stop offset="100%" stopColor={`${step.color}88`} />
              </linearGradient>
            ))}
          </defs>

          {/* PAINTERS ALGORITHM DRAW LOOP: BACK TO FRONT */}
          {(() => {
            const elements = [];

            // Draw Landing 8 (Top Step)
            elements.push(renderLanding(7));

            // Draw downwards
            for (let k = 6; k >= 0; k--) {
              // intermediate stairs from k to k+1
              elements.push(renderStairs(k));
              // landing k
              elements.push(renderLanding(k));
            }

            return elements;
          })()}
        </svg>
      </div>

      {/* COLUMN 3: EVEN STEPS (RIGHT SIDE) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
        {evenSteps.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <div
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className="interactive workflow-card"
              style={{
                padding: '12px 14px',
                borderRadius: '12px',
                background: isActive 
                  ? `linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, ${step.color}0a 100%)` 
                  : 'rgba(255, 255, 255, 0.01)',
                border: `1.5px solid ${isActive ? step.color : 'rgba(255, 255, 255, 0.05)'}`,
                boxShadow: isActive ? `0 0 15px ${step.color}1c` : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: `1.5px solid ${step.color}`,
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? `${step.color}1a` : 'transparent'
                }}>
                  {step.id}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: isActive ? '#ffffff' : '#9ca3af', fontSize: '0.85rem' }}>{step.icon}</span>
                  <strong style={{ color: isActive ? '#ffffff' : '#e5e7eb', fontSize: '0.85rem', fontFamily: 'var(--font-display)' }}>{step.label}</strong>
                </div>
              </div>

              {/* Collapsible details inside card */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.4, margin: '0 0 6px 0' }}>
                      {step.details}
                    </p>
                    {step.codeSnippet && (
                      <pre style={{
                        margin: '6px 0 0 0',
                        padding: '6px 8px',
                        background: '#040508',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        borderRadius: '6px',
                        fontSize: '0.65rem',
                        color: '#a7f3d0',
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {step.codeSnippet}
                      </pre>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {styleTag}
    </div>
  );

  // RENDER INTERMEDIATE RUN OF STEPS BETWEEN k AND k+1
  function renderStairs(k: number) {
    const start = landings[k];
    const end = landings[k + 1];
    const targetStep = steps[k + 1]; // Step k+1 owns the colors of the run
    
    // Draw 3 mini stairs in between
    const stairTreads = [];
    for (let i = 1; i <= 3; i++) {
      const t = i / 4;
      const cx = start.cx + (end.cx - start.cx) * t;
      const cy = start.cy + (end.cy - start.cy) * t;

      const isPathActive = activeStepId >= targetStep.id;

      stairTreads.push(
        <g 
          key={`stair-${k}-${i}`}
          style={{ cursor: 'pointer' }}
          onClick={() => setActiveStepId(targetStep.id)}
        >
          {/* Mini Pedestal Front-Left */}
          <polygon
            points={`${cx - 16},${cy} ${cx},${cy + 8} ${cx},${cy + 16} ${cx - 16},${cy + 8}`}
            fill={isPathActive ? `${targetStep.color}35` : '#131924'}
            stroke={isPathActive ? `${targetStep.color}66` : 'rgba(255,255,255,0.03)'}
            strokeWidth="0.5"
            style={{ transition: 'all 0.3s' }}
          />
          {/* Mini Pedestal Front-Right */}
          <polygon
            points={`${cx},${cy + 8} ${cx + 16},${cy} ${cx + 16},${cy + 8} ${cx},${cy + 16}`}
            fill={isPathActive ? `${targetStep.color}22` : '#0d1118'}
            stroke={isPathActive ? `${targetStep.color}66` : 'rgba(255,255,255,0.03)'}
            strokeWidth="0.5"
            style={{ transition: 'all 0.3s' }}
          />
          {/* Mini Pedestal Top Tread */}
          <polygon
            points={`${cx},${cy - 8} ${cx + 16},${cy} ${cx},${cy + 8} ${cx - 16},${cy}`}
            fill={isPathActive ? targetStep.color : 'rgba(255, 255, 255, 0.08)'}
            stroke={isPathActive ? targetStep.color : 'rgba(255, 255, 255, 0.15)'}
            strokeWidth="0.5"
            style={{ 
              transition: 'all 0.3s',
              filter: isPathActive ? 'drop-shadow(0 0 3px ' + targetStep.color + '88)' : 'none'
            }}
          />
        </g>
      );
    }

    return (
      <g key={`stairs-run-${k}`}>
        {stairTreads}
      </g>
    );
  }

  // RENDER LANDING pedestal COLUMN AND GLOW PAD
  function renderLanding(k: number) {
    const landing = landings[k];
    const step = steps[k];
    const isActive = step.id === activeStepId;

    const { cx, cy } = landing;

    return (
      <g 
        key={`landing-${step.id}`}
        onClick={() => setActiveStepId(step.id)}
        style={{ cursor: 'pointer' }}
      >
        {/* 3D TALL WHITE PEDESTAL COLUMN */}
        {/* Column Left Wall */}
        <polygon
          points={`${cx - 36},${cy} ${cx},${cy + 16} ${cx},${cy + 80} ${cx - 36},${cy + 64}`}
          fill="url(#wall-left)"
          stroke={isActive ? `${step.color}44` : 'rgba(255,255,255,0.03)'}
          strokeWidth={isActive ? 1 : 0.5}
          style={{ transition: 'all 0.3s' }}
        />
        {/* Column Right Wall */}
        <polygon
          points={`${cx},${cy + 16} ${cx + 36},${cy} ${cx + 36},${cy + 64} ${cx},${cy + 80}`}
          fill="url(#wall-right)"
          stroke={isActive ? `${step.color}44` : 'rgba(255,255,255,0.03)'}
          strokeWidth={isActive ? 1 : 0.5}
          style={{ transition: 'all 0.3s' }}
        />

        {/* ACTIVE OUTER NEON GLOW RING (FLAT AROUND TOP SLAB) */}
        {isActive && (
          <polygon
            points={`${cx},${cy - 19} ${cx + 42},${cy} ${cx},${cy + 19} ${cx - 42},${cy}`}
            fill="none"
            stroke={step.color}
            strokeWidth="3.5"
            filter="url(#neon-glow)"
            className="glow-ring-pulse"
            style={{ 
              transformOrigin: `${cx}px ${cy}px`,
              transition: 'stroke 0.3s'
            }}
          />
        )}

        {/* TOP COLOURED SLAB */}
        <polygon
          points={`${cx},${cy - 15} ${cx + 35},${cy} ${cx},${cy + 15} ${cx - 35},${cy}`}
          fill={isActive ? `url(#grad-top-${step.id})` : '#1e293b'}
          stroke={isActive ? '#ffffff' : 'rgba(255,255,255,0.2)'}
          strokeWidth={isActive ? 1.5 : 0.75}
          style={{ 
            transition: 'all 0.3s',
            filter: isActive ? `drop-shadow(0 0 10px ${step.color}aa)` : 'none'
          }}
        />

        {/* 3D-STYLED BIG STEP NUMBER */}
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '15px',
            fill: isActive ? '#05060a' : 'rgba(255,255,255,0.6)',
            userSelect: 'none',
            pointerEvents: 'none',
            transition: 'fill 0.3s'
          }}
        >
          {step.id}
        </text>
      </g>
    );
  }
};

const styleTag = (
  <style>{`
    .workflow-card {
      transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .workflow-card:hover {
      border-color: rgba(255, 255, 255, 0.25) !important;
      background: rgba(255, 255, 255, 0.03) !important;
    }
    
    @keyframes neon-glow-pulse {
      0% { opacity: 0.5; transform: scale(0.98); }
      50% { opacity: 1; transform: scale(1.02); }
      100% { opacity: 0.5; transform: scale(0.98); }
    }
    
    .glow-ring-pulse {
      animation: neon-glow-pulse 2s infinite ease-in-out;
    }
    
    @media (max-width: 1024px) {
      .workflow-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
        overflow-y: auto !important;
        max-height: none !important;
      }
      .staircase-svg {
        max-height: 280px !important;
        margin: 20px 0;
      }
    }
  `}</style>
);
