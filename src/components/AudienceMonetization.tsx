import React, { useState } from 'react';
import { BookOpen, Handshake, Percent, Presentation, Code2 } from 'lucide-react';

/* ==========================================================================
   1. AUDIENCE MODULE
   ========================================================================== */
export const AudienceList: React.FC = () => {
  const segments = [
    { title: 'AI Enthusiasts', focus: 'AI Workflows', power: 'High', desc: 'People wanting to push the boundaries of LLM generation models.' },
    { title: 'Tech Professionals', focus: 'Productivity', power: 'Very High', desc: 'Working managers & developers looking to optimize workflows.' },
    { title: 'Freelancers & Creators', focus: 'No-code Builders', power: 'Medium', desc: 'Solopreneurs building custom assets without engineering degrees.' },
    { title: 'Startup-Minded / Students', focus: 'MVPs & Tiny Products', power: 'Medium', desc: 'Aspiring builders wanting to ship software quickly.' },
    { title: 'Non-Tech Solopreneurs', focus: 'Startup MVPs', power: 'High', desc: 'Founders building early MVPs to validate startup concepts without dev budgets.' },
    { title: 'Operations & HR Managers', focus: 'Admin Automation', power: 'Very High', desc: 'Corporate staff automating repetitive spreadsheets, data sorting, and alert queues.' },
    { title: 'Agency Owners & Consultants', focus: 'Bespoke Micro-tools', power: 'High', desc: 'Service firms building custom utility widgets to automate client audits and analytics.' },
    { title: 'E-commerce & Local Retailers', focus: 'Inventory & CRM', power: 'High', desc: 'Small business owners deploying custom log sheets, stock indicators, and ledgers.' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', minHeight: 0 }}>
      <div style={{ 
        flexGrow: 1, 
        overflowY: 'auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
        gap: '10px', 
        minHeight: 0,
        paddingRight: '4px'
      }}>
        {segments.map((s) => (
          <div 
            key={s.title}
            className="glass-panel interactive"
            style={{ 
              padding: '12px 16px', 
              background: 'var(--color-surface)',
              transition: 'var(--transition-fast)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <strong style={{ fontSize: '0.85rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>{s.title}</strong>
              <span style={{ 
                fontSize: '0.6rem', 
                background: 'rgba(6, 182, 212, 0.1)', 
                color: 'var(--color-cyan)', 
                padding: '2px 6px', 
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)'
              }}>
                Purchasing Power: {s.power}
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#9ca3af', lineHeight: 1.35, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="glass-panel" style={{ padding: '10px 14px', background: 'rgba(99, 102, 241, 0.05)', fontSize: '0.72rem', color: '#9ca3af', borderLeft: '3px solid var(--color-indigo)', flexShrink: 0 }}>
        🎯 <strong>High-Quality English Audience:</strong> Since the niche focuses on AI workflows, digital automation, and code orchestration, it attracts audiences with high monetization potential.
      </div>
    </div>
  );
};


/* ==========================================================================
   2. MONETIZATION CARD FLIPS
   ========================================================================== */
interface MonetizationItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  frontDesc: string;
  backAction: string;
  color: string;
}

export const MonetizationGrid: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  const channels: MonetizationItem[] = [
    {
      id: 1,
      title: 'Practical AI Course',
      icon: <BookOpen size={20} />,
      frontDesc: 'Launch structural program teaching AI-assisted building workflows.',
      backAction: 'Teach non-engineers to construct fully-functional apps, dashboards, and automated scrapers.',
      color: 'var(--color-cyan)'
    },
    {
      id: 2,
      title: 'SaaS Tool Sponsorships',
      icon: <Handshake size={20} />,
      frontDesc: 'Paid placements from developer co-pilots and digital automators.',
      backAction: 'Showcase paid integrations (Cursor, SaaS APIs) seamlessly inside workflow solving videos.',
      color: 'var(--color-indigo)'
    },
    {
      id: 3,
      title: '1-on-1 Consulting',
      icon: <Presentation size={20} />,
      frontDesc: 'Advise business creators on internal automation pipelines.',
      backAction: 'Help client organizations optimize administrative manual sheets and deploy custom trackers.',
      color: 'var(--color-magenta)'
    },
    {
      id: 4,
      title: 'Affiliate Commissions',
      icon: <Percent size={20} />,
      frontDesc: 'Recommend premium AI subscriptions, compilers, and APIs.',
      backAction: 'Earn payouts on cursor-copilot recommendations or database backend signups via track links.',
      color: 'var(--color-cyan)'
    },
    {
      id: 5,
      title: 'Webinar Collabs',
      icon: <Presentation size={20} />,
      frontDesc: 'Co-host ticketed hackathons or AI workshops.',
      backAction: 'Host live training webinars teaching quick workflow creation and funnel traffic to courses.',
      color: 'var(--color-indigo)'
    },
    {
      id: 6,
      title: 'Own AI Products',
      icon: <Code2 size={20} />,
      frontDesc: 'Build and sell micro templates, logs, and dashboard widgets.',
      backAction: 'Launch standalone tools (like Zoom logs parsers) as micro-SaaS subscriptions for the community.',
      color: 'var(--color-magenta)'
    }
  ];

  const handleCardClick = (id: number) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', justifyContent: 'center' }}>
      <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>
        CLICK CARDS TO FLIP & VIEW DETAILS
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', perspective: '1000px' }}>
        {channels.map((c) => {
          const isFlipped = flippedCardId === c.id;
          return (
            <div 
              key={c.id}
              onClick={() => handleCardClick(c.id)}
              className="interactive"
              style={{ 
                height: '110px', 
                cursor: 'pointer',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'none',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Front Face */}
              <div className="glass-panel" style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '12px',
                borderLeft: `2.5px solid ${c.color}`,
                background: 'var(--color-surface)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', marginBottom: '4px' }}>
                  <span style={{ color: c.color }}>{c.icon}</span>
                  <strong style={{ fontSize: '0.8rem', fontFamily: 'var(--font-display)' }}>{c.title}</strong>
                </div>
                <p style={{ fontSize: '0.68rem', color: '#9ca3af', lineHeight: 1.3 }}>{c.frontDesc}</p>
              </div>

              {/* Back Face */}
              <div className="glass-panel" style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '12px',
                background: 'rgba(99, 102, 241, 0.12)',
                borderColor: 'var(--color-indigo)',
                boxShadow: '0 8px 16px rgba(99, 102, 241, 0.1)'
              }}>
                <strong style={{ fontSize: '0.72rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  Action Strategy:
                </strong>
                <p style={{ fontSize: '0.68rem', color: '#f3f4f6', lineHeight: 1.3 }}>{c.backAction}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


/* ==========================================================================
   3. MILESTONE ROADMAP SLIDER
   ========================================================================== */
interface Milestone {
  months: string;
  title: string;
  focusItems: string[];
  color: string;
}

export const MilestoneTimeline: React.FC = () => {
  const [phase, setPhase] = useState<number>(1);

  const milestones: Milestone[] = [
    {
      months: 'Months 1 - 2',
      title: 'Trust & Proof of Concept',
      focusItems: [
        'Deploy weekly logs showing custom dashboard and automation tools built from scratch.',
        'Upload short-form videos explaining the hooks, AI prompts, and real use-case solutions.',
        'Build baseline face-led brand identity as the expert "Advanced AI Coder".'
      ],
      color: 'var(--color-cyan)'
    },
    {
      months: 'Months 3 - 4',
      title: 'Recall & Community Building',
      focusItems: [
        'Engage viewers by building custom tools suggested by the comments section.',
        'Launch free open-source templates library to drive saves, shares, and email signups.',
        'Familiarize audience with specific coding workflows, establishing routine recall.'
      ],
      color: 'var(--color-indigo)'
    },
    {
      months: 'Months 5 - 6',
      title: 'Monetization Launch & SaaS MVPs',
      focusItems: [
        'Promote specialized cohorts/courses teaching AI-assisted workspace builder classes.',
        'Initiate sponsor campaigns with SaaS dev tools (Cursor, hosting services).',
        'Deploy first tiny paid subscription products solving direct administrative problems.'
      ],
      color: 'var(--color-magenta)'
    }
  ];

  const currentMilestone = milestones[phase - 1];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center' }}>
      {/* Interactive slider */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>
          <span>PHASE 1: TRUST</span>
          <span>PHASE 2: RECALL</span>
          <span>PHASE 3: MONETIZE</span>
        </div>
        <input 
          type="range"
          min="1"
          max="3"
          value={phase}
          onChange={(e) => setPhase(Number(e.target.value))}
          className="custom-range interactive"
          style={{ width: '100%', marginTop: '4px' }}
        />
      </div>

      {/* Target panel details */}
      <div 
        className="glass-panel"
        style={{ 
          padding: '16px 20px', 
          borderColor: currentMilestone.color,
          background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(255,255,255,0.01) 100%)',
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px',
          animation: 'fadeIn 0.35s ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
            {currentMilestone.title}
          </h4>
          <span style={{ 
            fontSize: '0.72rem', 
            background: currentMilestone.color, 
            color: '#05060a',
            padding: '3px 8px', 
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700
          }}>
            {currentMilestone.months}
          </span>
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', color: '#e5e7eb', fontSize: '0.82rem' }}>
          {currentMilestone.focusItems.map((item, idx) => (
            <li key={idx} style={{ lineHeight: 1.4 }}>{item}</li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
