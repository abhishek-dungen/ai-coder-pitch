import React, { useState } from 'react';
import { HelpCircle, Lightbulb, FileEdit, Cpu, Hammer, ShieldCheck, HelpCircle as UseIcon, Award } from 'lucide-react';

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
      icon: <HelpCircle size={16} />,
      color: 'var(--color-magenta)',
      title: 'Identify Everyday Pain Points',
      details: 'We start with a real-life frustration. For example: "I have to cross-reference Zoom attendee drop-off lists with webinar chat questions manually every week, and it takes 3 hours."',
    },
    {
      id: 2,
      label: 'Idea',
      icon: <Lightbulb size={16} />,
      color: '#eab308', // gold
      title: 'Tiny MVP Concept Design',
      details: 'Instead of complex systems, design a simple, single-page client dashboard that processes files locally. It should just show a retention graph and list questions.',
    },
    {
      id: 3,
      label: 'Prompt',
      icon: <FileEdit size={16} />,
      color: 'var(--color-cyan)',
      title: 'Craft the Perfect Instruction',
      details: 'Translate the concept into a structured prompt detailing inputs, outputs, UI style rules, and data structures for the LLM developer agent.',
      codeSnippet: `Prompt: Write a React typescript page that takes a Zoom CSV attendance report and parses it to show a line chart of retention % over time and highlights Q&A. Use dark styling.`
    },
    {
      id: 4,
      label: 'AI Workflow',
      icon: <Cpu size={16} />,
      color: 'var(--color-indigo)',
      title: 'AI Agent Generation',
      details: 'Leverage tools like Claude Code or Google Antigravity to parse folder structure, install charts dependencies, and build components autonomously.',
    },
    {
      id: 5,
      label: 'Building',
      icon: <Hammer size={16} />,
      color: 'var(--color-magenta)',
      title: 'Co-Pilot Debugging',
      details: 'Identify edge cases (like empty rows, malformed logs, or mobile sizing bugs) and execute quick iterative refactor commands with the agent.',
    },
    {
      id: 6,
      label: 'Product',
      icon: <ShieldCheck size={16} />,
      color: 'var(--color-emerald)',
      title: 'Finished Web Tool',
      details: 'The compiled, fully-responsive dashboard works exactly as requested. It is fast, clean, and runs directly in the browser.',
    },
    {
      id: 7,
      label: 'Use Case',
      icon: <UseIcon size={16} />,
      color: 'var(--color-cyan)',
      title: 'Instant Production Action',
      details: 'Load the real CSV reports from the last webinar, see the attendee drops immediately, and understand which sections had the lowest retention.',
    },
    {
      id: 8,
      label: 'Benefit',
      icon: <Award size={16} />,
      color: '#eab308',
      title: 'High-Value Productivity',
      details: 'Hours of tedious manual spreadsheets compressed into a 5-second file upload. It is custom-built, free, and owned entirely by the creator.',
    }
  ];

  const [activeStepId, setActiveStepId] = useState<number>(1);

  const selectStep = (id: number) => {
    setActiveStepId(id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Horizontal workflow timeline map */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '16px 8px', 
        background: 'rgba(0,0,0,0.15)', 
        borderRadius: '12px', 
        border: '1px solid var(--color-border)', 
        position: 'relative',
        overflowX: 'auto'
      }}>
        {/* Glow connector bar */}
        <div style={{ 
          position: 'absolute', 
          left: '30px', 
          right: '30px', 
          height: '2px', 
          background: 'var(--color-border)',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute', 
          left: '30px', 
          width: `${((activeStepId - 1) / (steps.length - 1)) * 90}%`, 
          height: '2px', 
          background: 'linear-gradient(90deg, var(--color-cyan), var(--color-indigo))',
          boxShadow: '0 0 8px var(--color-cyan)',
          zIndex: 1,
          transition: 'width 0.4s ease'
        }} />

        {steps.map((step) => {
          const isActive = step.id === activeStepId;
          const isCompleted = step.id < activeStepId;
          
          let circleBorder = 'var(--color-border)';
          let circleBg = '#0a0c10';
          let textColor = '#9ca3af';

          if (isActive) {
            circleBorder = step.color;
            circleBg = step.color;
            textColor = '#ffffff';
          } else if (isCompleted) {
            circleBorder = 'var(--color-cyan)';
            circleBg = 'rgba(6,182,212,0.1)';
            textColor = 'var(--color-cyan)';
          }

          return (
            <div 
              key={step.id} 
              onClick={() => selectStep(step.id)}
              className="interactive"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '8px', 
                position: 'relative', 
                zIndex: 2, 
                cursor: 'pointer',
                flexGrow: 1,
                minWidth: '70px'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: `2px solid ${circleBorder}`,
                background: circleBg,
                color: isActive ? '#05060a' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isActive ? `0 0 14px ${step.color}` : 'none',
                transition: 'all 0.3s ease'
              }}>
                {step.icon}
              </div>
              <span style={{ 
                fontSize: '0.72rem', 
                fontWeight: isActive ? 700 : 500, 
                color: textColor, 
                fontFamily: 'var(--font-display)',
                textAlign: 'center'
              }}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Details Box */}
      <div className="glass-panel" style={{ 
        flexGrow: 1, 
        borderColor: steps[activeStepId - 1].color,
        background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(255,255,255,0.01) 100%)',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px',
        animation: 'slideUp 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ 
            fontSize: '0.75rem', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            background: steps[activeStepId - 1].color, 
            color: '#05060a',
            fontFamily: 'var(--font-mono)', 
            fontWeight: 700 
          }}>
            Step 0{activeStepId}
          </span>
          <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: 'white' }}>
            {steps[activeStepId - 1].title}
          </h4>
        </div>
        
        <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.5 }}>
          {steps[activeStepId - 1].details}
        </p>

        {steps[activeStepId - 1].codeSnippet && (
          <div style={{ 
            marginTop: '8px', 
            padding: '12px', 
            borderRadius: '8px', 
            background: '#090a10', 
            border: '1px solid var(--color-border)', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.78rem', 
            color: '#a7f3d0', 
            whiteSpace: 'pre-wrap',
            textAlign: 'left'
          }}>
            {steps[activeStepId - 1].codeSnippet}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
