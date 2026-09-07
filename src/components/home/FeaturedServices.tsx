import Link from 'next/link';
import { dermatologyServices, obstetricsServices } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ServiceCard from '@/components/ui/ServiceCard';

export default function FeaturedServices() {
  const featuredServices = [
    ...dermatologyServices.slice(0, 3),
    ...obstetricsServices.slice(0, 3)
  ];

  return (
    <section className="py-16 md:py-24 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading 
            title="Our Services" 
            subtitle="Comprehensive specialist healthcare under one roof"
            centered 
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredServices.map((service, index) => (
            <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={600}>
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
