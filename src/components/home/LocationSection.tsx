'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { clinic, openingHours } from '@/data/clinic';

export default function LocationSection() {
  const whatsappUrl = `https://wa.me/918778896736?text=${encodeURIComponent(
    "Hello Shree Vel's Clinic! I would like to visit the clinic and need appointment details."
  )}`;

  return (
    <section className="py-16 md:py-24 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Visit Shree Vel's Clinic"
            subtitle="Conveniently situated in the heart of Thirukovilur with easy road connectivity"
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-stretch">
          {/* Map Embed Container */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal animation="fade-right">
              <div className="w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-card border border-gray-200 bg-gray-100 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5!2d79.2083!3d11.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU5JzAwLjAiTiA3OcKwMTInMzAuMCJF!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Shree Vel's Clinic Location Map in Thirukovilur"
                  className="w-full h-full"
                />
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/95 text-primary text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:bg-primary hover:text-white transition-all flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Location & Timings Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="bg-gradient-to-br from-light-green/40 to-cream/70 p-6 sm:p-8 rounded-3xl border border-light-green h-full flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-6">
                    Location &amp; Timings
                  </h3>

                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-charcoal">Clinic Address</h4>
                        <p className="text-xs sm:text-sm text-secondary-text mt-0.5 leading-relaxed">
                          {clinic.address.full}
                        </p>
                      </div>
                    </div>

                    {/* Consultation Timings */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth={2} />
                          <polyline points="12 6 12 12 16 14" strokeWidth={2} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-heading font-bold text-sm text-charcoal">Doctor Consultation Hours</h4>
                          <span className="text-[11px] text-primary font-semibold">{openingHours.consultationDays}</span>
                        </div>

                        <div className="mt-2.5 space-y-2">
                          {/* Dermatology */}
                          <div className="bg-light-green/60 p-2.5 rounded-lg border border-primary/10">
                            <div className="flex items-center justify-between text-xs font-bold text-primary mb-0.5">
                              <span>DERMATOLOGY CONSULTATION</span>
                              <span className="text-[10px] font-medium text-secondary-text">Dr. Munivel</span>
                            </div>
                            <p className="text-xs text-charcoal font-semibold">1:30 PM – 4:30 PM &bull; 5:30 PM – 8:30 PM</p>
                          </div>

                          {/* Women's Health / OBGYN */}
                          <div className="bg-accent-50/70 p-2.5 rounded-lg border border-accent/15">
                            <div className="flex items-center justify-between text-xs font-bold text-accent-700 mb-0.5">
                              <span>WOMEN’S HEALTH / OBGYN</span>
                              <span className="text-[10px] font-medium text-secondary-text">Dr. Bhavyashree S.P</span>
                            </div>
                            <p className="text-xs text-charcoal font-semibold">5:00 PM – 8:30 PM</p>
                          </div>
                        </div>

                        <p className="text-[11px] text-accent font-medium mt-2">
                          {openingHours.sunday}
                        </p>
                      </div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-charcoal">Helpline &amp; Appointments</h4>
                        <a href="tel:8778896736" className="text-xs sm:text-sm text-primary font-bold hover:underline block mt-0.5">
                          +91 87788 96736
                        </a>
                        <p className="text-[11px] text-secondary-text">munivelshree@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row gap-3">
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center flex-1 text-xs sm:text-sm py-3"
                  >
                    Get Directions
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-center flex-1 text-xs sm:text-sm py-3"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
