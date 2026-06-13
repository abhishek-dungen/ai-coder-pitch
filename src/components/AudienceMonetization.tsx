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
          justifyContent: 'flex-start',
          borderColor: 'rgba(255, 255, 255, 0.06)'
        }}
      >
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} style={{ color: 'var(--color-cyan)' }} />
          <strong style={{ fontSize: '0.78rem', color: '#ffffff', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📊 REVENUE SIMULATOR
          </strong>
        </div>

        {/* Reach Slider */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Users size={12} style={{ color: 'var(--color-cyan)' }} />
              SUBSCRIBER REACH
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <DollarSign size={12} style={{ color: 'var(--color-magenta)' }} />
              COHORT COURSE PRICE
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Megaphone size={12} style={{ color: 'var(--color-indigo)' }} />
              SPONSORSHIPS / MONTH
            </span>
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

        {/* Rich Telemetry Sub-panel */}
        <div style={{
          marginTop: '4px',
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '8px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <span style={{ fontSize: '0.62rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', borderBottom: '1px solid rgba(255, 255, 255, 0.03)', paddingBottom: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={10} style={{ color: 'var(--color-cyan)' }} />
            Simulation Telemetry
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4px', fontSize: '0.65rem' }}>
            <span style={{ color: '#94a3b8' }}>Est. Annual Views:</span>
            <span style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{(subscribers * 1000 * 1.2 * 12).toLocaleString()}</span>
            
            <span style={{ color: '#94a3b8' }}>Cohort Students/yr:</span>
            <span style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{Math.round(subscribers * 1000 * 0.003).toLocaleString()}</span>
            
            <span style={{ color: '#94a3b8' }}>High-Intent Leads:</span>
            <span style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{Math.round(subscribers * 1000 * 0.05).toLocaleString()}</span>
          </div>
        </div>

      </div>

      {/* Right Column: Dynamic Output */}
      <div style={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Streams Selector (3x2 grid) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {streams.map((s) => {
            const isActive = s.id === activeStreamId;
            const StreamIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStreamId(s.id)}
                className="interactive"
                style={{
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.01)',
                  border: `1.5px solid ${isActive ? s.color : 'rgba(255, 255, 255, 0.05)'}`,
                  color: isActive ? '#ffffff' : '#9ca3af',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? `0 0 10px ${s.color}15` : 'none'
                }}
              >
                <StreamIcon size={12} style={{ color: isActive ? s.color : '#64748b' }} />
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
            padding: '16px 20px',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ActiveIcon size={16} style={{ color: activeStream.color }} />
                <strong style={{ fontSize: '0.88rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  {activeStream.title} Strategy
                </strong>
              </div>
              <span style={{ 
                fontSize: '0.62rem', 
                background: `${activeStream.color}15`,
                color: activeStream.color, 
                padding: '2px 8px',
                borderRadius: '10px',
                border: `1px solid ${activeStream.color}33`,
                fontWeight: 600,
                fontFamily: 'var(--font-mono)' 
              }}>
                STREAM ACTIVE
              </span>
            </div>
            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.4, margin: '4px 0 0 0' }}>
              {activeStream.strategy}
            </p>
          </div>

          {/* Formulas and Projections Grid: Two Column Detail Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 0.8fr', 
            gap: '16px', 
            margin: '8px 0',
            flexGrow: 1,
            minHeight: 0
          }}>
            {/* Left Box: Math & Revenue Output */}
            <div style={{ 
              background: 'rgba(255,255,255,0.01)', 
              border: '1px solid rgba(255,255,255,0.04)', 
              borderRadius: '8px', 
              padding: '10px 14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                  Projection Metric
                </span>
                <span style={{ fontSize: '0.66rem', color: '#e2e8f0', lineHeight: 1.25, display: 'block' }}>
                  {activeStream.formulaLabel}
                </span>
              </div>
              
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '6px', marginTop: '6px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.58rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', display: 'block' }}>EST. MONTHLY STREAM</span>
                  <span style={{ 
                    fontSize: '1.25rem', 
                    color: activeStream.color, 
                    fontWeight: 800, 
                    fontFamily: 'var(--font-display)', 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '2px',
                    filter: `drop-shadow(0 0 8px ${activeStream.color}33)`
                  }}>
                    ₹{activeStreamRev.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Box: Key Launch Deliverables */}
            <div style={{ 
              background: 'rgba(255,255,255,0.01)', 
              border: '1px solid rgba(255,255,255,0.04)', 
              borderRadius: '8px', 
              padding: '10px 14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: '6px'
            }}>
              <span style={{ fontSize: '0.6rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={10} style={{ color: activeStream.color }} />
                Key Launch Deliverables
              </span>
              <ul style={{ paddingLeft: '0', margin: '2px 0 0 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {activeStream.deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.64rem', color: '#cbd5e1', lineHeight: 1.25 }}>
                    <span style={{ color: activeStream.color, fontSize: '0.65rem', marginTop: '1px' }}>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row: Grand Total */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '2px' }}>
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
              fontFamily: 'var(--font-display)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TrendingUp size={14} style={{ color: 'var(--color-cyan)' }} />
                <span><strong>Aggregated Projected Revenue:</strong></span>
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-cyan)', fontWeight: 800 }}>
                ₹{totalRev.toLocaleString()} / mo
              </span>
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
