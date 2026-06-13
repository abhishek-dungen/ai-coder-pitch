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
      title: '1. The Pain Point (Problem)',
      details: 'Concept: Define a daily workflow bottleneck.\nExample: Morning clutter of 500+ unread group chat messages.',
    },
    {
      id: 2,
      label: 'Idea',
      icon: <Lightbulb size={13} />,
      color: '#f59e0b', // Gold
      title: '2. The Concept (Idea)',
      details: 'Concept: Design a single-task utility.\nExample: Dashboard summarizing chats with one click.',
    },
    {
      id: 3,
      label: 'Prompt',
      icon: <FileEdit size={13} />,
      color: '#06b6d4', // Cyan
      title: '3. Instructions (Prompt)',
      details: 'Concept: Write instructions for the LLM coder.\nExample: Prompting agent to build a React chat log viewer.',
      codeSnippet: `Build a React page that loads chat JSON logs, filters by group, and calls a summarization API.`
    },
    {
      id: 4,
      label: 'AI Workflow',
      icon: <Cpu size={13} />,
      color: '#6366f1', // Indigo
      title: '4. Autonomous Build (AI Workflow)',
      details: 'Concept: Deploy coding agents to write the app.\nExample: Agent generates code and runs tests.',
    },
    {
      id: 5,
      label: 'Building',
      icon: <Hammer size={13} />,
      color: '#ec4899', // Magenta
      title: '5. Copilot Refinement (Building)',
      details: 'Concept: Fine-tune code and configure APIs.\nExample: Instructing LLM to refine the summary output structure.',
      codeSnippet: `"Summarize this chat log. Extract action items and decisions into short bullet points."`
    },
    {
      id: 6,
      label: 'Product',
      icon: <ShieldCheck size={13} />,
      color: '#8b5cf6', // Purple
      title: '6. The Finished Tool (Product)',
      details: 'Concept: Deploy a clean, working web application.\nExample: Web dashboard with chat summary tabs.',
    },
    {
      id: 7,
      label: 'Use Case',
      icon: <HelpCircle size={13} />,
      color: '#06b6d4', // Cyan
      title: '7. Real-World Test (Use Case)',
      details: 'Concept: Solve the pain point in real-time.\nExample: Get caught up on all chat channels in 10 seconds.',
    },
    {
      id: 8,
      label: 'Benefit',
      icon: <Award size={13} />,
      color: '#f59e0b', // Gold
      title: '8. Value (Benefit)',
      details: 'Concept: Quantify direct time saved.\nExample: Save 30+ mins of daily scrolling and stay focused.',
    }
  ];

  // Default to null (all cards collapsed on initial load)
  const [activeStepId, setActiveStepId] = useState<number | null>(null);

  // Isometric landing positions inside SVG (scaled to fit inside 380px height)
  const landings = [
    { id: 1, cx: 160, cy: 320 },
    { id: 2, cx: 300, cy: 280 },
    { id: 3, cx: 160, cy: 240 },
    { id: 4, cx: 300, cy: 200 },
    { id: 5, cx: 160, cy: 160 },
    { id: 6, cx: 300, cy: 120 },
    { id: 7, cx: 160, cy: 80 },
    { id: 8, cx: 300, cy: 40 }
  ];

  // Get expanded height based on step content
  const getExpandedHeight = (id: number) => {
    if (id === 3 || id === 5) return 215; // has code snippet
    return 135; // standard active card height
  };

  // 1D Physics Relaxation Solver to resolve overlapping and screen cropping
  const solvePositions = (sideSteps: Step[]) => {
    const sorted = [...sideSteps].sort((a, b) => landings[a.id - 1].cy - landings[b.id - 1].cy);
    const n = sorted.length;

    // 1. Initialize centers at base cy
    const Y = sorted.map(s => landings[s.id - 1].cy);
    const H = sorted.map(s => s.id === activeStepId ? getExpandedHeight(s.id) : 28);

    // 2. Clamp active card within container bounds first [16, 364]
    if (activeStepId !== null) {
      const activeIdx = sorted.findIndex(s => s.id === activeStepId);
      if (activeIdx !== -1) {
        const h = H[activeIdx];
        const minY = h / 2 + 16;
        const maxY = 380 - h / 2 - 16;
        Y[activeIdx] = Math.max(minY, Math.min(maxY, Y[activeIdx]));
      }
    }

    // 3. Relaxation Pass (Iteratively resolve collisions)
    const gap = 12; // Safety spacing between card boundaries
    for (let pass = 0; pass < 12; pass++) {
      // Upward push
      for (let i = n - 2; i >= 0; i--) {
        const below = i + 1;
        const overlap = (Y[i] + H[i]/2) - (Y[below] - H[below]/2 - gap);
        if (overlap > 0) {
          Y[i] -= overlap;
        }
      }
      // Downward push
      for (let i = 1; i < n; i++) {
        const above = i - 1;
        const overlap = (Y[above] + H[above]/2 + gap) - (Y[i] - H[i]/2);
        if (overlap > 0) {
          Y[i] += overlap;
        }
      }
      // Re-clamp bounds
      if (Y[0] - H[0]/2 < 16) {
        const shift = 16 - (Y[0] - H[0]/2);
        for (let i = 0; i < n; i++) Y[i] += shift;
      }
      if (Y[n-1] + H[n-1]/2 > 364) {
        const shift = (Y[n-1] + H[n-1]/2) - 364;
        for (let i = 0; i < n; i++) Y[i] -= shift;
      }
    }

    // Map back to step.id
    const resolved: Record<number, { top: number; height: number }> = {};
    sorted.forEach((step, idx) => {
      resolved[step.id] = {
        top: Y[idx],
        height: H[idx]
      };
    });

    return resolved;
  };

  const oddSteps = steps.filter(s => s.id % 2 !== 0);
  const evenSteps = steps.filter(s => s.id % 2 === 0);

  const leftPositions = solvePositions(oddSteps);
  const rightPositions = solvePositions(evenSteps);

  const handleCardClick = (stepId: number) => {
    setActiveStepId(prev => prev === stepId ? null : stepId);
  };

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
        height: '380px',
        minHeight: '380px'
      }}>
        
        {/* LEFT COLUMN STEP CARD ACCORDION (ODD STEPS) */}
        {oddSteps.map((step) => {
          const isActive = step.id === activeStepId;
          const pos = leftPositions[step.id];

          return (
            <motion.div
              layout
              key={step.id}
              onClick={() => handleCardClick(step.id)}
              className={`interactive workflow-card ${isActive ? 'active-step-card' : ''}`}
              style={{
                position: 'absolute',
                top: `${pos.top}px`,
                transform: 'translateY(-50%)',
                left: isActive ? '0px' : '80px', // Anchor to left: 0px when expanded, 80px when collapsed to grow inward
                width: isActive ? '250px' : '120px',
                borderRadius: isActive ? '12px' : '16px',
                background: isActive 
                  ? 'rgba(11, 15, 26, 0.98)' // Opaque background to prevent text overlays from showing through
                  : 'rgba(255, 255, 255, 0.02)',
                backdropFilter: isActive ? 'blur(12px)' : 'none',
                border: `1.5px solid ${isActive ? step.color : 'rgba(255, 255, 255, 0.06)'}`,
                padding: isActive ? '10px 12px' : '0 10px',
                height: `${pos.height}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: isActive ? `0 0 20px ${step.color}18` : 'none',
                cursor: 'pointer',
                zIndex: isActive ? 10 : 2,
                overflow: 'hidden',
                textAlign: 'left',
                transition: 'border-color 0.25s, background-color 0.25s, box-shadow 0.25s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', minHeight: '24px' }}>
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: `1.5px solid ${step.color}`,
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? `${step.color}15` : 'transparent',
                  flexShrink: 0
                }}>
                  {step.id}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', overflow: 'hidden', flexGrow: 1 }}>
                  <span style={{ color: isActive ? '#ffffff' : '#9ca3af', display: 'flex', alignItems: 'center' }}>
                    {step.icon}
                  </span>
                  <span style={{ 
                    color: isActive ? '#ffffff' : '#cbd5e1', 
                    fontSize: '0.78rem', 
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'var(--font-display)',
                    whiteSpace: 'nowrap'
                  }}>
                    {step.label}
                  </span>
                </div>
                {isActive && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveStepId(null);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#9ca3af',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px',
                      marginLeft: 'auto'
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {isActive && (
                <div 
                  onClick={(e) => e.stopPropagation()} // Stop propagation to allow text selection without closing card
                  style={{ marginTop: '6px', overflow: 'hidden' }}
                >
                  <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white', margin: '0 0 4px 0', fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </h5>
                  <p style={{ fontSize: '0.72rem', color: '#9ca3af', lineHeight: 1.25, margin: '0 0 4px 0' }}>
                    {step.details}
                  </p>
                  {step.codeSnippet && (
                    <pre style={{
                      margin: '4px 0 0 0',
                      padding: '4px 6px',
                      background: '#040508',
                      border: '1px solid rgba(6, 182, 212, 0.15)',
                      borderRadius: '6px',
                      fontSize: '0.58rem',
                      color: '#a7f3d0',
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {step.codeSnippet}
                    </pre>
                  )}
                </div>
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
          height: '380px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <svg 
            viewBox="0 0 460 380" 
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
              const cardY = leftPositions[step.id].top;

              return (
                <line 
                  key={`line-${step.id}`}
                  x1={isActive ? 40 : -10} 
                  y1={cardY} 
                  x2={landing.cx - 35} 
                  y2={landing.cy}
                  stroke={isActive ? step.color : 'rgba(255, 255, 255, 0.08)'}
                  strokeWidth={isActive ? 1.5 : 0.75}
                  strokeDasharray={isActive ? 'none' : '4, 4'}
                  opacity={isActive ? 1 : 0.6}
                  style={{ transition: 'all 0.3s' }}
                />
              );
            })}

            {/* Right lines (even steps) */}
            {evenSteps.map(step => {
              const landing = landings[step.id - 1];
              const isActive = step.id === activeStepId;
              const cardY = rightPositions[step.id].top;

              return (
                <line 
                  key={`line-${step.id}`}
                  x1={isActive ? 420 : 470} 
                  y1={cardY} 
                  x2={landing.cx + 35} 
                  y2={landing.cy}
                  stroke={isActive ? step.color : 'rgba(255, 255, 255, 0.08)'}
                  strokeWidth={isActive ? 1.5 : 0.75}
                  strokeDasharray={isActive ? 'none' : '4, 4'}
                  opacity={isActive ? 1 : 0.6}
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

        {/* RIGHT COLUMN STEP ACCORDION (EVEN STEPS) */}
        {evenSteps.map((step) => {
          const isActive = step.id === activeStepId;
          const pos = rightPositions[step.id];

          return (
            <motion.div
              layout
              key={step.id}
              onClick={() => handleCardClick(step.id)}
              className={`interactive workflow-card ${isActive ? 'active-step-card' : ''}`}
              style={{
                position: 'absolute',
                top: `${pos.top}px`,
                transform: 'translateY(-50%)',
                left: isActive ? '630px' : '680px', // Anchor to left: 630px when expanded, 680px when collapsed to grow inward
                width: isActive ? '250px' : '120px',
                borderRadius: isActive ? '12px' : '16px',
                background: isActive 
                  ? 'rgba(11, 15, 26, 0.98)' // Opaque background to prevent text overlays from showing through
                  : 'rgba(255, 255, 255, 0.02)',
                backdropFilter: isActive ? 'blur(12px)' : 'none',
                border: `1.5px solid ${isActive ? step.color : 'rgba(255, 255, 255, 0.06)'}`,
                padding: isActive ? '12px 14px' : '0 10px',
                height: `${pos.height}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: isActive ? `0 0 20px ${step.color}18` : 'none',
                cursor: 'pointer',
                zIndex: isActive ? 10 : 2,
                overflow: 'hidden',
                textAlign: 'left',
                transition: 'border-color 0.25s, background-color 0.25s, box-shadow 0.25s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', minHeight: '24px' }}>
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: `1.5px solid ${step.color}`,
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? `${step.color}15` : 'transparent',
                  flexShrink: 0
                }}>
                  {step.id}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', overflow: 'hidden', flexGrow: 1 }}>
                  <span style={{ color: isActive ? '#ffffff' : '#9ca3af', display: 'flex', alignItems: 'center' }}>
                    {step.icon}
                  </span>
                  <span style={{ 
                    color: isActive ? '#ffffff' : '#cbd5e1', 
                    fontSize: '0.78rem', 
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'var(--font-display)',
                    whiteSpace: 'nowrap'
                  }}>
                    {step.label}
                  </span>
                </div>
                {isActive && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveStepId(null);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#9ca3af',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px',
                      marginLeft: 'auto'
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {isActive && (
                <div 
                  onClick={(e) => e.stopPropagation()} // Stop propagation to allow text selection without closing card
                  style={{ marginTop: '8px', overflow: 'hidden' }}
                >
                  <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white', margin: '0 0 4px 0', fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </h5>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.35, margin: '0 0 4px 0' }}>
                    {step.details}
                  </p>
                  {step.codeSnippet && (
                    <pre style={{
                      margin: '4px 0 0 0',
                      padding: '6px 8px',
                      background: '#040508',
                      border: '1px solid rgba(6, 182, 212, 0.15)',
                      borderRadius: '6px',
                      fontSize: '0.62rem',
                      color: '#a7f3d0',
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {step.codeSnippet}
                    </pre>
                  )}
                </div>
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

      const isPathActive = activeStepId !== null && activeStepId >= targetStep.id;

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
        onClick={() => {
          setActiveStepId(isActive ? null : step.id);
        }}
        style={{ cursor: 'pointer' }}
      >
        {/* 3D TALL WHITE PEDESTAL COLUMN */}
        {/* Column Left Wall */}
        <polygon
          points={`${cx - 36},${cy} ${cx},${cy + 16} ${cx},${cy + 50} ${cx - 36},${cy + 34}`}
          fill="url(#wall-left)"
          stroke={isActive ? `${step.color}44` : 'rgba(255,255,255,0.03)'}
          strokeWidth={isActive ? 1 : 0.5}
          style={{ transition: 'all 0.3s' }}
        />
        {/* Column Right Wall */}
        <polygon
          points={`${cx},${cy + 16} ${cx + 36},${cy} ${cx + 36},${cy + 34} ${cx},${cy + 50}`}
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
      transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;
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
        order: -1 !important;
        margin: 20px auto !important;
      }
      .staircase-svg line {
        display: none !important;
      }
    }
  `}</style>
);
