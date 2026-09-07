'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clinicalResults } from '@/data/results';
import { ResultMedia } from '@/types';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ResultsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'acne-skin' | 'wart-lesion' | 'videos'>('all');
  const [selectedVideo, setSelectedVideo] = useState<ResultMedia | null>(null);
  const [selectedImage, setSelectedImage] = useState<ResultMedia | null>(null);

  const filteredItems = clinicalResults.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'videos') return item.type === 'video';
    return item.category === activeFilter && item.type === 'image';
  });

  return (
    <section className="py-16 md:py-24 bg-white" id="treatment-results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Real Clinical Results"
            subtitle="Documented patient progress and treatment outcomes under Dr. M. Munivel's specialized care"
            centered
          />
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 mb-12">
          {[
            { key: 'all', label: 'All Results' },
            { key: 'hair', label: 'Hair Growth & PRP' },
            { key: 'acne-skin', label: 'Acne Scars & Skin' },
            { key: 'wart-lesion', label: 'Wart & Lesion Removal' },
            { key: 'videos', label: '🎥 Treatment Videos' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === tab.key
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-light-green/60 text-charcoal hover:bg-light-green'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={index * 80}>
              <div className="card h-full flex flex-col group overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Media Wrapper */}
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden cursor-pointer">
                  {item.type === 'image' ? (
                    <div
                      className="w-full h-full relative"
                      onClick={() => setSelectedImage(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-primary font-heading font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          View Full Image
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-full h-full relative bg-charcoal flex items-center justify-center"
                      onClick={() => setSelectedVideo(item)}
                    >
                      <video
                        src={item.src}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-7 h-7 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                        Video
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-primary text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                    {item.treatment}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-base text-charcoal mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-accent font-semibold mb-2.5">
                    Lead: {item.doctor}
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Medical disclaimer note */}
        <p className="text-center text-xs text-secondary-text mt-8 max-w-2xl mx-auto italic">
          *Note: All clinical photographs and videos are genuine cases treated at Shree Vel&apos;s Clinic. Individual results may vary depending on patient age, baseline condition, and treatment compliance.
        </p>

        <div className="text-center mt-8">
          <Link href="/appointment" className="btn-primary inline-flex items-center gap-2">
            <span>Book Consultation For Your Condition</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-charcoal rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-black/50 text-white">
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base">{selectedVideo.title}</h4>
                <p className="text-xs text-gray-300">{selectedVideo.treatment}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Close video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <video
                src={selectedVideo.src}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </div>
            <div className="p-4 text-xs text-gray-300 bg-black/40">
              {selectedVideo.description}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-charcoal rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-black/50 text-white">
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base">{selectedImage.title}</h4>
                <p className="text-xs text-gray-300">{selectedImage.treatment}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Close image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative h-[65vh] bg-black flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
            <div className="p-4 text-xs text-gray-300 bg-black/40">
              {selectedImage.description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
