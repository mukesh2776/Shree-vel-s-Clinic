import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-cream">
      <div className="w-32 h-32 relative mb-8 rounded-full overflow-hidden shadow-card bg-white p-4">
        <Image 
          src="/images/logo.jpeg" 
          alt="Shree Vel's Clinic Logo" 
          fill 
          className="object-contain"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mb-6">Page Not Found</h2>
      <p className="text-secondary-text mb-10 max-w-md">
        We&apos;re sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Return to Home
      </Link>
    </main>
  );
}
