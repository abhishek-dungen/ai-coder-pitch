import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Heart, MessageCircle, Share2, Bookmark, 
  TrendingUp, Users, Grid, Settings, ArrowLeft, ChevronRight, 
  Pin, ExternalLink, Sparkles, Plus, Info
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
    bodyText: "📊 Instead of copying and pasting manually, write =XLOOKUP with vertical range arrays to stitch tables in 2 seconds.",
    ctaText: "👉 Save this reel and follow @excelbhaiya.abhishek for daily hacks!",
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
    bodyText: "📊 Over the next 90 days, we are building custom AI tools, automations, and dashboards to double your speed.",
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
    bodyText: "📊 Feed the job description to the AI assistant, align keyword metrics, and export a perfectly matched layout.",
    ctaText: "👉 Share this with a friend who is actively looking for job roles!",
    likes: "185",
    comments: "24",
    saves: "98",
    shares: "45",
    bgPos: "100% 56.6%"
  },
  {
    id: 4,
    title: "Internet Table को Excel में Paste करने का सही तरीका जानते हैं?",
    viewsText: "85K",
    viewsCount: 85000,
    isPinned: false,
    hookText: "⚡ Don't copy-paste websites directly into Excel! It ruins cell formats.",
    bodyText: "📊 Use 'Data from Web', input the URL, choose the specific data table, and Excel formats it instantly.",
    ctaText: "👉 Follow for daily hacks that keep your worksheets clean!",
    likes: "6.2K",
    comments: "148",
    saves: "2.1K",
    shares: "710",
    bgPos: "0% 81.3%"
  },
  {
    id: 5,
    title: "Excel में Automatic Sales Tracker कैसे बनता है?",
    viewsText: "64K",
    viewsCount: 64000,
    isPinned: false,
    hookText: "⚡ Build an interactive sales tracker dashboard in 5 minutes.",
    bodyText: "📊 Use Pivot Charts combined with Slicers for an dynamic, interactive, and premium business reporting tool.",
    ctaText: "👉 Drop a comment if you want the sample tracker sheet sent directly!",
    likes: "4.9K",
    comments: "215",
    saves: "1.8K",
    shares: "520",
    bgPos: "50% 81.3%"
  },
  {
    id: 6,
    title: "Excel में ये Secret Hack Dynamic Dropdown को Smart कैसे बनाता है?",
    viewsText: "92K",
    viewsCount: 92000,
    isPinned: false,
    hookText: "⚡ Dynamic dependent dropdown lists without complex coding.",
    bodyText: "📊 Combine the INDIRECT function with named ranges for dropdowns that adjust automatically based on selection.",
    ctaText: "👉 Save this reel and build it yourself today!",
    likes: "8.1K",
    comments: "310",
    saves: "3.4K",
    shares: "920",
    bgPos: "100% 81.3%"
  }
];

