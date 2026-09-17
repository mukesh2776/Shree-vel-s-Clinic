'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'DIAGNOSE',
    heading: 'Understand The Underlying Condition',
    description:
      'We conduct detailed clinical examinations, dermoscopic scalp analysis, and thorough history evaluations to identify root triggers rather than masking symptoms.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'PERSONALISE',
    heading: 'Tailored To Your Unique Biology',
    description:
      'Treatment is chosen according to your specific medical diagnosis, severity, Fitzpatrick skin type, lifestyle, and individual goals — never a generic package.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'COMBINE WHEN APPROPRIATE',
    heading: 'Synergistic Multi-Modality Care',
    description:
      'When clinically indicated, medical therapies, topical regimens, chemical peels, and energy-based procedures are combined to maximize safe, evidence-based results.',
    icon: '🧬',
  },
  {
    number: '04',
    title: 'FOLLOW UP',
    heading: 'Monitor, Measure & Adapt',
    description:
      'We document progressive clinical photographic milestones, assess tissue response, and adapt therapy proactively to ensure sustainable skin and hair health.',
    icon: '📈',
  },
];

export default function TreatmentPhilosophy() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="our-approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-light-green px-3.5 py-1.5 rounded-full mb-3">
              Treatment Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold font-heading text-charcoal tracking-tight">
              OUR APPROACH
            </h2>
            <p className="text-sm sm:text-base text-secondary-text mt-3">
              Evidence-based dermatological methodology practiced by Dr. M. Munivel, MD (DVL), Fellowship in Laser &amp; Aesthetic Surgery
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.number} animation="fade-up" delay={idx * 100}>
              <div className="bg-cream/50 rounded-2xl p-6 sm:p-7 border border-gray-100/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group hover:border-primary/30 relative">
                
                {/* Step Number Top-Right */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl p-3 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </span>
                  <span className="text-2xl font-extrabold font-heading text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-wider text-primary uppercase block mb-1">
                    {step.title}
                  </span>
                  <h3 className="font-heading font-bold text-base text-charcoal mb-2.5 group-hover:text-primary transition-colors">
                    {step.heading}
                  </h3>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-primary font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Primary Branding Statement Banner */}
        <ScrollReveal animation="fade-up" delay={450}>
          <div className="mt-14 max-w-4xl mx-auto text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-light-green via-white to-light-green border border-primary/20 shadow-card">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
              Our Clinical Commitment
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-primary leading-snug">
              &ldquo;Not one treatment for everyone — the right treatment for the right patient.&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-secondary-text mt-3 max-w-xl mx-auto">
              We focus strictly on medical indications, patient safety, realistic timelines, and ethical medical care.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
