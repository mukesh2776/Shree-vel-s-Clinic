'use client';

import Link from 'next/link';

export default function FloatingAppointmentButton() {
  return (
    <Link
      href="/appointment"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-accent text-white font-heading font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-accent-500 transition-all duration-300 group appointment-pulse"
      aria-label="Book an Appointment"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30"></span>

      {/* Calendar icon */}
      <svg
        className="w-5 h-5 relative z-10 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      </svg>

      {/* Text — hidden on very small screens, visible on sm+ */}
      <span className="relative z-10 hidden sm:inline">Book Appointment</span>

      {/* Tooltip for mobile (icon-only mode) */}
      <span className="absolute left-full ml-3 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none sm:hidden">
        Book Appointment
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-gray-900"></span>
      </span>
    </Link>
  );
}
