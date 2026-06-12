import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, BrainCircuit, ExternalLink } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { SocialMetrics } from './components/SocialMetrics';
import { TimelineMe } from './components/TimelineMe';
import { TerminalPrompt } from './components/TerminalPrompt';
import { ToolSimulator } from './components/ToolSimulator';
import { ToolSimulatorHorizontal } from './components/ToolSimulatorHorizontal';
import { ContentWorkflow } from './components/ContentWorkflow';
import { ContentPipeline } from './components/ContentPipeline';
import { AudienceList, MonetizationGrid, MilestoneTimeline } from './components/AudienceMonetization';

const slidesData = [
  { id: 'welcome', title: 'Building Everyday AI Tools I Wish Existed', tagline: 'Pitch Deck Introduction' },
  { id: 'context', title: 'Instagram? Been there, created that, got the engagement.', tagline: 'Slide 01' },
  { id: 'why-me', title: 'My Experience in Content creation', tagline: 'Slide 02' },
  { id: 'niche', title: 'My Chosen Niche: AI + ML', tagline: 'Slide 03' },
  { id: 'stack', title: 'Why I chose this niche?', tagline: 'Slide 04' },
  { id: 'proof', title: 'Proof of Execution & Built Tools', tagline: 'Slide 05' },
  { id: 'proof-horizontal', title: 'Proof of Execution Tools I Already Built', tagline: 'Slide 05B' },
  { id: 'workflow', title: 'Core Channel Content Idea', tagline: 'Slide 06' },
  { id: 'pipeline', title: 'Why Content Will Not Dry Out', tagline: 'Slide 07' },
  { id: 'audience', title: 'Target Audience Profile', tagline: 'Slide 08' },
  { id: 'monetize', title: 'Monetization Potential Routes', tagline: 'Slide 09' },
  { id: 'focus', title: 'Primary Six-Month Focus', tagline: 'Slide 10' }
];

