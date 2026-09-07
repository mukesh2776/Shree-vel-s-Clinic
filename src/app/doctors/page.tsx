import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { doctors } from '@/data/doctors';

export const metadata: Metadata = {
  title: 'Our Doctors',
  description:
    "Meet our specialist doctors at Shree Vel's Clinic: Dr. M. Munivel (Dermatologist) and Dr. Bhavyashree S.P (Obstetrician & Gynaecologist) in Thirukovilur.",
};

export default function DoctorsPage() {
  const jsonLd = doctors.map((doc) => ({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doc.name,
    image: `https://www.shreevelsclinic.com${doc.image}`,
    jobTitle: doc.title,
    medicalSpecialty:
      doc.department === 'dermatology'
        ? 'Dermatology'
        : 'Obstetrics and Gynecology',
    url: 'https://www.shreevelsclinic.com/doctors',
  }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Meet Our Specialist Doctors
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Qualified and experienced specialists committed to your health and
            well-being.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-16 md:py-24">
        <div className="container-custom flex flex-col gap-24">
          {doctors.map((doctor, idx) => (
            <div
              key={doctor.id}
              className={`flex flex-col ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-12 items-center`}
            >
              <div className="w-full md:w-1/3 relative aspect-square rounded-2xl overflow-hidden shadow-card">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.title} at Shree Vel's Clinic`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-heading font-bold text-charcoal mb-2">
                  {doctor.name}
                </h2>
                <p className="text-primary font-semibold mb-1">
                  {doctor.qualifications}
                </p>
                <p className="text-secondary-text mb-4">{doctor.title}</p>
                <div className="bg-light-green inline-block px-3 py-1 rounded-full text-sm text-primary mb-6">
                  TNMC Reg No: {doctor.registrationNumber}
                </div>
                <p className="text-charcoal mb-6 leading-relaxed">
                  {doctor.description}
                </p>

                <h3 className="font-heading font-semibold text-lg mb-4">
                  Specialisations:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {doctor.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center text-secondary-text text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link href="/appointment" className="btn-primary inline-block">
                  Book Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
