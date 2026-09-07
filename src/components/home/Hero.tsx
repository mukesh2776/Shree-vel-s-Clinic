'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-light-green to-cream overflow-hidden py-16 md:py-24 min-h-[600px] lg:min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-right">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Specialist Skin Care &amp; Women&apos;s Health • Thirukovilur
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-charcoal leading-tight">
                Expert Care for Your Skin &amp; Women&apos;s Health
              </h1>
              <p className="text-lg text-secondary-text max-w-lg">
                Specialist dermatology, aesthetic and women&apos;s healthcare with compassionate, patient-focused care at Thirukovilur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/appointment" className="btn-primary flex items-center justify-center">
                  Book an Appointment
                </Link>
                <Link href="/services" className="btn-outline flex items-center justify-center">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-x-8 translate-y-8"></div>
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform -translate-x-8 -translate-y-8"></div>
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
                <Image 
                  src="/images/dr-munivel.png" 
                  alt="Dr. M. Munivel - Consultant Dermatologist" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
