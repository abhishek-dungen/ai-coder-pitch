import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], .interactive, input, select, textarea, [data-interactive="true"]'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Set up hover states
    addHoverListeners();

    // Re-bind hover states when DOM updates
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let animFrameId: number;
    const followMouse = () => {
      setTrail((prev) => {
        // Easing factor: 0.15
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animFrameId = requestAnimationFrame(followMouse);
    };
    animFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animFrameId);
  }, [position]);

  if (hidden) return null;

  return (
    <>
      {/* Main Core Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: hovered ? '#f43f5e' : '#06b6d4',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'background-color 0.2s, width 0.2s, height 0.2s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Lagging Ring Outer Glow */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovered ? '48px' : '28px',
          height: hovered ? '48px' : '28px',
          border: hovered ? '2px solid rgba(244, 63, 94, 0.6)' : '1.5px solid rgba(6, 182, 212, 0.4)',
          borderRadius: '50%',
          transform: `translate3d(${trail.x - (hovered ? 24 : 14)}px, ${trail.y - (hovered ? 24 : 14)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.25s cubic-bezier(0.25, 1, 0.5, 1), height 0.25s cubic-bezier(0.25, 1, 0.5, 1), border 0.2s',
          boxShadow: hovered ? '0 0 16px rgba(244, 63, 94, 0.4)' : 'none',
        }}
      />
    </>
  );
};
