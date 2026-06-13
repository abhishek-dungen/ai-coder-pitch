import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, BrainCircuit, ExternalLink } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { SocialMetrics } from './components/SocialMetrics';
import { TimelineMe } from './components/TimelineMe';
import { TerminalPrompt } from './components/TerminalPrompt';
import { ToolSimulatorHorizontal } from './components/ToolSimulatorHorizontal';
import { ContentWorkflow } from './components/ContentWorkflow';
import { ContentPipeline } from './components/ContentPipeline';
import { AudienceList, MonetizationGrid, MilestoneTimeline } from './components/AudienceMonetization';

const slidesData = [
  { id: 'welcome', title: 'Building Everyday AI Tools I Wish Existed', tagline: 'Pitch Deck Introduction' },
  { id: 'context', title: 'Instagram? Been there, done that', tagline: 'Slide 01' },
  { id: 'why-me', title: 'My Journey in Content Creation', tagline: 'Slide 02' },
  { id: 'niche', title: 'My Chosen Niche: Building everyday AI tools I wish existed', tagline: 'Slide 03' },
  { id: 'stack', title: 'Why I chose this niche?', tagline: 'Slide 04' },
  { id: 'proof-horizontal', title: 'Proof of Execution Tools I Already Built', tagline: 'Slide 05' },
  { id: 'workflow', title: 'Core Channel Content Idea', tagline: 'Slide 06' },
  { id: 'pipeline', title: 'The Content wont Dry out.....The ideas below are just the beginning', tagline: 'Slide 07' },
  { id: 'audience', title: 'Target Audience Profile', tagline: 'Slide 08' },
  { id: 'focus', title: 'Primary Six-Month Focus', tagline: 'Slide 09' },
  { id: 'monetize', title: 'Monetization Potential Routes', tagline: 'Slide 10' }
];

