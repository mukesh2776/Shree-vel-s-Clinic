'use client';

import Link from 'next/link';
import { clinic } from '@/data/clinic';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AppointmentCTA() {
  const whatsappUrl = `https://wa.me/91${clinic.whatsapp}?text=${encodeURIComponent(
    "Hello Shree Vel's Clinic! I would like to book a consultation."
  )}`;

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-[#125A40] to-[#0A3927] text-white relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          
          {/* Tagline Pill */}
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-300 bg-white/10 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/15">
            Personalised &bull; Evidence-Based Care
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 text-white">
            HAVE A SKIN OR HAIR CONCERN?
          </h2>

          <p className="text-lg sm:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
            Start with a specialist consultation.
          </p>

          {/* Three Main Action Buttons: [BOOK APPOINTMENT] [WHATSAPP] [CALL NOW] */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-14">
            
            {/* BOOK APPOINTMENT */}
            <Link
              href="/appointment"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-500 text-white rounded-xl font-heading font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>BOOK APPOINTMENT</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-heading font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WHATSAPP</span>
            </a>

            {/* CALL NOW */}
            <a
              href={`tel:+91${clinic.phone}`}
              className="w-full sm:w-auto px-7 py-4 bg-white/15 hover:bg-white text-white hover:text-charcoal border border-white/30 rounded-xl font-heading font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Underneath: Clinic Identity & Direct Channels */}
          <div className="pt-8 border-t border-white/15 max-w-3xl mx-auto">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-wide">
              {clinic.name}
            </h3>
            <p className="text-xs sm:text-sm text-accent-200 font-medium mb-6">
              Expert Dermatology &amp; Women&apos;s Health Care
            </p>

            {/* Contact Channels Row: Phone, WhatsApp, Email, Google Maps, Instagram */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-gray-200">
              <a
                href={`tel:+91${clinic.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
              >
                <span>📞 Phone:</span>
                <span className="font-semibold text-white">+91 {clinic.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
              >
                <span>💬 WhatsApp:</span>
                <span className="font-semibold text-white">+91 {clinic.whatsapp}</span>
              </a>

              <a
                href={`mailto:${clinic.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
              >
                <span>📧 Email:</span>
                <span className="font-semibold text-white">{clinic.email}</span>
              </a>

              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
              >
                <span>📍 Google Maps</span>
              </a>

              <a
                href={clinic.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
              >
                <span>📷 Instagram: @shree_vels</span>
              </a>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
