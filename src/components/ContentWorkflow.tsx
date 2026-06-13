import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      icon: <HelpCircle size={13} />,
      color: '#10b981', // Emerald
      title: 'Overwhelmed by Group Chats',
      details: 'Daily group chats are extremely cluttered with hundreds of unread messages. Catching up on what happened in each group takes hours of manual scrolling.',
    },
    {
      id: 2,
      label: 'Idea',
      icon: <Lightbulb size={13} />,
      color: '#f59e0b', // Gold
      title: 'Instant Group Summarizer',
      details: 'An AI application that compiles daily summaries of group chat histories. Users simply select a group tab to view a concise digest of what occurred.',
    },
    {
      id: 3,
      label: 'Prompt',
      icon: <FileEdit size={13} />,
      color: '#06b6d4', // Cyan
      title: 'Database & Agent Setup',
      details: 'Instruct the Google Antigravity coder agent to build a local React page that parses the local WhatsApp sqlite/json history database and sends transcripts to a summarization endpoint.',
      codeSnippet: `Prompt: Create a React app that imports WhatsApp SQLite chat exports, aggregates messages by date/group, and runs them through a daily summarizer API.`
    },
    {
      id: 4,
      label: 'AI Workflow',
      icon: <Cpu size={13} />,
      color: '#6366f1', // Indigo
      title: 'Agent Code Execution',
      details: 'The agent analyzes the local database schema, compiles the parsing scripts, structures the UI tabs, and installs charting libraries autonomously.',
    },
    {
      id: 5,
      label: 'Building',
      icon: <Hammer size={13} />,
      color: '#ec4899', // Magenta
      title: 'Refining App & API Instructions',
      details: 'We write two core instructions: one frontend builder prompt handling layout edge cases (e.g. media attachments, missing days), and one system API prompt.',
      codeSnippet: `System API Prompt:
"Summarize this WhatsApp transcript. Extract action items, decisions made, and highlight who said what in short bullet points."`
    },
    {
      id: 6,
      label: 'Product',
      icon: <ShieldCheck size={13} />,
      color: '#8b5cf6', // Purple
      title: 'Fully Functional Local App',
      details: 'A local, fully-responsive dashboard featuring group folders, searchable daily logs, clean metric widgets, and instant AI summary sections.',
    },
    {
      id: 7,
      label: 'Use Case',
      icon: <HelpCircle size={13} />,
      color: '#06b6d4', // Cyan
      title: '10-Second Catch-up Routine',
      details: 'Launch the app every morning, click on active work/family groups, and instantly catch up on 500+ messages in seconds without reading transcripts.',
    },
    {
      id: 8,
      label: 'Benefit',
      icon: <Award size={13} />,
      color: '#f59e0b', // Gold
      title: 'Reclaim Focus & Time',
      details: 'Save 30+ minutes of scrolling daily. Never miss critical decisions, deadlines, or announcements while maintaining peace of mind.',
    }
  ];

  const [activeStepId, setActiveStepId] = useState<number>(1);

  // Isometric landing positions inside SVG
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
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 0'
    }}>
      <div className="staircase-container" style={{
        position: 'relative',
        width: '880px',
        height: '490px',
        minHeight: '490px'
      }}>
        
        {/* LEFT COLUMN STEP CARD ACCORDION (ODD STEPS) */}
        {oddSteps.map((step) => {
          const isActive = step.id === activeStepId;
          const landing = landings[step.id - 1];

          return (
            <motion.div
              layout
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className="interactive workflow-card"
              style={{
                position: 'absolute',
                top: `${landing.cy}px`,
                transform: 'translateY(-50%)',
                right: '680px', // Anchor at X = 200px
                width: isActive ? '250px' : '140px',
                borderRadius: isActive ? '12px' : '16px',
                background: isActive 
                  ? `linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, ${step.color}0a 100%)` 
                  : 'rgba(255, 255, 255, 0.02)',
                border: `1.5px solid ${isActive ? step.color : 'rgba(255, 255, 255, 0.06)'}`,
                padding: isActive ? '12px 14px' : '0 12px',
                height: isActive ? 'auto' : '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: isActive ? `0 0 20px ${step.color}18` : 'none',
                cursor: 'pointer',
                zIndex: isActive ? 10 : 2,
                overflow: 'hidden',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', minHeight: '28px' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: `1.5px solid ${step.color}`,
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? `${step.color}15` : 'transparent',
                  flexShrink: 0
                }}>
                  {step.id}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', overflow: 'hidden' }}>
                  <span style={{ color: isActive ? '#ffffff' : '#9ca3af', display: 'flex', alignItems: 'center' }}>
                    {step.icon}
                  </span>
                  <span style={{ 
                    color: isActive ? '#ffffff' : '#cbd5e1', 
                    fontSize: '0.8rem', 
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'var(--font-display)',
                    whiteSpace: 'nowrap'
                  }}>
                    {step.label}
                  </span>
                </div>
              </div>

              {/* Collapsed view leaves title hidden, active expands title, description, code */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ marginTop: '8px' }}
                >
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', margin: '0 0 6px 0', fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </h5>
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
            </motion.div>
          );
        })}

        {/* CENTER COLUMN STAIRCASE CANVAS */}
        <div style={{
          position: 'absolute',
          left: '210px',
          top: 0,
          width: '460px',
          height: '490px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <svg 
            viewBox="0 0 460 490" 
            className="staircase-svg"
            style={{ 
              width: '100%', 
              height: '100%', 
              overflow: 'visible'
            }}
          >
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

            {/* POINTER CONNECTOR LINES */}
            {/* Left lines (odd steps) */}
            {oddSteps.map(step => {
              const landing = landings[step.id - 1];
              const isActive = step.id === activeStepId;
              return (
                <line 
                  key={`line-${step.id}`}
                  x1="10" 
                  y1={landing.cy} 
                  x2={landing.cx - 35} 
                  y2={landing.cy}
                  stroke={isActive ? step.color : 'rgba(255, 255, 255, 0.08)'}
                  strokeWidth={isActive ? 1.5 : 0.75}
                  strokeDasharray={isActive ? 'none' : '4, 4'}
                  style={{ transition: 'all 0.3s' }}
                />
              );
            })}

            {/* Right lines (even steps) */}
            {evenSteps.map(step => {
              const landing = landings[step.id - 1];
              const isActive = step.id === activeStepId;
              return (
                <line 
                  key={`line-${step.id}`}
                  x1="450" 
                  y1={landing.cy} 
                  x2={landing.cx + 35} 
                  y2={landing.cy}
                  stroke={isActive ? step.color : 'rgba(255, 255, 255, 0.08)'}
                  strokeWidth={isActive ? 1.5 : 0.75}
                  strokeDasharray={isActive ? 'none' : '4, 4'}
                  style={{ transition: 'all 0.3s' }}
                />
              );
            })}

            {/* PAINTERS ALGORITHM DRAW LOOP: BACK TO FRONT */}
            {(() => {
              const elements = [];

              // Draw Landing 8 (Top Step)
              elements.push(renderLanding(7));

              // Draw downwards
              for (let k = 6; k >= 0; k--) {
                // intermediate stairs run from k to k+1
                elements.push(renderStairs(k));
                // landing k
                elements.push(renderLanding(k));
              }

              return elements;
            })()}
          </svg>
        </div>

        {/* RIGHT COLUMN STEP CARD ACCORDION (EVEN STEPS) */}
        {evenSteps.map((step) => {
          const isActive = step.id === activeStepId;
          const landing = landings[step.id - 1];

          return (
            <motion.div
              layout
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className="interactive workflow-card"
              style={{
                position: 'absolute',
                top: `${landing.cy}px`,
                transform: 'translateY(-50%)',
                left: '680px', // Anchor at X = 680px
                width: isActive ? '250px' : '140px',
                borderRadius: isActive ? '12px' : '16px',
                background: isActive 
                  ? `linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, ${step.color}0a 100%)` 
                  : 'rgba(255, 255, 255, 0.02)',
                border: `1.5px solid ${isActive ? step.color : 'rgba(255, 255, 255, 0.06)'}`,
                padding: isActive ? '12px 14px' : '0 12px',
                height: isActive ? 'auto' : '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: isActive ? `0 0 20px ${step.color}18` : 'none',
                cursor: 'pointer',
                zIndex: isActive ? 10 : 2,
                overflow: 'hidden',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', minHeight: '28px' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: `1.5px solid ${step.color}`,
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? `${step.color}15` : 'transparent',
                  flexShrink: 0
                }}>
                  {step.id}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', overflow: 'hidden' }}>
                  <span style={{ color: isActive ? '#ffffff' : '#9ca3af', display: 'flex', alignItems: 'center' }}>
                    {step.icon}
                  </span>
                  <span style={{ 
                    color: isActive ? '#ffffff' : '#cbd5e1', 
                    fontSize: '0.8rem', 
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'var(--font-display)',
                    whiteSpace: 'nowrap'
                  }}>
                    {step.label}
                  </span>
                </div>
              </div>

              {/* Collapsed view leaves details hidden, active expands title, description */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ marginTop: '8px' }}
                >
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', margin: '0 0 6px 0', fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </h5>
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
            </motion.div>
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
      transition: border-color 0.25s, background-color 0.25s;
    }
    .workflow-card:hover {
      border-color: rgba(255, 255, 255, 0.20) !important;
      background: rgba(255, 255, 255, 0.04) !important;
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
      .staircase-container {
        width: 100% !important;
        height: auto !important;
        min-height: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
      }
      .workflow-card {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        transform: none !important;
        width: 100% !important;
        height: auto !important;
        margin-bottom: 8px !important;
      }
      .staircase-svg {
        position: relative !important;
        max-height: 280px !important;
        order: -1 !important; /* Move stairs to top on mobile */
        margin: 20px auto !important;
      }
      /* Hide connection lines on mobile */
      .staircase-svg line {
        display: none !important;
      }
    }
  `}</style>
);
