import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Heart, MessageCircle, Share2, Bookmark, 
  Grid, Settings, ArrowLeft, ChevronRight, 
  Pin, ExternalLink, Plus
} from 'lucide-react';

interface ReelData {
  id: number;
  title: string;
  viewsText: string;
  viewsCount: number;
  isPinned: boolean;
  hookText: string;
  bodyText: string;
  ctaText: string;
  likes: string;
  comments: string;
  saves: string;
  shares: string;
  bgPos: string;
  instagramUrl?: string;
}

const reelsDataset: ReelData[] = [
  {
    id: 1,
    title: "Excel में XLOOKUP से Data Combine करने का आसान तरीका.",
    viewsText: "122K",
    viewsCount: 122000,
    isPinned: true,
    hookText: "⚡ Excel combine data secret no one shows you!",
    bodyText: "📊 Write =XLOOKUP with range arrays to stitch tables in 2 seconds.",
    ctaText: "👉 Tap live reel link below to follow @excelbhaiya.abhishek!",
    likes: "12.4K",
    comments: "428",
    saves: "5.2K",
    shares: "1.8K",
    bgPos: "0% 56.6%",
    instagramUrl: "https://www.instagram.com/reel/DYPP8eOD6WQ/?igsh=MTV6eGw0b293eG82cw=="
  },
  {
    id: 2,
    title: "Welcome to my Page Start Here",
    viewsText: "120K",
    viewsCount: 120000,
    isPinned: true,
    hookText: "⚡ New here? Let me show you how to dominate spreadsheet workflows.",
    bodyText: "📊 Over the next 90 days, we are building custom AI tools to double your speed.",
    ctaText: "👉 Tap the link in my bio to register for our upcoming 3-hour LIVE Masterclass!",
    likes: "10.8K",
    comments: "392",
    saves: "4.8K",
    shares: "1.2K",
    bgPos: "50% 56.6%"
  },
  {
    id: 3,
    title: "इस Resume Trick से Excel Jobs में Shortlist होने के Chances बढ़ जाएँगे.",
    viewsText: "1.9K",
    viewsCount: 1933,
    isPinned: true,
    hookText: "⚡ Shortlist your resume for high-paying Excel jobs in seconds.",
    bodyText: "📊 Align keyword metrics with AI, and export a perfectly matched layout.",
    ctaText: "👉 Share this with a friend who is actively looking for job roles!",
    likes: "185",
    comments: "24",
    saves: "98",
    shares: "45",
    bgPos: "100% 56.6%"
  }
];

