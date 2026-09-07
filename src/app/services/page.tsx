import { Metadata } from 'next';
import Link from 'next/link';
import { dermatologyServices, obstetricsServices } from '@/data/services';
import ServiceCard from '@/components/ui/ServiceCard';

export const metadata: Metadata = {
  title: 'Our Services | Shree Vel\'s Clinic',
  description: 'Explore the full range of dermatology and obstetrics & gynaecology services available at Shree Vel\'s Clinic.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-primary/5 py-16 md:py-24 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">Our Services</h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Comprehensive specialist care tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-2">Dermatology Services</h2>
            <p className="text-primary mb-8 font-medium">Consultant: Dr. M. Munivel</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dermatologyServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-2">Obstetrics & Gynaecology</h2>
            <p className="text-primary mb-8 font-medium">Consultant: Dr. Bhavyashree S.P</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {obstetricsServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/appointment" className="btn-primary inline-block">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