export const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Sync state with scrolling position
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = containerRef.current.scrollLeft;
    const slideWidth = containerRef.current.clientWidth;
    const newSlide = Math.round(scrollPosition / slideWidth);
    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide);
    }
  };

  const jumpToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < slidesData.length - 1) {
        jumpToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        jumpToSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <>
      {/* Background Particles & Interactive Cursor */}
      <ParticleBackground />
      <CustomCursor />

      {/* Global Header */}
      <header>
        <div className="logo interactive" onClick={() => jumpToSlide(0)}>
          <BrainCircuit size={22} style={{ color: 'var(--color-cyan)' }} />
          <span>This AI_CODING_WITH_ABHISHEK</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>
          <span>SCROLL RIGHT ➔</span>
        </div>
      </header>

      {/* Horizontal Slides Shell */}
      <div 
        className="app-container" 
        ref={containerRef}
        onScroll={handleScroll}
      >
        {/* SLIDE 0: WELCOME HERO */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="slide-content-wrapper"
          >
            <div className="slide-title-area">
              <span className="tagline">
                <Sparkles size={14} /> This AI_CODING_WITH_ABHISHEK
              </span>
              <h1 className="title-large">
                Building Everyday <span className="title-accent">AI Tools</span> I Wish Existed
              </h1>
              <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                <button onClick={() => jumpToSlide(1)} className="btn btn-primary interactive">
                  Explore Pitch <ArrowRight size={16} />
                </button>
                <button onClick={() => jumpToSlide(5)} className="btn btn-secondary interactive">
                  View Built Proofs
                </button>
              </div>
            </div>

            <div className="glass-panel" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
              minHeight: '300px',
              border: '1px dashed var(--color-cyan)',
              background: 'linear-gradient(135deg, rgba(13,17,28,0.7) 0%, rgba(6,182,212,0.05) 100%)'
            }}>
              <BrainCircuit size={70} className="animate-float" style={{ color: 'var(--color-cyan)', filter: 'drop-shadow(0 0 15px var(--color-cyan-glow))' }} />
              <h2 style={{ fontSize: '1.4rem', color: 'white', marginTop: '24px', fontFamily: 'var(--font-display)', textAlign: 'center' }}>
                AI + ML Development Channel
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center', maxWidth: '320px', marginTop: '8px', lineHeight: 1.4 }}>
                Bridging real-world execution bottlenecks with educational storytelling.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 1: CURRENT CONTEXT */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
          >
            <div className="slide-title-area">
              <h2 className="title-large" style={{ fontSize: '2rem', lineHeight: 1.25 }}>
                Instagram? Been there, created that, got the <span className="title-accent">engagement.</span>
              </h2>
              <p className="slide-description">
                I’m a seasoned creator who speaks fluent 'Algorithm.' I don't test the waters; I dive right in.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#9ca3af', fontSize: '0.88rem', marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-cyan)', marginTop: '2px' }}>✔</span>
                  <span><strong>Proven Scale:</strong> Built Excel Bhaiya Abhishek from scratch, dominating Hindi-language tech.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-cyan)', marginTop: '2px' }}>✔</span>
                  <span><strong>Mass Appeal:</strong> Captured the massive Hindi heartland using pure organic distribution.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-cyan)', marginTop: '2px' }}>✔</span>
                  <span><strong>Project 9 Lives: AI_CODING_WITH_ABHISHEK:</strong> The channel will be brand new, but there will be no learning curve—just a veteran creator pulling the trigger from Day 1.</span>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a 
                  href="https://www.instagram.com/excelbhaiya.abhishek/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary interactive"
                  style={{ 
                    padding: '8px 16px', 
                    fontSize: '0.8rem', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    borderColor: 'rgba(238, 42, 123, 0.3)',
                    background: 'linear-gradient(45deg, rgba(249, 206, 52, 0.1) 0%, rgba(238, 42, 123, 0.1) 50%, rgba(98, 40, 215, 0.1) 100%)',
                    color: '#ffffff'
                  }}
                >
                  <span>Explore Live Channel (@excelbhaiya.abhishek)</span>
                  <ExternalLink size={12} style={{ color: '#ee2a7b' }} />
                </a>
              </div>
            </div>
            <SocialMetrics />
          </motion.div>
        </section>

        {/* SLIDE 2: WHY ME? */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <TimelineMe />
          </motion.div>
        </section>

        {/* SLIDE 3: CHOSEN NICHE */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr', maxWidth: '800px', textAlign: 'center' }}
          >
            <div className="slide-title-area" style={{ alignItems: 'center' }}>
              <h2 className="title-large" style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
                My Chosen Niche: <span className="title-accent">Building everyday AI tools I wish existed</span>
              </h2>
              
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-display)', marginTop: '14px', fontWeight: 700 }}>
                Zero code. 100% leverage.
              </h3>
              
              <p className="slide-description" style={{ fontSize: '1rem', lineHeight: 1.6, marginTop: '8px', maxWidth: '600px' }}>
                I build builders. I show regular people with absolute zero coding knowledge how to forge customized apps that solve real-world problems. Pure execution. Instant impact.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 4: WHY NICHE WORKS (STACK) */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '0.8fr 1.2fr' }}
          >
            <div className="slide-title-area">
              <h2 className="title-large" style={{ fontSize: '2.3rem', lineHeight: 1.25 }}>
                Why I chose <span className="title-accent">this niche?</span>
              </h2>
              <p className="slide-description" style={{ fontSize: '1.05rem', color: 'var(--color-cyan)', fontWeight: 600, marginTop: '14px', lineHeight: 1.4, fontStyle: 'italic', borderLeft: '3px solid var(--color-cyan)', paddingLeft: '12px' }}>
                "I don’t just test AI tools. I push them to their absolute limits."
              </p>
              <p style={{ fontSize: '0.86rem', color: '#d1d5db', lineHeight: 1.6, marginTop: '14px' }}>
                I am a power user of the entire developer ecosystem—from Cursor, Replit, and VS Code to Claude Code, Claude cowork, openclaw and Codex. I’ve stress-tested them all to build working apps, rogue automations, and bulletproof workflows. The sandbox phase is over—it's time to show the world how it’s actually done
              </p>
            </div>
            <TerminalPrompt />
          </motion.div>
        </section>

        {/* SLIDE 5: BUILT PROOFS PORTFOLIO */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '0.8fr 1.2fr' }}
          >
            <div className="slide-title-area">
              <span className="tagline">Slide 05 • Proof of Execution</span>
              <h2 className="title-large">Tools Already <span className="title-accent">Built</span></h2>
              <p className="slide-description">
                I have developed multiple functional systems using AI-assisted coding. These serve as live case-study proofs in the pitch.
              </p>
              <p style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
                Select a tool in the interactive control deck to simulate its features, metrics tables, CSV parsers, or dashboard layouts.
              </p>
            </div>
            <ToolSimulator />
          </motion.div>
        </section>

        {/* SLIDE 5B: BUILT PROOFS PORTFOLIO HORIZONTAL REDESIGN */}
        <section className="slide" style={{ padding: '80px 60px 30px 60px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 className="title-large" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                  Proof of Execution <span className="title-accent">Tools I Already Built</span>
                </h2>
              </div>
              <div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                <ToolSimulatorHorizontal />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 6: CORE CONTENT IDEA WORKFLOW */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
          >
            <div className="slide-title-area">
              <span className="tagline">Slide 06 • Video Strategy</span>
              <h2 className="title-large">Core Content <span className="title-accent">Idea</span></h2>
              <p className="slide-description">
                Each video takes the viewer on a complete journey from pain point to practical solution.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.5 }}>
                The audience sees the full flow: **Problem ➔ Idea ➔ Prompt ➔ AI Workflow ➔ Build Process ➔ Product ➔ Use Case ➔ Benefit**.
              </p>
            </div>
            <ContentWorkflow />
          </motion.div>
        </section>

        {/* SLIDE 7: PIPELINE OF IDEAS */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
          >
            <div className="slide-title-area">
              <span className="tagline">This AI_CODING_WITH_ABHISHEK</span>
              <h2 className="title-large">Content Won't <span className="title-accent">Dry Out</span></h2>
              <p className="slide-description">
                Every person has workflows, spreadsheets, and routines. Everyday life itself becomes the content pipeline.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                Filter through some of the 20+ tool categories on the right to view standard prompt templates.
              </p>
            </div>
            <ContentPipeline />
          </motion.div>
        </section>

        {/* SLIDE 8: TARGET AUDIENCE */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
          >
            <div className="slide-title-area">
              <span className="tagline">This AI_CODING_WITH_ABHISHEK</span>
              <h2 className="title-large">Target <span className="title-accent">Audience</span></h2>
              <p className="slide-description">
                AI enthusiasts, tech-curious professionals, freelancers, creators, and students.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.5 }}>
                Because the content focuses on practical, visual web tools and code workflows, the channel attracts a high-quality audience base with strong retention and spending capacity.
              </p>
            </div>
            <AudienceList />
          </motion.div>
        </section>

        {/* SLIDE 9: MONETIZATION POTENTIAL */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
          >
            <div className="slide-title-area">
              <span className="tagline">This AI_CODING_WITH_ABHISHEK</span>
              <h2 className="title-large">Future <span className="title-accent">Monetization</span></h2>
              <p className="slide-description">
                Multiple avenues open up once trust and community recall are established.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.5 }}>
                Including courses on AI building, consulting, sponsorships from AI developer platforms, affiliates, and launching our own micro-SaaS tools.
              </p>
            </div>
            <MonetizationGrid />
          </motion.div>
        </section>

        {/* SLIDE 10: SIX MONTH FOCUS */}
        <section className="slide">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
          >
            <div className="slide-title-area">
              <span className="tagline">This AI_CODING_WITH_ABHISHEK</span>
              <h2 className="title-large">Six-Month <span className="title-accent">Focus</span></h2>
              <p className="slide-description">
                For the first six months, focus is on consistency, proof of skill, and community trust.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.5 }}>
                The goal is that viewers start associating me with AI coding, building useful tools, and solving everyday problems.
              </p>
            </div>
            <MilestoneTimeline />
          </motion.div>
        </section>
      </div>

      {/* Page Navigation Indicators Dots (Bottom) */}
      <div className="page-indicators">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => jumpToSlide(index)}
            className={`indicator-dot interactive ${currentSlide === index ? 'active' : ''}`}
            title={slide.title}
          />
        ))}
      </div>

      {/* Navigation Arrows Controls (Bottom Right) */}
      <div className="slide-arrows">
        <button 
          onClick={() => jumpToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="nav-arrow interactive"
          title="Previous Slide"
        >
          <ArrowLeft size={18} />
        </button>
        <button 
          onClick={() => jumpToSlide(currentSlide + 1)}
          disabled={currentSlide === slidesData.length - 1}
          className="nav-arrow interactive"
          title="Next Slide"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </>
  );
};

export default App;
