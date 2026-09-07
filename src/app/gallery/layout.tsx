import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Shree Vel\'s Clinic',
  description: 'View photos of Shree Vel\'s Clinic, our doctors, facilities, and treatment results in Thirukovilur.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
