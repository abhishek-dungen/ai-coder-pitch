import React, { useState, useEffect, useRef } from 'react';
import { Terminal, AlertCircle } from 'lucide-react';

interface ToolOption {
  name: string;
  command: string;
  prompt: string;
  outputs: string[];
}

export const TerminalPrompt: React.FC = () => {
  const tools: ToolOption[] = [
    {
      name: 'Google Antigravity',
      command: 'antigravity --create-app --niche="expense-manager"',
      prompt: 'Build a personalized expense tracker that imports custom CSV files from cashfree API',
      outputs: [
        '✨ Initializing AI coder agent (Antigravity)...',
        '🔍 Scanning codebase for architecture setup...',
        '⚙️ Generating component tree (Dashboard, InputForm, ChartView)',
        '📦 Resolving dependencies: npm install lucide-react canvas-confetti',
        '📝 Writing file src/components/ExpenseTracker.tsx',
        '🚀 Server started on http://localhost:5173/ (completed in 1.4s)',
        '🎉 SUCCESS: App built successfully! Ready for staging.'
      ]
    },
    {
      name: 'Claude Code',
      command: 'claude "Refactor Payment collection dashboard to handle multiple webhooks"',
      prompt: 'Refactor payment collector. Integration gateways: Cashfree, PayU.',
      outputs: [
        '🤖 Claude-code agent connecting to workspace...',
        '📂 Reading file src/lib/cashfree.mjs',
        '📂 Reading file src/lib/payu.mjs',
        '🔄 Refactoring webhook handler: index.js',
        '✅ Webhook signature validation compiled',
        '📊 Added fallback route for failed status reports',
        '🎉 SUCCESS: Webhook logic refactored & function index.js updated.'
      ]
    },
    {
      name: 'Cursor',
      command: 'cursor --composer --prompt="Create habit tracker timeline components"',
      prompt: 'Build a grid dashboard displaying habits and track streaks.',
      outputs: [
        '⚙️ Composer mapping files: HabitGrid.tsx, StreakAlert.tsx',
        '🔨 Formatting Tailwind styles and grid parameters',
        '🛠️ Adding hooks.json settings overrides',
        '✅ 3 files modified, 0 syntax warnings',
        '🎉 SUCCESS: Habit tracking components generated.'
      ]
    }
  ];

  const [selectedTool, setSelectedTool] = useState<number>(0);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const startSimulation = (toolIndex: number) => {
    setSelectedTool(toolIndex);
    setIsTyping(true);
    setTerminalText([]);

    const tool = tools[toolIndex];
    let step = 0;
    
    // First, show typing command
    setTerminalText([`$ ${tool.command}`]);
    
    const interval = setInterval(() => {
      if (step < tool.outputs.length) {
        setTerminalText((prev) => [...prev, tool.outputs[step]]);
        step++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 600);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    startSimulation(0);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalText]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      {/* Selector pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tools.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => !isTyping && startSimulation(idx)}
            className={`btn interactive ${selectedTool === idx ? 'btn-primary' : 'btn-secondary'}`}
            disabled={isTyping}
            style={{ 
              fontSize: '0.8rem', 
              padding: '8px 16px',
              opacity: isTyping && selectedTool !== idx ? 0.5 : 1
            }}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Info panel */}
      <div style={{ fontSize: '0.82rem', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <AlertCircle size={14} style={{ color: 'var(--color-cyan)' }} />
        <span>Prompt: "{tools[selectedTool].prompt}"</span>
      </div>

      {/* Terminal emulator */}
      <div className="terminal-window" style={{ flexGrow: 1, minHeight: '220px', display: 'flex', flexDirection: 'column' }}>
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <span className="terminal-title">zsh - node v22.20</span>
          <Terminal size={14} style={{ color: '#4b5563' }} />
        </div>
        <div className="terminal-body" style={{ flexGrow: 1 }}>
          {terminalText.map((line, index) => {
            const isCommand = line.startsWith('$');
            const isSuccess = line.startsWith('🎉 SUCCESS') || line.startsWith('✅');
            const isWarning = line.startsWith('⚙️') || line.startsWith('📝') || line.startsWith('📦');
            
            let color = '#a7f3d0'; // standard output green
            if (isCommand) color = 'var(--color-cyan)';
            else if (isSuccess) color = 'var(--color-emerald)';
            else if (isWarning) color = '#f3f4f6';

            return (
              <div 
                key={index} 
                style={{ 
                  color, 
                  fontFamily: 'var(--font-mono)', 
                  marginBottom: '6px',
                  fontWeight: isCommand || isSuccess ? 600 : 400
                }}
              >
                {line}
              </div>
            );
          })}
          {isTyping && (
            <span style={{ 
              display: 'inline-block', 
              width: '8px', 
              height: '15px', 
              background: 'var(--color-cyan)',
              animation: 'blink 0.8s infinite',
              marginLeft: '2px'
            }} />
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