export const SocialMetrics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'dashboard'>('profile');
  const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSegment, setActiveSegment] = useState<'hook' | 'body' | 'cta' | null>(null);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; x: number; type: string }[]>([]);
  const [likesCounter, setLikesCounter] = useState(0);

  // Counter animation states
  const [followers, setFollowers] = useState(0);
  const [views, setViews] = useState(0);
  const [reached, setReached] = useState(0);
  const [netFollowers, setNetFollowers] = useState(0);

  // Get base path dynamically for GitHub Pages / Subfolders
  const base = import.meta.env.BASE_URL || '/';
  const profileImg = `${base}profile_view.jpeg`;

  useEffect(() => {
    let start = 0;
    const endF = 13600; // 13.6K followers
    const endV = 1230000; // 12.3L views
    const endR = 460000; // 4.6L reached
    const endN = 8300; // +8.3T (8.3K) net followers
    const duration = 1500;
    const step = 16;
    const ticks = duration / step;
    
    const incrementF = Math.ceil(endF / ticks);
    const incrementV = Math.ceil(endV / ticks);
    const incrementR = Math.ceil(endR / ticks);
    const incrementN = Math.ceil(endN / ticks);

    const timer = setInterval(() => {
      start += step;
      setFollowers((prev) => Math.min(prev + incrementF, endF));
      setViews((prev) => Math.min(prev + incrementV, endV));
      setReached((prev) => Math.min(prev + incrementR, endR));
      setNetFollowers((prev) => Math.min(prev + incrementN, endN));

      if (start >= duration) {
        clearInterval(timer);
        setFollowers(endF);
        setViews(endV);
        setReached(endR);
        setNetFollowers(endN);
      }
    }, step);

    return () => clearInterval(timer);
  }, []);

  // Sync Reels Simulator
  useEffect(() => {
    let timer: number;
    if (isPlaying && selectedReelIndex !== null) {
      timer = window.setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1.2;
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', width: '100%' }}>
      {/* Top metrics summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        <div className="glass-panel" style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '8px', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
          <div style={{ padding: '6px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '6px', color: 'var(--color-cyan)', display: 'flex', alignItems: 'center' }}>
            <Users size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>FOLLOWERS</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              {(followers / 1000).toFixed(1)}K
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '8px', borderColor: 'rgba(168, 85, 247, 0.2)' }}>
          <div style={{ padding: '6px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '6px', color: '#a855f7', display: 'flex', alignItems: 'center' }}>
            <TrendingUp size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>30D VIEWS</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              {(views / 100000).toFixed(1)}L
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '8px', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
          <div style={{ padding: '6px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '6px', color: 'var(--color-indigo)', display: 'flex', alignItems: 'center' }}>
            <TrendingUp size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>REACHED (30d)</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              {(reached / 100000).toFixed(1)}L
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '8px', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
          <div style={{ padding: '6px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', color: '#10b981', display: 'flex', alignItems: 'center' }}>
            <Users size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '2px' }}>
              NET FOLL. <span title="Hindi Locale: +8.3T (T=Thousand)" style={{ cursor: 'help', display: 'inline-flex', alignItems: 'center' }}><Info size={9} /></span>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#ffffff' }}>
              +{(netFollowers / 1000).toFixed(1)}T
            </div>
          </div>
        </div>
      </div>

      {/* Main Panels Layout: Mockup Phone + Details panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '16px', flexGrow: 1, minHeight: 0 }}>
        
        {/* Instagram App Simulator Frame */}
        <div className="glass-panel" style={{
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          background: '#090a0f',
          borderColor: 'var(--color-border)',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          height: '420px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Simulated phone top status bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '8px 16px', 
            fontSize: '0.7rem', 
            color: '#9ca3af', 
            background: '#05060a',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            fontFamily: 'var(--font-mono)'
          }}>
            <span>2:44 PM</span>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <span>📶 VoWiFi</span>
              <span>🔋 61%</span>
            </div>
          </div>

          {/* Simulated Instagram Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px 16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {activeTab === 'dashboard' && (
                <ArrowLeft 
                  size={16} 
                  style={{ color: 'white', cursor: 'pointer' }} 
                  onClick={() => setActiveTab('profile')} 
                />
              )}
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>
                {activeTab === 'profile' ? 'excelbhaiya.abhishek' : 'Professional dashboard'}
              </span>
            </div>
            <Settings size={16} style={{ color: 'white', cursor: 'pointer' }} />
          </div>

          {/* Navigation Tab Buttons inside the Mockup */}
          <div style={{ display: 'flex', background: '#0d0f17' }}>
            <button 
              onClick={() => setActiveTab('profile')}
              style={{
                flex: 1,
                padding: '8px',
                background: activeTab === 'profile' ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'profile' ? '2px solid var(--color-cyan)' : '2px solid transparent',
                color: activeTab === 'profile' ? 'white' : '#9ca3af',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Grid size={14} /> Profile Grid
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              style={{
                flex: 1,
                padding: '8px',
                background: activeTab === 'dashboard' ? 'rgba(168, 85, 247, 0.08)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'dashboard' ? '2px solid #a855f7' : '2px solid transparent',
                color: activeTab === 'dashboard' ? 'white' : '#9ca3af',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <TrendingUp size={14} /> Dashboard
            </button>
          </div>

          {/* Mockup Content Area (Scrollable) */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px', background: '#090a0f' }}>
            {activeTab === 'profile' ? (
              // INSTAGRAM PROFILE VIEW
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                {/* Profile Stats Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ position: 'relative' }}>
                    {/* Story Gradient Ring */}
                    <div style={{
                      width: '60px',
                      height: '60px',
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
                        fontSize: '1rem',
                        border: '2px solid #090a0f'
                      }}>
                        AK
                      </div>
                    </div>
                    {/* Plus Icon Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      background: 'var(--color-cyan)',
                      borderRadius: '50%',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '10px'
                    }}>
                      <Plus size={10} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>137</div>
                      <div style={{ fontSize: '0.65rem', color: '#9ca3af' }}>posts</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>13.6K</div>
                      <div style={{ fontSize: '0.65rem', color: '#9ca3af' }}>followers</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>1</div>
                      <div style={{ fontSize: '0.65rem', color: '#9ca3af' }}>following</div>
                    </div>
                  </div>
                </div>

                {/* Profile Bio */}
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white' }}>Abhishek Kumar</div>
                  <div style={{ fontSize: '0.73rem', color: '#e5e7eb', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div>👨‍💻 8+ Years of Corporate Experience</div>
                    <div>💯 New Excel Hack Every Alternate Day</div>
                    <div>👇 Excel +AI Career LIVE Masterclass</div>
                    <a href="http://www.excelbhaiyaabhishek.com/excel-career-3hr" target="_blank" rel="noreferrer" style={{ color: 'var(--color-cyan)', display: 'flex', alignItems: 'center', gap: '3px', textDecoration: 'none', fontSize: '0.73rem', marginTop: '2px' }}>
                      <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '200px' }}>www.excelbhaiyaabhishek.com/excel-career-3hr</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                {/* Banner Link to Professional Dashboard */}
                <div 
                  onClick={() => setActiveTab('dashboard')}
                  className="interactive"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>Professional dashboard</span>
                    <span style={{ fontSize: '0.65rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '2px', marginTop: '1px' }}>
                      ↗ 12.3L views in the last 30 days.
                    </span>
                  </div>
                  <ChevronRight size={14} style={{ color: '#9ca3af' }} />
                </div>

                {/* Reels Grid (3 columns) */}
                <div>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                    <Grid size={16} style={{ color: 'white' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginTop: '6px' }}>
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
                          borderRadius: '4px',
                          position: 'relative',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: selectedReelIndex === index ? '2px solid var(--color-cyan)' : '1px solid rgba(255,255,255,0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          padding: '6px',
                          transition: 'border 0.2s ease'
                        }}
                      >
                        {/* Pinned Icon Overlay */}
                        {reel.isPinned && (
                          <div style={{ position: 'absolute', top: '4px', right: '4px', background: 'rgba(0,0,0,0.6)', padding: '3px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                            <Pin size={10} style={{ color: 'white', transform: 'rotate(45deg)' }} />
                          </div>
                        )}
                        {/* Overlay play button on hover */}
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
                          <Play size={20} fill="white" style={{ color: 'white' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // PROFESSIONAL DASHBOARD VIEW
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <h3 style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Insights</h3>
                  <p style={{ fontSize: '0.65rem', color: '#6b7280', marginTop: '2px' }}>Last 30 days</p>
                  
                  {/* Dashboard stats panel items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Views</div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginTop: '2px' }}>12.3L <span style={{ color: '#22c55e', fontSize: '0.75rem' }}>↗</span></div>
                      </div>
                      <ChevronRight size={14} style={{ color: '#6b7280' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Accounts reached</div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginTop: '2px' }}>4.6L <span style={{ color: '#22c55e', fontSize: '0.75rem' }}>↗</span></div>
                      </div>
                      <ChevronRight size={14} style={{ color: '#6b7280' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Net followers</div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginTop: '2px' }}>+8.3T <span style={{ color: '#22c55e', fontSize: '0.75rem' }}>↗</span></div>
                      </div>
                      <ChevronRight size={14} style={{ color: '#6b7280' }} />
                    </div>
                  </div>
                </div>

                {/* Next Steps Section */}
                <div>
                  <h3 style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Next steps</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', gap: '10px', padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <div style={{ minWidth: '32px', height: '32px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--color-cyan)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>🎙️</div>
                      <div>
                        <h4 style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white' }}>Edit audio like a pro</h4>
                        <p style={{ fontSize: '0.62rem', color: '#9ca3af', marginTop: '2px', lineHeight: 1.3 }}>Get studio-quality sound with import, enhance and fade tools.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <div style={{ minWidth: '32px', height: '32px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>🔥</div>
                      <div>
                        <h4 style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white' }}>Find your next hit with trial reels</h4>
                        <p style={{ fontSize: '0.62rem', color: '#9ca3af', marginTop: '2px', lineHeight: 1.3 }}>See how your content performs with non-followers first.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Tools Section */}
                <div>
                  <h3 style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Your tools</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', overflow: 'hidden', marginTop: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#0d0f17', fontSize: '0.7rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
                        <span>📊</span>
                        <span>Monthly recap</span>
                        <span style={{ background: '#2563eb', color: 'white', padding: '2px 6px', borderRadius: '10px', fontSize: '0.55rem', fontWeight: 'bold' }}>New</span>
                      </div>
                      <ChevronRight size={12} style={{ color: '#6b7280' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#0d0f17', fontSize: '0.7rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
                        <span>💡</span>
                        <span>Best practices</span>
                      </div>
                      <ChevronRight size={12} style={{ color: '#6b7280' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#0d0f17', fontSize: '0.7rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
                        <span>✨</span>
                        <span>Inspiration</span>
                      </div>
                      <ChevronRight size={12} style={{ color: '#6b7280' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Simulator & Storytelling Breakdown Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
          
          <AnimatePresence mode="wait">
            {activeReel ? (
              // IF REEL IS SELECTED, SHOW THE PLAY SIMULATOR
              <motion.div 
                key={activeReel.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                style={{ 
                  padding: '16px', 
                  borderColor: 'var(--color-cyan-glow)', 
                  background: 'linear-gradient(135deg, rgba(9, 10, 15, 0.9) 0%, rgba(6, 182, 212, 0.05) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  position: 'relative'
                }}
              >
                {/* Back button to clear selection */}
                <div style={{ display: 'flex', justifySelf: 'flex-start', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button 
                    onClick={() => { setSelectedReelIndex(null); setIsPlaying(false); }}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: 'none',
                      borderRadius: '4px',
                      color: 'white',
                      padding: '4px 8px',
                      fontSize: '0.68rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <ArrowLeft size={12} /> Back to Profile Info
                  </button>
                  <span style={{ fontSize: '0.68rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>REEL WORKFLOW</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', lineHeight: 1.3 }}>
                    {activeReel.title}
                  </h3>
                  
                  {/* Instagram Live Reel link button */}
                  {activeReel.instagramUrl && (
                    <a 
                      href={activeReel.instagramUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        background: 'linear-gradient(45deg, #f9ce34 10%, #ee2a7b 50%, #6228d7 90%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(238, 42, 123, 0.25)',
                        marginBottom: '4px'
                      }}
                      className="interactive"
                    >
                      <span>View Live Reel on Instagram</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Simulated Video Screen Panel */}
                <div style={{ 
                  height: '130px', 
                  background: '#040508', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '12px'
                }}>
                  {/* Floating particles */}
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle, var(--color-cyan) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />

                  {/* Playback Controls & Floating Emojis */}
                  {isPlaying ? (
                    <div style={{ zIndex: 1, textAlign: 'center' }}>
                      <div className="animate-float" style={{ fontSize: '2.2rem', marginBottom: '4px' }}>
                        {activeSegment === 'hook' && '⚡'}
                        {activeSegment === 'body' && '📊'}
                        {activeSegment === 'cta' && '👉'}
                      </div>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Simulating Playback
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'white', marginTop: '6px', fontWeight: 600, padding: '0 10px', lineHeight: 1.3 }}>
                        {activeSegment === 'hook' && activeReel.hookText}
                        {activeSegment === 'body' && activeReel.bodyText}
                        {activeSegment === 'cta' && activeReel.ctaText}
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="btn btn-primary"
                      style={{ borderRadius: '50%', width: '44px', height: '44px', padding: 0, justifyContent: 'center', zIndex: 2 }}
                    >
                      <Play size={18} fill="currentColor" style={{ marginLeft: '3px' }} />
                    </button>
                  )}

                  {/* Floating emojis overlay */}
                  {floatingEmojis.map((emoji) => (
                    <span
                      key={emoji.id}
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: `${emoji.x}%`,
                        fontSize: '1.4rem',
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

                  {/* Progress timeline line */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    height: '3px', 
                    background: 'linear-gradient(90deg, var(--color-cyan), var(--color-indigo))', 
                    width: `${progress}%`, 
                    transition: 'width 0.1s linear' 
                  }} />
                </div>

                {/* Hook / Body / CTA Script Panel cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.72rem' }}>
                  <div style={{ 
                    padding: '6px 10px', 
                    borderRadius: '6px',
                    borderLeft: activeSegment === 'hook' ? '3px solid var(--color-magenta)' : '3px solid transparent',
                    background: activeSegment === 'hook' ? 'rgba(244, 63, 94, 0.05)' : 'rgba(255,255,255,0.01)',
                    transition: 'all 0.25s ease'
                  }}>
                    <strong style={{ color: 'var(--color-magenta)' }}>1. Hook (0-3s)</strong>: Intriguing, filters feed scrolls immediately.
                  </div>
                  <div style={{ 
                    padding: '6px 10px', 
                    borderRadius: '6px',
                    borderLeft: activeSegment === 'body' ? '3px solid var(--color-cyan)' : '3px solid transparent',
                    background: activeSegment === 'body' ? 'rgba(6, 182, 212, 0.05)' : 'rgba(255,255,255,0.01)',
                    transition: 'all 0.25s ease'
                  }}>
                    <strong style={{ color: 'var(--color-cyan)' }}>2. Body (3-12s)</strong>: Fast-paced build, showing prompt & final code output.
                  </div>
                  <div style={{ 
                    padding: '6px 10px', 
                    borderRadius: '6px',
                    borderLeft: activeSegment === 'cta' ? '3px solid var(--color-indigo)' : '3px solid transparent',
                    background: activeSegment === 'cta' ? 'rgba(99, 102, 241, 0.05)' : 'rgba(255,255,255,0.01)',
                    transition: 'all 0.25s ease'
                  }}>
                    <strong style={{ color: 'var(--color-indigo)' }}>3. CTA (12-15s)</strong>: Converts viewers into loyal community.
                  </div>
                </div>

                {/* Social Actions Strip for simulator */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  borderTop: '1px solid rgba(255,255,255,0.05)', 
                  paddingTop: '8px',
                  fontSize: '0.72rem'
                }}>
                  <button onClick={() => handleActionClick('like')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Heart size={14} fill={likesCounter > 0 ? 'var(--color-magenta)' : 'none'} style={{ color: 'var(--color-magenta)' }} />
                    <span>{likesCounter > 0 ? (parseFloat(activeReel.likes) + likesCounter/1000).toFixed(2) + 'K' : activeReel.likes}</span>
                  </button>
                  <button className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MessageCircle size={14} style={{ color: 'var(--color-cyan)' }} /> <span>{activeReel.comments}</span>
                  </button>
                  <button onClick={() => handleActionClick('save')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Bookmark size={14} style={{ color: '#eab308' }} /> <span>{activeReel.saves}</span>
                  </button>
                  <button onClick={() => handleActionClick('share')} className="interactive" style={{ background: 'none', border: 'none', color: '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Share2 size={14} style={{ color: 'var(--color-indigo)' }} /> <span>{activeReel.shares}</span>
                  </button>
                </div>

              </motion.div>
            ) : (
              // IF NO REEL SELECTED, SHOW INSTRUCTION & CHANNEL GROWTH SUMMARY
              <motion.div 
                key="instruction-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                style={{ 
                  padding: '20px', 
                  border: '1px dashed rgba(6, 182, 212, 0.3)',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.02) 0%, rgba(99, 102, 241, 0.02) 100%)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  padding: '12px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  borderRadius: '50%',
                  color: 'var(--color-cyan)',
                  marginBottom: '4px',
                  display: 'inline-flex'
                }}>
                  <Sparkles size={24} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'white' }}>
                  Interactive Instagram Mockup
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.4, maxWidth: '280px' }}>
                  Experience real organic metrics, posts, and bio data.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', textAlign: 'left', marginTop: '10px' }}>
                  <div style={{ fontSize: '0.7rem', padding: '6px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', color: '#e5e7eb' }}>
                    📱 <strong>Interactive Grid:</strong> Click on any Reel thumbnail to simulate play, script timing, and likes.
                  </div>
                  <div style={{ fontSize: '0.7rem', padding: '6px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', color: '#e5e7eb' }}>
                    📈 <strong>Professional Dashboard:</strong> Toggle the dashboard tab to view 30-day views (12.3L) and reach.
                  </div>
                </div>

                <button 
                  onClick={() => selectReel(0)} 
                  className="btn btn-primary interactive"
                  style={{ width: '100%', padding: '10px', marginTop: '10px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <Play size={14} fill="currentColor" /> Simulate Top Pinned Reel
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
