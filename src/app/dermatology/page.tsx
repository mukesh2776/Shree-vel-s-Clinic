import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDoctorByDepartment } from '@/data/doctors';
import { dermatologyServices } from '@/data/services';
import ServiceCard from '@/components/ui/ServiceCard';
import TreatmentCategoriesGrid from '@/components/home/TreatmentCategoriesGrid';
import TreatmentPhilosophy from '@/components/home/TreatmentPhilosophy';
import ResultsSection from '@/components/home/ResultsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import FAQSection from '@/components/home/FAQSection';
import AppointmentCTA from '@/components/home/AppointmentCTA';

export const metadata: Metadata = {
  title: 'Dermatology, Venereology & Aesthetic Surgery | Shree Vel\'s Clinic',
  description:
    'Evidence-based dermatology, PRP hair therapy, acne scar revision, CO₂ laser, chemical peels, and vitiligo care by Dr. M. Munivel, MD (DVL), Fellowship in Laser & Aesthetic Surgery in Thirukovilur.',
};

export default function DermatologyPage() {
  const doctor = getDoctorByDepartment('dermatology');

  return (
    <main className="bg-white">
      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-br from-light-green via-cream to-white py-16 md:py-24 border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-white/90 border border-primary/20 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Evidence-Based Dermatology &bull; Personalised Care
          </span>

          <h1 className="text-3.5xl sm:text-4.5xl md:text-5.5xl font-extrabold font-heading text-charcoal tracking-tight leading-tight mb-4">
            Clinical Dermatology, Laser &amp; Aesthetic Surgery
          </h1>

          <p className="text-base sm:text-lg text-secondary-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Comprehensive diagnostic workup and tailored therapeutic modalities led by <strong className="text-charcoal font-semibold">Dr. M. Munivel, MD (DVL), Fellowship in Laser &amp; Aesthetic Surgery</strong>. Where scientific precision meets compassionate skin and scalp care.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-charcoal font-medium">
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span> Standardised Protocols
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span> Modern In-Clinic Procedural Suite
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span> Trichoscopy &amp; Dermoscopy
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span> Ethical &bull; No Unrealistic Claims
            </span>
          </div>
        </div>
      </section>

      {/* Doctor Profile Banner */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container-custom max-w-4xl">
          {doctor && (
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-cream/50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-32 h-32 sm:w-40 sm:h-40 relative rounded-2xl overflow-hidden shadow-card flex-shrink-0 border-3 border-white bg-white">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Lead Consultant
                  </span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-primary font-semibold">TNMC Reg No: {doctor.registrationNumber}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                  {doctor.name}
                </h2>
                <p className="text-primary font-bold text-sm sm:text-base mt-0.5">
                  {doctor.qualifications}
                </p>
                <p className="text-secondary-text text-xs sm:text-sm mt-0.5 mb-3">
                  {doctor.title}
                </p>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  Registered with the Tamil Nadu Medical Council, Dr. Munivel completed his MBBS and MD (DVL) from Tirunelveli Medical College and holds a Fellowship in Laser and Aesthetic Surgery. He has extensive training in clinical dermatology, venereology, dermatosurgery, and advanced aesthetic procedures. Consultations adhere to strict evidence-based clinical guidelines.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Treatment Categories Grid (Point 21) */}
      <TreatmentCategoriesGrid />

      {/* Treatment Philosophy ("OUR APPROACH") (Point 22) */}
      <TreatmentPhilosophy />

      {/* Specialised Clinical Programs & Treatment Suites (Points 13-20) */}
      <section className="py-16 md:py-24 bg-cream/40" id="clinical-programs">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-light-green px-3.5 py-1.5 rounded-full mb-3">
              Department Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-charcoal tracking-tight">
              Specialised Clinical Programs &amp; Procedural Care
            </h2>
            <p className="text-sm sm:text-base text-secondary-text mt-3">
              Standardised, indication-based protocols selected strictly according to patient diagnosis, skin phototype, and tolerance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dermatologyServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTED CLINICAL OUTCOMES (Point 23) */}
      <ResultsSection />

      {/* Patient Google Reviews (With "See More on Google" Button) */}
      <TestimonialSection />

      {/* Dermatology FAQ Section */}
      <FAQSection />

      {/* Final Call-to-Action (Point 24) */}
      <AppointmentCTA />
    </main>
  );
}
