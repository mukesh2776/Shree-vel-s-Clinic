import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDoctorByDepartment } from '@/data/doctors';
import { obstetricsServices } from '@/data/services';
import ServiceCard from '@/components/ui/ServiceCard';
import FAQSection from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Obstetrics & Gynaecology | Shree Vel\'s Clinic',
  description:
    'Compassionate women\'s healthcare including pre-conceptional counselling, antenatal care, PCOD treatment, and infertility evaluation by Dr. Bhavyashree S.P in Thirukovilur.',
};

export default function ObstetricsGynaecologyPage() {
  const doctor = getDoctorByDepartment('obstetrics-gynaecology');

  return (
    <main>
      <section className="bg-primary/5 py-16 md:py-24 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Obstetrics &amp; Gynaecology
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Providing a supportive, compassionate, and private environment for comprehensive women&apos;s health care across all life stages.
          </p>
        </div>
      </section>

      {/* Doctor Profile Info */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom text-center max-w-3xl">
          {doctor && (
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 relative rounded-full overflow-hidden shadow-card mb-4 border-4 border-accent/20">
                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-charcoal">{doctor.name}</h2>
              <p className="text-accent font-semibold">{doctor.qualifications}</p>
              <p className="text-secondary-text text-sm mb-2">{doctor.title}</p>
              <span className="text-xs bg-cream text-accent px-3 py-1 rounded-full font-medium border border-accent/20">
                TNMC Reg No: {doctor.registrationNumber} 
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
            Women&apos;s Health Services
          </h2>
          <p className="text-center text-secondary-text text-sm max-w-2xl mx-auto mb-12">
            Tailored clinical guidance for pregnancy, menstrual balance, and reproductive wellness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obstetricsServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>


      {/* Women's Health FAQ */}
      <FAQSection />

      {/* Appointment CTA */}
      <section className="py-16 bg-gradient-to-r from-[#176B4D] to-[#0E4A34] text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Consult Dr. Bhavyashree S.P for Expert Care
          </h2>
          <p className="text-white/80 text-sm mb-8">
            Confidential and respectful consultation for pregnancy, PCOD, and gynaecological concerns in Thirukovilur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-primary bg-accent hover:bg-accent-500">
              Book Gynaecology Consultation
            </Link>
            <a
              href="https://wa.me/918778896736?text=Hello%20Dr.%20Bhavyashree%2C%20I%20would%20like%20to%20consult%20for%20women's%20health."
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
