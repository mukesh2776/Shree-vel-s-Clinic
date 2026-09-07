import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDoctorByDepartment } from '@/data/doctors';
import { dermatologyServices } from '@/data/services';
import ServiceCard from '@/components/ui/ServiceCard';
import ResultsSection from '@/components/home/ResultsSection';
import FAQSection from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Dermatology, Venereology & Aesthetic Surgery | Shree Vel\'s Clinic',
  description:
    'Expert skin care, PRP hair growth, acne scar revision, laser treatments, and venereology by Dr. M. Munivel in Thirukovilur.',
};

export default function DermatologyPage() {
  const doctor = getDoctorByDepartment('dermatology');

  return (
    <main>
      <section className="bg-primary/5 py-16 md:py-24 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Dermatology, Venereology &amp; Aesthetic Surgery
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Comprehensive clinical dermatology and cutting-edge aesthetic solutions tailored to your unique skin and hair needs.
          </p>
        </div>
      </section>

      {/* Doctor Info */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom text-center max-w-3xl">
          {doctor && (
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 relative rounded-full overflow-hidden shadow-card mb-4 border-4 border-light-green">
                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-charcoal">{doctor.name}</h2>
              <p className="text-primary font-semibold">{doctor.qualifications}</p>
              <p className="text-secondary-text text-sm mb-2">{doctor.title}</p>
              <span className="text-xs bg-light-green text-primary px-3 py-1 rounded-full font-medium">
                TNMC Reg No: {doctor.registrationNumber} (Government Doctor)
              </span>
              <p className="text-sm text-secondary-text mt-4 max-w-xl leading-relaxed">
                {doctor.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-center text-charcoal mb-4">
            Our Specialized Dermatology Services
          </h2>
          <p className="text-center text-secondary-text text-sm max-w-2xl mx-auto mb-12">
            Evidence-based medical, laser, and surgical dermatological care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dermatologyServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Results Section (All 8 images + 3 videos) */}
      <ResultsSection />

      {/* Dermatology FAQ Section */}
      <FAQSection />

      {/* Appointment CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-[#125A40] text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Consult Dr. M. Munivel for Healthy Skin &amp; Hair
          </h2>
          <p className="text-white/80 text-sm mb-8">
            Appointments available Monday through Saturday. Get personalised diagnosis and treatment plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-primary">
              Book Dermatology Appointment
            </Link>
            <a
              href="https://wa.me/918778896736?text=Hello%20Dr.%20Munivel%2C%20I%20would%20like%20to%20consult%20for%20a%20skin/hair%20problem."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
