'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'dermatology' | 'obstetrics-gynaecology'>('all');

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeTab === 'all') return true;
    return t.department === activeTab;
  });

  return (
    <section className="py-16 md:py-24 bg-cream" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Patient Experiences & Reviews"
            subtitle="Genuine feedback from patients treated by our specialist doctors in Thirukovilur"
            centered
          />
        </ScrollReveal>

        {/* Doctor Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-charcoal hover:bg-light-green/60 shadow-sm'
            }`}
          >
            All Patient Stories
          </button>
          <button
            onClick={() => setActiveTab('dermatology')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'dermatology'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-charcoal hover:bg-light-green/60 shadow-sm'
            }`}
          >
            Dr. M. Munivel (Dermatology)
          </button>
          <button
            onClick={() => setActiveTab('obstetrics-gynaecology')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'obstetrics-gynaecology'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-charcoal hover:bg-light-green/60 shadow-sm'
            }`}
          >
            Dr. Bhavyashree S.P (Women&apos;s Health)
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((item, index) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={index * 80}>
              <div className="card h-full bg-white p-6 sm:p-7 rounded-2xl shadow-card hover:shadow-card-hover border border-gray-100 flex flex-col justify-between transition-all duration-300">
                <div>
                  {/* Rating Stars & Treatment Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-primary bg-light-green px-2.5 py-1 rounded-full text-right truncate max-w-[180px]">
                      {item.treatment}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed italic mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Patient & Doctor Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-charcoal">
                      {item.patientName}
                    </h4>
                    {item.location && (
                      <p className="text-[11px] text-secondary-text">
                        {item.location}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-accent block">
                      Consultant:
                    </span>
                    <span className="text-xs font-heading font-bold text-charcoal">
                      {item.doctorName}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
