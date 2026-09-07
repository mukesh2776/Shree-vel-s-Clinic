'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export default function OpeningAnimation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'reveal' | 'playing' | 'exit'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTriggeredExit = useRef(false);

  // Mount check to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we should show the animation
  useEffect(() => {
    if (!mounted) return;
    if (pathname !== '/') return;

    try {
      const hasPlayed = sessionStorage.getItem('shree_vels_intro_played');
      if (!hasPlayed) {
        setShowAnimation(true);
        setPhase('reveal');
      }
    } catch {
      // sessionStorage unavailable — skip animation
    }
  }, [mounted, pathname]);

  const handleExit = useCallback(() => {
    if (hasTriggeredExit.current) return;
    hasTriggeredExit.current = true;
    setPhase('exit');

    setTimeout(() => {
      setShowAnimation(false);
      try {
        sessionStorage.setItem('shree_vels_intro_played', 'true');
      } catch {
        // Ignore storage errors
      }
    }, 900);
  }, []);

  // Start playing phase after initial reveal animation
  useEffect(() => {
    if (phase !== 'reveal') return;

    const revealTimer = setTimeout(() => {
      setPhase('playing');
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay blocked — exit gracefully
          handleExit();
        });
      }
    }, 400);

    return () => clearTimeout(revealTimer);
  }, [phase, handleExit]);

  // Safety fallback timeout — 5 seconds max
  useEffect(() => {
    if (!showAnimation) return;

    const fallbackTimer = setTimeout(() => {
      handleExit();
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [showAnimation, handleExit]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches && showAnimation) {
      handleExit();
    }
  }, [mounted, showAnimation, handleExit]);

  const handleVideoEnded = useCallback(() => {
    handleExit();
  }, [handleExit]);

  // Skip on click/tap anywhere
  const handleSkip = useCallback(() => {
    handleExit();
  }, [handleExit]);

  // Don't render anything server-side or when not active
  if (!mounted || !showAnimation || pathname !== '/') return null;

  return (
    <div
      className={`opening-animation-overlay ${phase === 'exit' ? 'opening-animation-exit' : ''}`}
      onClick={handleSkip}
      role="presentation"
      aria-label="Opening animation — click to skip"
    >
      {/* Video container — tightly cropped, centered, blended */}
      <div
        className={`opening-animation-container ${
          phase === 'reveal' ? 'opening-animation-reveal' : ''
        } ${phase === 'playing' ? 'opening-animation-active' : ''}`}
      >
        <video
          ref={videoRef}
          src="/videos/intro.mp4"
          className="opening-animation-video"
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
        />
      </div>

      {/* Subtle skip hint */}
      <div className={`opening-animation-skip ${phase === 'playing' ? 'opening-animation-skip-visible' : ''}`}>
        <span>Tap to skip</span>
      </div>
    </div>
  );
}
