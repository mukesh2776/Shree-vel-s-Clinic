'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-light-green via-cream to-white overflow-hidden py-14 sm:py-20 lg:py-24 min-h-[640px] lg:min-h-[720px] flex items-center">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                
                {/* Google Reviews & Medical Council Verified Badge */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-primary/20 shadow-sm backdrop-blur-sm">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-charcoal">4.8 Star Rating</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-semibold text-primary">Google Verified Reviews</span>
                </div>

                {/* Main Headline - Strong Dermatology Focus */}
                <h1 className="text-3.5xl sm:text-4.5xl lg:text-5.5xl font-extrabold font-heading text-charcoal leading-[1.15] tracking-tight">
                  Advanced <span className="text-primary">Dermatology</span> &amp; Precision Skin Care
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-secondary-text max-w-xl leading-relaxed">
                  Specialist clinical dermatology, laser surgery, acne &amp; PRP treatments led by <strong className="text-charcoal font-semibold">Dr. M. Munivel, MD (DVL)</strong>, alongside dedicated women&apos;s health &amp; obstetric care by <strong className="text-charcoal font-semibold">Dr. Bhavyashree S.P, MS (OG)</strong>.
                </p>

                {/* Key Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-charcoal font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs flex-shrink-0 font-bold">✓</span>
                    <span>Acne, Scars &amp; Pigmentation Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs flex-shrink-0 font-bold">✓</span>
                    <span>Advanced PRP &amp; Hair Loss Therapy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs flex-shrink-0 font-bold">✓</span>
                    <span>Radiofrequency &amp; Laser Minor Surgeries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs flex-shrink-0 font-bold">✓</span>
                    <span>Obstetrics, PCOD &amp; Women&apos;s Wellness</span>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/appointment"
                    className="btn-primary px-7 py-3.5 text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Book Consultation</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <a
                    href="tel:+918778896736"
                    className="btn-outline px-6 py-3.5 text-center flex items-center justify-center gap-2 bg-white/80 hover:bg-primary hover:text-white transition-all border-primary/30"
                  >
                    <svg className="w-4 h-4 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>Call: +91 87788 96736</span>
                  </a>
                </div>

                {/* Doctor Availability & Consultation Timings Card */}
                <div className="p-4 rounded-2xl bg-white/95 border border-primary/20 shadow-sm backdrop-blur-sm max-w-xl">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-charcoal font-heading">
                        Doctor Consultation Timings
                      </span>
                    </div>
                    <span className="text-[11px] text-primary font-semibold">Monday – Saturday</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {/* Dermatology / Dr. Munivel */}
                    <div className="bg-light-green/70 p-3 rounded-xl border border-primary/15">
                      <div className="flex items-center justify-between font-bold text-primary mb-1.5">
                        <span className="text-xs font-heading">Dr. Munivel</span>
                        <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-medium">Dermatology</span>
                      </div>
                      <div className="space-y-0.5 text-charcoal font-semibold text-[11px]">
                        <p className="flex items-center gap-1.5">
                          <span className="text-primary font-bold">•</span> 1:30 PM – 4:30 PM
                        </p>
                        <p className="flex items-center gap-1.5">
                          <span className="text-primary font-bold">•</span> 5:30 PM – 8:30 PM
                        </p>
                      </div>
                    </div>

                    {/* OBGYN / Dr. Bhavyashree S.P */}
                    <div className="bg-accent-50/80 p-3 rounded-xl border border-accent/20">
                      <div className="flex items-center justify-between font-bold text-accent-700 mb-1.5">
                        <span className="text-xs font-heading">Dr. Bhavyashree S.P</span>
                        <span className="text-[10px] bg-accent text-white px-2 py-0.5 rounded-full font-medium">OBGYN</span>
                      </div>
                      <div className="text-charcoal font-semibold text-[11px] pt-1">
                        <p className="flex items-center gap-1.5">
                          <span className="text-accent font-bold">•</span> 5:00 PM – 8:30 PM
                        </p>
                        <p className="text-[10px] text-secondary-text font-normal mt-1">
                          Women&apos;s Health Consultation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Doctor Image Column */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative max-w-md mx-auto">
                
                {/* Soft ambient background rings */}
                <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-2xl transform translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 bg-accent/15 rounded-3xl blur-2xl transform -translate-x-4 -translate-y-4"></div>

                {/* Main Card */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                  <Image 
                    src="/images/dr-munivel.png" 
                    alt="Dr. M. Munivel - Consultant Dermatologist, Venereologist & Aesthetic Surgeon at Shree Vel's Clinic" 
                    fill 
                    className="object-cover object-top"
                    priority
                  />
                  
                  {/* Subtle bottom gradient overlay for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

                  {/* Doctor badge overlay */}
                  <div className="absolute bottom-4 inset-x-4 text-white z-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">Consultant Dermatologist</p>
                    <h3 className="text-lg font-bold font-heading">Dr. M. Munivel, MD (DVL)</h3>
                    <p className="text-[11px] text-gray-200">Aesthetic Surgeon &bull; TNMC Reg: 131636</p>
                  </div>
                </div>

                {/* Floating Top-Left Review Badge */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-light-green flex items-center justify-center text-primary font-bold text-sm">
                    ⭐
                  </div>
                  <div>
                    <p className="text-[11px] text-secondary-text font-medium">Top Skin Specialist</p>
                    <p className="text-xs font-bold text-charcoal">Thirukovilur</p>
                  </div>
                </div>

                {/* Floating Bottom-Right Care Badge */}
                <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <p className="text-[11px] text-secondary-text">Dual Specialty</p>
                    <p className="text-xs font-bold text-charcoal">Skin &amp; Women&apos;s Health</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
