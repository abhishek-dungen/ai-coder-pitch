import React, { useState } from 'react';

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
      funnel: 'YouTube Prompt Breakdown ➔ GitHub Templates ➔ Premium Discord Community'
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
      funnel: 'LinkedIn Case Study ➔ GitHub Gist Templates ➔ Professional Consulting Offers'
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
      funnel: 'Instagram Reel Hook ➔ Free Tool Template link ➔ Practical Cohort Classes'
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
      funnel: 'YouTube MVP Build Vlog ➔ GitHub Template link ➔ 1-on-1 Consulting Call'
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
      funnel: 'LinkedIn Workflow Article ➔ Interactive Tool Simulator ➔ Custom Team Hackathons'
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
      funnel: 'YouTube Tutorial on Micro-SaaS ➔ Template repository ➔ Cohort/Enterprise Consulting'
    }
  ];

  const activeSeg = segments[activeIndex];

  return (
    <div style={{ display: 'flex', gap: '20px', width: '100%', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
      {/* Left Tabs Stack */}
      <div style={{ width: '270px', display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0, justifyContent: 'center' }}>
        {segments.map((s, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div 
              key={s.id}
              onClick={() => setActiveIndex(idx)}
              className="interactive"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: '8px',
                background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.01)',
                border: `1.5px solid ${isActive ? s.color : 'rgba(255, 255, 255, 0.05)'}`,
                boxShadow: isActive ? `0 0 15px ${s.color}15` : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {/* Number Badge */}
              <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                border: `1.5px solid ${s.color}`,
                color: s.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                background: isActive ? `${s.color}15` : 'transparent',
                flexShrink: 0
              }}>
                {s.id}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}>
                <span style={{ 
                  color: isActive ? '#ffffff' : '#9ca3af', 
                  fontSize: '0.78rem', 
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-display)',
                  whiteSpace: 'nowrap'
                }}>
                  {s.title}
                </span>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
                  {s.focus}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Details Panel */}
      <div style={{ flexGrow: 1, minWidth: 0, height: '100%' }}>
        <div 
          className="glass-panel"
          style={{
            height: '100%',
            boxSizing: 'border-box',
            border: `1.5px solid ${activeSeg.color}`,
            background: 'linear-gradient(135deg, rgba(13, 17, 28, 0.7) 0%, rgba(255, 255, 255, 0.01) 100%)',
            boxShadow: `0 0 25px ${activeSeg.color}0a`,
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '12px',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '8px', flexShrink: 0 }}>
            <h3 style={{ fontSize: '1.05rem', color: 'white', fontWeight: 700, margin: 0, fontFamily: 'var(--font-display)' }}>
              {activeSeg.title} Profile
            </h3>
            <span style={{ 
              fontSize: '0.65rem', 
              background: `${activeSeg.color}15`, 
              color: activeSeg.color, 
              padding: '2px 8px', 
              borderRadius: '12px',
              fontWeight: 600,
              border: `1px solid ${activeSeg.color}33`,
              fontFamily: 'var(--font-mono)'
            }}>
              {activeSeg.focus}
            </span>
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.4, margin: '8px 0', flexShrink: 0 }}>
            {activeSeg.desc}
          </p>

          {/* Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '16px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '10px 14px', margin: '4px 0', flexShrink: 0 }}>
            {/* Purchasing Power Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                <span>PURCHASING POWER</span>
                <span style={{ color: activeSeg.color, fontWeight: 'bold' }}>{activeSeg.power}</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${activeSeg.powerPercent}%`, height: '100%', background: activeSeg.color, borderRadius: '3px', transition: 'width 0.5s ease-in-out' }} />
              </div>
            </div>
            {/* Intent indicator */}
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>ENGAGEMENT INTENT</span>
              <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 700, fontFamily: 'var(--font-display)', marginTop: '2px' }}>{activeSeg.intent}</span>
            </div>
          </div>

          {/* Core Pain Points vs Solutions list */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flexGrow: 1, minHeight: 0, overflowY: 'auto', margin: '4px 0' }}>
            <div>
              <strong style={{ fontSize: '0.68rem', color: '#f43f5e', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>
                ⚠️ Core Pain Points
              </strong>
              <ul style={{ paddingLeft: '12px', margin: 0, fontSize: '0.68rem', color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {activeSeg.painPoints.map((p, i) => <li key={i} style={{ lineHeight: 1.3 }}>{p}</li>)}
              </ul>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.06)', paddingLeft: '12px' }}>
              <strong style={{ fontSize: '0.68rem', color: '#10b981', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>
                💡 Value Proposition
              </strong>
              <ul style={{ paddingLeft: '12px', margin: 0, fontSize: '0.68rem', color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {activeSeg.solutions.map((s, i) => <li key={i} style={{ lineHeight: 1.3 }}>{s}</li>)}
              </ul>
            </div>
          </div>

          {/* Funnel Footnote */}
          <div style={{
            background: 'rgba(99, 102, 241, 0.05)',
            borderLeft: '3px solid var(--color-indigo)',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '0.68rem',
            color: '#9ca3af',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0,
            marginTop: '6px'
          }}>
            🎯 <strong style={{ color: 'white' }}>Acquisition Funnel:</strong> {activeSeg.funnel}
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
  calc: (subs: number, coursePrice: number, sponsorsCount: number) => number;
}

export const MonetizationGrid: React.FC = () => {
  const [activeStreamId, setActiveStreamId] = useState<number>(1);
  const [subscribers, setSubscribers] = useState<number>(50); // in thousands (10 to 300)
  const [coursePrice, setCoursePrice] = useState<number>(99); // in dollars
  const [sponsorsCount, setSponsorsCount] = useState<number>(2); // 1 to 4

  const streams: Stream[] = [
    {
      id: 1,
      title: 'Practical AI Course',
      desc: 'Launch structural cohorts teaching AI-assisted workspace building workflows.',
      strategy: 'Develop a 4-week cohort training program. Teach non-engineers to construct fully functional pages, scrapers, and dashboards.',
      color: 'var(--color-cyan)',
      formulaLabel: '0.3% conversion of subscribers per year at selected cohort fee',
      calc: (subs, price, sponsors) => Math.round((subs * 1000 * 0.003 * price) / 12) + (sponsors * 0)
    },
    {
      id: 2,
      title: 'SaaS Tool Sponsorships',
      desc: 'Paid placements from developer co-pilots and digital automators.',
      strategy: 'Showcase tools (like Cursor, Replit, or local database services) solving real-world bottlenecks in tutorials.',
      color: 'var(--color-indigo)',
      formulaLabel: '$35 CPM on average video view volumes (est. 1.2x subscriber reach monthly)',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 1.2 * sponsors * (35 / 1000)) + (price * 0)
    },
    {
      id: 3,
      title: '1-on-1 Consulting',
      desc: 'Advise business creators on internal automation pipelines.',
      strategy: 'Offer custom pipeline consulting audits to companies wanting to deploy agent-led scrapers and reports dashboards.',
      color: 'var(--color-magenta)',
      formulaLabel: 'Est. 2 custom enterprise pipeline audits per month at standard rate scaling with channel scale',
      calc: (subs, price, sponsors) => Math.round(1500 + (subs * 10)) + (price * 0) + (sponsors * 0)
    },
    {
      id: 4,
      title: 'Affiliate Commissions',
      desc: 'Recommend premium AI subscriptions, compilers, and database APIs.',
      strategy: 'Earn recurring payouts on compiler subscriptions, Claude APIs, database backends, and cursor-copilots recommendations.',
      color: '#10b981', // Emerald
      formulaLabel: '0.8% active subscriber base using affiliate links generating average $4/mo payout',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 0.008 * 4) + (price * 0) + (sponsors * 0)
    },
    {
      id: 5,
      title: 'Webinar Collabs',
      desc: 'Co-host ticketed hackathons or AI workshops.',
      strategy: 'Run monthly live training webinars teaching quick workflow creation and funneling traffic to courses.',
      color: '#f59e0b', // Gold
      formulaLabel: 'Monthly attendance of 0.25% of subscriber reach at $19 ticket fee',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 0.0025 * 19) + (price * 0) + (sponsors * 0)
    },
    {
      id: 6,
      title: 'Own AI Products',
      desc: 'Build and sell micro templates, logs, and dashboard widgets.',
      strategy: 'Launch standalone tools (like Zoom logs attendance checkers) as micro-SaaS subscriptions for the community.',
      color: '#8b5cf6', // Purple
      formulaLabel: '0.15% subscriber base paying monthly $15 subscription fee for micro-utilities',
      calc: (subs, price, sponsors) => Math.round(subs * 1000 * 0.0015 * 15) + (price * 0) + (sponsors * 0)
    }
  ];

  const activeStream = streams.find(s => s.id === activeStreamId) || streams[0];

  // Calculations
  const activeStreamRev = activeStream.calc(subscribers, coursePrice, sponsorsCount);
  const totalRev = streams.reduce((acc, curr) => acc + curr.calc(subscribers, coursePrice, sponsorsCount), 0);

  return (
    <div style={{ display: 'flex', gap: '20px', width: '100%', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
      {/* Left Column: Simulation Inputs */}
      <div 
        className="glass-panel"
        style={{ 
          width: '280px', 
          flexShrink: 0, 
          padding: '14px 18px', 
          background: 'var(--color-surface)',
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px',
          borderRadius: '12px',
          justifyContent: 'center',
          borderColor: 'rgba(255, 255, 255, 0.06)'
        }}
      >
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '6px' }}>
          <strong style={{ fontSize: '0.78rem', color: '#ffffff', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📊 REVENUE SIMULATOR
          </strong>
        </div>

        {/* Reach Slider */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span>SUBSCRIBER REACH</span>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span>COHORT COURSE PRICE</span>
            <span style={{ color: 'var(--color-magenta)', fontWeight: 'bold' }}>${coursePrice}</span>
          </div>
          <input 
            type="range"
            min="49"
            max="299"
            step="10"
            value={coursePrice}
            onChange={(e) => setCoursePrice(Number(e.target.value))}
            className="custom-range interactive"
            style={{ width: '100%' }}
          />
        </div>

        {/* Sponsors Slider */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span>SPONSORSHIPS / MONTH</span>
            <span style={{ color: 'var(--color-indigo)', fontWeight: 'bold' }}>{sponsorsCount} campaigns</span>
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
      </div>

      {/* Right Column: Dynamic Output */}
      <div style={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Streams Selector (3x2 grid) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {streams.map((s) => {
            const isActive = s.id === activeStreamId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStreamId(s.id)}
                className="interactive"
                style={{
                  padding: '6px 8px',
                  borderRadius: '6px',
                  background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.01)',
                  border: `1.5px solid ${isActive ? s.color : 'rgba(255, 255, 255, 0.05)'}`,
                  color: isActive ? '#ffffff' : '#9ca3af',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? `0 0 10px ${s.color}15` : 'none'
                }}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Selected Stream Details and Projections */}
        <div 
          className="glass-panel"
          style={{
            flexGrow: 1,
            border: `1.5px solid ${activeStream.color}`,
            background: 'linear-gradient(135deg, rgba(13, 17, 28, 0.7) 0%, rgba(255, 255, 255, 0.01) 100%)',
            boxShadow: `0 0 25px ${activeStream.color}0a`,
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '12px',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            minHeight: 0
          }}
        >
          {/* Strategy Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.85rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                {activeStream.title} Strategy
              </strong>
              <span style={{ fontSize: '0.62rem', color: activeStream.color, fontFamily: 'var(--font-mono)' }}>
                STREAM ACTIVE
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.35, margin: '2px 0 0 0' }}>
              {activeStream.strategy}
            </p>
          </div>

          {/* Formulas and Projections Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '16px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '8px 12px', margin: '4px 0' }}>
            {/* Left: Projection Rule */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>PROJECTION METRIC</span>
              <span style={{ fontSize: '0.65rem', color: '#e2e8f0', marginTop: '2px', lineHeight: 1.25 }}>
                {activeStream.formulaLabel}
              </span>
            </div>
            {/* Right: Revenue stats */}
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>EST. MONTHLY STREAM</span>
              <span style={{ fontSize: '1rem', color: activeStream.color, fontWeight: 700, fontFamily: 'var(--font-display)', marginTop: '2px' }}>
                ${activeStreamRev.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Aggregate Footnote Dashboard */}
          <div style={{
            background: 'rgba(99, 102, 241, 0.05)',
            borderLeft: '3px solid var(--color-indigo)',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            marginTop: '2px',
            fontFamily: 'var(--font-display)'
          }}>
            <span>🚀 <strong>Aggregated Projected Revenue:</strong></span>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-cyan)', fontWeight: 800 }}>
              ${totalRev.toLocaleString()} / mo
            </span>
          </div>
        </div>
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
