import Link from 'next/link';
import { doctors } from '@/data/doctors';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DoctorCard from '@/components/ui/DoctorCard';

export default function DoctorsPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading 
            title="Meet Our Doctors" 
            subtitle="Qualified specialists committed to your health and well-being"
            centered 
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <ScrollReveal key={doctor.id} animation="fade-up" delay={index * 150}>
              <DoctorCard doctor={doctor} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-12 text-center">
            <Link href="/doctors" className="btn-primary inline-block">
              View All Doctors
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
