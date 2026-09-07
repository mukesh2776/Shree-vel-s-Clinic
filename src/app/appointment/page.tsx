import { Metadata } from 'next';
import AppointmentForm from '@/components/ui/AppointmentForm';
import { clinic } from '@/data/clinic';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    "Schedule your consultation with Dr. M. Munivel or Dr. Bhavyashree S.P at Shree Vel's Clinic in Thirukovilur.",
};

export default function AppointmentPage() {
  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    "Hello Shree Vel's Clinic, I would like to book an appointment."
  )}`;

  return (
    <main>
      <section className="bg-primary/5 py-16 text-center border-b border-gray-100">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Schedule your consultation with our specialists
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom grid md:grid-cols-[1fr_350px] gap-12">
          {/* Main Form Area */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-card border border-gray-100">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Appointment Details
            </h2>
            <AppointmentForm />
            <p className="mt-6 text-sm text-secondary-text italic text-center">
              *All appointments are subject to availability. Our team will confirm your
              appointment via WhatsApp or phone.
            </p>
          </div>

          {/* Side Panel Info */}
          <div className="space-y-6">
            <div className="bg-light-green p-6 rounded-2xl">
              <h3 className="font-heading font-bold text-lg text-charcoal mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Clinic Hours
              </h3>
              <ul className="space-y-2 text-secondary-text text-sm">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Mon - Sat</span>
                  <span className="font-medium text-charcoal">Contact for hours</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Sunday</span>
                  <span className="font-medium text-accent">By Appointment Only</span>
                </li>
              </ul>
              <p className="text-xs text-secondary-text mt-3 italic">
                Please contact the clinic to confirm current consultation hours.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <h3 className="font-heading font-bold text-lg text-charcoal mb-4">
                Quick Contact
              </h3>
              <div className="space-y-4 text-secondary-text">
                <a
                  href={`tel:${clinic.phone}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <span className="font-medium">{clinic.phone}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
                >
                  <div className="bg-[#25D366]/10 p-2 rounded-full">
                    <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-medium">WhatsApp Us</span>
                </a>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-gray-100">
                  <div className="bg-gray-100 p-2 rounded-full shrink-0 mt-1">
                    <svg className="w-4 h-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-sm">{clinic.address.full}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