export const App: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
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
          <span>This Project 9 Lives X AI_CODING_WITH_ABHISHEK</span>
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
            style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: '850px' }}
          >
            <div className="slide-title-area" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div 
                className="glass-panel" 
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  maxHeight: '450px',
                  background: 'rgba(13,17,28,0.4)'
                }}
              >
                <img 
                  src={`${base}Images/image2.png`} 
                  alt="Building Everyday AI Tools I Wish Existed" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => jumpToSlide(1)} className="btn btn-primary interactive">
                  Swpie Right <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 1: CURRENT CONTEXT */}
        <section className="slide" style={{ padding: '60px 40px 40px 40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr', gap: '12px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Title and Button Block above SocialMetrics */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <h2 className="title-large" style={{ fontSize: '2rem', lineHeight: 1.25, margin: 0 }}>
                Instagram? Been there, <span className="title-accent">done that.</span>
              </h2>
              <div>
                <a 
                  href="https://www.instagram.com/excelbhaiya.abhishek/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary interactive"
                  style={{ 
                    padding: '6px 14px', 
                    fontSize: '0.75rem', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    borderColor: 'rgba(238, 42, 123, 0.3)',
                    background: 'linear-gradient(45deg, rgba(249, 206, 52, 0.1) 0%, rgba(238, 42, 123, 0.1) 50%, rgba(98, 40, 215, 0.1) 100%)',
                    color: '#ffffff',
                    marginTop: '2px'
                  }}
                >
                  <span>Explore Live Channel (@excelbhaiya.abhishek)</span>
                  <ExternalLink size={12} style={{ color: '#ee2a7b' }} />
                </a>
              </div>
            </div>

            {/* SocialMetrics Component (The Block) */}
            <div style={{ width: '100%', flexGrow: 1, minHeight: 0 }}>
              <SocialMetrics />
            </div>

            {/* Text items below SocialMetrics Block */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', marginTop: '2px' }}>
              <div 
                className="glass-panel" 
                style={{ 
                  padding: '8px 12px', 
                  borderColor: 'rgba(6, 182, 212, 0.2)', 
                  background: 'rgba(13, 17, 28, 0.5)',
                  fontSize: '0.8rem',
                  lineHeight: 1.4,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}
              >
                <span style={{ color: 'var(--color-cyan)', fontWeight: 'bold' }}>✔</span>
                <span><strong>Proven Scale:</strong> Built Excel Bhaiya Abhishek from scratch, dominating Hindi-language tech.</span>
              </div>
              <div 
                className="glass-panel" 
                style={{ 
                  padding: '8px 12px', 
                  borderColor: 'rgba(244, 63, 94, 0.2)', 
                  background: 'rgba(13, 17, 28, 0.5)',
                  fontSize: '0.8rem',
                  lineHeight: 1.4,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}
              >
                <span style={{ color: 'var(--color-magenta)', fontWeight: 'bold' }}>✔</span>
                <span><strong>Project 9 Lives: This Project 9 Lives X AI_CODING_WITH_ABHISHEK:</strong> The channel will be brand new, but there will be no learning curve—just a veteran creator pulling the trigger from Day 1.</span>
              </div>
            </div>
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
            style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
          >
            <div className="slide-title-area" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h2 className="title-large" style={{ fontSize: '2rem', whiteSpace: 'nowrap', lineHeight: 1.2 }}>
                My Chosen Niche: <span className="title-accent">Building everyday AI tools I wish existed</span>
              </h2>
              
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-display)', fontWeight: 700, margin: 0 }}>
                Zero code. 100% leverage.
              </h3>
            </div>
            
            <div 
              className="glass-panel" 
              style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxHeight: '420px',
                background: 'rgba(13,17,28,0.7)',
                padding: '6px'
              }}
            >
              <img 
                src={`${base}Images/image3.png`} 
                alt="Niche Concept" 
                style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '400px' }}
              />
            </div>

            <p className="slide-description" style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#d1d5db', maxWidth: '750px', margin: 0 }}>
              I build builders. I show regular people with absolute zero coding knowledge how to forge customized apps that solve real-world problems. Pure execution. Instant impact.
            </p>
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
                (I am a power user of the entire developer ecosystem—from Claude Code, VS Code, Codex, Cursor, Replit, and Claude Cowork, to OpenClaw) I’ve stress-tested them all to build working apps, rogue automations, and bulletproof workflows. The sandbox phase is over—it's time to show the world how it’s actually done
              </p>
            </div>
            <TerminalPrompt />
          </motion.div>
        </section>



        {/* SLIDE 5B: BUILT PROOFS PORTFOLIO HORIZONTAL REDESIGN */}
        <section className="slide" style={{ padding: '70px 40px 60px 40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 className="title-large" style={{ fontSize: '2rem', marginBottom: '4px' }}>
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
        <section className="slide" style={{ padding: '70px 40px 60px 40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 className="title-large" style={{ fontSize: '2rem', marginBottom: '4px' }}>
                  Core Journey of <span className="title-accent">Each Video</span>
                </h2>
                <p className="slide-description" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '0.85rem', color: '#9ca3af' }}>
                  Each video takes the viewer on a complete journey from pain point to practical solution.
                </p>
              </div>
              <div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                <ContentWorkflow />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 7: PIPELINE OF IDEAS */}
        <section className="slide" style={{ padding: '70px 40px 60px 40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 className="title-large" style={{ fontSize: '1.8rem', marginBottom: '4px' }}>
                  The Content wont Dry out.....<span className="title-accent">The ideas below are just the beginning</span>
                </h2>
              </div>
              <div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                <ContentPipeline />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 8: TARGET AUDIENCE */}
        <section className="slide" style={{ padding: '70px 40px 60px 40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 className="title-large" style={{ fontSize: '2rem', marginBottom: '4px' }}>
                  Target <span className="title-accent">Audience</span>
                </h2>
              </div>
              <div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                <AudienceList />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 9: SIX MONTH FOCUS */}
        <section className="slide" style={{ padding: '70px 40px 60px 40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 className="title-large" style={{ fontSize: '2rem', marginBottom: '4px' }}>
                  Six-Month <span className="title-accent">Focus</span>
                </h2>
              </div>
              <div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                <MilestoneTimeline />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 10: MONETIZATION POTENTIAL */}
        <section className="slide" style={{ padding: '70px 40px 60px 40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="slide-content-wrapper"
            style={{ gridTemplateColumns: '1fr' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', gap: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 className="title-large" style={{ fontSize: '2rem', marginBottom: '4px' }}>
                  Future <span className="title-accent">Monetization</span>
                </h2>
              </div>
              <div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                <MonetizationGrid />
              </div>
            </div>
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