export const SocialMetrics: React.FC = () => {
  const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSegment, setActiveSegment] = useState<'hook' | 'body' | 'cta' | null>(null);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; x: number; type: string }[]>([]);
  const [likesCounter, setLikesCounter] = useState(0);

  // Get base path dynamically for GitHub Pages / Subfolders
  const base = import.meta.env.BASE_URL || '/';
  const profileImg = `${base}profile_view.jpeg`;

  // Sync Reels Simulator
  useEffect(() => {
    let timer: number;
    if (isPlaying && selectedReelIndex !== null) {
      timer = window.setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1.5;
          if (next >= 100) {
            setIsPlaying(false);
            setActiveSegment(null);
            return 0;
          }
          if (next < 25) {
            setActiveSegment('hook');
          } else if (next < 80) {
            setActiveSegment('body');
          } else {
            setActiveSegment('cta');
          }
          return next;
        });

        if (Math.random() < 0.18) {
          spawnEmoji('❤️');
        }
      }, 100);
    } else {
      setActiveSegment(null);
    }
    return () => clearInterval(timer);
  }, [isPlaying, selectedReelIndex]);

  const spawnEmoji = (type: string) => {
    const id = Date.now() + Math.random();
    const x = Math.random() * 80 + 10;
    setFloatingEmojis((prev) => [...prev, { id, x, type }]);
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((item) => item.id !== id));
    }, 2000);
  };

  const handleActionClick = (action: 'like' | 'save' | 'share') => {
    if (selectedReelIndex === null) return;
    if (action === 'like') {
      setLikesCounter(prev => prev + 1);
      spawnEmoji('❤️');
    } else if (action === 'save') {
      spawnEmoji('💾');
    } else if (action === 'share') {
      spawnEmoji('🚀');
    }
  };

  const selectReel = (index: number) => {
    setSelectedReelIndex(index);
    setProgress(0);
    setIsPlaying(true);
    setLikesCounter(0);
  };

  const activeReel = selectedReelIndex !== null ? reelsDataset[selectedReelIndex] : null;

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      gap: '16px', 
      height: '355px', 
      width: '100%',
      justifyContent: 'center',
      alignItems: 'stretch',
      overflow: 'hidden'
    }}>
      
      {/* =========================================================
          BLOCK 1: INSTAGRAM PROFILE MOCKUP (WITH INTEGRATED PLAYER)
          ========================================================= */}
      <div className="glass-panel" style={{
        flex: 1.1,
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        background: '#090a0f',
        borderColor: 'var(--color-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Instagram Header (shows profile title or Player Back Button) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingBottom: '8px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#090a0f',
          minHeight: '28px'
        }}>
          {activeReel ? (
            <button 
              onClick={() => { setSelectedReelIndex(null); setIsPlaying(false); }}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                padding: '2px 6px',
                fontSize: '0.62rem',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={10} /> Back to Profile Grid
            </button>
          ) : (
            <span style={{ fontWeight: 700, fontSize: '0.78rem', color: 'white' }}>
              excelbhaiya.abhishek
            </span>
          )}
          <Settings size={12} style={{ color: 'white' }} />
        </div>

        {/* Profile Inner Content Window (No Vertical Scrolling) */}
        <div style={{ flex: 1, padding: '8px 0 0 0', background: '#090a0f', position: 'relative', overflow: 'hidden' }}>
          
          <AnimatePresence mode="wait">
            {!activeReel ? (
              // MAIN PROFILE GRID VIEW
              <motion.div 
                key="profile-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
              >
                {/* Stats row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #f9ce34 10%, #ee2a7b 50%, #6228d7 90%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: '#090a0f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        border: '2px solid #090a0f'
                      }}>
                        AK
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      background: 'var(--color-cyan)',
                      borderRadius: '50%',
                      width: '12px',
                      height: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '7px'
                    }}>
                      <Plus size={6} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>137</div>
                      <div style={{ fontSize: '0.55rem', color: '#9ca3af' }}>posts</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>13.6K</div>
                      <div style={{ fontSize: '0.55rem', color: '#9ca3af' }}>followers</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>1</div>
                      <div style={{ fontSize: '0.55rem', color: '#9ca3af' }}>following</div>
                    </div>
                  </div>
                </div>

                {/* Profile Bio info */}
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white' }}>Abhishek Kumar</div>
                  <div style={{ fontSize: '0.65rem', color: '#e5e7eb', marginTop: '1px', display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1.2 }}>
                    <div>👨‍💻 8+ Years of Corporate Experience</div>
                    <div>💯 New Excel Hack Every Alternate Day</div>
                    <div>👇 Excel +AI Career LIVE Masterclass</div>
                    <a href="http://www.excelbhaiyaabhishek.com/excel-career-3hr" target="_blank" rel="noreferrer" style={{ color: 'var(--color-cyan)', display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none', fontSize: '0.62rem' }}>
                      <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '170px' }}>www.excelbhaiyaabhishek.com</span>
                      <ExternalLink size={8} />
                    </a>
                  </div>
                </div>

                {/* Reels tab separator */}
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3px', display: 'flex', justifyContent: 'center' }}>
                  <Grid size={12} style={{ color: 'white' }} />
                </div>

                {/* Single Row of 3 Pinned Reels */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginTop: '2px' }}>
                  {reelsDataset.map((reel, index) => (
                    <div 
                      key={reel.id} 
                      onClick={() => selectReel(index)}
                      className="interactive reel-grid-cell"
                      style={{ 
                        aspectRatio: '9/16', 
                        backgroundImage: `url(${profileImg})`,
                        backgroundSize: '304% auto',
                        backgroundPosition: reel.bgPos,
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '3px',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '4px'
                      }}
                    >
                      {reel.isPinned && (
                        <div style={{ position: 'absolute', top: '3px', right: '3px', background: 'rgba(0,0,0,0.6)', padding: '2px', borderRadius: '3px', display: 'flex', alignItems: 'center' }}>
                          <Pin size={8} style={{ color: 'white', transform: 'rotate(45deg)' }} />
                        </div>
                      )}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                      }}
                      className="hover-overlay"
                      >
                        <Play size={14} fill="white" style={{ color: 'white' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // SIMULATED REEL PLAYER OVERLAY
              <motion.div
                key="reel-player"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '100%', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <h4 style={{ fontSize: '0.68rem', fontWeight: 700, color: 'white', lineHeight: 1.2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {activeReel.title}
                  </h4>
                  
                  {activeReel.instagramUrl && (
                    <a 
                      href={activeReel.instagramUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px',
                        background: 'linear-gradient(45deg, #f9ce34 10%, #ee2a7b 50%, #6228d7 90%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        padding: '4px 8px',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(238, 42, 123, 0.2)',
                        textAlign: 'center'
                      }}
                      className="interactive"
                    >
                      <span>View Live Reel on Instagram</span>
                      <ExternalLink size={8} />
                    </a>
                  )}
                </div>

                {/* Simulated Screen */}
                <div style={{ 
                  height: '80px', 
                  background: '#040508', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '6px'
                }}>
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle, var(--color-cyan) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

                  {isPlaying ? (
                    <div style={{ zIndex: 1, textAlign: 'center' }}>
                      <div className="animate-float" style={{ fontSize: '1.4rem', marginBottom: '1px' }}>
                        {activeSegment === 'hook' && '⚡'}
                        {activeSegment === 'body' && '📊'}
                        {activeSegment === 'cta' && '👉'}
                      </div>
                      <div style={{ fontSize: '0.62rem', color: 'white', fontWeight: 600, padding: '0 4px', lineHeight: 1.2 }}>
                        {activeSegment === 'hook' && activeReel.hookText}
                        {activeSegment === 'body' && activeReel.bodyText}
                        {activeSegment === 'cta' && activeReel.ctaText}
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="btn btn-primary"
                      style={{ borderRadius: '50%', width: '30px', height: '30px', padding: 0, justifyContent: 'center', zIndex: 2 }}
                    >
                      <Play size={10} fill="currentColor" style={{ marginLeft: '1px' }} />
                    </button>
                  )}

                  {/* Floating hearts */}
                  {floatingEmojis.map((emoji) => (
                    <span
                      key={emoji.id}
                      style={{
                        position: 'absolute',
                        bottom: '4px',
                        left: `${emoji.x}%`,
                        fontSize: '1rem',
                        opacity: 0,
                        transform: 'translateY(0)',
                        animation: 'floatUp 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards',
                        pointerEvents: 'none',
                        zIndex: 10
                      }}
                    >
                      {emoji.type}
                    </span>
                  ))}

                  {/* Progress timeline */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    height: '2px', 
                    background: 'linear-gradient(90deg, var(--color-cyan), var(--color-indigo))', 
                    width: `${progress}%`, 
                    transition: 'width 0.1s linear' 
                  }} />
                </div>

                {/* Progress script labels */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.6rem', lineHeight: 1.15 }}>
                  <div style={{ 
                    padding: '3px 6px', 
                    borderRadius: '3px',
                    borderLeft: activeSegment === 'hook' ? '2px solid var(--color-magenta)' : '2px solid transparent',
                    background: activeSegment === 'hook' ? 'rgba(244, 63, 94, 0.05)' : 'rgba(255,255,255,0.01)'
                  }}>
                    <strong style={{ color: 'var(--color-magenta)' }}>1. Hook (0-3s)</strong>: Intriguing start.
                  </div>
                  <div style={{ 
                    padding: '3px 6px', 
                    borderRadius: '3px',
                    borderLeft: activeSegment === 'body' ? '2px solid var(--color-cyan)' : '2px solid transparent',
                    background: activeSegment === 'body' ? 'rgba(6, 182, 212, 0.05)' : 'rgba(255,255,255,0.01)'
                  }}>
                    <strong style={{ color: 'var(--color-cyan)' }}>2. Body (3-12s)</strong>: Fast prompt build.
                  </div>
                  <div style={{ 
                    padding: '3px 6px', 
                    borderRadius: '3px',
                    borderLeft: activeSegment === 'cta' ? '2px solid var(--color-indigo)' : '2px solid transparent',
                    background: activeSegment === 'cta' ? 'rgba(99, 102, 241, 0.05)' : 'rgba(255,255,255,0.01)'
                  }}>
                    <strong style={{ color: 'var(--color-indigo)' }}>3. CTA (12-15s)</strong>: CTA conversions.
                  </div>
                </div>

                {/* Social interactive strip */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  borderTop: '1px solid rgba(255,255,255,0.05)', 
                  paddingTop: '4px',
                  fontSize: '0.6rem'
                }}>
                  <button onClick={() => handleActionClick('like')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Heart size={10} fill={likesCounter > 0 ? 'var(--color-magenta)' : 'none'} style={{ color: 'var(--color-magenta)' }} />
                    <span>{likesCounter > 0 ? (parseFloat(activeReel.likes) + likesCounter/1000).toFixed(2) + 'K' : activeReel.likes}</span>
                  </button>
                  <button className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <MessageCircle size={10} style={{ color: 'var(--color-cyan)' }} /> <span>{activeReel.comments}</span>
                  </button>
                  <button onClick={() => handleActionClick('save')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Bookmark size={10} style={{ color: '#eab308' }} /> <span>{activeReel.saves}</span>
                  </button>
                  <button onClick={() => handleActionClick('share')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Share2 size={10} style={{ color: 'var(--color-indigo)' }} /> <span>{activeReel.shares}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>

      {/* =========================================================
          BLOCK 2: INSTAGRAM PROFESSIONAL DASHBOARD
          ========================================================= */}
      <div className="glass-panel" style={{
        flex: 1,
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        background: '#090a0f',
        borderColor: 'var(--color-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '100%',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Header bar */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          paddingBottom: '8px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: '#090a0f',
          minHeight: '28px'
        }}>
          <span style={{ fontWeight: 700, fontSize: '0.78rem', color: 'white' }}>
            Professional dashboard
          </span>
        </div>

        {/* Dashboard Content (No vertical scrolling) */}
        <div style={{ flex: 1, padding: '8px 0 0 0', background: '#090a0f', display: 'flex', flexDirection: 'column', gap: '8px', overflow: 'hidden' }}>
          
          {/* Insights horizontal row section */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '3px' }}>
              <span style={{ fontSize: '0.62rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Insights</span>
              <span style={{ fontSize: '0.55rem', color: '#6b7280' }}>Last 30 days</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 6px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontSize: '0.55rem', color: '#9ca3af' }}>Views</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'white', marginTop: '1px' }}>12.3L <span style={{ color: '#22c55e', fontSize: '0.6rem' }}>↗</span></span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 6px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontSize: '0.55rem', color: '#9ca3af', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Reached</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'white', marginTop: '1px' }}>4.6L <span style={{ color: '#22c55e', fontSize: '0.6rem' }}>↗</span></span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 6px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontSize: '0.55rem', color: '#9ca3af', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Net Foll.</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'white', marginTop: '1px' }}>+8.3T <span style={{ color: '#22c55e', fontSize: '0.6rem' }}>↗</span></span>
              </div>
            </div>
          </div>

          {/* Next Steps block */}
          <div>
            <h3 style={{ fontSize: '0.62rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Next steps</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '3px' }}>
              <div style={{ display: 'flex', gap: '6px', padding: '4px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ minWidth: '18px', height: '18px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--color-cyan)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem' }}>🎙️</div>
                <div>
                  <h4 style={{ fontSize: '0.62rem', fontWeight: 700, color: 'white', lineHeight: 1.1 }}>Edit audio like a pro</h4>
                  <p style={{ fontSize: '0.52rem', color: '#9ca3af', marginTop: '1px', lineHeight: 1.1 }}>Get studio-quality sound with enhance tools.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px', padding: '4px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ minWidth: '18px', height: '18px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem' }}>🔥</div>
                <div>
                  <h4 style={{ fontSize: '0.62rem', fontWeight: 700, color: 'white', lineHeight: 1.1 }}>Find hit with trial reels</h4>
                  <p style={{ fontSize: '0.52rem', color: '#9ca3af', marginTop: '1px', lineHeight: 1.1 }}>Check performance with non-followers first.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Tools list */}
          <div>
            <h3 style={{ fontSize: '0.62rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Your tools</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', overflow: 'hidden', marginTop: '3px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px', background: '#0d0f17', fontSize: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white' }}>
                  <span>📊</span>
                  <span>Monthly recap</span>
                  <span style={{ background: '#2563eb', color: 'white', padding: '1px 3px', borderRadius: '6px', fontSize: '0.45rem', fontWeight: 'bold' }}>New</span>
                </div>
                <ChevronRight size={8} style={{ color: '#6b7280' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px', background: '#0d0f17', fontSize: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white' }}>
                  <span>💡</span>
                  <span>Best practices</span>
                </div>
                <ChevronRight size={8} style={{ color: '#6b7280' }} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CSS float up animation and grid overlays */}
      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.6);
          }
          15% {
            opacity: 1;
            transform: translateY(-15px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-90px) scale(0.8);
          }
        }
        .reel-grid-cell:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default SocialMetrics;
