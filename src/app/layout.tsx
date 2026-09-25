import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import OpeningAnimation from '@/components/OpeningAnimation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingCallButton from '@/components/FloatingCallButton';
import FloatingAppointmentButton from '@/components/FloatingAppointmentButton';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Shree Vel's Clinic | Dermatology & Women's Health Clinic in Thirukovilur",
    template: "%s | Shree Vel's Clinic",
  },
  description:
    "Shree Vel's Skin Care & Women's Health Clinic offers specialist dermatology, venereology, aesthetic surgery, and obstetrics & gynaecology services in Thirukovilur, Tamil Nadu. Expert care by Dr. M. Munivel and Dr. Bhavyashree S.P.",
  keywords: [
    'dermatologist in Thirukovilur',
    'skin specialist Thirukovilur',
    'gynecologist Thirukovilur',
    'Shree Vels Clinic',
    'Dr. Munivel',
    'Dr. Bhavyashree',
    'best dermatology clinic Thirukovilur',
    'best gynecology clinic Thirukovilur',
    'skin care clinic Thirukovilur',
    'women health clinic Thirukovilur',
    'dermatology services Thirukovilur',
    'obstetrics and gynecology services Thirukovilur',
    'clinic in Thirukovilur',
    'skin treatment Thirukovilur',
    'dermatology consultation Thirukovilur',
    'gynecology consultation Thirukovilur',
    'aesthetic surgery Thirukovilur',
    'dermatology and gynecology clinic Thirukovilur',
  ],
  authors: [{ name: "Shree Vel's Clinic" }],
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.shreevelsclinic.com',
    siteName: "Shree Vel's Clinic",
    images: [
      {
        url: '/images/logo.jpeg',
        width: 800,
        height: 800,
        alt: "Shree Vel's Clinic Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.shreevelsclinic.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: "Shree Vel's Skin Care & Women's Health Clinic",
    url: 'https://www.shreevelsclinic.com',
    telephone: ['+91-7338861038', '+91-8778896736'],
    email: 'shreevelsclinic@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.84, South Street, Maruthamalaiyan Agencies Opposite',
      addressLocality: 'Thirukovilur',
      addressRegion: 'Tamil Nadu',
      postalCode: '605757',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.9833,
      longitude: 79.2083,
    },
    medicalSpecialty: ['Dermatology', 'Obstetrics and Gynecology'],
    image: '/images/logo.jpeg',
    priceRange: '$$',
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-charcoal bg-cream min-h-screen flex flex-col">
        <OpeningAnimation />
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24">{children}</main>
        <Footer />
        <FloatingCallButton />
        <WhatsAppButton />
        <FloatingAppointmentButton />
      </body>
    </html>
  );
}
