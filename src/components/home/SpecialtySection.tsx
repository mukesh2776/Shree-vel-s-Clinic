import Link from 'next/link';
import Image from 'next/image';
import { doctors } from '@/data/doctors';
import { dermatologyServices, obstetricsServices } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function SpecialtySection() {
  const dermaDoc = doctors.find((d) => d.department === 'dermatology');
  const obgynDoc = doctors.find((d) => d.department === 'obstetrics-gynaecology');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Specialist Care Under One Roof" centered />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Dermatology Card */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="card border-l-4 border-l-primary p-8 flex flex-col h-full bg-white shadow-card hover:shadow-card-hover transition-shadow rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                {dermaDoc?.image && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 bg-light-green">
                    <Image src={dermaDoc.image} alt={dermaDoc.name} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal">Dermatology, Venereology & Aesthetic Surgery</h3>
                  <p className="text-primary font-medium">{dermaDoc?.name}, {dermaDoc?.qualifications}</p>
                </div>
              </div>
              <p className="text-secondary-text mb-6 flex-grow">
                {dermaDoc?.description || "Expert skin, hair, and nail care with advanced aesthetic treatments."}
              </p>
              <ul className="space-y-2 mb-8">
                {dermatologyServices.slice(0, 4).map((service, idx) => (
                  <li key={idx} className="flex items-center text-sm text-charcoal">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0"></span>
                    {service.name}
                  </li>
                ))}
              </ul>
              <Link href="/dermatology" className="btn-secondary text-center mt-auto block">
                View Department
              </Link>
            </div>
          </ScrollReveal>

          {/* OB-GYN Card */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="card border-l-4 border-l-accent p-8 flex flex-col h-full bg-white shadow-card hover:shadow-card-hover transition-shadow rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                {obgynDoc?.image && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20 shrink-0 bg-cream">
                    <Image src={obgynDoc.image} alt={obgynDoc.name} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal">Obstetrics & Gynaecology</h3>
                  <p className="text-accent font-medium">{obgynDoc?.name}, {obgynDoc?.qualifications}</p>
                </div>
              </div>
              <p className="text-secondary-text mb-6 flex-grow">
                {obgynDoc?.description || "Comprehensive women's health services from adolescence to menopause."}
              </p>
              <ul className="space-y-2 mb-8">
                {obstetricsServices.slice(0, 4).map((service, idx) => (
                  <li key={idx} className="flex items-center text-sm text-charcoal">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 shrink-0"></span>
                    {service.name}
                  </li>
                ))}
              </ul>
              <Link href="/obstetrics-gynaecology" className="btn-outline text-center mt-auto block border-accent text-accent hover:bg-accent hover:text-white">
                View Department
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
