import { Metadata } from 'next';
import Image from 'next/image';
import AppointmentCTA from '@/components/home/AppointmentCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Shree Vel's Skin Care & Women's Health Clinic in Thirukovilur, founded by Dr. M. Munivel and Dr. Bhavyashree S.P.",
};

export default function AboutPage() {
  return (
    <main className="pb-16 md:pb-24">
      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            About Shree Vel&apos;s Clinic
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Dedicated to providing accessible, patient-focused specialist care to our local community in Thirukovilur.
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">Our Philosophy</h2>
            <p className="text-secondary-text mb-4 leading-relaxed">
              Shree Vel&apos;s Skin Care &amp; Women&apos;s Health Clinic, located in Thirukovilur, Tamil Nadu, is a specialist healthcare clinic offering comprehensive dermatology and women&apos;s health services. Founded by Dr. M. Munivel and Dr. Bhavyashree S.P, the clinic is dedicated to providing accessible, patient-focused specialist care to the local community.
            </p>
            <p className="text-primary font-heading font-semibold text-xl mt-6 italic">
              &ldquo;Where Skin Meets Care, Women Meets Comfort&rdquo;
            </p>
          </div>
          <div className="relative h-80 md:h-full rounded-2xl overflow-hidden shadow-card">
            <Image src="/images/clinic-exterior.jpeg" alt="Shree Vel's Clinic Exterior" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Mission/Values */}
      <section className="bg-light-green py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Patient-Focused', 'Accessible Care', 'Specialist Expertise', 'Compassionate Approach'].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-card text-center">
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{value}</h3>
                <p className="text-secondary-text text-sm">Committed to delivering the highest standard of tailored healthcare services.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
