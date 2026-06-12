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
      icon: <HelpCircle size={15} />,
      color: 'var(--color-magenta)',
      title: 'Identify Everyday Pain Points',
      details: 'We start with a real-life frustration. For example: "I have to cross-reference Zoom attendee drop-off lists with webinar chat questions manually every week, and it takes 3 hours."',
    },
    {
      id: 2,
      label: 'Idea',
      icon: <Lightbulb size={15} />,
      color: '#eab308', // gold
      title: 'Tiny MVP Concept Design',
      details: 'Instead of complex systems, design a simple, single-page client dashboard that processes files locally. It should just show a retention graph and list questions.',
    },
    {
      id: 3,
      label: 'Prompt',
      icon: <FileEdit size={15} />,
      color: 'var(--color-cyan)',
      title: 'Craft the Perfect Instruction',
      details: 'Translate the concept into a structured prompt detailing inputs, outputs, UI style rules, and data structures for the LLM developer agent.',
      codeSnippet: `Prompt: Write a React typescript page that takes a Zoom CSV attendance report and parses it to show a line chart of retention % over time and highlights Q&A. Use dark styling.`
    },
    {
      id: 4,
      label: 'AI Workflow',
      icon: <Cpu size={15} />,
      color: 'var(--color-indigo)',
      title: 'AI Agent Generation',
      details: 'Leverage tools like Claude Code or Google Antigravity to parse folder structure, install charts dependencies, and build components autonomously.',
    },
    {
      id: 5,
      label: 'Building',
      icon: <Hammer size={15} />,
      color: 'var(--color-magenta)',
      title: 'Co-Pilot Debugging',
      details: 'Identify edge cases (like empty rows, malformed logs, or mobile sizing bugs) and execute quick iterative refactor commands with the agent.',
    },
    {
      id: 6,
      label: 'Product',
      icon: <ShieldCheck size={15} />,
      color: 'var(--color-emerald)',
      title: 'Finished Web Tool',
      details: 'The compiled, fully-responsive dashboard works exactly as requested. It is fast, clean, and runs directly in the browser.',
    },
    {
      id: 7,
      label: 'Use Case',
      icon: <HelpCircle size={15} />,
      color: 'var(--color-cyan)',
      title: 'Instant Production Action',
      details: 'Load the real CSV reports from the last webinar, see the attendee drops immediately, and understand which sections had the lowest retention.',
    },
    {
      id: 8,
      label: 'Benefit',
      icon: <Award size={15} />,
      color: '#eab308',
      title: 'High-Value Productivity',
      details: 'Hours of tedious manual spreadsheets compressed into a 5-second file upload. It is custom-built, free, and owned entirely by the creator.',
    }
  ];

  const [activeStepId, setActiveStepId] = useState<number>(1);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      gap: '30px',
      alignItems: 'stretch',
      height: '100%',
      minHeight: '420px',
      maxHeight: 'calc(100vh - 240px)',
      width: '100%'
    }}>
      {/* LEFT COLUMN: INTERACTIVE LADDER */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 16px',
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '16px',
        border: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}>
        {/* Left Rail of the Ladder */}
        <div style={{
          position: 'absolute',
          top: '20px',
          bottom: '20px',
          left: '24px',
          width: '3px',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '2px',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '20px',
          height: `${((activeStepId - 1) / (steps.length - 1)) * 90}%`,
          left: '24px',
          width: '3px',
          background: 'linear-gradient(to bottom, var(--color-cyan), var(--color-indigo), var(--color-magenta))',
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
          borderRadius: '2px',
          zIndex: 1,
          transition: 'height 0.3s ease'
        }} />

        {/* Right Rail of the Ladder */}
        <div style={{
          position: 'absolute',
          top: '20px',
          bottom: '20px',
          right: '24px',
          width: '3px',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '2px',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '20px',
          height: `${((activeStepId - 1) / (steps.length - 1)) * 90}%`,
          right: '24px',
          width: '3px',
          background: 'linear-gradient(to bottom, var(--color-cyan), var(--color-indigo), var(--color-magenta))',
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
          borderRadius: '2px',
          zIndex: 1,
          transition: 'height 0.3s ease'
        }} />

        {/* Rungs (Steps) */}
        {steps.map((step) => {
          const isActive = step.id === activeStepId;
          const isCompleted = step.id < activeStepId;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className="interactive"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '38px',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              {/* Rung line connecting left and right rails */}
              <div style={{
                position: 'absolute',
                left: '8px',
                right: '8px',
                height: '2px',
                background: isActive 
                  ? step.color 
                  : isCompleted 
                    ? 'rgba(6, 182, 212, 0.25)' 
                    : 'rgba(255, 255, 255, 0.05)',
                boxShadow: isActive ? `0 0 12px ${step.color}` : 'none',
                zIndex: 0,
                transition: 'all 0.3s ease'
              }} />

              {/* Rung Center Interactive Pill */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 16px',
                borderRadius: '20px',
                background: isActive 
                  ? step.color 
                  : isCompleted
                    ? 'rgba(6, 182, 212, 0.15)'
                    : '#080a11',
                border: `1.5px solid ${
                  isActive 
                    ? step.color 
                    : isCompleted
                      ? 'rgba(6, 182, 212, 0.4)'
                      : 'rgba(255, 255, 255, 0.1)'
                }`,
                color: isActive ? '#05060a' : isCompleted ? 'var(--color-cyan)' : '#9ca3af',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.8rem',
                fontFamily: 'var(--font-display)',
                boxShadow: isActive ? `0 0 20px ${step.color}` : 'none',
                zIndex: 1,
                transition: 'all 0.25s ease'
              }}>
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  opacity: isActive ? 1 : 0.7 
                }}>
                  {step.icon}
                </span>
                <span>{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT COLUMN: DETAIL PANEL */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass-panel"
            style={{
              borderColor: steps[activeStepId - 1].color,
              background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(255,255,255,0.01) 100%)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              justifyContent: 'center',
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)`,
              minHeight: '260px'
            }}
          >
            {/* Header Area */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                fontSize: '0.75rem',
                padding: '3px 10px',
                borderRadius: '6px',
                background: steps[activeStepId - 1].color,
                color: '#05060a',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800
              }}>
                Step 0{activeStepId}
              </span>
              <h4 style={{ 
                fontSize: '1.4rem', 
                fontFamily: 'var(--font-display)', 
                color: 'white',
                margin: 0
              }}>
                {steps[activeStepId - 1].title}
              </h4>
            </div>

            {/* Description */}
            <p style={{ 
              fontSize: '0.95rem', 
              color: '#d1d5db', 
              lineHeight: 1.6,
              margin: 0
            }}>
              {steps[activeStepId - 1].details}
            </p>

            {/* Code Snippet Box (For Prompt step) */}
            {steps[activeStepId - 1].codeSnippet && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                style={{
                  marginTop: '10px',
                  padding: '16px',
                  borderRadius: '10px',
                  background: '#040509',
                  border: '1px solid rgba(6, 182, 212, 0.15)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#a7f3d0',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-wrap',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  fontSize: '0.65rem',
                  color: 'rgba(6, 182, 212, 0.4)',
                  background: 'rgba(6, 182, 212, 0.05)',
                  padding: '3px 8px',
                  borderBottomLeftRadius: '6px',
                  borderLeft: '1px solid rgba(6, 182, 212, 0.1)',
                  borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600
                }}>
                  PROMPT TEMPLATE
                </div>
                {steps[activeStepId - 1].codeSnippet}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
