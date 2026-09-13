'use client';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+918778896736"
      className="fixed bottom-[5.5rem] right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group border-2 border-white/20"
      aria-label="Call Shree Vel's Clinic"
    >
      {/* Subtle pulse ring */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40"></span>

      {/* Phone Icon */}
      <svg
        className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
        Call Clinic
        {/* Tooltip arrow */}
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-[5px] border-transparent border-l-gray-900"></span>
      </span>
    </a>
  );
}
