import React, { useState, useEffect } from 'react';
import { Play, Heart, MessageCircle, Share2, Bookmark, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export const SocialMetrics: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'hook' | 'body' | 'cta' | null>(null);
  const [heartsCount, setHeartsCount] = useState(12400);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; x: number; type: string }[]>([]);
  const [progress, setProgress] = useState(0);

  // Stats Counters
  const [followers, setFollowers] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    let start = 0;
    const endF = 45200; // 45.2K followers
    const endV = 890000; // 890K views
    const duration = 1500;
    const incrementF = Math.ceil(endF / (duration / 16));
    const incrementV = Math.ceil(endV / (duration / 16));

    const timer = setInterval(() => {
      start += 16;
      setFollowers((prev) => Math.min(prev + incrementF, endF));
      setViews((prev) => Math.min(prev + incrementV, endV));
      if (start >= duration) {
        clearInterval(timer);
        setFollowers(endF);
        setViews(endV);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  // Video play simulator timer
  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          if (next >= 100) {
            setIsPlaying(false);
            setActiveSegment(null);
            return 0;
          }
          // Segment transitions based on play percentage
          if (next < 25) {
            setActiveSegment('hook');
          } else if (next < 80) {
            setActiveSegment('body');
          } else {
            setActiveSegment('cta');
          }
          return next;
        });

        // Occasional floating emoji while playing
        if (Math.random() < 0.15) {
          spawnEmoji('❤️');
        }
      }, 150);
    } else {
      setActiveSegment(null);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const spawnEmoji = (type: string) => {
    const id = Date.now() + Math.random();
    const x = Math.random() * 80 + 10; // 10% to 90% width
    setFloatingEmojis((prev) => [...prev, { id, x, type }]);
    
    // Clean up after 2 seconds
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((item) => item.id !== id));
    }, 2000);
  };

  const handleActionClick = (action: 'like' | 'save' | 'share') => {
    if (action === 'like') {
      setHeartsCount(prev => prev + 1);
      spawnEmoji('❤️');
    } else if (action === 'save') {
      spawnEmoji('💾');
    } else if (action === 'share') {
      spawnEmoji('🚀');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Top metrics summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
          <div style={{ padding: '10px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '10px', color: 'var(--color-cyan)' }}>
            <Users size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>FOLLOWERS</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              {(followers / 1000).toFixed(1)}K+
            </div>
          </div>
        </div>
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
          <div style={{ padding: '10px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '10px', color: 'var(--color-indigo)' }}>
            <TrendingUp size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>AVG REEL VIEWS</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              {(views / 1000).toFixed(0)}K+
            </div>
          </div>
        </div>
      </div>

      {/* Main interaction panels: Video Mockup + Script Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px', flexGrow: 1, minHeight: 0 }}>
        {/* Reels Mockup */}
        <div className="glass-panel" style={{ 
          padding: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          background: 'rgba(5, 6, 10, 0.8)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top simulated overlay */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.75rem', color: '#9ca3af', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
            <span>@excel_ai_productivity</span>
            <span style={{ color: 'var(--color-cyan)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--color-cyan)', borderRadius: '50%', display: 'inline-block' }}></span> Active
            </span>
          </div>

          {/* Interactive Player Screen */}
          <div style={{ 
            width: '100%', 
            height: '240px', 
            background: 'linear-gradient(45deg, #090a0f 0%, #171926 100%)', 
            borderRadius: '12px', 
            margin: '12px 0', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            border: '1px solid var(--color-border)',
            overflow: 'hidden'
          }}>
            {/* Visual background simulation grids */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.15,
              backgroundImage: 'radial-gradient(var(--color-indigo) 1px, transparent 0)',
              backgroundSize: '16px 16px',
            }} />

            {/* Video content display */}
            {isPlaying ? (
              <div style={{ textAlign: 'center', zIndex: 1, padding: '20px' }}>
                <div className="animate-float" style={{ fontSize: '3rem', marginBottom: '10px' }}>
                  {activeSegment === 'hook' && '⚡'}
                  {activeSegment === 'body' && '📊'}
                  {activeSegment === 'cta' && '👉'}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-cyan)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Simulating Playback
                </div>
                <div style={{ fontSize: '0.9rem', color: '#ffffff', marginTop: '8px', fontWeight: 600 }}>
                  {activeSegment === 'hook' && '"Stop wasting hours cleaning raw data..."'}
                  {activeSegment === 'body' && '"Here is one prompt that formats all CSVs..."'}
                  {activeSegment === 'cta' && '"Follow for daily AI tools build logs!"'}
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setIsPlaying(true)} 
                className="btn btn-primary interactive" 
                style={{ 
                  borderRadius: '50%', 
                  width: '60px', 
                  height: '60px', 
                  justifyContent: 'center', 
                  padding: 0, 
                  zIndex: 2,
                  boxShadow: '0 0 20px var(--color-indigo-glow)'
                }}
              >
                <Play size={24} style={{ marginLeft: '4px' }} />
              </button>
            )}

            {/* Progress line */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', background: 'linear-gradient(90deg, var(--color-cyan), var(--color-indigo))', width: `${progress}%`, transition: 'width 0.15s linear' }} />

            {/* Floating emojis overlay */}
            {floatingEmojis.map((emoji) => (
              <span
                key={emoji.id}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: `${emoji.x}%`,
                  fontSize: '1.8rem',
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
          </div>

          {/* Social Interactions Strip */}
          <div style={{ display: 'flex', justifySelf: 'flex-end', justifyContent: 'space-around', width: '100%', borderTop: '1px solid var(--color-border)', paddingTop: '10px' }}>
            <button onClick={() => handleActionClick('like')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}>
              <Heart size={16} fill={isPlaying ? 'rgba(244,63,94,0.4)' : 'none'} style={{ color: 'var(--color-magenta)' }} /> <span>{(heartsCount/1000).toFixed(1)}K</span>
            </button>
            <button className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}>
              <MessageCircle size={16} style={{ color: 'var(--color-cyan)' }} /> <span>428</span>
            </button>
            <button onClick={() => handleActionClick('save')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}>
              <Bookmark size={16} style={{ color: '#eab308' }} /> <span>5.2K</span>
            </button>
            <button onClick={() => handleActionClick('share')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}>
              <Share2 size={16} style={{ color: 'var(--color-indigo)' }} /> <span>1.8K</span>
            </button>
          </div>
        </div>

        {/* Storytelling & Structure Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="glass-panel" style={{ 
            padding: '12px 16px', 
            borderLeft: activeSegment === 'hook' ? '3px solid var(--color-magenta)' : '3px solid transparent',
            background: activeSegment === 'hook' ? 'rgba(244, 63, 94, 0.05)' : 'var(--color-surface)',
            transition: 'all 0.25s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--color-magenta)' }} />
              <strong style={{ fontSize: '0.9rem', color: 'var(--color-magenta)', fontFamily: 'var(--font-display)' }}>1. Hook (0-3s)</strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.4 }}>
              Intriguing, value-packed start that calls out a specific, painful problem and filters the scrolling audience immediately.
            </p>
          </div>

          <div className="glass-panel" style={{ 
            padding: '12px 16px', 
            borderLeft: activeSegment === 'body' ? '3px solid var(--color-cyan)' : '3px solid transparent',
            background: activeSegment === 'body' ? 'rgba(6, 182, 212, 0.05)' : 'var(--color-surface)',
            transition: 'all 0.25s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--color-cyan)' }} />
              <strong style={{ fontSize: '0.9rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-display)' }}>2. Body (3-12s)</strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.4 }}>
              Fast-paced execution, showing the exact code prompt, building workflow, and the final output in simple, relatable visual steps.
            </p>
          </div>

          <div className="glass-panel" style={{ 
            padding: '12px 16px', 
            borderLeft: activeSegment === 'cta' ? '3px solid var(--color-indigo)' : '3px solid transparent',
            background: activeSegment === 'cta' ? 'rgba(99, 102, 241, 0.05)' : 'var(--color-surface)',
            transition: 'all 0.25s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--color-indigo)' }} />
              <strong style={{ fontSize: '0.9rem', color: 'var(--color-indigo)', fontFamily: 'var(--font-display)' }}>3. CTA (12-15s)</strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.4 }}>
              Clear call-to-action that prompts viewers to follow, save, or share, locking in retention and converting casual viewers into community.
            </p>
          </div>
        </div>
      </div>

      {/* Styled Floating Emoji Animation using CSS Keyframes in JS style block */}
      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.6);
          }
          15% {
            opacity: 1;
            transform: translateY(-20px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-120px) scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};
