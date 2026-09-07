import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import SpecialtySection from '@/components/home/SpecialtySection';
import ClinicVideoSection from '@/components/home/ClinicVideoSection';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import FeaturedServices from '@/components/home/FeaturedServices';
import ResultsSection from '@/components/home/ResultsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GalleryPreview from '@/components/home/GalleryPreview';
import TestimonialSection from '@/components/home/TestimonialSection';
import FAQSection from '@/components/home/FAQSection';
import InstagramSection from '@/components/home/InstagramSection';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import LocationSection from '@/components/home/LocationSection';

export const metadata: Metadata = {
  title: "Shree Vel's Clinic | Dermatology & Women's Health Clinic in Thirukovilur",
  description:
    "Shree Vel's Skin Care & Women's Health Clinic in Thirukovilur provides specialized dermatology, aesthetic surgery, obstetrics, and gynaecology care by Dr. M. Munivel and Dr. Bhavyashree S.P. Where Skin Meets Care, Women Meets Comfort.",
  keywords: [
    'dermatologist in Thirukovilur',
    'skin specialist Thirukovilur',
    'gynecologist in Thirukovilur',
    'obstetrician Thirukovilur',
    'PRP hair treatment Thirukovilur',
    'acne scar removal Thirukovilur',
    'women healthcare Thirukovilur',
    'Shree Vels Clinic',
  ],
};

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="specialties">
        <SpecialtySection />
      </section>

      <section id="clinic-video">
        <ClinicVideoSection />
      </section>

      <section id="doctors">
        <DoctorsPreview />
      </section>

      <section id="services">
        <FeaturedServices />
      </section>

      <section id="results">
        <ResultsSection />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="gallery">
        <GalleryPreview />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="instagram">
        <InstagramSection />
      </section>

      <section id="appointment">
        <AppointmentCTA />
      </section>

      <section id="location">
        <LocationSection />
      </section>
    </main>
  );
}
