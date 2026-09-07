'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';
import Lightbox from '@/components/ui/Lightbox';
import ResultsSection from '@/components/home/ResultsSection';

const categories = ['All', 'Clinic Facilities', 'Doctors & Consultation', 'Treatment Results'];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter((img) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Clinic Facilities') return img.category === 'clinic';
    if (activeTab === 'Doctors & Consultation') return img.category === 'doctors';
    if (activeTab === 'Treatment Results') return img.category === 'results';
    return true;
  });

  return (
    <main>
      <section className="bg-primary/5 py-16 md:py-24 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Photo &amp; Video Gallery
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Explore our medical facilities, consultation rooms, specialist doctors, and documented clinical results.
          </p>
        </div>
      </section>

      {/* Facilities & Doctors Gallery */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-card-hover transition-all duration-300 bg-gray-100"
                onClick={() => {
                  const globalIndex = galleryImages.findIndex((gImg) => gImg.id === img.id);
                  setLightboxIndex(globalIndex);
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium bg-black/60 px-3.5 py-1.5 rounded-full text-xs backdrop-blur-sm">
                    Enlarge Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Interactive Results & Videos Showcase */}
      <ResultsSection />

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </main>
  );
}
