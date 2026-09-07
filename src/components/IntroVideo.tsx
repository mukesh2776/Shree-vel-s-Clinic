'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function IntroVideo() {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCloseIntro = useCallback(() => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    setTimeout(() => {
      setShowIntro(false);
      try {
        sessionStorage.setItem('shree_vels_intro_played', 'true');
      } catch {
        // Ignore storage errors
      }
    }, 700);
  }, [isFadingOut]);

  useEffect(() => {
    // Only trigger on initial load if on the homepage ('/') and hasn't been dismissed in current page session
    if (pathname === '/') {
      try {
        const hasPlayedInSession = sessionStorage.getItem('shree_vels_intro_played');
        if (!hasPlayedInSession) {
          setShowIntro(true);
        }
      } catch {
        setShowIntro(false);
      }
    } else {
      setShowIntro(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!showIntro) return;

    // Safety fallback: auto-close after 12s if video fails or finishes
    const safetyTimer = setTimeout(() => {
      handleCloseIntro();
    }, 12000);

    return () => clearTimeout(safetyTimer);
  }, [showIntro, handleCloseIntro]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  // Do not render anything if not active
  if (!showIntro || pathname !== '/') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-white transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Top Bar with Logo & Skip button */}
      <header className="w-full max-w-5xl mx-auto px-4 py-3 sm:py-5 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-sm border border-primary/20 bg-white">
            <Image
              src="/images/logo.jpeg"
              alt="Shree Vel's Clinic"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <div className="font-heading text-sm sm:text-base font-bold text-primary tracking-wide">
              SHREE VEL&apos;S CLINIC
            </div>
            <div className="text-[10px] sm:text-xs text-secondary-text hidden sm:block">
              Skin Care &amp; Women&apos;s Health • Thirukovilur
            </div>
          </div>
        </div>

        <button
          onClick={handleCloseIntro}
          className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-accent bg-light-green/70 hover:bg-light-green px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          aria-label="Skip Introduction"
        >
          <span>Skip Intro</span>
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </header>

      {/* Center Video Area — 100% pure white background, NO dark container, seamless display */}
      <main className="flex-1 w-full flex flex-col items-center justify-center px-4 py-2">
        <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-[52vh] sm:h-[58vh] max-h-[500px] flex items-center justify-center bg-white">
          <video
            ref={videoRef}
            src="/videos/intro.mp4"
            className="w-full h-full object-contain bg-white"
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleCloseIntro}
            style={{ backgroundColor: '#ffffff' }}
          />
        </div>

        <div className="text-center mt-2 sm:mt-4">
          <p className="font-heading text-primary font-semibold text-sm sm:text-base tracking-wide">
            Where Skin Meets Care, Women Meets Comfort
          </p>
          <p className="text-xs text-secondary-text mt-0.5">
            Specialist Dermatology &bull; Obstetrics &bull; Gynaecology
          </p>
        </div>
      </main>

      {/* Bottom Progress Bar */}
      <footer className="w-full max-w-md mx-auto px-6 pb-6 pt-2">
        <div className="w-full bg-gray-100 rounded-full h-1 sm:h-1.5 overflow-hidden">
          <div
            className="bg-accent h-full transition-all duration-150 ease-out rounded-full"
            style={{ width: `${Math.min(100, Math.max(5, progress))}%` }}
          />
        </div>
      </footer>
    </div>
  );
}
