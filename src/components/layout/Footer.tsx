import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#176B4D] text-white pt-16 pb-8 border-t-4 border-[#E58A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 bg-white w-max p-2 rounded-lg">
              <Image src="/images/logo.jpeg" alt="Shree Vel's Clinic Logo" width={40} height={40} className="rounded-md object-cover" />
              <span className="font-heading font-bold text-xl text-[#176B4D] tracking-tight pr-2">SHREE VEL&apos;S</span>
            </Link>
            <p className="text-white font-heading font-bold text-sm tracking-wide mt-1">
              Expert Dermatology &amp; Women&apos;s Health Care
            </p>
            <p className="text-accent-300 font-semibold text-xs tracking-wider uppercase">
              Evidence-Based Dermatology &bull; Personalised Care
            </p>
            <p className="text-[#EAF5EF] font-medium text-xs sm:text-sm mt-1 italic">
              &ldquo;Where Skin Meets Care, Women Meet Comfort&rdquo;
            </p>
            <p className="text-[#EAF5EF]/80 text-xs leading-relaxed mt-2">
              A specialist Skin Care &amp; Women&apos;s Health Clinic providing evidence-based clinical treatments in Dermatology, Venereology, Dermatosurgery, Obstetrics, and Gynaecology in Thirukovilur.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-[#E58A2B]">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Doctors', href: '/doctors' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#EAF5EF] hover:text-[#E58A2B] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-[#E58A2B]">Departments</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/dermatology" className="text-[#EAF5EF] hover:text-[#E58A2B] transition-colors text-sm">
                  Dermatology, Venereology & Aesthetics
                </Link>
              </li>
              <li>
                <Link href="/obstetrics-gynaecology" className="text-[#EAF5EF] hover:text-[#E58A2B] transition-colors text-sm">
                  Obstetrics & Gynaecology
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#EAF5EF] hover:text-[#E58A2B] transition-colors text-sm">
                  All Clinical Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-[#E58A2B]">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[#EAF5EF] text-sm">
                <svg className="w-5 h-5 mt-0.5 text-[#E58A2B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>No.84, South Street, Maruthamalaiyan Agencies Opposite, Thirukovilur - 605757</span>
              </li>
              <li className="flex items-center gap-3 text-[#EAF5EF] text-sm">
                <svg className="w-5 h-5 text-[#E58A2B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+918778896736" className="hover:text-white transition-colors">+91 8778896736</a>
              </li>
              <li className="flex items-center gap-3 text-[#EAF5EF] text-sm">
                <svg className="w-5 h-5 text-[#E58A2B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:munivelshree@gmail.com" className="hover:text-white transition-colors">munivelshree@gmail.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#EAF5EF]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#EAF5EF]/80 text-sm text-center md:text-left">
            Copyright © {new Date().getFullYear()} Shree Vel&apos;s Clinic. All rights reserved.
          </p>
          <div className="flex  gap-4">
            <a href="https://instagram.com/shree_vels" target="_blank" rel="noopener noreferrer" className="text-[#EAF5EF] hover:text-[#E58A2B] transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
