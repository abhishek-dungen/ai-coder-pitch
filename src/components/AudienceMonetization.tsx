import React, { useState, useRef } from 'react';
import { 
  Users, DollarSign, Megaphone, BookOpen, 
  Handshake, Briefcase, Percent, Presentation, Cpu, 
  TrendingUp, Sparkles, ChevronLeft, ChevronRight
} from 'lucide-react';

/* ==========================================================================
   1. AUDIENCE MODULE
   ========================================================================== */
interface AudienceSegment {
  id: number;
  title: string;
  focus: string;
  power: 'Medium' | 'High' | 'Very High';
  powerPercent: number;
  intent: 'High' | 'Very High';
  desc: string;
  painPoints: string[];
  solutions: string[];
  funnel: string;
  color: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

export const AudienceList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const segments: AudienceSegment[] = [
    {
      id: 1,
      title: 'AI Enthusiasts',
      focus: 'AI LLM Workflows',
      power: 'High',
      powerPercent: 80,
      intent: 'Very High',
      desc: 'Power users looking to push the boundaries of LLM generation models and custom agents.',
      painPoints: ['API rate limits and tokens usage', 'Integrating multiple agent steps', 'Creating responsive frontends for models'],
      solutions: ['Provide ready-to-run wrappers', 'Step-by-step LLM configurations', 'Zero-setup interactive sandboxes'],
      color: 'var(--color-cyan)',
      funnel: 'YouTube Prompt Breakdown ➔ GitHub Templates ➔ Premium Discord Community',
      icon: Cpu
    },
    {
      id: 2,
      title: 'Tech Professionals',
      focus: 'Developer Productivity',
      power: 'Very High',
      powerPercent: 95,
      intent: 'High',
      desc: 'Working developers, managers, and designers looking to build utilities to optimize workflow speeds.',
      painPoints: ['Repetitive administrative boilerplate', 'Slow scripting setups', 'Difficulty learning new dev frameworks'],
      solutions: ['Vite + TypeScript boilerplate files', 'Optimized prompt configurations', 'SaaS database quickstart files'],
      color: 'var(--color-indigo)',
      funnel: 'LinkedIn Case Study ➔ GitHub Gist Templates ➔ Professional Consulting Offers',
      icon: Briefcase
    },
    {
      id: 3,
      title: 'Freelancers & Creators',
      focus: 'No-code & Low-code Building',
      power: 'Medium',
      powerPercent: 65,
      intent: 'Very High',
      desc: 'Solopreneurs looking to build customized assets and automations without hiring engineering teams.',
      painPoints: ['Lack of traditional coding background', 'Expensive software subscriptions', 'SaaS maintenance worries'],
      solutions: ['Zero-code templates in sandbox', 'Automated scrapers and parsers', 'Free hosting on GitHub Pages/Vercel'],
      color: 'var(--color-magenta)',
      funnel: 'Instagram Reel Hook ➔ Free Tool Template link ➔ Practical Cohort Classes',
      icon: Sparkles
    },
    {
      id: 4,
      title: 'Non-Tech Solopreneurs',
      focus: 'Startup MVPs',
      power: 'High',
      powerPercent: 85,
      intent: 'Very High',
      desc: 'Founders building early MVPs to validate startup concepts without high development budgets.',
      painPoints: ['High costs of hiring developers', 'Slow cycles to launch validation', 'Uncertainty around product scaling'],
      solutions: ['MVP UI boilerplates', 'API connector prompt configs', 'Low-maintenance database guides'],
      color: '#10b981',
      funnel: 'YouTube MVP Build Vlog ➔ GitHub Template link ➔ 1-on-1 Consulting Call',
      icon: Presentation
    },
    {
      id: 5,
      title: 'Operations & HR Managers',
      focus: 'Admin Automation',
      power: 'Very High',
      powerPercent: 90,
      intent: 'High',
      desc: 'Corporate managers seeking custom data parsers, trackers, and alert queues to streamline operations.',
      painPoints: ['Manual report assembly tasks', 'Siloed data inside files', 'Lack of custom corporate tooling'],
      solutions: ['Zoom CSV attendance parsers', 'Expense ledger loggers', 'CRON auto-email schedules'],
      color: '#f59e0b',
      funnel: 'LinkedIn Workflow Article ➔ Interactive Tool Simulator ➔ Custom Team Hackathons',
      icon: Users
    },
    {
      id: 6,
      title: 'Agency Owners & Consultants',
      focus: 'Bespoke Micro-tools',
      power: 'High',
      powerPercent: 85,
      intent: 'High',
      desc: 'Service businesses building utility tools to automate client reports, metrics audits, and workflows.',
      painPoints: ['Client report compilation time', 'Need to deliver custom value fast', 'Data scraping requirements'],
      solutions: ['PDF invoice generators', 'Social growth comparison checkers', 'Web scraper scripts'],
      color: '#8b5cf6',
      funnel: 'YouTube Tutorial on Micro-SaaS ➔ Template repository ➔ Cohort/Enterprise Consulting',
      icon: Handshake
    }
  ];

