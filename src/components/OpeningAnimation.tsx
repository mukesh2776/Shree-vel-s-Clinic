'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type Phase = 'idle' | 'animating' | 'exit' | 'done';

export default function OpeningAnimation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const hasTriggeredExit = useRef(false);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mount check to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we should show the animation
  useEffect(() => {
    if (!mounted) return;
    if (pathname !== '/') return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      try {
        sessionStorage.setItem('shree_vels_intro_played', 'true');
      } catch { /* ignore */ }
      return;
    }

    try {
      const hasPlayed = sessionStorage.getItem('shree_vels_intro_played');
      if (!hasPlayed) {
        setPhase('animating');
      }
    } catch {
      // sessionStorage unavailable — skip animation
    }
  }, [mounted, pathname]);

  const handleExit = useCallback(() => {
    if (hasTriggeredExit.current) return;
    hasTriggeredExit.current = true;
    setPhase('exit');

    // After exit animation completes, remove overlay
    setTimeout(() => {
      setPhase('done');
      try {
        sessionStorage.setItem('shree_vels_intro_played', 'true');
      } catch { /* ignore */ }
    }, 800);
  }, []);

  // Auto-exit after the animation sequence completes (~3.8s)
  useEffect(() => {
    if (phase !== 'animating') return;

    exitTimerRef.current = setTimeout(() => {
      handleExit();
    }, 3800);

    // Safety fallback — 6s max
    safetyTimerRef.current = setTimeout(() => {
      handleExit();
    }, 6000);

    return () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, [phase, handleExit]);

  // Skip on click/tap anywhere
  const handleSkip = useCallback(() => {
    handleExit();
  }, [handleExit]);

  // Don't render anything server-side, when not active, or when done
  if (!mounted || phase === 'idle' || phase === 'done' || pathname !== '/') return null;

  const isExiting = phase === 'exit';

  return (
    <div
      className={`intro-overlay ${isExiting ? 'intro-overlay-exit' : ''}`}
      onClick={handleSkip}
      role="presentation"
      aria-label="Opening animation — click or tap to skip"
    >
      {/* Decorative gradient accent at top */}
      <div className="intro-accent-bar" aria-hidden="true" />

      {/* Main content container */}
      <div className="intro-content">
        {/* Logo */}
        <div className="intro-logo">
          <Image
            src="/images/logo.jpeg"
            alt="Shree Vel's Clinic Logo"
            width={120}
            height={120}
            className="intro-logo-img"
            priority
          />
        </div>

        {/* Clinic name */}
        <h1 className="intro-clinic-name">
          SHREE VEL&apos;S CLINIC
        </h1>

        {/* Specialty text */}
        <p className="intro-specialty">
          Expert Dermatology &amp; Women&apos;s Health Care
        </p>

        {/* Decorative divider */}
        <div className="intro-divider" aria-hidden="true">
          <span className="intro-divider-line" />
          <span className="intro-divider-diamond">◆</span>
          <span className="intro-divider-line" />
        </div>

        {/* Tagline */}
        <p className="intro-tagline">
          &ldquo;Where Skin Meets Care, Women Meet Comfort&rdquo;
        </p>

        {/* Opening animation video */}
        <div className="intro-photo-container">
          <div className="intro-video-wrapper">
            <video
              src="/videos/intro.mp4"
              className="intro-video"
              autoPlay
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </div>

      {/* Skip hint */}
      <div className="intro-skip-hint">
        <span>Tap to skip</span>
      </div>
    </div>
  );
}
