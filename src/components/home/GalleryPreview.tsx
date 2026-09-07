import Link from 'next/link';
import Image from 'next/image';
import { getGalleryByCategory } from '@/data/gallery';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function GalleryPreview() {
  const clinicImages = getGalleryByCategory('clinic');
  const previewImages = clinicImages.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-light-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading 
            title="Our Clinic" 
            subtitle="Take a look at our facilities"
            centered 
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {previewImages.map((image, index) => (
            <ScrollReveal key={image.id} animation="fade-up" delay={index * 150}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer bg-white">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View Image</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-12 text-center">
            <Link href="/gallery" className="btn-outline inline-block">
              View Full Gallery
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