  const activeSeg = segments[activeIndex];
  const ActiveIcon = activeSeg.icon;

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: '270px 1fr', 
        gap: '20px', 
        width: '100%', 
        height: '100%', 
        minHeight: 0, 
        boxSizing: 'border-box',
        perspective: '1200px',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes avatar-pulse {
          0% { transform: translateY(0px) scale(1); filter: drop-shadow(0 0 10px var(--color-glow)); }
          50% { transform: translateY(-10px) scale(1.05); filter: drop-shadow(0 0 25px var(--color-glow)); }
          100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 0 10px var(--color-glow)); }
        }
        @keyframes line-glow {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { left: 100%; opacity: 0; }
        }
        .hud-panel {
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, border-color 0.3s ease;
        }
      `}</style>

      {/* LEFT COLUMN: Semi-Circular Persona Ring */}
      <div 
        style={{ 
          position: 'relative',
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          borderRight: '1px solid rgba(255, 255, 255, 0.04)',
          paddingRight: '10px',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ 
          position: 'relative',
          width: '100%', 
          height: '300px',
          transformStyle: 'preserve-3d',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '8px'
        }}>
          {segments.map((s, idx) => {
            const diff = idx - activeIndex;
            const angle = diff * 22; // subtle curvature
            const isActive = idx === activeIndex;

            const rad = (angle * Math.PI) / 180;
            const translateY = diff * 44;
            const translateZ = Math.cos(rad) * 50 - 50;
            const rotateX = -angle;
            const opacity = Math.max(0.2, Math.cos(rad));
            const scale = isActive ? 1 : 0.85;

            return (
              <div 
                key={s.id}
                onClick={() => setActiveIndex(idx)}
                className="interactive"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'rgba(10, 11, 18, 0.6)',
                  border: `1.5px solid ${isActive ? s.color : 'rgba(255, 255, 255, 0.05)'}`,
                  boxShadow: isActive ? `0 0 15px ${s.color}18` : 'none',
                  cursor: 'pointer',
                  transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
                  opacity: opacity,
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, border-color 0.3s ease',
                  backfaceVisibility: 'hidden',
                  zIndex: 10 - Math.abs(diff)
                }}
              >
                {/* Number Badge */}
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: `1.5px solid ${s.color}`,
                  color: s.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? `${s.color}15` : 'transparent',
                  flexShrink: 0
                }}>
                  {s.id}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', overflow: 'hidden', textAlign: 'left' }}>
                  <span style={{ 
                    color: isActive ? '#ffffff' : '#9ca3af', 
                    fontSize: '0.72rem', 
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'var(--font-display)',
                    whiteSpace: 'nowrap'
                  }}>
                    {s.title}
                  </span>
                  <span style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
                    {s.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: 3D Pedestal Stage */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateRows: '1fr auto', 
          height: '100%', 
          minWidth: 0,
          boxSizing: 'border-box',
          gap: '12px'
        }}
      >
        {/* Upper Stage (HUDs + Pedestal Projection) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 1fr 1.2fr', 
            alignItems: 'center',
            height: '100%', 
            minHeight: 0,
            transformStyle: 'preserve-3d',
            gap: '14px'
          }}
        >
          {/* LEFT: Core Pain Points HUD Panel */}
          <div 
            className="glass-panel hud-panel"
            style={{
              padding: '12px 14px',
              height: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              border: `1.5px solid rgba(244, 63, 94, 0.15)`,
              background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.02) 0%, rgba(5, 6, 10, 0.85) 100%)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)',
              transform: 'rotateY(16deg) translateZ(10px)',
              transformStyle: 'preserve-3d',
              borderRadius: '12px',
              boxSizing: 'border-box'
            }}
          >
            <strong style={{ fontSize: '0.68rem', color: '#f43f5e', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              ⚠️ Core Pain Points
            </strong>
            <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              {activeSeg.painPoints.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '0.66rem', color: '#cbd5e1', lineHeight: 1.35 }}>
                  <span style={{ color: '#f43f5e', marginTop: '1px' }}>▪</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Projector Pedestal + Hologram Avatar */}
          <div 
            style={{ 
              position: 'relative',
              height: '240px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Suspended Avatar Icon */}
            <div 
              style={{
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${activeSeg.color}22 0%, rgba(5, 6, 10, 0.7) 70%)`,
                border: `2px solid ${activeSeg.color}`,
                boxShadow: `0 0 25px ${activeSeg.color}33`,
                animation: 'avatar-pulse 4s ease-in-out infinite',
                transition: 'border-color 0.6s ease, box-shadow 0.6s ease',
                ...({
                  '--color-glow': `${activeSeg.color}44`
                } as React.CSSProperties)
              }}
            >
              <ActiveIcon size={32} style={{ color: activeSeg.color, transition: 'color 0.6s ease' }} />
            </div>

            {/* Pedestal Top projection cone overlay */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              width: '130px',
              height: '140px',
              background: `linear-gradient(to top, ${activeSeg.color}15 0%, ${activeSeg.color}01 80%, transparent 100%)`,
              clipPath: 'polygon(15% 100%, 85% 100%, 100% 0%, 0% 0%)',
              pointerEvents: 'none',
              zIndex: 2,
              transition: 'background 0.6s ease'
            }} />

            {/* Pedestal base ellipse */}
            <div style={{
              position: 'absolute',
              bottom: '0px',
              width: '120px',
              height: '34px',
              borderRadius: '50%',
              border: `2.5px solid ${activeSeg.color}`,
              background: `radial-gradient(ellipse, ${activeSeg.color}25 0%, transparent 70%)`,
              boxShadow: `0 0 20px ${activeSeg.color}44, inset 0 0 10px ${activeSeg.color}22`,
              transform: 'rotateX(70deg)',
              pointerEvents: 'none',
              zIndex: 1,
              transition: 'border-color 0.6s ease, box-shadow 0.6s ease'
            }} />
          </div>

          {/* RIGHT: Value Proposition HUD Panel */}
          <div 
            className="glass-panel hud-panel"
            style={{
              padding: '12px 14px',
              height: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              border: `1.5px solid rgba(16, 185, 129, 0.15)`,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.02) 0%, rgba(5, 6, 10, 0.85) 100%)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)',
              transform: 'rotateY(-16deg) translateZ(10px)',
              transformStyle: 'preserve-3d',
              borderRadius: '12px',
              boxSizing: 'border-box'
            }}
          >
            <strong style={{ fontSize: '0.68rem', color: '#10b981', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              💡 Value Proposition
            </strong>
            <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              {activeSeg.solutions.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', fontSize: '0.66rem', color: '#cbd5e1', lineHeight: 1.35 }}>
                  <span style={{ color: '#10b981', marginTop: '1px' }}>▪</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Stage (Acquisition Funnel HUD Pipeline) */}
        <div 
          className="glass-panel"
          style={{
            padding: '10px 16px',
            background: 'var(--color-surface)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            boxSizing: 'border-box',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              🎯 Channel Acquisition Pipeline
            </span>
            <span style={{ fontSize: '0.55rem', color: activeSeg.color, fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
              CONVERSION TUNNEL
            </span>
          </div>

          {/* Pipeline Nodes Map */}
          <div style={{ 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            margin: '8px 0', 
            padding: '0 20px'
          }}>
            {/* Connecting Pipe Line */}
            <div style={{ 
              position: 'absolute', 
              left: '30px', 
              right: '30px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              height: '2px', 
              background: 'rgba(255,255,255,0.05)',
              overflow: 'hidden'
            }}>
              {/* Traveling light pulse */}
              <div style={{
                position: 'absolute',
                top: 0,
                width: '60px',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${activeSeg.color}, transparent)`,
                animation: 'line-glow 2.5s linear infinite'
              }} />
            </div>

            {/* Split funnel stages */}
            {activeSeg.funnel.split('➔').map((stage, idx) => {
              return (
                <div 
                  key={idx} 
                  style={{ 
                    position: 'relative', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    zIndex: 3
                  }}
                >
                  {/* Node Connector */}
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: `1.5px solid ${activeSeg.color}`,
                    background: '#090a0f',
                    boxShadow: `0 0 10px ${activeSeg.color}44`,
                    transition: 'border-color 0.6s ease, box-shadow 0.6s ease'
                  }} />
                  {/* Label */}
                  <span style={{ 
                    fontSize: '0.64rem', 
                    color: '#cbd5e1', 
                    fontWeight: 600, 
                    marginTop: '4px',
                    fontFamily: 'var(--font-display)',
                    whiteSpace: 'nowrap'
                  }}>
                    {stage.trim()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


interface Stream {
  id: number;
  title: string;
  desc: string;
  strategy: string;
  color: string;
  formulaLabel: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  deliverables: string[];
  complexity: 'Low' | 'Medium' | 'High';
  timeToLaunch: string;
  funnelChannel: string;
  calc: (subs: number, coursePrice: number, sponsorsCount: number) => number;
}

export const MonetizationGrid: React.FC = () => {
  const [activeStreamId, setActiveStreamId] = useState<number>(1);
  const [subscribers, setSubscribers] = useState<number>(50); // in thousands (10 to 300)
  const [coursePrice, setCoursePrice] = useState<number>(3999); // in rupees (1499 to 7999)
  const [sponsorsCount, setSponsorsCount] = useState<number>(2); // 1 to 4

  const streams: Stream[] = [
    {
      id: 1,
      title: 'Practical AI Course',
      desc: 'Launch structural cohorts teaching AI-assisted workspace building workflows.',
      strategy: 'Develop a 4-week cohort training program. Teach non-engineers to construct fully functional pages, scrapers, and dashboards.',
      color: 'var(--color-cyan)',
      formulaLabel: '0.3% annual subscriber conversion at selected cohort fee',
      icon: BookOpen,
      deliverables: [
        'Draft 4-week syllabus: Cursor workflows, React builders, and server hosting.',
        'Run beta cohort with 15 initial power users to gather product feedback.'
      ],
      complexity: 'Medium',
      timeToLaunch: '3 Weeks',
      funnelChannel: 'YouTube Video Guides',
      calc: (subs, price, sponsors) => Math.round((subs * 1000 * 0.003 * price) / 12) + (sponsors * 0)
    },
    {
      id: 2,
      title: 'SaaS Tool Sponsorships',
      desc: 'Paid placements from developer co-pilots and digital automators.',
      strategy: 'Showcase tools (like Cursor, Replit, or local database services) solving real-world bottlenecks in tutorials.',
      color: 'var(--color-indigo)',
      formulaLabel: '₹600 CPM on video views (est. 1.2x subscriber reach monthly per sponsor campaign)',
      icon: Handshake,
      deliverables: [
        'Standardize sponsorship rate sheets with fixed ₹600 CPM tier packages.',
        'Deliver 5-minute integration case studies in main video chapters.'
      ],
      complexity: 'Low',
      timeToLaunch: '1 Week',
      funnelChannel: 'LinkedIn & Newsletters',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 1.2 * sponsors * (600 / 1000)) + (price * 0)
    },
    {
      id: 3,
      title: '1-on-1 Consulting',
      desc: 'Advise business creators on internal automation pipelines.',
      strategy: 'Offer custom pipeline consulting audits to companies wanting to deploy agent-led scrapers and reports dashboards.',
      color: 'var(--color-magenta)',
      formulaLabel: 'Est. 1 to 2 audit consultations per month at standard rate scaling with channel scale',
      icon: Briefcase,
      deliverables: [
        'Design operations audit questionnaire and pipeline checklist assets.',
        'Assemble reusable scraper & database deployment boilerplates.',
        'Embed custom booking links inside video and article descriptions.'
      ],
      complexity: 'High',
      timeToLaunch: '1 Week',
      funnelChannel: 'Consulting Portals',
      calc: (subs, price, sponsors) => Math.round(15000 + (subs * 100)) + (price * 0) + (sponsors * 0)
    },
    {
      id: 4,
      title: 'Affiliate Commissions',
      desc: 'Recommend premium AI subscriptions, compilers, and database APIs.',
      strategy: 'Earn recurring payouts on compiler subscriptions, Claude APIs, database backends, and cursor-copilots recommendations.',
      color: '#10b981', // Emerald
      formulaLabel: '0.5% active subscriber base using affiliate links generating average ₹150/mo payout',
      icon: Percent,
      deliverables: [
        'Apply to top partner programs (Cursor, Replit, Vercel, Claude API).',
        'Create interactive tech-stack selector tool for viewers.',
        'Automate referral URL link insertion in descriptions and bios.'
      ],
      complexity: 'Low',
      timeToLaunch: 'Immediate',
      funnelChannel: 'Github Stack Pages',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 0.005 * 150) + (price * 0) + (sponsors * 0)
    },
    {
      id: 5,
      title: 'Webinar Collabs',
      desc: 'Co-host ticketed hackathons or AI workshops.',
      strategy: 'Run monthly live training webinars teaching quick workflow creation and funneling traffic to courses.',
      color: '#f59e0b', // Gold
      formulaLabel: 'Monthly attendance of 0.2% of subscriber reach at ₹499 ticket fee',
      icon: Presentation,
      deliverables: [
        'Build 90-minute live syllabus: "Deploy a full AI agent in one hour".',
        'Configure event ticketing flow and webhook email sender.',
        'Create high-value study guide cheatsheet PDF for attendees.'
      ],
      complexity: 'Medium',
      timeToLaunch: '2 Weeks',
      funnelChannel: 'Live Streams & Events',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 0.002 * 499) + (price * 0) + (sponsors * 0)
    },
    {
      id: 6,
      title: 'Own AI Products',
      desc: 'Build and sell micro templates, logs, and dashboard widgets.',
      strategy: 'Launch standalone tools (like Zoom logs attendance checkers) as micro-SaaS subscriptions for the community.',
      color: '#8b5cf6', // Purple
      formulaLabel: '0.1% subscriber base paying monthly ₹499 subscription fee for micro-utilities',
      icon: Cpu,
      deliverables: [
        'Ideate micro-utilities (Zoom attendance parser, CSV formatter, etc.).',
        'Construct clean Vite / Vanilla CSS client-side UI dashboard app.',
        'Implement Stripe portal backend for recurring subscriptions.'
      ],
      complexity: 'High',
      timeToLaunch: '4 Weeks',
      funnelChannel: 'Product Directories',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 0.001 * 499) + (price * 0) + (sponsors * 0)
    }
  ];

  const activeStream = streams.find(s => s.id === activeStreamId) || streams[0];

  // Calculations
  const activeStreamRev = activeStream.calc(subscribers, coursePrice, sponsorsCount);
  const totalRev = streams.reduce((acc, curr) => acc + curr.calc(subscribers, coursePrice, sponsorsCount), 0);

  const ActiveIcon = activeStream.icon;

  // Kinetic rotation calculation based on simulator values
  const rotationSpeed = 2 + (subscribers / 40) + (coursePrice / 1500) + (sponsorsCount * 0.8);

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: '240px 1fr 1.2fr', 
        gap: '16px', 
        width: '100%', 
        height: '100%', 
        minHeight: 0, 
        boxSizing: 'border-box'
      }}
    >
      <style>{`
        @keyframes spin-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-counter {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes core-pulse {
          0% { filter: drop-shadow(0 0 15px var(--glow-color)); transform: scale(0.97); }
          50% { filter: drop-shadow(0 0 30px var(--glow-color)); transform: scale(1.03); }
          100% { filter: drop-shadow(0 0 15px var(--glow-color)); transform: scale(0.97); }
        }
        @keyframes text-float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .reactor-slider::-webkit-slider-thumb {
          box-shadow: 0 0 8px var(--thumb-glow);
        }
      `}</style>

      {/* LEFT COLUMN: Simulation Inputs */}
      <div 
        className="glass-panel"
        style={{ 
          padding: '12px 14px', 
          background: 'var(--color-surface)',
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px',
          borderRadius: '12px',
          borderColor: 'rgba(255, 255, 255, 0.05)',
          justifyContent: 'space-between',
          minHeight: 0
        }}
      >
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)', paddingBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={13} style={{ color: 'var(--color-cyan)' }} />
          <strong style={{ fontSize: '0.72rem', color: '#ffffff', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📊 REVENUE SIMULATOR
          </strong>
        </div>

        {/* Reach Slider */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.64rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Users size={11} style={{ color: 'var(--color-cyan)' }} />
              REACH
            </span>
            <span style={{ color: 'var(--color-cyan)', fontWeight: 'bold' }}>{subscribers}K</span>
          </div>
          <input 
            type="range"
            min="10"
            max="300"
            step="10"
            value={subscribers}
            onChange={(e) => setSubscribers(Number(e.target.value))}
            className="custom-range interactive"
            style={{ width: '100%' }}
          />
        </div>

        {/* Course Price Slider */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.64rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <DollarSign size={11} style={{ color: 'var(--color-magenta)' }} />
              COURSE FEE
            </span>
            <span style={{ color: 'var(--color-magenta)', fontWeight: 'bold' }}>₹{coursePrice.toLocaleString()}</span>
          </div>
          <input 
            type="range"
            min="1499"
            max="7999"
            step="500"
            value={coursePrice}
            onChange={(e) => setCoursePrice(Number(e.target.value))}
            className="custom-range interactive"
            style={{ width: '100%' }}
          />
        </div>

        {/* Sponsors Slider */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.64rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Megaphone size={11} style={{ color: 'var(--color-indigo)' }} />
              SPONSORS
            </span>
            <span style={{ color: 'var(--color-indigo)', fontWeight: 'bold' }}>{sponsorsCount} / mo</span>
          </div>
          <input 
            type="range"
            min="1"
            max="4"
            step="1"
            value={sponsorsCount}
            onChange={(e) => setSponsorsCount(Number(e.target.value))}
            className="custom-range interactive"
            style={{ width: '100%' }}
          />
        </div>

        {/* Telemetry data box */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '6px',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <span style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', borderBottom: '1px solid rgba(255, 255, 255, 0.03)', paddingBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={9} style={{ color: 'var(--color-cyan)' }} />
            Telemetry
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3px', fontSize: '0.6rem' }}>
            <span style={{ color: '#94a3b8' }}>Annual Views:</span>
            <span style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{(subscribers * 12000).toLocaleString()}</span>
            
            <span style={{ color: '#94a3b8' }}>Students/yr:</span>
            <span style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{Math.round(subscribers * 3).toLocaleString()}</span>
            
            <span style={{ color: '#94a3b8' }}>Intent Leads:</span>
            <span style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{Math.round(subscribers * 50).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* CENTER COLUMN: 3D Holographic Reactor Core */}
      <div 
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          minWidth: 0
        }}
      >
        {/* Floating revenue total bubble */}
        <div style={{
          position: 'absolute',
          top: '10px',
          background: 'rgba(5, 6, 10, 0.85)',
          border: `1.5px solid ${activeStream.color}`,
          boxShadow: `0 0 15px ${activeStream.color}25, inset 0 0 10px ${activeStream.color}15`,
          borderRadius: '30px',
          padding: '6px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          animation: 'text-float 4s ease-in-out infinite',
          zIndex: 10,
          pointerEvents: 'none',
          transition: 'all 0.6s ease'
        }}>
          <span style={{ fontSize: '0.55rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Aggregated Revenue
          </span>
          <span style={{ 
            fontSize: '0.95rem', 
            color: activeStream.color, 
            fontWeight: 800, 
            fontFamily: 'var(--font-display)',
            transition: 'color 0.6s ease'
          }}>
            ₹{totalRev.toLocaleString()} / mo
          </span>
        </div>

        {/* Floating Reactor Rings Stage */}
        <div 
          style={{
            position: 'relative',
            width: '130px',
            height: '130px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'core-pulse 3s ease-in-out infinite',
            transform: 'translateY(15px) rotateX(10deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.6s ease',
            ...({
              '--glow-color': `${activeStream.color}33`
            } as React.CSSProperties)
          }}
        >
          {/* Volumetric projection beam overlay (behind the core) */}
          <div style={{
            position: 'absolute',
            bottom: '15px',
            width: '180px',
            height: '140px',
            background: `linear-gradient(to top, ${activeStream.color}0d 0%, ${activeStream.color}01 60%, transparent 100%)`,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0%, 0% 0%)',
            pointerEvents: 'none',
            zIndex: 1,
            transition: 'all 0.6s ease'
          }} />

          {/* Outer Segmented Ring */}
          <svg 
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              animation: `spin-clockwise ${18 / rotationSpeed}s linear infinite`,
              zIndex: 3
            }}
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" 
              cy="50" 
              r="44" 
              fill="none" 
              stroke={activeStream.color} 
              strokeWidth="2" 
              strokeDasharray="25 12 8 12"
              opacity="0.85"
              style={{ transition: 'stroke 0.6s ease' }}
            />
          </svg>

          {/* Middle Inner Ring */}
          <svg 
            style={{
              position: 'absolute',
              width: '75%',
              height: '75%',
              animation: `spin-counter ${12 / rotationSpeed}s linear infinite`,
              zIndex: 3
            }}
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" 
              cy="50" 
              r="44" 
              fill="none" 
              stroke={activeStream.color} 
              strokeWidth="3.5" 
              strokeDasharray="50 20"
              opacity="0.55"
              style={{ transition: 'stroke 0.6s ease' }}
            />
          </svg>

          {/* Core Orb Center */}
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: `radial-gradient(circle, #ffffff 0%, ${activeStream.color} 70%, transparent 100%)`,
            boxShadow: `0 0 20px ${activeStream.color}, inset 0 0 8px #ffffff`,
            opacity: 0.9,
            zIndex: 4,
            transition: 'all 0.6s ease'
          }} />
        </div>

        {/* Reactor Base pedistal */}
        <div style={{
          position: 'absolute',
          bottom: '25px',
          width: '160px',
          height: '42px',
          borderRadius: '50%',
          border: `2px solid ${activeStream.color}`,
          background: `radial-gradient(ellipse, ${activeStream.color}22 0%, transparent 70%)`,
          boxShadow: `0 0 20px ${activeStream.color}33, inset 0 0 10px ${activeStream.color}15`,
          transform: 'rotateX(75deg) translateY(20px)',
          pointerEvents: 'none',
          zIndex: 2,
          transition: 'all 0.6s ease'
        }} />
      </div>

      {/* RIGHT COLUMN: Strategy Orbit Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 0, height: '100%' }}>
        {/* Stream grid menu */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', flexShrink: 0 }}>
          {streams.map((s) => {
            const isActive = s.id === activeStreamId;
            const StreamIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStreamId(s.id)}
                className="interactive"
                style={{
                  padding: '6px 8px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'rgba(10, 11, 18, 0.6)',
                  border: `1.5px solid ${isActive ? s.color : 'rgba(255, 255, 255, 0.05)'}`,
                  color: isActive ? '#ffffff' : '#9ca3af',
                  fontSize: '0.66rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? `0 0 10px ${s.color}11` : 'none'
                }}
              >
                <StreamIcon size={11} style={{ color: isActive ? s.color : '#64748b' }} />
                {s.title.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Selected strategy information panel */}
        <div 
          className="glass-panel"
          style={{
            flexGrow: 1,
            border: `1.5px solid ${activeStream.color}`,
            background: 'linear-gradient(135deg, rgba(13, 17, 28, 0.8) 0%, rgba(255, 255, 255, 0.01) 100%)',
            boxShadow: `0 0 20px ${activeStream.color}0a`,
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '12px',
            transition: 'all 0.6s ease',
            minHeight: 0
          }}
        >
          {/* Strategy Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ActiveIcon size={14} style={{ color: activeStream.color, flexShrink: 0 }} />
                <strong style={{ fontSize: '0.8rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  {activeStream.title} Strategy
                </strong>
              </div>
              <span style={{ 
                fontSize: '0.55rem', 
                background: `${activeStream.color}15`,
                color: activeStream.color, 
                padding: '1px 6px',
                borderRadius: '8px',
                border: `1px solid ${activeStream.color}33`,
                fontWeight: 600,
                fontFamily: 'var(--font-mono)' 
              }}>
                STREAM ACTIVE
              </span>
            </div>
            <p style={{ fontSize: '0.68rem', color: '#cbd5e1', lineHeight: 1.35, margin: '2px 0 0 0', textAlign: 'left' }}>
              {activeStream.strategy}
            </p>
          </div>

          {/* Outputs layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 1fr', 
            gap: '10px', 
            margin: '4px 0',
            flexGrow: 1,
            minHeight: 0
          }}>
            {/* Left Box: Metric calculation */}
            <div style={{ 
              background: 'rgba(255,255,255,0.01)', 
              border: '1px solid rgba(255,255,255,0.03)', 
              borderRadius: '6px', 
              padding: '6px 8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'left'
            }}>
              <div>
                <span style={{ fontSize: '0.52rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', display: 'block' }}>
                  Projection Metric
                </span>
                <span style={{ fontSize: '0.6rem', color: '#e2e8f0', lineHeight: 1.2, display: 'block', marginTop: '2px' }}>
                  {activeStream.formulaLabel}
                </span>
              </div>
              
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '4px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.52rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>EST. MONTHLY STREAM</span>
                <span style={{ 
                  fontSize: '1.05rem', 
                  color: activeStream.color, 
                  fontWeight: 800, 
                  fontFamily: 'var(--font-display)', 
                  filter: `drop-shadow(0 0 6px ${activeStream.color}33)`,
                  transition: 'color 0.6s ease'
                }}>
                  ₹{activeStreamRev.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Right Box: Key Launch Deliverables */}
            <div style={{ 
              background: 'rgba(255,255,255,0.01)', 
              border: '1px solid rgba(255,255,255,0.03)', 
              borderRadius: '6px', 
              padding: '6px 8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: '4px',
              textAlign: 'left'
            }}>
              <span style={{ fontSize: '0.54rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '2px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <Sparkles size={8} style={{ color: activeStream.color }} />
                Deliverables
              </span>
              <ul style={{ paddingLeft: '0', margin: '2px 0 0 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {activeStream.deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', fontSize: '0.58rem', color: '#cbd5e1', lineHeight: 1.25 }}>
                    <span style={{ color: activeStream.color, fontSize: '0.6rem', marginTop: '1px' }}>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


/* ==========================================================================
   3. MILESTONE ROADMAP OVERHAUL
   ========================================================================== */
interface Milestone {
  id: number;
  months: string;
  phaseLabel: string;
  title: string;
  focusItems: string[];
  color: string;
}

export const MilestoneTimeline: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const lastScrollTime = useRef<number>(0);
  const touchStartX = useRef<number>(0);

  const milestones: Milestone[] = [
    {
      id: 1,
      months: 'Months 1 - 2',
      phaseLabel: 'PHASE 1: TRUST',
      title: 'Trust & Proof of Concept',
      focusItems: [
        'Deploy weekly logs showing custom dashboard and automation tools built from scratch.',
        'Upload short-form videos explaining the hooks, AI prompts, and real use-case solutions.',
        'Build baseline face-led brand identity as the expert "Advanced AI Coder".'
      ],
      color: 'var(--color-cyan)'
    },
    {
      id: 2,
      months: 'Months 3 - 4',
      phaseLabel: 'PHASE 2: RECALL',
      title: 'Recall & Community Building',
      focusItems: [
        'Engage viewers by building custom tools suggested by the comments section.',
        'Launch free open-source templates library to drive saves, shares, and email signups.',
        'Familiarize audience with specific coding workflows, establishing routine recall.'
      ],
      color: 'var(--color-indigo)'
    },
    {
      id: 3,
      months: 'Months 5 - 6',
      phaseLabel: 'PHASE 3: MONETIZE',
      title: 'Monetization Launch & SaaS MVPs',
      focusItems: [
        'Promote specialized cohorts/courses teaching AI-assisted workspace builder classes.',
        'Initiate sponsor campaigns with SaaS dev tools (Cursor, hosting services).',
        'Deploy first tiny paid subscription products solving direct administrative problems.'
      ],
      color: 'var(--color-magenta)'
    }
  ];

  const toggleCheck = (phaseId: number, itemIndex: number) => {
    const key = `${phaseId}-${itemIndex}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 800) return; // 800ms throttle to prevent fast spinning

    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 20) {
      const direction = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      if (direction > 0) {
        // scroll right/down -> next phase
        setActivePhase(prev => (prev === 3 ? 1 : prev + 1));
        lastScrollTime.current = now;
      } else {
        // scroll left/up -> prev phase
        setActivePhase(prev => (prev === 1 ? 3 : prev - 1));
        lastScrollTime.current = now;
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // swipe left -> go next (right)
        setActivePhase(prev => (prev === 3 ? 1 : prev + 1));
      } else {
        // swipe right -> go prev (left)
        setActivePhase(prev => (prev === 1 ? 3 : prev - 1));
      }
    }
  };

  const activeIndex = activePhase - 1;
  const activeMilestone = milestones[activeIndex];

  return (
    <div 
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1200px',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Style block for animations */}
      <style>{`
        @keyframes hologram-sweep {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotateY(var(--rot)) translateZ(var(--tz)) scale(var(--sc)); }
          50% { transform: translateY(-10px) rotateY(var(--rot)) translateZ(var(--tz)) scale(var(--sc)); }
          100% { transform: translateY(0px) rotateY(var(--rot)) translateZ(var(--tz)) scale(var(--sc)); }
        }
        .hologram-card {
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease, filter 0.8s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .scanlines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2) 1px,
            transparent 1px,
            transparent 2px
          );
          z-index: 10;
        }
      `}</style>
      
      {/* Outer 3D Wheel Stage */}
      <div style={{
        position: 'relative',
        width: '320px',
        height: '320px',
        transformStyle: 'preserve-3d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {milestones.map((m, i) => {
          const diff = (i - activeIndex + 3) % 3;
          const isActive = diff === 0;

          let rot: number;
          let tz: number;
          let tx: number;
          let sc: number;
          let opacity: number;
          let zIndex: number;
          let filter: string;

          if (diff === 0) {
            // Center Card (Active)
            rot = 0;
            tz = 120;
            tx = 0;
            sc = 1;
            opacity = 1;
            zIndex = 10;
            filter = `drop-shadow(0 0 25px ${m.color}22)`;
          } else if (diff === 1) {
            // Right Card
            rot = -40;
            tz = -100;
            tx = 250;
            sc = 0.8;
            opacity = 0.35;
            zIndex = 5;
            filter = 'blur(1px)';
          } else {
            // Left Card
            rot = 40;
            tz = -100;
            tx = -250;
            sc = 0.8;
            opacity = 0.35;
            zIndex = 5;
            filter = 'blur(1px)';
          }

          return (
            <div
              key={m.id}
              onClick={() => setActivePhase(m.id)}
              className="hologram-card glass-panel"
              style={{
                position: 'absolute',
                width: '300px',
                height: '310px',
                borderRadius: '16px',
                border: `1.5px solid ${isActive ? m.color : 'rgba(255,255,255,0.06)'}`,
                background: isActive 
                  ? `linear-gradient(135deg, ${m.color}08 0%, rgba(5, 6, 10, 0.9) 50%, ${m.color}03 100%)`
                  : 'linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(5, 6, 10, 0.95) 100%)',
                boxShadow: isActive ? `0 0 30px ${m.color}15, inset 0 0 15px ${m.color}10` : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: '16px 20px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                opacity: opacity,
                zIndex: zIndex,
                filter: filter,
                transform: `translateX(${tx}px) rotateY(${rot}deg) translateZ(${tz}px) scale(${sc})`,
                transformStyle: 'preserve-3d',
                animation: isActive ? 'float 5s ease-in-out infinite' : 'none',
                overflow: 'hidden',
                ...({
                  '--rot': `${rot}deg`,
                  '--tz': `${tz}px`,
                  '--sc': `${sc}`
                } as React.CSSProperties)
              }}
            >
              {/* Scanlines overlay for active holographic effect */}
              {isActive && <div className="scanlines" />}
              
              {/* Hologram sweep line */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${m.color}, transparent)`,
                  boxShadow: `0 0 8px ${m.color}, 0 0 15px ${m.color}`,
                  opacity: 0.8,
                  animation: 'hologram-sweep 4s linear infinite',
                  pointerEvents: 'none',
                  zIndex: 11
                }} />
              )}

              {/* Header Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px', zIndex: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.62rem', color: m.color, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    {m.phaseLabel}
                  </span>
                  <span style={{ 
                    fontSize: '0.62rem', 
                    background: isActive ? `${m.color}15` : 'rgba(255,255,255,0.03)',
                    color: isActive ? m.color : '#94a3b8',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    border: `1px solid ${isActive ? `${m.color}33` : 'rgba(255,255,255,0.05)'}`,
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {m.months}
                  </span>
                </div>
                <h3 style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, margin: '4px 0 0 0', fontFamily: 'var(--font-display)' }}>
                  {m.title}
                </h3>
              </div>

              {/* Checklist items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1, minHeight: 0, marginTop: '8px', zIndex: 12 }}>
                <span style={{ fontSize: '0.58rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={8} style={{ color: m.color }} />
                  Focus Objectives Checklist
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
                  {m.focusItems.map((item, idx) => {
                    const itemKey = `${m.id}-${idx}`;
                    const isChecked = checkedItems[itemKey] || false;
                    return (
                      <div 
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation(); // prevent card selection trigger
                          toggleCheck(m.id, idx);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px',
                          padding: '6px 8px',
                          borderRadius: '6px',
                          background: isChecked ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)',
                          border: `1px solid ${isChecked ? `${m.color}18` : 'rgba(255,255,255,0.03)'}`,
                          transition: 'all 0.2s ease',
                          cursor: 'pointer'
                        }}
                      >
                        <input 
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          style={{
                            marginTop: '2px',
                            cursor: 'pointer',
                            accentColor: m.color
                          }}
                        />
                        <span style={{ 
                          fontSize: '0.65rem', 
                          color: isChecked ? '#94a3b8' : '#cbd5e1', 
                          lineHeight: 1.3,
                          textDecoration: isChecked ? 'line-through' : 'none',
                          transition: 'all 0.2s ease'
                        }}>
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hologram Projector Base */}
      <div style={{
        position: 'absolute',
        bottom: '45px',
        left: '50%',
        transform: 'translateX(-50%) rotateX(75deg)',
        width: '240px',
        height: '60px',
        borderRadius: '50%',
        border: `2px solid ${activeMilestone.color}`,
        background: `radial-gradient(ellipse, ${activeMilestone.color}33 0%, transparent 70%)`,
        boxShadow: `0 0 25px ${activeMilestone.color}, inset 0 0 15px ${activeMilestone.color}`,
        transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        opacity: 0.65,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Hologram Light Ray Cone */}
      <div style={{
        position: 'absolute',
        bottom: '75px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '280px',
        height: '220px',
        background: `linear-gradient(to top, ${activeMilestone.color}12 0%, ${activeMilestone.color}02 70%, transparent 100%)`,
        clipPath: 'polygon(10% 0%, 90% 0%, 55% 100%, 45% 100%)',
        transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Left Chevron Control */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActivePhase(prev => (prev === 1 ? 3 : prev - 1));
        }}
        className="interactive"
        style={{
          position: 'absolute',
          left: '20px',
          top: '45%',
          transform: 'translateY(-50%)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1.5px solid rgba(255, 255, 255, 0.08)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = activeMilestone.color;
          e.currentTarget.style.boxShadow = `0 0 15px ${activeMilestone.color}44`;
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
        }}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right Chevron Control */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActivePhase(prev => (prev === 3 ? 1 : prev + 1));
        }}
        className="interactive"
        style={{
          position: 'absolute',
          right: '20px',
          top: '45%',
          transform: 'translateY(-50%)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1.5px solid rgba(255, 255, 255, 0.08)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = activeMilestone.color;
          e.currentTarget.style.boxShadow = `0 0 15px ${activeMilestone.color}44`;
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
        }}
      >
        <ChevronRight size={18} />
      </button>

      {/* Hologram Phase Bullet Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '0px',
        display: 'flex',
        gap: '12px',
        zIndex: 20
      }}>
        {milestones.map((m) => {
          const isActive = activePhase === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActivePhase(m.id)}
              className="interactive"
              style={{
                padding: '4px 12px',
                borderRadius: '20px',
                background: isActive ? `${m.color}15` : 'rgba(255, 255, 255, 0.01)',
                border: `1.5px solid ${isActive ? m.color : 'rgba(255, 255, 255, 0.06)'}`,
                color: isActive ? '#ffffff' : '#64748b',
                fontSize: '0.62rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? `0 0 10px ${m.color}22` : 'none'
              }}
            >
              PHASE {m.id}
            </button>
          );
        })}
      </div>
    </div>
  );
};
