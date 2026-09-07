'use client';

import { useState, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ClinicVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-light-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Inside Shree Vel's Clinic"
            subtitle="Take a virtual tour of our modern facilities, consulting chambers, and clinical care"
            centered
          />
        </ScrollReveal>

        <div className="mt-12 max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-charcoal aspect-video border-4 border-white">
              <video
                ref={videoRef}
                src="/videos/clinic-intro.mp4"
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Play / Pause Big Center Overlay when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/30 group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="mt-4 text-white font-heading font-semibold text-base sm:text-lg tracking-wide drop-shadow-md">
                    Watch Clinic Video Tour
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm mt-1">
                    Dr. M. Munivel &bull; Dr. Bhavyashree S.P
                  </span>
                </div>
              )}

              {/* Bottom Control Bar when playing */}
              {isPlaying && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white transition-opacity">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/40 transition-colors"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/40 transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    Shree Vel&apos;s Clinic &bull; Thirukovilur
                  </span>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Key Feature Highlights under the video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <div className="bg-white p-5 rounded-2xl shadow-card border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-green text-primary flex items-center justify-center text-xl shrink-0">
                🔬
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">
                  Advanced Equipment
                </h4>
                <p className="text-xs text-secondary-text">PRP, Laser, &amp; Radiofrequency</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-card border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-green text-primary flex items-center justify-center text-xl shrink-0">
                🩺
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">
                  Private Consultation
                </h4>
                <p className="text-xs text-secondary-text">Dedicated Women &amp; Skin Rooms</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-card border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-green text-primary flex items-center justify-center text-xl shrink-0">
                🛡️
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">
                  Sterile Environment
                </h4>
                <p className="text-xs text-secondary-text">Highest Medical Protocols</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
