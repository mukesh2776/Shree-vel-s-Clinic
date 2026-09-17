'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface CategoryGroup {
  title: string;
  icon: string;
  badge: string;
  items: string[];
  description: string;
}

const categories: CategoryGroup[] = [
  {
    title: 'SKIN',
    icon: '🩺',
    badge: 'Clinical Care',
    description: 'Evidence-based medical management for common and chronic dermatological conditions.',
    items: ['Acne', 'Eczema', 'Psoriasis', 'Vitiligo', 'Pigmentation', 'Skin Allergy'],
  },
  {
    title: 'HAIR & SCALP',
    icon: '💆',
    badge: 'Trichology',
    description: 'Trichoscopy-guided diagnostics and targeted growth factor therapies for hair and scalp wellness.',
    items: ['Hair Loss', 'Alopecia Areata', 'Dandruff', 'Scalp Disorders'],
  },
  {
    title: 'AESTHETIC DERMATOLOGY',
    icon: '✨',
    badge: 'Skin Aesthetics',
    description: 'Scientifically calibrated procedural rejuvenation using advanced equipment including Microneedling Radiofrequency (MRF) machine for acne scars.',
    items: ['Chemical Peels', 'Microneedling', 'MRF (Microneedling RF)', 'Microdermabrasion', 'Laser', 'Skin Rejuvenation'],
  },
  {
    title: 'DERMATOLOGIC PROCEDURES',
    icon: '🔬',
    badge: 'Clinical Procedures',
    description: 'Minor surgical and energy-based interventions performed under strict sterile protocols.',
    items: ['CO₂ Laser', 'RF / Electrosurgery', 'Benign Lesion Procedures', 'Scar Procedures'],
  },
  {
    title: 'ADVANCED / COMBINATION CARE',
    icon: '🧬',
    badge: 'Tailored Protocols',
    description: 'Multi-modality protocols formulated to target complex, multi-factorial skin and hair concerns.',
    items: ['Combination Therapy', 'Personalised Treatment Plans', 'Regenerative Hair Therapies'],
  },
];

export default function TreatmentCategoriesGrid() {
  return (
    <section className="py-16 md:py-24 bg-cream/60 border-y border-gray-100" id="treatment-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Comprehensive Dermatology & Treatment Categories"
            subtitle="Explore our specialised clinical departments, advanced procedural suites, and personalised therapies in Thirukovilur"
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {categories.map((cat, idx) => (
            <ScrollReveal key={cat.title} animation="fade-up" delay={idx * 80}>
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-gray-100 flex flex-col justify-between transition-all duration-300 h-full group hover:border-primary/30">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2.5 rounded-xl bg-light-green/80 flex-shrink-0 group-hover:scale-110 transition-transform">
                        {cat.icon}
                      </span>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-charcoal group-hover:text-primary transition-colors tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-semibold text-primary bg-light-green px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs text-secondary-text leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Pills of Treatments */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block text-xs font-medium text-charcoal bg-gray-50 hover:bg-light-green/50 border border-gray-200/70 hover:border-primary/30 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <Link
                    href="/appointment"
                    className="font-semibold text-primary hover:text-accent inline-flex items-center gap-1 group/link"
                  >
                    <span>Consult Specialist</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-[11px] text-secondary-text">Dr. M. Munivel, MD (DVL), Fellowship in Laser & Aesthetic Surgery</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Quick Consultation Highlight Card */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="bg-gradient-to-br from-primary to-[#0E4A34] text-white rounded-2xl p-6 sm:p-7 shadow-card flex flex-col justify-between h-full">
              <div>
                <span className="inline-block text-[11px] font-semibold text-accent-200 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Evidence-Based Care
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                  Not Sure Which Treatment You Need?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                  Every skin and scalp journey starts with an accurate diagnosis. Schedule a comprehensive dermoscopy evaluation with Dr. M. Munivel.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/appointment"
                  className="btn-primary w-full text-center text-xs sm:text-sm justify-center py-3 shadow-md"
                >
                  Book In-Person Consultation
                </Link>
                <a
                  href="tel:+917338861038"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-white/30 text-xs font-semibold text-white hover:bg-white/10 transition-colors text-center"
                >
                  <span>Quick Phone Inquiry: +91 73388 61038</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
