'use client';

import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InstagramSection() {
  const instagramUrl = 'https://www.instagram.com/shree_vels/';

  const instagramPosts = [
    {
      id: 'post-1',
      title: 'PRP Hair Regrowth Results',
      tag: '#HairCare #PRPTreatment',
      desc: 'Watch the clinical progress of patient hair follicle density after structured growth factor therapy.',
      icon: '💆‍♂️',
    },
    {
      id: 'post-2',
      title: 'Healthy Pregnancy Tips',
      tag: '#WomensHealth #AntenatalCare',
      desc: 'Dr. Bhavyashree S.P sharing essential nutrition and health monitoring habits for expectant mothers.',
      icon: '🤰',
    },
    {
      id: 'post-3',
      title: 'Skin Care & Sunscreen Myths',
      tag: '#DermatologyTips #SkinCare',
      desc: 'Dr. M. Munivel explains the truth about sun damage, SPF protection, and acne prevention.',
      icon: '✨',
    },
    {
      id: 'post-4',
      title: 'Understanding PCOD & Hormones',
      tag: '#PCODAwareness #Gynaecology',
      desc: 'Breaking down symptoms, lifestyle interventions, and medical solutions for menstrual health.',
      icon: '🩺',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Connect With Us on Instagram"
            subtitle="Follow @shree_vels for daily skin care advice, women's health education, and clinic updates"
            centered
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Official QR Card */}
          <div className="lg:col-span-4">
            <ScrollReveal animation="fade-right">
              <div className="card bg-gradient-to-br from-cream via-white to-light-green/40 p-6 sm:p-8 border border-accent/20 text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                <h3 className="font-heading font-bold text-lg text-charcoal">
                  @shree_vels
                </h3>
                <p className="text-xs text-secondary-text mt-1 mb-5">
                  Scan the QR code or click below to follow our clinic on Instagram
                </p>

                <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white p-2 mb-6">
                  <Image
                    src="/images/instagram-qr.jpeg"
                    alt="Shree Vel's Clinic Instagram QR Code"
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-sm font-semibold hover:opacity-95 shadow-sm transition-all"
                >
                  <span>Follow on Instagram</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Posts / Educational Reels Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {instagramPosts.map((post, index) => (
                <ScrollReveal key={post.id} animation="fade-up" delay={index * 100}>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-6 bg-cream/40 hover:bg-white border border-gray-100 hover:border-accent/40 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{post.icon}</span>
                        <span className="text-[11px] font-semibold text-accent group-hover:underline">
                          {post.tag}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-charcoal mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                        {post.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-primary font-semibold">
                      <span>View Reel / Post</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
