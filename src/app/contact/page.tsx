import { Metadata } from 'next';
import AppointmentForm from '@/components/ui/AppointmentForm';
import { clinic } from '@/data/clinic';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Shree Vel's Clinic in Thirukovilur. View our address, contact numbers, and schedule an appointment.",
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: clinic.fullName,
    image: 'https://www.shreevelsclinic.com/images/clinic-exterior.jpeg',
    '@id': 'https://www.shreevelsclinic.com',
    url: 'https://www.shreevelsclinic.com',
    telephone: `+91-${clinic.phone}`,
    email: clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address.street + ', ' + clinic.address.area,
      addressLocality: clinic.address.city,
      postalCode: clinic.address.pincode,
      addressRegion: clinic.address.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinic.coordinates.lat,
      longitude: clinic.coordinates.lng,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-primary/5 py-16 md:py-24 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to schedule an appointment or ask any
            questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-card">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
              Send us a message
            </h2>
            <AppointmentForm />
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-start gap-4">
                  <svg className="w-6 h-6 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{clinic.address.full}</span>
                </p>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div className="flex flex-col">
                    <a href={`tel:${clinic.phone}`} className="hover:underline">
                      +91 {clinic.phone}
                    </a>
                    {clinic.alternatePhone && (
                      <a href={`tel:${clinic.alternatePhone}`} className="hover:underline">
                        +91 {clinic.alternatePhone}
                      </a>
                    )}
                  </div>
                </div>
                <p className="flex items-center gap-4">
                  <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${clinic.email}`} className="hover:underline">
                    {clinic.email}
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <a
                    href={clinic.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    @shree_vels
                  </a>
                </p>
              </div>
            </div>

            {/* Doctor Consultation Timings */}
            <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-4 flex items-center justify-between">
                <span>Doctor Consultation Hours</span>
                <span className="text-xs font-semibold text-primary bg-light-green px-3 py-1 rounded-full">
                  Mon – Sat
                </span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="bg-light-green/60 p-3.5 rounded-xl border border-primary/10">
                  <div className="flex items-center justify-between font-bold text-primary mb-1">
                    <span className="font-heading">DERMATOLOGY CONSULTATION</span>
                    <span className="text-secondary-text font-normal">Dr. Munivel</span>
                  </div>
                  <p className="font-semibold text-charcoal text-xs">1:30 PM – 4:30 PM</p>
                  <p className="font-semibold text-charcoal text-xs">5:30 PM – 8:30 PM</p>
                </div>

                <div className="bg-accent-50/70 p-3.5 rounded-xl border border-accent/15">
                  <div className="flex items-center justify-between font-bold text-accent-700 mb-1">
                    <span className="font-heading">WOMEN’S HEALTH / OBGYN</span>
                    <span className="text-secondary-text font-normal">Dr. Bhavyashree S.P</span>
                  </div>
                  <p className="font-semibold text-charcoal text-xs">5:00 PM – 8:30 PM</p>
                </div>

                <p className="text-xs text-secondary-text italic pt-1">
                  *Sunday: Prior Appointment Only.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card h-64 bg-gray-200 relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.4!2d${clinic.coordinates.lng}!3d${clinic.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU3JzE2LjYiTiA3OcKwMTEnNTMuNSJF!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Shree Vel's Clinic Location"
              />
            </div>

            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-center w-full"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
